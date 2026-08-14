import SchemaOrg from "@/components/ui/SchemaOrg";
import { buildArticleSchema, buildFAQSchema } from "@/lib/seo-config";
import type { Metadata } from "next";
import Link from "next/link";
import Breadcrumbs from "@/components/ui/Breadcrumbs";
export async function generateMetadata(): Promise<Metadata> {
  const url = "https://www.pompesfunebres-alhayaat.fr/guide/prix-obseques-musulmanes";
  return {
    title: "Prix des Obsèques Musulmanes en France 2025 | Al Hayaat",
    description: "Combien coûtent des obsèques musulmanes en France ? Forfait inhumation, rapatriement Algérie/Maroc, toilette rituelle. Tarifs transparents Al Hayaat. Devis gratuit.",
    keywords: ["prix obsèques musulmanes"],
    
    alternates: {
      canonical: url,
    },
    openGraph: {
      title: "Prix des Obsèques Musulmanes en France — Guide 2024",
      description: "Combien coûtent des obsèques musulmanes en France ? Tarifs détaillés.",
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

const faqs = [
  { question: "Al Hayaat propose-t-il des facilités de paiement ?", answer: "Contactez-nous pour discuter de votre situation. Al Hayaat cherche toujours une solution pour que le défunt puisse être inhumé dignement, quelle que soit la situation financière de la famille." },
  { question: "Le consulat peut-il vraiment payer le rapatriement ?", answer: "Oui. Le consulat d'Algérie et le gouvernement marocain disposent de fonds de solidarité pour les ressortissants décédés en France. Al Hayaat vous aide à constituer ce dossier gratuitement." }
];

export default function Page() { return (<div className="bg-[#F5F0E8] text-[#1A1A1A] min-h-screen font-inter"><SchemaOrg data={[buildArticleSchema({ headline: "Prix des Obsèques Musulmanes — Tarifs Transparents", datePublished: "2024-01-01" }), buildFAQSchema(faqs)]} /><section className="relative w-full pt-28 pb-16 bg-[#0D1208] text-white"><div className="relative z-10 w-full max-w-[1280px] mx-auto px-8 md:px-12"><Breadcrumbs items={[{ label: "Guide", href: "/guide" }, { label: "Prix", href: "/guide/prix-obseques-musulmanes" }]} /><h1 className="text-[2.2rem] md:text-[3rem] font-semibold leading-[1.1] tracking-[-0.02em] text-white mb-6 mt-6 max-w-[700px]">Prix des Obsèques Musulmanes — Tarifs Transparents</h1></div></section><section className="w-full bg-[#F5F0E8] py-20"><div className="w-full max-w-[1280px] mx-auto px-8 md:px-12"><div className="max-w-[780px]">
    <p className="text-[15px] font-light text-[#555] leading-[1.8] mb-8">Le coût des obsèques est souvent une préoccupation douloureuse pour les familles en deuil. Al Hayaat s'engage à une transparence totale sur ses tarifs et à proposer des forfaits accessibles, conformément à l'esprit de solidarité islamique. Voici une estimation des coûts en 2025.</p>

  <h2 className="text-[24px] font-semibold text-[#1A1A1A] mb-6">Obsèques Complètes en France</h2>
  <div className="overflow-x-auto mb-8">
    <table className="w-full text-left border-collapse">
      <thead>
        <tr className="bg-[#E8E2D9] text-[#1A1A1A] text-[14px]">
          <th className="p-3 border border-[#D1C9BC] font-medium">Prestation</th>
          <th className="p-3 border border-[#D1C9BC] font-medium">Fourchette de prix</th>
        </tr>
      </thead>
      <tbody>
        {[
          ["Forfait obsèques complet (Ghusl + kafan + cercueil + Salat + inhumation)", "Sur devis"],
          ["Toilette rituelle (Ghusl) seule", "Sur devis"],
          ["Cercueil bois naturel", "Sur devis"],
          ["Concession cimetière (30 ans)", "Selon les tarifs de la commune"],
          ["Transport du corps", "Sur devis (selon la distance)"],
          ["Démarches administratives", "Incluses dans le forfait Al Hayaat"]
        ].map((row, i) => (
          <tr key={i} className="text-[14px] text-[#555] font-light bg-white">
            <td className="p-3 border border-[#E8E2D9]">{row[0]}</td>
            <td className="p-3 border border-[#E8E2D9]">{row[1]}</td>
          </tr>
        ))}
      </tbody>
    </table>
  </div>

  <h2 className="text-[24px] font-semibold text-[#1A1A1A] mb-6">Rapatriement de Corps — Estimation des Coûts</h2>
  <div className="overflow-x-auto mb-6">
    <table className="w-full text-left border-collapse">
      <thead>
        <tr className="bg-[#E8E2D9] text-[#1A1A1A] text-[14px]">
          <th className="p-3 border border-[#D1C9BC] font-medium">Destination</th>
          <th className="p-3 border border-[#D1C9BC] font-medium">Fourchette de prix</th>
        </tr>
      </thead>
      <tbody>
        {[
          ["Rapatriement Algérie", "Sur devis"],
          ["Rapatriement Maroc", "Sur devis"],
          ["Rapatriement Tunisie", "Sur devis"],
          ["Rapatriement Mali/Sénégal", "Sur devis"]
        ].map((row, i) => (
          <tr key={i} className="text-[14px] text-[#555] font-light bg-white">
            <td className="p-3 border border-[#E8E2D9]">{row[0]}</td>
            <td className="p-3 border border-[#E8E2D9]">{row[1]}</td>
          </tr>
        ))}
      </tbody>
    </table>
  </div>
  <p className="text-[14px] font-light text-[#888] leading-[1.8] mb-8 italic">Note importante : Ces tarifs peuvent être partiellement ou totalement pris en charge par le consulat du pays d'origine (fonds de solidarité algérien, prise en charge marocaine), une assurance décès, ou la CPAM dans certains cas.</p>

  <h2 className="text-[24px] font-semibold text-[#1A1A1A] mb-6">Comment Réduire les Coûts des Obsèques Musulmanes</h2>
  <ul className="flex flex-col gap-2 mb-8">{["Vérifier l'éligibilité au fonds de solidarité consulaire (Algérie, Maroc)", "Activer une assurance décès si elle existe", "Demander la prise en charge par la CPAM (capital décès si le défunt était salarié)", "Anticiper avec un contrat d'obsèques à l'avance"].map((t,i)=>(<li key={i} className="flex items-start gap-3 text-[14.5px] text-[#555] font-light"><span className="w-1.5 h-1.5 rounded-full bg-[#2D6A2D] mt-2 shrink-0"/>{t}</li>))}</ul>

  <h2 className="text-[24px] font-semibold text-[#1A1A1A] mb-6">Questions fréquentes</h2>
  <div className="flex flex-col gap-4 mb-10">
    {faqs.map((faq, i) => (
      <div key={i} className="p-6 bg-white border border-[#E8E2D9] rounded-[12px]">
        <h3 className="text-[16px] font-semibold text-[#1A1A1A] mb-3">{faq.question}</h3>
        <p className="text-[14.5px] font-light text-[#555] leading-[1.7]">{faq.answer}</p>
      </div>
    ))}
  </div>
</div></div></section></div>); }
