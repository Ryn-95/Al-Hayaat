// ═══════════════════════════════════════════
// AL HAYAT — CENTRALIZED SEO CONFIGURATION
// ═══════════════════════════════════════════

export const SITE_CONFIG = {
  name: "Al Hayaat Pompes Funèbres Musulmanes",
  shortName: "Al Hayaat",
  baseUrl: "https://www.pompesfunebres-alhayaat.fr",
  phone: "+33763214656",
  phoneDisplay: "07 63 21 46 56",
  email: "contact@pompesfunebres-alhayaat.fr",
  address: {
    street: "44 Rue Saint-Jacques",
    city: "Le Havre",
    postalCode: "76600",
    region: "Normandie",
    country: "FR",
  },
  openingHours: "24h/24 — 7j/7",
  priceRange: "€€",
  availableLanguages: ["French", "Arabic"],
  social: {
  },
} as const;

// ── Schema.org Builders ──

export function buildFuneralHomeSchema(overrides?: {
  name?: string;
  city?: string;
  postalCode?: string;
  areaServed?: string | string[];
  telephone?: string;
}) {
  return {
    "@context": "https://schema.org",
    "@type": "FuneralHome",
    name: overrides?.name || SITE_CONFIG.name,
    url: SITE_CONFIG.baseUrl,
    telephone: overrides?.telephone || SITE_CONFIG.phone,
    email: SITE_CONFIG.email,
    description:
      "Pompes funèbres musulmanes en Normandie et Paris. Toilette rituelle, Salat al-Janaza, rapatriement de corps, inhumation carré musulman. Disponibles 24h/24.",
    address: {
      "@type": "PostalAddress",
      streetAddress: SITE_CONFIG.address.street,
      addressLocality: overrides?.city || SITE_CONFIG.address.city,
      postalCode: overrides?.postalCode || SITE_CONFIG.address.postalCode,
      addressRegion: SITE_CONFIG.address.region,
      addressCountry: SITE_CONFIG.address.country,
    },
    areaServed: overrides?.areaServed
      ? Array.isArray(overrides.areaServed)
        ? overrides.areaServed
        : [overrides.areaServed]
      : [
          "Normandie",
          "Paris",
          "Île-de-France",
          "Rouen",
          "Le Havre",
          "Caen",
        ],
    openingHoursSpecification: {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: [
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday",
        "Saturday",
        "Sunday",
      ],
      opens: "00:00",
      closes: "23:59",
    },
    availableLanguage: SITE_CONFIG.availableLanguages,
    priceRange: SITE_CONFIG.priceRange,
  };
}

export function buildBreadcrumbSchema(
  items: { name: string; url: string }[]
) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      item: item.url,
    })),
  };
}

export function buildFAQSchema(
  faqs: { question: string; answer: string }[]
) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: faq.answer,
      },
    })),
  };
}

export function buildArticleSchema(article: {
  headline: string;
  datePublished: string;
  dateModified?: string;
  description?: string;
  image?: string;
}) {
  return {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: article.headline,
    datePublished: article.datePublished,
    dateModified: article.dateModified || article.datePublished,
    description: article.description,
    image: article.image,
    author: {
      "@type": "Organization",
      name: SITE_CONFIG.name,
    },
    publisher: {
      "@type": "Organization",
      name: SITE_CONFIG.shortName,
      logo: {
        "@type": "ImageObject",
        url: `${SITE_CONFIG.baseUrl}/Image/Logo_ALHAYAAT.jpeg`,
      },
    },
  };
}
