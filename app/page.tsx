import Image from "next/image";
import { ArrowRight, Mail } from "lucide-react";
import { Navbar } from "@/components/site/Navbar";
import { Hero } from "@/components/site/Hero";
import { About } from "@/components/site/About";
import { Services } from "@/components/site/Services";
import { Work } from "@/components/site/Work";
import { HowWeWork } from "@/components/site/HowWeWork";

function LinkedInIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className={className} aria-hidden>
      <path d="M4.98 3.5C4.98 4.88 3.86 6 2.5 6S0 4.88 0 3.5 1.12 1 2.5 1 4.98 2.12 4.98 3.5zM.5 8h4V23h-4V8zm7.5 0h3.8v2h.05c.53-1 1.84-2.05 3.8-2.05 4.06 0 4.8 2.67 4.8 6.14V23h-4v-6.3c0-1.5-.03-3.43-2.1-3.43-2.1 0-2.42 1.64-2.42 3.33V23h-4V8z" />
    </svg>
  );
}

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <About />
        <Services />
        <HowWeWork />
        <Work />

        {/* CTA */}
        <section id="contact" className="mx-auto max-w-7xl bg-white px-4 pb-24 sm:px-6 sm:pb-28">
          <div className="relative overflow-hidden rounded-[2.5rem] bg-ink px-6 py-20 text-center text-white sm:px-12 sm:py-24">
            <div
              className="pointer-events-none absolute left-1/2 top-full h-[520px] w-[900px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[radial-gradient(closest-side,rgba(74,98,255,0.55),rgba(0,0,128,0.3)_55%,transparent)]"
              aria-hidden
            />
            <div className="relative">
              <h2 className="mx-auto max-w-3xl font-display text-3xl font-medium leading-tight tracking-tight sm:text-5xl">
                Build Standout Products.
                <br />
                Ship Them Faster.
              </h2>
              <p className="mx-auto mt-5 max-w-xl text-base leading-relaxed text-white/65">
                Tell us what you&apos;re building — from concept to production,
                one crew takes it all the way.
              </p>
              <div className="mt-10 flex flex-wrap items-center justify-center gap-3">
                <a
                  href="mailto:growth@onecrewtech.com"
                  className="group inline-flex items-center gap-2 rounded-full bg-white px-6 py-3 text-sm font-medium text-ink transition hover:bg-mist"
                >
                  Start a Project
                  <ArrowRight className="h-4 w-4 transition group-hover:translate-x-0.5" aria-hidden />
                </a>
                <a
                  href="mailto:growth@onecrewtech.com"
                  className="inline-flex items-center gap-2 rounded-full border border-white/20 px-5 py-3 text-sm text-white transition hover:bg-white/10"
                >
                  <Mail className="h-4 w-4" aria-hidden />
                  growth@onecrewtech.com
                </a>
              </div>
            </div>
          </div>
        </section>
      </main>

      <footer className="border-t border-black/5 bg-white">
        <div className="mx-auto flex max-w-7xl flex-col gap-6 px-4 py-10 sm:flex-row sm:items-center sm:justify-between sm:px-6">
          <div className="flex items-center gap-2.5">
            <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-ink">
              <Image src="/logo.svg" alt="" width={20} height={20} className="h-5 w-5 brightness-0 invert" />
            </span>
            <span className="text-sm text-muted">
              © {new Date().getFullYear()} OneCrew Technologies
            </span>
          </div>
          <nav className="flex flex-wrap items-center gap-6 text-sm text-muted" aria-label="Footer">
            <a href="#services" className="transition hover:text-ink">Services</a>
            <a href="#work" className="transition hover:text-ink">Work</a>
            <a href="mailto:growth@onecrewtech.com" className="transition hover:text-ink">Email</a>
            <a
              href="https://www.linkedin.com/company/onecrew-technologies/"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-1.5 transition hover:text-ink"
            >
              <LinkedInIcon className="h-4 w-4" /> LinkedIn
            </a>
          </nav>
        </div>
      </footer>
    </>
  );
}
