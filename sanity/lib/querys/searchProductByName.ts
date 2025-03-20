import { defineQuery } from "next-sanity";
import { sanityFetch } from "../live";

export const searchProductByName = async (searchParam: String) => {
  const SEARCH_PRODUCT_QUERY = defineQuery(`
        *[_type == "products" && name match $searchParam]  | order(_createdAt desc)
        `);

  try {
    const products = await sanityFetch({
      query: SEARCH_PRODUCT_QUERY,
      params: {
        searchParam: `${searchParam}*`,
      },
    });
    return products.data || [];
  } catch (error) {
    console.error("Error fetching products", error);
    return [];
  }
};
