"use client";

import React from "react";
import Image from "next/image";
import { Products } from "@/sanity.types";
import { imageUrl } from "@/lib/imageUrlBuilder";
import { formatCurrency } from "@/utils/currencyFormate";
import Link from "next/link";
import { motion } from "framer-motion";

interface ProductPros {
  products: Products[];
}

const ProductCard = ({ products }: ProductPros) => {
  return (
    <section
      id="shop"
      className="w-full grid md:grid-cols-4 sm:grid-cols-3 grid-cols-2 gap-6 py-10"
    >
      {products.map((item, index) => (
        <motion.div
          key={index}
          className="flex flex-col w-full p-3"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: index * 0.1 }}
        >
          {/* Image Section */}
          <Link href={`/shop/products/${item.slug?.current}`} passHref>
            <motion.div className="w-full h-[300px] overflow-hidden border border-gray-200 rounded-md">
              <Image
                src={item.image ? imageUrl(item.image).url() : ""}
                alt="product"
                className="w-full h-full object-contain transition-transform duration-300 hover:scale-110"
                width={300}
                height={300}
              />
            </motion.div>
          </Link>

          {/* Product Details */}
          <div className="mt-3">
            <Link href={`/shop/products/${item.slug?.current}`} passHref>
              <p className="text-sm font-medium text-gray-900 hover:text-blue-600 cursor-pointer">
                {item.name}
              </p>
            </Link>
            <p className="text-lg font-semibold text-emerald-600 mt-1">
              {formatCurrency(item.price || 999)}
            </p>
          </div>
        </motion.div>
      ))}
    </section>
  );
};

export default ProductCard;
