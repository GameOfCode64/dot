import React from "react";
import Image from "next/image";
import { notFound } from "next/navigation";
import { imageUrl } from "@/lib/imageUrlBuilder";
import { formatCurrency } from "@/utils/currencyFormate";
import AddToBasketButton from "@/components/shop/AddToBasketButton";
import { getProductBySlug } from "@/sanity/lib/querys/getProductBySlug";
import BayNowButton from "@/components/shop/BayNowButton";
interface ProductsProps {
  params: Promise<{ productId: string }>;
}

const Page = async ({ params }: ProductsProps) => {
  const { productId } = await params;

  const product = await getProductBySlug(productId);
  if (!product) {
    return notFound();
  }

  return (
    <div className="md:px-20 px-8 py-8">
      <div className="grid md:grid-cols-2 grid-cols-1">
        <div className="flex flex-col">
          <div className="md:w-[500px] w-full md:h-[80dvh] h-[55dvh] p-1">
            <Image
              src={product.image ? imageUrl(product.image).url() : ""}
              className="w-full h-full object-center"
              alt="productImage"
              width={1500}
              height={1500}
            />
          </div>
        </div>
        <div className="flex flex-col py-12 md:pr-6">
          <p className="font-bold text-3xl text-rose-500">{product.name}</p>
          <p className="text-2xl text-emerald-500 font-semibold mt-4">
            {formatCurrency(product.price || 999)}
          </p>
          <p className="text-[#333] mt-4 text-justify text-sm">
            {product.description}
          </p>
          <div className="flex items-center justify-normal gap-4 w-full mt-5">
            <AddToBasketButton product={product} />
            <BayNowButton product={product} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Page;
