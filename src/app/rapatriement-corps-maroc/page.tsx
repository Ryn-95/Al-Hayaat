import type { Metadata } from "next";
import Link from "next/link";
import Breadcrumbs from "@/components/ui/Breadcrumbs";
import SchemaOrg from "@/components/ui/SchemaOrg";
import { buildFuneralHomeSchema } from "@/lib/seo-config";

export async function generateMetadata(): Promise<Metadata> {
  const url = "https://pompesfunebres-alhayaat.fr/rapatriement-corps-maroc";
  return {
    title: "Rapatriement de Corps au Maroc — Al Hayat Normandie & Paris",
    description: "Rapatriement de corps au Maroc depuis la Normandie et Paris. Documents, délais, prise en charge. Al Hayat gère toutes les démarches administratives.",
    keywords: ["rapatriement corps Maroc"],
    
    alternates: {
      canonical: url,
    },
    openGraph: {
      title: "Rapatriement de Corps au Maroc — Al Hayat Normandie & Paris",
      description: "Rapatriement de corps au Maroc depuis la Normandie et Paris. Documents, délais, prise en charge. Al Hayat gère toutes les démarches administratives.",
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

export default function RapatriementMarocPage() {
  return (
    <div className="bg-[#F5F0E8] text-[#1A1A1A] min-h-screen font-inter">
      <SchemaOrg data={buildFuneralHomeSchema()} />
      <section className="relative w-full pt-28 pb-16 bg-[#0D1208] text-white">
        <div className="relative z-10 w-full max-w-[1280px] mx-auto px-8 md:px-12">
          <Breadcrumbs items={[{ label: "Rapatriement", href: "/rapatriement-corps" }, { label: "Maroc", href: "/rapatriement-corps-maroc" }]} />
          <h1 className="text-[2.2rem] md:text-[3rem] font-semibold leading-[1.1] tracking-[-0.02em] text-white mb-6 mt-6 max-w-[700px]">Rapatriement de Corps au Maroc</h1>
          <p className="text-[15px] font-light leading-[1.7] text-white/60 max-w-[520px]">Al Hayat organise le rapatriement funéraire au Maroc depuis la Normandie et Paris. Toutes les démarches consulaires et administratives prises en charge.</p>
        </div>
      </section>
      <section className="w-full bg-[#F5F0E8] py-20 md:py-28">
        <div className="w-full max-w-[1280px] mx-auto px-8 md:px-12"><div className="max-w-[780px]">
          <h2 className="text-[24px] md:text-[28px] font-semibold text-[#1A1A1A] mb-6">Conditions du rapatriement vers le Maroc</h2>
          <p className="text-[15px] font-light text-[#555] leading-[1.8] mb-8">Le rapatriement de corps au Maroc nécessite un cercueil hermétique (zinc ou aluminium), conforme aux normes IATA, ainsi qu&apos;un ensemble de documents administratifs et consulaires que notre équipe constitue intégralement pour vous.</p>

          <h2 className="text-[24px] md:text-[28px] font-semibold text-[#1A1A1A] mb-6">Les documents à fournir</h2>
          <div className="p-6 bg-white border border-[#E8E2D9] rounded-[12px] mb-8">
            <ul className="flex flex-col gap-2">{["Nom, prénom, date et lieu de décès, cause du décès", "Filiation complète du défunt", "Coordonnées de la famille au Maroc", "CNIE ou passeport marocain", "Certificat de décès et certificat sanitaire de non-contagion", "Autorisation de sortie du territoire", "Lieu d'inhumation au Maroc", "Poste frontière d'entrée", "Justificatif de prise en charge financière"].map((d, i) => (<li key={i} className="flex items-start gap-3 text-[14px] text-[#555] font-light"><span className="text-[#2D6A2D]">✓</span>{d}</li>))}</ul>
          </div>

          <h2 className="text-[24px] md:text-[28px] font-semibold text-[#1A1A1A] mb-6">Prise en charge financière par l&apos;État marocain</h2>
          <p className="text-[15px] font-light text-[#555] leading-[1.8] mb-8">L&apos;État marocain peut prendre en charge le rapatriement des défunts marocains résidant en France, sous conditions de ressources insuffisantes. Al Hayat vous accompagne dans la constitution du dossier auprès des services consulaires.</p>

          <h2 className="text-[24px] md:text-[28px] font-semibold text-[#1A1A1A] mb-6">Souscrire une assurance rapatriement</h2>
          <p className="text-[15px] font-light text-[#555] leading-[1.8] mb-8">Nous recommandons vivement de souscrire une <Link href="/assurance-deces-musulmane" className="text-[#2D6A2D] font-medium hover:underline">assurance décès et rapatriement</Link> à l&apos;avance pour éviter toute charge financière imprévue à la famille.</p>

          <div className="p-6 bg-[#0D1208] rounded-[12px] text-white">
            <p className="text-[15px] font-medium mb-3">Organiser un rapatriement au Maroc</p>
            <Link href="/contact" className="inline-flex items-center gap-2 bg-[#2D6A2D] text-white px-5 py-3 rounded-[5px] text-[13.5px] font-medium hover:bg-[#255525] transition-colors">Nous contacter</Link>
          </div>
        </div></div>
      </section>
    </div>
  );
}
