"use client";

import React from "react";
import { motion } from "framer-motion";
import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export interface LightBeamButtonProps {
  children: React.ReactNode;
  className?: string;
  href?: string;
  onClick?: () => void;
  gradientColors?: [string, string, string];
}

export function LightBeamButton({
  children,
  className,
  onClick,
  href,
  gradientColors = ["#ff4500", "#ffffff", "#ff4500"],
}: LightBeamButtonProps) {
  const gradientString = `conic-gradient(from var(--gradient-angle), transparent 0%, ${gradientColors[0]} 40%, ${gradientColors[1]} 50%, transparent 60%, transparent 100%)`;

  const inner = (
    <>
      <style>{`
        @property --gradient-angle {
          syntax: "<angle>";
          initial-value: 0deg;
          inherits: false;
        }
        @keyframes border-spin {
          from { --gradient-angle: 0deg; }
          to { --gradient-angle: 360deg; }
        }
        .animate-border-spin {
          animation: border-spin 2.5s linear infinite;
        }
      `}</style>

      <motion.button
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.97 }}
        onClick={onClick}
        className={cn(
          "group relative isolate overflow-hidden rounded-full bg-ink px-14 py-5",
          "font-label text-sm uppercase tracking-[-0.02em] text-paper",
          "shadow-[0_0_24px_-6px_rgba(255,69,0,0.4)] hover:shadow-[0_0_36px_-4px_rgba(255,69,0,0.65)]",
          "transition-shadow duration-300",
          className
        )}
      >
        <span className="relative z-10 flex items-center gap-2">{children}</span>

        {/* Rotating beam border */}
        <div
          className="absolute inset-0 -z-10 rounded-full p-[2px] animate-border-spin"
          style={{
            "--gradient-angle": "0deg",
            background: gradientString,
          } as React.CSSProperties}
        />

        {/* Inner fill keeps text readable */}
        <div className="absolute inset-[2px] -z-10 rounded-full bg-ink" />

        {/* Radial glow on hover */}
        <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_50%_0%,rgba(255,69,0,0.18)_0%,transparent_65%)] opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
      </motion.button>
    </>
  );

  if (href) {
    return (
      <a href={href} className="inline-block">
        {inner}
      </a>
    );
  }

  return inner;
}

export default LightBeamButton;
