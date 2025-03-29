"use client";
import { z } from "zod";
import React from "react";
import { Form, FormControl, FormField, FormItem, FormLabel } from "./ui/form";
import { Gift } from "lucide-react";
import { Button } from "./ui/button";
import { useForm } from "react-hook-form";
import { OrderAnonyMous } from "@/lib/form-schemas";
import { zodResolver } from "@hookform/resolvers/zod";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "./ui/select";
import { course } from "@/utils/course";
import AnonymousCustomInput from "./AnonymousCustomInput";

const SendAnonymousForm = () => {
  const form = useForm<z.infer<typeof OrderAnonyMous>>({
    resolver: zodResolver(OrderAnonyMous),
    defaultValues: {},
  });
  const onSubmit = async (values: z.infer<typeof OrderAnonyMous>) => {};
  return (
    <div className="flex flex-col">
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="w-full mt-4">
          <AnonymousCustomInput
            placeholder="Enter Name"
            name="name"
            control={form.control}
            label="Reserve Name"
            type="text"
          />

          <div className="my-4 w-full">
            <FormField
              control={form.control}
              name="course"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Select Reserve Course</FormLabel>
                  <FormControl>
                    <Select
                      onValueChange={field.onChange}
                      value={field.value}
                      defaultValue={field.value}
                    >
                      <SelectTrigger className="w-full">
                        <SelectValue placeholder="Select...." />
                      </SelectTrigger>
                      <SelectContent className="">
                        <SelectGroup>
                          {course.map((trek, index) => (
                            <SelectItem key={index} value={trek.value}>
                              {trek.name}
                            </SelectItem>
                          ))}
                        </SelectGroup>
                      </SelectContent>
                    </Select>
                  </FormControl>
                </FormItem>
              )}
            />
          </div>
          <AnonymousCustomInput
            placeholder="Enter Phone Number +91"
            name="senderPhone"
            control={form.control}
            label="Sender Phone No."
            type="text"
          />
          <AnonymousCustomInput
            placeholder="Enter Phone Number +91"
            name="phoneNumber"
            control={form.control}
            label="Reserve Phone Number"
            type="text"
          />
          <Button className="w-full cursor-pointer flex">
            <Gift />
            Send Anonymous
          </Button>
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

export default SendAnonymousForm;
