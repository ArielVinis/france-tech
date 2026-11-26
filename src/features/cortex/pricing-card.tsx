"use client";

import Link from "next/link";
import { Check } from "lucide-react";
import type { PricingPlan } from "@/data/cortex";
import { cn } from "@/lib/utils";

type PricingCardProps = {
  plan: PricingPlan;
  billing: "monthly" | "yearly";
};

export function PricingCard({ plan, billing }: PricingCardProps) {
  const price =
    billing === "yearly" ? plan.yearlyPrice : plan.monthlyPrice;
  const note =
    plan.id === "free"
      ? plan.billingNote
      : billing === "yearly"
        ? "billed yearly"
        : plan.billingNote;

  return (
    <article
      data-pricing-card
      className={cn(
        "relative flex flex-col rounded-2xl border p-6 md:p-7",
        plan.highlighted
          ? "border-foreground bg-foreground text-background"
          : "border-border bg-white text-foreground",
      )}
    >
      {plan.badge ? (
        <span
          className={cn(
            "mb-3 inline-flex w-fit rounded-full px-2.5 py-0.5 text-[11px] font-medium",
            plan.highlighted
              ? "bg-white/15 text-background"
              : "bg-muted text-muted-foreground",
          )}
        >
          {plan.badge}
        </span>
      ) : null}
      <h3 className="font-heading text-xl font-semibold tracking-[-0.02em]">
        {plan.name}
      </h3>
      <p
        className={cn(
          "mt-2 text-[13px] leading-relaxed",
          plan.highlighted ? "text-white/70" : "text-muted-foreground",
        )}
      >
        {plan.description}
      </p>
      <div className="mt-6 flex items-baseline gap-1">
        <span className="font-heading text-4xl font-semibold tracking-[-0.03em]">
          ${price}
        </span>
        <span
          className={cn(
            "text-[13px]",
            plan.highlighted ? "text-white/60" : "text-muted-foreground",
          )}
        >
          / month
        </span>
      </div>
      <p
        className={cn(
          "mt-1 text-[12px]",
          plan.highlighted ? "text-white/50" : "text-muted-foreground",
        )}
      >
        {note}
      </p>
      <ul className="mt-6 flex flex-1 flex-col gap-2.5">
        {plan.features.map((feature) => (
          <li key={feature} className="flex items-start gap-2 text-[13px]">
            <Check
              className={cn(
                "mt-0.5 size-3.5 shrink-0",
                plan.highlighted ? "text-white/80" : "text-foreground",
              )}
              strokeWidth={2}
            />
            <span className={plan.highlighted ? "text-white/85" : "text-foreground/80"}>
              {feature}
            </span>
          </li>
        ))}
      </ul>
      <Link
        href="#cta"
        className={cn(
          "mt-8 inline-flex items-center justify-center rounded-full px-4 py-2.5 text-[13px] font-medium transition-opacity hover:opacity-90",
          plan.highlighted
            ? "bg-white text-foreground"
            : "bg-foreground text-background",
        )}
      >
        {plan.cta}
      </Link>
    </article>
  );
}
