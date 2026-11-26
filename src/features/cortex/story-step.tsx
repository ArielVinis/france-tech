"use client";

import { cn } from "@/lib/utils";

type StoryStepProps = {
  number: string;
  title: string;
  description: string;
  active: boolean;
  className?: string;
};

export function StoryStep({
  number,
  title,
  description,
  active,
  className,
}: StoryStepProps) {
  return (
    <div
      className={cn(
        "transition-opacity duration-300",
        active ? "opacity-100" : "pointer-events-none absolute opacity-0",
        className,
      )}
      aria-hidden={!active}
    >
      <div className="flex items-center gap-3">
        <span className="text-[12px] tabular-nums text-muted-foreground">
          {number}
        </span>
        <span className="h-px w-6 bg-foreground/80" aria-hidden />
      </div>
      <h3 className="mt-3 max-w-full font-heading text-xl font-semibold tracking-[-0.03em] text-foreground sm:text-2xl lg:text-[1.75rem]">
        {title}
      </h3>
      <p className="mt-3 max-w-full text-[13px] leading-relaxed text-muted-foreground sm:text-[14px]">
        {description}
      </p>
    </div>
  );
}
