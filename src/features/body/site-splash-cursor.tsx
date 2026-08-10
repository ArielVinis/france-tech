"use client";

import SplashCursor from "@/components/SplashCursor";
import { useBrandMetallic } from "@/hooks/use-brand-metallic";
import { BRAND_METALLIC } from "@/lib/brand";
import { cn } from "@/lib/utils";

/** Fluido do cursor — no light usa multiply para o dye escurecer o fundo */
export function SiteSplashCursor() {
  const brand = useBrandMetallic();
  const isLight = brand.splash === BRAND_METALLIC.light.splash;

  return (
    <div
      aria-hidden
      className={cn(
        "pointer-events-none fixed inset-0 z-0 overflow-hidden",
        isLight && "mix-blend-multiply opacity-90",
      )}
    >
      <SplashCursor
        key={brand.splash}
        DENSITY_DISSIPATION={isLight ? 4.5 : 7}
        VELOCITY_DISSIPATION={2}
        PRESSURE={0.1}
        CURL={3}
        SPLAT_RADIUS={isLight ? 0.28 : 0.2}
        SPLAT_FORCE={isLight ? 9000 : 6000}
        COLOR_UPDATE_SPEED={10}
        SHADING
        RAINBOW_MODE={false}
        COLOR={brand.splash}
      />
    </div>
  );
}
