"use server";

import { imageUrl } from "@/lib/imageUrlBuilder";
import stripe from "@/lib/stripe";
import { BasketItem } from "@/store/store";

export type Metadata = {
  orderNumber: string;
  customerName: string;
  customerEmail: string;
  clerkUserId: string;
  reserver_name: string;
  phone_name: string;
  address: string;
};

export type groupBasketItem = {
  product: BasketItem["product"];
  quantity: number;
};

export async function createCheckoutSession(
  item: groupBasketItem[],
  metadata: Metadata
) {
  try {
    const itemWithoutPrice = item.filter((item) => item.product.price === 0);
    if (itemWithoutPrice.length > 0) {
      throw new Error("Item without price");
    }

    const customers = await stripe.customers.list({
      email: metadata.customerEmail,
      limit: 1,
    });

    let customerId: string | undefined;
    if (customers.data.length > 0) {
      customerId = customers.data[0].id;
    }

    const sessionUrl = await stripe.checkout.sessions.create({
      mode: "payment",
      customer: customerId,
      customer_creation: customerId ? undefined : "always",
      customer_email: !customerId ? metadata.customerEmail : undefined,
      metadata,
      allow_promotion_codes: true,
      success_url: `${process.env.NEXT_PUBLIC_BASE_URL}/shop/success?session_id={CHECKOUT_SESSION_ID}&orderNumber=${metadata.orderNumber}`,
      cancel_url:
        `${`https://${process.env.VERCEL_URL}`}` ||
        `${process.env.NEXT_PUBLIC_BASE_URL}/basket`,
      line_items: item.map((item) => ({
        price_data: {
          currency: "inr",
          unit_amount: Math.round(item.product.price! * 100),
          product_data: {
            name: item.product.name || "Unnamed Product",
            description: `Product Id: ${item.product._id}`,
            metadata: {
              id: item.product._id,
            },
            images: item.product.image
              ? [imageUrl(item.product.image).url()]
              : undefined,
          },
        },
        quantity: item.quantity,
      })),
    });
    return sessionUrl.url;
  } catch (error) {
    console.error(error);
    throw error;
  }
}
