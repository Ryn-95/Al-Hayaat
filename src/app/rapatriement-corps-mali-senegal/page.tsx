import type { Metadata } from "next";
import Link from "next/link";
import Breadcrumbs from "@/components/ui/Breadcrumbs";

export async function generateMetadata(): Promise<Metadata> {
  const url = "https://pompesfunebres-alhayaat.fr/rapatriement-corps-mali-senegal";
  return {
    title: "Rapatriement de Corps en Afrique Subsaharienne — Al Hayat",
    description: "Rapatriement de corps en Afrique : Mali, Sénégal, Guinée, Côte d'Ivoire. Al Hayat gère les démarches depuis la Normandie et Paris.",
    keywords: ["rapatriement corps Mali"],
    
    alternates: {
      canonical: url,
    },
    openGraph: {
      title: "Rapatriement de Corps en Afrique Subsaharienne — Al Hayat",
      description: "Rapatriement de corps en Afrique : Mali, Sénégal, Guinée, Côte d'Ivoire. Al Hayat gère les démarches depuis la Normandie et Paris.",
      url: url,
      siteName: "Al Hayaat Pompes Funèbres Musulmanes",
      locale: "fr_FR",
      type: "website",
      images: [
        {
          url: "https://pompesfunebres-alhayaat.fr/og-default.jpg",
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
          <Breadcrumbs items={[{ label: "Rapatriement", href: "/rapatriement-corps" }, { label: "Afrique", href: "/rapatriement-corps-mali-senegal" }]} />
          <h1 className="text-[2.2rem] md:text-[3rem] font-semibold leading-[1.1] tracking-[-0.02em] text-white mb-6 mt-6 max-w-[700px]">Rapatriement de Corps en Afrique : Mali, Sénégal, Guinée, Côte d&apos;Ivoire</h1>
          <p className="text-[15px] font-light leading-[1.7] text-white/60 max-w-[520px]">Al Hayat organise le rapatriement funéraire vers les pays d&apos;Afrique subsaharienne depuis la Normandie et Paris.</p>
        </div>
      </section>
      <section className="w-full bg-[#F5F0E8] py-20 md:py-28">
        <div className="w-full max-w-[1280px] mx-auto px-8 md:px-12"><div className="max-w-[780px]">
          <h2 className="text-[24px] md:text-[28px] font-semibold text-[#1A1A1A] mb-6">Destinations desservies</h2>
          <p className="text-[15px] font-light text-[#555] leading-[1.8] mb-4">Nous organisons le rapatriement de corps vers :</p>
          <div className="grid grid-cols-2 gap-3 mb-8">{["Mali (Bamako)", "Sénégal (Dakar)", "Guinée (Conakry)", "Côte d'Ivoire (Abidjan)", "Mauritanie (Nouakchott)", "Comores (Moroni)"].map((d) => (<div key={d} className="p-4 bg-white border border-[#E8E2D9] rounded-[8px] text-[14px] text-[#555] font-light">{d}</div>))}</div>

          <h2 className="text-[24px] md:text-[28px] font-semibold text-[#1A1A1A] mb-6">Processus et délais</h2>
          <p className="text-[15px] font-light text-[#555] leading-[1.8] mb-8">Le rapatriement vers l&apos;Afrique subsaharienne nécessite une coordination avec les ambassades concernées. Les délais varient de 72h à une semaine selon la destination et la disponibilité des vols. Al Hayat prend en charge l&apos;intégralité des <Link href="/demarches-administratives-deces" className="text-[#2D6A2D] font-medium hover:underline">démarches administratives</Link>.</p>
          <Link href="/contact" className="inline-flex items-center gap-2 bg-[#2D6A2D] text-white px-5 py-3 rounded-[5px] text-[13.5px] font-medium hover:bg-[#255525] transition-colors">Nous contacter</Link>
        </div></div>
      </section>
    </div>
  );
}
