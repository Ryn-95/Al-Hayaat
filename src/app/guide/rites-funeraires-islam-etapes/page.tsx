import type { Metadata } from "next";
import Link from "next/link";
import Breadcrumbs from "@/components/ui/Breadcrumbs";
import SchemaOrg from "@/components/ui/SchemaOrg";
import { buildArticleSchema, buildFAQSchema } from "@/lib/seo-config";
export async function generateMetadata(): Promise<Metadata> {
  const url = "https://pompesfunebres-alhayaat.fr/guide/rites-funeraires-islam-etapes";
  return {
    title: "Rites Funéraires Islamiques — De la Mort à l'Inhumation | Al Hayaat",
    description: "Les étapes des rites funéraires islamiques : toilette rituelle (Ghusl), kafan, Salat al-Janaza, inhumation. Guide complet avec références coraniques et hadith.",
    keywords: ["rites funéraires islamiques"],
    
    alternates: {
      canonical: url,
    },
    openGraph: {
      title: "Les Rites Funéraires Islamiques : De la Mort à l'Inhumation",
      description: "Toutes les étapes des funérailles musulmanes : annonce du décès, toilette rituelle, linceul, prière Janaza, inhumation.",
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

const faqs = [
  { question: "Peut-on faire tous ces rites en France ?", answer: "Oui. Al Hayaat accomplit tous les rites islamiques en Normandie et à Paris, dans le respect du cadre légal français." },
  { question: "Combien de temps prend l'ensemble des rites ?", answer: "De la prise en charge à l'inhumation, l'ensemble des rites peut être accompli en 24 à 48 heures. Al Hayaat veille à la rapidité, conformément à la Sunnah." }
];

export default function Page() { return (<div className="bg-[#F5F0E8] text-[#1A1A1A] min-h-screen font-inter"><SchemaOrg data={buildArticleSchema({ headline: "Les Rites Funéraires Islamiques : Étapes Complètes", datePublished: "2024-06-15" })} /><section className="relative w-full pt-28 pb-16 bg-[#0D1208] text-white"><div className="relative z-10 w-full max-w-[1280px] mx-auto px-8 md:px-12"><Breadcrumbs items={[{ label: "Guide", href: "/guide" }, { label: "Rites Funéraires", href: "/guide/rites-funeraires-islam-etapes" }]} /><h1 className="text-[2.2rem] md:text-[3rem] font-semibold leading-[1.1] tracking-[-0.02em] text-white mb-6 mt-6 max-w-[700px]">Les Rites Funéraires Islamiques — De la Mort à l'Inhumation</h1></div></section><section className="w-full bg-[#F5F0E8] py-20 md:py-28"><div className="w-full max-w-[1280px] mx-auto px-8 md:px-12"><div className="max-w-[780px]">
    <p className="text-[15px] font-light text-[#555] leading-[1.8] mb-8">L'Islam encadre précisément les rites funéraires, du moment du décès à la mise en terre. Ces rites, fondés sur le Coran et la Sunnah, ont pour objectif d'honorer le défunt, de soutenir la famille et de préparer l'âme à sa rencontre avec Allah.</p>

  <h2 className="text-[24px] font-semibold text-[#1A1A1A] mb-6">1. À l'Agonie (Al-Ihtidhar)</h2>
  <p className="text-[15px] font-light text-[#555] leading-[1.8] mb-4">Lorsqu'un musulman est à l'agonie, il est recommandé de :</p>
  <ul className="flex flex-col gap-2 mb-8">{["Réciter la Shahada devant lui (sans le forcer)", "Orienter son corps vers la Qibla (couché sur le côté droit)", "Réciter Sourate Yassin (36) à voix douce", "Fermer ses yeux après le décès et faire des douas"].map((t,i)=>(<li key={i} className="flex items-start gap-3 text-[14.5px] text-[#555] font-light"><span className="w-1.5 h-1.5 rounded-full bg-[#2D6A2D] mt-2 shrink-0"/>{t}</li>))}</ul>

  <h2 className="text-[24px] font-semibold text-[#1A1A1A] mb-6">2. La Toilette Rituelle (Ghusl al-Mayyit)</h2>
  <p className="text-[15px] font-light text-[#555] leading-[1.8] mb-8">Obligation collective (fard kifaya). Le corps est lavé un nombre impair de fois (3, 5 ou 7) par des personnes du même sexe. Eau + jujubier (sidr) pour les premiers lavages, eau pure + camphre pour le dernier.</p>

  <h2 className="text-[24px] font-semibold text-[#1A1A1A] mb-6">3. La Mise en Kafan</h2>
  <p className="text-[15px] font-light text-[#555] leading-[1.8] mb-8">Le corps est enveloppé dans le linceul blanc : 3 pièces pour l'homme, 5 pour la femme. Le kafan est simple, non cousu, en coton ou lin.</p>

  <h2 className="text-[24px] font-semibold text-[#1A1A1A] mb-6">4. La Salat al-Janaza</h2>
  <p className="text-[15px] font-light text-[#555] leading-[1.8] mb-8">Prière funèbre en 4 Takbir, sans prosternation. L'imam devant le cercueil, les fidèles en rangées derrière lui. C'est une obligation communautaire.</p>

  <h2 className="text-[24px] font-semibold text-[#1A1A1A] mb-6">5. L'Inhumation</h2>
  <p className="text-[15px] font-light text-[#555] leading-[1.8] mb-8">Le corps est mis en terre dans les meilleurs délais. En France, le cercueil est obligatoire. Le défunt est orienté vers la Qibla. Les présents jettent de la terre et récitent des douas.</p>

  <h2 className="text-[24px] font-semibold text-[#1A1A1A] mb-6">Questions fréquentes sur les rites</h2>
  <div className="flex flex-col gap-4 mb-10">
    {faqs.map((faq, i) => (
      <div key={i} className="p-6 bg-white border border-[#E8E2D9] rounded-[12px]">
        <h3 className="text-[16px] font-semibold text-[#1A1A1A] mb-3">{faq.question}</h3>
        <p className="text-[14.5px] font-light text-[#555] leading-[1.7]">{faq.answer}</p>
      </div>
    ))}
  </div>
</div></div></section></div>); }
