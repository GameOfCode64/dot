import React from "react";
import {
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Control, FieldPath } from "react-hook-form";
import { z } from "zod";
import { OrderForMe } from "@/lib/form-schemas";

interface CustominputProps {
  control: Control<z.infer<typeof OrderForMe>>;
  name: FieldPath<z.infer<typeof OrderForMe>>;
  placeholder: string;
  label: string;
  type: string;
}

const CustomInput = ({
  control,
  name,
  placeholder,
  label,
  type,
}: CustominputProps) => {
  return (
    <FormField
      control={control}
      name={name}
      render={({ field }) => (
        <FormItem>
          <FormLabel>{label}</FormLabel>
          <FormControl>
            <Input
              placeholder={placeholder}
              {...field}
              type={type}
              className="my-4 w-full   rounded-md prim-input"
            />
          </FormControl>
          <FormMessage />
        </FormItem>
      )}
    />
  );
};

export default CustomInput;
