"use client";

import { cn } from "@/lib/utils";

type BillingToggleProps = {
  billing: "monthly" | "yearly";
  onChange: (value: "monthly" | "yearly") => void;
};

export function BillingToggle({ billing, onChange }: BillingToggleProps) {
  return (
    <div
      className="inline-flex items-center rounded-full border border-border bg-white p-1 text-[12px]"
      role="group"
      aria-label="Billing period"
    >
      {(["monthly", "yearly"] as const).map((value) => (
        <button
          key={value}
          type="button"
          onClick={() => onChange(value)}
          className={cn(
            "rounded-full px-3.5 py-1.5 capitalize transition-colors",
            billing === value
              ? "bg-foreground text-background"
              : "text-muted-foreground hover:text-foreground",
          )}
        >
          {value}
        </button>
      ))}
    </div>
  );
}
