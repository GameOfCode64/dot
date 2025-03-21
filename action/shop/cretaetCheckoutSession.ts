"use server";

import stripe from "@/lib/stripe";
import { BasketItem } from "@/store/store";

export type Metadata = {
  orderNumber: string;
  customerName: string;
  customerEmail: string;
  clerkUserId: string;
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

    let customerId : string | undefined;
    if(customers.data.length > 0){
     customerId = customers.data[0].id;
    }
    
    
  } catch (error) {
    console.error(error);
    throw error;
  }
}
