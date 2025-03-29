"use client";
import React, { useEffect } from "react";
import { Button } from "../ui/button";
import { Zap } from "lucide-react";
import { Products } from "@/sanity.types";
import useBasketStore from "@/store/store";
import { useRouter } from "next/navigation";

interface BayNowProps {
  product: Products;
}

const BayNowButton = (product: BayNowProps) => {
  const [isClient, setIsClient] = React.useState(false);
  const { addItem, getItemCount } = useBasketStore();
  const ItemCount = getItemCount(product.product._id);
  const router = useRouter();

  useEffect(() => {
    setIsClient(true);
  }, []);

  if (!isClient) {
    return null;
  }

  return (
    <Button
      className="w-[48%] cursor-pointer"
      onClick={() => {
        addItem(product.product);
        router.push("/shop/basket");
      }}
    >
      <Zap />
      Bay Now
    </Button>
  );
};

export default BayNowButton;
