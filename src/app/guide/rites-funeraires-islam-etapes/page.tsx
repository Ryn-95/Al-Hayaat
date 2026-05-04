import type { Metadata } from "next";
import Link from "next/link";
import Breadcrumbs from "@/components/ui/Breadcrumbs";
import SchemaOrg from "@/components/ui/SchemaOrg";
import { buildArticleSchema } from "@/lib/seo-config";
export async function generateMetadata(): Promise<Metadata> {
  const url = "https://pompesfunebres-alhayaat.fr/guide/rites-funeraires-islam-etapes";
  return {
    title: "Les Rites Funéraires Islamiques : De la Mort à l'Inhumation",
    description: "Toutes les étapes des funérailles musulmanes : annonce du décès, toilette rituelle, linceul, prière Janaza, inhumation.",
    keywords: ["rites funéraires islamiques",
    
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
export default function Page() { return (<div className="bg-[#F5F0E8] text-[#1A1A1A] min-h-screen font-inter"><SchemaOrg data={buildArticleSchema({ headline: "Les Rites Funéraires Islamiques : Étapes Complètes", datePublished: "2024-06-15" })} /><section className="relative w-full pt-28 pb-16 bg-[#0D1208] text-white"><div className="relative z-10 w-full max-w-[1280px] mx-auto px-8 md:px-12"><Breadcrumbs items={[{ label: "Guide", href: "/guide" }, { label: "Rites Funéraires", href: "/guide/rites-funeraires-islam-etapes" }]} /><h1 className="text-[2.2rem] md:text-[3rem] font-semibold leading-[1.1] tracking-[-0.02em] text-white mb-6 mt-6 max-w-[700px]">Les Rites Funéraires Islamiques : Étapes Complètes</h1></div></section><section className="w-full bg-[#F5F0E8] py-20 md:py-28"><div className="w-full max-w-[1280px] mx-auto px-8 md:px-12"><div className="max-w-[780px]">
  {[
    { n: "1", t: "Annonce du décès", d: "Réciter « Inna lillahi wa inna ilayhi raji'oun ». Contacter immédiatement les pompes funèbres musulmanes.", href: "" },
    { n: "2", t: "Toilette rituelle (Ghusl)", d: "Lavage du corps selon la Sunnah par des personnes du même sexe.", href: "/toilette-rituelle-musulmane" },
    { n: "3", t: "Enveloppement dans le Kafan", d: "Le défunt est enveloppé dans le linceul blanc.", href: "/guide/kafan-linceul-islam" },
    { n: "4", t: "Salat al-Janaza", d: "La prière funèbre est accomplie avec 4 Takbir.", href: "/salat-al-janaza" },
    { n: "5", t: "Transport et cortège", d: "Le défunt est transporté au cimetière.", href: "" },
    { n: "6", t: "Inhumation", d: "Le corps est orienté vers la Qibla dans le carré musulman.", href: "/inhumation-carre-musulman" },
  ].map((step) => (<div key={step.n} className="flex gap-4 items-start mb-6"><div className="w-10 h-10 rounded-full bg-[#2D6A2D] flex items-center justify-center shrink-0"><span className="text-[14px] font-bold text-white">{step.n}</span></div><div><h2 className="text-[18px] font-semibold text-[#1A1A1A] mb-1">{step.href ? <Link href={step.href} className="hover:text-[#2D6A2D] transition-colors">{step.t}</Link> : step.t}</h2><p className="text-[14.5px] font-light text-[#666] leading-[1.7]">{step.d}</p></div></div>))}
  <p className="text-[15px] font-light text-[#555] leading-[1.8] mt-8">Al Hayat prend en charge l&apos;ensemble de ces étapes en <Link href="/normandie" className="text-[#2D6A2D] font-medium hover:underline">Normandie</Link> et à <Link href="/paris-ile-de-france" className="text-[#2D6A2D] font-medium hover:underline">Paris</Link>. <Link href="/contact" className="text-[#2D6A2D] font-medium hover:underline">Contactez-nous</Link>.</p>
</div></div></section></div>); }
