import type { Metadata } from "next";
import Link from "next/link";
import Breadcrumbs from "@/components/ui/Breadcrumbs";
import SchemaOrg from "@/components/ui/SchemaOrg";
import { buildArticleSchema, buildFAQSchema } from "@/lib/seo-config";
export async function generateMetadata(): Promise<Metadata> {
  const url = "https://www.pompesfunebres-alhayaat.fr/guide/enterrement-islam-vetement";
  return {
    title: "Comment s'Habiller pour un Enterrement Musulman ? | Al Hayaat",
    description: "Quelle tenue porter pour un enterrement musulman ? Guide hommes et femmes : couleurs, couvrir la tête, règles islamiques. Conseils pratiques pour participer à des obsèques musulmanes.",
    keywords: ["enterrement islam vêtement"],
    
    alternates: {
      canonical: url,
    },
    openGraph: {
      title: "Comment s'Habiller pour un Enterrement Musulman ? | Al Hayaat",
      description: "Quelle tenue porter pour un enterrement musulman ? Guide hommes et femmes : couleurs, couvrir la tête, règles islamiques. Conseils pratiques pour participer à des obsèques musulmanes.",
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
  { question: "Faut-il obligatoirement se couvrir la tête pour un enterrement musulman ?", answer: "Pour les hommes, se couvrir la tête est recommandé (sunnah) mais pas obligatoire. Pour les femmes musulmanes, le voile est obligatoire. Pour les femmes non-musulmanes, porter un foulard est un geste de respect apprécié." },
  { question: "Peut-on porter des bijoux à un enterrement musulman ?", answer: "La discrétion est de mise. Les bijoux discrets sont acceptables pour les femmes. Les bijoux voyants ou en or pour les hommes sont déconseillés (le port de l'or est interdit aux hommes en Islam)." }
];

export default function Page() { return (<div className="bg-[#F5F0E8] text-[#1A1A1A] min-h-screen font-inter"><SchemaOrg data={buildArticleSchema({ headline: "Comment s'Habiller pour un Enterrement Musulman ?", datePublished: "2024-03-15" })} /><section className="relative w-full pt-28 pb-16 bg-[#0D1208] text-white"><div className="relative z-10 w-full max-w-[1280px] mx-auto px-8 md:px-12"><Breadcrumbs items={[{ label: "Guide", href: "/guide" }, { label: "Vêtements Enterrement", href: "/guide/enterrement-islam-vetement" }]} /><h1 className="text-[2.2rem] md:text-[3rem] font-semibold leading-[1.1] tracking-[-0.02em] text-white mb-6 mt-6 max-w-[700px]">Comment s'Habiller pour un Enterrement Musulman ?</h1></div></section><section className="w-full bg-[#F5F0E8] py-20 md:py-28"><div className="w-full max-w-[1280px] mx-auto px-8 md:px-12"><div className="max-w-[780px]">
  <h2 className="text-[24px] font-semibold text-[#1A1A1A] mb-6">Les règles vestimentaires pour un enterrement musulman</h2>
  <p className="text-[15px] font-light text-[#555] leading-[1.8] mb-8">Participer à un enterrement musulman est un droit du croyant envers son frère. Le Prophète ﷺ a dit : « Le droit du musulman sur son frère est de cinq : répondre au salam, visiter le malade, suivre le convoi funèbre, accepter l'invitation, et éternuer » (Sahih al-Bukhari, n°1240). Bien s'habiller pour honorer le défunt et respecter l'assemblée est un acte de piété.</p>
    <h2 className="text-[24px] font-semibold text-[#1A1A1A] mb-6">Règles Générales pour les Hommes</h2>
  <ul className="flex flex-col gap-2 mb-8">{["Pudeur : Couvrir l'awra (nombril aux genoux minimum, et de préférence plus). Idéalement pantalon et chemise ou qamis.", "Couleurs : Pas de règle stricte sur la couleur. Le blanc est recommandé dans l'Islam pour sa pureté, mais toute couleur sobre convient.", "Couvrir la tête : Non obligatoire mais recommandé. Calotte (taqiyya/koufiya) ou chapeau sobre.", "À éviter : Vêtements très colorés, voyants ou festifs. Short. Décolleté."].map((t,i)=>(<li key={i} className="flex items-start gap-3 text-[14.5px] text-[#555] font-light"><span className="w-1.5 h-1.5 rounded-full bg-[#2D6A2D] mt-2 shrink-0"/>{t}</li>))}</ul>
  
  <h2 className="text-[24px] font-semibold text-[#1A1A1A] mb-6">Règles Générales pour les Femmes</h2>
  <ul className="flex flex-col gap-2 mb-8">{["Le voile (hijab) : Une femme musulmane doit couvrir ses cheveux et son corps. Pour une femme non-musulmane invitée, porter une tenue sobre avec les cheveux couverts d'un foulard est apprécié et respectueux.", "Couleurs : Couleurs sobres et non voyantes. Noir, gris, bleu marine, marron, blanc.", "Longueur : Vêtement couvrant les bras et les jambes. Pas de décolleté.", "Parfum : Éviter les parfums forts lors d'un enterrement — c'est une recommandation de la Sunnah."].map((t,i)=>(<li key={i} className="flex items-start gap-3 text-[14.5px] text-[#555] font-light"><span className="w-1.5 h-1.5 rounded-full bg-[#2D6A2D] mt-2 shrink-0"/>{t}</li>))}</ul>
  
  <h2 className="text-[24px] font-semibold text-[#1A1A1A] mb-6">Peut-on Porter du Noir à un Enterrement Musulman ?</h2>
  <p className="text-[15px] font-light text-[#555] leading-[1.8] mb-8">Oui, le noir est acceptable. Contrairement à certaines idées reçues, il n'est ni obligatoire ni interdit. La couleur de deuil n'est pas prescrite en Islam. Ce qui compte, c'est la sobriété et la modestie de la tenue, quelle que soit sa couleur.</p>
  
  <h2 className="text-[24px] font-semibold text-[#1A1A1A] mb-6">Pour les Non-Musulmans Invités à un Enterrement Islamique</h2>
  <p className="text-[15px] font-light text-[#555] leading-[1.8] mb-4">Un non-musulman qui assiste à un enterrement islamique par respect ou amitié est le bienvenu. Il lui suffit de :</p>
  <ul className="flex flex-col gap-2 mb-8">{["Porter une tenue sobre et couverte", "Rester silencieux et respectueux pendant la Salat al-Janaza", "Ne pas se lever ou s'asseoir sans observer ce que font les autres", "Éviter de photographier la cérémonie sans autorisation"].map((t,i)=>(<li key={i} className="flex items-start gap-3 text-[14.5px] text-[#555] font-light"><span className="w-1.5 h-1.5 rounded-full bg-[#2D6A2D] mt-2 shrink-0"/>{t}</li>))}</ul>
  
  <h2 className="text-[24px] font-semibold text-[#1A1A1A] mb-6">Questions fréquentes sur la tenue d'enterrement</h2>
  <div className="flex flex-col gap-4 mb-10">
    {faqs.map((faq, i) => (
      <div key={i} className="p-6 bg-white border border-[#E8E2D9] rounded-[12px]">
        <h3 className="text-[16px] font-semibold text-[#1A1A1A] mb-3">{faq.question}</h3>
        <p className="text-[14.5px] font-light text-[#555] leading-[1.7]">{faq.answer}</p>
      </div>
    ))}
  </div>
  <p className="text-[15px] font-light text-[#555] leading-[1.8] mb-4">Pour en savoir plus sur les <Link href="/guide/rites-funeraires-islam-etapes" className="text-[#2D6A2D] font-medium hover:underline">rites funéraires islamiques</Link> et les <Link href="/guide/condoleances-islam" className="text-[#2D6A2D] font-medium hover:underline">condoléances en Islam</Link>.</p>
</div></div></section></div>); }
