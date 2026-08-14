import type { Metadata } from "next";
import Link from "next/link";
import Breadcrumbs from "@/components/ui/Breadcrumbs";
import SchemaOrg from "@/components/ui/SchemaOrg";
import { buildArticleSchema, buildFAQSchema } from "@/lib/seo-config";
export async function generateMetadata(): Promise<Metadata> {
  const url = "https://www.pompesfunebres-alhayaat.fr/guide/40-jours-islam";
  return {
    title: "Les 40 Jours en Islam après un Décès — Ce que dit la Religion | Al Hayaat",
    description: "Que dit l'Islam sur les 40 jours après un décès ? L'avis des savants, les pratiques culturelles et ce qui est permis. Guide honnête et référencé.",
    keywords: ["40 jours islam"],
    
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
  { question: "Est-ce haram de commémorer les 40 jours ?", answer: "Ce n'est pas haram en soi. Ce qui est interdit, c'est de considérer cette commémoration comme une obligation religieuse ou une Sunnah. Les actes accomplis ce jour (doua, sadaqa, lecture du Coran) sont en eux-mêmes permis." },
  { question: "La sadaqa profite-t-elle vraiment aux morts ?", answer: "Oui. Le Prophète ﷺ a dit qu'une sadaqa jariya (aumône continue) profite au défunt après sa mort (Sahih Muslim, n°1631). Faire un don en mémoire d'un proche décédé est un acte recommandé." }
];

export default function Page() { return (<div className="bg-[#F5F0E8] text-[#1A1A1A] min-h-screen font-inter"><SchemaOrg data={buildArticleSchema({ headline: "Les 40 Jours après un Décès en Islam", datePublished: "2024-06-01" })} /><section className="relative w-full pt-28 pb-16 bg-[#0D1208] text-white"><div className="relative z-10 w-full max-w-[1280px] mx-auto px-8 md:px-12"><Breadcrumbs items={[{ label: "Guide", href: "/guide" }, { label: "40 Jours Islam", href: "/guide/40-jours-islam" }]} /><h1 className="text-[2.2rem] md:text-[3rem] font-semibold leading-[1.1] tracking-[-0.02em] text-white mb-6 mt-6 max-w-[700px]">Les 40 Jours après un Décès en Islam — Vérité et Tradition</h1></div></section><section className="w-full bg-[#F5F0E8] py-20 md:py-28"><div className="w-full max-w-[1280px] mx-auto px-8 md:px-12"><div className="max-w-[780px]">
    <p className="text-[15px] font-light text-[#555] leading-[1.8] mb-8">La commémoration du 40e jour est une pratique très répandue dans les communautés musulmanes, notamment maghrébines, subsahariennes et turques. Des familles se réunissent, lisent le Coran, font des douas et distribuent de la nourriture. Mais que dit réellement l'Islam à ce sujet ?</p>
  
  <h2 className="text-[24px] font-semibold text-[#1A1A1A] mb-6">La Position Islamique : Pas d'Obligation Religieuse</h2>
  <p className="text-[15px] font-light text-[#555] leading-[1.8] mb-8">Il n'existe aucun verset coranique ni aucun hadith authentique instituant une commémoration obligatoire au 40e jour du décès. Les savants de l'Islam — que ce soit les quatre écoles (Hanafi, Maliki, Chafi'i, Hanbali) ou les savants contemporains — sont unanimes : le 40e jour n'est pas une obligation ni une Sunnah établie.</p>
  
  <h2 className="text-[24px] font-semibold text-[#1A1A1A] mb-6">D'Où Vient Cette Pratique ?</h2>
  <p className="text-[15px] font-light text-[#555] leading-[1.8] mb-8">La pratique des 40 jours est d'origine culturelle. Dans de nombreuses civilisations (grecque antique, slave, copte chrétienne, et certaines traditions berbères préislamiques), le 40e jour était une date symbolique de commémoration. Cette tradition s'est mêlée aux pratiques islamiques dans certaines régions.</p>
  
  <h2 className="text-[24px] font-semibold text-[#1A1A1A] mb-6">Ce qui Est Permis à n'Importe Quelle Occasion</h2>
  <p className="text-[15px] font-light text-[#555] leading-[1.8] mb-4">Même si le 40e jour n'est pas une prescription islamique, certains actes réalisés à cette occasion sont en eux-mêmes valables et bénéfiques pour le défunt :</p>
  <ul className="flex flex-col gap-2 mb-4">{["Faire des douas pour le défunt est toujours bénéfique et permis", "Donner de la sadaqa (aumône) en mémoire du défunt profite à son âme", "Lire le Coran et offrir la récompense au défunt est permis selon la majorité des savants", "Se réunir en famille pour invoquer Allah ensemble est une bonne chose"].map((t,i)=>(<li key={i} className="flex items-start gap-3 text-[14.5px] text-[#555] font-light"><span className="w-1.5 h-1.5 rounded-full bg-[#2D6A2D] mt-2 shrink-0"/>{t}</li>))}</ul>
  <p className="text-[15px] font-light text-[#555] leading-[1.8] mb-8">L'essentiel est de ne pas considérer ces actes comme obligatoires le 40e jour spécifiquement, ce qui tomberait dans la bid'ah (innovation).</p>

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
