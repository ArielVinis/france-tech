import Link from "next/link";

export function CortexFooter() {
  return (
    <footer className="border-t border-border">
      <div className="mx-auto flex max-w-6xl flex-col items-start justify-between gap-4 px-4 py-10 text-[12px] text-muted-foreground md:flex-row md:items-center md:px-6">
        <p className="font-heading text-sm font-semibold tracking-[-0.02em] text-foreground">
          Cortex
        </p>
        <div className="flex flex-wrap gap-4">
          <Link href="#product" className="hover:text-foreground">
            Product
          </Link>
          <Link href="#pricing" className="hover:text-foreground">
            Pricing
          </Link>
          <Link href="mailto:hello@example.com" className="hover:text-foreground">
            Contact
          </Link>
          <Link href="/" className="hover:text-foreground">
            France Tech
          </Link>
        </div>
        <p>© {new Date().getFullYear()} Cortex</p>
      </div>
    </footer>
  );
}
