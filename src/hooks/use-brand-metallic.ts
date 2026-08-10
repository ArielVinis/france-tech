"use client";

import { useEffect, useState } from "react";
import { useTheme } from "next-themes";

import {
  BRAND_METALLIC,
  brandMetallicFor,
  type BrandMetallic,
} from "@/lib/brand";

/**
 * Evita hydration mismatch: SSR e 1º paint usam dark (defaultTheme);
 * só após mount aplica o tema real do cliente.
 */
export function useBrandMetallic(): BrandMetallic {
  const { resolvedTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return BRAND_METALLIC.dark;
  return brandMetallicFor(resolvedTheme);
}
