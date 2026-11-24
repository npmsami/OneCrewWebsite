import Image from "next/image";
import { ArrowRight, CircleCheck, Play, Sparkles } from "lucide-react";

const CHIPS = ["Web & Mobile", "Cloud & DevOps", "AI Agents", "Compliance"];

function Hills() {
  return (
    <svg
      className="absolute inset-x-0 bottom-0 h-[38%] w-full min-w-[900px]"
      viewBox="0 0 1440 360"
      preserveAspectRatio="none"
      aria-hidden
    >
      <defs>
        <linearGradient id="hill-back" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0" stopColor="#2a3cc4" />
          <stop offset="1" stopColor="#0b1060" />
        </linearGradient>
        <linearGradient id="hill-mid" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0" stopColor="#1c2aa6" />
          <stop offset="1" stopColor="#070b4a" />
        </linearGradient>
        <linearGradient id="hill-front" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0" stopColor="#10198a" />
          <stop offset="1" stopColor="#000080" />
        </linearGradient>
      </defs>
      <path
        d="M0 170 C 180 90, 360 110, 520 150 S 860 230, 1040 150 S 1320 70, 1440 120 L1440 360 L0 360 Z"
        fill="url(#hill-back)"
        opacity="0.55"
      />
      <path
        d="M0 230 C 200 150, 420 190, 620 220 S 980 290, 1180 210 S 1380 170, 1440 190 L1440 360 L0 360 Z"
        fill="url(#hill-mid)"
        opacity="0.85"
      />
      <path
        d="M0 300 C 240 240, 480 270, 720 290 S 1140 330, 1440 270 L1440 360 L0 360 Z"
        fill="url(#hill-front)"
      />
    </svg>
  );
}

function HeroCards() {
  return (
    <div className="relative mx-auto w-full max-w-xl animate-float-slow">
      <div className="absolute -inset-8 -z-10 rounded-[3rem] bg-electric/25 blur-3xl" aria-hidden />
      <div className="rounded-[2.25rem] border border-white/15 bg-white/[0.06] p-4 shadow-2xl backdrop-blur-xl sm:p-5">
        {/* Top promo card */}
        <div className="relative grid min-h-[15rem] grid-cols-[1.15fr_1fr] overflow-hidden rounded-[1.75rem] bg-gradient-to-br from-[#eef1ff] via-[#d9e0ff] to-[#b9c6ff] sm:min-h-[17rem]">
          <div className="relative z-10 flex flex-col justify-center p-5 sm:p-7">
            <p className="font-display text-lg font-semibold leading-snug text-ink sm:text-2xl">
              Ship Your Product in Weeks, Not Months
            </p>
            <p className="mt-2.5 text-xs leading-relaxed text-muted sm:text-sm">
              Senior engineers, one accountable crew, from idea to production.
            </p>
            <a
              href="mailto:growth@onecrewtech.com"
              className="mt-5 inline-flex self-start rounded-full bg-ink px-5 py-2.5 text-xs font-medium text-white transition hover:bg-brand sm:text-sm"
            >
              Book a Call
            </a>
          </div>
          <div className="relative m-2 overflow-hidden rounded-[1.4rem] sm:m-2.5">
            <Image
              src="/work/healthcare.jpg"
              alt="Doctor using a mobile health app"
              fill
              sizes="(min-width: 1024px) 260px, 45vw"
              className="object-cover object-[60%_center]"
            />
            <span className="absolute bottom-3 left-3 inline-flex items-center gap-1.5 rounded-full bg-white/90 px-2.5 py-1 text-[10px] font-medium text-ink backdrop-blur sm:text-xs">
              <span className="h-1.5 w-1.5 rounded-full bg-emerald-500" />
              HIPAA-safe
            </span>
          </div>
        </div>

        <p className="mt-6 px-1 text-sm font-medium text-white/80 sm:text-base">Recent Projects</p>

        {/* Project status card */}
        <div className="mt-3 flex items-center gap-4 rounded-3xl bg-white p-5">
          <div className="min-w-0 flex-1">
            <p className="font-display text-base font-semibold text-ink">Vesper — AI Marketing</p>
            <p className="mt-0.5 text-sm text-muted">Live in production</p>
            <div className="mt-3 flex items-center justify-between text-[11px] text-muted">
              <span>Compliance checks</span>
              <span className="font-medium text-ink">100% passed</span>
            </div>
            <div className="mt-1.5 h-1.5 w-full overflow-hidden rounded-full bg-mist">
              <div className="h-full w-full rounded-full bg-gradient-to-r from-accent to-electric" />
            </div>
          </div>
          <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-mist">
            <CircleCheck className="h-6 w-6 text-electric" aria-hidden />
          </div>
        </div>

        {/* Bottom pill */}
        <div className="mt-3 flex items-center justify-between gap-3 rounded-full border border-white/10 bg-white/10 py-2 pl-2 pr-2">
          <div className="flex items-center gap-3">
            <span className="flex h-9 w-9 items-center justify-center rounded-full bg-electric">
              <Sparkles className="h-4 w-4 text-white" aria-hidden />
            </span>
            <span className="text-sm text-white">AI-Powered Delivery</span>
          </div>
          <a
            href="#services"
            className="rounded-full bg-white px-4 py-1.5 text-xs font-medium text-ink transition hover:bg-mist"
          >
            Explore
          </a>
        </div>
      </div>
    </div>
  );
}

