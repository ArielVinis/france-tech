/** Prata metálico por tema — dark = claro na tela; light = escuro para contrastar */
export const BRAND_METALLIC = {
  dark: {
    silver: "#c0c0c0",
    shine: "#ffffff",
    splash: "#59585a",
    glow: "rgba(192, 192, 192, 0.45)",
  },
  light: {
    silver: "#18181b",
    shine: "#52525b",
    splash: "#0d0e4b",
    glow: "rgba(24, 24, 27, 0.35)",
  },
} as const;

export type BrandMetallic =
  | (typeof BRAND_METALLIC)["dark"]
  | (typeof BRAND_METALLIC)["light"];

export function brandMetallicFor(theme: string | undefined): BrandMetallic {
  return theme === "light" ? BRAND_METALLIC.light : BRAND_METALLIC.dark;
}
