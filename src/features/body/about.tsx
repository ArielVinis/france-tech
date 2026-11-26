"use client";

import SplitText from "@/components/SplitText";
import TrueFocus from "@/components/TrueFocus";
import { SectionReveal } from "@/features/body/section-reveal";
import { franceTech } from "@/data/france-tech";
import { useBrandMetallic } from "@/hooks/use-brand-metallic";

export function About() {
  const brand = useBrandMetallic();
  const { about } = franceTech;

  return (
    <SectionReveal id="sobre" className="border-t border-border/40">
      <div className="mx-auto flex min-h-[70svh] max-w-6xl flex-col justify-center gap-8 px-6 py-28 md:px-8 md:py-36">
        <p
          data-reveal
          className="font-heading text-xs font-semibold tracking-[0.22em] text-primary uppercase"
        >
          {about.eyebrow}
        </p>

        <div data-reveal>
          <SplitText
            text={about.title}
            tag="h2"
            splitType="words"
            textAlign="left"
            className="max-w-3xl font-heading text-3xl leading-tight font-semibold tracking-[-0.03em] text-foreground md:text-5xl"
            delay={35}
            duration={0.85}
            threshold={0.15}
          />
        </div>

        <p
          data-reveal
          className="max-w-2xl text-base leading-relaxed text-muted-foreground md:text-lg"
        >
          {about.body}
        </p>

        <div
          data-reveal
          className="grid gap-8 border-t border-border/40 pt-10 md:grid-cols-2"
        >
          <div className="flex flex-col gap-3">
            <h3 className="font-heading text-sm font-semibold tracking-[0.16em] text-primary uppercase">
              Missão
            </h3>
            <p className="text-sm leading-relaxed text-muted-foreground md:text-base">
              {about.mission}
            </p>
          </div>
          <div className="flex flex-col gap-3">
            <h3 className="font-heading text-sm font-semibold tracking-[0.16em] text-primary uppercase">
              Visão
            </h3>
            <p className="text-sm leading-relaxed text-muted-foreground md:text-base">
              {about.vision}
            </p>
          </div>
        </div>

        <div data-reveal className="flex flex-col gap-5 pt-2">
          <h3 className="font-heading text-sm font-semibold tracking-[0.16em] text-primary uppercase">
            Valores
          </h3>
          <TrueFocus
            sentence={about.values}
            separator=" "
            blurAmount={4}
            borderColor={brand.silver}
            glowColor={brand.glow}
            animationDuration={0.55}
            pauseBetweenAnimations={1.1}
            className="max-w-3xl"
          />
        </div>
      </div>
    </SectionReveal>
  );
}
