import ProductCard from "@/components/shop/ProductCard";
import { getAllProducts } from "@/sanity/lib/querys/getallProducts";
import React from "react";

const page = async () => {
  const products = await getAllProducts();
  return (
    <div className="w-full h-full md:px-20 px-8 py-8">
      <ProductCard products={products} />
    </div>
  );
};

export default page;
