import {
  About,
  Contact,
  Hero,
  SiteHeader,
  SmoothScroll,
  Solutions,
} from "@/features";

export default function HomePage() {
  return (
    <SmoothScroll>
      <SiteHeader />
      <main>
        <Hero />
        <Solutions />
        <About />
        <Contact />
      </main>
    </SmoothScroll>
  );
}
