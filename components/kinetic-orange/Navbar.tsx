"use client";

import Image from "next/image";
import { useEffect, useState } from "react";

const NAV_LINKS = [
  { href: "#work", label: "WORK" },
  { href: "#services", label: "SERVICES" },
  { href: "#contact", label: "CONTACT" },
];

const SOCIALS = [
  {
    href: "https://x.com",
    label: "X",
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor" aria-hidden>
        <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
      </svg>
    ),
  },
  {
    href: "https://github.com",
    label: "GitHub",
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="currentColor" aria-hidden>
        <path d="M12 .5C5.65.5.5 5.65.5 12c0 5.1 3.3 9.4 7.9 10.9.6.1.8-.25.8-.55 0-.27-.01-1.16-.01-2.1-3.2.7-3.9-1.35-3.9-1.35-.53-1.35-1.3-1.7-1.3-1.7-1.05-.72.08-.7.08-.7 1.16.08 1.77 1.2 1.77 1.2 1.03 1.77 2.7 1.26 3.36.96.1-.75.4-1.26.73-1.55-2.55-.3-5.23-1.28-5.23-5.7 0-1.26.45-2.29 1.2-3.1-.12-.3-.52-1.52.12-3.17 0 0 1-.32 3.3 1.18a11.4 11.4 0 0 1 6 0c2.28-1.5 3.28-1.18 3.28-1.18.64 1.65.24 2.87.12 3.17.75.81 1.2 1.84 1.2 3.1 0 5.43-2.68 6.4-5.24 6.7.42.36.8 1.08.8 2.18 0 1.57-.01 2.84-.01 3.23 0 .31.21.67.81.55A10.5 10.5 0 0 0 23.5 12C23.5 5.65 18.35.5 12 .5z" />
      </svg>
    ),
  },
  {
    href: "https://linkedin.com",
    label: "LinkedIn",
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="currentColor" aria-hidden>
        <path d="M4.98 3.5C4.98 4.88 3.86 6 2.5 6S0 4.88 0 3.5 1.12 1 2.5 1 4.98 2.12 4.98 3.5zM.5 8h4V23h-4V8zm7.5 0h3.8v2h.05c.53-1 1.84-2.05 3.8-2.05 4.06 0 4.8 2.67 4.8 6.14V23h-4v-6.3c0-1.5-.03-3.43-2.1-3.43-2.1 0-2.42 1.64-2.42 3.33V23h-4V8z" />
      </svg>
    ),
  },
];

