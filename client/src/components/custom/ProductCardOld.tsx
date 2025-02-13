import type { ProductData } from "@/types"
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel"
import { StrapiImage } from "@/components/custom/StrapiImage"
import { formatPrice } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import Link from "next/link"

export function ProductCard({ name, description, price, images, slug, quantity }: ProductData) {
  return (
    <Card className="w-[350px]">
      <CardHeader>
        <CardTitle className="line-clamp-1">{name}</CardTitle>
      </CardHeader>
      <CardContent className="space-y-4">
        <Carousel className="w-full">
          <CarouselContent>
            {images.map((image) => (
              <CarouselItem key={image.id}>
                <div className="relative aspect-square">
                  <StrapiImage
                    src={image.url}
                    alt={image.alternativeText}
                    fill
                    className="object-cover rounded-md"
                  />
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious />
          <CarouselNext />
        </Carousel>
        <p className="text-sm text-muted-foreground line-clamp-2 h-16 overflow-hidden">{description.slice(0, 144)}...</p>
      </CardContent>  
      <CardFooter className="flex justify-between items-center">
        <p className="font-semibold">{formatPrice(price)}</p>
        {quantity > 0 ? (
          <Button asChild>
            <Link href={`/products/${slug}`}>View Details</Link>
          </Button>
        ) : (
          <p className="text-red-500">Out of Stock</p>
        )}
      </CardFooter>
    </Card>
  )
}

export default ProductCard