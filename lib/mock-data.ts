export type CategorySlug = "calcas" | "saias" | "casacos" | "bermudas";

export type CollectionSlug = "outono-inverno" | "primavera-verao";

export type SizeLabel = "2" | "4" | "6" | "8" | "10" | "12" | "14";

export type FabricSlug =
  | "jeans-leve"
  | "jeans-medio"
  | "jeans-encorpado"
  | "sarja"
  | "moletom";

export interface Category {
  id: string;
  name: string;
  slug: CategorySlug;
  description: string;
  image: string;
}

export interface Collection {
  id: string;
  name: string;
  slug: CollectionSlug;
  description: string;
  coverImage: string;
}

export interface Fabric {
  id: string;
  name: string;
  slug: FabricSlug;
  description: string;
}

export interface ProductImage {
  id: string;
  url: string;
  alt: string;
}

export interface ProductVariant {
  id: string;
  size: SizeLabel;
  fabric: FabricSlug;
  stock: number;
}

export interface Product {
  id: string;
  name: string;
  slug: string;
  description: string;
  priceInCents: number;
  compareAtPriceInCents?: number;
  category: CategorySlug;
  collection: CollectionSlug;
  fabrics: FabricSlug[];
  sizes: SizeLabel[];
  variants: ProductVariant[];
  images: ProductImage[];
  isFeatured: boolean;
  isNew: boolean;
}

export const categories: Category[] = [
  {
    id: "cat-1",
    name: "Calças",
    slug: "calcas",
    description: "Modelos infantis confortáveis e versáteis para o dia a dia.",
    image: "/images/categories/calcas.jpg",
  },
  {
    id: "cat-2",
    name: "Saias",
    slug: "saias",
    description: "Saias jeans infantis com caimento leve e visual moderno.",
    image: "/images/categories/saias.jpg",
  },
  {
    id: "cat-3",
    name: "Casacos",
    slug: "casacos",
    description: "Peças quentinhas para compor looks estilosos em dias frios.",
    image: "/images/categories/casacos.jpg",
  },
  {
    id: "cat-4",
    name: "Bermudas",
    slug: "bermudas",
    description: "Bermudas confortáveis para brincar com liberdade.",
    image: "/images/categories/bermudas.jpg",
  },
];

export const collections: Collection[] = [
  {
    id: "col-1",
    name: "Outono / Inverno",
    slug: "outono-inverno",
    description:
      "Peças com tecidos mais encorpados e modelagens aconchegantes.",
    coverImage: "/images/collections/outono-inverno.jpg",
  },
  {
    id: "col-2",
    name: "Primavera / Verão",
    slug: "primavera-verao",
    description:
      "Looks leves, frescos e cheios de estilo para os dias quentes.",
    coverImage: "/images/collections/primavera-verao.jpg",
  },
];

export const fabrics: Fabric[] = [
  {
    id: "fab-1",
    name: "Jeans Leve",
    slug: "jeans-leve",
    description: "Tecido leve e confortável, ideal para dias mais quentes.",
  },
  {
    id: "fab-2",
    name: "Jeans Médio",
    slug: "jeans-medio",
    description: "Equilíbrio entre conforto e estrutura.",
  },
  {
    id: "fab-3",
    name: "Jeans Encorpado",
    slug: "jeans-encorpado",
    description: "Mais estrutura e proteção para dias frios.",
  },
  {
    id: "fab-4",
    name: "Sarja",
    slug: "sarja",
    description: "Alternativa resistente e macia para peças infantis.",
  },
  {
    id: "fab-5",
    name: "Moletom",
    slug: "moletom",
    description: "Toque macio e quente para casacos e peças de inverno.",
  },
];

