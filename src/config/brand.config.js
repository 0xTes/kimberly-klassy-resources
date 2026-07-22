/**
 * The only file most future creator sites need to change.
 * Replace the copy, links, images, and optional footer fields below.
 */
export const brandConfig = {
  identity: {
  name: "Kimberly Klassy",
  firstName: "Kimberly",
  lastName: "Klassy",
  tagline: "A city girl who loves nature and the outdoors.",
  profileImage: "/images/hero/kimberly.png",
  profileImageAlt: "Portrait of Kimberly Klassy",
},
  seo: {
    title: "Kimberly Klassy | Official Resources",
    description:
      "Explore Kimberly Klassy's official links, exclusive content, community, and social channels.",
    canonicalUrl: "",
    socialPreviewImage: "/brand/social-preview.svg",
    twitterCard: "summary_large_image",
  },
  hero: {
    eyebrow: "Lifestyle creator \u00b7 outdoors enthusiast",
    headline: "A little city sparkle, with room to roam.",
    description:
      "Come along for warm conversations, outdoor adventures, and the kind of confidence that feels good from the inside out.",
    primaryAction: { label: "Explore Kim's Room", href: "#resources" },
    secondaryAction: { label: "Get to know Kimberly", href: "#about" },
  },
  socials: [
    { name: "Instagram", icon: "instagram", href: "https://instagram.com/kimberly.klassy" },
    { name: "Threads", icon: "threads", href: "https://threads.com/@kimberly.klassy" },
    { name: "Bluesky", icon: "bluesky", href: "https://bsky.app/profile/kimberlyclassy.bsky.social" },
    { name: "X", icon: "x", href: "https://x.com/KimberlyKlassy" },
  ],
  resources: [
    {
      title: "Kim's Room",
      subtitle: "Exclusive content",
      description: "Behind-the-scenes moments, personal updates, and more of Kimberly.",
      emoji: "\uD83E\uDD17",
      icon: "sparkle",
      buttonLabel: "Step inside",
      href: "https://beacons.ai/kimberlyklassy",
      featured: true,
    },
    {
      title: "My Friends",
      subtitle: "Community",
      description: "A welcoming space for conversation, confidence, and connection.",
      emoji: "\uD83D\uDE2F",
      icon: "people",
      buttonLabel: "Join the community",
      href: "https://beacons.ai/kimberlyklassy",
    },
    {
      title: "Subscribe",
      subtitle: "Stay close",
      description: "Unlock premium access and receive Kimberly's newest creator content.",
      icon: "heart",
      buttonLabel: "Subscribe now",
      href: "https://beacons.ai/kimberlyklassy",
    },
    {
      title: "Get a Date",
      subtitle: "Let's connect",
      description: "Find Kimberly's official creator hub and see where the day takes you.",
      icon: "calendar",
      buttonLabel: "See details",
      href: "https://beacons.ai/kimberlyklassy",
    },
  ],
  about: {
    eyebrow: "A little about Kimberly",
    title: "Confident, curious, and always up for fresh air.",
    paragraphs: [
      "Kimberly brings a little polish to every adventure. She loves the energy of city life, the reset of a trail or open sky, and sharing both without pretending life needs to be perfect.",
      "This is a space for aging positively, embracing your body, meeting good people, and enjoying the moment exactly as it is.",
    ],
    highlights: ["Nature lover", "Aging positively", "Body confidence", "Real community"],
  },
  callToAction: {
    title: "Make yourself at home.",
    description: "Choose a corner of Kimberly's world and come say hello.",
    action: { label: "Explore all the links", href: "#resources" },
  },
  footer: {
    contact: { email: "", phone: "", address: "" },
    legalLinks: [],
    additionalLinks: [],
    showSocials: true,
    copyright: "\u00a9 {year} Kimberly Klassy. All rights reserved.",
  },
};
