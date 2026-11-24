"use client";

import type { ProductSection } from "@/data/products";
import type { CustomerDetails } from "./CustomerForm";

type OrderSummaryProps = {
  customer: CustomerDetails;
  quantities: Record<string, number>;
  sections: ProductSection[];
};

export default function OrderSummary({
  customer,
  quantities,
  sections,
}: OrderSummaryProps) {
  const totalItems = Object.values(quantities).reduce(
    (total, quantity) => total + quantity,
    0
  );

  const selectedProducts = sections.flatMap((section) =>
    section.products
      .filter((product) => (quantities[product.id] || 0) > 0)
      .map((product) => ({
        ...product,
        quantity: quantities[product.id],
      }))
  );

  function placeOrder() {
    if (
      !customer.shopName ||
      !customer.customerName ||
      !customer.mobile ||
      !customer.city ||
      !customer.address
    ) {
      alert("Please complete all required customer details.");

      document.getElementById("customer")?.scrollIntoView({
        behavior: "smooth",
      });

      return;
    }

    if (selectedProducts.length === 0) {
      alert("Please select at least one product.");
      return;
    }

    const message = `
*NEW ORDER - PRANAV COKE*

*Customer Details*
Shop Name: ${customer.shopName}
Customer Name: ${customer.customerName}
Mobile: ${customer.mobile}
City/Area: ${customer.city}
Address: ${customer.address}
GST: ${customer.gst || "Not Provided"}

*Order Products*
${selectedProducts
  .map(
    (product) =>
      `• ${product.name} (${product.pack}) × ${product.quantity}`
  )
  .join("\n")}

*Total Quantity: ${totalItems}*
`;

    const whatsappURL = `https://wa.me/918669056745?text=${encodeURIComponent(message)}`;

    window.open(whatsappURL, "_blank");
  }

  return (
    <section
      className="relative mt-12 overflow-hidden rounded-[28px] border border-[#494039] bg-gradient-to-br from-[#282522] via-[#1c1b19] to-[#141312] p-6 shadow-2xl md:p-10"
    >
      {/* Background Accent */}
      <div className="pointer-events-none absolute -right-24 -top-24 h-72 w-72 rounded-full bg-[#c5a46d]/5 blur-[100px]" />

      <div className="relative z-10">

        {/* Header */}
        <div className="flex flex-col gap-6 md:flex-row md:items-center md:justify-between">

          <div>
            <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-[#c5a46d]/20 bg-[#c5a46d]/5 px-3 py-2">
              <span className="h-1.5 w-1.5 rounded-full bg-[#c5a46d]" />

              <span className="text-[10px] font-bold tracking-[3px] text-[#c5a46d]">
                ORDER CHECKOUT
              </span>
            </div>

            <h2 className="text-3xl font-black text-white md:text-4xl">
              Order Summary
            </h2>

            <p className="mt-3 text-sm text-[#aaa39a]">
              Review your selected products before placing your order.
            </p>
          </div>

          {/* Quantity Display */}
          <div className="rounded-2xl border border-[#c5a46d]/20 bg-gradient-to-br from-[#332a20] to-[#201c18] px-7 py-5">
            <p className="text-xs font-bold tracking-[2px] text-[#a99a80]">
              TOTAL QUANTITY
            </p>

            <p className="mt-2 text-5xl font-black text-[#e5c88f]">
              {totalItems}
            </p>

            <p className="mt-1 text-xs text-[#8f8679]">
              Units selected
            </p>
          </div>
        </div>

        {/* Divider */}
        <div className="my-8 h-[1px] bg-gradient-to-r from-[#c5a46d]/30 via-white/5 to-transparent" />

        {/* Selected Products */}
        {selectedProducts.length > 0 ? (
          <div className="space-y-3">
            {selectedProducts.map((product) => (
              <div
                key={product.id}
                className="flex items-center justify-between gap-4 rounded-xl border border-white/5 bg-[#22211f] px-4 py-4 transition hover:border-[#c5a46d]/20"
              >
                <div>
                  <p className="font-bold text-[#f0ebe3]">
                    {product.name}
                  </p>

                  <p className="mt-1 text-sm text-[#928b82]">
                    {product.pack}
                  </p>
                </div>

                <div className="rounded-lg border border-[#c5a46d]/20 bg-[#33291e] px-4 py-2">
                  <span className="font-black text-[#e2c58c]">
                    × {product.quantity}
                  </span>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div className="rounded-2xl border border-dashed border-[#494039] bg-black/10 px-6 py-10 text-center">
            <p className="text-3xl">🛒</p>

            <p className="mt-3 font-semibold text-[#d5cec3]">
              Your order is currently empty
            </p>

            <p className="mt-2 text-sm text-[#89837a]">
              Select products above to see your order summary here.
            </p>
          </div>
        )}

        {/* Order Button */}
        <button
          type="button"
          onClick={placeOrder}
          className="mt-8 flex w-full items-center justify-center gap-3 rounded-2xl bg-gradient-to-r from-[#16803d] to-[#20a354] px-6 py-5 text-base font-black text-white shadow-lg shadow-green-950/20 transition duration-300 hover:-translate-y-1 hover:brightness-110 active:scale-[0.98] md:text-lg"
        >
          <span className="text-xl">☘</span>
          ORDER NOW ON WHATSAPP
        </button>

        {/* Footer */}
        <p className="mt-4 text-center text-xs leading-6 text-[#8b857c]">
          Your order and customer details will be shared directly through WhatsApp.
        </p>
      </div>
    </section>
  );
}