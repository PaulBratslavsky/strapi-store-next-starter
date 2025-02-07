import { Metadata } from "next";
import { getAllProducts } from "@/lib/data/loaders";
import { ContentList } from "@/components/custom/ContentList";
import { ProductCard } from "@/components/custom/ProductCart";

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
}


export default async function HomeRoute() {
  const products = await getAllProducts();

  console.dir(products, { depth: null });

  return (
    <div>
      <ContentList path="products" query={featuredProductsQuery} headline="All Products" component={ProductCard} />
    </div>
  );
}
