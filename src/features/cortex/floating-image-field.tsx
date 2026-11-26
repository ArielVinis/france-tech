"use client";

import { useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import type { HeroImage } from "@/data/cortex";
import { MediaPlaceholder } from "@/components/ui/media-placeholder";
import { cn } from "@/lib/utils";

gsap.registerPlugin(ScrollTrigger, useGSAP);

type FloatingImageFieldProps = {
  images: HeroImage[];
  className?: string;
};

export function FloatingImageField({
  images,
  className,
}: FloatingImageFieldProps) {
  const rootRef = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      const root = rootRef.current;
      if (!root) return;

      const items = root.querySelectorAll<HTMLElement>("[data-float]");
      const mm = gsap.matchMedia();

      mm.add("(prefers-reduced-motion: reduce)", () => {
        gsap.set(items, { clearProps: "transform" });
      });

      mm.add("(prefers-reduced-motion: no-preference)", () => {
        items.forEach((el, i) => {
          const depth = Number(el.dataset.depth ?? 36);
          const dir = i % 2 === 0 ? -1 : 1;
          gsap.fromTo(
            el,
            {
              y: dir * depth * 0.35,
              x: dir * depth * 0.12,
              rotate: Number(el.dataset.rotate ?? 0) - dir * 2,
            },
            {
              y: dir * -depth,
              x: dir * -depth * 0.25,
              rotate: Number(el.dataset.rotate ?? 0) + dir * 3,
              ease: "none",
              scrollTrigger: {
                trigger: root,
                start: "top bottom",
                end: "bottom top",
                scrub: 0.75,
              },
            },
          );
        });
      });
    },
    { scope: rootRef },
  );

  return (
    <div
      ref={rootRef}
      aria-hidden
      className={cn(
        "pointer-events-none absolute inset-0 overflow-hidden",
        className,
      )}
    >
      {images.map((img) => (
        <div
          key={img.id}
          data-float
          data-depth={img.depth ?? 36}
          data-rotate={img.rotate ?? 0}
          className={cn("absolute will-change-transform", img.className)}
          style={{ opacity: img.opacity ?? 0.8 }}
        >
          <div
            className="relative h-full w-full overflow-hidden rounded-2xl border border-border/60 bg-muted shadow-[0_8px_30px_rgb(0_0_0_/0.04)]"
            style={{ transform: `rotate(${img.rotate ?? 0}deg)` }}
          >
            <MediaPlaceholder size={img.patternSize ?? 12} />
          </div>
        </div>
      ))}
    </div>
  );
}
