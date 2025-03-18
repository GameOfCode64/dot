"use client";
import React, { useState } from "react";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { formatCurrency } from "@/utils/currencyFormate";

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

export const revalidate = 1;
const ProductInfo = (data: ProductProps) => {
  const [currentImage, setCurrentImage] = useState(data.imageUrl);
  return (
    <div className="grid md:grid-cols-2 grid-cols-1">
      <div className="flex flex-col">
        <div className="md:w-[500px] w-full md:h-[80dvh] h-[55dvh] p-1">
          <Image
            src={currentImage}
            className="w-full h-full object-center"
            alt="productImage"
            width={1500}
            height={1500}
          />
        </div>
        <div className="md:w-[500px] w-full grid grid-cols-4 mt-5">
          {data?.additionalImageUrls?.map((item, index) => (
            <div
              key={index}
              className="w-[90px] p-1 flex items-center justify-center md:w-auto rounded-md md:gap-5 cursor-pointer"
              onClick={() => setCurrentImage(item)}
            >
              <Image
                src={item}
                className="w-full h-full object-center"
                alt={`productImage-${index}`}
                width={250}
                height={250}
              />
            </div>
          ))}
          <div
            className="w-[90px]  p-1 flex items-center justify-center md:w-auto rounded-md md:gap-5 cursor-pointer"
            onClick={() => setCurrentImage(data.imageUrl)}
          >
            <Image
              src={data.imageUrl}
              className="w-full h-full object-center"
              alt="productImage"
              width={250}
              height={250}
            />
          </div>
        </div>
      </div>
      <div className="flex flex-col py-12 md:pr-6">
        <p className="font-bold text-3xl text-rose-500">{data.title}</p>
        <p className="text-2xl text-emerald-500 font-semibold mt-4">
          {formatCurrency(data.price)}
        </p>
        <p className="text-[#333] mt-4 text-justify text-sm">
          {data.description}
        </p>
        <Button className="mt-6 cursor-pointer bg-rose-500 text-white py-2 px-4 rounded-md hover:bg-rose-600">
          Add to Cart
        </Button>
      </div>
    </div>
  );
};

export default ProductInfo;
