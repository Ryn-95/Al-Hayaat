import type { Metadata } from "next";
import { normandieDepartments } from "@/lib/geo-data";
import CityPageTemplate from "@/components/sections/CityPageTemplate";

const city = normandieDepartments.find((c) => c.slug === "pompes-funebres-musulmanes-orne")!;


export async function generateMetadata(): Promise<Metadata> {
  const url = "https://www.pompesfunebres-alhayaat.fr/pompes-funebres-musulmanes-orne";
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

export default function OrnePage() {
  return <CityPageTemplate data={city} breadcrumbs={[{ label: "Normandie", href: "/normandie" }, { label: "Orne (61)", href: "/pompes-funebres-musulmanes-orne" }]} />;
}
