"use client";

import { useState } from "react";
import { Plus, X } from "lucide-react";
import type { FaqItem as FaqItemType } from "@/data/cortex";
import { cn } from "@/lib/utils";

type FAQItemProps = {
  item: FaqItemType;
  open: boolean;
  onToggle: () => void;
};

export function FAQItem({ item, open, onToggle }: FAQItemProps) {
  return (
    <div className="border-b border-border">
      <button
        type="button"
        onClick={onToggle}
        className="flex w-full items-center justify-between gap-4 py-5 text-left"
        aria-expanded={open}
      >
        <span className="text-[15px] font-medium text-foreground md:text-[16px]">
          {item.question}
        </span>
        {open ? (
          <X className="size-4 shrink-0 text-foreground" strokeWidth={1.75} />
        ) : (
          <Plus className="size-4 shrink-0 text-foreground" strokeWidth={1.75} />
        )}
      </button>
      <div
        className={cn(
          "grid transition-[grid-template-rows] duration-300 ease-out",
          open ? "grid-rows-[1fr]" : "grid-rows-[0fr]",
        )}
      >
        <div className="overflow-hidden">
          <p className="pb-5 pr-8 text-[14px] leading-relaxed text-muted-foreground">
            {item.answer}
          </p>
        </div>
      </div>
    </div>
  );
}

type FAQProps = {
  items: FaqItemType[];
};

export function FAQ({ items }: FAQProps) {
  const [openIndex, setOpenIndex] = useState(0);

  return (
    <section className="mx-auto max-w-6xl px-4 py-20 md:px-6 md:py-28">
      <div className="grid gap-12 md:grid-cols-[minmax(0,0.9fr)_minmax(0,1.1fr)] md:gap-16">
        <div>
          <h2 className="font-heading text-[clamp(2rem,4vw,3rem)] font-semibold leading-[1.05] tracking-[-0.035em] text-foreground">
            Fair questions,
            <br />
            straight answers
          </h2>
          <p className="mt-4 max-w-sm text-[15px] leading-relaxed text-muted-foreground">
            Anything else, write to{" "}
            <a
              href="mailto:hello@example.com"
              className="text-foreground underline-offset-2 hover:underline"
            >
              hello@example.com
            </a>
            . A person reads every single message.
          </p>
        </div>
        <div className="border-t border-border">
          {items.map((item, i) => (
            <FAQItem
              key={item.question}
              item={item}
              open={openIndex === i}
              onToggle={() => setOpenIndex(openIndex === i ? -1 : i)}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
