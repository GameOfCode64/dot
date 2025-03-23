"use client";
import Link from "next/link";
import Image from "next/image";
import { useEffect } from "react";
import useBasketStore from "@/store/store";
import { Button } from "@/components/ui/button";
import { useSearchParams } from "next/navigation";
import success from "@/public/success.svg";

const SuccessPage = () => {
  const searchParams = useSearchParams();
  const orderNumber = searchParams.get("orderNumber");
  const clearBasket = useBasketStore((state) => state.clearBasket);
  useEffect(() => {
    if (orderNumber) {
      clearBasket();
    }
  }, [orderNumber, clearBasket]);

  const Success = () => {
    return (
      <div className="flex flex-col items-center justify-center min-h-screen p-4">
        <div className="bg-white p-6 flex items-center justify-center px-20 flex-col rounded-lg shadow-lg text-center">
          <Image src={success} alt="Success" width={300} height={300} />
          <h1 className="text-2xl font-bold mt-4">Order Successful!</h1>
          <p className="mt-2">Thank you for your purchase.</p>
          <p className="mt-2">
            OrderId:{" "}
            <span className="text-sm text-emerald-500">{orderNumber}</span>
          </p>
          <div className="flex flex-row gap-5">
            <Link href="/shop">
              <Button className="mt-4 cursor-pointer">Continue Shopping</Button>
            </Link>
            <Link href="/shop/orders">
              <Button className="mt-4 bg-white cursor-pointer hover:bg-white/90 text-black">
                View Orders
              </Button>
            </Link>
          </div>
        </div>
      </div>
    );
  };
  return <Success />;
};

export default SuccessPage;
