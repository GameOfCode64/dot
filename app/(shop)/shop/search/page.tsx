import ProductCard from "@/components/shop/ProductCard";
import { searchProductByName } from "@/sanity/lib/querys/searchProductByName";

const page = async ({
  searchParams,
}: {
  searchParams: Promise<{
    query: string;
  }>;
}) => {
  const query = (await searchParams).query;
  const products = await searchProductByName(query);
  return (
    <div className="flex flex-col md:px-20 px-8 py-8">
      <h1 className="my-8 font-semibold text-lg">Search results for {query}</h1>
      {products.length > 0 ? (
        <ProductCard products={products} />
      ) : (
        <p className="flex items-center justify-center font-medium">
          No products found
        </p>
      )}
    </div>
  );
};

export default page;
