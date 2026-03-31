import { Categories } from "@/components/public/home/categories";
import { FeaturedProducts } from "@/components/public/home/featured-products";
import { Hero } from "@/components/public/home/hero";
import { SeasonalCollections } from "@/components/public/home/seasonal-collections";

export default function Home() {
  return (
    <>
      <Hero />
      <FeaturedProducts />
      <SeasonalCollections />
      <Categories />
    </>
  );
}
