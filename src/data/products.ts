
export type Product = {
  id: string;
  name: string;
  pack: string;
  mrp?: number;
  image?: string;
};

export type ProductSection = {
  id: string;
  title: string;
  subtitle: string;
  products: Product[];
};

const imageById: Record<string, string> = {
  // ₹10 CFL
  "coke-150": "/products/coke.jpg",
  "fanta-150": "/products/fanta.jpg",
  "limca-150": "/products/limca.jpg",
  "maaza-tetra": "/products/maaza-tetra.jpg",
  "rimzim-jeera": "/products/rimzim-jeera.jpg",

  // ₹20 - 250ml
  "sprite-250": "/products/sprite.jpg",
  "thumsup-250": "/products/thums-up.jpg",
  "coke-250": "/products/coke.jpg",
  "fanta-250": "/products/fanta.jpg",
  "limca-250": "/products/limca.jpg",
  "maaza-250": "/products/maaza.jpg",

  // ₹30 PET and Can
  "predator-pet": "/products/predator.jpg",
  "charged-lime": "/products/charged-lime.jpg",
  "charged-gold": "/products/charged-gold.jpg",

  // ₹35 - 740ml
  "sprite-740": "/products/sprite.jpg",
  "thumsup-740": "/products/thums-up.jpg",
  "coke-740": "/products/coke.jpg",
  "fanta-740": "/products/fanta.jpg",
  "limca-740": "/products/limca.jpg",
  "maaza-740": "/products/maaza.jpg",

  // ₹50 - 1 Litre
  "sprite-1l": "/products/sprite.jpg",
  "thumsup-1l": "/products/thums-up.jpg",
  "coke-1l": "/products/coke.jpg",
  "fanta-1l": "/products/fanta.jpg",
  "limca-1l": "/products/limca.jpg",
  "maaza-1l": "/products/maaza.jpg",

  // 2.25 Litre
  "sprite-225": "/products/sprite.jpg",
  "thumsup-225": "/products/thums-up.jpg",
  "coke-225": "/products/coke.jpg",
  "fanta-225": "/products/fanta.jpg",

  // Can Pack - separate images
  "sprite-can": "/products/sprite-can.jpg",
  "thumsup-can": "/products/thums-up-can.jpg",
  "coke-can": "/products/coke-can.jpg",
  "fanta-can": "/products/fanta-can.jpg",
  "diet-coke-can": "/products/diet-coke-can.jpg",

  // Energy Can - existing images
  "monster-energy": "/products/monster-energy.jpg",
  "monster-ultra": "/products/monster-ultra.jpg",
  "predator-energy": "/products/predator-energy-can.jpg",

  // Kinley
  "kinley-1l": "/products/kinley-water.jpg",
  "kinley-500": "/products/kinley-water.jpg",
  "kinley-soda-250": "/products/kinley-soda.jpg",
  "kinley-soda-750": "/products/kinley-soda.jpg",
};