/* ── Hamburger icon — two bars animate into an X ── */
function BurgerIcon({ open }: { open: boolean }) {
  return (
    <div className="relative h-5 w-6" aria-hidden>
      <span
        className={[
          "absolute left-0 h-[2px] w-full bg-ink transition-all duration-300 ease-in-out",
          open ? "top-1/2 -translate-y-1/2 rotate-45" : "top-0",
        ].join(" ")}
      />
      <span
        className={[
          "absolute left-0 top-1/2 h-[2px] -translate-y-1/2 bg-ink transition-all duration-300 ease-in-out",
          open ? "w-0 opacity-0" : "w-full opacity-100",
        ].join(" ")}
      />
      <span
        className={[
          "absolute left-0 h-[2px] w-full bg-ink transition-all duration-300 ease-in-out",
          open ? "top-1/2 -translate-y-1/2 -rotate-45" : "bottom-0",
        ].join(" ")}
      />
    </div>
  );
}

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  /* lock body scroll when menu is open */
  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [menuOpen]);

  const closeMenu = () => setMenuOpen(false);

  return (
    <>
      {/* ── Top bar ── */}
      <header
        className={[
          "fixed inset-x-0 top-0 z-50 px-4 py-4 transition-all duration-500 sm:px-8",
          scrolled || menuOpen
            ? "bg-brand/95 backdrop-blur-md shadow-[0_10px_30px_rgba(0,0,0,0.10)]"
            : "bg-transparent",
        ].join(" ")}
      >
        <div className="mx-auto flex max-w-[1600px] items-center justify-between gap-4">
          {/* Logo */}
          <a
            href="#top"
            onClick={closeMenu}
            className="shrink-0 transition duration-200 hover:scale-110"
            aria-label="OneCrew home"
          >
            <Image
              src="/logo.svg"
              alt="OneCrew"
              width={72}
              height={72}
              priority
              className="mix-blend-multiply h-auto w-[72px]"
            />
          </a>

          {/* Desktop pill nav */}
          <nav
            aria-label="Primary"
            className="hidden rounded-full border-2 border-ink bg-ink px-2 py-1.5 md:flex md:items-center md:gap-1"
          >
            {NAV_LINKS.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="rounded-full px-4 py-2 font-label text-xs uppercase tracking-[-0.02em] text-paper transition duration-200 hover:bg-paper hover:text-ink"
              >
                {item.label}
              </a>
            ))}
          </nav>

          {/* Right side */}
          <div className="flex items-center gap-3 sm:gap-4">
            {/* Social icons — visible on desktop only */}
            {SOCIALS.map((s) => (
              <a
                key={s.label}
                href={s.href}
                aria-label={s.label}
                target="_blank"
                rel="noreferrer"
                className="hidden text-ink transition duration-200 ease-out hover:scale-110 md:block"
              >
                {s.icon}
              </a>
            ))}

            {/* Hamburger — mobile only */}
            <button
              className="flex h-10 w-10 items-center justify-center bg-transparent transition duration-200 md:hidden"
              onClick={() => setMenuOpen((v) => !v)}
              aria-label={menuOpen ? "Close menu" : "Open menu"}
              aria-expanded={menuOpen}
            >
              <BurgerIcon open={menuOpen} />
            </button>
          </div>
        </div>
      </header>

      {/* ── Full-screen mobile menu overlay ── */}
      <div
        className={[
          "fixed inset-0 z-40 flex flex-col bg-ink md:hidden",
          "transition-all duration-500 ease-in-out",
          menuOpen
            ? "opacity-100 pointer-events-auto"
            : "opacity-0 pointer-events-none",
        ].join(" ")}
        aria-hidden={!menuOpen}
      >
        {/* Top padding so content clears the header bar */}
        <div className="flex flex-1 flex-col justify-between px-6 pb-12 pt-28">

          {/* Nav links — large brutalist type */}
          <nav aria-label="Mobile primary" className="flex flex-col">
            {NAV_LINKS.map((item, i) => (
              <a
                key={item.href}
                href={item.href}
                onClick={closeMenu}
                className={[
                  "group flex items-center justify-between border-t-2 border-paper/10 py-6",
                  "font-display text-[14vw] uppercase leading-none tracking-[-0.04em] text-paper",
                  "transition duration-300 ease-out hover:text-brand",
                  menuOpen ? "translate-x-0 opacity-100" : "translate-x-6 opacity-0",
                ].join(" ")}
                style={{
                  transitionDelay: menuOpen ? `${i * 80 + 100}ms` : "0ms",
                }}
              >
                <span>{item.label}</span>
                {/* Orange arrow reveal on hover */}
                <span className="translate-x-0 text-brand opacity-0 transition duration-300 group-hover:translate-x-2 group-hover:opacity-100">
                  →
                </span>
              </a>
            ))}
            {/* bottom rule */}
            <div className="border-t-2 border-paper/10" />
          </nav>

          {/* Bottom row — socials + label */}
          <div
            className={[
              "flex items-end justify-between",
              "transition duration-500",
              menuOpen ? "translate-y-0 opacity-100" : "translate-y-4 opacity-0",
            ].join(" ")}
            style={{ transitionDelay: menuOpen ? "400ms" : "0ms" }}
          >
            {/* Studio label */}
            <div>
              <p className="font-label text-[10px] uppercase tracking-[-0.02em] text-paper/40">
                Software House
              </p>
              <p className="mt-1 font-label text-[10px] uppercase tracking-[-0.02em] text-brand">
                hello@onecrew.dev
              </p>
            </div>

            {/* Social icons */}
            <div className="flex items-center gap-5">
              {SOCIALS.map((s) => (
                <a
                  key={s.label}
                  href={s.href}
                  aria-label={s.label}
                  target="_blank"
                  rel="noreferrer"
                  className="text-paper/60 transition duration-200 hover:scale-110 hover:text-brand"
                >
                  {s.icon}
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Decorative big watermark */}
        <div
          className="pointer-events-none absolute bottom-4 left-4 select-none font-display text-[22vw] uppercase leading-none tracking-[-0.04em] text-paper/[0.04]"
          aria-hidden
        >
          OneCrew
        </div>
      </div>
    </>
  );
}
