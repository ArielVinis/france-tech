"use client";

import type { GalleryImage } from "@/data/cortex";
import { ImageGallery } from "@/features/cortex/image-gallery";

type MadeWithCortexProps = {
  rowA: GalleryImage[];
  rowB: GalleryImage[];
};

export function MadeWithCortex({ rowA, rowB }: MadeWithCortexProps) {
  return (
    <section className="overflow-hidden py-20 md:py-28">
      <div className="mx-auto mb-12 max-w-5xl px-4 md:mb-16 md:px-6">
        <h2 className="font-heading text-[clamp(2rem,4vw,3rem)] font-semibold tracking-[-0.035em] text-foreground">
          Made with Cortex
        </h2>
        <p className="mt-4 max-w-xl text-[15px] leading-relaxed text-muted-foreground">
          Every frame below came out of the app, prompt included. Nothing
          retouched, nothing staged.
        </p>
      </div>
      <div className="flex flex-col gap-8">
        <ImageGallery images={rowA} />
        <ImageGallery images={rowB} reverse />
      </div>
    </section>
  );
}