const sections: ProductSection[] = [
  {
    id: "cfl-10",
    title: "₹10 MRP",
    subtitle: "CFL • 150ml",
    products: [
      { id: "coke-150", name: "Coke", pack: "150ml", mrp: 10 },
      { id: "fanta-150", name: "Fanta", pack: "150ml", mrp: 10 },
      { id: "limca-150", name: "Limca", pack: "150ml", mrp: 10 },
      { id: "maaza-tetra", name: "Maaza", pack: "Tetra Pack", mrp: 10 },
      { id: "rimzim-jeera", name: "Rimzim Jeera", pack: "250ml", mrp: 10 },
    ],
  },
  {
    id: "mrp-20",
    title: "₹20 MRP",
    subtitle: "250ml",
    products: [
      { id: "sprite-250", name: "Sprite", pack: "250ml", mrp: 20 },
      { id: "thumsup-250", name: "Thums Up", pack: "250ml", mrp: 20 },
      { id: "coke-250", name: "Coke", pack: "250ml", mrp: 20 },
      { id: "fanta-250", name: "Fanta", pack: "250ml", mrp: 20 },
      { id: "limca-250", name: "Limca", pack: "250ml", mrp: 20 },
      { id: "maaza-250", name: "Maaza", pack: "250ml", mrp: 20 },
    ],
  },
  {
    id: "predator-pet",
    title: "₹30 MRP",
    subtitle: "PET Bottle",
    products: [
      { id: "predator-pet", name: "Predator", pack: "PET Bottle", mrp: 30 },
    ],
  },
  {
    id: "charged-can",
    title: "₹30 MRP",
    subtitle: "Can Pack",
    products: [
      { id: "charged-lime", name: "Charged Lime", pack: "Can Pack", mrp: 30 },
      { id: "charged-gold", name: "Charged Gold", pack: "Can Pack", mrp: 30 },
    ],
  },
  {
    id: "mrp-35",
    title: "₹35 MRP",
    subtitle: "740ml",
    products: [
      { id: "sprite-740", name: "Sprite", pack: "740ml", mrp: 35 },
      { id: "thumsup-740", name: "Thums Up", pack: "740ml", mrp: 35 },
      { id: "coke-740", name: "Coke", pack: "740ml", mrp: 35 },
      { id: "fanta-740", name: "Fanta", pack: "740ml", mrp: 35 },
      { id: "limca-740", name: "Limca", pack: "740ml", mrp: 35 },
      { id: "maaza-740", name: "Maaza", pack: "740ml", mrp: 35 },
    ],
  },
  {
    id: "mrp-50",
    title: "₹50 MRP",
    subtitle: "1 Litre",
    products: [
      { id: "sprite-1l", name: "Sprite", pack: "1 Litre", mrp: 50 },
      { id: "thumsup-1l", name: "Thums Up", pack: "1 Litre", mrp: 50 },
      { id: "coke-1l", name: "Coke", pack: "1 Litre", mrp: 50 },
      { id: "fanta-1l", name: "Fanta", pack: "1 Litre", mrp: 50 },
      { id: "limca-1l", name: "Limca", pack: "1 Litre", mrp: 50 },
      { id: "maaza-1l", name: "Maaza", pack: "1 Litre", mrp: 50 },
    ],
  },
  {
    id: "family-pack",
    title: "2.25 Litre",
    subtitle: "Family Pack",
    products: [
      { id: "sprite-225", name: "Sprite", pack: "2.25 Litre" },
      { id: "thumsup-225", name: "Thums Up", pack: "2.25 Litre" },
      { id: "coke-225", name: "Coke", pack: "2.25 Litre" },
      { id: "fanta-225", name: "Fanta", pack: "2.25 Litre" },
    ],
  },
  {
    id: "can-pack",
    title: "CAN PACK",
    subtitle: "Soft Drinks",
    products: [
      { id: "sprite-can", name: "Sprite", pack: "Can Pack" },
      { id: "thumsup-can", name: "Thums Up", pack: "Can Pack" },
      { id: "coke-can", name: "Coke", pack: "Can Pack" },
      { id: "fanta-can", name: "Fanta", pack: "Can Pack" },
      { id: "diet-coke-can", name: "Dait Coke", pack: "Can Pack" },
    ],
  },
  {
    id: "energy-can",
    title: "ENERGY CAN",
    subtitle: "Energy Drinks",
    products: [
      { id: "monster-energy", name: "Monster Energy", pack: "Energy Can" },
      { id: "monster-ultra", name: "Monster Ultra", pack: "Energy Can" },
      { id: "predator-energy", name: "Predator", pack: "Energy Can" },
    ],
  },
  {
    id: "kinley-water",
    title: "KINLEY WATER",
    subtitle: "Packaged Drinking Water",
    products: [
      { id: "kinley-1l", name: "Kinley Water", pack: "1 Litre" },
      { id: "kinley-500", name: "Kinley Water", pack: "500ml" },
    ],
  },
  {
    id: "kinley-soda",
    title: "KINLEY SODA",
    subtitle: "Soda Water",
    products: [
      { id: "kinley-soda-250", name: "Kinley Soda", pack: "250ml" },
      { id: "kinley-soda-750", name: "Kinley Soda", pack: "750ml" },
    ],
  },
];

export const productSections: ProductSection[] = sections.map((section) => ({
  ...section,
  products: section.products.map((product) => ({
    ...product,
    image: imageById[product.id],
  })),
}));
