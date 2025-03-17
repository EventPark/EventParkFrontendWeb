interface HeroContent {
  title: string;
  subtitle: string;
  description: string;
  ctaText: string;
  imageSrc: {
    desktop: string;
    mobile: string;
  };
}

export const heroContent: Record<string, HeroContent> = {
  user: {
    title: "Dream Big",
    subtitle: "Plan Easy",
    description:
      "Find the right vendors, create amazing events and trust us to handle the rest.",
    ctaText: "Start Planning",
    imageSrc: {
      desktop: "/images/home/hero.svg",
      mobile: "/images/home/hero_mobile.svg",
    },
  },
  vendor: {
    title: "Reach More",
    subtitle: "With Less",
    description:
      "Join the leading platform connecting vendors with event planners",
    ctaText: "Join as Vendor",
    imageSrc: {
      desktop: "/images/vendor/hero.svg",
      mobile: "/images/vendor/hero_mobile.svg",
    },
  },
  marketplace: {
    title: "Find, Book,",
    subtitle: "Celebrate.",
    description:
      "Explore 200+ categories and connect with the best in the business",
    ctaText: "Browse Vendors",
    imageSrc: {
      desktop: "/images/marketplace/hero.svg",
      mobile: "/images/marketplace/hero_mobile.svg",
    },
  },
};
