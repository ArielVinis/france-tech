"use client";

import {
  faqItems,
  features,
  galleryRowA,
  galleryRowB,
  integrations,
  pricingPlans,
  storySteps,
  testimonials,
} from "@/data/cortex";
import { SmoothScroll } from "@/features/body/smooth-scroll";
import { CortexHeader } from "@/features/cortex/header";
import { CortexHero } from "@/features/cortex/hero";
import { IntroStatement } from "@/features/cortex/intro-statement";
import { FeatureSection } from "@/features/cortex/feature-section";
import { SentenceToKeeper } from "@/features/cortex/sentence-to-keeper";
import { MadeWithCortex } from "@/features/cortex/made-with-cortex";
import { PublishingIntegrations } from "@/features/cortex/publishing-integrations";
import { Testimonials } from "@/features/cortex/testimonials";
import { Pricing } from "@/features/cortex/pricing";
import { FAQ } from "@/features/cortex/faq";
import { FinalCTA } from "@/features/cortex/final-cta";
import { CortexFooter } from "@/features/cortex/footer";

export function CortexPage() {
  return (
    <SmoothScroll>
      <div className="min-h-svh bg-background text-foreground">
        <CortexHeader />
        <main>
          <CortexHero />
          <IntroStatement />
          <FeatureSection features={features} />
          <SentenceToKeeper steps={storySteps} />
          <MadeWithCortex rowA={galleryRowA} rowB={galleryRowB} />
          <PublishingIntegrations integrations={integrations} />
          <Testimonials testimonials={testimonials} />
          <Pricing plans={pricingPlans} />
          <FAQ items={faqItems} />
          <FinalCTA />
        </main>
        <CortexFooter />
      </div>
    </SmoothScroll>
  );
}
