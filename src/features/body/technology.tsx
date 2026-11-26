"use client";

import { SectionReveal } from "@/features/body/section-reveal";
import { franceTech } from "@/data/france-tech";

export function Technology() {
  const { technology } = franceTech;

  return (
    <SectionReveal
      id="tecnologia"
      className="border-t border-border/40"
      aria-labelledby="tecnologia-title"
    >
      <div className="mx-auto max-w-6xl px-6 py-28 md:px-8 md:py-36">
        <p
          data-reveal
          className="font-heading text-xs font-semibold tracking-[0.22em] text-primary uppercase"
        >
          {technology.eyebrow}
        </p>
        <h2
          id="tecnologia-title"
          data-reveal
          className="mt-4 max-w-3xl font-heading text-3xl leading-tight font-semibold tracking-[-0.03em] text-foreground md:text-5xl"
        >
          {technology.title}
        </h2>
        <p
          data-reveal
          className="mt-6 max-w-2xl text-base leading-relaxed text-muted-foreground md:text-lg"
        >
          {technology.lead}
        </p>

        <ol className="mt-16 grid gap-10 border-t border-border/40 pt-12 md:grid-cols-3 md:gap-8">
          {technology.steps.map((step, index) => (
            <li key={step.title} data-reveal className="flex flex-col gap-3">
              <span className="font-heading text-xs tracking-[0.2em] text-primary">
                0{index + 1}
              </span>
              <h3 className="font-heading text-xl font-semibold tracking-tight text-foreground">
                {step.title}
              </h3>
              <p className="text-[15px] leading-relaxed text-muted-foreground">
                {step.body}
              </p>
            </li>
          ))}
        </ol>
      </div>
    </SectionReveal>
  );
}
