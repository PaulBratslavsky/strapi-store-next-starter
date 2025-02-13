import Link from "next/link";
import { Heart } from "lucide-react";
import { ProductData } from "@/types";


import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { cn } from "@/lib/utils";
import { StrapiImage } from "@/components/custom/StrapiImage";


export function ProductCard({
  name,
  slug,
  description,
  price,
  className,
  images,
  basePath,
  featured,
}: ProductData) {
  return (
    <Link href={`${basePath}/${slug}`} className={cn("rounded-lg", className)}>
      <div className="relative mb-4">
        <StrapiImage
          alt={name}
          src={images[0].url}
          width={200}
          height={200}
          className="w-full object-cover rounded-xl bg-primary/10 aspect-square "
        />
        <Button
          size="icon"
          variant="outline"
          className="rounded-full absolute right-2 top-2 hover:bg-accent"
        >
          <Heart size={16} />
        </Button>
        {featured && <Badge className="absolute top-2 left-2">New Arrival</Badge>}
      </div>
      <div className="w-full flex items-center justify-between">
        <h3 className="font-semibold">{name}</h3>
        <div className="font-bold">
          <span>$</span>
          <span>{price}</span>
        </div>
      </div>
      <p className="text-muted-foreground text-xs">{description}</p>
    </Link>
  );
}
