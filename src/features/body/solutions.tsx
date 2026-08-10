"use client";

import SplitText from "@/components/SplitText";
import ScrollStack, { ScrollStackItem } from "@/components/ScrollStack";

const SERVICES = [
  {
    title: "Plataformas SaaS",
    body: "Produtos digitais escaláveis, com arquitetura preparada para crescimento contínuo, multi-tenant e recorrência.",
  },
  {
    title: "Sistemas web sob medida",
    body: "Aplicações que automatizam processos internos e conectam operação, dados e decisões no mesmo fluxo.",
  },
  {
    title: "Sites institucionais",
    body: "Presença digital moderna, rápida e alinhada à marca — pensada para credibilidade e conversão.",
  },
  {
    title: "APIs e automações",
    body: "Integrações e rotinas que eliminam trabalho manual, com foco em performance, segurança e manutenção.",
  },
] as const;

export function Solutions() {
  return (
    <section
      id="solucoes"
      className="relative border-t border-border/40"
    >
      <div className="mx-auto max-w-6xl px-6 pt-28 md:px-8 md:pt-36">
        <p className="font-heading text-xs font-semibold tracking-[0.22em] text-primary uppercase">
          Soluções
        </p>
        <SplitText
          text="Software sob medida, pensado para escalar com o teu negócio."
          tag="h2"
          splitType="words"
          textAlign="left"
          className="mt-4 max-w-3xl font-heading text-3xl leading-tight font-semibold tracking-tight text-foreground md:text-5xl"
          delay={35}
          duration={0.85}
          threshold={0.15}
        />
        <p className="mt-6 max-w-2xl text-base leading-relaxed text-muted-foreground md:text-lg">
          Atuamos em sistemas web, plataformas SaaS e sites institucionais —
          sempre com performance, segurança e experiência do utilizador no
          centro.
        </p>
      </div>

      <div className="mx-auto max-w-6xl">
        <ScrollStack
          useWindowScroll
          itemDistance={80}
          itemStackDistance={28}
          stackPosition="18%"
          baseScale={0.88}
          itemScale={0.04}
          className="mt-10"
        >
          {SERVICES.map((service, index) => (
            <ScrollStackItem key={service.title}>
              <p className="font-heading text-xs tracking-[0.2em] text-muted-foreground">
                0{index + 1}
              </p>
              <h3 className="mt-3 font-heading text-2xl font-semibold tracking-tight text-foreground md:text-3xl">
                {service.title}
              </h3>
              <p className="mt-4 max-w-xl text-base leading-relaxed text-muted-foreground">
                {service.body}
              </p>
            </ScrollStackItem>
          ))}
        </ScrollStack>
      </div>
    </section>
  );
}
