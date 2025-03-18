import { client } from "@/sanity/lib/client";

async function getAllProduct() {
  const query = `
        *[_type == "product"]{
                _id,
                title,
                description,
                price,
                "slug": slug.current,
                "imageUrl": images[0].asset->url,
                "additionalImageUrls": additionalImages[].asset->url,
                "category": category->title
        }
    `;

  const data = await client.fetch(query);
  return data;
}

export default getAllProduct;
