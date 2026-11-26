import Link from "next/link";
import { franceTech } from "@/data/france-tech";

export function SiteFooter() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-border/40">
      <div className="mx-auto flex max-w-6xl flex-col gap-8 px-6 py-12 md:flex-row md:items-end md:justify-between md:px-8">
        <div className="flex flex-col gap-2">
          <p className="font-heading text-lg font-semibold tracking-tight text-foreground">
            {franceTech.name}
          </p>
          <p className="max-w-sm text-sm text-muted-foreground">
            {franceTech.tagline}
          </p>
        </div>

        <nav aria-label="Rodapé" className="flex flex-wrap gap-x-6 gap-y-2">
          {franceTech.nav.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-sm text-muted-foreground transition-colors hover:text-foreground"
            >
              {link.label}
            </Link>
          ))}
          <Link
            href={`mailto:${franceTech.email}`}
            className="text-sm text-muted-foreground transition-colors hover:text-foreground"
          >
            {franceTech.email}
          </Link>
        </nav>
      </div>
      <div className="mx-auto max-w-6xl border-t border-border/30 px-6 py-6 md:px-8">
        <p className="text-xs text-muted-foreground">
          © {year} {franceTech.name}. Todos os direitos reservados.
        </p>
      </div>
    </footer>
  );
}
