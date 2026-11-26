"use client";

import type { Integration } from "@/data/cortex";

type PublishingIntegrationsProps = {
  integrations: Integration[];
};

export function PublishingIntegrations({
  integrations,
}: PublishingIntegrationsProps) {
  return (
    <section className="mx-auto max-w-5xl px-4 py-20 md:px-6 md:py-28">
      <div className="mb-10 max-w-xl md:mb-14">
        <h2 className="font-heading text-[clamp(2rem,4vw,3rem)] font-semibold tracking-[-0.035em] text-foreground">
          Lands where you publish
        </h2>
        <p className="mt-4 text-[15px] leading-relaxed text-muted-foreground">
          Keepers route straight from your camera roll into the apps you post,
          pitch, and cut in. No export dance.
        </p>
      </div>
      <ul className="flex flex-wrap gap-2.5">
        {integrations.map((item) => (
          <li
            key={item.name}
            className="inline-flex items-center gap-2 rounded-full border border-border bg-white px-3.5 py-2"
          >
            <span className="flex size-5 items-center justify-center rounded-full bg-foreground text-[9px] font-semibold text-background">
              {item.name.slice(0, 1)}
            </span>
            <span className="text-[13px] font-medium text-foreground">
              {item.name}
            </span>
            <span className="text-[12px] text-muted-foreground">
              {item.subtitle}
            </span>
          </li>
        ))}
      </ul>
    </section>
  );
}
