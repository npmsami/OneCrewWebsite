import { ArrowUpRight } from "lucide-react";
import { RotatingScrollIndicator } from "@/components/kinetic-orange/RotatingScrollIndicator";
import { SkewedMarquee } from "@/components/kinetic-orange/SkewedMarquee";
import { Navbar } from "@/components/kinetic-orange/Navbar";
import { WorkGallery } from "@/components/kinetic-orange/WorkGallery";
import { HorizontalTicker } from "@/components/kinetic-orange/HorizontalTicker";
import { LightBeamButton } from "@/components/kinetic-orange/LightBeamButton";


const SERVICES = [
  {
    index: "01",
    title: "WEB & MOBILE APPS",
    tags: ["NEXT.JS", "REACT NATIVE", "TYPESCRIPT", "REST / GRAPHQL"],
  },
  {
    index: "02",
    title: "CLOUD & DEVOPS",
    tags: ["AWS", "GCP", "DOCKER", "CI/CD", "KUBERNETES"],
  },
  {
    index: "03",
    title: "AI AGENTS",
    tags: ["LLM OPS", "RAG", "DEPLOYMENT", "FINE-TUNING"],
  },
  {
    index: "04",
    title: "COMPLIANCE",
    tags: ["SOC 2", "GDPR", "ISO 27001", "AUDIT TRAILS"],
  },
];

