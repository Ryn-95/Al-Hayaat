import type { Metadata } from "next";
import Link from "next/link";
import Breadcrumbs from "@/components/ui/Breadcrumbs";

export async function generateMetadata(): Promise<Metadata> {
  const url = "https://www.pompesfunebres-alhayaat.fr/rapatriement-corps-afrique";
  return {
    title: "Rapatriement de Corps — Comores, Guinée, Mauritanie | Al Hayaat",
    description: "Al Hayaat organise le rapatriement de corps vers les Comores, la Guinée, la Mauritanie et d'autres pays africains depuis la France. 24h/24.",
    keywords: ["rapatriement corps afrique"],
    
    alternates: {
      canonical: url,
    },
    openGraph: {
      title: "Rapatriement de Corps — Comores, Guinée, Mauritanie | Al Hayaat",
      description: "Al Hayaat organise le rapatriement de corps vers les Comores, la Guinée, la Mauritanie et d'autres pays africains depuis la France. 24h/24.",
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

export default function RapatriementAfriquePage() {
  return (
    <div className="bg-[#F5F0E8] text-[#1A1A1A] min-h-screen font-inter">
      <section className="relative w-full pt-28 pb-16 bg-[#0D1208] text-white">
        <div className="relative z-10 w-full max-w-[1280px] mx-auto px-8 md:px-12">
          <Breadcrumbs items={[{ label: "Rapatriement", href: "/rapatriement-corps" }, { label: "Afrique", href: "/rapatriement-corps-afrique" }]} />
          <h1 className="text-[2.2rem] md:text-[3rem] font-semibold leading-[1.1] tracking-[-0.02em] text-white mb-6 mt-6 max-w-[700px]">Rapatriement de Corps vers les Comores, la Guinée, la Mauritanie et l'Afrique</h1>
        </div>
      </section>
      <section className="w-full bg-[#F5F0E8] py-20 md:py-28">
        <div className="w-full max-w-[1280px] mx-auto px-8 md:px-12">
          <div className="max-w-[780px]">
            <p className="text-[15px] font-light text-[#555] leading-[1.8] mb-8">Al Hayaat accompagne les familles de toutes les communautés musulmanes d'Afrique présentes en Normandie et en Île-de-France. Nous organisons le rapatriement de corps vers les Comores (Moroni), la Guinée (Conakry), la Mauritanie (Nouakchott), la Côte d'Ivoire (Abidjan) et d'autres destinations africaines, en gérant l'ensemble des spécificités de chaque pays : exigences consulaires, compagnies aériennes partenaires, documents requis.</p>
            
            <Link href="/contact" className="inline-flex items-center gap-2 bg-[#2D6A2D] text-white px-5 py-3 rounded-[5px] text-[13.5px] font-medium hover:bg-[#255525] transition-colors">Nous contacter</Link>
          </div>
        </div>
      </section>
    </div>
  );
}