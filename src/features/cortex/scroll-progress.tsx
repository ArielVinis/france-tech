"use client";

import { useEffect, useState } from "react";
import { useLenis } from "lenis/react";

/** Percentual de scroll da página (0–100), sincronizado com Lenis. */
export function useScrollProgress() {
  const [progress, setProgress] = useState(0);

  useLenis((lenis) => {
    const max = lenis.limit || 1;
    setProgress(Math.min(100, Math.max(0, Math.round((lenis.scroll / max) * 100))));
  });

  useEffect(() => {
    const onScroll = () => {
      const el = document.documentElement;
      const max = el.scrollHeight - el.clientHeight || 1;
      setProgress(Math.min(100, Math.max(0, Math.round((window.scrollY / max) * 100))));
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return progress;
}

export function ScrollProgressLabel({ className }: { className?: string }) {
  const progress = useScrollProgress();
  return <span className={className}>{progress}%</span>;
}
