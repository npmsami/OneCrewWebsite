"use client";

import Image from "next/image";
import { Menu, X } from "lucide-react";
import { useEffect, useState } from "react";

const LINKS = [
  { href: "#top", label: "Home" },
  { href: "#about", label: "About" },
  { href: "#services", label: "Services" },
  { href: "#process", label: "Process" },
  { href: "#work", label: "Work" },
  { href: "#contact", label: "Contact" },
];

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <header
      className={[
        "fixed inset-x-0 top-0 z-50 transition-all duration-300",
        scrolled || open
          ? "border-b border-white/10 bg-ink/95 backdrop-blur-xl"
          : "border-b border-transparent bg-transparent",
      ].join(" ")}
    >
      <div className="mx-auto flex h-18 max-w-7xl items-center justify-between px-4 sm:px-6">
        <a href="#top" onClick={() => setOpen(false)} className="flex items-center gap-2.5" aria-label="OneCrew home">
          <Image src="/logo.svg" alt="" width={36} height={36} priority className="h-9 w-9 brightness-0 invert" />
          <span className="font-display text-lg font-semibold tracking-tight text-white">OneCrew</span>
        </a>

        <nav className="hidden items-center gap-8 md:flex" aria-label="Main">
          {LINKS.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="text-sm text-white/70 transition-colors hover:text-white"
            >
              {l.label}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-3">
          <a
            href="mailto:growth@onecrewtech.com"
            className="hidden rounded-full bg-electric px-5 py-2.5 text-sm font-medium text-white shadow-[0_8px_24px_-8px_rgba(74,98,255,0.8)] transition hover:bg-[#5b72ff] sm:inline-flex"
          >
            Start a Project
          </a>
          <button
            type="button"
            onClick={() => setOpen((v) => !v)}
            className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-white/15 text-white md:hidden"
            aria-label={open ? "Close menu" : "Open menu"}
            aria-expanded={open}
          >
            {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      <div
        className={[
          "overflow-hidden transition-[max-height] duration-300 md:hidden",
          open ? "max-h-[calc(100vh-4.5rem)]" : "max-h-0",
        ].join(" ")}
      >
        <nav className="flex flex-col gap-1 px-4 pb-6 pt-2" aria-label="Mobile">
          {LINKS.map((l) => (
            <a
              key={l.href}
              href={l.href}
              onClick={() => setOpen(false)}
              className="rounded-2xl px-4 py-3 text-base text-white/80 transition hover:bg-white/5 hover:text-white"
            >
              {l.label}
            </a>
          ))}
          <a
            href="mailto:growth@onecrewtech.com"
            className="mt-3 rounded-full bg-electric px-5 py-3 text-center text-sm font-medium text-white"
          >
            Start a Project
          </a>
        </nav>
      </div>
    </header>
  );
}