export function Hero() {
  return (
    <section
      id="top"
      className="relative overflow-hidden bg-ink pb-48 pt-32 text-white sm:pb-56 lg:pt-40"
    >
      {/* Glow */}
      <div className="pointer-events-none absolute inset-0" aria-hidden>
        <div className="absolute left-1/2 top-[55%] h-[640px] w-[1100px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[radial-gradient(closest-side,rgba(74,98,255,0.45),rgba(0,0,128,0.25)_55%,transparent)]" />
        <div className="absolute -left-40 top-10 h-80 w-80 rounded-full bg-accent/10 blur-3xl" />
      </div>

      <Hills />

      <div className="relative z-10 mx-auto grid max-w-7xl items-center gap-14 px-4 sm:px-6 lg:grid-cols-[1fr_1.05fr]">
        <div>
          <p className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-3 py-1 text-xs text-white/70">
            <span className="h-1.5 w-1.5 rounded-full bg-accent" />
            We Ship. You Scale.
          </p>
          <h1 className="mt-6 font-display text-4xl font-medium leading-[1.08] tracking-tight sm:text-5xl lg:text-6xl">
            Build &amp; Scale Your Product With One Crew
          </h1>
          <p className="mt-6 max-w-xl text-base leading-relaxed text-white/65 sm:text-lg">
            We build modern web apps, mobile products, cloud infrastructure, AI
            agents, and compliance systems — end to end, zero compromise.
          </p>

          <ul className="mt-8 flex flex-wrap gap-2.5">
            {CHIPS.map((c) => (
              <li
                key={c}
                className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.06] px-3.5 py-1.5 text-xs text-white/85"
              >
                <Sparkles className="h-3.5 w-3.5 text-accent" aria-hidden />
                {c}
              </li>
            ))}
          </ul>

          <div className="mt-10 flex flex-wrap items-center gap-3">
            <a
              href="mailto:growth@onecrewtech.com"
              className="group inline-flex items-center gap-2 rounded-full bg-white px-6 py-3 text-sm font-medium text-ink transition hover:bg-mist"
            >
              Start a Project
              <ArrowRight className="h-4 w-4 transition group-hover:translate-x-0.5" aria-hidden />
            </a>
            <a
              href="#work"
              className="inline-flex items-center gap-2 rounded-full border border-white/20 px-5 py-3 text-sm text-white transition hover:bg-white/10"
            >
              <span className="flex h-6 w-6 items-center justify-center rounded-full border border-white/30">
                <Play className="h-3 w-3 fill-white" aria-hidden />
              </span>
              See Our Work
            </a>
          </div>
        </div>

        <HeroCards />
      </div>
    </section>
  );
}
