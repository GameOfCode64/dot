import { defineQuery } from "next-sanity";
import { sanityFetch } from "../live";

export async function getMyOrders(userId: string) {
  if (!userId) {
    throw new Error("UserId NotFound");
  }

  const MY_ORDERS_QUERY = defineQuery(`
    *[_type == "orders" && clerkUserId == $userId] | order(orderDate desc) {
        ...,
        products[]{
        ...,
        product ->
        }
    }
    `);

  try {
    const orders = await sanityFetch({
      query: MY_ORDERS_QUERY,
      params: { userId },
    });

    return orders.data || [];
  } catch (error) {
    console.error("Can't able to fetch Orders", error);
    throw new Error("Can't able to fetch Orders");
  }
}
