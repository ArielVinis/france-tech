"use client";

import Link from "next/link";
import { ArrowRightIcon } from "lucide-react";

import { Button } from "@/components/ui/button";
import { SectionReveal } from "@/features/body/section-reveal";

export function Contact() {
  return (
    <SectionReveal id="contato" className="border-t border-border/40 bg-card/30">
      <div className="mx-auto flex min-h-svh max-w-6xl flex-col justify-center gap-8 px-6 py-28 md:px-8 md:py-36">
        <p
          data-reveal
          className="font-heading text-xs font-semibold tracking-[0.22em] text-primary uppercase"
        >
          Contato
        </p>
        <h2
          data-reveal
          className="max-w-3xl font-heading text-3xl leading-tight font-semibold tracking-tight text-foreground md:text-5xl"
        >
          Conte-nos o seu desafio.
        </h2>
        <p
          data-reveal
          className="max-w-2xl text-base leading-relaxed text-muted-foreground md:text-lg"
        >
          Vamos conversar sobre o próximo passo do teu produto. Formulário e
          canais em breve — por agora, inicia pelo contacto direto.
        </p>
        <div data-reveal>
          <Button
            nativeButton={false}
            render={<Link href="mailto:france.dev@outlook.com" />}
            size="lg"
          >
            Enviar email
            <ArrowRightIcon data-icon="inline-end" />
          </Button>
        </div>
      </div>
    </SectionReveal>
  );
}
