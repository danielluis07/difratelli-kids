import { notFound } from "next/navigation";
import Link from "next/link";
import { ChevronRightIcon, HomeIcon } from "lucide-react";

import { ProductImageGallery } from "@/components/public/product-image-gallery";
import { ProductInfo } from "@/components/public/product-info";
import { ProductsCarousel } from "@/components/public/products-carousel";
import { products, categories } from "@/lib/mock-data";
import type { Product } from "@/lib/mock-data";

function sortRelatedProducts(items: Product[], currentProductId: string) {
  const currentId = Number(currentProductId);

  return [...items].sort((a, b) => {
    const featuredDiff = Number(b.isFeatured) - Number(a.isFeatured);
    if (featuredDiff !== 0) return featuredDiff;

    const newDiff = Number(b.isNew) - Number(a.isNew);
    if (newDiff !== 0) return newDiff;

    const proximityDiff =
      Math.abs(Number(a.id) - currentId) - Math.abs(Number(b.id) - currentId);
    if (proximityDiff !== 0) return proximityDiff;

    return a.name.localeCompare(b.name, "pt-BR");
  });
}

const ProductPage = async ({
  params,
}: {
  params: Promise<{ slug: string }>;
}) => {
  const { slug } = await params;

  const product = products.find((p) => p.slug === slug);

  if (!product) {
    notFound();
  }

  const categoryName =
    categories.find((c) => c.slug === product.category)?.name ??
    product.category;

  // Related products: same category, excluding current, prioritized deterministically
  const relatedProducts = sortRelatedProducts(
    products.filter((p) => p.category === product.category && p.id !== product.id),
    product.id,
  ).slice(0, 8);

  // If not enough from same category, fill with other products
  const fillerProducts =
    relatedProducts.length < 6
      ? sortRelatedProducts(
          products.filter(
            (p) =>
              p.id !== product.id &&
              !relatedProducts.some((rp) => rp.id === p.id),
          ),
          product.id,
        ).slice(0, 6 - relatedProducts.length)
      : [];

  const allRelated = [...relatedProducts, ...fillerProducts];

  return (
    <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
      {/* Breadcrumb */}
      <nav className="flex items-center gap-1.5 py-5 text-sm text-muted-foreground">
        <Link
          href="/"
          className="flex items-center gap-1 transition-colors hover:text-foreground">
          <HomeIcon className="size-3.5" />
          <span className="sr-only">Início</span>
        </Link>
        <ChevronRightIcon className="size-3.5" />
        <Link
          href="/products"
          className="transition-colors hover:text-foreground">
          Produtos
        </Link>
        <ChevronRightIcon className="size-3.5" />
        <Link
          href={`/products?category=${product.category}`}
          className="transition-colors hover:text-foreground">
          {categoryName}
        </Link>
        <ChevronRightIcon className="size-3.5" />
        <span className="max-w-48 truncate font-medium text-foreground">
          {product.name}
        </span>
      </nav>

      {/* Product section */}
      <section className="grid grid-cols-1 gap-8 pb-16 lg:grid-cols-2 lg:gap-12">
        <ProductImageGallery
          images={product.images}
          productName={product.name}
        />
        <ProductInfo product={product} />
      </section>

      {/* Related products */}
      {allRelated.length > 0 && (
        <section className="border-t border-border/70 py-14 sm:py-18 lg:py-24">
          <div className="mb-8 max-w-xl">
            <span className="inline-flex rounded-full border border-border/70 bg-card/80 px-3 py-1 text-[0.7rem] font-semibold tracking-[0.24em] text-muted-foreground uppercase backdrop-blur-sm">
              Você também pode gostar
            </span>
            <h2 className="mt-4 text-2xl leading-none font-semibold tracking-[-0.04em] text-foreground sm:text-3xl lg:text-4xl">
              Produtos relacionados
            </h2>
          </div>
          <ProductsCarousel products={allRelated} />
        </section>
      )}
    </div>
  );
};

export default ProductPage;
