import Image from "next/image";
import { ArrowUpRight } from "lucide-react";

const FEATURED = {
  title: "Vesper",
  category: "AI Agents · HealthTech SaaS",
  tagline: "Autonomous marketing intelligence for healthcare brands.",
  description:
    "A multi-agent AI platform that writes, fact-checks, and publishes marketing for healthcare practices — with HIPAA & FTC compliance built in. Specialized agents handle content, SEO, social, email, ads, and analytics, while a CMO Intelligence Loop learns from performance data and steers strategy. Every piece passes a Content → QA → CISO pipeline before a human approves it.",
  stats: [
    { value: "17", label: "AI agents" },
    { value: "100%", label: "Compliance-screened" },
    { value: "88%", label: "Approval rate" },
  ],
  tags: ["Claude API", "Python", "FastAPI", "PostgreSQL", "Redis", "Docker", "AWS"],
  img: "/work/vesper.png",
  href: "https://drvesper.com",
};

const MIGRATIONS = [
  {
    title: "Data Center → AWS",
    category: "Cloud Migration",
    text: "On-prem servers moved to AWS with a phased cutover and re-architected services.",
    tags: ["AWS", "Terraform", "VPC"],
    img: "/work/cloud-datacenter.jpg",
  },
  {
    title: "Monolith → Kubernetes",
    category: "Re-platforming",
    text: "Legacy apps containerized and re-platformed on managed Kubernetes with CI/CD.",
    tags: ["Docker", "EKS / GKE", "Helm"],
    img: "/work/cloud-kubernetes.jpg",
  },
  {
    title: "Zero-Downtime DB Migration",
    category: "Data Migration",
    text: "Production databases moved to managed cloud with live replication and no outage.",
    tags: ["PostgreSQL", "RDS", "CDC"],
    img: "/work/cloud-database.jpg",
  },
  {
    title: "Multi-Region Rollout",
    category: "Resilience & Cost",
    text: "Global failover, autoscaling, and right-sized infrastructure to cut cloud spend.",
    tags: ["Multi-Region", "Autoscaling", "FinOps"],
    img: "/work/cloud-multiregion.jpg",
  },
];

export function Work() {
  return (
    <section id="work" className="bg-white py-24 sm:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <div className="flex flex-col justify-between gap-6 sm:flex-row sm:items-end">
          <div className="max-w-2xl">
            <p className="text-sm font-medium text-electric">Selected Work</p>
            <h2 className="mt-3 font-display text-3xl font-medium tracking-tight text-ink sm:text-4xl lg:text-5xl">
              Products We&apos;ve Shipped
            </h2>
          </div>
          <a
            href="mailto:growth@onecrewtech.com"
            className="inline-flex items-center gap-1.5 self-start text-sm font-medium text-ink underline-offset-4 hover:underline sm:self-auto"
          >
            Discuss your project <ArrowUpRight className="h-4 w-4" aria-hidden />
          </a>
        </div>

        {/* Featured */}
        <a
          href={FEATURED.href}
          target="_blank"
          rel="noreferrer"
          className="group mt-12 grid overflow-hidden rounded-[2rem] border border-black/5 bg-mist transition duration-300 hover:shadow-[0_32px_64px_-32px_rgba(0,0,128,0.4)] lg:grid-cols-[1.15fr_1fr]"
        >
          <div className="relative flex items-center overflow-hidden bg-[#0f3a3f]">
            <Image
              src={FEATURED.img}
              alt="Vesper — autonomous marketing intelligence for healthcare brands"
              width={1200}
              height={630}
              className="h-auto w-full transition duration-700 group-hover:scale-[1.03]"
            />
            <span className="absolute left-5 top-5 rounded-full bg-white/90 px-3 py-1 text-xs font-medium text-ink backdrop-blur">
              Featured
            </span>
          </div>

          <div className="flex flex-col justify-center p-7 sm:p-10">
            <div className="flex items-start justify-between gap-4">
              <div>
                <p className="text-xs text-muted">{FEATURED.category}</p>
                <h3 className="mt-2 font-display text-3xl font-semibold tracking-tight text-ink">{FEATURED.title}</h3>
              </div>
              <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-ink text-white transition group-hover:bg-electric">
                <ArrowUpRight className="h-5 w-5" aria-hidden />
              </span>
            </div>
            <p className="mt-4 font-medium text-ink">{FEATURED.tagline}</p>
            <p className="mt-3 text-sm leading-relaxed text-muted">{FEATURED.description}</p>

            <dl className="mt-7 grid grid-cols-3 gap-3">
              {FEATURED.stats.map((s) => (
                <div key={s.label} className="flex flex-col-reverse rounded-2xl bg-white p-3.5">
                  <dt className="mt-1 text-[11px] leading-tight text-muted">{s.label}</dt>
                  <dd className="font-display text-2xl font-semibold text-brand">{s.value}</dd>
                </div>
              ))}
            </dl>

            <ul className="mt-6 flex flex-wrap gap-1.5">
              {FEATURED.tags.map((t) => (
                <li key={t} className="rounded-full border border-black/10 bg-white px-2.5 py-1 text-[11px] text-muted">
                  {t}
                </li>
              ))}
            </ul>
          </div>
        </a>

        {/* Cloud migrations */}
        <div className="mt-20 flex flex-col justify-between gap-4 sm:flex-row sm:items-end">
          <div className="max-w-xl">
            <p className="text-sm font-medium text-electric">Cloud &amp; DevOps</p>
            <h3 className="mt-2 font-display text-2xl font-medium tracking-tight text-ink sm:text-3xl">
              Cloud Migrations We Deliver
            </h3>
          </div>
          <p className="max-w-sm text-sm leading-relaxed text-muted">
            Moving to the cloud without the downtime, surprises, or runaway bills.
          </p>
        </div>

        <div className="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {MIGRATIONS.map((m) => (
            <article key={m.title} className="group flex flex-col">
              <div className="relative aspect-[4/3] overflow-hidden rounded-3xl bg-ink">
                <Image
                  src={m.img}
                  alt=""
                  fill
                  sizes="(min-width: 1024px) 300px, (min-width: 640px) 50vw, 100vw"
                  className="object-cover opacity-90 transition duration-700 group-hover:scale-105 group-hover:opacity-100"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-ink/60 via-transparent to-transparent" aria-hidden />
                <span className="absolute left-4 top-4 rounded-full bg-white/90 px-2.5 py-1 text-[11px] font-medium text-ink backdrop-blur">
                  {m.category}
                </span>
              </div>
              <div className="mt-4 flex items-start justify-between gap-3">
                <h4 className="font-display font-semibold text-ink">{m.title}</h4>
                <ArrowUpRight className="mt-0.5 h-5 w-5 shrink-0 text-muted transition group-hover:text-ink" aria-hidden />
              </div>
              <p className="mt-1.5 text-sm leading-relaxed text-muted">{m.text}</p>
              <ul className="mt-3 flex flex-wrap gap-1.5">
                {m.tags.map((t) => (
                  <li key={t} className="rounded-full bg-mist px-2.5 py-1 text-[11px] text-muted">
                    {t}
                  </li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
