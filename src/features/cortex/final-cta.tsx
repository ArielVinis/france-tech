"use client";

import { useRef } from "react";
import Link from "next/link";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import { finalCtaImages } from "@/data/cortex";
import { MediaPlaceholder } from "@/components/ui/media-placeholder";

gsap.registerPlugin(ScrollTrigger, useGSAP);

export function FinalCTA() {
  const rootRef = useRef<HTMLElement>(null);

  useGSAP(
    () => {
      const root = rootRef.current;
      if (!root) return;
      const imgs = root.querySelectorAll("[data-cta-img]");
      const mm = gsap.matchMedia();

      mm.add("(prefers-reduced-motion: no-preference)", () => {
        imgs.forEach((el, i) => {
          const depth = 12 + (i % 3) * 10;
          gsap.fromTo(
            el,
            { y: depth },
            {
              y: -depth,
              ease: "none",
              scrollTrigger: {
                trigger: root,
                start: "top bottom",
                end: "bottom top",
                scrub: 0.55,
              },
            },
          );
        });
      });
    },
    { scope: rootRef },
  );

  return (
    <section id="cta" ref={rootRef} className="px-4 pb-16 md:px-6 md:pb-24">
      <div className="mx-auto max-w-5xl overflow-hidden rounded-[2rem] bg-foreground px-6 py-16 text-center text-background md:rounded-[2.5rem] md:px-12 md:py-24">
        <div className="mb-10 flex justify-center">
          <div className="flex items-end -space-x-4 md:-space-x-5">
            {finalCtaImages.map((item, i) => (
              <div
                key={item.id}
                data-cta-img
                className="relative h-16 w-14 overflow-hidden rounded-xl border border-white/15 will-change-transform md:h-24 md:w-20"
                style={{
                  transform: `rotate(${item.rotate}deg)`,
                  zIndex: i,
                }}
              >
                <MediaPlaceholder
                  size={10 + (i % 3)}
                  className="bg-zinc-700 text-white/25"
                />
              </div>
            ))}
          </div>
        </div>
        <h2 className="font-heading text-[clamp(2rem,5vw,3.5rem)] font-semibold leading-[1.05] tracking-[-0.035em]">
          Your next shot is a
          <br />
          sentence away.
        </h2>
        <p className="mx-auto mt-5 max-w-md text-[15px] leading-relaxed text-white/65">
          Free to try on iOS and Android. Describe the frame, keep only what
          survives review.
        </p>
        <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
          <Link
            href="#cta"
            className="rounded-full bg-white px-4 py-2.5 text-[13px] font-medium text-foreground transition-opacity hover:opacity-90"
          >
            Get the app
          </Link>
          <Link
            href="#pricing"
            className="rounded-full border border-white/20 px-4 py-2.5 text-[13px] text-white/80 transition-colors hover:text-white"
          >
            See pricing
          </Link>
        </div>
      </div>
    </section>
  );
}
