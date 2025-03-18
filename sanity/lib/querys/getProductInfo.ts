import { client } from "@/sanity/lib/client";

export const getProductInfo = async (slug: string) => {
  const query = `*[_type == "product" && slug.current == $slug][0]{
                _id,
                title,
                description,
                price,
                "slug": slug.current,
                "imageUrl": images[0].asset->url,
                "additionalImageUrls": additionalImages[].asset->url,
                "category": category->title
    }`;

  const params = { slug };

  const product = await client.fetch(query, params);
  return product;
};
