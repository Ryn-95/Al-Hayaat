import { Metadata } from "next";
import { ServicePageContent } from "@/components/sections/ServicePageContent";
import { getServiceBySlug } from "@/lib/services-data";

const data = getServiceBySlug("toilette-rituelle-ghusl")!;

export async function generateMetadata(): Promise<Metadata> {
  const url = "https://www.pompesfunebres-alhayaat.fr/toilette-rituelle-ghusl";
  return {
    title: data.title,
    description: data.metaDescription,
    
    
    alternates: {
      canonical: url,
    },
    openGraph: {
      title: data.title,
      description: data.metaDescription,
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

export default function ToiletteRituelleGhuslPage() {
  return <ServicePageContent data={data} />;
}
