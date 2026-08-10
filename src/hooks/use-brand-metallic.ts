"use client";

import { useTheme } from "next-themes";

import { useIsClient } from "@/hooks/use-is-client";
import {
  BRAND_METALLIC,
  brandMetallicFor,
  type BrandMetallic,
} from "@/lib/brand";

export function useBrandMetallic(): BrandMetallic {
  const { resolvedTheme } = useTheme();
  const mounted = useIsClient();

  if (!mounted) return BRAND_METALLIC.dark;
  return brandMetallicFor(resolvedTheme);
}
