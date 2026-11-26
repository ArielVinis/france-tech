"use client";

import { useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowRightIcon } from "lucide-react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

import ShinyText from "@/components/ShinyText";
import { Button } from "@/components/ui/button";
import { franceTech } from "@/data/france-tech";
import { useBrandMetallic } from "@/hooks/use-brand-metallic";
import { cn } from "@/lib/utils";

gsap.registerPlugin(ScrollTrigger, useGSAP);

type HeroProps = {
  className?: string;
};

export function Hero({ className }: HeroProps) {
  const rootRef = useRef<HTMLElement>(null);
  const brand = useBrandMetallic();

  useGSAP(
    () => {
      const mm = gsap.matchMedia();

      mm.add("(prefers-reduced-motion: reduce)", () => {
        gsap.set([".hero-lead", ".hero-support", ".hero-visual"], {
          clearProps: "all",
        });
      });

      mm.add("(prefers-reduced-motion: no-preference)", () => {
        const tl = gsap.timeline({
          defaults: { ease: "power3.out" },
        });

        tl.from(".hero-visual", {
          opacity: 0,
          scale: 0.94,
          duration: 1.1,
        })
          .from(
            ".hero-lead",
            {
              opacity: 0,
              y: 28,
              duration: 0.85,
            },
            "-=0.75",
          )
          .from(
            ".hero-support",
            {
              opacity: 0,
              y: 16,
              duration: 0.7,
              stagger: 0.08,
            },
            "-=0.55",
          );

        gsap.to(".hero-parallax", {
          yPercent: 12,
          ease: "none",
          scrollTrigger: {
            trigger: rootRef.current,
            start: "top top",
            end: "bottom top",
            scrub: true,
          },
        });
      });

      return () => mm.revert();
    },
    { scope: rootRef },
  );

  return (
    <section
      ref={rootRef}
      id="inicio"
      aria-labelledby="hero-title"
      className={cn(
        "relative flex min-h-svh items-center overflow-hidden brand-pattern",
        className,
      )}
    >
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_70%_40%,rgb(192_192_192/0.12),transparent_55%)]"
      />

      <div className="hero-parallax relative z-10 mx-auto grid w-full max-w-6xl items-center gap-10 px-6 py-28 md:grid-cols-[minmax(0,1fr)_minmax(0,1.05fr)] md:gap-8 md:px-8 md:py-32 lg:gap-12">
        <div className="flex flex-col gap-6 md:gap-7">
          <p className="hero-lead font-heading text-[clamp(2.5rem,7vw,4.25rem)] leading-[0.95] font-semibold tracking-[-0.04em]">
            <ShinyText
              text={franceTech.name}
              color={brand.silver}
              shineColor={brand.shine}
              speed={2.6}
              spread={120}
              className="font-heading text-[clamp(2.5rem,7vw,4.25rem)] font-semibold tracking-[-0.04em]"
            />
          </p>

          <h1
            id="hero-title"
            className="hero-support max-w-xl font-heading text-[clamp(1.35rem,3.2vw,2rem)] leading-[1.15] font-medium tracking-[-0.02em] text-foreground"
          >
            {franceTech.tagline}
          </h1>

          <p className="hero-support max-w-md text-[15px] leading-relaxed text-muted-foreground sm:text-base">
            {franceTech.lead}
          </p>

          <div className="hero-support flex flex-wrap items-center gap-3 pt-1">
            <Button
              nativeButton={false}
              render={<Link href="#contato" className="ft-press" />}
              size="lg"
            >
              Falar conosco
              <ArrowRightIcon data-icon="inline-end" />
            </Button>
            <Button
              nativeButton={false}
              render={<Link href="#solucoes" className="ft-press" />}
              variant="outline"
              size="lg"
            >
              Nossas soluções
            </Button>
          </div>
        </div>

        <div className="hero-visual relative mx-auto flex w-full max-w-lg items-center justify-center md:max-w-none">
          <div
            aria-hidden
            className="absolute size-[78%] rounded-full bg-primary/10 blur-3xl"
          />
          <Image
            src="/logo.png"
            alt="Logo France Tech — Torre Eiffel metálica"
            width={720}
            height={720}
            priority
            className="relative z-10 w-full max-w-[22rem] object-contain drop-shadow-[0_40px_80px_rgba(192,192,192,0.22)] sm:max-w-[26rem] lg:max-w-[30rem]"
          />
        </div>
      </div>
    </section>
  );
}
