import type { Metadata } from "next";
import Link from "next/link";
import Breadcrumbs from "@/components/ui/Breadcrumbs";
import SchemaOrg from "@/components/ui/SchemaOrg";
import { buildArticleSchema } from "@/lib/seo-config";

export async function generateMetadata(): Promise<Metadata> {
  const url = "https://www.pompesfunebres-alhayaat.fr/guide/assurance-rapatriement-comparatif";
  return {
    title: "Assurance Rapatriement de Corps : Comparatif",
    description: "Comparatif des meilleures assurances rapatriement.",
    keywords: ["assurance rapatriement corps comparatif"],
    
    alternates: {
      canonical: url,
    },
    openGraph: {
      title: "Assurance Rapatriement de Corps : Comparatif",
      description: "Comparatif des meilleures assurances rapatriement.",
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

export default function Page() {
  return (
    <div className="bg-[#F5F0E8] text-[#1A1A1A] min-h-screen font-inter">
      <SchemaOrg data={buildArticleSchema({ headline: "Assurance Rapatriement de Corps : Comparatif", datePublished: "2024-06-15" })} />
      <section className="relative w-full pt-28 pb-16 bg-[#0D1208] text-white">
        <div className="relative z-10 w-full max-w-[1280px] mx-auto px-8 md:px-12">
          <Breadcrumbs items={[{ label: "Guide", href: "/guide" }, { label: "Assurance Rapatriement de Corps", href: "/guide/assurance-rapatriement-comparatif" }]} />
          <h1 className="text-[2.2rem] md:text-[3rem] font-semibold leading-[1.1] tracking-[-0.02em] text-white mb-6 mt-6 max-w-[700px]">Assurance Rapatriement de Corps : Comparatif</h1>
          <p className="text-[15px] font-light leading-[1.7] text-white/60 max-w-[520px]">Comparatif des meilleures assurances rapatriement.</p>
        </div>
      </section>
      <section className="w-full bg-[#F5F0E8] py-20 md:py-28">
        <div className="w-full max-w-[1280px] mx-auto px-8 md:px-12"><div className="max-w-[780px]">
          <p className="text-[15px] font-light text-[#555] leading-[1.8] mb-8">Contenu en cours de rédaction. Consultez nos autres guides : <Link href="/guide/doua-deces-islam" className="text-[#2D6A2D] font-medium hover:underline">Doua pour un mort</Link> · <Link href="/guide/condoleances-islam" className="text-[#2D6A2D] font-medium hover:underline">Condoléances en Islam</Link> · <Link href="/guide/rites-funeraires-islam-etapes" className="text-[#2D6A2D] font-medium hover:underline">Rites funéraires islamiques</Link>.</p>
          <p className="text-[15px] font-light text-[#555] leading-[1.8]">Al Hayat accompagne les familles musulmanes en <Link href="/normandie" className="text-[#2D6A2D] font-medium hover:underline">Normandie</Link> et à <Link href="/ile-de-france" className="text-[#2D6A2D] font-medium hover:underline">Paris</Link>. <Link href="/contact" className="text-[#2D6A2D] font-medium hover:underline">Contactez-nous 24h/24</Link>.</p>
        </div></div>
      </section>
    </div>
  );
}
