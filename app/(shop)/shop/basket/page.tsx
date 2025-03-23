"use client";
import React, { useEffect } from "react";
import useBasketStore from "@/store/store";
import { SignInButton, useAuth, useUser } from "@clerk/nextjs";
import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { imageUrl } from "@/lib/imageUrlBuilder";
import { formatCurrency } from "@/utils/currencyFormate";
import Loader from "@/components/Loader";
import { Minus, Plus } from "lucide-react";
import {
  createCheckoutSession,
  Metadata,
} from "@/action/shop/cretaetCheckoutSession";

const BasketPage = () => {
  const { user } = useUser();
  const { isSignedIn } = useAuth();
  const [isClient, setIsClient] = React.useState(false);
  const [isLoaded, setIsLoaded] = React.useState(false);
  const { addItem, removeItem } = useBasketStore();
  const groupedItems = useBasketStore((state) => state.getGroupedItems());

  useEffect(() => {
    setIsClient(true);
  }, []);

  if (!isClient) {
    return <Loader />;
  }
  const handleCheckout = async () => {
    if (!isSignedIn) return;
    setIsLoaded(true);
    try {
      const metadata: Metadata = {
        orderNumber: crypto.randomUUID(),
        customerName: user?.fullName ?? "Unknown",
        customerEmail: user?.emailAddresses[0].emailAddress ?? "Unknown",
        clerkUserId: user!.id,
        reserver_name: "",
        phone_name: "",
        address: "",
      };

      const checkoutUrl = await createCheckoutSession(groupedItems, metadata);

      if (checkoutUrl) {
        window.location.href = checkoutUrl;
      }
    } catch (error) {
      console.error(error);
    } finally {
      setIsLoaded(false);
    }
  };

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
                <p className="text-gray-500">
                  Price: {formatCurrency(item.product.price || 0)}
                </p>
              </div>
            </div>
            <div className="flex items-center space-x-4">
              <Button
                variant="outline"
                onClick={() => removeItem(item.product._id)}
              >
                <Minus />
              </Button>
              <p className="text-lg font-semibold">{item.quantity}</p>
              <Button variant="outline" onClick={() => addItem(item.product)}>
                <Plus />
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
          {isSignedIn ? (
            <Button
              disabled={isLoaded}
              className="cursor-pointer"
              onClick={handleCheckout}
            >
              {isLoaded ? "...Processing" : "Proceed to Checkout"}
            </Button>
          ) : (
            <SignInButton />
          )}
        </div>
      </div>
    </div>
  );
};

export default BasketPage;
