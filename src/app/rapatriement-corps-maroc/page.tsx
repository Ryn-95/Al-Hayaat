import type { Metadata } from "next";
import Link from "next/link";
import Breadcrumbs from "@/components/ui/Breadcrumbs";
import SchemaOrg from "@/components/ui/SchemaOrg";
import { buildFuneralHomeSchema } from "@/lib/seo-config";

export async function generateMetadata(): Promise<Metadata> {
  const url = "https://pompesfunebres-alhayaat.fr/rapatriement-corps-maroc";
  return {
    title: "Rapatriement de Corps au Maroc depuis Normandie & Paris | Al Hayaat",
    description: "Al Hayaat organise le rapatriement de corps au Maroc depuis la Normandie et Paris. Prise en charge par l'État marocain possible. Cercueil IATA, démarches consulaires complètes. 24h/24.",
    keywords: ["rapatriement corps Maroc"],
    
    alternates: {
      canonical: url,
    },
    openGraph: {
      title: "Rapatriement de Corps au Maroc depuis Normandie & Paris | Al Hayaat",
      description: "Al Hayaat organise le rapatriement de corps au Maroc depuis la Normandie et Paris. Prise en charge par l'État marocain possible. Cercueil IATA, démarches consulaires complètes. 24h/24.",
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
  const faqs = [
    { question: "Combien coûte le rapatriement d'un corps de France au Maroc ?", answer: "Le coût varie selon la destination exacte au Maroc, le poids, et les options choisies. Contactez Al Hayaat pour un devis précis et gratuit. Dans certains cas, l'État marocain ou une assurance prend en charge tout ou partie des frais." },
    { question: "Quel aéroport marocain pour le rapatriement depuis Normandie ?", answer: "Selon la ville d'inhumation au Maroc, le corps est acheminé vers Casablanca-Mohammed V, Marrakech-Menara, Fès-Saïss ou d'autres aéroports. Al Hayaat réserve le fret aérien via la compagnie la plus adaptée." },
    { question: "Al Hayaat peut-il rapatrier depuis Le Havre vers n'importe quelle ville du Maroc ?", answer: "Oui. Depuis Le Havre et toute la Normandie, Al Hayaat organise le rapatriement vers toutes les villes du Maroc via l'aéroport CDG." }
  ];

  return (
    <div className="bg-[#F5F0E8] text-[#1A1A1A] min-h-screen font-inter">
      <SchemaOrg data={buildFuneralHomeSchema()} />
      <section className="relative w-full pt-28 pb-16 bg-[#0D1208] text-white">
        <div className="relative z-10 w-full max-w-[1280px] mx-auto px-8 md:px-12">
          <Breadcrumbs items={[{ label: "Rapatriement", href: "/rapatriement-corps" }, { label: "Maroc", href: "/rapatriement-corps-maroc" }]} />
          <h1 className="text-[2.2rem] md:text-[3rem] font-semibold leading-[1.1] tracking-[-0.02em] text-white mb-6 mt-6 max-w-[700px]">Rapatriement de Corps au Maroc — Al Hayaat Normandie & Paris</h1>
          <p className="text-[15px] font-light leading-[1.8] text-white/70 max-w-[640px]">
            Le Maroc est l'une des premières destinations de rapatriement funéraire depuis la France. Que le défunt soit originaire de Casablanca, Fès, Marrakech, Oujda ou d'une ville rurale, Al Hayaat organise le rapatriement complet depuis la Normandie (Le Havre, Rouen, Caen) et Paris, en prenant en charge toutes les formalités administratives, consulaires et logistiques. Notre équipe maîtrise les procédures du consulat du Maroc en France et les exigences aéroportuaires de Royal Air Maroc.
          </p>
        </div>
      </section>
      <section className="w-full bg-[#F5F0E8] py-20 md:py-28">
        <div className="w-full max-w-[1280px] mx-auto px-8 md:px-12">
          <div className="max-w-[780px]">
            
            <h2 className="text-[24px] md:text-[28px] font-semibold text-[#1A1A1A] mb-6">Prise en Charge par l'État Marocain</h2>
            <p className="text-[15px] font-light text-[#555] leading-[1.8] mb-8">
              L'État marocain peut prendre en charge financièrement le rapatriement des citoyens marocains décédés en France, sous conditions de ressources insuffisantes. Ce dispositif, géré par le Ministère des Affaires Étrangères marocain et les consulats, est accessible à de nombreuses familles. Al Hayaat vous accompagne dans la constitution du dossier et vérifie votre éligibilité dès le premier appel.
            </p>

            <h2 className="text-[24px] md:text-[28px] font-semibold text-[#1A1A1A] mb-6">Documents Requis pour le Rapatriement au Maroc</h2>
            <div className="p-6 bg-white border border-[#E8E2D9] rounded-[12px] mb-8">
              <ul className="flex flex-col gap-2">
                {[
                  "Nom, prénom, date, lieu et cause du décès", 
                  "Filiation complète du défunt", 
                  "CNIE ou passeport marocain du défunt", 
                  "Certificat de décès et certificat sanitaire de non-contagion", 
                  "Autorisation préfectorale de sortie du territoire", 
                  "Laissez-passer mortuaire du consulat du Maroc", 
                  "Coordonnées de la famille au Maroc", 
                  "Lieu d'inhumation prévu au Maroc",
                  "Justificatif de prise en charge financière (si demande de prise en charge consulaire)"
                ].map((d, i) => (
                  <li key={i} className="flex items-start gap-3 text-[14px] text-[#555] font-light">
                    <span className="text-[#2D6A2D]">✓</span>{d}
                  </li>
                ))}
              </ul>
            </div>

            <h2 className="text-[24px] md:text-[28px] font-semibold text-[#1A1A1A] mb-6">L'Assurance Rapatriement</h2>
            <p className="text-[15px] font-light text-[#555] leading-[1.8] mb-12">
              Pour éviter toute charge financière imprévue à la famille, Al Hayaat recommande vivement de souscrire une <Link href="/assurance-deces-musulmane" className="text-[#2D6A2D] font-medium hover:underline">assurance décès et rapatriement</Link> à l'avance. Contactez-nous pour plus d'informations sur nos contrats d'assurance conformes aux principes islamiques.
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
              <p className="text-[15px] font-medium mb-3">Organiser un rapatriement au Maroc</p>
              <Link href="/contact" className="inline-flex items-center gap-2 bg-[#2D6A2D] text-white px-5 py-3 rounded-[5px] text-[13.5px] font-medium hover:bg-[#255525] transition-colors">Nous contacter</Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
