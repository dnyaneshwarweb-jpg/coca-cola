"use client";

import { useState } from "react";

import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import CustomerForm, {
  type CustomerDetails,
} from "@/components/CustomerForm";
import ProductSection from "@/components/ProductSection";
import OrderSummary from "@/components/OrderSummary";

import { productSections } from "@/data/products";

export default function Home() {
  const [customer, setCustomer] = useState<CustomerDetails>({
    shopName: "",
    customerName: "",
    mobile: "",
    city: "",
    address: "",
    gst: "",
  });

  const [quantities, setQuantities] = useState<Record<string, number>>({});

  function handleQuantityChange(productId: string, quantity: number) {
    setQuantities((previous) => ({
      ...previous,
      [productId]: Math.max(0, quantity),
    }));
  }

  return (
    <main className="min-h-screen bg-[#11110f] px-4 py-5 text-[#f5f1e9] md:px-8">
      <div className="mx-auto max-w-7xl">

        {/* Navbar */}
        <Navbar />

        {/* Hero Section */}
        <Hero />

        {/* Customer Details */}
        <section id="customer" className="mt-12 scroll-mt-8">
          <CustomerForm
            customer={customer}
            onChange={setCustomer}
          />
        </section>

        {/* Product Collection */}
        <section id="products" className="mt-16 scroll-mt-10">

          {/* Collection Heading */}
          <div className="mb-12">
            <div className="mb-5 flex items-center gap-3">
              <div className="h-px w-10 bg-[#c5a46d]" />

              <p className="text-xs font-bold tracking-[4px] text-[#c5a46d]">
                OUR COLLECTION
              </p>
            </div>

            <h2 className="text-3xl font-black tracking-tight text-white sm:text-4xl md:text-5xl">
              Browse Products
            </h2>

            <p className="mt-4 max-w-2xl text-sm leading-7 text-[#a7a29a] sm:text-base">
              Explore our beverage collection and select the quantities
              you need for your business.
            </p>

            <div className="mt-6 flex items-center gap-3">
              <div className="h-[2px] w-12 bg-[#c5a46d]" />

              <span className="text-xs tracking-widest text-[#77736b]">
                PREMIUM BEVERAGE DISTRIBUTION
              </span>
            </div>
          </div>

          {/* Product Categories */}
          <div className="space-y-12">
            {productSections.map((section) => (
              <ProductSection
                key={section.id}
                section={section}
                quantities={quantities}
                onQuantityChange={handleQuantityChange}
              />
            ))}
          </div>
        </section>

        {/* Final Order */}
        <section id="order" className="mt-16 scroll-mt-10">
          <OrderSummary
            customer={customer}
            quantities={quantities}
            sections={productSections}
          />
        </section>

        {/* Premium Footer */}
        <footer className="mt-20 border-t border-[#c5a46d]/15 py-10">
          <div className="flex flex-col items-center text-center">

            {/* PC Logo */}
            <div className="flex h-14 w-14 items-center justify-center rounded-2xl border border-[#c5a46d]/30 bg-[#1d1b18]">
              <span className="text-xl font-black tracking-tight text-[#c5a46d]">
                PC
              </span>
            </div>

            {/* Brand */}
            <h3 className="mt-4 text-lg font-bold tracking-wide text-white">
              PRANAV COKE
            </h3>

            <p className="mt-2 text-xs tracking-[3px] text-[#c5a46d]">
              BEVERAGE DISTRIBUTION
            </p>

            <p className="mt-4 max-w-md text-sm leading-6 text-[#8c8881]">
              Your trusted partner for quality beverages and reliable
              wholesale supply.
            </p>

            {/* Divider */}
            <div className="my-7 h-px w-20 bg-[#c5a46d]/30" />

            <p className="text-xs text-[#77736b]">
              © 2026 Pranav Coke. All rights reserved.
            </p>

            <p className="mt-2 text-xs text-[#625e57]">
              Designed for quality. Built for business.
            </p>
          </div>
        </footer>

      </div>
    </main>
  );
}