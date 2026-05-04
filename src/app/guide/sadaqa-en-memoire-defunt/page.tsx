import type { Metadata } from "next";
import Link from "next/link";
import Breadcrumbs from "@/components/ui/Breadcrumbs";
import SchemaOrg from "@/components/ui/SchemaOrg";
import { buildArticleSchema } from "@/lib/seo-config";

export const metadata: Metadata = { title: "Sadaqa en Mémoire du Défunt en Islam", description: "Faire une aumône pour un mort : règles et vertus.", keywords: ["sadaqa défunt","aumône pour un mort islam"] };

export default function Page() {
  return (
    <div className="bg-[#F5F0E8] text-[#1A1A1A] min-h-screen font-inter">
      <SchemaOrg data={buildArticleSchema({ headline: "Sadaqa en Mémoire du Défunt en Islam", datePublished: "2024-06-15" })} />
      <section className="relative w-full pt-28 pb-16 bg-[#0D1208] text-white">
        <div className="relative z-10 w-full max-w-[1280px] mx-auto px-8 md:px-12">
          <Breadcrumbs items={[{ label: "Guide", href: "/guide" }, { label: "Sadaqa en Mémoire du Défunt en Islam", href: "/guide/sadaqa-en-memoire-defunt" }]} />
          <h1 className="text-[2.2rem] md:text-[3rem] font-semibold leading-[1.1] tracking-[-0.02em] text-white mb-6 mt-6 max-w-[700px]">Sadaqa en Mémoire du Défunt en Islam</h1>
          <p className="text-[15px] font-light leading-[1.7] text-white/60 max-w-[520px]">Faire une aumône pour un mort : règles et vertus.</p>
        </div>
      </section>
      <section className="w-full bg-[#F5F0E8] py-20 md:py-28">
        <div className="w-full max-w-[1280px] mx-auto px-8 md:px-12"><div className="max-w-[780px]">
          <p className="text-[15px] font-light text-[#555] leading-[1.8] mb-8">Contenu en cours de rédaction. Consultez nos autres guides : <Link href="/guide/doua-deces-islam" className="text-[#2D6A2D] font-medium hover:underline">Doua pour un mort</Link> · <Link href="/guide/condoleances-islam" className="text-[#2D6A2D] font-medium hover:underline">Condoléances en Islam</Link> · <Link href="/guide/rites-funeraires-islam-etapes" className="text-[#2D6A2D] font-medium hover:underline">Rites funéraires islamiques</Link>.</p>
          <p className="text-[15px] font-light text-[#555] leading-[1.8]">Al Hayat accompagne les familles musulmanes en <Link href="/normandie" className="text-[#2D6A2D] font-medium hover:underline">Normandie</Link> et à <Link href="/paris-ile-de-france" className="text-[#2D6A2D] font-medium hover:underline">Paris</Link>. <Link href="/contact" className="text-[#2D6A2D] font-medium hover:underline">Contactez-nous 24h/24</Link>.</p>
        </div></div>
      </section>
    </div>
  );
}
