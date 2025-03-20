"use client";

import React from "react";
import Image from "next/image";
import { Products } from "@/sanity.types";
import { useRouter } from "next/navigation";
import { Button } from "@/components/ui/button";
import { imageUrl } from "@/lib/imageUrlBuilder";
import { formatCurrency } from "@/utils/currencyFormate";

interface ProductPros {
  products: Products[];
}

const ProductCard = ({ products }: ProductPros) => {
  const router = useRouter();

  return (
    <div className="w-full grid md:grid-cols-3 grid-cols-1 lg:grid-cols-4 gap-5">
      {products.map((item, index) => (
        <div
          className="h-[500px] px-2 py-3"
          key={index}
          onClick={() => {
            router.push(`/shop/products/${item.slug?.current}`);
          }}
        >
          <div className="w-full p-1 h-[350px] rounded-3xl bg-white cursor-pointer">
            <Image
              src={item.image ? imageUrl(item.image).url() : ""}
              alt="product"
              className="w-full h-full object-center"
              width={350}
              height={350}
            />
          </div>
          <div className="flex flex-col gap-3 my-3">
            <div className="flex  items-center justify-between">
              <p className="text-wrap font-semibold text-lg">{item.name}</p>
              <p className="text-emerald-500">
                {formatCurrency(item.price || 999)}
              </p>
            </div>
            <Button className="cursor-pointer">Add to Cart</Button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ProductCard;