export const products: Product[] = [
  {
    id: "prod-1",
    name: "Calça Jeans Infantil Clara",
    slug: "calca-jeans-infantil-clara",
    description:
      "Calça jeans infantil com modelagem confortável e lavagem clara para looks casuais.",
    priceInCents: 12990,
    compareAtPriceInCents: 14990,
    category: "calcas",
    collection: "primavera-verao",
    fabrics: ["jeans-leve", "jeans-medio"],
    sizes: ["2", "4", "6", "8", "10"],
    variants: [
      { id: "var-1", size: "2", fabric: "jeans-leve", stock: 8 },
      { id: "var-2", size: "4", fabric: "jeans-leve", stock: 10 },
      { id: "var-3", size: "6", fabric: "jeans-medio", stock: 7 },
      { id: "var-4", size: "8", fabric: "jeans-medio", stock: 6 },
      { id: "var-5", size: "10", fabric: "jeans-medio", stock: 4 },
    ],
    images: [
      {
        id: "img-1",
        url: "/images/products/calca-clara-1.jpg",
        alt: "Calça jeans infantil clara vista frontal",
      },
      {
        id: "img-2",
        url: "/images/products/calca-clara-2.jpg",
        alt: "Calça jeans infantil clara vista lateral",
      },
    ],
    isFeatured: true,
    isNew: true,
  },
  {
    id: "prod-2",
    name: "Bermuda Jeans Infantil Stone",
    slug: "bermuda-jeans-infantil-stone",
    description:
      "Bermuda jeans infantil com lavagem stone e caimento solto para maior conforto.",
    priceInCents: 8990,
    category: "bermudas",
    collection: "primavera-verao",
    fabrics: ["jeans-leve"],
    sizes: ["4", "6", "8", "10", "12"],
    variants: [
      { id: "var-6", size: "4", fabric: "jeans-leve", stock: 9 },
      { id: "var-7", size: "6", fabric: "jeans-leve", stock: 8 },
      { id: "var-8", size: "8", fabric: "jeans-leve", stock: 6 },
      { id: "var-9", size: "10", fabric: "jeans-leve", stock: 5 },
      { id: "var-10", size: "12", fabric: "jeans-leve", stock: 3 },
    ],
    images: [
      {
        id: "img-3",
        url: "/images/products/bermuda-stone-1.jpg",
        alt: "Bermuda jeans infantil stone vista frontal",
      },
      {
        id: "img-4",
        url: "/images/products/bermuda-stone-2.jpg",
        alt: "Bermuda jeans infantil stone em detalhe",
      },
    ],
    isFeatured: true,
    isNew: false,
  },
  {
    id: "prod-3",
    name: "Saia Jeans Infantil Delicada",
    slug: "saia-jeans-infantil-delicada",
    description:
      "Saia jeans infantil com visual leve e moderno, ideal para ocasiões casuais.",
    priceInCents: 9990,
    compareAtPriceInCents: 11990,
    category: "saias",
    collection: "primavera-verao",
    fabrics: ["jeans-leve", "sarja"],
    sizes: ["4", "6", "8", "10"],
    variants: [
      { id: "var-11", size: "4", fabric: "jeans-leve", stock: 8 },
      { id: "var-12", size: "6", fabric: "jeans-leve", stock: 7 },
      { id: "var-13", size: "8", fabric: "sarja", stock: 6 },
      { id: "var-14", size: "10", fabric: "sarja", stock: 4 },
    ],
    images: [
      {
        id: "img-5",
        url: "/images/products/saia-delicada-1.jpg",
        alt: "Saia jeans infantil delicada vista frontal",
      },
      {
        id: "img-6",
        url: "/images/products/saia-delicada-2.jpg",
        alt: "Saia jeans infantil delicada em look completo",
      },
    ],
    isFeatured: false,
    isNew: true,
  },
  {
    id: "prod-4",
    name: "Casaco Jeans Infantil Cozy",
    slug: "casaco-jeans-infantil-cozy",
    description:
      "Casaco jeans infantil com tecido mais encorpado para compor looks de meia-estação.",
    priceInCents: 15990,
    compareAtPriceInCents: 17990,
    category: "casacos",
    collection: "outono-inverno",
    fabrics: ["jeans-encorpado", "moletom"],
    sizes: ["6", "8", "10", "12", "14"],
    variants: [
      { id: "var-15", size: "6", fabric: "jeans-encorpado", stock: 4 },
      { id: "var-16", size: "8", fabric: "jeans-encorpado", stock: 5 },
      { id: "var-17", size: "10", fabric: "moletom", stock: 6 },
      { id: "var-18", size: "12", fabric: "moletom", stock: 4 },
      { id: "var-19", size: "14", fabric: "moletom", stock: 2 },
    ],
    images: [
      {
        id: "img-7",
        url: "/images/products/casaco-cozy-1.jpg",
        alt: "Casaco jeans infantil cozy vista frontal",
      },
      {
        id: "img-8",
        url: "/images/products/casaco-cozy-2.jpg",
        alt: "Casaco jeans infantil cozy vista traseira",
      },
    ],
    isFeatured: true,
    isNew: false,
  },
  {
    id: "prod-5",
    name: "Calça Jeans Infantil Premium",
    slug: "calca-jeans-infantil-premium",
    description:
      "Calça jeans infantil em tecido encorpado, ideal para dias frios e composições elegantes.",
    priceInCents: 13990,
    category: "calcas",
    collection: "outono-inverno",
    fabrics: ["jeans-medio", "jeans-encorpado"],
    sizes: ["4", "6", "8", "10", "12"],
    variants: [
      { id: "var-20", size: "4", fabric: "jeans-medio", stock: 6 },
      { id: "var-21", size: "6", fabric: "jeans-medio", stock: 8 },
      { id: "var-22", size: "8", fabric: "jeans-encorpado", stock: 5 },
      { id: "var-23", size: "10", fabric: "jeans-encorpado", stock: 4 },
      { id: "var-24", size: "12", fabric: "jeans-encorpado", stock: 3 },
    ],
    images: [
      {
        id: "img-9",
        url: "/images/products/calca-premium-1.jpg",
        alt: "Calça jeans infantil premium vista frontal",
      },
      {
        id: "img-10",
        url: "/images/products/calca-premium-2.jpg",
        alt: "Calça jeans infantil premium em detalhe",
      },
    ],
    isFeatured: false,
    isNew: false,
  },
  {
    id: "prod-6",
    name: "Bermuda Jeans Infantil Basic",
    slug: "bermuda-jeans-infantil-basic",
    description:
      "Bermuda básica infantil em jeans leve para o dia a dia com muito conforto.",
    priceInCents: 7990,
    category: "bermudas",
    collection: "primavera-verao",
    fabrics: ["jeans-leve", "sarja"],
    sizes: ["2", "4", "6", "8"],
    variants: [
      { id: "var-25", size: "2", fabric: "jeans-leve", stock: 8 },
      { id: "var-26", size: "4", fabric: "jeans-leve", stock: 10 },
      { id: "var-27", size: "6", fabric: "sarja", stock: 6 },
      { id: "var-28", size: "8", fabric: "sarja", stock: 5 },
    ],
    images: [
      {
        id: "img-11",
        url: "/images/products/bermuda-basic-1.jpg",
        alt: "Bermuda jeans infantil basic vista frontal",
      },
    ],
    isFeatured: false,
    isNew: true,
  },
];

export const storeData = {
  categories,
  collections,
  fabrics,
  products,
};
