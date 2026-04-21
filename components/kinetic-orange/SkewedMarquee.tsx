const ROW_ONE =
  "WEB APPS — MOBILE APPS — CLOUD & DEVOPS — AI AGENTS — COMPLIANCE — ";
const ROW_TWO =
  "NEXT.JS — REACT NATIVE — AWS — GCP — LLM OPS — SOC 2 — GDPR — ";

export function SkewedMarquee() {
  return (
    <section className="relative overflow-hidden bg-ink py-10 text-paper">
      <div
        className="origin-center -skew-y-[2deg] scale-[1.02]"
        style={{ willChange: "transform" }}
      >
        <div className="overflow-hidden border-y-2 border-brand py-3">
          <div className="flex w-max animate-[marquee-ltr_90s_linear_infinite] font-display text-[10vw] font-normal uppercase leading-[0.88] tracking-[-0.04em] text-brand">
            <span className="whitespace-nowrap px-4">{ROW_ONE.repeat(4)}</span>
            <span className="whitespace-nowrap px-4" aria-hidden="true">
              {ROW_ONE.repeat(4)}
            </span>
          </div>
        </div>
        <div className="overflow-hidden border-b-2 border-brand py-3">
          <div className="flex w-max animate-[marquee-rtl_105s_linear_infinite] font-display text-[10vw] font-normal uppercase leading-[0.88] tracking-[-0.04em] text-paper/80">
            <span className="whitespace-nowrap px-4">{ROW_TWO.repeat(4)}</span>
            <span className="whitespace-nowrap px-4" aria-hidden="true">
              {ROW_TWO.repeat(4)}
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
