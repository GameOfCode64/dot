"use client";
import React, { use, useEffect } from "react";
import { Products } from "@/sanity.types";
import useBasketStore from "@/store/store";
import { Button } from "../ui/button";
import { Minus, Plus } from "lucide-react";

interface AddToBasketProps {
  product: Products;
}
const AddToBasketButton = (product: AddToBasketProps) => {
  const [isClient, setIsClient] = React.useState(false);
  const { addItem, removeItem, getItemCount } = useBasketStore();
  const ItemCount = getItemCount(product.product._id);

  useEffect(() => {
    setIsClient(true);
  }, []);

  if (!isClient) {
    return null;
  }

  return (
    <div className="my-4 w-full">
      {ItemCount <= 0 ? (
        <Button
          className="bg-red-500 hover:bg-red-600 cursor-pointer text-white px-4 py-2 rounded-md w-full sm:w-auto"
          onClick={() => addItem(product.product)}
        >
          Add to Basket
        </Button>
      ) : (
        <div className="flex items-center justify-between w-full sm:w-auto">
          <Button
            className="bg-gray-300 hover:bg-gray-400 cursor-pointer text-black px-4 py-2 rounded-md"
            onClick={() => removeItem(product.product._id)}
          >
            <Minus />
          </Button>
          <span className="mx-2">{ItemCount}</span>
          <Button
            className="bg-red-500 hover:bg-red-600 text-white cursor-pointer  px-4 py-2 rounded-md"
            onClick={() => addItem(product.product)}
          >
            <Plus />
          </Button>
        </div>
      )}
    </div>
  );
};

export default AddToBasketButton;
