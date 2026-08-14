import type { Metadata } from "next";
import Link from "next/link";
import Breadcrumbs from "@/components/ui/Breadcrumbs";
import SchemaOrg from "@/components/ui/SchemaOrg";
import { buildArticleSchema, buildFAQSchema } from "@/lib/seo-config";
export async function generateMetadata(): Promise<Metadata> {
  const url = "https://www.pompesfunebres-alhayaat.fr/guide/kafan-linceul-islam";
  return {
    title: "Le Kafan — Linceul Islamique : Règles et Mise en Place | Al Hayaat",
    description: "Tout savoir sur le kafan en Islam : nombre de pièces pour l'homme et la femme, type de tissu, mise en place. Guide complet avec références hadith.",
    keywords: ["kafan islam"],
    
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
  { question: "Peut-on utiliser un tissu coloré pour le kafan ?", answer: "Le blanc est fortement recommandé (Sunnah). Un tissu d'une autre couleur est toléré par certains savants mais déconseillé." },
  { question: "Le kafan doit-il être cousu ?", answer: "Non. Le kafan traditionnel est simplement noué aux extrémités, sans couture. Certaines pratiques culturelles cousent le kafan, ce qui n'est ni obligatoire ni interdit selon les savants." }
];

export default function Page() { return (<div className="bg-[#F5F0E8] text-[#1A1A1A] min-h-screen font-inter"><SchemaOrg data={buildArticleSchema({ headline: "Le Kafan : Le Linceul Islamique", datePublished: "2024-04-01" })} /><section className="relative w-full pt-28 pb-16 bg-[#0D1208] text-white"><div className="relative z-10 w-full max-w-[1280px] mx-auto px-8 md:px-12"><Breadcrumbs items={[{ label: "Guide", href: "/guide" }, { label: "Kafan / Linceul", href: "/guide/kafan-linceul-islam" }]} /><h1 className="text-[2.2rem] md:text-[3rem] font-semibold leading-[1.1] tracking-[-0.02em] text-white mb-6 mt-6 max-w-[700px]">Le Kafan (Linceul Islamique) — Règles et Signification</h1></div></section><section className="w-full bg-[#F5F0E8] py-20 md:py-28"><div className="w-full max-w-[1280px] mx-auto px-8 md:px-12"><div className="max-w-[780px]">
    <p className="text-[15px] font-light text-[#555] leading-[1.8] mb-8">Le kafan (كَفَن) est le linceul dans lequel le défunt est enveloppé après la toilette rituelle. C'est le dernier vêtement du croyant — un symbole de l'égalité devant la mort et de la simplicité que l'Islam prône face à la finitude humaine.</p>
  
  <h2 className="text-[24px] font-semibold text-[#1A1A1A] mb-6">Les Prescriptions du Prophète ﷺ sur le Kafan</h2>
  <p className="text-[15px] font-light text-[#555] leading-[1.8] mb-8">Le Prophète ﷺ a dit : « Si l'un d'entre vous prépare le linceul de son frère, qu'il le fasse beau » (Sahih Muslim, n°943). Et il a dit aussi : « Habillez vos morts de blanc, car c'est le meilleur de vos vêtements » (Sunan Abu Dawud, n°3148). Le kafan doit donc être blanc, propre, simple, sans ornement ni couture excessive.</p>
  
  <h2 className="text-[24px] font-semibold text-[#1A1A1A] mb-6">Le Nombre de Pièces selon le Sexe</h2>
  <p className="text-[16px] font-medium text-[#1A1A1A] mb-3">Pour un homme (3 pièces) :</p>
  <ul className="flex flex-col gap-2 mb-6">{["Le lifafa (لِفَافَة) — grande pièce enveloppant tout le corps", "Le izar (إِزَار) — pièce du milieu de la tête aux pieds", "La chemise (qamis) ou pièce du buste"].map((t,i)=>(<li key={i} className="flex items-start gap-3 text-[14.5px] text-[#555] font-light"><span className="w-1.5 h-1.5 rounded-full bg-[#2D6A2D] mt-2 shrink-0"/>{t}</li>))}</ul>
  
  <p className="text-[16px] font-medium text-[#1A1A1A] mb-3">Pour une femme (5 pièces) :</p>
  <ul className="flex flex-col gap-2 mb-8">{["Le lifafa — grande pièce enveloppant tout le corps", "Le izar — pièce centrale", "Le qamis — chemise", "Le khimar (خِمَار) — voile couvrant la tête", "Le khirqa — pièce supplémentaire couvrant le buste"].map((t,i)=>(<li key={i} className="flex items-start gap-3 text-[14.5px] text-[#555] font-light"><span className="w-1.5 h-1.5 rounded-full bg-[#2D6A2D] mt-2 shrink-0"/>{t}</li>))}</ul>
  
  <h2 className="text-[24px] font-semibold text-[#1A1A1A] mb-6">Le Tissu du Kafan</h2>
  <p className="text-[15px] font-light text-[#555] leading-[1.8] mb-8">Le kafan doit être en tissu naturel — coton ou lin de préférence. La soie est interdite pour les hommes (comme pendant la vie). Le tissu doit être blanc, non imprimé, et suffisamment épais pour ne pas être transparent. Al Hayaat fournit des kafans conformes à ces prescriptions.</p>
  
  <h2 className="text-[24px] font-semibold text-[#1A1A1A] mb-6">Le Kafan et la Loi Française</h2>
  <p className="text-[15px] font-light text-[#555] leading-[1.8] mb-8">En France, la loi impose l'utilisation d'un cercueil pour l'inhumation. Le kafan est donc placé à l'intérieur du cercueil, conformément à la Sunnah et à la réglementation française. Al Hayaat s'assure que les deux exigences sont respectées.</p>

  <h2 className="text-[24px] font-semibold text-[#1A1A1A] mb-6">Questions fréquentes sur le Kafan</h2>
  <div className="flex flex-col gap-4 mb-10">
    {faqs.map((faq, i) => (
      <div key={i} className="p-6 bg-white border border-[#E8E2D9] rounded-[12px]">
        <h3 className="text-[16px] font-semibold text-[#1A1A1A] mb-3">{faq.question}</h3>
        <p className="text-[14.5px] font-light text-[#555] leading-[1.7]">{faq.answer}</p>
      </div>
    ))}
  </div>
</div></div></section></div>); }
