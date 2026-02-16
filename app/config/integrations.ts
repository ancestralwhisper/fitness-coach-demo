// ============================================================================
// INTEGRATIONS REGISTRY
// ============================================================================
// This file defines every third-party tool a fitness coach might use.
// Set `enabled: true` on any integration to activate it across the site.
// Fill in `url` and/or `embedCode` with the client's actual links.
// ============================================================================

export type IntegrationCategory =
  | "scheduling"
  | "coaching"
  | "payments"
  | "forms"
  | "email"
  | "video"
  | "communication"
  | "nutrition"
  | "social";

export type IntegrationType = "embed" | "link";

export interface Integration {
  /** Unique identifier — referenced by services and other config */
  id: string;
  /** Display name shown on the site */
  name: string;
  /** Which category this tool belongs to */
  category: IntegrationCategory;
  /** "embed" = can be rendered inline (like Calendly widget); "link" = opens in new tab */
  type: IntegrationType;
  /** The URL to link to (e.g. Calendly booking page, Stripe checkout, social profile) */
  url: string;
  /** HTML embed code for inline widgets (Calendly, Typeform, etc.) — only used when type is "embed" */
  embedCode: string;
  /** Set to true to activate this integration across the site */
  enabled: boolean;
  /** Short description + setup instructions for the person configuring the site */
  description: string;
  /** Lucide icon name to display (e.g. "Calendar", "CreditCard") */
  icon: string;
}

// ============================================================================
// INTEGRATION DEFINITIONS
// ============================================================================

