"use client";

import { useEffect, useRef, useState } from "react";

import { cn } from "@/lib/utils";

interface TrueFocusProps {
  sentence?: string;
  separator?: string;
  manualMode?: boolean;
  blurAmount?: number;
  borderColor?: string;
  glowColor?: string;
  animationDuration?: number;
  pauseBetweenAnimations?: number;
  className?: string;
}

interface FocusRect {
  x: number;
  y: number;
  width: number;
  height: number;
}

/** Focus frame via CSS transition — sem Motion */
const TrueFocus: React.FC<TrueFocusProps> = ({
  sentence = "True Focus",
  separator = " ",
  manualMode = false,
  blurAmount = 5,
  borderColor = "green",
  glowColor = "rgba(0, 255, 0, 0.6)",
  animationDuration = 0.5,
  pauseBetweenAnimations = 1,
  className = "",
}) => {
  const words = sentence.split(separator);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [lastActiveIndex, setLastActiveIndex] = useState<number | null>(null);
  const containerRef = useRef<HTMLDivElement | null>(null);
  const wordRefs = useRef<(HTMLSpanElement | null)[]>([]);
  const [focusRect, setFocusRect] = useState<FocusRect>({
    x: 0,
    y: 0,
    width: 0,
    height: 0,
  });

  useEffect(() => {
    if (manualMode) return;
    const interval = setInterval(
      () => setCurrentIndex((prev) => (prev + 1) % words.length),
      (animationDuration + pauseBetweenAnimations) * 1000,
    );
    return () => clearInterval(interval);
  }, [manualMode, animationDuration, pauseBetweenAnimations, words.length]);

  useEffect(() => {
    if (currentIndex < 0) return;
    if (!wordRefs.current[currentIndex] || !containerRef.current) return;

    const parentRect = containerRef.current.getBoundingClientRect();
    const activeRect = wordRefs.current[currentIndex]!.getBoundingClientRect();

    setFocusRect({
      x: activeRect.left - parentRect.left,
      y: activeRect.top - parentRect.top,
      width: activeRect.width,
      height: activeRect.height,
    });
  }, [currentIndex, words.length]);

  return (
    <div
      ref={containerRef}
      className={cn(
        "relative flex flex-wrap items-center justify-start gap-4 text-foreground select-none",
        className,
      )}
    >
      {words.map((word, index) => {
        const isActive = index === currentIndex;
        return (
          <span
            key={word}
            ref={(el) => {
              wordRefs.current[index] = el;
            }}
            className="relative cursor-pointer font-heading text-2xl font-semibold tracking-tight md:text-4xl"
            style={{
              filter: isActive ? "blur(0px)" : `blur(${blurAmount}px)`,
              transition: `filter ${animationDuration}s ease`,
            }}
            onMouseEnter={() => {
              if (!manualMode) return;
              setLastActiveIndex(index);
              setCurrentIndex(index);
            }}
            onMouseLeave={() => {
              if (!manualMode || lastActiveIndex === null) return;
              setCurrentIndex(lastActiveIndex);
            }}
          >
            {word}
          </span>
        );
      })}

      <div
        aria-hidden
        className="pointer-events-none absolute top-0 left-0 box-border border-0"
        style={{
          transform: `translate(${focusRect.x}px, ${focusRect.y}px)`,
          width: focusRect.width,
          height: focusRect.height,
          opacity: currentIndex >= 0 ? 1 : 0,
          transition: `transform ${animationDuration}s ease, width ${animationDuration}s ease, height ${animationDuration}s ease, opacity ${animationDuration}s ease`,
          ["--border-color" as string]: borderColor,
          ["--glow-color" as string]: glowColor,
        }}
      >
        <span
          className="absolute -top-2.5 -left-2.5 h-4 w-4 rounded-[3px] border-[3px] border-r-0 border-b-0"
          style={{
            borderColor: "var(--border-color)",
            filter: "drop-shadow(0 0 4px var(--border-color))",
          }}
        />
        <span
          className="absolute -top-2.5 -right-2.5 h-4 w-4 rounded-[3px] border-[3px] border-b-0 border-l-0"
          style={{
            borderColor: "var(--border-color)",
            filter: "drop-shadow(0 0 4px var(--border-color))",
          }}
        />
        <span
          className="absolute -bottom-2.5 -left-2.5 h-4 w-4 rounded-[3px] border-[3px] border-t-0 border-r-0"
          style={{
            borderColor: "var(--border-color)",
            filter: "drop-shadow(0 0 4px var(--border-color))",
          }}
        />
        <span
          className="absolute -right-2.5 -bottom-2.5 h-4 w-4 rounded-[3px] border-[3px] border-t-0 border-l-0"
          style={{
            borderColor: "var(--border-color)",
            filter: "drop-shadow(0 0 4px var(--border-color))",
          }}
        />
      </div>
    </div>
  );
};

export default TrueFocus;
