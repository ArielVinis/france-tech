"use client";

import { useRef, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import type { PricingPlan } from "@/data/cortex";
import { BillingToggle } from "@/features/cortex/billing-toggle";
import { PricingCard } from "@/features/cortex/pricing-card";

gsap.registerPlugin(ScrollTrigger, useGSAP);

type PricingProps = {
  plans: PricingPlan[];
};

export function Pricing({ plans }: PricingProps) {
  const [billing, setBilling] = useState<"monthly" | "yearly">("monthly");
  const rootRef = useRef<HTMLElement>(null);

  useGSAP(
    () => {
      const root = rootRef.current;
      if (!root) return;
      const cards = root.querySelectorAll("[data-pricing-card]");
      const mm = gsap.matchMedia();

      mm.add("(prefers-reduced-motion: reduce)", () => {
        gsap.set(cards, { clearProps: "all" });
      });

      mm.add("(prefers-reduced-motion: no-preference)", () => {
        gsap.from(cards, {
          opacity: 0,
          y: 32,
          duration: 0.85,
          ease: "power3.out",
          stagger: 0.1,
          scrollTrigger: {
            trigger: root,
            start: "top 75%",
            toggleActions: "play none none reverse",
          },
        });
      });
    },
    { scope: rootRef },
  );

  return (
    <section
      id="pricing"
      ref={rootRef}
      className="mx-auto max-w-6xl px-4 py-20 md:px-6 md:py-28"
    >
      <div className="mb-10 flex flex-col gap-6 md:mb-14 md:flex-row md:items-end md:justify-between">
        <div className="max-w-xl">
          <h2 className="font-heading text-[clamp(2rem,4vw,3rem)] font-semibold tracking-[-0.035em] text-foreground">
            Pay for keepers, not noise
          </h2>
          <p className="mt-4 text-[15px] leading-relaxed text-muted-foreground">
            Every plan runs the full engine and the full review pass. Upgrade
            when you need more frames, longer film, or cleaner exports.
          </p>
        </div>
        <BillingToggle billing={billing} onChange={setBilling} />
      </div>
      <div className="grid gap-4 md:grid-cols-3">
        {plans.map((plan) => (
          <PricingCard key={plan.id} plan={plan} billing={billing} />
        ))}
      </div>
      <p className="mt-8 text-center text-[12px] text-muted-foreground">
        Prices in USD. Cancel anytime in the app — your plan runs to the end of
        the period.
      </p>
    </section>
  );
}
