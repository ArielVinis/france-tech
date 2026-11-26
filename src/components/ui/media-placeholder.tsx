import type { CSSProperties } from "react";
import { DottedPattern } from "@/components/ui/dotted-pattern";
import { cn } from "@/lib/utils";

type MediaPlaceholderProps = {
  className?: string;
  size?: number;
  style?: CSSProperties;
};

/** Placeholder fotográfico — padrão de pontos no lugar de imagens reais. */
export function MediaPlaceholder({
  className,
  size = 12,
  style,
}: MediaPlaceholderProps) {
  return (
    <DottedPattern
      size={size}
      className={cn(
        "absolute inset-0 h-full w-full bg-zinc-100 text-foreground/20",
        className,
      )}
      style={style}
    />
  );
}
