"use client";

import { useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowRightIcon } from "lucide-react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

import ShinyText from "@/components/ShinyText";
import SplitText from "@/components/SplitText";
import { Button } from "@/components/ui/button";
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
        gsap.set([".hero-copy > *", ".hero-visual"], { clearProps: "all" });
      });

      mm.add("(prefers-reduced-motion: no-preference)", () => {
        const tl = gsap.timeline({ defaults: { ease: "power3.out" } });

        tl.from(".hero-copy > *", {
          opacity: 0,
          y: 36,
          duration: 1,
          stagger: 0.12,
        }).from(
          ".hero-visual",
          {
            opacity: 0,
            scale: 0.92,
            duration: 1.15,
            ease: "power2.out",
          },
          "-=0.6",
        );

        gsap.to(".hero-logo", {
          y: -14,
          rotation: 1.5,
          duration: 3.6,
          ease: "sine.inOut",
          yoyo: true,
          repeat: -1,
        });

        gsap.to(".hero-glow", {
          opacity: 0.55,
          scale: 1.08,
          duration: 3.2,
          ease: "sine.inOut",
          yoyo: true,
          repeat: -1,
        });

        gsap.to(".hero-parallax", {
          yPercent: 18,
          opacity: 0.35,
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
      data-snap-section=""
      className={cn(
        "relative flex min-h-svh items-center overflow-hidden pt-24 md:pt-24",
        className,
      )}
    >
      <div className="hero-parallax relative z-10 mx-auto grid w-full max-w-6xl items-center gap-12 px-6 py-16 md:grid-cols-2 md:gap-10 md:px-8 md:py-20 lg:gap-16">
        <div className="hero-copy flex flex-col gap-6 md:gap-7">
          <p className="font-heading text-4xl leading-none font-semibold tracking-tight sm:text-5xl lg:text-6xl">
            <ShinyText
              text="France Tech"
              color={brand.silver}
              shineColor={brand.shine}
              speed={2.4}
              spread={110}
              className="font-heading text-4xl font-semibold tracking-tight sm:text-5xl lg:text-6xl"
            />
          </p>

          <SplitText
            text="Tecnologia que impulsiona o futuro dos negócios."
            tag="h1"
            splitType="words"
            textAlign="left"
            className="max-w-xl font-heading text-2xl leading-tight font-medium tracking-tight text-primary sm:text-3xl lg:text-[2.15rem]"
            delay={40}
            duration={0.9}
            threshold={0.2}
            rootMargin="-40px"
          />

          <p className="max-w-md text-base leading-relaxed text-muted-foreground sm:text-lg">
            Soluções de software sob medida para empresas que buscam inovação,
            performance e crescimento sustentável.
          </p>

          <div className="flex flex-wrap items-center gap-3 pt-1">
            <Button
              nativeButton={false}
              render={<Link href="#contato" />}
              size="lg"
            >
              Falar conosco
              <ArrowRightIcon data-icon="inline-end" />
            </Button>
            <Button
              nativeButton={false}
              render={<Link href="#solucoes" />}
              variant="outline"
              size="lg"
            >
              Nossas soluções
            </Button>
          </div>
        </div>

        <div className="hero-visual relative mx-auto flex w-full max-w-md items-center justify-center md:max-w-none">
          <div className="hero-glow absolute size-[70%] rounded-full bg-primary/15 blur-3xl" />
          <Image
            src="/logo.png"
            alt="Logo France Tech — Torre Eiffel metálica"
            width={640}
            height={640}
            priority
            className="hero-logo relative z-10 w-full max-w-88 object-contain drop-shadow-[0_30px_60px_rgba(192,192,192,0.18)] sm:max-w-104 lg:max-w-120"
          />
        </div>
      </div>
    </section>
  );
}
