import { getMyOrders } from "@/sanity/lib/querys/getMyOrders";
import { auth } from "@clerk/nextjs/server";
import { redirect } from "next/navigation";
import React from "react";

async function OrderPage() {
  const { userId } = await auth();

  if (!userId) {
    redirect("/sign-in");
  }

  const orders = await getMyOrders(userId);
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-50 p-4">
      <div className="bg-white p-4 sm:p-8 rounded-xl shadow-lg w-full max-w-4xl">
        <h1 className="text-2xl sm:text-4xl font-bold text-center mb-6">
          My Orders
        </h1>
        <div className="w-full">
          {orders.length > 0 ? (
            <ul className="space-y-4"></ul>
          ) : (
            <p className="text-gray-600 text-center">You have no orders yet.</p>
          )}
        </div>
      </div>
    </div>
  );
}

export default OrderPage;
