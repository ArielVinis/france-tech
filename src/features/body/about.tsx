"use client";

import SplitText from "@/components/SplitText";
import TrueFocus from "@/components/TrueFocus";
import { SectionReveal } from "@/features/body/section-reveal";
import { useBrandMetallic } from "@/hooks/use-brand-metallic";

export function About() {
  const brand = useBrandMetallic();

  return (
    <SectionReveal id="sobre" className="border-t border-border/40">
      <div className="mx-auto flex min-h-svh max-w-6xl flex-col justify-center gap-8 px-6 py-28 md:px-8 md:py-36">
        <p
          data-reveal
          className="font-heading text-xs font-semibold tracking-[0.22em] text-primary uppercase"
        >
          Sobre
        </p>

        <div data-reveal>
          <SplitText
            text="Tecnologia que impulsiona o futuro dos negócios."
            tag="h2"
            splitType="words"
            textAlign="left"
            className="max-w-3xl font-heading text-3xl leading-tight font-semibold tracking-tight text-foreground md:text-5xl"
            delay={35}
            duration={0.85}
            threshold={0.15}
          />
        </div>

        <p
          data-reveal
          className="max-w-2xl text-base leading-relaxed text-muted-foreground md:text-lg"
        >
          A France Tech desenvolve sistemas e soluções digitais personalizadas —
          aplicações web, plataformas SaaS e sites institucionais — com foco em
          desempenho, segurança e experiência do utilizador. Cada projeto nasce
          das necessidades reais do cliente e é desenhado para escalar com o
          negócio.
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
              Desenvolver soluções digitais eficientes e personalizadas que
              ajudem empresas a crescer com tecnologia.
            </p>
          </div>
          <div className="flex flex-col gap-3">
            <h3 className="font-heading text-sm font-semibold tracking-[0.16em] text-primary uppercase">
              Visão
            </h3>
            <p className="text-sm leading-relaxed text-muted-foreground md:text-base">
              Ser referência em sistemas e plataformas digitais pela qualidade,
              inovação e fiabilidade das soluções.
            </p>
          </div>
        </div>

        <div data-reveal className="flex flex-col gap-5 pt-2">
          <h3 className="font-heading text-sm font-semibold tracking-[0.16em] text-primary uppercase">
            Valores
          </h3>
          <TrueFocus
            sentence="Resultados Qualidade Inovação Transparência Escala"
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
