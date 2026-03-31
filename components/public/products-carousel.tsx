"use client";

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselPrevious,
  CarouselNext,
} from "@/components/ui/carousel";
import { ProductCard } from "@/components/public/product-card";
import type { Product } from "@/lib/mock-data";
import { cn } from "@/lib/utils";

interface ProductsCarouselProps {
  products: Product[];
  className?: string;
}

export const ProductsCarousel = ({
  products,
  className,
}: ProductsCarouselProps) => {
  return (
    <Carousel
      opts={{ align: "start", slidesToScroll: 1 }}
      className={cn("w-full", className)}>
      <CarouselContent className="-ml-4">
        {products.map((product) => (
          <CarouselItem
            key={product.id}
            className="basis-1/2 pl-4 sm:basis-1/3 lg:basis-1/4">
            <ProductCard product={product} />
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselPrevious className="-left-6 lg:-left-8" />
      <CarouselNext className="-right-6 lg:-right-8" />
    </Carousel>
  );
};
