import { type SchemaTypeDefinition } from "sanity";
import { products } from "@/sanity/lib/schemas/products";
import { category } from "@/sanity/lib/schemas/category";

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [products, category],
};
