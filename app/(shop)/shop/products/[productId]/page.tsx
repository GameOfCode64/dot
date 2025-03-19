import React from "react";

import { getProductInfo } from "@/sanity/lib/querys/getProductInfo";
import Loader from "@/components/Loader";
import ProductInfo from "@/components/shop/ProductInfo";

interface ProductsProps {
  params: Promise<{ productId: string }>;
}

interface ProductProps {
  _id: string;
  title: string;
  description: string;
  price: number;
  slug: string;
  imageUrl: string;
  additionalImageUrls: string[];
  category: string;
}

const Page = async ({ params }: ProductsProps) => {
  const id = await (await params).productId;
  // const data: ProductProps = await getProductInfo(id);

  // if (!data) {
  //   return <Loader />;
  // }

  return (
    <div className="md:px-20 px-8 py-8">{/* <ProductInfo {...data} /> */}</div>
  );
};

export default Page;
