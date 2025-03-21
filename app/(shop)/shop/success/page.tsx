"use client";
import Link from "next/link";
import Image from "next/image";
import { use, useEffect } from "react";
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
  return (
    <div className="flex flex-col items-center justify-center min-h-screen  p-4">
      <div className="bg-white p-6 flex items-center justify-center px-20 flex-col rounded-lg shadow-lg text-center">
        <Image src={success} alt="Success" width={300} height={300} />
        <h1 className="text-2xl font-bold mt-4">Order Successful!</h1>
        <p className="mt-2">Thank you for your purchase.</p>
        <Link href="/shop">
          <Button className="mt-4">Continue Shopping</Button>
        </Link>
      </div>
    </div>
  );
};

export default SuccessPage;
