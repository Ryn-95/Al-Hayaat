import type { Metadata } from "next";
import { parisCities } from "@/lib/geo-data";
import CityPageTemplate from "@/components/sections/CityPageTemplate";

const city = parisCities.find((c) => c.slug === "pompes-funebres-musulmanes-paris")!;


export async function generateMetadata(): Promise<Metadata> {
  const url = "https://www.pompesfunebres-alhayaat.fr/pompes-funebres-musulmanes-paris";
  return {
    title: city.title,
    description: city.metaDescription,
    
    alternates: {
      canonical: url,
    },
    openGraph: {
      title: city.title,
      description: city.metaDescription,
      url: url,
      siteName: "Al Hayaat Pompes Funèbres Musulmanes",
      locale: "fr_FR",
      type: "website",
      images: [
        {
          url: "https://www.pompesfunebres-alhayaat.fr/og-default.jpg",
          width: 1200,
          height: 630,
          alt: "Al Hayaat Pompes Funèbres Musulmanes",
        }
      ],
    },
  };
}

export default function ParisPage() {
  return <CityPageTemplate data={city} breadcrumbs={[{ label: "Paris & Île-de-France", href: "/paris-ile-de-france" }, { label: "Paris", href: "/pompes-funebres-musulmanes-paris" }]} />;
}
