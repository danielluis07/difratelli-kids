import { Categories } from "@/components/public/home/categories";
import { FeaturedProducts } from "@/components/public/home/featured-products";
import { Hero } from "@/components/public/home/hero";

export default function Home() {
  return (
    <>
      <Hero />
      <Categories />
      <FeaturedProducts />
    </>
  );
}
