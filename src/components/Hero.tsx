export default function Hero() {
  return (
    <section className="relative isolate overflow-hidden rounded-[32px] border border-[#494039] bg-[#1b1a18]">

      {/* Background Layers */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#302720] via-[#1b1a18] to-[#101010]" />

      <div className="absolute -right-40 -top-40 h-[500px] w-[500px] rounded-full bg-[#b48b54]/10 blur-[120px]" />

      <div className="absolute -bottom-40 -left-40 h-[450px] w-[450px] rounded-full bg-red-900/15 blur-[120px]" />

      {/* Decorative Grid */}
      <div className="absolute inset-0 opacity-[0.04]"
        style={{
          backgroundImage:
            "linear-gradient(rgba(255,255,255,0.3) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.3) 1px, transparent 1px)",
          backgroundSize: "45px 45px",
        }}
      />

      <div className="relative z-10 grid items-center gap-10 px-6 py-12 md:px-12 md:py-20 lg:grid-cols-2 lg:px-16">

        {/* Left Content */}
        <div>

          {/* Premium Label */}
          <div className="inline-flex items-center gap-3 rounded-full border border-[#c5a46d]/30 bg-[#c5a46d]/5 px-4 py-2">
            <span className="h-2 w-2 rounded-full bg-[#c5a46d]" />

            <span className="text-[10px] font-bold tracking-[3px] text-[#c5a46d] md:text-xs">
              PREMIUM BEVERAGE DISTRIBUTION
            </span>
          </div>

          {/* Heading */}
          <h1 className="mt-8 text-5xl font-black leading-[1.05] tracking-tight md:text-7xl lg:text-[76px]">
            Refresh
            <span className="block text-white">Your</span>

            <span className="mt-2 block bg-gradient-to-r from-[#f0d9a9] via-[#c5a46d] to-[#8f6d40] bg-clip-text text-transparent">
              Business.
            </span>
          </h1>

          {/* Description */}
          <p className="mt-6 max-w-lg text-base leading-8 text-[#b7b2aa] md:text-lg">
            Discover your favourite beverages, explore our collection,
            and order conveniently with a seamless wholesale experience.
          </p>

          {/* CTA Buttons */}
          <div className="mt-9 flex flex-wrap gap-4">

            <a
              href="#products"
              className="group rounded-xl bg-gradient-to-r from-[#a51d24] to-[#d32c34] px-7 py-4 font-bold text-white shadow-xl shadow-red-950/30 transition duration-300 hover:-translate-y-1 hover:brightness-110"
            >
              Explore Products
              <span className="ml-2 transition group-hover:translate-x-1">
                →
              </span>
            </a>

            <a
              href="#customer"
              className="rounded-xl border border-[#a78b5a]/40 bg-white/[0.03] px-7 py-4 font-bold text-[#e8d8bb] transition duration-300 hover:border-[#c5a46d] hover:bg-[#c5a46d]/10"
            >
              Order Now
            </a>

          </div>

          {/* Trust Accent */}
          <div className="mt-12 flex items-center gap-4">
            <div className="h-[2px] w-12 bg-gradient-to-r from-red-600 to-[#c5a46d]" />

            <span className="text-[10px] font-bold tracking-[3px] text-[#77736d]">
              QUALITY · VARIETY · TRUST
            </span>
          </div>
        </div>

        {/* Right Decorative Brand Artwork */}
        <div className="relative mx-auto flex w-full max-w-sm items-center justify-center py-8 lg:max-w-md">

          {/* Outer Ring */}
          <div className="absolute h-[300px] w-[300px] rounded-full border border-[#c5a46d]/10 md:h-[380px] md:w-[380px]" />

          {/* Middle Ring */}
          <div className="absolute h-[250px] w-[250px] rounded-full border border-[#c5a46d]/20 md:h-[330px] md:w-[330px]" />

          {/* Inner Ring */}
          <div className="absolute h-[205px] w-[205px] rounded-full bg-gradient-to-br from-[#3b3025]/70 to-[#151515] shadow-[0_0_80px_rgba(197,164,109,0.08)] md:h-[280px] md:w-[280px]" />

          {/* Logo Emblem */}
          <div className="relative flex h-[175px] w-[175px] items-center justify-center rounded-full border border-[#c5a46d]/40 bg-gradient-to-br from-[#33271e] via-[#1c1916] to-[#100f0e] shadow-2xl md:h-[230px] md:w-[230px]">

            <div className="absolute inset-3 rounded-full border border-[#c5a46d]/15" />

            <div className="text-center">
              <p className="text-6xl font-black italic tracking-[-8px] md:text-8xl">
                <span className="text-white">P</span>
                <span className="text-[#c5a46d]">C</span>
              </p>

              <div className="mx-auto mt-3 h-[2px] w-14 bg-gradient-to-r from-red-600 to-[#c5a46d]" />

              <p className="mt-4 text-[9px] font-bold tracking-[4px] text-[#c5a46d] md:text-xs">
                PRANAV COKE
              </p>
            </div>
          </div>

          {/* Floating Accent */}
          <div className="absolute right-0 top-8 rounded-xl border border-[#c5a46d]/20 bg-[#201c18]/90 px-4 py-3 shadow-xl backdrop-blur-md">
            <p className="text-[9px] font-bold tracking-[2px] text-[#a9a198]">
              OUR STANDARD
            </p>

            <p className="mt-1 text-sm font-black text-[#e4c995]">
              PREMIUM
            </p>
          </div>

          {/* Bottom Accent */}
          <div className="absolute bottom-4 left-0 rounded-xl border border-white/10 bg-[#171615]/90 px-4 py-3 shadow-xl backdrop-blur-md">
            <p className="text-[9px] font-bold tracking-[2px] text-gray-500">
              ORDER EXPERIENCE
            </p>

            <p className="mt-1 text-sm font-bold text-white">
              Simple. Fast. Reliable.
            </p>
          </div>

        </div>
      </div>

      {/* Bottom Border Accent */}
      <div className="h-[2px] bg-gradient-to-r from-transparent via-[#c5a46d]/50 to-transparent" />

    </section>
  );
}