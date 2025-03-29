import CategoryFilter from "@/components/CategoryFilter";
import HeroSection from "@/components/HeroSection";
import ProductCard from "@/components/shop/ProductCard";
import { getAllProducts } from "@/sanity/lib/querys/getallProducts";
import { getAllCategory } from "@/sanity/lib/querys/getCategory";
import React from "react";

const page = async () => {
  const products = await getAllProducts();
  const categories = await getAllCategory();
  return (
    <div className="w-full h-full md:px-20 px-4 py-8 flex flex-col gap-5">
      <HeroSection />
      <h1 className="text-center text-4xl font-bold my-12">Our Products</h1>
      <CategoryFilter categories={categories} />
      <ProductCard products={products} />
    </div>
  );
};

export default page;
