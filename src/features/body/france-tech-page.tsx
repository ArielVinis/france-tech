"use client";

import { About } from "@/features/body/about";
import { Contact } from "@/features/body/contact";
import { Essence } from "@/features/body/essence";
import { Hero } from "@/features/body/hero";
import { SiteFooter } from "@/features/body/footer";
import { SiteHeader } from "@/features/body/site-header";
import { SmoothScroll } from "@/features/body/smooth-scroll";
import { Solutions } from "@/features/body/solutions";
import { Technology } from "@/features/body/technology";

export function FranceTechPage() {
  return (
    <div className="dark min-h-svh bg-background text-foreground">
      <SmoothScroll>
        <SiteHeader />
        <main>
          <Hero />
          <Essence />
          <Solutions />
          <Technology />
          <About />
          <Contact />
        </main>
        <SiteFooter />
      </SmoothScroll>
    </div>
  );
}
