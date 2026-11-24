import Image from "next/image";
import { ArrowRight, Rocket, ShieldCheck, Sparkles, Timer } from "lucide-react";

const STACK = ["Next.js", "React Native", "AWS", "Docker", "Kubernetes", "Claude API", "PostgreSQL", "FastAPI"];

function StatsCard() {
  return (
    <div className="w-[15.5rem] rounded-2xl bg-white p-3.5 text-ink shadow-[0_24px_48px_-16px_rgba(6,7,42,0.45)] sm:w-[17.5rem]">
      <div className="flex items-center justify-between text-[11px]">
        <span className="font-medium">Vesper · Live</span>
        <span className="flex items-center gap-1 text-muted">
          <Timer className="h-3 w-3" aria-hidden /> In production
        </span>
      </div>
      <div className="mt-3 grid grid-cols-2 gap-2 border-t border-black/5 pt-3 text-[10px] text-muted">
        <div>
          <p>Approval rate</p>
          <div className="mt-2 flex h-24 items-end rounded-lg bg-mist">
            <div className="flex h-[88%] w-full items-start rounded-lg bg-gradient-to-b from-accent to-electric p-1.5">
              <span className="text-[11px] font-semibold text-white">88%</span>
            </div>
          </div>
        </div>
        <div>
          <p>Compliance-screened</p>
          <div className="mt-2 flex h-24 items-end rounded-lg bg-mist">
            <div className="flex h-full w-full items-start rounded-lg bg-gradient-to-b from-[#c7d2ff] to-[#93a6ff] p-1.5">
              <span className="text-[11px] font-semibold text-ink">100%</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function VisualCard() {
  return (
    <div className="relative min-h-[28rem] overflow-hidden rounded-[2rem] bg-gradient-to-b from-[#7f97ff] via-[#3f55e6] to-brand sm:min-h-[34rem] lg:min-h-[38rem]">
      {/* soft clouds */}
      <div className="pointer-events-none absolute inset-0" aria-hidden>
        <div className="absolute -left-10 top-16 h-40 w-72 rounded-full bg-white/30 blur-3xl" />
        <div className="absolute right-0 top-1/3 h-32 w-60 rounded-full bg-white/20 blur-3xl" />
        <div className="absolute bottom-10 left-1/4 h-48 w-80 rounded-full bg-[#0a0f6b]/50 blur-3xl" />
      </div>

      {/* centre mark */}
      <div className="absolute left-1/2 top-[55%] hidden -translate-x-1/2 -translate-y-1/2 sm:block">
        <div className="flex h-40 w-40 items-center justify-center rounded-[2.5rem] border border-white/30 bg-white/10 shadow-[0_40px_80px_-30px_rgba(0,0,60,0.8)] backdrop-blur-md sm:h-48 sm:w-48">
          <Image src="/logo.svg" alt="" width={140} height={140} className="h-24 w-24 brightness-0 invert sm:h-28 sm:w-28" />
        </div>
      </div>

      {/* floating stats */}
      <div className="absolute right-4 top-4 sm:right-8 sm:top-8">
        <StatsCard />
      </div>

      {/* floating bubble */}
      <div className="absolute bottom-24 left-4 flex items-center gap-3 rounded-full bg-white py-2.5 pl-2.5 pr-5 text-sm text-ink shadow-[0_20px_40px_-16px_rgba(6,7,42,0.5)] sm:left-8">
        <span className="flex h-9 w-9 items-center justify-center rounded-full bg-electric text-white">
          <Rocket className="h-4 w-4" aria-hidden />
        </span>
        <span className="leading-tight">
          Shipped to production,
          <br />
          compliance built in
        </span>
      </div>

      {/* bottom caption */}
      <div className="absolute inset-x-4 bottom-5 flex items-center justify-between sm:inset-x-8">
        <div className="flex items-center gap-3 text-sm text-white">
          <span className="flex h-8 w-8 items-center justify-center rounded-full bg-white/90 text-ink">
            <Sparkles className="h-4 w-4" aria-hidden />
          </span>
          Building AI that actually ships
        </div>
        <div className="hidden items-center gap-1.5 sm:flex" aria-hidden>
          <span className="h-0.5 w-6 rounded-full bg-white" />
          <span className="h-0.5 w-6 rounded-full bg-white/40" />
        </div>
      </div>
    </div>
  );
}

export function About() {
  return (
    <section id="about" className="bg-white">
      <div className="mx-auto grid max-w-7xl gap-12 px-4 py-20 sm:px-6 sm:py-24 lg:grid-cols-2 lg:gap-16">
        {/* Copy */}
        <div className="flex flex-col">
          <p className="inline-flex items-center gap-2 self-start text-sm text-ink">
            <span className="flex h-6 w-6 items-center justify-center rounded-md border border-black/10">
              <ShieldCheck className="h-3.5 w-3.5" aria-hidden />
            </span>
            SOC 2 &amp; GDPR-ready engineering
          </p>

          <h2 className="mt-8 font-display text-4xl font-medium leading-[1.05] tracking-tight text-ink sm:text-5xl lg:text-6xl">
            Smarter Products, Built by One Crew
          </h2>

          <div className="mt-10 lg:mt-auto lg:pt-16">
            <p className="max-w-md text-base leading-relaxed text-muted">
              From concept to production, we deliver scalable web and mobile apps,
              battle-hardened cloud pipelines, intelligent AI agents with full
              deployment support, and compliance systems that keep you audit-ready.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <a
                href="mailto:growth@onecrewtech.com"
                className="group inline-flex items-center gap-2 rounded-full bg-ink px-6 py-3.5 text-sm font-medium text-white transition hover:bg-brand"
              >
                Start a Project
                <ArrowRight className="h-4 w-4 transition group-hover:translate-x-0.5" aria-hidden />
              </a>
              <a
                href="mailto:growth@onecrewtech.com?subject=Book%20a%20call"
                className="inline-flex items-center rounded-full bg-mist px-6 py-3.5 text-sm font-medium text-ink transition hover:bg-[#e8eaf6]"
              >
                Book a Call
              </a>
            </div>
          </div>
        </div>

        <VisualCard />
      </div>

      {/* Tech strip */}
      <div className="border-y border-black/10">
        <div className="mx-auto max-w-7xl px-4 py-7 sm:px-6">
          <p className="sr-only">Technologies we ship with</p>
          <ul className="flex flex-wrap items-center justify-center gap-x-0 gap-y-4 sm:justify-between">
            {STACK.map((t, i) => (
              <li key={t} className="flex items-center">
                <span className="px-5 font-display text-base font-semibold tracking-tight text-ink/70 sm:px-0 sm:text-lg">
                  {t}
                </span>
                {i < STACK.length - 1 && <span className="hidden h-5 w-px bg-black/10 sm:ml-6 sm:block lg:ml-8" aria-hidden />}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
