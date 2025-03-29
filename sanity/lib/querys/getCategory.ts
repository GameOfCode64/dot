import { defineQuery } from "next-sanity";
import { sanityFetch } from "../live";

export const getAllCategory = async () => {
  const ALL_CATEGORY_QUERY = defineQuery(`
    *[_type == "category"]  | order(_createdAt desc)

    `);

  try {
    const category = await sanityFetch({
      query: ALL_CATEGORY_QUERY,
    });
    return category.data || [];
  } catch (error) {
    console.error("Error fetching products", error);
    return [];
  }
};
