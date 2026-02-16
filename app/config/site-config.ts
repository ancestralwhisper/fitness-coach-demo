// ============================================================================
// SITE CONFIGURATION — Single source of truth for ALL site content
// ============================================================================
// Edit this file to customize the entire site for a specific client.
// Every section of the site reads from this config — no need to touch
// component code. Each field is commented to explain what it controls.
// ============================================================================

const siteConfig = {
  // ==========================================================================
  // BRAND — Your business identity
  // ==========================================================================
  brand: {
    /** The name shown in the navbar and footer (e.g. "COACH DEMO") */
    name: "COACH DEMO",
    /** Short tagline used in page metadata */
    tagline: "Personal Training",
    /** Full description for SEO / social sharing */
    metaDescription:
      "Transform your body and your life with personalized fitness coaching. 1-on-1 training, online coaching, and group sessions.",
  },

  // ==========================================================================
  // HERO — The big headline section at the top of the page
  // ==========================================================================
  hero: {
    /** Main headline — the first line visitors see. Keep it punchy. */
    headline: "Transform Your Body.",
    /** The accented (green) part of the headline */
    headlineAccent: "Transform Your Life.",
    /** Supporting text below the headline */
    subheadline:
      "Personalized training programs designed to help you crush your goals, build confidence, and become the strongest version of yourself.",
    /** Background image URL (use a wide, high-quality gym/fitness photo) */
    backgroundImage:
      "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?w=1920&q=80",
    /** Primary call-to-action button */
    primaryCta: {
      text: "Take the Quiz",
      href: "/quiz",
    },
    /** Secondary call-to-action button */
    secondaryCta: {
      text: "Book a Free Consult",
      href: "#contact",
    },
  },

  // ==========================================================================
  // ABOUT — The coach's bio section
  // ==========================================================================
  about: {
    /** Section heading — the plain part */
    headingStart: "Meet Your",
    /** Section heading — the accented (green) part */
    headingAccent: "Coach",
    /** Coach photo URL */
    photo:
      "https://images.unsplash.com/photo-1571019614242-c5c5dee9f50b?w=800&q=80",
    /** Alt text for the photo (for accessibility) */
    photoAlt: "Coach portrait",
    /** Bio paragraphs — each string becomes its own paragraph */
    bio: [
      "With over 10 years of experience in personal training, I've helped hundreds of clients transform their bodies and their mindset. My approach combines science-backed programming with real-world coaching to get you results that last.",
      "I believe fitness should be challenging, fun, and sustainable. Whether you're a beginner or an experienced athlete, I'll meet you where you are and push you to where you want to be.",
    ],
    /** Credential badges shown below the bio. `icon` is a lucide-react icon name. */
    credentials: [
      { label: "NASM Certified", icon: "Award" },
      { label: "500+ Clients", icon: "Heart" },
      { label: "10+ Years", icon: "Target" },
    ],
  },

  // ==========================================================================
  // SERVICES — What you offer
  // ==========================================================================
  services: {
    /** Section heading — plain part */
    headingStart: "How We Can",
    /** Section heading — accented part */
    headingAccent: "Work Together",
    /** Subtitle below the heading */
    subtitle: "Choose the training style that fits your lifestyle and goals.",
    /** Each service card. `icon` is a lucide-react icon name. */
    items: [
      {
        icon: "User",
        title: "1-on-1 Training",
        description:
          "Fully personalized in-person sessions tailored to your goals. Clients book through Calendly, pay via Stripe, and follow their program on Trainerize.",
        features: ["Custom workout plan", "Nutrition guidance", "Weekly check-ins"],
        /** IDs of integrations that power this service (shown as badges) */
        integrationIds: ["calendly", "stripe", "trainerize"],
        /** Where the CTA button links. Use "#contact", a Calendly URL, Stripe link, etc. */
        ctaText: "Book a Session",
        ctaHref: "#contact",
      },
      {
        icon: "Wifi",
        title: "Online Coaching",
        description:
          "Train anywhere with a remote coaching program. Get your workouts delivered through Trainerize, check in via the app, and pay securely with Stripe.",
        features: ["App-based workouts", "Video form reviews", "24/7 messaging"],
        integrationIds: ["trainerize", "stripe"],
        ctaText: "Get Started",
        ctaHref: "#contact",
      },
      {
        icon: "Users",
        title: "Group Training",
        description:
          "High-energy small group sessions that combine community with results. Book your spot through Calendly and push harder together.",
        features: ["Max 8 per group", "All fitness levels", "Flexible schedule"],
        integrationIds: ["calendly"],
        ctaText: "Join a Group",
        ctaHref: "#contact",
      },
    ],
  },

  // ==========================================================================
  // TESTIMONIALS — Client success stories
  // ==========================================================================
  testimonials: {
    /** Section heading — plain part */
    headingStart: "Real People,",
    /** Section heading — accented part */
    headingAccent: "Real Results",
    /** Subtitle */
    subtitle:
      "Don't just take my word for it — hear from clients who transformed their lives.",
    /** Each testimonial card */
    items: [
      {
        name: "Sarah M.",
        result: "Lost 30 lbs in 4 months",
        quote:
          "I never thought I could enjoy working out, but Coach made every session fun and challenging. The results speak for themselves — I feel like a completely different person.",
        rating: 5,
      },
      {
        name: "Marcus T.",
        result: "Gained 15 lbs of muscle",
        quote:
          "The online coaching program is incredible. Having a plan to follow and someone holding me accountable changed everything. Best investment I've ever made in myself.",
        rating: 5,
      },
      {
        name: "Jessica R.",
        result: "Ran her first marathon",
        quote:
          "From barely running a mile to crossing the finish line of a marathon. Coach believed in me when I didn't believe in myself. Forever grateful.",
        rating: 5,
      },
    ],
  },

  // ==========================================================================
  // CONTACT — How clients reach out
  // ==========================================================================
  contact: {
    /** Section heading — plain part */
    headingStart: "Ready to",
    /** Section heading — accented part */
    headingAccent: "Get Started?",
    /** Subtitle */
    subtitle: "Book a free consultation and let's build a plan that works for you.",
    /**
     * Contact mode:
     * - "form"  → shows a native contact form (Name, Email, Message)
     * - "embed" → shows an inline scheduling widget (Calendly/Acuity/Cal.com)
     *
     * When set to "embed", the site will look for the first enabled scheduling
     * integration that has an embedCode or url, and render it inline.
     */
    mode: "form" as "form" | "embed",
    /** Form field configuration (only used when mode is "form") */
    formFields: {
      namePlaceholder: "Your name",
      emailPlaceholder: "you@email.com",
      messagePlaceholder: "Tell me about your goals...",
      submitText: "Send Message",
    },
  },

  // ==========================================================================
  // QUIZ — Fitness personality quiz settings
  // ==========================================================================
  quiz: {
    /** Set to false to hide the quiz link from the navbar and disable the page */
    enabled: true,
    /** Page heading */
    pageHeadingStart: "What's Your",
    pageHeadingAccent: "Fitness Personality?",
    pageSubtitle:
      "Answer 6 quick questions to discover your training style and get a personalized program recommendation.",
    /** What the CTA button says on the quiz results page */
    resultCtaText: "Book a Free Consult",
    /** Where the CTA button links (e.g. "/#contact", a Calendly URL, etc.) */
    resultCtaHref: "/#contact",
    /** Metadata for SEO */
    metaTitle: "Fitness Personality Quiz | Coach Demo",
    metaDescription:
      "Discover your fitness personality and get a training program recommendation tailored to your style.",
  },

  // ==========================================================================
  // FOOTER — Bottom of every page
  // ==========================================================================
  footer: {
    /** Copyright text. Use {year} as a placeholder for the current year. */
    copyright: "{year} Coach Demo. All rights reserved.",
  },
} as const;

export type SiteConfig = typeof siteConfig;
export default siteConfig;
