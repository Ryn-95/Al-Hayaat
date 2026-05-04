import type { Metadata } from "next";
import Link from "next/link";
import Breadcrumbs from "@/components/ui/Breadcrumbs";

export async function generateMetadata(): Promise<Metadata> {
  const url = "https://pompesfunebres-alhayaat.fr/assurance-deces-musulmane";
  return {
    title: "Assurance Décès Musulmane — Conforme à l'Islam | Al Hayaat",
    description: "Préparez les obsèques et le rapatriement de vos proches avec une assurance décès conforme aux principes islamiques. Al Hayaat vous conseille. Devis gratuit.",
    keywords: ["assurance décès musulmane", "assurance obseques islam", "prevoyance funeraire musulmane", "assurance rapatriement corps", "assurance al hayat"],
    
    alternates: {
      canonical: url,
    },
    openGraph: {
      title: "Assurance Décès Musulmane — Conforme à l'Islam | Al Hayaat",
      description: "Préparez les obsèques et le rapatriement de vos proches avec une assurance décès conforme aux principes islamiques. Al Hayaat vous conseille. Devis gratuit.",
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

export default function AssuranceDecesPage() {
  const faqs = [
    { question: "L'assurance décès est-elle halal ?", answer: "Cela dépend du contrat. Les assurances conventionnelles peuvent contenir du riba. Il existe des contrats takaful ou des fonds d'obsèques participatifs conformes à la Charia. Consultez un savant ou contactez Al Hayaat pour être orienté." },
    { question: "Peut-on souscrire une assurance qui couvre le rapatriement ?", answer: "Oui. Certains contrats couvrent à la fois les frais d'obsèques en France et le rapatriement vers le pays d'origine. Al Hayaat vous conseille sur les meilleures options." }
  ];

  return (
    <div className="bg-[#F5F0E8] text-[#1A1A1A] min-h-screen font-inter">
      <section className="relative w-full pt-28 pb-16 bg-[#0D1208] text-white">
        <div className="relative z-10 w-full max-w-[1280px] mx-auto px-8 md:px-12">
          <Breadcrumbs items={[{ label: "Services", href: "#" }, { label: "Assurance Décès", href: "/assurance-deces-musulmane" }]} />
          <h1 className="text-[2.2rem] md:text-[3rem] font-semibold leading-[1.1] tracking-[-0.02em] text-white mb-6 mt-6 max-w-[700px]">Assurance Décès Musulmane — Protégez Votre Famille</h1>
          <p className="text-[15px] font-light leading-[1.8] text-white/70 max-w-[640px]">
            La mort est une certitude. Préparer les obsèques à l'avance est une marque de sagesse et un geste d'amour envers sa famille. L'assurance décès islamique — ou contrat d'obsèques — permet de financer les frais funéraires et le rapatriement éventuel sans peser sur les proches en deuil. Al Hayaat vous conseille sur les options disponibles conformes aux principes islamiques, c'est-à-dire sans intérêt (riba) ni spéculation.
          </p>
        </div>
      </section>
      <section className="w-full bg-[#F5F0E8] py-20 md:py-28">
        <div className="w-full max-w-[1280px] mx-auto px-8 md:px-12">
          <div className="max-w-[780px]">
            <h2 className="text-[24px] md:text-[28px] font-semibold text-[#1A1A1A] mb-6">Pourquoi Souscrire une Assurance Décès ?</h2>
            <p className="text-[15px] font-light text-[#555] leading-[1.8] mb-8">
              Un rapatriement de corps vers l'Algérie, le Maroc ou la Tunisie peut coûter entre 3 000 € et 8 000 €. Des obsèques complètes en France représentent entre 1 500 € et 4 000 €. Sans préparation, cette charge financière tombe sur des épaules déjà meurtries par le deuil. Une assurance décès garantit que vos volontés sont respectées et que votre famille ne subit aucune contrainte financière au pire moment.
            </p>

            <h2 className="text-[24px] md:text-[28px] font-semibold text-[#1A1A1A] mb-6">Ce que Couvre un Contrat d'Obsèques Islamique</h2>
            <div className="p-6 bg-white border border-[#E8E2D9] rounded-[12px] mb-8">
              <ul className="flex flex-col gap-2">
                {[
                  "Frais d'obsèques complets (toilette rituelle, kafan, cercueil, Salat al-Janaza, inhumation)",
                  "Frais de rapatriement vers le pays d'origine",
                  "Transport du corps en France",
                  "Démarches administratives",
                  "Capital décès versé à la famille"
                ].map((d, i) => (
                  <li key={i} className="flex items-start gap-3 text-[14px] text-[#555] font-light">
                    <span className="text-[#2D6A2D]">✓</span>{d}
                  </li>
                ))}
              </ul>
            </div>

            <h2 className="text-[24px] md:text-[28px] font-semibold text-[#1A1A1A] mb-6">L'Assurance et les Principes Islamiques</h2>
            <p className="text-[15px] font-light text-[#555] leading-[1.8] mb-12">
              L'assurance conventionnelle est contestée par certains savants pour la présence de riba (intérêt) et de gharar (incertitude spéculative). Il existe des alternatives conformes à la Charia : les contrats takaful (assurance mutuelle participative) et les fonds d'obsèques sans intérêt. Al Hayaat vous oriente vers les solutions adaptées à votre situation et respectueuses de vos convictions.
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

            <Link href="/contact" className="inline-flex items-center gap-2 bg-[#2D6A2D] text-white px-5 py-3 rounded-[5px] text-[13.5px] font-medium hover:bg-[#255525] transition-colors">Nous contacter pour en savoir plus</Link>
          </div>
        </div>
      </section>
    </div>
  );
}
