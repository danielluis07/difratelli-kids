"use client";

import { useState, useRef, useCallback } from "react";
import Image from "next/image";
import { cn } from "@/lib/utils";

interface ProductImageGalleryProps {
  images: string[];
  productName: string;
}

export const ProductImageGallery = ({
  images,
  productName,
}: ProductImageGalleryProps) => {
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [isZoomed, setIsZoomed] = useState(false);
  const [zoomPosition, setZoomPosition] = useState({ x: 50, y: 50 });
  const imageContainerRef = useRef<HTMLDivElement>(null);

  const handleMouseMove = useCallback(
    (e: React.MouseEvent<HTMLDivElement>) => {
      if (!imageContainerRef.current) return;
      const rect = imageContainerRef.current.getBoundingClientRect();
      const x = ((e.clientX - rect.left) / rect.width) * 100;
      const y = ((e.clientY - rect.top) / rect.height) * 100;
      setZoomPosition({ x, y });
    },
    [],
  );

  const handleMouseEnter = useCallback(() => setIsZoomed(true), []);
  const handleMouseLeave = useCallback(() => setIsZoomed(false), []);

  const handleTouchMove = useCallback(
    (e: React.TouchEvent<HTMLDivElement>) => {
      if (!imageContainerRef.current) return;
      const touch = e.touches[0];
      const rect = imageContainerRef.current.getBoundingClientRect();
      const x = ((touch.clientX - rect.left) / rect.width) * 100;
      const y = ((touch.clientY - rect.top) / rect.height) * 100;
      setZoomPosition({
        x: Math.max(0, Math.min(100, x)),
        y: Math.max(0, Math.min(100, y)),
      });
    },
    [],
  );

  return (
    <div className="flex flex-col gap-3">
      {/* Main image with zoom */}
      <div
        ref={imageContainerRef}
        className="relative aspect-3/4 w-full cursor-zoom-in overflow-hidden rounded-2xl border border-border/70 bg-muted/30"
        onMouseMove={handleMouseMove}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        onTouchMove={handleTouchMove}
        onTouchStart={() => setIsZoomed(true)}
        onTouchEnd={() => setIsZoomed(false)}>
        <Image
          src={images[selectedIndex]}
          alt={`${productName} - Imagem ${selectedIndex + 1}`}
          fill
          priority
          sizes="(min-width: 1024px) 50vw, 100vw"
          className={cn(
            "object-cover transition-transform duration-300 ease-out",
            isZoomed && "scale-200",
          )}
          style={
            isZoomed
              ? { transformOrigin: `${zoomPosition.x}% ${zoomPosition.y}%` }
              : undefined
          }
        />

        {/* Zoom hint overlay */}
        <div
          className={cn(
            "pointer-events-none absolute inset-0 flex items-end justify-center pb-4 transition-opacity duration-300",
            isZoomed ? "opacity-0" : "opacity-100",
          )}>
          <span className="rounded-full border border-white/20 bg-foreground/60 px-3 py-1 text-xs font-medium text-white backdrop-blur-sm">
            Passe o mouse para ampliar
          </span>
        </div>
      </div>

      {/* Thumbnail selector */}
      <div className="flex gap-3">
        {images.map((image, index) => (
          <button
            key={index}
            onClick={() => setSelectedIndex(index)}
            className={cn(
              "relative aspect-3/4 w-20 shrink-0 overflow-hidden rounded-xl border-2 transition-all duration-200 sm:w-24",
              selectedIndex === index
                ? "border-primary ring-2 ring-primary/20"
                : "border-border/70 hover:border-primary/50",
            )}>
            <Image
              src={image}
              alt={`${productName} - Miniatura ${index + 1}`}
              fill
              sizes="96px"
              className="object-cover"
            />
          </button>
        ))}
      </div>
    </div>
  );
};
