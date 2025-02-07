"use client";

import { useState } from "react";
import type { ProductData } from "@/types";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ShoppingCart, Check } from "lucide-react";
import { StrapiImage } from "@/components/custom/StrapiImage";

export default function ProductView({ product }: { product: ProductData }) {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  console.log(product);
  return (
    <div className="container mx-auto px-4 py-8">
      <div className="grid md:grid-cols-2 gap-8">
        <div className="flex flex-col gap-4">
          <Card className="min-h-full max-h-[400px]">
            <CardContent className="flex aspect-square items-center justify-center p-6 relative w-full h-full">
              <StrapiImage
                src={product.images[currentImageIndex]?.url}
                alt={product.name}
                fill
                className="object-cover rounded-lg"
              />
            </CardContent>
          </Card>
          <div className="flex gap-4">
            {product.images.map((image, index) => (
              <button
                key={image.documentId}
                onClick={() => setCurrentImageIndex(index)}
                className={`focus:outline-none focus:ring-4 focus:ring-blue-500 focus:ring-opacity-50 ${
                  index === currentImageIndex ? "ring-2 ring-primary" : ""
                } rounded-lg`}
              >
                <StrapiImage
                  src={image.url}
                  alt={product.name}
                  width={80}
                  height={80}
                  className="object-cover rounded-md cursor-pointer hover:opacity-75 transition h-20 w-20"
                />
              </button>
            ))}
          </div>
        </div>
        <div className="space-y-6">
          <h1 className="text-3xl font-bold">{product.name}</h1>
          <p className="text-gray-600">{product.description}</p>
          <div className="flex items-center space-x-2">
            <Check className="text-green-500" />
            <span className="text-sm">In stock</span>
          </div>
          <div className="flex items-center space-x-4">
            <Button className="flex items-center space-x-2">
              <ShoppingCart className="w-5 h-5" />
              <span>Add to Cart</span>
            </Button>
          </div>
          <div className="border-t pt-4">
            <h2 className="text-lg font-semibold mb-2">Product Details</h2>
            <ul className="list-disc list-inside space-y-1 text-gray-600">
              {product.features.map((feature) => (
                <li key={feature.id}>{feature.text}</li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
