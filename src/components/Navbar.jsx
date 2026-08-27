import React from "react";

export default function Navbar() {
  const navItems = [
    { label: "ABOUT", href: "#about" },
    { label: "PROJECTS", href: "#projects" },
    { label: "CONTACT", href: "#contact" },
  ];

  return (
    <header className="sticky top-0 z-[100] w-full border-b border-white/[0.08] bg-[#0b0b0b]/75 backdrop-blur-md">
      <div className="mx-auto flex h-[64px] max-w-[1400px] items-center justify-between px-5 md:px-10">
        {/* LEFT — BRAND */}
        <a href="#" className="group flex items-center gap-3">
          {/* Small system mark */}
          <div className="relative flex h-7 w-7 items-center justify-center">
            <div className="absolute inset-0 rotate-45 border border-[#FFB52E]/50" />

            <div className="h-[5px] w-[5px] rotate-45 bg-[#FFB52E] transition-all duration-300 group-hover:scale-150" />
          </div>

          <div className="flex flex-col leading-none">
            <span className="font-mono text-[13px] font-bold tracking-[0.28em] text-[#F5F3EF] md:text-[14px]">
              MANIKANTA
            </span>

            <span className="mt-1 font-mono text-[8px] tracking-[0.25em] text-[#FFB52E]/80">
              CREATIVE SYSTEM
            </span>
          </div>
        </a>

        {/* CENTER / RIGHT NAV */}
        <nav className="hidden items-center gap-8 md:flex">
          {navItems.map((item, index) => (
            <a
              key={item.label}
              href={item.href}
              className="group relative flex items-center gap-2 py-2 font-mono text-[11px] font-medium tracking-[0.22em] text-[#C4BEB4] transition-colors duration-300 hover:text-[#F5F3EF] md:text-[12px]"
            >
              {/* index */}
              <span className="text-[9px] font-semibold text-[#FFB52E]/80">
                0{index + 1}
              </span>

              {item.label}

              {/* Hover line */}
              <span className="absolute -bottom-1 left-0 h-[1px] w-0 bg-[#FFB52E] transition-all duration-300 group-hover:w-full" />
            </a>
          ))}
        </nav>

        {/* STATUS */}
        <div className="hidden items-center gap-2 font-mono text-[9px] font-medium tracking-[0.2em] md:flex">
          <span className="text-[#858078]">SYSTEM</span>

          <span className="h-[5px] w-[5px] animate-pulse rounded-full bg-[#FFB52E]" />

          <span className="text-[#FFB52E]">ONLINE</span>
        </div>

        {/* MOBILE MENU BUTTON */}
        <button
          className="group flex flex-col gap-1.5 md:hidden"
          aria-label="Open menu"
        >
          <span className="h-[1px] w-6 bg-[#F5F3EF] transition group-hover:bg-[#FFB52E]" />
          <span className="h-[1px] w-4 self-end bg-[#FFB52E]" />
          <span className="h-[1px] w-6 bg-[#F5F3EF] transition group-hover:bg-[#FFB52E]" />
        </button>
      </div>
    </header>
  );
}
