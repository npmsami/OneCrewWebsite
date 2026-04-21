import { ArrowUpRight } from "lucide-react";

const PROJECTS = [
  {
    title: "NOVA",
    category: "Web App / SaaS",
    img: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=1200&auto=format&fit=crop",
    offset: false,
  },
  {
    title: "HELIX",
    category: "Mobile App / Health",
    img: "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?q=80&w=1200&auto=format&fit=crop",
    offset: true,
  },
  {
    title: "ORBIT",
    category: "Cloud / DevOps",
    img: "https://images.unsplash.com/photo-1620641788421-7a1c342ea42e?q=80&w=1200&auto=format&fit=crop",
    offset: false,
  },
  {
    title: "AXIOM",
    category: "AI Agents / Enterprise",
    img: "https://images.unsplash.com/photo-1550745165-9bc0b252726f?q=80&w=1200&auto=format&fit=crop",
    offset: true,
  },
];

export function WorkGallery() {
  return (
    <section className="bg-[#050505] px-4 pb-32 pt-24 sm:px-8">
      <div className="mx-auto max-w-[1400px]">

        {/* Section header */}
        <div className="mb-16 flex items-end justify-between border-b-2 border-paper/10 pb-8">
          <div className="flex items-center gap-3">
            {/* Pulse dot */}
            <span className="relative flex h-2.5 w-2.5">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-brand opacity-60" />
              <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-brand" />
            </span>
            <p className="font-label text-[10px] uppercase tracking-[0.3em] text-paper/40">
              Selected Work
            </p>
          </div>
          <span className="hidden font-label text-[10px] uppercase tracking-[0.25em] text-paper/20 md:block">
            Volume 01 — 2024
          </span>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 gap-x-12 gap-y-24 md:grid-cols-2">
          {PROJECTS.map((project) => (
            <article
              key={project.title}
              className={[
                "group cursor-pointer",
                project.offset ? "md:mt-24" : "",
              ].join(" ")}
            >
              {/* Image */}
              <div className="relative aspect-[4/3] overflow-hidden bg-[#111111]">
                {/* top-left index label */}
                <span className="absolute left-4 top-4 z-10 font-label text-[10px] uppercase tracking-[0.25em] text-paper/30 transition duration-300 group-hover:text-brand">
                  {String(PROJECTS.indexOf(project) + 1).padStart(2, "0")}
                </span>

                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={project.img}
                  alt={project.title}
                  className="h-full w-full object-cover opacity-50 transition-all duration-700 ease-out group-hover:scale-105 group-hover:opacity-100"
                />

                {/* Orange overlay on hover */}
                <div className="absolute inset-0 bg-brand/10 opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
              </div>

              {/* Meta row */}
              <div className="mt-6 flex items-start justify-between">
                <div>
                  <h3 className="font-display text-4xl font-normal uppercase leading-none tracking-[-0.04em] text-paper transition-colors duration-300 group-hover:text-brand sm:text-5xl">
                    {project.title}
                  </h3>
                  <p className="mt-3 font-label text-[10px] uppercase tracking-[0.25em] text-paper/40">
                    {project.category}
                  </p>
                </div>

                {/* Arrow button */}
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full border-2 border-paper/20 text-paper/40 transition-all duration-300 group-hover:border-brand group-hover:bg-brand group-hover:text-ink">
                  <ArrowUpRight className="h-5 w-5" strokeWidth={2.5} aria-hidden />
                </div>
              </div>

              {/* Bottom rule */}
              <div className="mt-6 h-px w-full bg-paper/10 transition-colors duration-300 group-hover:bg-brand/40" />
            </article>
          ))}
        </div>

        {/* View all CTA */}
        <div className="mt-24 flex justify-center">
          <a
            href="#contact"
            className="group flex items-center gap-3 rounded-full border-2 border-paper/20 px-8 py-4 font-label text-xs uppercase tracking-[-0.02em] text-paper/60 transition-all duration-300 hover:border-brand hover:text-brand"
          >
            <span>View all case studies</span>
            <ArrowUpRight
              className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1"
              strokeWidth={2.5}
              aria-hidden
            />
          </a>
        </div>
      </div>
    </section>
  );
}
