import type { Metadata } from "next";
import Link from "next/link";
import Breadcrumbs from "@/components/ui/Breadcrumbs";
import SchemaOrg from "@/components/ui/SchemaOrg";
import { buildArticleSchema, buildFAQSchema } from "@/lib/seo-config";

export async function generateMetadata(): Promise<Metadata> {
  const url = "https://pompesfunebres-alhayaat.fr/guide/doua-deces-islam";
  return {
    title: "Doua pour un Mort en Islam — Invocations (Arabe + Français)",
    description: "Douas complètes pour un défunt en Islam : texte arabe, phonétique et traduction française. Invocations Salat Janaza, cimetière, proches endeuillés.",
    keywords: ["doua pour un mort",
    
    alternates: {
      canonical: url,
    },
    openGraph: {
      title: "Doua pour un Mort en Islam — Invocations (Arabe + Français)",
      description: "Douas complètes pour un défunt en Islam : texte arabe, phonétique et traduction française. Invocations Salat Janaza, cimetière, proches endeuillés.",
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
  { question: "Quelle doua réciter pour un mort en Islam ?", answer: "La doua la plus connue est : Allahoumma ighfir lahu warhamhu, wa 'afihi wa'fou 'anhu (Ô Allah, pardonne-lui et accorde-lui Ta miséricorde). Elle est tirée du hadith rapporté par Muslim (n°963)." },
  { question: "Quand réciter les douas pour le défunt ?", answer: "Les douas peuvent être récitées à tout moment : à l'annonce du décès, lors de la toilette rituelle, pendant la Salat al-Janaza (3e Takbir), à l'enterrement, lors des visites au cimetière, et dans vos prières quotidiennes." },
  { question: "Peut-on réciter des douas pour le mort en français ?", answer: "Oui, les douas personnelles peuvent être récitées dans toute langue. Seules les douas de la Salat al-Janaza doivent être en arabe selon la majorité des savants. L'essentiel est la sincérité du cœur." },
  { question: "Les douas des vivants profitent-elles au mort ?", answer: "Oui, le Prophète ﷺ a dit : Quand le fils d'Adam meurt, ses œuvres s'arrêtent sauf trois : une aumône continue, une science utile, et un enfant pieux qui invoque Allah en sa faveur (Sahih Muslim, n°1631)." },
  { question: "Combien de temps doit-on faire des douas pour un défunt ?", answer: "Il n'y a pas de limite dans le temps. Les douas pour un défunt peuvent être faites indéfiniment. Le Prophète ﷺ visitait régulièrement le cimetière de Baqi' pour invoquer Allah en faveur des morts." },
];

export default function DouaDecesIslamPage() {
  const articleSchema = buildArticleSchema({ headline: "Doua pour un Mort en Islam : Les Invocations Essentielles", datePublished: "2024-01-15", dateModified: "2025-05-01" });
  const faqSchema = buildFAQSchema(faqs);

  return (
    <div className="bg-[#F5F0E8] text-[#1A1A1A] min-h-screen font-inter">
      <SchemaOrg data={[articleSchema, faqSchema]} />
      
      <section className="relative w-full pt-28 pb-16 bg-[#0D1208] text-white">
        <div className="relative z-10 w-full max-w-[1280px] mx-auto px-8 md:px-12">
          <Breadcrumbs items={[{ label: "Guide", href: "/guide" }, { label: "Doua pour un Mort", href: "/guide/doua-deces-islam" }]} />
          <h1 className="text-[2.2rem] md:text-[3rem] font-semibold leading-[1.1] tracking-[-0.02em] text-white mb-6 mt-6 max-w-[700px]">
            Doua pour un Mort en Islam : Les Invocations Essentielles
          </h1>
          <p className="text-[15px] font-light leading-[1.8] text-white/70 max-w-[640px]">
            La doua (دعاء) est l&apos;une des plus belles formes d&apos;adoration en Islam — et l&apos;un des rares actes qui continue de profiter au défunt après sa mort. Le Prophète ﷺ a dit : « Quand le fils d&apos;Adam meurt, ses œuvres s&apos;arrêtent sauf trois : une aumône continue (sadaqa jariya), une science utile, et un enfant pieux qui invoque Allah en sa faveur » (Sahih Muslim, n°1631). Ce guide rassemble les douas authentiques pour le défunt, tirées du Coran et de la Sunnah, avec le texte arabe, la phonétique française et la traduction complète. Que vous soyez en deuil ou que vous souhaitiez accompagner un proche, ces invocations vous aideront à accomplir ce devoir de foi.
          </p>
          <p className="text-[12px] text-white/40 mt-4">Lecture : 8 min</p>
        </div>
      </section>

      <section className="w-full bg-[#F5F0E8] py-20 md:py-28">
        <div className="w-full max-w-[1280px] mx-auto px-8 md:px-12"><div className="max-w-[780px]">

          <h2 className="text-[24px] md:text-[28px] font-semibold text-[#1A1A1A] mb-6">Qu&apos;est-ce qu&apos;une Doua en Islam ?</h2>
          <p className="text-[15px] font-light text-[#555] leading-[1.8] mb-4">
            La doua (دعاء) signifie littéralement « appel » ou « invocation ». C&apos;est l&apos;acte de s&apos;adresser directement à Allah pour Lui demander quelque chose — pardon, miséricorde, guidance, ou toute autre grâce. Le Prophète ﷺ a dit : « La doua est l&apos;essence de l&apos;adoration » (Sunan at-Tirmidhi, n°3371). Invoquer Allah en faveur d&apos;un défunt est donc un acte d&apos;adoration à part entière.
          </p>
          <p className="text-[15px] font-light text-[#555] leading-[1.8] mb-8">
            En Islam, la mort n&apos;est pas une fin — c&apos;est un passage vers la vie éternelle. Allah dit dans le Coran : « Toute âme goûtera la mort. Ensuite c&apos;est vers Nous que vous serez ramenés » (Sourate Al-Ankabout, 29:57). Les douas que nous récitons pour nos morts sont un lien spirituel entre les vivants et les défunts, un acte de solidarité qui transcende la mort physique.
          </p>

          <h2 className="text-[24px] md:text-[28px] font-semibold text-[#1A1A1A] mb-6">Les Douas pour le Défunt</h2>

          {/* Doua 1 */}
          <div className="p-6 bg-white border border-[#E8E2D9] rounded-[12px] mb-6">
            <p className="text-[11px] tracking-[0.14em] font-semibold text-[#7A5C3A] uppercase mb-3">Doua de base — Pardon et Miséricorde (Sahih Muslim, n°963)</p>
            <p className="text-[22px] text-right font-light text-[#1A1A1A] mb-3 leading-[2]" dir="rtl">اللَّهُمَّ اغْفِرْ لَهُ وَارْحَمْهُ وَعَافِهِ وَاعْفُ عَنْهُ وَأَكْرِمْ نُزُلَهُ وَوَسِّعْ مُدْخَلَهُ وَاغْسِلْهُ بِالمَاءِ وَالثَّلْجِ وَالبَرَدِ وَنَقِّهِ مِنَ الخَطَايَا كَمَا نَقَّيْتَ الثَّوْبَ الأَبْيَضَ مِنَ الدَّنَسِ</p>
            <p className="text-[14px] text-[#7A5C3A] font-medium mb-2">Allahoumma ighfir lahu warhamhu, wa &apos;afihi wa&apos;fou &apos;anhu, wa akrim nuzoulahu, wa wassi&apos; moudkhalahu, waghsilhu bil-ma&apos;i wath-thalji wal-barad, wa naqqihi minal khataya kama naqqayta-th-thawbal abyada minad-danas</p>
            <p className="text-[14px] text-[#555] font-light leading-[1.7]">« Ô Allah, pardonne-lui, accorde-lui Ta miséricorde, accorde-lui le salut et pardonne-lui. Honore sa demeure et élargis son entrée. Lave-le avec l&apos;eau, la neige et la grêle, et purifie-le de ses péchés comme Tu purifies le vêtement blanc de la souillure. »</p>
            <p className="text-[12px] text-[#999] mt-3">Contexte : C&apos;est la doua la plus complète pour un défunt, rapportée par Muslim. Elle est récitée lors de la Salat al-Janaza (3e Takbir) et à tout autre moment.</p>
          </div>

          {/* Doua 2 */}
          <div className="p-6 bg-white border border-[#E8E2D9] rounded-[12px] mb-6">
            <p className="text-[11px] tracking-[0.14em] font-semibold text-[#7A5C3A] uppercase mb-3">Doua pour l&apos;entrée au Paradis</p>
            <p className="text-[22px] text-right font-light text-[#1A1A1A] mb-3 leading-[2]" dir="rtl">اللَّهُمَّ أَدْخِلْهُ الْجَنَّةَ وَأَعِذْهُ مِنْ عَذَابِ الْقَبْرِ</p>
            <p className="text-[14px] text-[#7A5C3A] font-medium mb-2">Allahoumma adkhilhoul jannah wa a&apos;idh-hou min &apos;adhabil qabr</p>
            <p className="text-[14px] text-[#555] font-light leading-[1.7]">« Ô Allah, fais-le entrer au Paradis et protège-le du châtiment de la tombe. »</p>
            <p className="text-[12px] text-[#999] mt-3">Contexte : Invocation courte mais puissante, à réciter lors des visites au cimetière ou dans vos prières personnelles.</p>
          </div>

          {/* Doua 3 */}
          <div className="p-6 bg-white border border-[#E8E2D9] rounded-[12px] mb-6">
            <p className="text-[11px] tracking-[0.14em] font-semibold text-[#7A5C3A] uppercase mb-3">Doua complète de la Salat al-Janaza (Sunan Abu Dawud, n°3199)</p>
            <p className="text-[22px] text-right font-light text-[#1A1A1A] mb-3 leading-[2]" dir="rtl">اللَّهُمَّ اغْفِرْ لِحَيِّنَا وَمَيِّتِنَا وَشَاهِدِنَا وَغَائِبِنَا وَصَغِيرِنَا وَكَبِيرِنَا وَذَكَرِنَا وَأُنْثَانَا</p>
            <p className="text-[14px] text-[#7A5C3A] font-medium mb-2">Allahoumma ighfir li hayyina wa mayyitina, wa shahidina wa gha&apos;ibina, wa saghirina wa kabirina, wa dhakarina wa ounthana</p>
            <p className="text-[14px] text-[#555] font-light leading-[1.7]">« Ô Allah, pardonne à nos vivants et à nos morts, à ceux d&apos;entre nous qui sont présents et à ceux qui sont absents, à nos jeunes et à nos vieux, à nos hommes et à nos femmes. »</p>
            <p className="text-[12px] text-[#999] mt-3">Contexte : Cette doua est récitée lors du 3e Takbir de la <Link href="/salat-al-janaza" className="text-[#2D6A2D] hover:underline">Salat al-Janaza</Link>. Elle englobe tous les musulmans, vivants et morts.</p>
          </div>

          {/* Doua 4 - Nouvelle */}
          <div className="p-6 bg-white border border-[#E8E2D9] rounded-[12px] mb-6">
            <p className="text-[11px] tracking-[0.14em] font-semibold text-[#7A5C3A] uppercase mb-3">Doua pour remplacer l&apos;épreuve par le bien (Sahih Muslim, n°918)</p>
            <p className="text-[22px] text-right font-light text-[#1A1A1A] mb-3 leading-[2]" dir="rtl">اللَّهُمَّ أَبْدِلْهُ دَارًا خَيْرًا مِنْ دَارِهِ وَأَهْلًا خَيْرًا مِنْ أَهْلِهِ وَزَوْجًا خَيْرًا مِنْ زَوْجِهِ</p>
            <p className="text-[14px] text-[#7A5C3A] font-medium mb-2">Allahoumma abdilhu daran khayran min darihi, wa ahlan khayran min ahlihi, wa zawjan khayran min zawjihi</p>
            <p className="text-[14px] text-[#555] font-light leading-[1.7]">« Ô Allah, donne-lui une demeure meilleure que sa demeure, une famille meilleure que sa famille, et un conjoint meilleur que son conjoint. »</p>
            <p className="text-[12px] text-[#999] mt-3">Contexte : Doua d&apos;espérance pour le défunt, lui souhaitant le meilleur dans l&apos;au-delà. Rapportée par Muslim dans le chapitre des funérailles.</p>
          </div>

          <h2 className="text-[24px] md:text-[28px] font-semibold text-[#1A1A1A] mb-6">Doua à l&apos;annonce du décès</h2>
          <p className="text-[15px] font-light text-[#555] leading-[1.8] mb-4">
            Lorsqu&apos;un musulman apprend le décès d&apos;un proche, la première parole à prononcer est l&apos;istirja&apos; — la formule de résignation à la volonté d&apos;Allah :
          </p>
          <div className="p-6 bg-white border border-[#E8E2D9] rounded-[12px] mb-8">
            <p className="text-[11px] tracking-[0.14em] font-semibold text-[#7A5C3A] uppercase mb-3">Istirja&apos; — Coran, Sourate Al-Baqara, 2:156</p>
            <p className="text-[22px] text-right font-light text-[#1A1A1A] mb-3 leading-[2]" dir="rtl">إِنَّا لِلَّهِ وَإِنَّا إِلَيْهِ رَاجِعُونَ</p>
            <p className="text-[14px] text-[#7A5C3A] font-medium mb-2">Inna lillahi wa inna ilayhi raji&apos;oun</p>
            <p className="text-[14px] text-[#555] font-light leading-[1.7]">« Nous appartenons à Allah et c&apos;est vers Lui que nous retournons. »</p>
            <p className="text-[12px] text-[#999] mt-3">Cette formule est citée dans le Coran comme la parole des patients face à l&apos;épreuve. Allah dit : « Ceux-là recevront des bénédictions de leur Seigneur, ainsi que la miséricorde » (2:157).</p>
          </div>

          <h2 className="text-[24px] md:text-[28px] font-semibold text-[#1A1A1A] mb-6">Douas au cimetière</h2>
          <p className="text-[15px] font-light text-[#555] leading-[1.8] mb-4">
            Lors d&apos;une visite au cimetière, le Prophète ﷺ nous a enseigné une salutation spécifique pour les morts. Cette pratique est recommandée (mustahabb) et rappelle au vivant sa propre mortalité.
          </p>
          <div className="p-6 bg-white border border-[#E8E2D9] rounded-[12px] mb-8">
            <p className="text-[11px] tracking-[0.14em] font-semibold text-[#7A5C3A] uppercase mb-3">En entrant au cimetière (Sahih Muslim, n°975)</p>
            <p className="text-[22px] text-right font-light text-[#1A1A1A] mb-3 leading-[2]" dir="rtl">السَّلاَمُ عَلَيْكُمْ أَهْلَ الدِّيَارِ مِنَ المُؤْمِنِينَ وَالمُسْلِمِينَ وَإِنَّا إِنْ شَاءَ اللَّهُ بِكُمْ لاَحِقُونَ نَسْأَلُ اللَّهَ لَنَا وَلَكُمُ العَافِيَةَ</p>
            <p className="text-[14px] text-[#7A5C3A] font-medium mb-2">Assalamou &apos;alaykoum ahla-d-diyari minal mou&apos;minina wal mouslimin, wa inna in sha&apos;a Allahu bikoum lahiqoun, nas&apos;alou Allaha lana wa lakoumoul &apos;afiyah</p>
            <p className="text-[14px] text-[#555] font-light leading-[1.7]">« Que la paix soit sur vous, habitants de ces demeures, parmi les croyants et les musulmans. Et nous vous rejoindrons, si Allah le veut. Nous demandons à Allah le salut pour nous et pour vous. »</p>
          </div>

          <h2 className="text-[24px] md:text-[28px] font-semibold text-[#1A1A1A] mb-6">Quand réciter les Douas pour le mort ?</h2>
          <p className="text-[15px] font-light text-[#555] leading-[1.8] mb-4">
            Les occasions de faire des douas pour un défunt sont nombreuses et ne se limitent pas aux premiers jours suivant le décès :
          </p>
          <ul className="flex flex-col gap-3 mb-8">
            {[
              "À l\u0027annonce du décès — réciter l\u0027istirja\u0027 et invoquer Allah pour le défunt",
              "Lors de la toilette rituelle (Ghusl) — les participants peuvent invoquer en silence",
              "Pendant la Salat al-Janaza — le 3e Takbir est spécifiquement dédié à la doua pour le mort",
              "À l\u0027enterrement — au moment de la mise en terre et après",
              "Lors des visites au cimetière — prononcer le salam et faire des douas",
              "Dans vos prières quotidiennes — après le Tachahoud, avant le Salam final",
              "À tout moment — il n\u0027y a pas de limite de temps pour invoquer en faveur d\u0027un mort",
            ].map((t, i) => (
              <li key={i} className="flex items-start gap-3 text-[14.5px] text-[#555] font-light leading-[1.7]">
                <span className="w-1.5 h-1.5 rounded-full bg-[#2D6A2D] mt-2.5 shrink-0" />{t}
              </li>
            ))}
          </ul>

          <h2 className="text-[24px] md:text-[28px] font-semibold text-[#1A1A1A] mb-6">Questions fréquentes sur les douas pour un mort</h2>
          <div className="flex flex-col gap-4 mb-10">
            {faqs.map((faq, i) => (
              <div key={i} className="p-6 bg-white border border-[#E8E2D9] rounded-[12px]">
                <h3 className="text-[16px] font-semibold text-[#1A1A1A] mb-3">{faq.question}</h3>
                <p className="text-[14.5px] font-light text-[#555] leading-[1.7]">{faq.answer}</p>
              </div>
            ))}
          </div>

          <div className="p-6 bg-[#0D1208] rounded-[12px] text-white mt-10">
            <p className="text-[15px] font-medium mb-3">Al Hayat vous accompagne</p>
            <p className="text-[14px] font-light text-white/60 mb-4">Pour l&apos;organisation complète des obsèques musulmanes — <Link href="/toilette-rituelle-musulmane" className="text-[#6BAA6B] hover:underline">toilette rituelle</Link>, <Link href="/salat-al-janaza" className="text-[#6BAA6B] hover:underline">Salat al-Janaza</Link>, <Link href="/inhumation-carre-musulman" className="text-[#6BAA6B] hover:underline">inhumation</Link> — contactez Al Hayat. Disponible 24h/24 en <Link href="/normandie" className="text-[#6BAA6B] hover:underline">Normandie</Link> et à <Link href="/paris-ile-de-france" className="text-[#6BAA6B] hover:underline">Paris</Link>.</p>
            <Link href="/contact" className="inline-flex items-center gap-2 bg-[#2D6A2D] text-white px-5 py-3 rounded-[5px] text-[13.5px] font-medium hover:bg-[#255525] transition-colors">Nous contacter</Link>
          </div>
          <p className="text-[11px] text-[#999] font-light mt-6">Dernière mise à jour : mai 2025</p>
        </div></div>
      </section>
    </div>
  );
}
