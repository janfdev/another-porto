export interface Project {
  slug: string;
  title: string;
  category: "UI/UX" | "Branding" | "Social" | "Event" | "E-commerce";
  role: string;
  year: string;
  tagline: string;
  client: string;
  platform: string;
  coverImage: string;
  images: string[];
  summary: string;
}

export const PROJECTS: Project[] = [
  {
    slug: "cekat-ai-website",
    title: "Cekat.AI Website",
    category: "UI/UX",
    role: "UI/UX Design",
    year: "2025",
    tagline: "A friendlier front door for AI customer service.",
    client: "Cekat.AI",
    platform: "Website · B2B SaaS",
    coverImage: "/assets/work/cekat-ai/cover.jpg",
    images: [
      "/assets/work/cekat-ai/homepage-full.jpg",
      "/assets/work/cekat-ai/features-full.jpg",
      "/assets/work/cekat-ai/pricing.jpg",
      "/assets/work/cekat-ai/laptop-mockup.jpg"
    ],
    summary: "Visitors could not tell quickly how Cekat.AI works or why their business needs it. The revamp rebuilt the website around a clear path to a free trial, casual copy, live demos, and industry use cases."
  },
  {
    slug: "furrr-fun",
    title: "Furrr Fun",
    category: "Branding",
    role: "Brand Identity",
    year: "2025",
    tagline: "A brand that grows from a child's doodles.",
    client: "Furrr Fun",
    platform: "Kids Fashion Brand",
    coverImage: "/assets/work/furrr-fun/cover.jpg",
    images: [
      "/assets/work/furrr-fun/logo-variations.jpg",
      "/assets/work/furrr-fun/mockup-1.jpg",
      "/assets/work/furrr-fun/packaging.jpg",
      "/assets/work/furrr-fun/sticker.jpg"
    ],
    summary: "Furrr Fun makes children activewear printed with doodles drawn by a five-year-old. The identity needed to feel as free and playful as those drawings while staying versatile."
  },
  {
    slug: "cekat-innov-2025",
    title: "Cekat Innov 2025",
    category: "Event",
    role: "Visual Identity & Event Collateral",
    year: "2025",
    tagline: "Annual innovation summit identity and stage visuals.",
    client: "Cekat.AI",
    platform: "Tech Conference & Summit",
    coverImage: "/assets/work/cekat-innov-2025/cover.jpg",
    images: [
      "/assets/work/cekat-innov-2025/01.jpg",
      "/assets/work/cekat-innov-2025/02.jpg",
      "/assets/work/cekat-innov-2025/03.jpg"
    ],
    summary: "Full event branding suite for Cekat Innov 2025, from keynote slide decks, stage banners, lanyard passes, to social media live-updates."
  },
  {
    slug: "ocistok-mobile-apps",
    title: "Ocistok Mobile Apps",
    category: "UI/UX",
    role: "Lead UI/UX Designer",
    year: "2024",
    tagline: "Import B2B marketplace simplified for Southeast Asian merchants.",
    client: "PT. Ocommerce Capital Indonesia",
    platform: "Mobile Application (iOS / Android)",
    coverImage: "/assets/work/ocistok-mobile-apps/cover.jpg",
    images: [
      "/assets/work/ocistok-mobile-apps/01.jpg",
      "/assets/work/ocistok-mobile-apps/02.jpg",
      "/assets/work/ocistok-mobile-apps/03.jpg"
    ],
    summary: "Redesigned user flows, category discovery, cart checkout, and shipment tracking, reducing search friction and boosting checkout completion."
  },
  {
    slug: "subaru-indonesia",
    title: "Subaru Indonesia",
    category: "Social",
    role: "Graphic Designer",
    year: "2023",
    tagline: "High-octane social campaigns and digital showroom assets.",
    client: "PT. Plaza Auto Mega",
    platform: "Automotive Social Media & Marketplace",
    coverImage: "/assets/work/subaru-indonesia/cover.jpg",
    images: [
      "/assets/work/subaru-indonesia/02.jpg",
      "/assets/work/subaru-indonesia/03.jpg",
      "/assets/work/subaru-indonesia/05.jpg"
    ],
    summary: "Executed social campaigns aligned with Subaru global motorsport heritage, creating engaging reels, carousel stories, and official marketplace banners."
  },
  {
    slug: "realfood-kiddos",
    title: "Realfood Kiddos",
    category: "Branding",
    role: "Creative Packaging & Brand Identity",
    year: "2022",
    tagline: "Wholesome bird nest wellness formulated for growing children.",
    client: "RealCo Indonesia",
    platform: "FMCG Health & Wellness",
    coverImage: "/assets/work/realfood-kiddos/cover.jpg",
    images: [
      "/assets/work/realfood-kiddos/01.jpg",
      "/assets/work/realfood-kiddos/02.jpg",
      "/assets/work/realfood-kiddos/03.jpg"
    ],
    summary: "Illustrated packaging characters and friendly visual narratives that appeal directly to children while instilling nutritional confidence in parents."
  },
  {
    slug: "realfood-marketplace",
    title: "Realfood E-Commerce",
    category: "E-commerce",
    role: "Marketplace Store Designer",
    year: "2023",
    tagline: "Premium digital storefronts across Shopee, Tokopedia, and TikTok Shop.",
    client: "RealCo Indonesia",
    platform: "Official E-Commerce Storefront",
    coverImage: "/assets/work/realfood-marketplace/cover.jpg",
    images: [
      "/assets/work/realfood-marketplace/01.jpg",
      "/assets/work/realfood-marketplace/02.jpg",
      "/assets/work/realfood-marketplace/03.jpg"
    ],
    summary: "Engineered high-converting seasonal campaign headers, bundle promotions, and product detail infographics maintaining luxury medical-wellness standards."
  },
  {
    slug: "grid-network",
    title: "Grid Network Events",
    category: "Event",
    role: "Activation Graphic Designer",
    year: "2021",
    tagline: "Media activation and festival branding for Kompas Gramedia Group.",
    client: "Kompas Gramedia",
    platform: "Media Festival & Virtual Live Stream",
    coverImage: "/assets/work/grid-network/cover.jpg",
    images: [
      "/assets/work/grid-network/02.jpg",
      "/assets/work/grid-network/03.jpg",
      "/assets/work/grid-network/04.jpg"
    ],
    summary: "Developed multi-platform identity kits across Bobo, Hai, and National Geographic event activations, producing stage backdrops and live motion bumpers."
  }
];

