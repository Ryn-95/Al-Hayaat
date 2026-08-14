import type { Metadata } from "next";
import Link from "next/link";
import Breadcrumbs from "@/components/ui/Breadcrumbs";
import SchemaOrg from "@/components/ui/SchemaOrg";
import { buildFuneralHomeSchema } from "@/lib/seo-config";

export async function generateMetadata(): Promise<Metadata> {
  const url = "https://www.pompesfunebres-alhayaat.fr/rapatriement-corps-algerie";
  return {
    title: "Rapatriement de Corps en Algérie depuis la Normandie & Paris | Al Hayaat",
    description: "Al Hayaat organise le rapatriement de corps en Algérie depuis la Normandie et Paris. Fonds de solidarité consulaire, cercueil hermétique, délai 48-72h. Disponible 24h/24.",
    keywords: ["rapatriement corps Algérie"],
    
    alternates: {
      canonical: url,
    },
    openGraph: {
      title: "Rapatriement de Corps en Algérie depuis la Normandie & Paris | Al Hayaat",
      description: "Al Hayaat organise le rapatriement de corps en Algérie depuis la Normandie et Paris. Fonds de solidarité consulaire, cercueil hermétique, délai 48-72h. Disponible 24h/24.",
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

export default function RapatriementAlgeriePage() {
  const faqs = [
    { question: "Le consulat d'Algérie peut-il vraiment prendre en charge les frais de rapatriement ?", answer: "Oui, sous conditions de ressources. Al Hayaat vous aide à monter le dossier gratuitement. Ce fonds de solidarité existe pour soulager les familles dans cette épreuve." },
    { question: "Faut-il la thanatopraxie pour un rapatriement en Algérie ?", answer: "Si le décès date de moins de 7 jours, la thanatopraxie n'est généralement pas obligatoire pour l'Algérie. Al Hayaat vérifie les conditions exactes selon la date et le lieu de décès." },
    { question: "Peut-on rapatrier un corps depuis Rouen vers Alger ?", answer: "Oui. Al Hayaat organise le rapatriement depuis toute la Normandie (Rouen, Le Havre, Caen, Dieppe, Évreux) vers toutes les villes d'Algérie. Le corps est acheminé via l'aéroport CDG." }
  ];

  return (
    <div className="bg-[#F5F0E8] text-[#1A1A1A] min-h-screen font-inter">
      <SchemaOrg data={buildFuneralHomeSchema()} />
      <section className="relative w-full pt-28 pb-16 bg-[#0D1208] text-white">
        <div className="relative z-10 w-full max-w-[1280px] mx-auto px-8 md:px-12">
          <Breadcrumbs items={[{ label: "Rapatriement", href: "/rapatriement-corps" }, { label: "Algérie", href: "/rapatriement-corps-algerie" }]} />
          <h1 className="text-[2.2rem] md:text-[3rem] font-semibold leading-[1.1] tracking-[-0.02em] text-white mb-6 mt-6 max-w-[700px]">Rapatriement de Corps en Algérie — Al Hayaat</h1>
          <p className="text-[15px] font-light leading-[1.8] text-white/70 max-w-[640px]">
            L'Algérie est la première destination de rapatriement de corps depuis la France. Al Hayaat organise ce rapatriement depuis la Normandie (Rouen, Le Havre, Caen) et Paris, en gérant l'intégralité des démarches administratives et consulaires. Notre équipe connaît avec précision les exigences du consulat algérien et les procédures de chaque aéroport, pour garantir un rapatriement dans les meilleurs délais — en général 48 à 72 heures.
          </p>
        </div>
      </section>
      <section className="w-full bg-[#F5F0E8] py-20 md:py-28">
        <div className="w-full max-w-[1280px] mx-auto px-8 md:px-12">
          <div className="max-w-[780px]">
            
            <h2 className="text-[24px] md:text-[28px] font-semibold text-[#1A1A1A] mb-6">Le Fonds de Solidarité du Consulat d'Algérie</h2>
            <p className="text-[15px] font-light text-[#555] leading-[1.8] mb-4">
              C'est l'information la plus importante que beaucoup de familles ignorent : le consulat d'Algérie propose un fonds de solidarité qui peut prendre en charge gratuitement le rapatriement, sous conditions de ressources insuffisantes. Al Hayaat vous aide à constituer le dossier et à vérifier votre éligibilité. Ce dispositif a permis à des centaines de familles normandes et franciliennes de rapatrier leur proche sans frais.
            </p>
            <p className="text-[15px] font-light text-[#555] leading-[1.8] mb-8">
              Pour en bénéficier, il faut généralement fournir : le certificat de décès, l'attestation de ressources, la preuve de nationalité algérienne du défunt, et le certificat de prise en charge par une entreprise funéraire habilitée (Al Hayaat).
            </p>

            <h2 className="text-[24px] md:text-[28px] font-semibold text-[#1A1A1A] mb-6">Les Documents Nécessaires pour le Rapatriement en Algérie</h2>
            <div className="p-6 bg-white border border-[#E8E2D9] rounded-[12px] mb-8">
              <ul className="flex flex-col gap-2">
                {[
                  "Certificat de décès médical", 
                  "Acte de décès délivré par la mairie", 
                  "Autorisation préfectorale de fermeture de cercueil", 
                  "Autorisation préfectorale de transport international", 
                  "Certificat de non-contagion (médecin assermenté)", 
                  "Autorisation d'entrée du territoire algérien (consulat)", 
                  "Passeport ou CNIE du défunt", 
                  "Coordonnées complètes de la famille en Algérie",
                  "Lieu d'inhumation prévu en Algérie"
                ].map((d, i) => (
                  <li key={i} className="flex items-start gap-3 text-[14px] text-[#555] font-light">
                    <span className="text-[#2D6A2D]">✓</span>{d}
                  </li>
                ))}
              </ul>
            </div>

            <h2 className="text-[24px] md:text-[28px] font-semibold text-[#1A1A1A] mb-6">Les Conditions Techniques du Cercueil</h2>
            <p className="text-[15px] font-light text-[#555] leading-[1.8] mb-4">
              Le transport aérien d'un corps vers l'Algérie impose un cercueil hermétique en zinc ou en aluminium, conforme aux normes IATA. L'épaisseur minimale du cercueil est de 22mm. Un filtre épurateur conforme est obligatoire. Si le décès date de moins de 7 jours, la thanatopraxie (injection conservatrice) n'est pas requise selon les exigences algériennes.
            </p>
            <p className="text-[15px] font-light text-[#555] leading-[1.8] mb-8">
              Al Hayaat fournit tous les cercueils aux normes IATA pour le transport international.
            </p>

            <h2 className="text-[24px] md:text-[28px] font-semibold text-[#1A1A1A] mb-6">Délais depuis la Normandie et Paris</h2>
            <p className="text-[15px] font-light text-[#555] leading-[1.8] mb-12">
              Depuis Rouen ou Le Havre, le corps est acheminé par voie routière jusqu'à l'aéroport de Roissy-Charles de Gaulle (environ 1h30 à 2h). Depuis Paris, le délai de transfert vers l'aéroport est de 30 à 45 minutes. Le rapatriement vers l'Algérie prend généralement 48 à 72 heures à compter du début des démarches.
            </p>

            <h2 className="text-[24px] md:text-[28px] font-semibold text-[#1A1A1A] mb-6">Questions fréquentes</h2>
            <div className="flex flex-col border-t border-[#E5E5E5] mb-12">
              {faqs.map((faq, i) => (
                <details key={i} className="group border-b border-[#E5E5E5]">
                  <summary className="flex items-center justify-between py-6 cursor-pointer list-none [&::-webkit-details-marker]:hidden">
                    <span className="text-[15px] md:text-[16px] font-medium text-[#111] pr-6">{faq.question}</span>
                    <span className="relative flex items-center justify-center w-6 h-6 shrink-0 transition-transform duration-300 group-open:rotate-180">
                      <span className="absolute w-[14px] h-[1.5px] bg-[#111] transition-transform duration-300 group-open:rotate-180" />
                      <span className="absolute w-[1.5px] h-[14px] bg-[#111] transition-transform duration-300 group-open:rotate-90" />
                    </span>
                  </summary>
                  <div className="pb-6 pr-12 text-[14px] font-light text-[#666] leading-[1.6]">
                    {faq.answer}
                  </div>
                </details>
              ))}
            </div>

            <div className="p-6 bg-[#0D1208] rounded-[12px] text-white">
              <p className="text-[15px] font-medium mb-3">Urgence rapatriement Algérie</p>
              <p className="text-[14px] font-light text-white/60 mb-4">Contactez-nous immédiatement pour organiser un rapatriement en urgence.</p>
              <Link href="/contact" className="inline-flex items-center gap-2 bg-[#2D6A2D] text-white px-5 py-3 rounded-[5px] text-[13.5px] font-medium hover:bg-[#255525] transition-colors">Nous contacter</Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
