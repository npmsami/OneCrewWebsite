import { ArrowDown } from "lucide-react";

const SCROLL_PHRASE = "SCROLL DOWN • SCROLL DOWN • SCROLL DOWN • ";

export function RotatingScrollIndicator() {
  return (
    <div className="relative h-44 w-44 shrink-0">
      <svg
        width="176"
        height="176"
        viewBox="0 0 176 176"
        className="absolute inset-0"
        aria-hidden
      >
        <defs>
          <path
            id="kinetic-scroll-circle"
            d="M 88,88 m -70,0 a 70,70 0 1,1 140,0 a 70,70 0 1,1 -140,0"
          />
        </defs>
        <g
          className="animate-[spin-12_12s_linear_infinite] text-ink"
          style={{ transformOrigin: "88px 88px" }}
        >
          <text
            className="fill-ink font-label font-bold uppercase tracking-[-0.02em]"
            fontSize="12"
            dominantBaseline="middle"
          >
            <textPath href="#kinetic-scroll-circle" startOffset="0%">
              {SCROLL_PHRASE.repeat(3)}
            </textPath>
          </text>
        </g>
      </svg>
      <div className="pointer-events-none absolute inset-0 flex items-center justify-center">
        <ArrowDown className="h-8 w-8 text-ink" strokeWidth={2.5} aria-hidden />
      </div>
    </div>
  );
}
