
"use client";

import Image from "next/image";
import type { Product } from "@/data/products";

type ProductCardProps = {
  product: Product;
  quantity: number;
  onQuantityChange: (productId: string, quantity: number) => void;
};

export default function ProductCard({
  product,
  quantity,
  onQuantityChange,
}: ProductCardProps) {
  return (
    <div className="group overflow-hidden rounded-2xl border border-[#8f1823]/25 bg-gradient-to-b from-[#261919] to-[#171111] shadow-lg transition duration-300 hover:-translate-y-1 hover:border-[#c9a45c]/50 hover:shadow-[0_12px_35px_rgba(201,164,92,0.12)]">

      {/* Product Display */}
      <div className="relative flex h-40 items-center justify-center overflow-hidden border-b border-[#c9a45c]/10 bg-gradient-to-br from-[#382020] to-[#211515] md:h-48">

        {/* Background Glow */}
        <div className="absolute h-28 w-28 rounded-full bg-[#c9a45c]/10 blur-2xl transition duration-300 group-hover:bg-[#c9a45c]/20" />

        {/* Product Image */}
        {product.image ? (
          <Image
            src={product.image}
            alt={`${product.name} ${product.pack}`}
            fill
            sizes="(max-width: 768px) 50vw, 25vw"
            className="relative z-10 object-contain p-3 transition duration-300 group-hover:scale-110"
          />
        ) : (
          <div className="relative z-10 text-6xl transition duration-300 group-hover:scale-110 md:text-7xl">
            🥤
          </div>
        )}

      </div>

      {/* Product Information */}
      <div className="p-4 md:p-5">

        <h3 className="min-h-[28px] text-base font-bold leading-tight text-[#f8f1e7] md:text-lg">
          {product.name}
        </h3>

        <p className="mt-2 text-sm text-[#b6a69b]">
          {product.pack}
        </p>

        {/* MRP */}
        {product.mrp !== undefined && (
          <div className="mt-3 inline-flex rounded-lg border border-[#c9a45c]/20 bg-[#c9a45c]/10 px-3 py-1">
            <span className="text-sm font-bold text-[#e8ca8c]">
              MRP ₹{product.mrp}
            </span>
          </div>
        )}

        {/* Quantity Selector */}
        <div className="mt-5 flex items-center justify-between rounded-xl border border-[#c9a45c]/15 bg-[#120c0c]/80 p-2">

          <button
            type="button"
            onClick={() => onQuantityChange(product.id, quantity - 1)}
            disabled={quantity === 0}
            aria-label={`Decrease ${product.name} quantity`}
            className="flex h-9 w-9 items-center justify-center rounded-lg border border-white/5 bg-[#382020] text-xl font-bold text-[#f8f1e7] transition hover:border-red-500/40 hover:bg-[#8f1823] disabled:cursor-not-allowed disabled:opacity-30"
          >
            −
          </button>

          <span className="min-w-8 text-center text-lg font-black text-white">
            {quantity}
          </span>

          <button
            type="button"
            onClick={() => onQuantityChange(product.id, quantity + 1)}
            aria-label={`Increase ${product.name} quantity`}
            className="flex h-9 w-9 items-center justify-center rounded-lg border border-[#c9a45c]/30 bg-[#49351e] text-xl font-bold text-[#e8ca8c] transition hover:border-[#e8ca8c] hover:bg-[#654a27]"
          >
            +
          </button>

        </div>
      </div>
    </div>
  );
}
