import type { Metadata } from "next";
import Link from "next/link";
import Breadcrumbs from "@/components/ui/Breadcrumbs";
import SchemaOrg from "@/components/ui/SchemaOrg";
import { buildArticleSchema } from "@/lib/seo-config";
export async function generateMetadata(): Promise<Metadata> {
  const url = "https://www.pompesfunebres-alhayaat.fr/guide/lavage-mortuaire-islam";
  return {
    title: "Le Lavage Mortuaire en Islam (Ghusl) : Tout ce qu'il Faut Savoir",
    description: "Guide complet du lavage mortuaire islamique (Ghusl al-Mayyit) : étapes, règles, qui peut le réaliser.",
    keywords: ["lavage mortuaire islam"],
    
    alternates: {
      canonical: url,
    },
    openGraph: {
      title: "Le Lavage Mortuaire en Islam (Ghusl) : Tout ce qu'il Faut Savoir",
      description: "Guide complet du lavage mortuaire islamique (Ghusl al-Mayyit) : étapes, règles, qui peut le réaliser.",
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
export default function Page() { return (<div className="bg-[#F5F0E8] text-[#1A1A1A] min-h-screen font-inter"><SchemaOrg data={buildArticleSchema({ headline: "Le Lavage Mortuaire Islamique", datePublished: "2024-04-15" })} /><section className="relative w-full pt-28 pb-16 bg-[#0D1208] text-white"><div className="relative z-10 w-full max-w-[1280px] mx-auto px-8 md:px-12"><Breadcrumbs items={[{ label: "Guide", href: "/guide" }, { label: "Lavage Mortuaire", href: "/guide/lavage-mortuaire-islam" }]} /><h1 className="text-[2.2rem] md:text-[3rem] font-semibold leading-[1.1] tracking-[-0.02em] text-white mb-6 mt-6 max-w-[700px]">Le Lavage Mortuaire Islamique (Ghusl al-Mayyit) : Guide Complet</h1></div></section><section className="w-full bg-[#F5F0E8] py-20 md:py-28"><div className="w-full max-w-[1280px] mx-auto px-8 md:px-12"><div className="max-w-[780px]">
  <p className="text-[15px] font-light text-[#555] leading-[1.8] mb-8">Le lavage mortuaire (Ghusl al-Mayyit) est un acte sacré en Islam. Pour un guide détaillé des étapes, consultez notre page <Link href="/toilette-rituelle-musulmane" className="text-[#2D6A2D] font-medium hover:underline">Toilette Rituelle Musulmane</Link>.</p>
  <h2 className="text-[24px] font-semibold text-[#1A1A1A] mb-6">Qui peut laver le mort en Islam ?</h2>
  <p className="text-[15px] font-light text-[#555] leading-[1.8] mb-8">Le lavage est réalisé par des personnes du même sexe que le défunt. Un époux peut laver son épouse et inversement. Il est recommandé de choisir des personnes pieuses et de confiance. Chez Al Hayat, notre équipe qualifiée réalise le ghusl en <Link href="/normandie" className="text-[#2D6A2D] font-medium hover:underline">Normandie</Link> et à <Link href="/ile-de-france" className="text-[#2D6A2D] font-medium hover:underline">Paris</Link>.</p>
  <h2 className="text-[24px] font-semibold text-[#1A1A1A] mb-6">Les produits utilisés</h2>
  <ul className="flex flex-col gap-2 mb-8">{["Eau pure", "Feuilles de jujubier (sidr) ou savon", "Camphre (kafour) pour le dernier lavage", "Parfum (musc) sur les points de prosternation"].map((t,i)=>(<li key={i} className="flex items-start gap-3 text-[14.5px] text-[#555] font-light"><span className="w-1.5 h-1.5 rounded-full bg-[#2D6A2D] mt-2 shrink-0"/>{t}</li>))}</ul>
  <p className="text-[15px] font-light text-[#555] leading-[1.8]">Après le lavage, le défunt est enveloppé dans le <Link href="/guide/kafan-linceul-islam" className="text-[#2D6A2D] font-medium hover:underline">kafan (linceul)</Link>.</p>
</div></div></section></div>); }
