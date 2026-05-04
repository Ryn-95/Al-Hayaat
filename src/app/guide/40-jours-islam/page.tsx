import type { Metadata } from "next";
import Link from "next/link";
import Breadcrumbs from "@/components/ui/Breadcrumbs";
import SchemaOrg from "@/components/ui/SchemaOrg";
import { buildArticleSchema } from "@/lib/seo-config";
export async function generateMetadata(): Promise<Metadata> {
  const url = "https://pompesfunebres-alhayaat.fr/guide/40-jours-islam";
  return {
    title: "Les 40 Jours en Islam après un Décès : Vrai ou Faux ?",
    description: "Que dit l'Islam sur les 40 jours après un décès ? Origine, pratiques, ce que le Coran dit vraiment.",
    keywords: ["40 jours islam",
    
    alternates: {
      canonical: url,
    },
    openGraph: {
      title: "Les 40 Jours en Islam après un Décès : Vrai ou Faux ?",
      description: "Que dit l'Islam sur les 40 jours après un décès ? Origine, pratiques, ce que le Coran dit vraiment.",
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
export default function Page() { return (<div className="bg-[#F5F0E8] text-[#1A1A1A] min-h-screen font-inter"><SchemaOrg data={buildArticleSchema({ headline: "Les 40 Jours après un Décès en Islam", datePublished: "2024-06-01" })} /><section className="relative w-full pt-28 pb-16 bg-[#0D1208] text-white"><div className="relative z-10 w-full max-w-[1280px] mx-auto px-8 md:px-12"><Breadcrumbs items={[{ label: "Guide", href: "/guide" }, { label: "40 Jours Islam", href: "/guide/40-jours-islam" }]} /><h1 className="text-[2.2rem] md:text-[3rem] font-semibold leading-[1.1] tracking-[-0.02em] text-white mb-6 mt-6 max-w-[700px]">Les 40 Jours après un Décès en Islam : Ce qu&apos;il Faut Savoir</h1></div></section><section className="w-full bg-[#F5F0E8] py-20 md:py-28"><div className="w-full max-w-[1280px] mx-auto px-8 md:px-12"><div className="max-w-[780px]">
  <h2 className="text-[24px] font-semibold text-[#1A1A1A] mb-6">Les 40 jours : une obligation islamique ?</h2>
  <p className="text-[15px] font-light text-[#555] leading-[1.8] mb-8">Non. La tradition des 40 jours de deuil (arbaïn) n&apos;a <strong>pas de fondement dans le Coran ni la Sunnah authentique</strong>. Le deuil prescrit en Islam est de 3 jours pour les proches, et de 4 mois et 10 jours pour la veuve (iddah). La pratique des 40 jours est une coutume culturelle, principalement observée dans certains pays du Maghreb et du Moyen-Orient.</p>
  <h2 className="text-[24px] font-semibold text-[#1A1A1A] mb-6">Origine de cette tradition</h2>
  <p className="text-[15px] font-light text-[#555] leading-[1.8] mb-8">La tradition des 40 jours trouve ses origines dans les cultures pré-islamiques et certaines traditions chrétiennes orientales. Elle s&apos;est intégrée aux pratiques culturelles de nombreuses communautés musulmanes sans pour autant avoir de base religieuse.</p>
  <h2 className="text-[24px] font-semibold text-[#1A1A1A] mb-6">Ce que dit l&apos;Islam</h2>
  <p className="text-[15px] font-light text-[#555] leading-[1.8] mb-4">L&apos;Islam prescrit :</p>
  <ul className="flex flex-col gap-2 mb-8">{["3 jours de deuil pour les proches (hadith authentique)", "4 mois et 10 jours de viduité pour la veuve (Coran 2:234)", "Réciter des douas pour le défunt à tout moment, sans limite de temps", "Faire des sadaqa (aumônes) en mémoire du défunt"].map((t,i)=>(<li key={i} className="flex items-start gap-3 text-[14.5px] text-[#555] font-light"><span className="w-1.5 h-1.5 rounded-full bg-[#2D6A2D] mt-2 shrink-0"/>{t}</li>))}</ul>
  <p className="text-[15px] font-light text-[#555] leading-[1.8]">En savoir plus : <Link href="/guide/deuil-islam" className="text-[#2D6A2D] font-medium hover:underline">Le deuil en Islam</Link> · <Link href="/guide/doua-deces-islam" className="text-[#2D6A2D] font-medium hover:underline">Douas pour le mort</Link></p>
</div></div></section></div>); }
