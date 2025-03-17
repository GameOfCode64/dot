"use client";
import Image from "next/image";
import { Button } from "../ui/button";
import Loader from "@/components/Loader";
import React, { useEffect, useState } from "react";
import { formatCurrency } from "@/utils/currencyFormate";
import getAllProduct from "@/sanity/lib/querys/getallProducts";

interface productCard {
  _id: string;
  title: string;
  price: number;
  slug: string;
  imageUrl: string;
}

const ProductCard = () => {
  const [products, setProducts] = useState<productCard[]>([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const fetchTreks = async () => {
      setLoading(true);
      const data = await getAllProduct();
      setProducts(data);
      setLoading(false);
    };
    fetchTreks();
  }, []);

  if (loading) {
    return <Loader />;
  }

  return (
    <div className="w-full grid md:grid-cols-3 grid-cols-1 lg:grid-cols-4 gap-5">
      {products.map((item, index) => (
        <div className="h-[500px] px-2 py-3" key={index}>
          <div className="w-full p-1 h-[350px] rounded-3xl bg-white cursor-pointer">
            <Image
              src={item.imageUrl}
              alt="product"
              className="w-full h-full object-center"
              width={350}
              height={350}
            />
          </div>
          <div className="flex flex-col gap-3 my-3">
            <div className="flex  items-center justify-between">
              <p className="text-wrap font-semibold text-lg">{item.title}</p>
              <p className="text-emerald-500">{formatCurrency(item.price)}</p>
            </div>
            <Button className="cursor-pointer">Add to Cart</Button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ProductCard;
