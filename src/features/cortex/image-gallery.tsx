"use client";

import type { GalleryImage } from "@/data/cortex";
import { MediaPlaceholder } from "@/components/ui/media-placeholder";
import { cn } from "@/lib/utils";

type ImageGalleryProps = {
  images: GalleryImage[];
  reverse?: boolean;
  className?: string;
};

export function ImageGallery({
  images,
  reverse,
  className,
}: ImageGalleryProps) {
  const loop = [...images, ...images];

  return (
    <div className={cn("overflow-hidden", className)}>
      <div
        className={cn(
          "flex w-max gap-4",
          reverse ? "cortex-marquee-reverse" : "cortex-marquee",
        )}
        style={{
          ["--marquee-duration" as string]: reverse ? "56s" : "48s",
        }}
      >
        {loop.map((item, i) => (
          <figure
            key={`${item.id}-${i}`}
            className="w-[260px] shrink-0 md:w-[320px]"
          >
            <div className="relative aspect-[4/5] overflow-hidden rounded-2xl border border-border bg-muted">
              <MediaPlaceholder size={11 + (i % 3)} />
            </div>
            <figcaption className="mt-3 px-0.5">
              <p className="text-[13px] font-medium text-foreground">
                {item.caption}
              </p>
              <p className="mt-0.5 line-clamp-1 text-[12px] text-muted-foreground">
                {item.prompt}
              </p>
            </figcaption>
          </figure>
        ))}
      </div>
    </div>
  );
}
