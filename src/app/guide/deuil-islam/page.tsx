import type { Metadata } from "next";
import Link from "next/link";
import Breadcrumbs from "@/components/ui/Breadcrumbs";
import SchemaOrg from "@/components/ui/SchemaOrg";
import { buildArticleSchema, buildFAQSchema } from "@/lib/seo-config";

export async function generateMetadata(): Promise<Metadata> {
  const url = "https://pompesfunebres-alhayaat.fr/guide/deuil-islam";
  return {
    title: "Le Deuil en Islam — Durée, Règles, Obligations | Al Hayaat",
    description: "Le deuil en Islam : combien de temps dure-t-il ? Règles pour les hommes et les femmes, la veuve (iddah), les 40 jours. Guide complet avec références islamiques.",
    keywords: ["deuil islam"],
    
    alternates: {
      canonical: url,
    },
    openGraph: {
      title: "Le Deuil en Islam : Durée, Règles, Obligations et Invocations",
      description: "Combien de temps dure le deuil en Islam ? 3 jours, 40 jours, viduité : tout ce qu'il faut savoir. Obligations, invocations, pratiques islamiques du deuil.",
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
  { question: "Peut-on sortir de chez soi pendant le deuil ?", answer: "Oui. Il n'est pas obligatoire de rester chez soi pendant le deuil (sauf pour la veuve dans le cadre de l'iddah). Le deuil islamique est intérieur — il ne requiert pas d'isolement physique." },
  { question: "Faut-il s'habiller en noir pendant le deuil musulman ?", answer: "Non, le port du noir n'est pas une obligation islamique. En Islam, il n'y a pas de couleur de deuil prescrite. Les fidèles s'habillent simplement et évitent les parures excessives." },
  { question: "La veuve peut-elle sortir de chez elle pendant l'iddah ?", answer: "Les savants distinguent entre sortir pour les nécessités (travail, médecin, courses) — permis selon la majorité — et les sorties de loisir — déconseillées pendant l'iddah. Consultez un imam pour une situation personnelle." }
];

export default function DeuilIslamPage() {
  return (
    <div className="bg-[#F5F0E8] text-[#1A1A1A] min-h-screen font-inter">
      <SchemaOrg data={buildArticleSchema({ headline: "Le Deuil en Islam : Durée, Règles et Pratiques", datePublished: "2024-02-15" })} />
      <section className="relative w-full pt-28 pb-16 bg-[#0D1208] text-white">
        <div className="relative z-10 w-full max-w-[1280px] mx-auto px-8 md:px-12">
          <Breadcrumbs items={[{ label: "Guide", href: "/guide" }, { label: "Deuil en Islam", href: "/guide/deuil-islam" }]} />
          <h1 className="text-[2.2rem] md:text-[3rem] font-semibold leading-[1.1] tracking-[-0.02em] text-white mb-6 mt-6 max-w-[700px]">Le Deuil en Islam — Ce que la Sunnah Enseigne</h1>
        </div>
      </section>
      <section className="w-full bg-[#F5F0E8] py-20 md:py-28">
        <div className="w-full max-w-[1280px] mx-auto px-8 md:px-12"><div className="max-w-[780px]">
                    <h2 className="text-[24px] md:text-[28px] font-semibold text-[#1A1A1A] mb-6">La Durée du Deuil en Islam</h2>
          <p className="text-[15px] font-light text-[#555] leading-[1.8] mb-4">En Islam, la durée du deuil est précisément définie par la Sunnah et varie selon le lien avec le défunt :</p>
          <ul className="flex flex-col gap-4 mb-8">
            <li className="text-[15px] text-[#555] font-light leading-[1.7]">
              <strong>Pour tout musulman (homme ou femme) :</strong> Le deuil est de 3 jours maximum pour la perte d'un proche (père, mère, enfant, frère, sœur, ami). Le Prophète ﷺ a dit : « Il n'est pas licite pour une musulmane qui croit en Allah et au Jour Dernier de faire le deuil de quelqu'un au-delà de trois jours, sauf pour son mari : quatre mois et dix jours » (Sahih al-Bukhari, n°1281).
            </li>
            <li className="text-[15px] text-[#555] font-light leading-[1.7]">
              <strong>Pour la veuve :</strong> La période d'attente (iddah) après le décès du mari est de 4 mois et 10 jours (130 jours). Durant cette période, la femme ne se remarie pas, évite les parures et parfums, et reste de préférence à son domicile. « Celles d'entre vous qui décèdent et laissent des épouses, celles-ci observeront un délai de viduité de quatre mois et dix jours » (Coran, Al-Baqara, 2:234).
            </li>
          </ul>

          <h2 className="text-[24px] md:text-[28px] font-semibold text-[#1A1A1A] mb-6">Ce que la Religion Permet et Interdit pendant le Deuil</h2>
          <p className="text-[16px] font-medium text-[#1A1A1A] mb-3">Permis :</p>
          <ul className="flex flex-col gap-2 mb-6">
            <li className="flex items-start gap-3 text-[14.5px] text-[#555] font-light"><span className="w-1.5 h-1.5 rounded-full bg-[#2D6A2D] mt-2 shrink-0" />Pleurer et exprimer sa tristesse (c'est naturel et humain)</li>
            <li className="flex items-start gap-3 text-[14.5px] text-[#555] font-light"><span className="w-1.5 h-1.5 rounded-full bg-[#2D6A2D] mt-2 shrink-0" />Recevoir les condoléances chez soi</li>
            <li className="flex items-start gap-3 text-[14.5px] text-[#555] font-light"><span className="w-1.5 h-1.5 rounded-full bg-[#2D6A2D] mt-2 shrink-0" />Parler du défunt avec affection et bienveillance</li>
            <li className="flex items-start gap-3 text-[14.5px] text-[#555] font-light"><span className="w-1.5 h-1.5 rounded-full bg-[#2D6A2D] mt-2 shrink-0" />Faire des douas et des sadaqa en mémoire du défunt</li>
            <li className="flex items-start gap-3 text-[14.5px] text-[#555] font-light"><span className="w-1.5 h-1.5 rounded-full bg-[#2D6A2D] mt-2 shrink-0" />Se rappeler Allah et lire le Coran</li>
          </ul>
          <p className="text-[16px] font-medium text-[#1A1A1A] mb-3">Interdit :</p>
          <ul className="flex flex-col gap-2 mb-8">
            <li className="flex items-start gap-3 text-[14.5px] text-[#555] font-light"><span className="w-1.5 h-1.5 rounded-full bg-[#A83232] mt-2 shrink-0" />Les lamentations excessives, se frapper la poitrine, déchirer ses vêtements</li>
            <li className="flex items-start gap-3 text-[14.5px] text-[#555] font-light"><span className="w-1.5 h-1.5 rounded-full bg-[#A83232] mt-2 shrink-0" />Dire des paroles de mécontentement contre le décret d'Allah</li>
            <li className="flex items-start gap-3 text-[14.5px] text-[#555] font-light"><span className="w-1.5 h-1.5 rounded-full bg-[#A83232] mt-2 shrink-0" />Pleurer à voix haute de manière incontrôlée (considéré comme un manque de sabr)</li>
          </ul>

          <h2 className="text-[24px] md:text-[28px] font-semibold text-[#1A1A1A] mb-6">Les 40 Jours en Islam — Quelle Réalité ?</h2>
          <p className="text-[15px] font-light text-[#555] leading-[1.8] mb-4">La notion de "40 jours" est répandue dans les communautés musulmanes maghrébines et africaines. En Islam, il n'existe pas de texte authentique instituant une commémoration particulière au 40e jour. Cette pratique est d'origine culturelle (héritée de traditions locales) et non islamique au sens strict.</p>
          <p className="text-[15px] font-light text-[#555] leading-[1.8] mb-8">Cependant, faire des douas et du sadaqa pour le défunt à n'importe quelle occasion — dont le 40e jour — est permis et bénéfique pour le mort, à condition de ne pas le considérer comme une obligation religieuse.</p>

          <h2 className="text-[24px] md:text-[28px] font-semibold text-[#1A1A1A] mb-6">Questions fréquentes sur le deuil musulman</h2>
          <div className="flex flex-col gap-4 mb-10">
            {faqs.map((faq, i) => (
              <div key={i} className="p-6 bg-white border border-[#E8E2D9] rounded-[12px]">
                <h3 className="text-[16px] font-semibold text-[#1A1A1A] mb-3">{faq.question}</h3>
                <p className="text-[14.5px] font-light text-[#555] leading-[1.7]">{faq.answer}</p>
              </div>
            ))}
          </div>

          <div className="p-6 bg-[#0D1208] rounded-[12px] text-white mt-10">
            <p className="text-[14px] font-light text-white/60 mb-4">Al Hayat accompagne les familles musulmanes en <Link href="/normandie" className="text-[#6BAA6B] hover:underline">Normandie</Link> et à <Link href="/ile-de-france" className="text-[#6BAA6B] hover:underline">Paris</Link>.</p>
            <Link href="/contact" className="inline-flex items-center gap-2 bg-[#2D6A2D] text-white px-5 py-3 rounded-[5px] text-[13.5px] font-medium hover:bg-[#255525] transition-colors">Nous contacter</Link>
          </div>
        </div></div>
      </section>
    </div>
  );
}
