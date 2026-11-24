"use client";

export type CustomerDetails = {
  shopName: string;
  customerName: string;
  mobile: string;
  city: string;
  address: string;
  gst: string;
};

type CustomerFormProps = {
  customer: CustomerDetails;
  onChange: (customer: CustomerDetails) => void;
};

export default function CustomerForm({ customer, onChange }: CustomerFormProps) {
  function updateField(field: keyof CustomerDetails, value: string) {
    onChange({ ...customer, [field]: value });
  }

  const fields = [
    { name: "shopName", label: "Shop Name", placeholder: "Enter shop name", required: true },
    { name: "customerName", label: "Customer Name", placeholder: "Enter customer name", required: true },
    { name: "mobile", label: "Mobile Number", placeholder: "Enter mobile number", required: true },
    { name: "city", label: "City / Area", placeholder: "Enter city or area", required: true },
    { name: "gst", label: "GST Number (Optional)", placeholder: "Enter GST number", required: false },
  ] as const;

  const inputClass =
    "w-full rounded-xl border border-[#403a32] bg-[#22211f] px-4 py-4 text-white placeholder:text-[#77716a] outline-none transition duration-300 focus:border-[#c5a46d] focus:bg-[#292622] focus:ring-2 focus:ring-[#c5a46d]/10";

  return (
    <section
      id="customer"
      className="relative overflow-hidden rounded-[28px] border border-[#403a32] bg-gradient-to-br from-[#252321] via-[#1c1b19] to-[#171615] p-6 shadow-xl md:p-10"
    >
      {/* Ambient Glow */}
      <div className="pointer-events-none absolute -right-20 -top-20 h-64 w-64 rounded-full bg-[#c5a46d]/5 blur-[100px]" />

      <div className="relative z-10">
        {/* Heading */}
        <div className="mb-8">
          <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-[#c5a46d]/20 bg-[#c5a46d]/5 px-3 py-2">
            <span className="h-1.5 w-1.5 rounded-full bg-[#c5a46d]" />

            <span className="text-[10px] font-bold tracking-[3px] text-[#c5a46d]">
              CUSTOMER INFORMATION
            </span>
          </div>

          <h2 className="text-3xl font-black tracking-tight text-white md:text-4xl">
            Shop Details
          </h2>

          <p className="mt-3 text-sm leading-7 text-[#aaa39a] md:text-base">
            Enter your business details before selecting your products.
          </p>

          <div className="mt-5 h-[1px] w-full bg-gradient-to-r from-[#c5a46d]/40 via-white/5 to-transparent" />
        </div>

        {/* Form Fields */}
        <div className="grid gap-5 md:grid-cols-2">
          {fields.map((field) => (
            <div key={field.name}>
              <label className="mb-2 block text-sm font-semibold text-[#d6c5a6]">
                {field.label}
                {field.required && (
                  <span className="ml-1 text-red-500">*</span>
                )}
              </label>

              <input
                type={field.name === "mobile" ? "tel" : "text"}
                value={customer[field.name]}
                onChange={(e) => updateField(field.name, e.target.value)}
                placeholder={field.placeholder}
                required={field.required}
                className={inputClass}
              />
            </div>
          ))}

          {/* Address */}
          <div className="md:col-span-2">
            <label className="mb-2 block text-sm font-semibold text-[#d6c5a6]">
              Shop Address <span className="text-red-500">*</span>
            </label>

            <textarea
              value={customer.address}
              onChange={(e) => updateField("address", e.target.value)}
              placeholder="Enter complete shop address"
              required
              rows={4}
              className={`${inputClass} resize-none`}
            />
          </div>
        </div>

        {/* Footer Note */}
        <div className="mt-6 flex items-center gap-3 rounded-xl border border-white/5 bg-black/10 px-4 py-3">
          <span className="text-lg">🔒</span>

          <p className="text-xs leading-6 text-[#8f8981]">
            Your details will be included with your WhatsApp order for easy processing.
          </p>
        </div>
      </div>
    </section>
  );
}