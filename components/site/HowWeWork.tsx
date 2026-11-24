import { Briefcase, Handshake, Layers, Wrench } from "lucide-react";

const STEPS = [
  { n: "01", title: "Discover", text: "We learn your goals, users, and constraints, then agree on scope and success metrics." },
  { n: "02", title: "Design", text: "Architecture, UX, and a clear delivery plan — with security and compliance mapped up front." },
  { n: "03", title: "Build", text: "Short sprints, weekly demos, and working software you can see and test early." },
  { n: "04", title: "Launch & Scale", text: "Production rollout, monitoring, and ongoing support as your product grows." },
];

const MODELS = [
  {
    icon: Layers,
    title: "Dedicated Team",
    tag: "Ongoing",
    text: "A full crew — engineers, QA, and a lead — working only on your product.",
  },
  {
    icon: Handshake,
    title: "Staff Augmentation",
    tag: "Flexible",
    text: "Add vetted engineers to your existing team, exactly when you need them.",
  },
  {
    icon: Briefcase,
    title: "Fixed-Scope Project",
    tag: "Defined scope",
    text: "A clear scope, timeline, and price — ideal for MVPs and migrations.",
  },
  {
    icon: Wrench,
    title: "Managed Services",
    tag: "Ongoing",
    text: "We run, monitor, and improve your cloud and applications after launch.",
  },
];

/* Continuous delivery loop (infinity): Plan → Build → CI → Deploy → Operate → Feedback */
const LOOP_PATH =
  "M350 200 C 305 128, 268 72, 200 72 A128 128 0 0 0 200 328 C 268 328, 305 272, 350 200 C 395 128, 432 72, 500 72 A128 128 0 0 1 500 328 C 432 328, 395 272, 350 200 Z";

function InfinityLoop({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 700 400" fill="none" className={className} aria-hidden>
      <defs>
        <linearGradient id="loop-grad" x1="70" y1="0" x2="630" y2="0" gradientUnits="userSpaceOnUse">
          <stop offset="0" stopColor="#7b9bff" />
          <stop offset="0.5" stopColor="#5a72ff" />
          <stop offset="1" stopColor="#2f45e0" />
        </linearGradient>
      </defs>
      <path d={LOOP_PATH} stroke="url(#loop-grad)" strokeWidth="78" strokeLinejoin="round" />

      {/* direction chevrons */}
      <g fill="#ffffff" opacity="0.9" className="hidden xl:inline">
        <path d="M108 128 l14 -2 l-4 14 z" />
        <path d="M112 270 l4 14 l-14 -2 z" />
        <path d="M588 128 l-14 -2 l4 14 z" />
        <path d="M584 270 l-4 14 l14 -2 z" />
      </g>

      <g fill="#ffffff" fontFamily="inherit" fontWeight="600" fontSize="15" textAnchor="middle" className="hidden xl:inline">
        <text x="200" y="78">Plan</text>
        <text x="72" y="205">Build</text>
        <text x="215" y="322">Continuous</text>
        <text x="215" y="340">integration</text>
        <text x="500" y="78">Deploy</text>
        <text x="628" y="205">Operate</text>
        <text x="485" y="322">Continuous</text>
        <text x="485" y="340">feedback</text>
      </g>
    </svg>
  );
}

export function HowWeWork() {
  return (
    <section id="process" className="relative overflow-hidden bg-ink py-24 text-white sm:py-28">
      <div
        className="pointer-events-none absolute -top-40 left-1/2 h-[480px] w-[900px] -translate-x-1/2 rounded-full bg-[radial-gradient(closest-side,rgba(74,98,255,0.35),transparent)]"
        aria-hidden
      />
      <InfinityLoop className="pointer-events-none absolute -right-32 top-10 w-[520px] opacity-[0.12] xl:opacity-[0.16] sm:-right-12 sm:w-[600px] lg:right-[2%] lg:top-8 lg:w-[660px]" />
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6">
        <div className="max-w-2xl">
          <p className="text-sm font-medium text-accent">How We Work</p>
          <h2 className="mt-3 font-display text-3xl font-medium tracking-tight sm:text-4xl lg:text-5xl">
            One Partner, Every Stage
          </h2>
          <p className="mt-4 text-base leading-relaxed text-white/60">
            A simple, transparent process — from the first call to a product running in production.
          </p>
        </div>

        {/* Process */}
        <ol className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {STEPS.map((s) => (
            <li key={s.n} className="relative rounded-3xl border border-white/10 bg-[#0f1034] p-6">
              <span className="font-display text-sm font-semibold text-accent">{s.n}</span>
              <h3 className="mt-4 font-display text-lg font-semibold">{s.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-white/60">{s.text}</p>
            </li>
          ))}
        </ol>

        {/* Engagement models */}
        <div className="mt-20 flex flex-col justify-between gap-4 sm:flex-row sm:items-end">
          <h3 className="font-display text-2xl font-medium tracking-tight sm:text-3xl">Ways to Work With Us</h3>
          <p className="max-w-sm text-sm leading-relaxed text-white/60">
            Pick the model that fits your stage — and switch as you grow.
          </p>
        </div>
        <div className="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {MODELS.map(({ icon: Icon, title, tag, text }) => (
            <article key={title} className="flex flex-col rounded-3xl bg-white p-6 text-ink">
              <div className="flex items-center justify-between">
                <span className="flex h-11 w-11 items-center justify-center rounded-2xl bg-mist text-electric">
                  <Icon className="h-5 w-5" aria-hidden />
                </span>
                <span className="rounded-full bg-mist px-2.5 py-1 text-[11px] text-muted">{tag}</span>
              </div>
              <h4 className="mt-6 font-display text-lg font-semibold">{title}</h4>
              <p className="mt-2 text-sm leading-relaxed text-muted">{text}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
