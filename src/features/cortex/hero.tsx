"use client";

import Link from "next/link";
import { heroImages } from "@/data/cortex";
import { FloatingImageField } from "@/features/cortex/floating-image-field";
import { HeroVideo } from "@/features/cortex/hero-video";

export function CortexHero() {
  return (
    <section className="relative overflow-hidden pt-28 pb-16 md:pt-32 md:pb-24">
      <div className="relative mx-auto min-h-[min(70vh,560px)] max-w-6xl">
        <FloatingImageField
          images={heroImages}
          className="hidden sm:block"
        />

        <div className="relative z-10 mx-auto flex max-w-3xl flex-col items-center px-4 pt-10 text-center md:px-6 md:pt-16">
          <h1 className="font-heading text-[clamp(2.75rem,8vw,5.5rem)] font-semibold leading-[0.95] tracking-[-0.04em] text-foreground">
            Hyperreal
            <br />
            photos and film
          </h1>
          <p className="mt-6 max-w-md text-[15px] leading-relaxed text-muted-foreground">
            Cortex generates film-quality photos and video on your phone. Every
            result is carefully reviewed.
          </p>
          <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
            <Link
              href="#cta"
              className="rounded-full bg-foreground px-4 py-2.5 text-[13px] font-medium text-background transition-opacity hover:opacity-90"
            >
              Get the app
            </Link>
            <Link
              href="#product"
              className="rounded-full px-4 py-2.5 text-[13px] text-foreground/70 transition-colors hover:text-foreground"
            >
              See how it works
            </Link>
          </div>
        </div>
      </div>

      <div className="relative z-10 mt-16 md:mt-20">
        <HeroVideo />
      </div>
    </section>
  );
}
