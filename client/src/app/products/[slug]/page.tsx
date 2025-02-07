import { getProduct } from "@/lib/data/loaders"
import type { ProductData } from "@/types"
import ProductView from "@/components/custom/ProductView"

export default async function ProductPage({ params }: { params: { slug: string } }) {
  const product = (await getProduct(params.slug)) as ProductData

  return <ProductView product={product} />
}

