"use client";

import Link from "next/link";
import { Menu } from "lucide-react";
import { navLinks } from "@/data/cortex";
import { ScrollProgressLabel } from "@/features/cortex/scroll-progress";

export function CortexHeader() {
  return (
    <header className="pointer-events-none fixed inset-x-0 top-0 z-50">
      <div className="mx-auto grid w-full max-w-6xl grid-cols-[1fr_auto_1fr] items-center gap-3 px-4 py-4 md:px-6">
        <nav
          className="pointer-events-auto justify-self-start rounded-full border border-border bg-white/90 px-4 py-1.5 text-[12px] text-foreground/70 shadow-[0_1px_0_rgb(0_0_0_/0.02)] backdrop-blur-md"
          aria-label="Primary"
        >
          <div className="flex items-center gap-4">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="transition-colors hover:text-foreground"
              >
                {link.label}
              </Link>
            ))}
          </div>
        </nav>

        <button
          type="button"
          className="pointer-events-auto inline-flex items-center gap-2.5 justify-self-center rounded-full bg-foreground px-3.5 py-2 text-[12px] font-medium text-background"
          aria-label="Menu and scroll progress"
        >
          <Menu className="size-3.5 opacity-90" strokeWidth={2} />
          <span>Menu</span>
          <ScrollProgressLabel className="min-w-[2.25rem] text-right tabular-nums opacity-80" />
        </button>

        <div className="pointer-events-auto flex items-center justify-self-end gap-3">
          <Link
            href="#login"
            className="text-[12px] text-foreground/70 transition-colors hover:text-foreground"
          >
            Login
          </Link>
          <Link
            href="#cta"
            className="hidden rounded-full bg-foreground px-3.5 py-2 text-[12px] font-medium text-background transition-opacity hover:opacity-90 sm:inline-flex"
          >
            Get the app
          </Link>
        </div>
      </div>
    </header>
  );
}