export default function Home() {
  return (
    <div className="bg-brand text-ink">
      <Navbar />

      <main id="top">
        {/* ─── HERO ─── */}
        <section className="relative flex min-h-screen flex-col justify-center overflow-hidden bg-brand px-4 pb-16 pt-36 text-ink sm:px-8">

          {/* ── Background layer: atmospheric smoke ── */}
          <div className="pointer-events-none absolute inset-0 z-0 select-none">
            {/* Atmosphere image */}
            <div className="absolute inset-0 mix-blend-overlay opacity-70">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="https://framerusercontent.com/images/9zvwRJAavKKacVyhFCwHyXW1U.png?width=1536&height=1024"
                alt=""
                className="h-full w-full object-cover object-center"
                aria-hidden="true"
              />
            </div>
            {/* Bottom gradient fade — blends atmosphere into the section below */}
            <div className="absolute inset-x-0 bottom-0 h-48 bg-gradient-to-b from-transparent to-brand" />
          </div>

          {/* ── Floating hand — left ── */}
          {/* mobile: anchored top-left, visible inside section
              md+:   pulled slightly outside for the dramatic bleed effect */}
          <div
            className="pointer-events-none absolute -left-[5%] top-[4%] z-10 w-[60vw] max-w-[800px] select-none mix-blend-multiply opacity-90 md:-left-[5%] md:top-[-15%] md:w-[40vw]"
            style={{ animation: "float-hand-left 12s ease-in-out infinite" }}
            aria-hidden="true"
          >
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="https://framerusercontent.com/images/KNhiA5A2ykNYqNkj04Hk6BVg5A.png?width=1540&height=1320"
              alt=""
              className="h-auto w-full object-contain"
            />
          </div>

          {/* ── Floating hand — right ── */}
          {/* mobile: anchored bottom-right, visible inside section
              md+:   pulled slightly outside for the dramatic bleed effect */}
          <div
            className="pointer-events-none absolute -right-[5%] bottom-[4%] z-10 w-[55vw] max-w-[700px] select-none mix-blend-multiply opacity-90 md:-right-[5%] md:bottom-[-5%] md:w-[35vw]"
            style={{ animation: "float-hand-right 14s ease-in-out infinite" }}
            aria-hidden="true"
          >
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="https://framerusercontent.com/images/X89VFCABCEjjZ4oLGa3PjbOmsA.png?width=1542&height=1002"
              alt=""
              className="h-auto w-full object-contain"
            />
          </div>

          {/* ── Hero content ── */}
          <div className="relative z-20 mx-auto flex w-full max-w-[1600px] flex-1 flex-col justify-center text-center">
            <p className="mb-4 font-label text-xs uppercase tracking-[-0.02em] opacity-70">
              We Ship. You Scale.
            </p>
            <h1 className="font-display text-[9vw] font-normal uppercase leading-[0.88] tracking-[-0.04em]">
              OneCrew
              <br />
              Technologies
            </h1>
            <p className="mx-auto mt-6 max-w-2xl font-body text-base leading-relaxed opacity-80 sm:text-lg">
              We build modern web apps, mobile products, cloud infrastructure,
              AI agents, and compliance systems — end to end, zero compromise.
            </p>
          </div>

          <div className="relative z-20 mx-auto mt-10 w-full max-w-[1600px] border-t-2 border-ink">
            <div className="grid grid-cols-1 items-center gap-8 py-8 md:grid-cols-[1fr_auto_1fr] md:gap-6">
              <p className="font-label text-left text-sm uppercase tracking-[-0.02em] md:text-base">
                Remote-first — Ship globally
              </p>
              <div className="flex justify-center">
                <RotatingScrollIndicator />
              </div>
              <div className="font-display text-right text-lg uppercase leading-[0.9] tracking-[-0.04em] md:text-2xl">
                Web · Mobile
                <br />
                Cloud · AI
                <br />
                Compliance
              </div>
            </div>
          </div>
        </section>

        <SkewedMarquee />

        <section
          id="services"
          className="border-t-2 border-ink bg-ink px-4 py-20 text-paper sm:px-8"
        >
          <div className="mx-auto max-w-[1600px]">
            <p className="font-label text-xs uppercase tracking-[-0.02em] text-brand">
              Capabilities
            </p>
            <h2 className="mt-4 max-w-4xl font-display text-5xl uppercase leading-[0.88] tracking-[-0.04em] sm:text-6xl">
              Everything You Need. One Crew.
            </h2>
            <div className="mt-14 divide-y divide-paper/20 border-t border-paper/20">
              {SERVICES.map((service) => (
                <article
                  key={service.index}
                  className="group relative grid grid-cols-[auto_1fr_auto] items-center gap-4 border-b border-paper/20 py-10 transition-colors duration-200 hover:bg-paper/[0.05] md:gap-8"
                >
                  <span className="font-label text-sm text-brand md:text-base">
                    {service.index}
                  </span>
                  <div className="min-w-0">
                    <h3 className="font-display text-[7vw] font-normal uppercase leading-[0.88] tracking-[-0.04em] transition duration-200 ease-out group-hover:translate-x-4">
                      {service.title}
                    </h3>
                    <div className="mt-4 flex flex-wrap gap-2">
                      {service.tags.map((tag) => (
                        <span
                          key={tag}
                          className="rounded-full border border-paper/40 px-3 py-1 font-label text-[11px] uppercase tracking-[-0.02em] text-paper"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                  <ArrowUpRight
                    className="h-12 w-12 shrink-0 text-brand opacity-0 transition duration-200 ease-out group-hover:translate-x-4 group-hover:rotate-45 group-hover:scale-110 group-hover:opacity-100 md:h-16 md:w-16"
                    strokeWidth={2.4}
                    aria-hidden
                  />
                </article>
              ))}
            </div>
          </div>
        </section>

        <WorkGallery />

        <section
          id="work"
          className="border-t-2 border-ink bg-brand px-4 py-24 text-ink sm:px-8"
        >
          <div className="mx-auto flex max-w-[1200px] flex-col items-center text-center">
            <h2 className="font-display text-[14vw] font-normal uppercase leading-[0.88] tracking-[-0.04em]">
              Let&apos;s Build It
            </h2>
            <p className="mt-8 max-w-2xl font-body text-base leading-relaxed text-ink/90 sm:text-lg">
              From concept to production — we deliver scalable web and mobile
              apps, battle-hardened cloud pipelines, intelligent AI agents with
              full deployment support, and compliance systems that keep you
              audit-ready. One crew. Full stack.
            </p>
            <div id="contact" className="mt-12">
              <LightBeamButton href="mailto:growth@onecrewtech.com">
                Start a project →
              </LightBeamButton>
            </div>
          </div>
        </section>

        <footer className="border-t-2 border-ink bg-ink px-4 py-10 text-paper sm:px-8">
          <div className="mx-auto flex max-w-[1600px] flex-col gap-6 md:flex-row md:items-center md:justify-between">
            <p className="font-label text-xs uppercase tracking-[-0.02em] text-paper/80">
              © {new Date().getFullYear()} OneCrew Technologies
            </p>
            <div className="flex flex-wrap gap-6 font-label text-xs uppercase tracking-[-0.02em]">
              <a
                className="text-paper transition duration-200 hover:translate-x-4 hover:scale-110 hover:text-brand"
                href="#top"
              >
                Back to top
              </a>
              <a
                className="text-paper transition duration-200 hover:translate-x-4 hover:scale-110 hover:text-brand"
                href="mailto:growth@onecrewtech.com"
              >
                Email
              </a>
              <a
                className="text-paper transition duration-200 hover:translate-x-4 hover:scale-110 hover:text-brand"
                href="https://www.linkedin.com/company/onecrew-technologies/"
                target="_blank"
                rel="noreferrer"
              >
                LinkedIn
              </a>
            </div>
          </div>
        </footer>
      </main>
    </div>
  );
}
