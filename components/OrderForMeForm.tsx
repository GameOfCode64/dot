"use client";
import { z } from "zod";
import React from "react";
import { Form } from "./ui/form";
import { Button } from "./ui/button";
import CustomInput from "./CustomInput";
import { useForm } from "react-hook-form";
import { OrderForMe } from "@/lib/form-schemas";
import { zodResolver } from "@hookform/resolvers/zod";

const OrderForMeForm = () => {
  const form = useForm<z.infer<typeof OrderForMe>>({
    resolver: zodResolver(OrderForMe),
    defaultValues: {},
  });
  const onSubmit = async (values: z.infer<typeof OrderForMe>) => {};
  return (
    <div className="flex flex-col">
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="w-full mt-4">
          <CustomInput
            placeholder="Enter Your Full Name"
            name="name"
            control={form.control}
            label="Full Name"
            type="text"
          />
          <CustomInput
            placeholder="Enter ERPID 0221BCA..."
            name="erpId"
            control={form.control}
            label="ERPID"
            type="text"
          />
          <CustomInput
            placeholder="Enter Phone Number +91"
            name="phoneNumber"
            control={form.control}
            label="Phone Number"
            type="text"
          />
          <Button className="w-full cursor-pointer">Place Order</Button>
        </form>
      </Form>
      <div className="my-4">
        <div className="flex items-center justify-center mb-4">
          <span className="w-full h-[1px] bg-[#ccc]"></span>
          <p className="mx-4">or</p>
          <span className="w-full h-[1px] bg-[#ccc]"></span>
        </div>
        <Button className="w-full cursor-pointer relative" disabled>
          Pay Online
          <div className="absolute right-0 top-0 text-[12px] bg-red-500 px-2 rounded-sm">
            Soon
          </div>
        </Button>
      </div>
    </div>
  );
};

export default OrderForMeForm;
