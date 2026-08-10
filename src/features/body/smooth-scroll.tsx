"use client";

import { useEffect, useRef, type ReactNode } from "react";
import { ReactLenis, useLenis } from "lenis/react";
import type { LenisRef } from "lenis/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

import { SectionSnap } from "@/features/body/section-snap";

import "lenis/dist/lenis.css";

gsap.registerPlugin(ScrollTrigger);

type SmoothScrollProps = {
  children: ReactNode;
};

function ScrollTriggerBridge() {
  useLenis(ScrollTrigger.update);

  useEffect(() => {
    ScrollTrigger.refresh();
  }, []);

  return null;
}

/**
 * Smooth scroll via Lenis + sync com GSAP ScrollTrigger.
 * Docs: https://github.com/darkroomengineering/lenis#gsap-scrolltrigger
 * React: https://github.com/darkroomengineering/lenis/tree/main/packages/react
 */
export function SmoothScroll({ children }: SmoothScrollProps) {
  const lenisRef = useRef<LenisRef>(null);

  useEffect(() => {
    function update(time: number) {
      lenisRef.current?.lenis?.raf(time * 1000);
    }

    gsap.ticker.add(update);
    gsap.ticker.lagSmoothing(0);

    return () => {
      gsap.ticker.remove(update);
    };
  }, []);

  return (
    <ReactLenis
      root
      ref={lenisRef}
      options={{
        lerp: 0.08,
        smoothWheel: true,
        wheelMultiplier: 0.85,
        touchMultiplier: 1.1,
        anchors: { offset: -88 },
        autoRaf: false,
        // Windows muitas vezes tem reduced-motion → Lenis forçaria scroll 1:1 (duro).
        respectReducedMotion: false,
      }}
    >
      <ScrollTriggerBridge />
      <SectionSnap />
      {children}
    </ReactLenis>
  );
}
