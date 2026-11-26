import { franceTech } from "@/data/france-tech";

/** Âncoras observáveis (inclui início para scroll-spy do logo). */
export const NAV_SECTIONS = [{ href: "#inicio", label: "Início" }, ...franceTech.nav] as const;

/** Links visíveis no header — alinhados ao branding (sem Início). */
export const NAV_LINKS = franceTech.nav;
