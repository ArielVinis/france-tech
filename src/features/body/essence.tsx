"use client";

import { SectionReveal } from "@/features/body/section-reveal";
import { franceTech } from "@/data/france-tech";

export function Essence() {
  return (
    <SectionReveal
      id="essencia"
      className="border-t border-border/40"
      aria-labelledby="essencia-title"
    >
      <div className="mx-auto max-w-6xl px-6 py-28 md:px-8 md:py-36">
        <p
          data-reveal
          className="font-heading text-xs font-semibold tracking-[0.22em] text-primary uppercase"
        >
          Essência
        </p>
        <h2
          id="essencia-title"
          data-reveal
          className="mt-4 max-w-2xl font-heading text-3xl leading-tight font-semibold tracking-[-0.03em] text-foreground md:text-5xl"
        >
          Três pilares. Uma direção.
        </h2>

        <ul className="mt-16 grid gap-12 md:grid-cols-3 md:gap-10">
          {franceTech.pillars.map((pillar, index) => (
            <li key={pillar.title} data-reveal className="flex flex-col gap-4">
              <span className="font-heading text-xs tracking-[0.2em] text-muted-foreground">
                0{index + 1}
              </span>
              <h3 className="font-heading text-xl font-semibold tracking-tight text-foreground md:text-2xl">
                {pillar.title}
              </h3>
              <p className="text-[15px] leading-relaxed text-muted-foreground md:text-base">
                {pillar.body}
              </p>
            </li>
          ))}
        </ul>
      </div>
    </SectionReveal>
  );
}
