import type { Metadata } from "next";
import Link from "next/link";
import Breadcrumbs from "@/components/ui/Breadcrumbs";
import SchemaOrg from "@/components/ui/SchemaOrg";
import { buildArticleSchema } from "@/lib/seo-config";
export async function generateMetadata(): Promise<Metadata> {
  const url = "https://pompesfunebres-alhayaat.fr/guide/invocations-cimetiere-islam";
  return {
    title: "Invocations au Cimetière en Islam — Douas devant la Tombe | Al Hayaat",
    description: "Quelles douas réciter lors d'une visite au cimetière en Islam ? Salutation des morts, invocations devant la tombe. Texte arabe, phonétique et traduction.",
    keywords: ["invocations cimetière islam"],
    
    alternates: {
      canonical: url,
    },
    openGraph: {
      title: "Invocations au Cimetière en Islam : Douas à Réciter Devant une Tombe",
      description: "Que dire lors d'une visite au cimetière en Islam ? Invocations en arabe, phonétique et traduction.",
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
export default function Page() { return (<div className="bg-[#F5F0E8] text-[#1A1A1A] min-h-screen font-inter"><SchemaOrg data={buildArticleSchema({ headline: "Invocations à Réciter au Cimetière en Islam", datePublished: "2024-05-01" })} /><section className="relative w-full pt-28 pb-16 bg-[#0D1208] text-white"><div className="relative z-10 w-full max-w-[1280px] mx-auto px-8 md:px-12"><Breadcrumbs items={[{ label: "Guide", href: "/guide" }, { label: "Invocations Cimetière", href: "/guide/invocations-cimetiere-islam" }]} /><h1 className="text-[2.2rem] md:text-[3rem] font-semibold leading-[1.1] tracking-[-0.02em] text-white mb-6 mt-6 max-w-[700px]">Invocations au Cimetière — Ce que le Prophète ﷺ nous a Enseigné</h1></div></section><section className="w-full bg-[#F5F0E8] py-20 md:py-28"><div className="w-full max-w-[1280px] mx-auto px-8 md:px-12"><div className="max-w-[780px]">
    <p className="text-[15px] font-light text-[#555] leading-[1.8] mb-8">La visite au cimetière est une pratique recommandée (mustahabb) en Islam. Le Prophète ﷺ l'encourageait : « Visitez les tombes, car elles vous rappellent la mort » (Sahih Muslim, n°976). Ces visites permettent également de faire des douas pour les défunts et de renforcer notre propre foi.</p>

  <h2 className="text-[24px] font-semibold text-[#1A1A1A] mb-6">Doua en entrant au cimetière</h2>
  <div className="p-6 bg-white border border-[#E8E2D9] rounded-[12px] mb-6"><p className="text-[22px] text-right font-light text-[#1A1A1A] mb-3 leading-[2]" dir="rtl">السَّلاَمُ عَلَيْكُمْ أَهْلَ الدِّيَارِ مِنَ المُؤْمِنِينَ وَالمُسْلِمِينَ، وَإِنَّا إِنْ شَاءَ اللَّهُ بِكُمْ لَلاَحِقُونَ</p><p className="text-[14px] text-[#7A5C3A] font-medium mb-2">Assalamou &apos;alaykoum ahla-d-diyari minal mou&apos;minina wal mouslimin, wa inna in sha&apos;a Allahu bikoum lalahiqoun</p><p className="text-[14px] text-[#555] font-light">« Que la paix soit sur vous, habitants de ces demeures, parmi les croyants et les musulmans. Et certes, si Allah le veut, nous vous rejoindrons. »</p></div>
  <h2 className="text-[24px] font-semibold text-[#1A1A1A] mb-6">Doua devant la tombe</h2>
  <p className="text-[15px] font-light text-[#555] leading-[1.8] mb-4">Il est recommandé de réciter la Fatiha, les <Link href="/guide/doua-deces-islam" className="text-[#2D6A2D] font-medium hover:underline">douas pour le défunt</Link> et de demander à Allah Son pardon et Sa miséricorde pour le mort.</p>
  
  <h2 className="text-[24px] font-semibold text-[#1A1A1A] mb-6">La Conduite au Cimetière</h2>
  <ul className="flex flex-col gap-2 mb-8">{["Entrer du pied droit en disant la salutation des morts", "Rester calme et recueilli", "Ne pas s'asseoir sur les tombes ni marcher dessus", "Ne pas fleurir excessivement (sobriété recommandée)", "Réciter des douas à voix basse", "Rappeler à ceux qui vous accompagnent la mort et l'au-delà"].map((t,i)=>(<li key={i} className="flex items-start gap-3 text-[14.5px] text-[#555] font-light"><span className="w-1.5 h-1.5 rounded-full bg-[#2D6A2D] mt-2 shrink-0"/>{t}</li>))}</ul>
  
  <h2 className="text-[24px] font-semibold text-[#1A1A1A] mb-6">La Visite du Cimetière pour les Femmes</h2>
  <p className="text-[15px] font-light text-[#555] leading-[1.8] mb-8">Il n'y a pas de consensus sur la question. La majorité des savants contemporains autorisent les visites occasionnelles au cimetière pour les femmes, à condition qu'elles soient sobrement vêtues et qu'elles n'y restent pas longtemps. Les lamentations excessives lors des visites sont déconseillées.</p>
</div></div></section></div>); }
