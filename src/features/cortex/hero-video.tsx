"use client";

import { useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import { heroFilm } from "@/data/cortex";
import { MediaPlaceholder } from "@/components/ui/media-placeholder";

gsap.registerPlugin(ScrollTrigger, useGSAP);

export function HeroVideo() {
  const rootRef = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      const root = rootRef.current;
      if (!root) return;
      const frame = root.querySelector<HTMLElement>("[data-film-frame]");
      if (!frame) return;

      const mm = gsap.matchMedia();
      mm.add("(prefers-reduced-motion: no-preference)", () => {
        gsap.fromTo(
          frame,
          { y: 48, scale: 0.97 },
          {
            y: 0,
            scale: 1,
            ease: "none",
            scrollTrigger: {
              trigger: root,
              start: "top 90%",
              end: "top 35%",
              scrub: 0.6,
            },
          },
        );
      });
    },
    { scope: rootRef },
  );

  return (
    <div ref={rootRef} className="mx-auto w-full max-w-5xl px-4 md:px-6">
      <p className="mb-4 text-center text-[13px] text-muted-foreground">
        {heroFilm.caption}
      </p>
      <div
        data-film-frame
        className="relative aspect-[16/9] w-full overflow-hidden rounded-[1.75rem] border border-border bg-muted will-change-transform md:rounded-[2rem]"
      >
        <MediaPlaceholder size={16} className="bg-zinc-200/80" />
        <span className="sr-only">{heroFilm.alt}</span>
      </div>
    </div>
  );
}
