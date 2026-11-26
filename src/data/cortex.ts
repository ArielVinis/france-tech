export type NavLink = {
  label: string;
  href: string;
};

export type HeroImage = {
  id: string;
  alt: string;
  className: string;
  opacity?: number;
  rotate?: number;
  /** Profundidade de parallax (maior = move mais). */
  depth?: number;
  patternSize?: number;
};

export type Feature = {
  number: string;
  title: string;
  description: string;
};

export type SideCard = {
  side: "left" | "right";
  title: string;
  subtitle?: string;
  variant: "pass" | "reject" | "info";
};

export type StoryStep = {
  id: string;
  number: string;
  title: string;
  description: string;
  screen: "prompt" | "generate" | "review" | "library";
  takeLabel?: string;
  phoneBadge?: { title: string; subtitle: string };
  sideCards?: SideCard[];
};

export type GalleryImage = {
  id: string;
  alt: string;
  caption: string;
  prompt: string;
};

export type Integration = {
  name: string;
  subtitle: string;
};

export type Testimonial = {
  quote: string;
  name: string;
  role: string;
};

export type PricingPlan = {
  id: "free" | "pro" | "studio";
  name: string;
  description: string;
  monthlyPrice: number;
  yearlyPrice: number;
  billingNote: string;
  features: string[];
  cta: string;
  highlighted?: boolean;
  badge?: string;
};

export type FaqItem = {
  question: string;
  answer: string;
};

export const navLinks: NavLink[] = [
  { label: "Product", href: "#product" },
  { label: "Pricing", href: "#pricing" },
];

export const heroImages: HeroImage[] = [
  {
    id: "hero-1",
    alt: "Mountain ridge",
    className: "left-[4%] top-[12%] h-28 w-28 md:h-36 md:w-36",
    opacity: 0.85,
    rotate: -8,
    depth: 48,
    patternSize: 14,
  },
  {
    id: "hero-2",
    alt: "Forest path",
    className: "right-[6%] top-[10%] h-24 w-24 md:h-32 md:w-32",
    opacity: 0.7,
    rotate: 6,
    depth: 36,
    patternSize: 11,
  },
  {
    id: "hero-3",
    alt: "Architecture",
    className: "left-[8%] bottom-[28%] h-20 w-24 md:h-28 md:w-32",
    opacity: 0.55,
    rotate: 4,
    depth: 56,
    patternSize: 10,
  },
  {
    id: "hero-4",
    alt: "Portrait",
    className: "right-[10%] bottom-[32%] h-24 w-20 md:h-36 md:w-28",
    opacity: 0.75,
    rotate: -5,
    depth: 42,
    patternSize: 13,
  },
  {
    id: "hero-5",
    alt: "Fog hills",
    className: "left-[18%] top-[38%] hidden h-16 w-20 lg:block",
    opacity: 0.4,
    rotate: -3,
    depth: 28,
    patternSize: 9,
  },
  {
    id: "hero-6",
    alt: "Valley",
    className: "right-[16%] top-[42%] hidden h-20 w-20 lg:block",
    opacity: 0.45,
    rotate: 8,
    depth: 64,
    patternSize: 12,
  },
  {
    id: "hero-7",
    alt: "Beach",
    className: "left-[2%] top-[55%] hidden h-16 w-24 md:block",
    opacity: 0.35,
    rotate: -12,
    depth: 52,
    patternSize: 10,
  },
  {
    id: "hero-8",
    alt: "Night mountains",
    className: "right-[3%] top-[58%] hidden h-20 w-16 md:block",
    opacity: 0.5,
    rotate: 10,
    depth: 40,
    patternSize: 11,
  },
];

export const heroFilm = {
  alt: "Cinematic landscape with a vintage van",
  caption: "Watch the film — generated with Cortex",
};

export const features: Feature[] = [
  {
    number: "01",
    title: "Trained on light",
    description:
      "Tuned for the physical stuff — skin, fabric, lens falloff, grain. Frames behave like they came out of a camera, not a model.",
  },
  {
    number: "02",
    title: "Reviewed by people",
    description:
      "Every render passes a human review before it reaches you. Weird hands and melted text never make it to your library.",
  },
  {
    number: "03",
    title: "Photo and film",
    description:
      "Still up to 4K and motion clips up to sixty seconds, from the same prompt. One idea, every format you post in.",
  },
  {
    number: "04",
    title: "Phone-first",
    description:
      "Describe, generate, keep. The whole loop runs on your phone and lands straight in your camera roll at full resolution.",
  },
];

