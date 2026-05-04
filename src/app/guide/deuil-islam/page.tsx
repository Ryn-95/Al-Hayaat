import type { Metadata } from "next";
import Link from "next/link";
import Breadcrumbs from "@/components/ui/Breadcrumbs";
import SchemaOrg from "@/components/ui/SchemaOrg";
import { buildArticleSchema } from "@/lib/seo-config";

export async function generateMetadata(): Promise<Metadata> {
  const url = "https://pompesfunebres-alhayaat.fr/guide/deuil-islam";
  return {
    title: "Le Deuil en Islam : Durée, Règles, Obligations et Invocations",
    description: "Combien de temps dure le deuil en Islam ? 3 jours, 40 jours, viduité : tout ce qu'il faut savoir. Obligations, invocations, pratiques islamiques du deuil.",
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

export default function DeuilIslamPage() {
  return (
    <div className="bg-[#F5F0E8] text-[#1A1A1A] min-h-screen font-inter">
      <SchemaOrg data={buildArticleSchema({ headline: "Le Deuil en Islam : Durée, Règles et Pratiques", datePublished: "2024-02-15" })} />
      <section className="relative w-full pt-28 pb-16 bg-[#0D1208] text-white">
        <div className="relative z-10 w-full max-w-[1280px] mx-auto px-8 md:px-12">
          <Breadcrumbs items={[{ label: "Guide", href: "/guide" }, { label: "Deuil en Islam", href: "/guide/deuil-islam" }]} />
          <h1 className="text-[2.2rem] md:text-[3rem] font-semibold leading-[1.1] tracking-[-0.02em] text-white mb-6 mt-6 max-w-[700px]">Le Deuil en Islam : Durée, Règles et Pratiques</h1>
        </div>
      </section>
      <section className="w-full bg-[#F5F0E8] py-20 md:py-28">
        <div className="w-full max-w-[1280px] mx-auto px-8 md:px-12"><div className="max-w-[780px]">
          <h2 className="text-[24px] md:text-[28px] font-semibold text-[#1A1A1A] mb-6">La durée du deuil en Islam</h2>
          <p className="text-[15px] font-light text-[#555] leading-[1.8] mb-4">En Islam, la durée officielle du deuil est de <strong>3 jours</strong> pour les proches du défunt. Pendant cette période, il est recommandé de :</p>
          <ul className="flex flex-col gap-2 mb-8">{["Recevoir les condoléances de la communauté", "Réciter le Coran et les douas pour le défunt", "S'abstenir de festivités et divertissements", "Préparer des repas pour la famille endeuillée (devoir de la communauté)"].map((t, i) => (<li key={i} className="flex items-start gap-3 text-[14.5px] text-[#555] font-light"><span className="w-1.5 h-1.5 rounded-full bg-[#2D6A2D] mt-2 shrink-0" />{t}</li>))}</ul>

          <h2 className="text-[24px] md:text-[28px] font-semibold text-[#1A1A1A] mb-6">La viduité (Iddah) de la veuve</h2>
          <p className="text-[15px] font-light text-[#555] leading-[1.8] mb-8">Pour l&apos;épouse d&apos;un défunt, la période de viduité (iddah) est de <strong>4 mois et 10 jours</strong> (Coran 2:234). Pendant cette période, la veuve reste dans le domicile conjugal, évite les parures et les parfums, et ne se remarie pas.</p>

          <h2 className="text-[24px] md:text-[28px] font-semibold text-[#1A1A1A] mb-6">Les 40 jours après un décès</h2>
          <p className="text-[15px] font-light text-[#555] leading-[1.8] mb-4">La tradition des <Link href="/guide/40-jours-islam" className="text-[#2D6A2D] font-medium hover:underline">40 jours de deuil</Link> n&apos;a pas de fondement dans le Coran ni la Sunnah authentique. Il s&apos;agit d&apos;une coutume culturelle pratiquée dans certaines régions, mais qui n&apos;est pas une obligation religieuse.</p>

          <h2 className="text-[24px] md:text-[28px] font-semibold text-[#1A1A1A] mb-6">Invocations pendant le deuil</h2>
          <p className="text-[15px] font-light text-[#555] leading-[1.8] mb-4">Pendant le deuil, il est recommandé de réciter des <Link href="/guide/doua-deces-islam" className="text-[#2D6A2D] font-medium hover:underline">douas pour le défunt</Link> et de présenter ses <Link href="/guide/condoleances-islam" className="text-[#2D6A2D] font-medium hover:underline">condoléances</Link> à la famille.</p>

          <div className="p-6 bg-[#0D1208] rounded-[12px] text-white mt-10">
            <p className="text-[14px] font-light text-white/60 mb-4">Al Hayat accompagne les familles musulmanes en <Link href="/normandie" className="text-[#6BAA6B] hover:underline">Normandie</Link> et à <Link href="/ile-de-france" className="text-[#6BAA6B] hover:underline">Paris</Link>.</p>
            <Link href="/contact" className="inline-flex items-center gap-2 bg-[#2D6A2D] text-white px-5 py-3 rounded-[5px] text-[13.5px] font-medium hover:bg-[#255525] transition-colors">Nous contacter</Link>
          </div>
        </div></div>
      </section>
    </div>
  );
}