export const EXPERIENCES = [
  {
    company: "Cekat.AI",
    role: "Creative Designer",
    period: "Jan 2025 - Present",
    division: "Marketing Communications · Tangerang",
    description: "Designing the visual side of marketing: pitch decks, company profiles, omni-channel campaigns, brand guidelines, and high-converting website revamps.",
    bullets: [
      "Develop company profiles, business proposals, and sales decks for enterprise pitching.",
      "Translate B2B SaaS value into clear visual narratives across presentations and campaigns.",
      "Lead website visual communication and design system updates.",
      "Collaborate with product and growth teams on customer acquisition."
    ]
  },
  {
    company: "Ocistok",
    role: "UI/UX & Graphic Designer",
    period: "Aug 2023 - Oct 2024",
    division: "Business Development · West Jakarta",
    description: "Spearheaded user experience design for Ocistok cross-border mobile app and internal Order Management System (OMS) dashboard.",
    bullets: [
      "Designed mobile app interfaces improving search-to-cart journey and checkout completion.",
      "Built multi-platform design systems ensuring consistent typography, components, and layout tokens.",
      "Conducted user research including field studies on merchant supply chain operations in China.",
      "Created promotional landing pages and marketing campaigns."
    ]
  },
  {
    company: "Subaru Indonesia",
    role: "Graphic Designer",
    period: "Apr 2023 - May 2023",
    division: "Marketing Communications · South Tangerang",
    description: "Conceptualized and crafted digital advertising campaigns, social media carousels, and showroom marketplace key visuals aligned with Subaru global motorsport standards.",
    bullets: [
      "Developed key visuals for social media channels and official e-commerce showrooms.",
      "Maintained strict global brand guidelines across digital advertising banners."
    ]
  },
  {
    company: "Realfood (RealCo)",
    role: "Creative Designer",
    period: "Feb 2022 - Feb 2023",
    division: "Creative Team · West Jakarta",
    description: "Created high-converting digital storefronts, product packaging illustrations, and advertising assets for Indonesia top bird-nest health brand.",
    bullets: [
      "Designed and maintained official marketplace visuals across major e-commerce platforms.",
      "Collaborated with motion designers to generate animated story ads.",
      "Developed character illustration assets for Realfood Kiddos brand line."
    ]
  },
  {
    company: "Grid Network (KG Media)",
    role: "Graphic Designer",
    period: "Feb 2019 - Feb 2022",
    division: "Activation Department · West Jakarta",
    description: "Managed full-cycle creative design for offline and online events across Kompas Gramedia flagship media properties.",
    bullets: [
      "Designed event key visuals, stage backdrops, print collateral, and vendor-ready production files.",
      "Coordinated directly with project managers, procurement, and vendors."
    ]
  }
];

export const TESTIMONIALS = [
  {
    quote: "He executes briefs properly and ships at volume, like 25 industry decks in one sprint, while keeping the brand coherent.",
    name: "Kent Sutjipto",
    title: "Growth & GTM Leader, Cekat.AI",
    avatar: "/assets/people/kent-sutjipto.jpg"
  },
  {
    quote: "He turns briefs into design solutions beyond expectations, with a clear strategy the whole team can follow.",
    name: "Sri Ayu Nathalia",
    title: "Marketing Specialist, Cekat.AI",
    avatar: "/assets/people/sri-ayu.jpg"
  },
  {
    quote: "Remarkably fast and creative. He takes full ownership and always delivers polished, top-tier work.",
    name: "Rendra Fatimah",
    title: "Content Generalist, Cekat.AI",
    avatar: "/assets/people/rendra.jpg"
  },
  {
    quote: "He designs beyond aesthetics: visuals that look great and are built to drive engagement and business sales.",
    name: "Christoforus",
    title: "UI/UX Lead Colleague",
    avatar: "/assets/people/christoforus.jpg"
  }
];