export const storySteps: StoryStep[] = [
  {
    id: "describe",
    number: "01",
    title: "Describe the shot",
    description:
      "Type what you see in your head. Lens, light, mood — Cortex makes sheets of options from a single sentence.",
    screen: "prompt",
    takeLabel: "Draft 1 of 4",
    sideCards: [
      {
        side: "right",
        title: "Prompt ready",
        subtitle: "Lens · light · mood",
        variant: "info",
      },
      {
        side: "right",
        title: "Waiting on generate",
        subtitle: "One sentence in",
        variant: "info",
      },
    ],
  },
  {
    id: "generate",
    number: "02",
    title: "Generate takes",
    description:
      "Cortex renders a set of takes in seconds, each one a different read on your prompt. Pick a direction, push it further.",
    screen: "generate",
    takeLabel: "Take 2 of 4",
    phoneBadge: {
      title: "4 takes ready",
      subtitle: "Pick a direction",
    },
    sideCards: [
      {
        side: "right",
        title: "Sheet of takes",
        subtitle: "Rendered in seconds",
        variant: "info",
      },
      {
        side: "right",
        title: "Push further",
        subtitle: "Same prompt, new read",
        variant: "info",
      },
    ],
  },
  {
    id: "review",
    number: "03",
    title: "The review pass",
    description:
      "Every take is inspected at full zoom before it reaches you. If a frame would not survive a close look, you never see it.",
    screen: "review",
    takeLabel: "Take 3 of 4",
    phoneBadge: {
      title: "Passed review",
      subtitle: "Sharp at 100% · No artifacts",
    },
    sideCards: [
      {
        side: "right",
        title: "Passed review",
        subtitle: "Sharp at 100% · No artifacts",
        variant: "pass",
      },
      {
        side: "right",
        title: "2 takes rejected",
        subtitle: undefined,
        variant: "reject",
      },
    ],
  },
  {
    id: "library",
    number: "04",
    title: "Straight to camera roll",
    description:
      "Approved frames land in your library at full resolution. No exports, no watermarks on paid plans, nothing to clean up.",
    screen: "library",
    takeLabel: "Take 4 of 4",
    phoneBadge: {
      title: "Saved",
      subtitle: "Full resolution · No mark",
    },
    sideCards: [
      {
        side: "right",
        title: "In your library",
        subtitle: "Camera roll ready",
        variant: "pass",
      },
      {
        side: "right",
        title: "Nothing to clean up",
        subtitle: "No exports needed",
        variant: "info",
      },
    ],
  },
];

export const galleryRowA: GalleryImage[] = [
  {
    id: "g-a1",
    alt: "Sunflowers",
    caption: "Sunflower field, late afternoon",
    prompt: "35mm, warm sidelight, shallow DOF on sunflower heads",
  },
  {
    id: "g-a2",
    alt: "City street",
    caption: "Rain-slick street at twilight",
    prompt: "Anamorphic, neon bounce, wet asphalt reflections",
  },
  {
    id: "g-a3",
    alt: "Fountain plaza",
    caption: "Fountain in soft morning haze",
    prompt: "850mm compression, mist, cool highlights",
  },
  {
    id: "g-a4",
    alt: "Mountain lake",
    caption: "Alpine lake before sunrise",
    prompt: "Wide 24mm, long exposure water, pastel sky",
  },
  {
    id: "g-a5",
    alt: "Beach",
    caption: "Empty beach, hard noon sun",
    prompt: "Kodachrome look, harsh shadows, turquoise water",
  },
  {
    id: "g-a6",
    alt: "Bicycle",
    caption: "Bicycle against a blank wall",
    prompt: "Square crop, soft fill, graphic negative space",
  },
];

export const galleryRowB: GalleryImage[] = [
  {
    id: "g-b1",
    alt: "Dog portrait",
    caption: "Dog in golden hour grass",
    prompt: "85mm portrait, rim light, shallow bokeh",
  },
  {
    id: "g-b2",
    alt: "Mountains",
    caption: "High alpine ridge",
    prompt: "Telephoto layers, cold blue distance haze",
  },
  {
    id: "g-b3",
    alt: "Night sky",
    caption: "Milky Way over peaks",
    prompt: "Astro stack, foreground torch light, 14mm",
  },
  {
    id: "g-b4",
    alt: "Lighthouse coast",
    caption: "Coastal lighthouse at dusk",
    prompt: "Film grain, sodium lamp, wind-blown grass",
  },
  {
    id: "g-b5",
    alt: "Architecture",
    caption: "Concrete geometry",
    prompt: "Architectural, hard shadow lines, monochrome",
  },
  {
    id: "g-b6",
    alt: "Forest",
    caption: "Deep forest path",
    prompt: "Diffused canopy light, moss greens, 50mm",
  },
];

