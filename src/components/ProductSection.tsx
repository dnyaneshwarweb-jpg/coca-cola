"use client";

import type { ProductSection as ProductSectionType } from "@/data/products";
import ProductCard from "./ProductCard";

type ProductSectionProps = {
  section: ProductSectionType;
  quantities: Record<string, number>;
  onQuantityChange: (productId: string, quantity: number) => void;
};

export default function ProductSection({
  section,
  quantities,
  onQuantityChange,
}: ProductSectionProps) {
  return (
    <section
      id={section.id}
      className="mb-16 scroll-mt-8"
    >
      {/* Premium Category Header */}
      <div className="relative mb-8 overflow-hidden rounded-2xl border border-[#c5a46d]/15 bg-gradient-to-br from-[#211f1c] via-[#191816] to-[#151412] p-5 sm:p-7">

        {/* Decorative Accent */}
        <div className="absolute right-0 top-0 h-32 w-32 rounded-full bg-[#c5a46d]/5 blur-3xl" />

        <div className="relative flex items-center justify-between gap-4">

          {/* Category Information */}
          <div className="min-w-0">

            <div className="mb-3 flex items-center gap-2">
              <div className="h-[2px] w-8 bg-gradient-to-r from-[#b91c24] to-[#c5a46d]" />

              <span className="text-[9px] font-bold tracking-[3px] text-[#c5a46d] sm:text-[10px]">
                COKE COLLECTION
              </span>
            </div>

            <h2 className="text-xl font-black leading-tight tracking-tight text-[#f5f1e9] sm:text-2xl md:text-3xl">
              {section.title}
            </h2>

            <p className="mt-2 text-xs leading-6 text-[#a7a29a] sm:text-sm">
              {section.subtitle}
            </p>
          </div>

          {/* Product Counter */}
          <div className="shrink-0 rounded-xl border border-[#c5a46d]/20 bg-[#c5a46d]/5 px-3 py-3 text-center sm:px-5">

            <p className="text-xl font-black text-[#dfc18a] sm:text-2xl">
              {String(section.products.length).padStart(2, "0")}
            </p>

            <p className="mt-1 text-[8px] font-bold tracking-[2px] text-[#968b7a] sm:text-[9px]">
              ITEMS
            </p>
          </div>
        </div>

        {/* Bottom Accent */}
        <div className="relative mt-5 flex items-center gap-2">
          <div className="h-px w-10 bg-[#c5a46d]/50" />
          <div className="h-px flex-1 bg-[#c5a46d]/10" />
        </div>
      </div>

      {/* Products Grid */}
      <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 sm:gap-4 lg:grid-cols-4 xl:grid-cols-5">
        {section.products.map((product) => (
          <ProductCard
            key={product.id}
            product={product}
            quantity={quantities[product.id] || 0}
            onQuantityChange={onQuantityChange}
          />
        ))}
      </div>
    </section>
  );
}