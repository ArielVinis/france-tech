"use client";

import { Check } from "lucide-react";
import { MediaPlaceholder } from "@/components/ui/media-placeholder";
import { cn } from "@/lib/utils";

type PhoneMockupProps = {
  screen: "prompt" | "generate" | "review" | "library";
  takeLabel?: string;
  badge?: { title: string; subtitle: string };
  className?: string;
};

export function PhoneMockup({
  screen,
  takeLabel,
  badge,
  className,
}: PhoneMockupProps) {
  return (
    <div
      className={cn(
        "relative mx-auto aspect-[9/19] h-[min(48svh,420px)] w-auto overflow-hidden rounded-[2.35rem] border border-zinc-200 bg-zinc-50 shadow-[0_20px_50px_rgb(0_0_0_/0.08)]",
        className,
      )}
    >
      {/* Dynamic Island */}
      <div className="absolute inset-x-[28%] top-3 z-30 mx-auto h-6 rounded-full bg-zinc-950" />

      <div className="absolute inset-[5px] overflow-hidden rounded-[2rem] bg-zinc-100">
        {screen === "prompt" ? (
          <PromptScreen />
        ) : (
          <VisualScreen
            screen={screen}
            takeLabel={takeLabel}
            badge={badge}
          />
        )}
      </div>
    </div>
  );
}

function PromptScreen() {
  return (
    <div className="flex h-full flex-col p-4 pt-11">
      <p className="text-[11px] font-medium uppercase tracking-wider text-zinc-400">
        New shot
      </p>
      <p className="mt-3 font-heading text-lg font-semibold leading-snug tracking-[-0.02em] text-zinc-900">
        Describe the shot
      </p>
      <div className="mt-4 flex-1 rounded-2xl border border-zinc-200 bg-white p-3 text-[12px] leading-relaxed text-zinc-600">
        Golden hour on a coastal road, vintage van parked roadside, lone figure
        walking toward the horizon, anamorphic flare, Kodak Portra…
        <span className="ml-0.5 inline-block h-3 w-px animate-pulse bg-zinc-900 align-middle" />
      </div>
      <div className="mt-3 rounded-full bg-zinc-900 py-2.5 text-center text-[12px] font-medium text-white">
        Generate takes
      </div>
    </div>
  );
}

function VisualScreen({
  screen,
  takeLabel,
  badge,
}: {
  screen: "generate" | "review" | "library";
  takeLabel?: string;
  badge?: { title: string; subtitle: string };
}) {
  if (screen === "generate") {
    return (
      <div className="relative flex h-full flex-col p-3 pt-11">
        {takeLabel ? <TakePill label={takeLabel} /> : null}
        <p className="mb-2 text-[11px] font-medium uppercase tracking-wider text-zinc-400">
          Takes
        </p>
        <div className="grid flex-1 grid-cols-2 gap-1.5">
          {[10, 12, 11, 13].map((size, i) => (
            <div
              key={i}
              className="relative overflow-hidden rounded-xl border border-zinc-200/80"
            >
              <MediaPlaceholder size={size} />
            </div>
          ))}
        </div>
      </div>
    );
  }

  if (screen === "library") {
    return (
      <div className="relative flex h-full flex-col p-3 pt-11">
        {takeLabel ? <TakePill label={takeLabel} /> : null}
        <p className="mb-2 text-[11px] font-medium uppercase tracking-wider text-zinc-400">
          Library
        </p>
        <div className="grid flex-1 grid-cols-2 gap-1.5">
          {[11, 13, 10, 12].map((size, i) => (
            <div
              key={i}
              className="relative overflow-hidden rounded-xl border border-zinc-200/80"
            >
              <MediaPlaceholder size={size} />
            </div>
          ))}
        </div>
        {badge ? <BottomBadge badge={badge} /> : null}
      </div>
    );
  }

  /* review — full-bleed frame like the reference */
  return (
    <div className="relative h-full">
      <MediaPlaceholder size={14} className="bg-zinc-200" />
      {takeLabel ? <TakePill label={takeLabel} className="absolute left-3 top-11 z-20" /> : null}
      {badge ? <BottomBadge badge={badge} /> : null}
    </div>
  );
}

function TakePill({
  label,
  className,
}: {
  label: string;
  className?: string;
}) {
  return (
    <span
      className={cn(
        "inline-flex rounded-full bg-white/95 px-2.5 py-1 text-[10px] font-medium text-zinc-800 shadow-sm",
        className,
      )}
    >
      {label}
    </span>
  );
}

function BottomBadge({
  badge,
}: {
  badge: { title: string; subtitle: string };
}) {
  return (
    <div className="absolute inset-x-3 bottom-3 z-20 rounded-2xl bg-white/95 p-3 shadow-[0_8px_24px_rgb(0_0_0_/0.08)] backdrop-blur-sm">
      <div className="flex items-start gap-2.5">
        <span className="mt-0.5 flex size-5 shrink-0 items-center justify-center rounded-full border border-zinc-200 bg-white">
          <Check className="size-3 text-zinc-900" strokeWidth={2.5} />
        </span>
        <div>
          <p className="text-[12px] font-semibold text-zinc-900">{badge.title}</p>
          <p className="mt-0.5 text-[10px] text-zinc-500">{badge.subtitle}</p>
        </div>
      </div>
    </div>
  );
}
