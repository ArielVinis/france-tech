import type { Metadata } from "next";

import {
  About,
  Contact,
  Hero,
  SiteHeader,
  SmoothScroll,
  Solutions,
} from "@/features";

export const metadata: Metadata = {
  title: "France Tech",
  description:
    "Tecnologia que impulsiona o futuro dos negócios. Soluções de software sob medida para empresas que buscam inovação, performance e crescimento sustentável.",
};

export default function HomePage() {
  return (
    <SmoothScroll>
      <SiteHeader />
      <main className="pb-20 md:pb-0">
        <Hero />
        <Solutions />
        <About />
        <Contact />
      </main>
    </SmoothScroll>
  );
}
