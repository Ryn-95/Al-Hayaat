import type { Metadata } from "next";
import Link from "next/link";
import Breadcrumbs from "@/components/ui/Breadcrumbs";
import SchemaOrg from "@/components/ui/SchemaOrg";
import { buildArticleSchema } from "@/lib/seo-config";

export async function generateMetadata(): Promise<Metadata> {
  const url = "https://www.pompesfunebres-alhayaat.fr/guide/salat-janaza-comment-faire";
  return {
    title: "Comment Faire la Salat Janaza ? Les 4 Takbir Expliqués",
    description: "Guide complet pour faire la Salat al-Janaza : étapes, takbir, douas, règles. Avec les textes en arabe, phonétique et traduction française.",
    keywords: ["salat janaza comment faire"],
    
    alternates: {
      canonical: url,
    },
    openGraph: {
      title: "Comment Faire la Salat Janaza ? Les 4 Takbir Expliqués",
      description: "Guide complet pour faire la Salat al-Janaza : étapes, takbir, douas, règles. Avec les textes en arabe, phonétique et traduction française.",
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

export default function SalatJanazaGuidePage() {
  return (
    <div className="bg-[#F5F0E8] text-[#1A1A1A] min-h-screen font-inter">
      <SchemaOrg data={buildArticleSchema({ headline: "Comment Faire la Salat al-Janaza ?", datePublished: "2024-03-01" })} />
      <section className="relative w-full pt-28 pb-16 bg-[#0D1208] text-white"><div className="relative z-10 w-full max-w-[1280px] mx-auto px-8 md:px-12">
        <Breadcrumbs items={[{ label: "Guide", href: "/guide" }, { label: "Salat Janaza", href: "/guide/salat-janaza-comment-faire" }]} />
        <h1 className="text-[2.2rem] md:text-[3rem] font-semibold leading-[1.1] tracking-[-0.02em] text-white mb-6 mt-6 max-w-[700px]">Comment Faire la Salat al-Janaza (Prière Funèbre) ?</h1>
      </div></section>
      <section className="w-full bg-[#F5F0E8] py-20 md:py-28"><div className="w-full max-w-[1280px] mx-auto px-8 md:px-12"><div className="max-w-[780px]">
        <h2 className="text-[24px] md:text-[28px] font-semibold text-[#1A1A1A] mb-6">Les conditions de la Salat al-Janaza</h2>
        <p className="text-[15px] font-light text-[#555] leading-[1.8] mb-8">La Salat al-Janaza se prie debout, sans roukou ni soujoud. Elle se compose de 4 Takbir. Le fidèle doit être en état de pureté rituelle (wudhu) et faire face à la Qibla. L&apos;imam se place au niveau de la poitrine du défunt (homme) ou au niveau du milieu du corps (femme).</p>

        {[
          { n: "1er Takbir", title: "Sourate Al-Fatiha", ar: "بِسْمِ اللَّهِ الرَّحْمَنِ الرَّحِيمِ ۝ الْحَمْدُ لِلَّهِ رَبِّ الْعَالَمِينَ", desc: "Après le premier Takbir, réciter la sourate Al-Fatiha en entier." },
          { n: "2e Takbir", title: "Salawat sur le Prophète ﷺ", ar: "اللَّهُمَّ صَلِّ عَلَى مُحَمَّدٍ وَعَلَى آلِ مُحَمَّدٍ", desc: "Réciter les Salawat ibrahimiyya (prière sur le Prophète ﷺ), identique à celle récitée dans le Tashahhud." },
          { n: "3e Takbir", title: "Doua pour le défunt", ar: "اللَّهُمَّ اغْفِرْ لَهُ وَارْحَمْهُ وَعَافِهِ وَاعْفُ عَنْهُ", desc: "Réciter la doua complète pour le défunt. Voir notre guide des douas pour le mort." },
          { n: "4e Takbir", title: "Salam final", ar: "السَّلاَمُ عَلَيْكُمْ وَرَحْمَةُ اللَّهِ", desc: "Tourner la tête à droite en disant le Salam, puis à gauche. La prière est terminée." },
        ].map((step, i) => (
          <div key={i} className="p-6 bg-white border border-[#E8E2D9] rounded-[12px] mb-4">
            <div className="flex items-center gap-3 mb-3"><div className="w-8 h-8 rounded-full bg-[#7A5C3A] flex items-center justify-center"><span className="text-[12px] font-bold text-white">{i+1}</span></div><p className="text-[11px] tracking-[0.14em] font-semibold text-[#7A5C3A] uppercase">{step.n} — {step.title}</p></div>
            <p className="text-[20px] text-right font-light text-[#1A1A1A] mb-3 leading-[2]" dir="rtl">{step.ar}</p>
            <p className="text-[14px] text-[#555] font-light leading-[1.7]">{step.desc}</p>
          </div>
        ))}

        <p className="text-[15px] font-light text-[#555] leading-[1.8] mt-8 mb-4">Pour les <Link href="/guide/doua-deces-islam" className="text-[#2D6A2D] font-medium hover:underline">douas complètes à réciter</Link>, consultez notre guide dédié. Al Hayat organise la <Link href="/salat-al-janaza" className="text-[#2D6A2D] font-medium hover:underline">Salat al-Janaza</Link> avec l&apos;imam de votre choix.</p>
      </div></div></section>
    </div>
  );
}
