import { Button } from "@/components/ui/button";

const categories = ["Boys Jeans", "Girls Jeans", "Baby Denim", "Jackets"];

const products = [
  { name: "Classic Blue Jeans", price: "$29.90" },
  { name: "Stretch Skinny Jeans", price: "$34.90" },
  { name: "Cargo Denim Pants", price: "$31.50" },
];

export default function Home() {
  return (
    <div className="mx-auto flex w-full max-w-6xl flex-col gap-10 px-4 py-8 md:px-8 md:py-12">
      <section className="relative overflow-hidden rounded-3xl border border-border bg-card p-6 md:p-10">
        <div className="pointer-events-none absolute -top-20 -right-20 size-56 rounded-full bg-primary/20 blur-3xl" />
        <div className="pointer-events-none absolute -bottom-16 -left-16 size-44 rounded-full bg-accent/35 blur-2xl" />

        <div className="relative flex flex-col gap-4">
          <p className="text-xs font-semibold tracking-[0.2em] text-muted-foreground uppercase">
            Di Fratelli Kids
          </p>
          <h1 className="font-display text-3xl leading-tight md:text-5xl">
            Premium jeans for little explorers
          </h1>
          <p className="max-w-2xl text-sm text-muted-foreground md:text-base">
            This is a style test block for your public route palette,
            typography, spacing, and buttons.
          </p>
          <div className="flex flex-wrap gap-3 pt-2">
            <Button size="lg">Shop New Collection</Button>
            <Button variant="outline" size="lg">
              View Best Sellers
            </Button>
          </div>
        </div>
      </section>

      <section className="flex flex-col gap-4">
        <h2 className="font-display text-2xl">Shop by category</h2>
        <div className="flex flex-wrap gap-3">
          {categories.map((category) => (
            <span
              key={category}
              className="rounded-full border border-border bg-secondary px-4 py-2 text-sm font-medium text-secondary-foreground">
              {category}
            </span>
          ))}
        </div>
      </section>

      <section className="flex flex-col gap-4">
        <h2 className="font-display text-2xl">Featured products</h2>
        <div className="grid gap-4 md:grid-cols-3">
          {products.map((product) => (
            <article
              key={product.name}
              className="flex flex-col gap-3 rounded-2xl border border-border bg-card p-4">
              <div className="h-36 rounded-xl bg-muted" />
              <h3 className="text-base font-semibold">{product.name}</h3>
              <p className="text-sm text-muted-foreground">{product.price}</p>
              <Button variant="secondary">Add to cart</Button>
            </article>
          ))}
        </div>
      </section>
    </div>
  );
}
