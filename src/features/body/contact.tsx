"use client";

import Link from "next/link";
import { ArrowRightIcon } from "lucide-react";

import { Button } from "@/components/ui/button";
import { SectionReveal } from "@/features/body/section-reveal";
import { franceTech } from "@/data/france-tech";

export function Contact() {
  const { contact, email } = franceTech;

  return (
    <SectionReveal
      id="contato"
      className="border-t border-border/40 bg-card/40"
    >
      <div className="mx-auto flex min-h-[60svh] max-w-6xl flex-col justify-center gap-8 px-6 py-28 md:px-8 md:py-36">
        <p
          data-reveal
          className="font-heading text-xs font-semibold tracking-[0.22em] text-primary uppercase"
        >
          {contact.eyebrow}
        </p>
        <h2
          data-reveal
          className="max-w-3xl font-heading text-3xl leading-tight font-semibold tracking-[-0.03em] text-foreground md:text-5xl"
        >
          {contact.title}
        </h2>
        <p
          data-reveal
          className="max-w-2xl text-base leading-relaxed text-muted-foreground md:text-lg"
        >
          {contact.lead}
        </p>
        <div data-reveal>
          <Button
            nativeButton={false}
            render={<Link href={`mailto:${email}`} className="ft-press" />}
            size="lg"
          >
            {contact.cta}
            <ArrowRightIcon data-icon="inline-end" />
          </Button>
        </div>
      </div>
    </SectionReveal>
  );
}
