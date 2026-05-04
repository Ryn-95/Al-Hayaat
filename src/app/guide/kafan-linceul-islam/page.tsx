import type { Metadata } from "next";
import Link from "next/link";
import Breadcrumbs from "@/components/ui/Breadcrumbs";
import SchemaOrg from "@/components/ui/SchemaOrg";
import { buildArticleSchema } from "@/lib/seo-config";
export async function generateMetadata(): Promise<Metadata> {
  const url = "https://pompesfunebres-alhayaat.fr/guide/kafan-linceul-islam";
  return {
    title: "Le Kafan (Linceul) en Islam : Règles, Mise en Place et Signification",
    description: "Tout savoir sur le kafan : le linceul blanc islamique. Règles, différences homme/femme, mise en place.",
    keywords: ["kafan islam",
    
    alternates: {
      canonical: url,
    },
    openGraph: {
      title: "Le Kafan (Linceul) en Islam : Règles, Mise en Place et Signification",
      description: "Tout savoir sur le kafan : le linceul blanc islamique. Règles, différences homme/femme, mise en place.",
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
export default function Page() { return (<div className="bg-[#F5F0E8] text-[#1A1A1A] min-h-screen font-inter"><SchemaOrg data={buildArticleSchema({ headline: "Le Kafan : Le Linceul Islamique", datePublished: "2024-04-01" })} /><section className="relative w-full pt-28 pb-16 bg-[#0D1208] text-white"><div className="relative z-10 w-full max-w-[1280px] mx-auto px-8 md:px-12"><Breadcrumbs items={[{ label: "Guide", href: "/guide" }, { label: "Kafan / Linceul", href: "/guide/kafan-linceul-islam" }]} /><h1 className="text-[2.2rem] md:text-[3rem] font-semibold leading-[1.1] tracking-[-0.02em] text-white mb-6 mt-6 max-w-[700px]">Le Kafan : Le Linceul Islamique</h1></div></section><section className="w-full bg-[#F5F0E8] py-20 md:py-28"><div className="w-full max-w-[1280px] mx-auto px-8 md:px-12"><div className="max-w-[780px]">
  <h2 className="text-[24px] font-semibold text-[#1A1A1A] mb-6">Qu&apos;est-ce que le Kafan ?</h2>
  <p className="text-[15px] font-light text-[#555] leading-[1.8] mb-8">Le kafan (كفن) est le linceul blanc dans lequel le défunt musulman est enveloppé après la <Link href="/toilette-rituelle-musulmane" className="text-[#2D6A2D] font-medium hover:underline">toilette rituelle (ghusl)</Link>. Il symbolise l&apos;égalité de tous les êtres humains devant Allah et la simplicité de la vie terrestre.</p>
  <h2 className="text-[24px] font-semibold text-[#1A1A1A] mb-6">Le kafan pour un homme</h2>
  <p className="text-[15px] font-light text-[#555] leading-[1.8] mb-4">3 pièces de tissu blanc :</p>
  <ul className="flex flex-col gap-2 mb-8">{["Izar (pièce inférieure couvrant le corps)", "Qamis (chemise)", "Lifafa (pièce enveloppante)"].map((t,i)=>(<li key={i} className="flex items-start gap-3 text-[14.5px] text-[#555] font-light"><span className="w-1.5 h-1.5 rounded-full bg-[#2D6A2D] mt-2 shrink-0"/>{t}</li>))}</ul>
  <h2 className="text-[24px] font-semibold text-[#1A1A1A] mb-6">Le kafan pour une femme</h2>
  <p className="text-[15px] font-light text-[#555] leading-[1.8] mb-4">5 pièces de tissu blanc : les 3 pièces de l&apos;homme + un voile (khimar) et une ceinture (hizam).</p>
  <p className="text-[15px] font-light text-[#555] leading-[1.8] mt-8">Le kafan est préparé lors de la <Link href="/guide/lavage-mortuaire-islam" className="text-[#2D6A2D] font-medium hover:underline">toilette mortuaire</Link>, puis le défunt est placé dans le <Link href="/cercueil-musulman" className="text-[#2D6A2D] font-medium hover:underline">cercueil musulman</Link>.</p>
</div></div></section></div>); }
