import { z } from "zod";
export const OrderForMe = z.object({
  name: z.string().min(3).max(52),
  phoneNumber: z.number().min(10),
  erpId: z.string().min(6).max(20),
});
export const OrderAnonyMous = z.object({
  name: z.string().min(3).max(52),
  phoneNumber: z.string().min(10),
  course: z.string().min(2).max(20),
  senderPhone: z.string(),
});
