import type { Metadata } from "next";
import Link from "next/link";
import Breadcrumbs from "@/components/ui/Breadcrumbs";

export async function generateMetadata(): Promise<Metadata> {
  const url = "https://www.pompesfunebres-alhayaat.fr/rapatriement-corps-tunisie";
  return {
    title: "Rapatriement de Corps en Tunisie depuis Normandie & Paris | Al Hayaat",
    description: "Al Hayaat organise le rapatriement de corps en Tunisie. Formalités consulaires, cercueil IATA, démarches complètes. Depuis Normandie et Paris. 24h/24.",
    keywords: ["rapatriement corps Tunisie"],
    
    alternates: {
      canonical: url,
    },
    openGraph: {
      title: "Rapatriement de Corps en Tunisie — Al Hayat",
      description: "Rapatriement de corps en Tunisie depuis la France. Démarches, documents, délais. Al Hayat vous accompagne de A à Z.",
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

export default function RapatriementTunisiePage() {
  return (
    <div className="bg-[#F5F0E8] text-[#1A1A1A] min-h-screen font-inter">
      <section className="relative w-full pt-28 pb-16 bg-[#0D1208] text-white">
        <div className="relative z-10 w-full max-w-[1280px] mx-auto px-8 md:px-12">
          <Breadcrumbs items={[{ label: "Rapatriement", href: "/rapatriement-corps" }, { label: "Tunisie", href: "/rapatriement-corps-tunisie" }]} />
          <h1 className="text-[2.2rem] md:text-[3rem] font-semibold leading-[1.1] tracking-[-0.02em] text-white mb-6 mt-6 max-w-[700px]">Rapatriement de Corps en Tunisie — Al Hayaat</h1>
          
        </div>
      </section>
      <section className="w-full bg-[#F5F0E8] py-20 md:py-28">
        <div className="w-full max-w-[1280px] mx-auto px-8 md:px-12"><div className="max-w-[780px]">
            <p className="text-[15px] font-light text-[#555] leading-[1.8] mb-8">La Tunisie est une destination fréquente de rapatriement funéraire depuis la France. Al Hayaat prend en charge l'intégralité des démarches depuis la Normandie (Le Havre, Rouen, Caen) et Paris, pour un rapatriement vers Tunis, Sfax, Sousse, Bizerte ou toute autre ville tunisienne.</p>

  <h2 className="text-[24px] md:text-[28px] font-semibold text-[#1A1A1A] mb-6">Documents pour le Rapatriement en Tunisie</h2>
  <div className="p-6 bg-white border border-[#E8E2D9] rounded-[12px] mb-8">
    <ul className="flex flex-col gap-2">{["Acte de décès de la mairie", "Certificat de non-contagion", "Autorisation préfectorale de transport international", "Laissez-passer mortuaire du consulat de Tunisie", "Passeport ou CNI tunisienne du défunt"].map((d, i) => (<li key={i} className="flex items-start gap-3 text-[14px] text-[#555] font-light"><span className="text-[#2D6A2D]">✓</span>{d}</li>))}</ul>
  </div>

  <h2 className="text-[24px] md:text-[28px] font-semibold text-[#1A1A1A] mb-6">Délais et Logistique</h2>
  <p className="text-[15px] font-light text-[#555] leading-[1.8] mb-8">Depuis la Normandie ou Paris, le rapatriement vers la Tunisie prend généralement 48 à 72 heures. Le corps est acheminé via l'aéroport CDG jusqu'à Tunis-Carthage ou un autre aéroport tunisien selon la ville d'inhumation.</p>
  
  <Link href="/contact" className="inline-flex items-center gap-2 bg-[#2D6A2D] text-white px-5 py-3 rounded-[5px] text-[13.5px] font-medium hover:bg-[#255525] transition-colors">Nous contacter</Link>
        </div></div>
      </section>
    </div>
  );
}
