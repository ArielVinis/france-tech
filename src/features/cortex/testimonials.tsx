"use client";

import { useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import type { Testimonial } from "@/data/cortex";
import { MediaPlaceholder } from "@/components/ui/media-placeholder";
import { cn } from "@/lib/utils";

gsap.registerPlugin(ScrollTrigger, useGSAP);

type TestimonialCardProps = {
  testimonial: Testimonial;
  className?: string;
};

export function TestimonialCard({
  testimonial,
  className,
}: TestimonialCardProps) {
  return (
    <article
      data-testimonial
      className={cn(
        "rounded-2xl border border-border bg-white p-6 md:p-7",
        className,
      )}
    >
      <p className="text-[15px] leading-relaxed text-foreground md:text-[16px]">
        “{testimonial.quote}”
      </p>
      <div className="mt-6 flex items-center gap-3">
        <div className="relative size-9 overflow-hidden rounded-full bg-muted">
          <MediaPlaceholder size={8} className="rounded-full" />
        </div>
        <div>
          <p className="text-[13px] font-medium text-foreground">
            {testimonial.name}
          </p>
          <p className="text-[12px] text-muted-foreground">{testimonial.role}</p>
        </div>
      </div>
    </article>
  );
}

type TestimonialsProps = {
  testimonials: Testimonial[];
};

const offsets = [
  "md:mt-0",
  "md:mt-10",
  "md:mt-4",
  "md:mt-16",
  "md:mt-2",
  "md:mt-12",
];

export function Testimonials({ testimonials }: TestimonialsProps) {
  const rootRef = useRef<HTMLElement>(null);

  useGSAP(
    () => {
      const root = rootRef.current;
      if (!root) return;
      const cards = root.querySelectorAll("[data-testimonial]");
      const mm = gsap.matchMedia();

      mm.add("(prefers-reduced-motion: reduce)", () => {
        gsap.set(cards, { clearProps: "all" });
      });

      mm.add("(prefers-reduced-motion: no-preference)", () => {
        gsap.from(cards, {
          opacity: 0,
          y: 36,
          duration: 0.85,
          ease: "power3.out",
          stagger: 0.09,
          scrollTrigger: {
            trigger: root,
            start: "top 75%",
            toggleActions: "play none none reverse",
          },
        });

        cards.forEach((card, i) => {
          gsap.to(card, {
            y: i % 2 === 0 ? -18 : 18,
            ease: "none",
            scrollTrigger: {
              trigger: root,
              start: "top bottom",
              end: "bottom top",
              scrub: 0.7,
            },
          });
        });
      });
    },
    { scope: rootRef },
  );

  return (
    <section
      ref={rootRef}
      className="mx-auto max-w-6xl px-4 py-20 md:px-6 md:py-28"
    >
      <div className="mb-12 max-w-xl md:mb-16">
        <h2 className="font-heading text-[clamp(2rem,4vw,3rem)] font-semibold tracking-[-0.035em] text-foreground">
          Creators keep the receipts
        </h2>
        <p className="mt-4 text-[15px] leading-relaxed text-muted-foreground">
          Photographers, directors, and designers use Cortex where the work has
          to hold up to a close look.
        </p>
      </div>
      <div className="columns-1 gap-4 sm:columns-2 lg:columns-3">
        {testimonials.map((t, i) => (
          <TestimonialCard
            key={t.name}
            testimonial={t}
            className={cn(
              "mb-4 break-inside-avoid will-change-transform",
              offsets[i % offsets.length],
            )}
          />
        ))}
      </div>
    </section>
  );
}
