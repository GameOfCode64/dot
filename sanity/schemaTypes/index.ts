import { type SchemaTypeDefinition } from "sanity";

import { productType } from "@/sanity/lib/schemas/products";
import { category } from "@/sanity/lib/schemas/category";
import { orderProps } from "@/sanity/lib/schemas/orders";

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [productType, category, orderProps],
};
