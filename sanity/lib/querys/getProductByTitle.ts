import { defineQuery } from "next-sanity";
import { sanityFetch } from "../live";

export const getProductBySlug = async (slug: string) => {
  const ALL_CATEGORY_BY_SLUG_QUERY = defineQuery(`
        *[_type == "products" && references(*[_type == "category" && slug.current == $slug])] | order(_createdAt desc)
    `);

  try {
    const products = await sanityFetch({
      query: ALL_CATEGORY_BY_SLUG_QUERY,
      params: {
        slug,
      },
    });
    return products.data || [];
  } catch (error) {
    console.log(error);
    return [];
  }
};
