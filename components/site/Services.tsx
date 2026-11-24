import { Bot, Cloud, Compass, HeartPulse, Rocket, ShieldCheck, Smartphone, Users } from "lucide-react";

const SERVICES = [
  {
    icon: Bot,
    title: "AI Agents & Data",
    text: "LLM apps, autonomous agents, and data pipelines that do real work — designed, deployed, and monitored.",
    tags: ["LLM Ops", "RAG", "Agents", "Data Pipelines"],
  },
  {
    icon: Smartphone,
    title: "Web & Mobile Apps",
    text: "Custom web platforms and mobile apps, built by senior engineers to scale from day one.",
    tags: ["Next.js", "React Native", "TypeScript", "APIs"],
  },
  {
    icon: Cloud,
    title: "Cloud & DevOps",
    text: "Cloud migrations, infrastructure as code, and DevSecOps pipelines that ship safely every day.",
    tags: ["AWS", "GCP", "Kubernetes", "Terraform"],
  },
  {
    icon: ShieldCheck,
    title: "Compliance & Security",
    text: "Audit-ready systems with access controls, logging, and evidence built in — not bolted on.",
    tags: ["SOC 2", "HIPAA", "GDPR", "ISO 27001"],
  },
  {
    icon: HeartPulse,
    title: "HealthTech Solutions",
    text: "Patient apps, clinic dashboards, and AI tools for healthcare — with PHI protection by design.",
    tags: ["HIPAA-safe", "Patient Apps", "Clinical AI"],
  },
  {
    icon: Rocket,
    title: "MVP for Startups",
    text: "From idea to launched product — validate fast, ship an MVP, and scale it once it works.",
    tags: ["Discovery", "Prototype", "MVP", "Launch"],
  },
  {
    icon: Compass,
    title: "Advisory & Strategy",
    text: "Technical roadmaps, architecture reviews, and cloud or AI readiness assessments.",
    tags: ["Roadmaps", "Architecture", "Assessments"],
  },
  {
    icon: Users,
    title: "Dedicated Teams",
    text: "Vetted engineers who join your team — scale up or down as your product needs change.",
    tags: ["Staff Augmentation", "Dedicated Squads"],
  },
];

export function Services() {
  return (
    <section id="services" className="bg-mist py-24 sm:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <div className="mx-auto max-w-3xl text-center">
          <p className="text-sm font-medium text-electric">What We Do</p>
          <h2 className="mt-3 font-display text-3xl font-medium tracking-tight text-ink sm:text-4xl lg:text-5xl">
            Everything You Need. One Crew.
          </h2>
          <p className="mt-4 text-base leading-relaxed text-muted">
            One partner from strategy to launch and beyond — so nothing falls between the cracks.
          </p>
        </div>

        <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {SERVICES.map(({ icon: Icon, title, text, tags }) => (
            <article
              key={title}
              className="group flex flex-col rounded-3xl border border-black/5 bg-white p-6 transition duration-300 hover:-translate-y-1 hover:shadow-[0_24px_48px_-24px_rgba(0,0,128,0.35)]"
            >
              <span className="flex h-12 w-12 items-center justify-center rounded-2xl bg-ink text-white transition group-hover:bg-electric">
                <Icon className="h-5 w-5" aria-hidden />
              </span>
              <h3 className="mt-6 font-display text-lg font-semibold text-ink">{title}</h3>
              <p className="mt-2 flex-1 text-sm leading-relaxed text-muted">{text}</p>
              <ul className="mt-6 flex flex-wrap gap-1.5">
                {tags.map((t) => (
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