const integrations: Integration[] = [
  // ---------------------------------------------------------------------------
  // SCHEDULING — Where clients book sessions
  // ---------------------------------------------------------------------------
  {
    id: "calendly",
    name: "Calendly",
    category: "scheduling",
    type: "embed",
    url: "https://calendly.com/your-link",
    embedCode: "",
    enabled: true,
    description:
      "Calendly lets clients book sessions directly on your site. Paste your Calendly link above, and optionally paste the embed snippet into embedCode to show an inline widget in the Contact section.",
    icon: "Calendar",
  },
  {
    id: "acuity",
    name: "Acuity Scheduling",
    category: "scheduling",
    type: "embed",
    url: "",
    embedCode: "",
    enabled: false,
    description:
      "Acuity Scheduling (by Squarespace) — paste your booking page URL and optional embed code.",
    icon: "Calendar",
  },
  {
    id: "calcom",
    name: "Cal.com",
    category: "scheduling",
    type: "embed",
    url: "",
    embedCode: "",
    enabled: false,
    description:
      "Cal.com is an open-source scheduling tool. Paste your Cal.com link and optional embed code.",
    icon: "Calendar",
  },

  // ---------------------------------------------------------------------------
  // COACHING PLATFORMS — Where clients follow their programs
  // ---------------------------------------------------------------------------
  {
    id: "trainerize",
    name: "Trainerize",
    category: "coaching",
    type: "link",
    url: "https://trainerize.com",
    embedCode: "",
    enabled: true,
    description:
      "Trainerize delivers workout programs to clients via app. Paste the link where clients sign up or log in.",
    icon: "Dumbbell",
  },
  {
    id: "truecoach",
    name: "TrueCoach",
    category: "coaching",
    type: "link",
    url: "",
    embedCode: "",
    enabled: false,
    description:
      "TrueCoach is a coaching platform for delivering programs and tracking client progress.",
    icon: "Dumbbell",
  },
  {
    id: "mypthub",
    name: "My PT Hub",
    category: "coaching",
    type: "link",
    url: "",
    embedCode: "",
    enabled: false,
    description:
      "My PT Hub is an all-in-one personal training software for workout and nutrition plans.",
    icon: "Dumbbell",
  },

  // ---------------------------------------------------------------------------
  // PAYMENTS — How clients pay
  // ---------------------------------------------------------------------------
  {
    id: "stripe",
    name: "Stripe",
    category: "payments",
    type: "link",
    url: "https://buy.stripe.com/your-link",
    embedCode: "",
    enabled: true,
    description:
      "Stripe handles payments. Paste a Stripe Payment Link or checkout URL so clients can pay directly.",
    icon: "CreditCard",
  },
  {
    id: "square",
    name: "Square",
    category: "payments",
    type: "link",
    url: "",
    embedCode: "",
    enabled: false,
    description: "Square payment processing. Paste your Square checkout or invoice link.",
    icon: "CreditCard",
  },
  {
    id: "paypal",
    name: "PayPal",
    category: "payments",
    type: "link",
    url: "",
    embedCode: "",
    enabled: false,
    description: "PayPal for accepting payments. Paste your PayPal.me or checkout link.",
    icon: "CreditCard",
  },

  // ---------------------------------------------------------------------------
  // FORMS / INTAKE — Gather info from new clients
  // ---------------------------------------------------------------------------
  {
    id: "typeform",
    name: "Typeform",
    category: "forms",
    type: "embed",
    url: "",
    embedCode: "",
    enabled: false,
    description:
      "Typeform for intake forms or surveys. Paste the share URL and optional embed code.",
    icon: "ClipboardList",
  },
  {
    id: "jotform",
    name: "JotForm",
    category: "forms",
    type: "embed",
    url: "",
    embedCode: "",
    enabled: false,
    description: "JotForm for custom intake forms. Paste your form URL and optional embed code.",
    icon: "ClipboardList",
  },
  {
    id: "tally",
    name: "Tally",
    category: "forms",
    type: "embed",
    url: "",
    embedCode: "",
    enabled: false,
    description: "Tally is a free form builder. Paste the share link and optional embed snippet.",
    icon: "ClipboardList",
  },

  // ---------------------------------------------------------------------------
  // EMAIL MARKETING — Stay in touch with clients
  // ---------------------------------------------------------------------------
  {
    id: "mailchimp",
    name: "Mailchimp",
    category: "email",
    type: "link",
    url: "",
    embedCode: "",
    enabled: false,
    description: "Mailchimp for email newsletters. Paste your signup form URL or embed code.",
    icon: "Mail",
  },
  {
    id: "convertkit",
    name: "ConvertKit",
    category: "email",
    type: "link",
    url: "",
    embedCode: "",
    enabled: false,
    description: "ConvertKit (now Kit) for creator email marketing. Paste your signup form link.",
    icon: "Mail",
  },
  {
    id: "beehiiv",
    name: "Beehiiv",
    category: "email",
    type: "link",
    url: "",
    embedCode: "",
    enabled: false,
    description: "Beehiiv newsletter platform. Paste your newsletter signup link.",
    icon: "Mail",
  },

  // ---------------------------------------------------------------------------
  // VIDEO — Virtual training sessions
  // ---------------------------------------------------------------------------
  {
    id: "zoom",
    name: "Zoom",
    category: "video",
    type: "link",
    url: "",
    embedCode: "",
    enabled: false,
    description: "Zoom for virtual training sessions. Paste your personal meeting link.",
    icon: "Video",
  },
  {
    id: "googlemeet",
    name: "Google Meet",
    category: "video",
    type: "link",
    url: "",
    embedCode: "",
    enabled: false,
    description: "Google Meet for video coaching sessions. Paste your meeting link.",
    icon: "Video",
  },

  // ---------------------------------------------------------------------------
  // COMMUNICATION — Direct messaging with clients
  // ---------------------------------------------------------------------------
  {
    id: "whatsapp",
    name: "WhatsApp",
    category: "communication",
    type: "link",
    url: "",
    embedCode: "",
    enabled: false,
    description:
      'WhatsApp for client communication. Paste your wa.me link (e.g. "https://wa.me/1234567890").',
    icon: "MessageCircle",
  },
  {
    id: "voxer",
    name: "Voxer",
    category: "communication",
    type: "link",
    url: "",
    embedCode: "",
    enabled: false,
    description: "Voxer for voice-message-based coaching check-ins.",
    icon: "MessageCircle",
  },
  {
    id: "telegram",
    name: "Telegram",
    category: "communication",
    type: "link",
    url: "",
    embedCode: "",
    enabled: false,
    description: "Telegram for client messaging. Paste your t.me link.",
    icon: "MessageCircle",
  },

  // ---------------------------------------------------------------------------
  // NUTRITION — Meal tracking and macros
  // ---------------------------------------------------------------------------
  {
    id: "myfitnesspal",
    name: "MyFitnessPal",
    category: "nutrition",
    type: "link",
    url: "",
    embedCode: "",
    enabled: false,
    description: "MyFitnessPal for calorie and macro tracking with clients.",
    icon: "Apple",
  },
  {
    id: "macrofactor",
    name: "MacroFactor",
    category: "nutrition",
    type: "link",
    url: "",
    embedCode: "",
    enabled: false,
    description: "MacroFactor for adaptive nutrition coaching.",
    icon: "Apple",
  },
  {
    id: "carbon",
    name: "Carbon Diet Coach",
    category: "nutrition",
    type: "link",
    url: "",
    embedCode: "",
    enabled: false,
    description: "Carbon Diet Coach for AI-powered nutrition guidance.",
    icon: "Apple",
  },

  // ---------------------------------------------------------------------------
  // SOCIAL — Coach's social media profiles (shown in footer)
  // ---------------------------------------------------------------------------
  {
    id: "instagram",
    name: "Instagram",
    category: "social",
    type: "link",
    url: "https://instagram.com",
    embedCode: "",
    enabled: true,
    description: "Instagram profile link. Paste your full Instagram URL.",
    icon: "Instagram",
  },
  {
    id: "tiktok",
    name: "TikTok",
    category: "social",
    type: "link",
    url: "https://tiktok.com",
    embedCode: "",
    enabled: true,
    description: "TikTok profile link. Paste your full TikTok URL.",
    icon: "Music",
  },
  {
    id: "youtube",
    name: "YouTube",
    category: "social",
    type: "link",
    url: "",
    embedCode: "",
    enabled: false,
    description: "YouTube channel link. Paste your full YouTube channel URL.",
    icon: "Youtube",
  },
  {
    id: "facebook",
    name: "Facebook",
    category: "social",
    type: "link",
    url: "https://facebook.com",
    embedCode: "",
    enabled: true,
    description: "Facebook page or profile link.",
    icon: "Facebook",
  },
];

export default integrations;
