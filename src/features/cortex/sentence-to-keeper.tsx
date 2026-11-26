"use client";

import { useRef, useState } from "react";
import { Check, X } from "lucide-react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import type { SideCard, StoryStep as StoryStepType } from "@/data/cortex";
import { PhoneMockup } from "@/features/cortex/phone-mockup";
import { StoryStep } from "@/features/cortex/story-step";
import { cn } from "@/lib/utils";

gsap.registerPlugin(ScrollTrigger, useGSAP);

type SentenceToKeeperProps = {
  steps: StoryStepType[];
};

export function SentenceToKeeper({ steps }: SentenceToKeeperProps) {
  const sectionRef = useRef<HTMLElement>(null);
  const stageRef = useRef<HTMLDivElement>(null);
  const leftRef = useRef<HTMLDivElement>(null);
  const rightRef = useRef<HTMLDivElement>(null);
  const [activeIndex, setActiveIndex] = useState(0);
  const [progress, setProgress] = useState(0);
  const active = steps[activeIndex] ?? steps[0];

  useGSAP(
    () => {
      const stage = stageRef.current;
      if (!stage) return;

      const mm = gsap.matchMedia();

      mm.add("(prefers-reduced-motion: reduce)", () => {
        setActiveIndex(0);
        setProgress(0);
        gsap.set([leftRef.current, rightRef.current], {
          clearProps: "transform",
        });
      });

      mm.add(
        "(prefers-reduced-motion: no-preference) and (min-width: 768px)",
        () => {
          ScrollTrigger.create({
            trigger: stage,
            start: "top top",
            end: "+=360%",
            pin: true,
            scrub: 0.65,
            anticipatePin: 1,
            onUpdate: (self) => {
              const p = self.progress;
              setProgress(p);

              const idx = Math.min(
                steps.length - 1,
                Math.floor(p * steps.length * 0.999),
              );
              setActiveIndex((prev) => (prev === idx ? prev : idx));

              const leftY = gsap.utils.mapRange(0, 1, 18, -22, p);
              const rightY = gsap.utils.mapRange(0, 1, -12, 18, p);

              if (leftRef.current) {
                gsap.set(leftRef.current, { y: leftY, force3D: true });
              }
              if (rightRef.current) {
                gsap.set(rightRef.current, { y: rightY, force3D: true });
              }
            },
          });
        },
      );

      mm.add(
        "(prefers-reduced-motion: no-preference) and (max-width: 767px)",
        () => {
          ScrollTrigger.create({
            trigger: stage,
            start: "top 55%",
            end: "bottom 30%",
            scrub: true,
            onUpdate: (self) => {
              const p = self.progress;
              setProgress(p);
              const idx = Math.min(
                steps.length - 1,
                Math.floor(p * steps.length * 0.999),
              );
              setActiveIndex((prev) => (prev === idx ? prev : idx));
            },
          });
        },
      );
    },
    { scope: sectionRef, dependencies: [steps.length] },
  );

  return (
    <section ref={sectionRef} className="relative">
      <div className="mx-auto max-w-6xl px-4 pt-20 md:px-6 md:pt-24">
        <div className="mb-8 max-w-xl md:mb-10">
          <h2 className="font-heading text-[clamp(2rem,4vw,3rem)] font-semibold tracking-[-0.035em] text-foreground">
            From sentence to keeper
          </h2>
          <p className="mt-4 text-[15px] leading-relaxed text-muted-foreground">
            The whole pipeline lives in one app. No desktop, no exports, no
            editing suite — just the loop below, on repeat.
          </p>
        </div>
      </div>

      {/*
        Stage pinado em coluna:
        - área flex-1 com o grid (texto | phone | cards)
        - barras sempre no fundo do viewport pinado
      */}
      <div
        ref={stageRef}
        className="mx-auto flex w-full max-w-6xl flex-col px-4 pb-8 md:h-[100svh] md:px-6 md:pt-16"
      >
        <div className="flex min-h-0 flex-1 flex-col justify-center py-6 md:py-0">
          <div className="grid grid-cols-1 items-center gap-6 md:grid-cols-[minmax(0,1fr)_minmax(180px,200px)_minmax(0,1fr)] md:gap-8 lg:grid-cols-[minmax(0,1fr)_220px_minmax(0,1fr)] lg:gap-12">
            {/* Esquerda */}
            <div className="relative z-20 min-w-0 overflow-hidden md:pr-6">
              <div ref={leftRef} className="will-change-transform">
                <StoryStep
                  number={active.number}
                  title={active.title}
                  description={active.description}
                  active
                />
              </div>
            </div>

            {/* Centro — só o telemóvel */}
            <div className="relative z-10 flex min-w-0 justify-center">
              <PhoneMockup
                screen={active.screen}
                takeLabel={active.takeLabel}
                badge={active.phoneBadge}
                className="!h-[min(48svh,420px)] !w-auto"
              />
            </div>

            {/* Direita */}
            <div className="relative z-20 hidden min-w-0 md:block md:pl-6">
              <div
                ref={rightRef}
                className="flex flex-col gap-3 will-change-transform"
              >
                {(active.sideCards ?? []).map((card) => (
                  <FloatingSideCard
                    key={`${active.id}-${card.title}`}
                    card={card}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Barras — sempre no fundo do stage, nunca cortadas */}
        <div
          className="relative z-30 flex shrink-0 items-center justify-center gap-2 pb-2 pt-4 md:pb-6"
          role="progressbar"
          aria-valuemin={0}
          aria-valuemax={100}
          aria-valuenow={Math.round(progress * 100)}
          aria-label="Story progress"
        >
          {steps.map((step, i) => {
            const segment = 1 / steps.length;
            const fill = Math.min(
              1,
              Math.max(0, (progress - i * segment) / segment),
            );
            return (
              <div
                key={step.id}
                className="h-1.5 w-12 overflow-hidden rounded-full bg-foreground/20 sm:w-14"
              >
                <div
                  className="h-full rounded-full bg-foreground transition-[width] duration-75 ease-linear"
                  style={{ width: `${fill * 100}%` }}
                />
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

function FloatingSideCard({ card }: { card: SideCard }) {
  return (
    <div
      data-side-card
      className={cn(
        "ml-auto w-full max-w-[200px] rounded-2xl border border-border/80 bg-white p-3.5 shadow-[0_8px_30px_rgb(0_0_0_/0.04)]",
        card.variant === "reject" && "opacity-70",
      )}
    >
      <div className="flex items-start gap-2.5">
        <span className="mt-0.5 flex size-5 shrink-0 items-center justify-center rounded-full border border-zinc-200 bg-white">
          {card.variant === "reject" ? (
            <X className="size-3 text-zinc-500" strokeWidth={2.5} />
          ) : (
            <Check className="size-3 text-zinc-900" strokeWidth={2.5} />
          )}
        </span>
        <div>
          <p className="text-[12px] font-semibold text-foreground">
            {card.title}
          </p>
          {card.subtitle ? (
            <p className="mt-0.5 text-[10px] text-muted-foreground">
              {card.subtitle}
            </p>
          ) : null}
        </div>
      </div>
    </div>
  );
}
