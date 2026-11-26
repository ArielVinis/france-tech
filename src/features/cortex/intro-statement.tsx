"use client";

import { useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(ScrollTrigger, useGSAP);

export function IntroStatement() {
  const rootRef = useRef<HTMLElement>(null);

  useGSAP(
    () => {
      const root = rootRef.current;
      if (!root) return;
      const reveal = root.querySelector<HTMLElement>("[data-text-reveal]");
      if (!reveal) return;

      const mm = gsap.matchMedia();

      mm.add("(prefers-reduced-motion: reduce)", () => {
        gsap.set(reveal, { opacity: 1, color: "var(--foreground)" });
      });

      mm.add("(prefers-reduced-motion: no-preference)", () => {
        gsap.fromTo(
          reveal,
          { opacity: 0.28, color: "rgb(161 161 170)" },
          {
            opacity: 1,
            color: "rgb(10 10 10)",
            ease: "none",
            scrollTrigger: {
              trigger: root,
              start: "top 70%",
              end: "center 35%",
              scrub: 0.7,
            },
          },
        );
      });
    },
    { scope: rootRef },
  );

  return (
    <section
      ref={rootRef}
      className="mx-auto max-w-4xl px-4 py-24 md:px-6 md:py-36"
    >
      <p className="font-heading text-[clamp(1.75rem,4.5vw,3.25rem)] font-semibold leading-[1.15] tracking-[-0.03em]">
        <span className="text-foreground">Almost real is not real.</span>{" "}
        <span data-text-reveal className="text-zinc-400">
          Cortex was built for the last one percent — pores, grain, the way
          light falls off a face. It renders thousands of frames and reviews
          every single one. You only ever see the keepers.
        </span>
      </p>
    </section>
  );
}
