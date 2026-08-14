import type { Metadata } from "next";
import Link from "next/link";
import Breadcrumbs from "@/components/ui/Breadcrumbs";
import SchemaOrg from "@/components/ui/SchemaOrg";
import { buildArticleSchema } from "@/lib/seo-config";
export async function generateMetadata(): Promise<Metadata> {
  const url = "https://www.pompesfunebres-alhayaat.fr/guide/message-condoleances-arabe";
  return {
    title: "Messages de Condoléances en Arabe — 20 Exemples avec Traduction | Al Hayaat",
    description: "20 messages de condoléances en arabe prêts à envoyer, avec traduction française. Formules islamiques authentiques pour exprimer votre soutien à une famille en deuil.",
    keywords: ["message condoléances arabe"],
    
    alternates: {
      canonical: url,
    },
    openGraph: {
      title: "20 Messages de Condoléances en Arabe avec Traduction Française",
      description: "Messages de condoléances en arabe : 20 exemples avec traduction en français. Pour WhatsApp, SMS, visite à la famille.",
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
export default function Page() { return (<div className="bg-[#F5F0E8] text-[#1A1A1A] min-h-screen font-inter"><SchemaOrg data={buildArticleSchema({ headline: "Messages de Condoléances en Arabe", datePublished: "2024-05-15" })} /><section className="relative w-full pt-28 pb-16 bg-[#0D1208] text-white"><div className="relative z-10 w-full max-w-[1280px] mx-auto px-8 md:px-12"><Breadcrumbs items={[{ label: "Guide", href: "/guide" }, { label: "Condoléances Arabe", href: "/guide/message-condoleances-arabe" }]} /><h1 className="text-[2.2rem] md:text-[3rem] font-semibold leading-[1.1] tracking-[-0.02em] text-white mb-6 mt-6 max-w-[700px]">Messages de Condoléances en Arabe — 20 Formules Prêtes à Envoyer</h1></div></section><section className="w-full bg-[#F5F0E8] py-20 md:py-28"><div className="w-full max-w-[1280px] mx-auto px-8 md:px-12"><div className="max-w-[780px]">
    <p className="text-[15px] font-light text-[#555] leading-[1.8] mb-8">Exprimer ses condoléances en arabe est une marque de respect et d'amour envers une famille endeuillée. Que vous soyez arabophone ou non, ces formules authentiques vous permettront d'adresser un message touchant et islamiquement correct. Chaque message est présenté avec sa translittération (phonétique) et sa traduction française.</p>

  <h2 className="text-[24px] font-semibold text-[#1A1A1A] mb-6">Formules Courtes pour SMS et WhatsApp</h2>
  {[
    { ar: "إِنَّا لِلَّهِ وَإِنَّا إِلَيْهِ رَاجِعُونَ", ph: "Inna lillahi wa inna ilayhi raji'oun", fr: "Nous appartenons à Allah et c'est vers Lui que nous retournons." },
    { ar: "أَحْسَنَ اللَّهُ عَزَاءَكُمْ", ph: "Ahsana Allahu 'aza'akoum", fr: "Qu'Allah vous accorde la meilleure des consolations." },
    { ar: "رَحِمَهُ اللَّهُ وَغَفَرَ لَهُ", ph: "Rahimahou Allahu wa ghafara lahu", fr: "Qu'Allah lui accorde Sa miséricorde et Son pardon." },
    { ar: "اللَّهُمَّ اغْفِرْ لَهُ وَارْحَمْهُ", ph: "Allahoumma ighfir lahu warhamhu", fr: "Ô Allah, pardonne-lui et accorde-lui Ta miséricorde." },
    { ar: "البَقَاءُ لِلَّهِ وَحْدَهُ", ph: "Al-baqa'ou lillahi wahdah", fr: "La pérennité n'appartient qu'à Allah seul." },
    { ar: "إِنَّ لِلَّهِ مَا أَخَذَ وَلَهُ مَا أَعْطَى", ph: "Inna lillahi ma akhadha wa lahu ma a'ta", fr: "À Allah appartient ce qu'Il a repris et ce qu'Il a donné." },
    { ar: "اللَّهُمَّ أَدْخِلْهُ الجَنَّةَ", ph: "Allahoumma adkhilhoul jannah", fr: "Ô Allah, fais-le entrer au Paradis." },
    { ar: "رَحِمَكَ اللَّهُ", ph: "Rahimakou Allah", fr: "Qu'Allah vous accorde Sa miséricorde. (à dire en face du proche du défunt)" },
  ].map((msg, i) => (<div key={i} className="p-5 bg-white border border-[#E8E2D9] rounded-[10px] mb-3"><p className="text-[20px] text-right font-light text-[#1A1A1A] mb-2" dir="rtl">{msg.ar}</p><p className="text-[13px] text-[#7A5C3A] font-medium mb-1">{msg.ph}</p><p className="text-[13px] text-[#666] font-light">{msg.fr}</p></div>))}
  
  <h2 className="text-[24px] font-semibold text-[#1A1A1A] mb-6 mt-8">Messages Complets pour une Lettre ou un Message Écrit</h2>
  {[
    { ar: "عَظَّمَ اللَّهُ أَجْرَكُمْ وَأَحْسَنَ عَزَاءَكُمْ وَغَفَرَ لِمَيِّتِكُمْ", ph: "'Addama Allahu ajrakoum wa ahsana 'aza'akoum wa ghafara li mayyitikoum", fr: "Qu'Allah amplifie votre récompense, vous accorde la meilleure consolation et pardonne à votre défunt." },
    { ar: "اللَّهُمَّ اغْفِرْ لِحَيِّنَا وَمَيِّتِنَا", ph: "Allahoumma ighfir li hayyina wa mayyitina", fr: "Ô Allah, pardonne à nos vivants et à nos morts." }
  ].map((msg, i) => (<div key={i + 10} className="p-5 bg-white border border-[#E8E2D9] rounded-[10px] mb-3"><p className="text-[20px] text-right font-light text-[#1A1A1A] mb-2" dir="rtl">{msg.ar}</p><p className="text-[13px] text-[#7A5C3A] font-medium mb-1">{msg.ph}</p><p className="text-[13px] text-[#666] font-light">{msg.fr}</p></div>))}
  <p className="text-[15px] font-light text-[#555] leading-[1.8] mt-8">Pour plus de formules, consultez notre guide <Link href="/guide/condoleances-islam" className="text-[#2D6A2D] font-medium hover:underline">Condoléances en Islam</Link>.</p>
</div></div></section></div>); }
