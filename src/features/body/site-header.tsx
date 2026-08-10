"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { useLenis } from "lenis/react";

import { ThemeToggle } from "@/components/theme-toggle";
import { NAV_LINKS } from "@/lib/nav";
import { cn } from "@/lib/utils";

type SiteHeaderProps = {
  className?: string;
};

const MIN_WIDTH = 560;
const MAX_SCROLL = 1000;

type HeaderLogoProps = {
  className?: string;
  size?: number;
  onNavigate: (
    event: React.MouseEvent<HTMLAnchorElement>,
    href: string,
  ) => void;
};

function HeaderLogo({ className, size = 36, onNavigate }: HeaderLogoProps) {
  return (
    <Link
      href="#inicio"
      onClick={(event) => onNavigate(event, "#inicio")}
      className={cn("relative shrink-0", className)}
      style={{ width: size, height: size }}
      aria-label="France Tech — início"
    >
      <Image
        src="/logo.png"
        alt=""
        width={size}
        height={size}
        className="size-full object-contain"
        priority
      />
    </Link>
  );
}

export function SiteHeader({ className }: SiteHeaderProps) {
  const navRef = useRef<HTMLElement>(null);
  const [activeHref, setActiveHref] = useState("#inicio");
  const lenis = useLenis();

  const updateNav = (scrollY: number) => {
    const nav = navRef.current;
    if (!nav) return;

    if (window.innerWidth < 768) {
      nav.style.width = "100%";
      nav.dataset.scrolling = scrollY > 0 ? "true" : "false";
      return;
    }

    if (scrollY > 0) {
      nav.dataset.scrolling = "true";
      const progress = Math.min(scrollY / MAX_SCROLL, 1);
      const eased = 1 - (1 - progress) ** 4;
      const maxWidth = window.innerWidth * 0.8;
      nav.style.width = `${maxWidth - (maxWidth - MIN_WIDTH) * eased}px`;
    } else {
      nav.dataset.scrolling = "false";
      nav.style.width = "80%";
    }
  };

  useLenis((instance) => {
    updateNav(instance.scroll);
  });

  useEffect(() => {
    updateNav(window.scrollY);
    const onResize = () => updateNav(window.scrollY);
    window.addEventListener("resize", onResize);
    return () => window.removeEventListener("resize", onResize);
  }, []);

  useEffect(() => {
    const sections = NAV_LINKS.map((link) =>
      document.getElementById(link.href.slice(1)),
    ).filter((el): el is HTMLElement => Boolean(el));

    if (sections.length === 0) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return;
          const id = entry.target.getAttribute("id");
          if (id) setActiveHref(`#${id}`);
        });
      },
      { threshold: 0.45 },
    );

    sections.forEach((section) => observer.observe(section));
    return () => observer.disconnect();
  }, []);

  const onNavClick = (
    event: React.MouseEvent<HTMLAnchorElement>,
    href: string,
  ) => {
    const target = document.getElementById(href.slice(1));
    if (!target) return;

    event.preventDefault();
    const offset = window.innerWidth < 768 ? -72 : -24;
    if (lenis) lenis.scrollTo(target, { offset });
    else target.scrollIntoView({ behavior: "smooth" });
    setActiveHref(href);
  };

  return (
    <nav
      ref={navRef}
      id="main-nav"
      aria-label="Principal"
      data-scrolling="false"
      style={{ width: "80%" }}
      className={cn(
        "fixed top-0 left-1/2 z-40 -translate-x-1/2 border border-transparent rounded-full backdrop-blur-xl transition-[background-color,border-color,border-radius] duration-300 ease-in-out md:top-6",
        "max-md:w-full! max-md:bg-linear-to-b max-md:from-background max-md:from-50% max-md:via-background/90 max-md:to-transparent",
        "data-[scrolling=true]:border-white/10 data-[scrolling=true]:bg-card/75 data-[scrolling=true]:md:rounded-full",
        className,
      )}
    >
      <div className="mx-auto flex items-center gap-3 px-4 py-3 md:gap-8 md:p-3">
        <HeaderLogo className="md:size-9" size={44} onNavigate={onNavClick} />

        <ul className="flex flex-1 items-center justify-center gap-3 sm:gap-5 md:gap-12">
          {NAV_LINKS.map((link) => {
            const active = activeHref === link.href;

            return (
              <li key={link.href}>
                <Link
                  href={link.href}
                  onClick={(event) => onNavClick(event, link.href)}
                  className={cn(
                    "group relative text-xs transition-colors sm:text-sm md:text-base",
                    active
                      ? "text-foreground"
                      : "text-muted-foreground hover:text-foreground",
                  )}
                  aria-current={active ? "page" : undefined}
                >
                  <span
                    aria-hidden
                    className={cn(
                      "absolute top-1/2 -left-4 hidden size-2 -translate-y-1/2 rounded-full bg-primary transition-all duration-300 md:block",
                      active ? "scale-100 opacity-100" : "scale-0 opacity-0",
                    )}
                  />
                  <span>{link.label}</span>
                </Link>
              </li>
            );
          })}
        </ul>

        <ThemeToggle />
      </div>
    </nav>
  );
}
