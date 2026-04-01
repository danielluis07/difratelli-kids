export type CollectionSlug = "outono-inverno" | "primavera-verao";
export type SeasonSlug = "outono-inverno" | "primavera-verao";

export type SizeLabel = "2" | "4" | "6" | "8" | "10" | "12" | "14";
export interface Category {
  id: string;
  name: string;
  slug: string;
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
  slug: string;
  description: string;
}

export interface ProductVariant {
  id: string;
  size: SizeLabel;
  fabric: string;
  stock: number;
}

export interface Product {
  id: string;
  name: string;
  slug: string;
  description: string;
  season: SeasonSlug;
  priceInCents: number;
  compareAtPriceInCents?: number;
  category: string;
  collection: string;
  fabrics: string[];
  sizes: SizeLabel[];
  variants: ProductVariant[];
  images: string[];
  isFeatured: boolean;
  isNew: boolean;
}

export const categories: Category[] = [
  {
    id: "cat-1",
    name: "Calças",
    slug: "calcas",
    description: "Modelos infantis confortáveis e versáteis para o dia a dia.",
    image: "/images/categories/pants.png",
  },
  {
    id: "cat-2",
    name: "Jaquetas",
    slug: "jaquetas",
    description: "Peças quentinhas para compor looks estilosos em dias frios.",
    image: "/images/categories/jacket.png",
  },
  {
    id: "cat-3",
    name: "Bermudas",
    slug: "bermudas",
    description: "Bermudas confortáveis para brincar com liberdade.",
    image: "/images/categories/male-shorts.png",
  },
  {
    id: "cat-4",
    name: "Shorts",
    slug: "shorts",
    description: "Shorts infantis em jeans leve para conforto total.",
    image: "/images/categories/female-shorts.png",
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

export const seasons = [
  { slug: "outono-inverno", name: "Outono / Inverno" },
  { slug: "primavera-verao", name: "Primavera / Verão" },
] satisfies { slug: SeasonSlug; name: string }[];

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
    id: "1",
    name: "Calça Jeans Clara Masculina",
    slug: "calca-jeans-clara-masculina",
    description:
      "Calça jeans masculina com lavagem clara e corte reto. Tecido com elastano para facilitar os movimentos.",
    season: "primavera-verao",
    priceInCents: 12990,
    compareAtPriceInCents: 14990,
    category: "calcas",
    collection: "primavera-verao",
    fabrics: ["jeans-leve", "jeans-medio"],
    sizes: ["2", "4", "6", "8", "10"],
    variants: [
      { id: "var-1-m", size: "2", fabric: "jeans-leve", stock: 8 },
      { id: "var-2-m", size: "4", fabric: "jeans-leve", stock: 10 },
      { id: "var-3-m", size: "6", fabric: "jeans-medio", stock: 7 },
      { id: "var-4-m", size: "8", fabric: "jeans-medio", stock: 6 },
      { id: "var-5-m", size: "10", fabric: "jeans-medio", stock: 4 },
    ],
    images: [
      "/images/products/1/calca-jeans-clara-masculina.png",
      "/images/products/1/calca-jeans-clara-masculina-2.png",
    ],
    isFeatured: true,
    isNew: false,
  },
  {
    id: "2",
    name: "Calça Jeans Clara Feminina",
    slug: "calca-jeans-clara-feminina",
    description:
      "Calça jeans feminina com lavagem clara e modelagem slim. Tecido com elastano para facilitar os movimentos.",
    season: "primavera-verao",
    priceInCents: 12990,
    compareAtPriceInCents: 14990,
    category: "calcas",
    collection: "primavera-verao",
    fabrics: ["jeans-leve", "jeans-medio"],
    sizes: ["2", "4", "6", "8", "10"],
    variants: [
      { id: "var-1-f", size: "2", fabric: "jeans-leve", stock: 8 },
      { id: "var-2-f", size: "4", fabric: "jeans-leve", stock: 10 },
      { id: "var-3-f", size: "6", fabric: "jeans-medio", stock: 7 },
      { id: "var-4-f", size: "8", fabric: "jeans-medio", stock: 6 },
      { id: "var-5-f", size: "10", fabric: "jeans-medio", stock: 4 },
    ],
    images: [
      "/images/products/2/calca-jeans-clara-feminina.png",
      "/images/products/2/calca-jeans-clara-feminina-2.png",
    ],
    isFeatured: true,
    isNew: false,
  },

  {
    id: "3",
    name: "Bermuda Jeans Delavê Masculina",
    slug: "bermuda-jeans-delave-masculina",
    description:
      "Bermuda jeans masculina com efeito delavê e cintura ajustável com elástico. Corte levemente largo para liberdade de movimento.",
    season: "primavera-verao",
    priceInCents: 8990,
    category: "bermudas",
    collection: "primavera-verao",
    fabrics: ["jeans-leve"],
    sizes: ["4", "6", "8", "10", "12"],
    variants: [
      { id: "var-6-m", size: "4", fabric: "jeans-leve", stock: 9 },
      { id: "var-7-m", size: "6", fabric: "jeans-leve", stock: 8 },
      { id: "var-8-m", size: "8", fabric: "jeans-leve", stock: 6 },
      { id: "var-9-m", size: "10", fabric: "jeans-leve", stock: 5 },
      { id: "var-10-m", size: "12", fabric: "jeans-leve", stock: 3 },
    ],
    images: [
      "/images/products/3/bermuda-jeans-delave-masculina.png",
      "/images/products/3/bermuda-jeans-delave-masculina-2.png",
    ],
    isFeatured: true,
    isNew: true,
  },
  {
    id: "4",
    name: "Bermuda Jeans Delavê Feminina",
    slug: "bermuda-jeans-delave-feminina",
    description:
      "Bermuda jeans feminina com efeito delavê e barra dobrada. Cintura com elástico interno para um ajuste confortável.",
    season: "primavera-verao",
    priceInCents: 8990,
    category: "bermudas",
    collection: "primavera-verao",
    fabrics: ["jeans-leve"],
    sizes: ["4", "6", "8", "10", "12"],
    variants: [
      { id: "var-6-f", size: "4", fabric: "jeans-leve", stock: 9 },
      { id: "var-7-f", size: "6", fabric: "jeans-leve", stock: 8 },
      { id: "var-8-f", size: "8", fabric: "jeans-leve", stock: 6 },
      { id: "var-9-f", size: "10", fabric: "jeans-leve", stock: 5 },
      { id: "var-10-f", size: "12", fabric: "jeans-leve", stock: 3 },
    ],
    images: [
      "/images/products/4/bermuda-jeans-delave-feminina.png",
      "/images/products/4/bermuda-jeans-delave-feminina-2.png",
    ],
    isFeatured: false,
    isNew: false,
  },

  {
    id: "5",
    name: "Bermuda Jeans Barra Desfiada Masculina",
    slug: "bermuda-jeans-barra-desfiada-masculina",
    description:
      "Bermuda jeans masculina com barra desfiada e lavagem média. Modelagem evasê com cós elástico.",
    season: "primavera-verao",
    priceInCents: 9990,
    compareAtPriceInCents: 11990,
    category: "bermudas",
    collection: "primavera-verao",
    fabrics: ["jeans-leve", "sarja"],
    sizes: ["4", "6", "8", "10"],
    variants: [
      { id: "var-11-m", size: "4", fabric: "jeans-leve", stock: 8 },
      { id: "var-12-m", size: "6", fabric: "jeans-leve", stock: 7 },
      { id: "var-13-m", size: "8", fabric: "sarja", stock: 6 },
      { id: "var-14-m", size: "10", fabric: "sarja", stock: 4 },
    ],
    images: [
      "/images/products/5/bermuda-jeans-barra-desfiada-masculina.png",
      "/images/products/5/bermuda-jeans-barra-desfiada-masculina-2.png",
    ],
    isFeatured: false,
    isNew: true,
  },
  {
    id: "6",
    name: "Shorts Jeans Barra Desfiada Feminina",
    slug: "shorts-jeans-barra-desfiada-feminina",
    description:
      "Shorts jeans feminina com barra desfiada e lavagem média. Modelagem evasê com cós elástico.",
    season: "primavera-verao",
    priceInCents: 9990,
    compareAtPriceInCents: 11990,
    category: "shorts",
    collection: "primavera-verao",
    fabrics: ["jeans-leve", "sarja"],
    sizes: ["4", "6", "8", "10"],
    variants: [
      { id: "var-11-f", size: "4", fabric: "jeans-leve", stock: 8 },
      { id: "var-12-f", size: "6", fabric: "jeans-leve", stock: 7 },
      { id: "var-13-f", size: "8", fabric: "sarja", stock: 6 },
      { id: "var-14-f", size: "10", fabric: "sarja", stock: 4 },
    ],
    images: [
      "/images/products/6/shorts-jeans-barra-desfiada-feminina.png",
      "/images/products/6/shorts-jeans-barra-desfiada-feminina-2.png",
    ],
    isFeatured: false,
    isNew: true,
  },

  {
    id: "7",
    name: "Jaqueta Jeans com Forro Fleece Masculino",
    slug: "jaqueta-jeans-forro-fleece-masculino",
    description:
      "Jaqueta jeans masculina com forro interno em fleece. Fechamento por botões e bolsos laterais.",
    season: "outono-inverno",
    priceInCents: 15990,
    compareAtPriceInCents: 17990,
    category: "jaquetas",
    collection: "outono-inverno",
    fabrics: ["jeans-encorpado", "moletom"],
    sizes: ["6", "8", "10", "12", "14"],
    variants: [
      { id: "var-15-m", size: "6", fabric: "jeans-encorpado", stock: 4 },
      { id: "var-16-m", size: "8", fabric: "jeans-encorpado", stock: 5 },
      { id: "var-17-m", size: "10", fabric: "moletom", stock: 6 },
      { id: "var-18-m", size: "12", fabric: "moletom", stock: 4 },
      { id: "var-19-m", size: "14", fabric: "moletom", stock: 2 },
    ],
    images: [
      "/images/products/7/jaqueta-jeans-forro-fleece-masculino.png",
      "/images/products/7/jaqueta-jeans-forro-fleece-masculino-2.png",
    ],
    isFeatured: false,
    isNew: false,
  },
  {
    id: "8",
    name: "Jaqueta Jeans Estonada Feminina",
    slug: "jaqueta-jeans-estonada-feminina",
    description:
      "Jaqueta jeans feminina com acabamento estonado. Fechamento por botões e bolsos com acabamento bordado.",
    season: "outono-inverno",
    priceInCents: 15990,
    compareAtPriceInCents: 17990,
    category: "jaquetas",
    collection: "outono-inverno",
    fabrics: ["jeans-encorpado", "moletom"],
    sizes: ["6", "8", "10", "12", "14"],
    variants: [
      { id: "var-15-f", size: "6", fabric: "jeans-encorpado", stock: 4 },
      { id: "var-16-f", size: "8", fabric: "jeans-encorpado", stock: 5 },
      { id: "var-17-f", size: "10", fabric: "moletom", stock: 6 },
      { id: "var-18-f", size: "12", fabric: "moletom", stock: 4 },
      { id: "var-19-f", size: "14", fabric: "moletom", stock: 2 },
    ],
    images: [
      "/images/products/8/jaqueta-jeans-estonada-feminina.png",
      "/images/products/8/jaqueta-jeans-estonada-feminina-2.png",
    ],
    isFeatured: false,
    isNew: false,
  },

  {
    id: "9",
    name: "Calça Jeans Escura Masculina",
    slug: "calca-jeans-escura-masculina",
    description:
      "Calça jeans masculina em lavagem escura com tecido encorpado e costuras reforçadas. Ideal para dias frios.",
    season: "outono-inverno",
    priceInCents: 13990,
    category: "calcas",
    collection: "outono-inverno",
    fabrics: ["jeans-medio", "jeans-encorpado"],
    sizes: ["4", "6", "8", "10", "12"],
    variants: [
      { id: "var-20-m", size: "4", fabric: "jeans-medio", stock: 6 },
      { id: "var-21-m", size: "6", fabric: "jeans-medio", stock: 8 },
      { id: "var-22-m", size: "8", fabric: "jeans-encorpado", stock: 5 },
      { id: "var-23-m", size: "10", fabric: "jeans-encorpado", stock: 4 },
      { id: "var-24-m", size: "12", fabric: "jeans-encorpado", stock: 3 },
    ],
    images: [
      "/images/products/9/calca-jeans-escura-masculina.png",
      "/images/products/9/calca-jeans-escura-masculina-2.png",
    ],
    isFeatured: false,
    isNew: false,
  },
  {
    id: "10",
    name: "Calça Jeans Feminina Dark Fit Confort",
    slug: "calca-jeans-feminina-dark-fit-confort",
    description:
      "Calça jeans feminina em lavagem escura com cós parcialmente elástico. Tecido encorpado que mantém o calor sem prender os movimentos.",
    season: "outono-inverno",
    priceInCents: 13990,
    category: "calcas",
    collection: "outono-inverno",
    fabrics: ["jeans-medio", "jeans-encorpado"],
    sizes: ["4", "6", "8", "10", "12"],
    variants: [
      { id: "var-20-f", size: "4", fabric: "jeans-medio", stock: 6 },
      { id: "var-21-f", size: "6", fabric: "jeans-medio", stock: 8 },
      { id: "var-22-f", size: "8", fabric: "jeans-encorpado", stock: 5 },
      { id: "var-23-f", size: "10", fabric: "jeans-encorpado", stock: 4 },
      { id: "var-24-f", size: "12", fabric: "jeans-encorpado", stock: 3 },
    ],
    images: [
      "/images/products/10/calca-jeans-feminina-dark-fit-confort.png",
      "/images/products/10/calca-jeans-feminina-dark-fit-confort-2.png",
    ],
    isFeatured: true,
    isNew: false,
  },

  {
    id: "11",
    name: "Bermuda Jeans Cintura Elástica Masculina",
    slug: "bermuda-jeans-cintura-elastica-masculina",
    description:
      "Bermuda jeans masculina com cintura totalmente elástica e cordão de ajuste. Tecido leve e resistente para o uso diário.",
    season: "primavera-verao",
    priceInCents: 7990,
    category: "bermudas",
    collection: "primavera-verao",
    fabrics: ["jeans-leve", "sarja"],
    sizes: ["2", "4", "6", "8"],
    variants: [
      { id: "var-25-m", size: "2", fabric: "jeans-leve", stock: 8 },
      { id: "var-26-m", size: "4", fabric: "jeans-leve", stock: 10 },
      { id: "var-27-m", size: "6", fabric: "sarja", stock: 6 },
      { id: "var-28-m", size: "8", fabric: "sarja", stock: 5 },
    ],
    images: [
      "/images/products/11/bermuda-jeans-cintura-elastica-masculina.png",
      "/images/products/11/bermuda-jeans-cintura-elastica-masculina-2.png",
    ],
    isFeatured: false,
    isNew: true,
  },
  {
    id: "12",
    name: "Bermuda Jeans Destroyed Clara Feminina",
    slug: "bermuda-jeans-destroyed-clara-elastica-feminina",
    description:
      "Bermuda jeans feminina clara com efeito destroyed, cintura elástica e bolsos funcionais. Perfeita para um visual despojado e confortável no dia a dia.",
    season: "primavera-verao",
    priceInCents: 7990,
    category: "bermudas",
    collection: "primavera-verao",
    fabrics: ["jeans-leve", "sarja"],
    sizes: ["2", "4", "6", "8"],
    variants: [
      { id: "var-25-f", size: "2", fabric: "jeans-leve", stock: 8 },
      { id: "var-26-f", size: "4", fabric: "jeans-leve", stock: 10 },
      { id: "var-27-f", size: "6", fabric: "sarja", stock: 6 },
      { id: "var-28-f", size: "8", fabric: "sarja", stock: 5 },
    ],
    images: [
      "/images/products/12/bermuda-jeans-destroyed-clara-elastica-feminina.png",
      "/images/products/12/bermuda-jeans-destroyed-clara-elastica-feminina-2.png",
    ],
    isFeatured: false,
    isNew: true,
  },
  {
    id: "13",
    name: "Calça Jeans Masculina Skinny Básica",
    slug: "calca-jeans-masculina-skinny-basica",
    description:
      "Calça jeans masculina corte skinny em lavagem média, com elastano para maior mobilidade. Ideal para o dia a dia com um visual moderno e despojado.",
    season: "outono-inverno",
    priceInCents: 12990,
    category: "calcas",
    collection: "basicos",
    fabrics: ["jeans-medio", "jeans-com-elastano"],
    sizes: ["4", "6", "8", "10", "12", "14"],
    variants: [
      { id: "var-29-m", size: "4", fabric: "jeans-medio", stock: 7 },
      { id: "var-30-m", size: "6", fabric: "jeans-medio", stock: 9 },
      { id: "var-31-m", size: "8", fabric: "jeans-com-elastano", stock: 6 },
      { id: "var-32-m", size: "10", fabric: "jeans-com-elastano", stock: 5 },
      { id: "var-33-m", size: "12", fabric: "jeans-com-elastano", stock: 4 },
      { id: "var-34-m", size: "14", fabric: "jeans-com-elastano", stock: 3 },
    ],
    images: [
      "/images/products/13/calca-jeans-masculina-skinny-basica.png",
      "/images/products/13/calca-jeans-masculina-skinny-basica-2.png",
    ],
    isFeatured: false,
    isNew: true,
  },
  {
    id: "14",
    name: "Bermuda Jeans Masculina Cargo Reforçada",
    slug: "bermuda-jeans-masculina-cargo-reforcada",
    description:
      "Bermuda jeans masculina estilo cargo com bolsos laterais funcionais e costuras reforçadas. Tecido encorpado que garante durabilidade para o uso intenso.",
    season: "primavera-verao",
    priceInCents: 9990,
    category: "bermudas",
    collection: "primavera-verao",
    fabrics: ["jeans-encorpado", "sarja"],
    sizes: ["4", "6", "8", "10", "12"],
    variants: [
      { id: "var-35-m", size: "4", fabric: "jeans-encorpado", stock: 8 },
      { id: "var-36-m", size: "6", fabric: "jeans-encorpado", stock: 10 },
      { id: "var-37-m", size: "8", fabric: "sarja", stock: 7 },
      { id: "var-38-m", size: "10", fabric: "sarja", stock: 5 },
      { id: "var-39-m", size: "12", fabric: "sarja", stock: 4 },
    ],
    images: [
      "/images/products/14/bermuda-jeans-masculina-cargo-reforcada.png",
      "/images/products/14/bermuda-jeans-masculina-cargo-reforcada-2.png",
    ],
    isFeatured: false,
    isNew: false,
  },
  {
    id: "15",
    name: "Short Jeans Feminino Cintura Alta Destroyed",
    slug: "short-jeans-feminino-cintura-alta-destroyed",
    description:
      "Short jeans feminino de cintura alta com efeito destroyed e barra desfiada. Tecido leve e confortável, perfeito para os dias quentes.",
    season: "primavera-verao",
    priceInCents: 6990,
    category: "shorts",
    collection: "primavera-verao",
    fabrics: ["jeans-leve", "sarja"],
    sizes: ["2", "4", "6", "8", "10"],
    variants: [
      { id: "var-40-f", size: "2", fabric: "jeans-leve", stock: 6 },
      { id: "var-41-f", size: "4", fabric: "jeans-leve", stock: 9 },
      { id: "var-42-f", size: "6", fabric: "jeans-leve", stock: 8 },
      { id: "var-43-f", size: "8", fabric: "sarja", stock: 5 },
      { id: "var-44-f", size: "10", fabric: "sarja", stock: 3 },
    ],
    images: [
      "/images/products/15/short-jeans-feminino-cintura-alta-destroyed.png",
      "/images/products/15/short-jeans-feminino-cintura-alta-destroyed-2.png",
    ],
    isFeatured: false,
    isNew: true,
  },
  {
    id: "16",
    name: "Jaqueta Jeans Feminina Destroyed",
    slug: "jaqueta-jeans-feminina-destroyed",
    description:
      "Jaqueta jeans feminina com acabamento destroyed e lavagem estonada. Modelagem com bolsos frontais e fechamento por botões. Ideal para composições modernas e despojadas no outono e inverno.",
    season: "outono-inverno",
    priceInCents: 19990,
    category: "jaquetas",
    collection: "outono-inverno",
    fabrics: ["jeans-estonado", "jeans-encorpado"],
    sizes: ["2", "4", "6", "8", "10", "12"],
    variants: [
      { id: "var-45-f", size: "2", fabric: "jeans-medio", stock: 4 },
      { id: "var-46-f", size: "4", fabric: "jeans-medio", stock: 7 },
      { id: "var-47-f", size: "6", fabric: "jeans-medio", stock: 8 },
      { id: "var-48-f", size: "8", fabric: "jeans-encorpado", stock: 6 },
      { id: "var-49-f", size: "10", fabric: "jeans-encorpado", stock: 5 },
      { id: "var-50-f", size: "12", fabric: "jeans-encorpado", stock: 3 },
    ],
    images: [
      "/images/products/16/jaqueta-jeans-feminina-destroyed.png",
      "/images/products/16/jaqueta-jeans-feminina-destroyed-2.png",
    ],
    isFeatured: false,
    isNew: true,
  },
  {
    id: "17",
    name: "Jaqueta Militar Infantil Masculina",
    slug: "jaqueta-militar-infantil-masculina",
    description:
      "Jaqueta infantil masculina estilo militar com quatro bolsos frontais com abas e botões de pressão. Gola alta com zíper e fecho superior por botão. Tecido encorpado em tom chumbo, ideal para o outono e inverno. Modelagem confortável e despojada, perfeita para o dia a dia dos pequenos.",
    season: "outono-inverno",
    priceInCents: 15990,
    category: "jaquetas",
    collection: "outono-inverno",
    fabrics: ["sarja-pesada", "algodao-encorpado"],
    sizes: ["2", "4", "6", "8", "10", "12"],
    variants: [
      { id: "var-51-m", size: "2", fabric: "sarja-pesada", stock: 5 },
      { id: "var-52-m", size: "4", fabric: "sarja-pesada", stock: 8 },
      { id: "var-53-m", size: "6", fabric: "sarja-pesada", stock: 6 },
      { id: "var-54-m", size: "8", fabric: "algodao-encorpado", stock: 7 },
      { id: "var-55-m", size: "10", fabric: "algodao-encorpado", stock: 4 },
      { id: "var-56-m", size: "12", fabric: "algodao-encorpado", stock: 3 },
    ],
    images: [
      "/images/products/17/jaqueta-militar-infantil-masculina.png",
      "/images/products/17/jaqueta-militar-infantil-masculina-2.png",
    ],
    isFeatured: false,
    isNew: true,
  },
  {
    id: "18",
    name: "Shorts Jeans Curto Feminino",
    slug: "shorts-jeans-curto-feminino",
    description:
      "Shorts jeans feminino curto com modelagem slim e cintura alta. Acabamento com barra desfiada e lavagem clara estonada. Possui bolsos frontais e traseiros, fechamento por botão e zíper. Peça coringa para composições casuais no verão e primavera.",
    season: "primavera-verao",
    priceInCents: 9990,
    category: "shorts",
    collection: "primavera-verao",
    fabrics: ["jeans-claro", "jeans-medio"],
    sizes: ["2", "4", "6", "8", "10", "12"],
    variants: [
      { id: "var-57-f", size: "2", fabric: "jeans-claro", stock: 6 },
      { id: "var-58-f", size: "4", fabric: "jeans-claro", stock: 9 },
      { id: "var-59-f", size: "6", fabric: "jeans-claro", stock: 8 },
      { id: "var-60-f", size: "8", fabric: "jeans-medio", stock: 7 },
      { id: "var-61-f", size: "10", fabric: "jeans-medio", stock: 4 },
      { id: "var-62-f", size: "12", fabric: "jeans-medio", stock: 3 },
    ],
    images: [
      "/images/products/18/shorts-jeans-curto-feminino.png",
      "/images/products/18/shorts-jeans-curto-feminino-2.png",
    ],
    isFeatured: false,
    isNew: false,
  },
];

export const storeData = {
  categories,
  collections,
  fabrics,
  products,
};