export const integrations: Integration[] = [
  { name: "X", subtitle: "Auto-post" },
  { name: "Figma", subtitle: "Into your frames" },
  { name: "Slack", subtitle: "Share to channels" },
  { name: "Dribbble", subtitle: "Portfolio shots" },
  { name: "Instagram", subtitle: "Reels-ready" },
  { name: "YouTube", subtitle: "Straight to Shorts" },
  { name: "LinkedIn", subtitle: "Native posts" },
  { name: "Webhooks", subtitle: "Anything custom" },
  { name: "Lightroom", subtitle: "Edit roundup" },
  { name: "Premiere", subtitle: "Timeline-ready" },
  { name: "Final Cut", subtitle: "XML export" },
  { name: "Framer", subtitle: "Embed live" },
];

export const testimonials: Testimonial[] = [
  {
    quote:
      "I stopped explaining that it is AI. People just ask what camera I shoot with, and honestly I let them wonder.",
    name: "Lena Ortiz",
    role: "Portrait photographer",
  },
  {
    quote:
      "The review pass is the whole product for me. I post what Cortex approves and it has never once embarrassed me.",
    name: "Theo Marchetti",
    role: "Creator",
  },
  {
    quote:
      "Storyboards used to take me a week of stills pulls. Now I generate the mood film before the kickoff call.",
    name: "Amara Diallo",
    role: "Art director",
  },
  {
    quote:
      "It does light the way light actually behaves. Falloff, bounce, color temperature. That is the entire game.",
    name: "Jonas Lindqvist",
    role: "Director of photography",
  },
  {
    quote:
      "I cut a full mood film for a client pitch on the train ride to the meeting. They asked who shot it.",
    name: "Priya Raman",
    role: "Brand designer",
  },
  {
    quote:
      "My camera roll finally looks like the inside of my head. Fewer frames than other apps give you, but every one lands.",
    name: "Marcus Cole",
    role: "Stylist",
  },
];

export const pricingPlans: PricingPlan[] = [
  {
    id: "free",
    name: "Free",
    description: "Try the engine, keep your first frames.",
    monthlyPrice: 0,
    yearlyPrice: 0,
    billingNote: "free forever",
    features: [
      "20 generations per month",
      "1080p stills",
      "10-second clips",
      "Standard review queue",
      "Cortex mark on exports",
    ],
    cta: "Get the app",
  },
  {
    id: "pro",
    name: "Pro",
    description: "For creators who post every day.",
    monthlyPrice: 14,
    yearlyPrice: 11,
    billingNote: "billed monthly",
    features: [
      "1,000 generations per month",
      "4K stills",
      "30-second clips",
      "Priority review queue",
      "Clean exports, no mark",
      "Full prompt history",
    ],
    cta: "Start with Pro",
    highlighted: true,
    badge: "Most popular",
  },
  {
    id: "studio",
    name: "Studio",
    description: "For teams and heavy production use.",
    monthlyPrice: 32,
    yearlyPrice: 26,
    billingNote: "billed monthly",
    features: [
      "Everything in Pro",
      "60-second clips",
      "Batch generation",
      "5 linked devices",
      "Early access to new looks",
    ],
    cta: "Start with Studio",
  },
];

export const faqItems: FaqItem[] = [
  {
    question: "What is Cortex?",
    answer:
      "Cortex is a mobile app that generates hyperrealistic photos and video from a written description. It runs the full loop on your phone: describe a shot, get a set of takes, and keep the frames that pass review.",
  },
  {
    question: "What does the review pass actually do?",
    answer:
      "Every render is inspected by people at full zoom before it reaches your library. Frames with broken anatomy, melted text, or lighting that would not hold up in a close look are discarded. You only see the keepers.",
  },
  {
    question: "Do I own what I generate?",
    answer:
      "Yes. On paid plans you own the frames you keep, with clean exports and no Cortex mark. Free-plan exports include a small mark. Commercial use is allowed on Pro and Studio.",
  },
  {
    question: "Can it generate real people?",
    answer:
      "Cortex is tuned for invented faces and scenes, not likenesses of real private individuals. Public figures and copyrighted characters are restricted. Portrait work should use your own references where the product allows.",
  },
  {
    question: "Which phones does it run on?",
    answer:
      "Cortex runs on current iOS and Android phones. Generation and review happen in the cloud; your device handles prompting, browsing takes, and saving to the camera roll at full resolution.",
  },
  {
    question: "How long can the videos be?",
    answer:
      "Free plans include clips up to 10 seconds. Pro goes to 30 seconds. Studio unlocks clips up to 60 seconds from the same prompt workflow as stills.",
  },
  {
    question: "Can I cancel anytime?",
    answer:
      "Yes. Cancel in the app at any time. Your plan stays active through the end of the billing period, and you keep the frames already in your library.",
  },
];

export const finalCtaImages = [
  { id: "cta-1", rotate: -12 },
  { id: "cta-2", rotate: -6 },
  { id: "cta-3", rotate: 0 },
  { id: "cta-4", rotate: 6 },
  { id: "cta-5", rotate: 12 },
];
