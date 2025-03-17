import { client } from "@/sanity/lib/client";

async function getAllProduct() {
  const query = `
        *[_type == "product"]{
                _id,
                title,
                description,
                price,
                "slug": slug.current,
                "imageUrl": image.asset->url
        }
    `;

  const data = await client.fetch(query);
  return data;
}

export default getAllProduct;
