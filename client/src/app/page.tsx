import { Metadata } from "next";
import { getAllProducts } from "@/lib/data/loaders";

import { ContentList } from "@/components/custom/ContentList";
import { ProductCard } from "@/components/custom/ProductCard";
import { SearchInput } from "@/components/custom/SearchInput";
import { PaginationComponent } from "@/components/custom/PaginationComponent";
export const metadata: Metadata = {
  title: "Home",
  description: "Home page",
};

const featuredProductsQuery = {
  populate: {
    images: {
      fields: ["name", "alternativeText", "url"],
    },
    banner: {
      fields: ["name", "alternativeText", "url"],
    },
  },
};

export default async function HomeRoute() {
  const products = await getAllProducts();

  console.dir(products, { depth: null });

  return (
    <div className="flex flex-col gap-4"> 
      <SearchInput className="mb-4"/>
      <ContentList
        path="products"
        query={featuredProductsQuery}
        headline="All Products"
        component={ProductCard}
      />
      <PaginationComponent pageCount={10}  className="mt-4"/>
    </div>
  );
}
