"use client";
import React, { useEffect } from "react";
import useBasketStore from "@/store/store";
import { useAuth, useUser } from "@clerk/nextjs";
import { useRouter } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { imageUrl } from "@/lib/imageUrlBuilder";
import { formatCurrency } from "@/utils/currencyFormate";
import Loader from "@/components/Loader";

const BasketPage = () => {
  const { user } = useUser();
  const router = useRouter();
  const { isSignedIn } = useAuth();
  const [isClient, setIsClient] = React.useState(false);
  const [isLoaded, setIsLoaded] = React.useState(false);
  const groupedItems = useBasketStore((state) => state.getGroupedItems());

  useEffect(() => {
    setIsClient(true);
  }, []);

  if (!isClient) {
    return <Loader />;
  }

  //   if (!isSignedIn) {
  //     router.push("/auth/sign-in");
  //   }
  if (groupedItems.length === 0) {
    return (
      <div className="md:px-20 px-8 my-8 flex flex-col items-center justify-center h-screen">
        <Image
          src="/emptyCart.svg"
          width={200}
          height={200}
          alt="Empty basket"
        />
        <div className="text-center my-4">
          <h1 className="text-2xl font-bold">Your basket is empty</h1>
          <p className="text-gray-500">Add some items to get started</p>
          <Link href="/shop">
            <Button className="mt-4 cursor-pointer">Browse products</Button>
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="md:px-20 px-8 my-8">
      <div className="flex flex-col space-y-4">
        {groupedItems.map((item) => (
          <div
            key={item.product._id}
            className="flex items-center justify-between p-4 border rounded-lg shadow-sm"
          >
            <div className="flex items-center space-x-4">
              <Image
                src={
                  item.product.image ? imageUrl(item.product.image).url() : ""
                }
                width={50}
                height={50}
                alt={item.product.name || "product"}
                className="rounded-md"
              />
              <div>
                <h2 className="text-lg font-semibold">{item.product?.name}</h2>
                <p className="text-gray-500">Quantity: {item.quantity}</p>
              </div>
            </div>
            <div className="flex items-center space-x-4">
              <p className="text-lg font-semibold">
                {formatCurrency(item.product.price || 999)}
              </p>
              <Button
                variant="outline"
                onClick={() =>
                  useBasketStore.getState().removeItem(item.product._id)
                }
              >
                Remove
              </Button>
            </div>
          </div>
        ))}
        <div className="flex justify-between items-center p-4 border-t mt-4">
          <h2 className="text-xl font-bold">
            Total:{" "}
            {formatCurrency(
              groupedItems.reduce(
                (total, item) =>
                  total + (item.product.price || 0) * item.quantity,
                0
              )
            )}
          </h2>
          <Button
            className="cursor-pointer"
            onClick={() => router.push("/checkout")}
          >
            Proceed to Checkout
          </Button>
        </div>
      </div>
    </div>
  );
};

export default BasketPage;
