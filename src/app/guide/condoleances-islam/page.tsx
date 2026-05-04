import type { Metadata } from "next";
import Link from "next/link";
import Breadcrumbs from "@/components/ui/Breadcrumbs";
import SchemaOrg from "@/components/ui/SchemaOrg";
import { buildArticleSchema } from "@/lib/seo-config";

export async function generateMetadata(): Promise<Metadata> {
  const url = "https://pompesfunebres-alhayaat.fr/guide/condoleances-islam";
  return {
    title: "Condoléances en Islam : Messages, Prières et Formules Complètes",
    description: "Comment exprimer ses condoléances en Islam ? Prière, messages en arabe et en français, gestes à faire, durée du deuil. Guide complet.",
    keywords: ["condoléances islam"],
    
    alternates: {
      canonical: url,
    },
    openGraph: {
      title: "Condoléances en Islam : Messages, Prières et Formules Complètes",
      description: "Comment exprimer ses condoléances en Islam ? Prière, messages en arabe et en français, gestes à faire, durée du deuil. Guide complet.",
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

export default function CondoleancesIslamPage() {
  return (
    <div className="bg-[#F5F0E8] text-[#1A1A1A] min-h-screen font-inter">
      <SchemaOrg data={buildArticleSchema({ headline: "Condoléances Musulmanes : Comment les Exprimer ?", datePublished: "2024-02-01" })} />
      <section className="relative w-full pt-28 pb-16 bg-[#0D1208] text-white">
        <div className="relative z-10 w-full max-w-[1280px] mx-auto px-8 md:px-12">
          <Breadcrumbs items={[{ label: "Guide", href: "/guide" }, { label: "Condoléances Islam", href: "/guide/condoleances-islam" }]} />
          <h1 className="text-[2.2rem] md:text-[3rem] font-semibold leading-[1.1] tracking-[-0.02em] text-white mb-6 mt-6 max-w-[700px]">Condoléances Musulmanes : Comment les Exprimer ?</h1>
        </div>
      </section>
      <section className="w-full bg-[#F5F0E8] py-20 md:py-28">
        <div className="w-full max-w-[1280px] mx-auto px-8 md:px-12"><div className="max-w-[780px]">
          <h2 className="text-[24px] md:text-[28px] font-semibold text-[#1A1A1A] mb-6">L&apos;importance des condoléances en Islam</h2>
          <p className="text-[15px] font-light text-[#555] leading-[1.8] mb-8">Présenter ses condoléances (ta&apos;azia) est une obligation morale et spirituelle en Islam. Le Prophète ﷺ a dit : « Tout musulman qui présente ses condoléances à son frère éprouvé sera revêtu d&apos;un vêtement de dignité au Jour du Jugement. » Il est recommandé de rendre visite à la famille endeuillée dans les 3 premiers jours suivant le décès.</p>

          <h2 className="text-[24px] md:text-[28px] font-semibold text-[#1A1A1A] mb-6">La formule essentielle</h2>
          <div className="p-6 bg-white border border-[#E8E2D9] rounded-[12px] mb-8">
            <p className="text-[28px] text-right font-light text-[#1A1A1A] mb-3 leading-[2]" dir="rtl">إِنَّا لِلَّهِ وَإِنَّا إِلَيْهِ رَاجِعُونَ</p>
            <p className="text-[14px] text-[#7A5C3A] font-medium mb-2">Inna lillahi wa inna ilayhi raji&apos;oun</p>
            <p className="text-[14px] text-[#555] font-light leading-[1.7]">« Nous appartenons à Allah et c&apos;est vers Lui que nous retournons. » — Sourate Al-Baqara (2:156)</p>
            <p className="text-[13px] text-[#888] font-light mt-3">Cette formule coranique est la première parole à prononcer à l&apos;annonce d&apos;un décès.</p>
          </div>

          <h2 className="text-[24px] md:text-[28px] font-semibold text-[#1A1A1A] mb-6">Messages de condoléances en arabe</h2>
          {[
            { ar: "أحسن الله عزاءكم", ph: "Ahsana Allahou 'aza'akoum", fr: "Qu'Allah vous accorde la meilleure des consolations." },
            { ar: "رحمه الله وغفر له", ph: "Rahimahou Allahou wa ghafara lahu", fr: "Qu'Allah lui accorde Sa miséricorde et Son pardon." },
            { ar: "البقاء لله وحده", ph: "Al-baqa'ou lillahi wahdah", fr: "La pérennité n'appartient qu'à Allah seul." },
            { ar: "إن لله ما أخذ وله ما أعطى", ph: "Inna lillahi ma akhadha wa lahu ma a'ta", fr: "À Allah appartient ce qu'Il a repris et ce qu'Il a donné." },
          ].map((msg, i) => (
            <div key={i} className="p-5 bg-white border border-[#E8E2D9] rounded-[10px] mb-3">
              <p className="text-[20px] text-right font-light text-[#1A1A1A] mb-2" dir="rtl">{msg.ar}</p>
              <p className="text-[13px] text-[#7A5C3A] font-medium mb-1">{msg.ph}</p>
              <p className="text-[13px] text-[#666] font-light">{msg.fr}</p>
            </div>
          ))}

          <h2 className="text-[24px] md:text-[28px] font-semibold text-[#1A1A1A] mb-6 mt-8">Messages en français pour une famille musulmane</h2>
          <div className="flex flex-col gap-3 mb-8">{[
            "« Nous vous présentons nos plus sincères condoléances. Qu'Allah accorde Sa miséricorde au défunt et vous accorde patience et courage. »",
            "« En cette épreuve douloureuse, sachez que nous pensons à vous et à votre famille. Qu'Allah lui accorde le Firdaws. »",
            "« Inna lillahi wa inna ilayhi raji'oun. Toute la famille vous adresse ses condoléances les plus attristées. »",
          ].map((msg, i) => (<p key={i} className="text-[14.5px] text-[#555] font-light leading-[1.7] italic p-4 bg-white border-l-2 border-[#2D6A2D] rounded-r-[8px]">{msg}</p>))}</div>

          <h2 className="text-[24px] md:text-[28px] font-semibold text-[#1A1A1A] mb-6">Ce qu&apos;il faut faire lors des condoléances</h2>
          <ul className="flex flex-col gap-2 mb-8">{["Rendre visite à la famille endeuillée", "Préparer un repas pour la famille (Sunnah)", "Réciter des douas pour le défunt", "S'abstenir de rires ou divertissements", "Faire des dons (sadaqa) en mémoire du défunt"].map((t, i) => (<li key={i} className="flex items-start gap-3 text-[14.5px] text-[#555] font-light"><span className="w-1.5 h-1.5 rounded-full bg-[#2D6A2D] mt-2 shrink-0" />{t}</li>))}</ul>

          <h2 className="text-[24px] md:text-[28px] font-semibold text-[#1A1A1A] mb-6">La période de deuil</h2>
          <p className="text-[15px] font-light text-[#555] leading-[1.8] mb-4">En savoir plus sur <Link href="/guide/deuil-islam" className="text-[#2D6A2D] font-medium hover:underline">le deuil en Islam</Link> et <Link href="/guide/40-jours-islam" className="text-[#2D6A2D] font-medium hover:underline">les 40 jours après un décès</Link>.</p>

          <div className="p-6 bg-[#0D1208] rounded-[12px] text-white mt-10">
            <p className="text-[15px] font-medium mb-3">Besoin d&apos;accompagnement ?</p>
            <p className="text-[14px] font-light text-white/60 mb-4">Al Hayat accompagne les familles musulmanes en <Link href="/normandie" className="text-[#6BAA6B] hover:underline">Normandie</Link> et à <Link href="/paris-ile-de-france" className="text-[#6BAA6B] hover:underline">Paris</Link>.</p>
            <Link href="/contact" className="inline-flex items-center gap-2 bg-[#2D6A2D] text-white px-5 py-3 rounded-[5px] text-[13.5px] font-medium hover:bg-[#255525] transition-colors">Nous contacter</Link>
          </div>
        </div></div>
      </section>
    </div>
  );
}
