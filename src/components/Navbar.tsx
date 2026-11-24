export default function Navbar() {
  return (
    <nav className="mb-8 overflow-hidden rounded-2xl border border-[#c5a46d]/15 bg-gradient-to-r from-[#211f1c] via-[#191816] to-[#151412] shadow-xl shadow-black/20">

      {/* Main Navbar */}
      <div className="flex items-center justify-between gap-3 px-4 py-4 sm:px-6 md:px-8">

        {/* Logo & Brand */}
        <a href="#" className="flex min-w-0 items-center gap-3">

          {/* PC Logo */}
          <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl border border-[#c5a46d]/40 bg-[#c5a46d]/5 sm:h-12 sm:w-12">
            <span className="text-xl font-black italic tracking-tighter text-[#c5a46d]">
              PC
            </span>
          </div>

          {/* Brand Name */}
          <div className="min-w-0">
            <h2 className="truncate text-base font-black tracking-[1.5px] text-white sm:text-xl">
              PRANAV<span className="text-[#c5a46d]"> COKE</span>
            </h2>

            <div className="mt-1 flex items-center gap-2">
              <div className="h-px w-4 bg-[#b91c24]" />

              <p className="truncate text-[8px] font-bold tracking-[2px] text-[#948b7d] sm:text-[9px] sm:tracking-[3px]">
                PREMIUM DISTRIBUTION
              </p>
            </div>
          </div>
        </a>

        {/* Desktop Navigation */}
        <div className="hidden items-center gap-6 text-sm font-semibold text-[#a7a29a] lg:flex xl:gap-8">
          <a href="#" className="hover:text-[#c5a46d]">
            Home
          </a>

          <a href="#products" className="hover:text-[#c5a46d]">
            Products
          </a>

          <a href="#customer" className="hover:text-[#c5a46d]">
            Customer
          </a>

          <a href="#order" className="hover:text-[#c5a46d]">
            Order
          </a>
        </div>

        {/* Order Button */}
        <a
          href="#customer"
          className="shrink-0 rounded-xl border border-[#c5a46d]/30 bg-gradient-to-r from-[#b91c24] to-[#8f151c] px-3 py-2.5 text-xs font-bold text-white shadow-lg shadow-red-950/20 hover:brightness-110 sm:px-5 sm:py-3 sm:text-sm"
        >
          Order Now
        </a>
      </div>

      {/* Mobile Navigation */}
      <div className="border-t border-[#c5a46d]/10 px-3 py-3 lg:hidden">
        <div className="flex items-center justify-around gap-2">

          <a
            href="#"
            className="rounded-lg px-3 py-2 text-xs font-semibold text-[#a7a29a] hover:bg-white/5 hover:text-[#c5a46d]"
          >
            Home
          </a>

          <a
            href="#products"
            className="rounded-lg px-3 py-2 text-xs font-semibold text-[#a7a29a] hover:bg-white/5 hover:text-[#c5a46d]"
          >
            Products
          </a>

          <a
            href="#customer"
            className="rounded-lg px-3 py-2 text-xs font-semibold text-[#a7a29a] hover:bg-white/5 hover:text-[#c5a46d]"
          >
            Customer
          </a>

          <a
            href="#order"
            className="rounded-lg px-3 py-2 text-xs font-semibold text-[#a7a29a] hover:bg-white/5 hover:text-[#c5a46d]"
          >
            Order
          </a>

        </div>
      </div>
    </nav>
  );
}