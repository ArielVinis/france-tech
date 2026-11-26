"use client";

import SplitText from "@/components/SplitText";
import ScrollStack, { ScrollStackItem } from "@/components/ScrollStack";
import { franceTech } from "@/data/france-tech";

export function Solutions() {
  return (
    <section id="solucoes" className="relative border-t border-border/40">
      <div className="mx-auto max-w-6xl px-6 pt-28 md:px-8 md:pt-36">
        <p className="font-heading text-xs font-semibold tracking-[0.22em] text-primary uppercase">
          Soluções
        </p>
        <SplitText
          text="Software sob medida, pensado para escalar com o seu negócio."
          tag="h2"
          splitType="words"
          textAlign="left"
          className="mt-4 max-w-3xl font-heading text-3xl leading-tight font-semibold tracking-[-0.03em] text-foreground md:text-5xl"
          delay={35}
          duration={0.85}
          threshold={0.15}
        />
        <p className="mt-6 max-w-2xl text-base leading-relaxed text-muted-foreground md:text-lg">
          Atuamos em sistemas web, plataformas SaaS e sites institucionais —
          sempre com performance, segurança e experiência do usuário no centro.
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
          {franceTech.solutions.map((service, index) => (
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
