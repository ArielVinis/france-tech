"use client";

import { useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import type { Feature } from "@/data/cortex";
import { cn } from "@/lib/utils";

gsap.registerPlugin(ScrollTrigger, useGSAP);

type FeatureRowProps = {
  feature: Feature;
  className?: string;
};

export function FeatureRow({ feature, className }: FeatureRowProps) {
  return (
    <div
      data-feature-row
      className={cn(
        "grid grid-cols-1 gap-3 border-t border-border py-8 md:grid-cols-[4rem_minmax(0,1fr)_minmax(0,1.2fr)] md:items-start md:gap-8 md:py-10",
        className,
      )}
    >
      <span className="text-[12px] tabular-nums text-muted-foreground">
        {feature.number}
      </span>
      <h3 className="font-heading text-2xl font-semibold tracking-[-0.03em] text-foreground md:text-3xl">
        {feature.title}
      </h3>
      <p className="max-w-md text-[14px] leading-relaxed text-muted-foreground md:justify-self-end md:text-right">
        {feature.description}
      </p>
    </div>
  );
}

type FeatureSectionProps = {
  features: Feature[];
};

export function FeatureSection({ features }: FeatureSectionProps) {
  const rootRef = useRef<HTMLElement>(null);

  useGSAP(
    () => {
      const root = rootRef.current;
      if (!root) return;
      const rows = root.querySelectorAll("[data-feature-row]");
      const mm = gsap.matchMedia();

      mm.add("(prefers-reduced-motion: reduce)", () => {
        gsap.set(rows, { clearProps: "all" });
      });

      mm.add("(prefers-reduced-motion: no-preference)", () => {
        rows.forEach((row) => {
          gsap.fromTo(
            row,
            { opacity: 0.2, y: 48 },
            {
              opacity: 1,
              y: 0,
              ease: "none",
              scrollTrigger: {
                trigger: row,
                start: "top 88%",
                end: "top 55%",
                scrub: 0.55,
              },
            },
          );
        });
      });
    },
    { scope: rootRef },
  );

  return (
    <section
      id="product"
      ref={rootRef}
      className="mx-auto max-w-5xl px-4 py-20 md:px-6 md:py-28"
    >
      <div className="mb-14 max-w-2xl">
        <h2 className="font-heading text-[clamp(2rem,4vw,3rem)] font-semibold tracking-[-0.035em] text-foreground">
          Built for the last one percent
        </h2>
        <p className="mt-4 text-[15px] leading-relaxed text-muted-foreground">
          Most generators get you close. Cortex is engineered for the part that
          makes people stop scrolling and ask what camera you used.
        </p>
      </div>
      <div className="border-b border-border">
        {features.map((feature) => (
          <FeatureRow key={feature.number} feature={feature} />
        ))}
      </div>
    </section>
  );
}
