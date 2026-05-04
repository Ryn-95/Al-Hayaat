import type { Metadata } from "next";
import Link from "next/link";
import Breadcrumbs from "@/components/ui/Breadcrumbs";
import SchemaOrg from "@/components/ui/SchemaOrg";
import { buildFuneralHomeSchema, buildFAQSchema } from "@/lib/seo-config";

export async function generateMetadata(): Promise<Metadata> {
  const url = "https://pompesfunebres-alhayaat.fr/salat-al-janaza";
  return {
    title: "Salat al-Janaza — Prière Funèbre Musulmane | Al Hayat",
    description: "Organisation de la Salat al-Janaza en Normandie et Paris. Coordination avec les mosquées, les 4 Takbir expliqués. Al Hayat disponible 24h/24.",
    keywords: ["salat al-janaza",
    
    alternates: {
      canonical: url,
    },
    openGraph: {
      title: "Salat al-Janaza — Prière Funèbre Musulmane | Al Hayat",
      description: "Organisation de la Salat al-Janaza en Normandie et Paris. Coordination avec les mosquées, les 4 Takbir expliqués. Al Hayat disponible 24h/24.",
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
  { question: "La Salat al-Janaza est-elle obligatoire ?", answer: "Oui, la Salat al-Janaza est une obligation collective (fard kifaya). Si un groupe suffisant de musulmans l\u0027accomplit, l\u0027obligation est levée pour les autres. Si personne ne l\u0027accomplit, toute la communauté est en péché." },
  { question: "Combien de Takbir dans la Salat al-Janaza ?", answer: "La Salat al-Janaza comporte 4 Takbir (Allahu Akbar). Après le 1er : la Fatiha. Après le 2e : les salutations sur le Prophète. Après le 3e : la doua pour le défunt. Après le 4e : une courte invocation puis le Salam." },
  { question: "Les femmes peuvent-elles prier la Salat al-Janaza ?", answer: "Oui, les femmes peuvent accomplir la Salat al-Janaza. Le Prophète ﷺ n\u0027a jamais interdit aux femmes de prier la prière funèbre." },
  { question: "Peut-on prier la Salat al-Janaza au cimetière ?", answer: "Oui, la Salat al-Janaza peut se tenir à la mosquée, dans une salle de prière ou au cimetière. Al Hayat organise la prière selon les souhaits de la famille." },
  { question: "Faut-il être en état de pureté pour la Salat al-Janaza ?", answer: "Oui, comme pour toute prière en Islam, les ablutions (wudhu) sont nécessaires avant d\u0027accomplir la Salat al-Janaza." },
];

export default function SalatAlJanazaPage() {
  return (
    <div className="bg-[#F5F0E8] text-[#1A1A1A] min-h-screen font-inter">
      <SchemaOrg data={[buildFuneralHomeSchema(), buildFAQSchema(faqs)]} />
      
      <section className="relative w-full pt-28 pb-16 bg-[#0D1208] text-white">
        <div className="relative z-10 w-full max-w-[1280px] mx-auto px-8 md:px-12">
          <Breadcrumbs items={[{ label: "Services", href: "#" }, { label: "Salat al-Janaza", href: "/salat-al-janaza" }]} />
          <h1 className="text-[2.2rem] md:text-[3rem] font-semibold leading-[1.1] tracking-[-0.02em] text-white mb-6 mt-6 max-w-[700px]">
            La Salat al-Janaza — Prière Funèbre en Islam
          </h1>
          <p className="text-[15px] font-light leading-[1.8] text-white/70 max-w-[640px]">
            La Salat al-Janaza (صلاة الجنازة) est la prière funèbre que la communauté musulmane accomplit pour le défunt avant son inhumation. Cette prière est une obligation collective (fard kifaya) qui constitue le dernier acte de solidarité envers le musulman décédé. Le Prophète ﷺ a dit : « Priez sur vos morts » (Sunan Ibn Majah). Al Hayat coordonne l&apos;organisation de cette prière avec les mosquées de Normandie et d&apos;Île-de-France, en veillant à ce que chaque famille puisse rendre cet ultime hommage dans la dignité et la sérénité.
          </p>
        </div>
      </section>

      <section className="w-full bg-[#F5F0E8] py-20 md:py-28">
        <div className="w-full max-w-[1280px] mx-auto px-8 md:px-12">
          <div className="max-w-[780px]">

            <h2 className="text-[24px] md:text-[28px] font-semibold text-[#1A1A1A] mb-6">Qu&apos;est-ce que la Salat al-Janaza ?</h2>
            <p className="text-[15px] font-light text-[#555] leading-[1.8] mb-4">
              La Salat al-Janaza est une prière spéciale qui se distingue des cinq prières quotidiennes. Elle ne comporte ni ruku (inclinaison) ni sujud (prosternation). Le prieur reste debout du début à la fin. Elle se compose de quatre Takbir (proclamations de la grandeur d&apos;Allah), entre lesquels des invocations spécifiques sont récitées.
            </p>
            <p className="text-[15px] font-light text-[#555] leading-[1.8] mb-8">
              Cette prière est un droit du défunt sur la communauté musulmane. Le Prophète ﷺ a dit : « Les droits du musulman sur le musulman sont au nombre de cinq : répondre au salut, visiter le malade, suivre le cortège funèbre, accepter l&apos;invitation et dire yarhamuk Allah à celui qui éternue » (Sahih al-Bukhari, n°1240). Al Hayat facilite l&apos;exercice de ce droit en coordonnant chaque aspect de la prière funèbre.
            </p>

            <h2 className="text-[24px] md:text-[28px] font-semibold text-[#1A1A1A] mb-6">Les 4 Takbir de la Salat al-Janaza</h2>
            <div className="flex flex-col gap-5 mb-8">
              {[
                { step: "1er Takbir", title: "Récitation de la Fatiha", desc: "Après le premier « Allahu Akbar », on récite la sourate Al-Fatiha. Selon certains savants, on peut aussi réciter une courte sourate après la Fatiha." },
                { step: "2e Takbir", title: "Salutations sur le Prophète ﷺ", desc: "Après le deuxième Takbir, on récite les salutations sur le Prophète (Salat Ibrahimiyya), la même formule que celle utilisée dans le Tachahoud final des prières." },
                { step: "3e Takbir", title: "Doua pour le défunt", desc: "C\u0027est le cœur de la prière. On invoque Allah en faveur du défunt : « Allahoumma ighfir lahu warhamhu, wa \u0027afihi wa\u0027fou \u0027anhu » — Ô Allah, pardonne-lui, accorde-lui Ta miséricorde, accorde-lui le salut et pardonne-lui." },
                { step: "4e Takbir", title: "Invocation finale et Salam", desc: "Après le quatrième Takbir, on fait une courte doua pour l\u0027ensemble des musulmans, puis on conclut par le Taslim (As-salamou alaykoum wa rahmatullah) en tournant la tête à droite." },
              ].map((s) => (
                <div key={s.step} className="flex gap-4 items-start p-5 bg-white border border-[#E8E2D9] rounded-[10px]">
                  <div className="w-10 h-8 rounded-full bg-[#7A5C3A] flex items-center justify-center shrink-0">
                    <span className="text-[11px] font-bold text-white">{s.step}</span>
                  </div>
                  <div>
                    <h3 className="text-[16px] font-semibold text-[#1A1A1A] mb-1">{s.title}</h3>
                    <p className="text-[14px] font-light text-[#666] leading-[1.7]">{s.desc}</p>
                  </div>
                </div>
              ))}
            </div>

            <h2 className="text-[24px] md:text-[28px] font-semibold text-[#1A1A1A] mb-6">Comment Al Hayat organise la prière funèbre</h2>
            <p className="text-[15px] font-light text-[#555] leading-[1.8] mb-4">
              Dès la prise en charge du défunt, Al Hayat contacte la mosquée choisie par la famille pour convenir du moment de la Salat al-Janaza. En Normandie, nous travaillons avec les principales mosquées de Rouen, Le Havre et Caen. En Île-de-France, nos partenariats couvrent Paris et la banlieue proche.
            </p>
            <p className="text-[15px] font-light text-[#555] leading-[1.8] mb-8">
              L&apos;imam est prévenu, la communauté informée via les canaux de la mosquée, et le corps du défunt est préparé (toilette rituelle et mise en kafan) avant la prière. Al Hayat assure également le transport du cercueil vers la mosquée et, après la prière, vers le <Link href="/inhumation-carre-musulman" className="text-[#2D6A2D] font-medium hover:underline">carré musulman</Link> ou l&apos;aéroport en cas de <Link href="/rapatriement-corps" className="text-[#2D6A2D] font-medium hover:underline">rapatriement</Link>.
            </p>

            <h2 className="text-[24px] md:text-[28px] font-semibold text-[#1A1A1A] mb-6">La Salat al-Janaza en Normandie et à Paris</h2>
            <p className="text-[15px] font-light text-[#555] leading-[1.8] mb-6">
              Al Hayat coordonne la prière funèbre dans toute notre zone d&apos;intervention. Les mosquées partenaires incluent notamment la Mosquée Arrahma de Rouen, la Grande Mosquée du Havre, la Mosquée de Caen, et en Île-de-France, les mosquées de Saint-Denis, Argenteuil et du 18e arrondissement de Paris.
            </p>
            <div className="flex flex-wrap gap-2 mb-10">
              {[
                { label: "Rouen", href: "/pompes-funebres-musulmanes-rouen" },
                { label: "Le Havre", href: "/pompes-funebres-musulmanes-le-havre" },
                { label: "Caen", href: "/pompes-funebres-musulmanes-caen" },
                { label: "Paris", href: "/pompes-funebres-musulmanes-paris" },
                { label: "Saint-Denis", href: "/pompes-funebres-musulmanes-93-saint-denis" },
              ].map((city) => (
                <Link key={city.href} href={city.href} className="px-4 py-2 bg-white border border-[#E8E2D9] rounded-full text-[13px] text-[#2D6A2D] font-medium hover:border-[#2D6A2D]/30 transition-all">
                  {city.label}
                </Link>
              ))}
            </div>

            {/* FAQ */}
            <h2 className="text-[24px] md:text-[28px] font-semibold text-[#1A1A1A] mb-6">Questions fréquentes sur la Salat al-Janaza</h2>
            <div className="flex flex-col gap-4 mb-10">
              {faqs.map((faq, i) => (
                <div key={i} className="p-6 bg-white border border-[#E8E2D9] rounded-[12px]">
                  <h3 className="text-[16px] font-semibold text-[#1A1A1A] mb-3">{faq.question}</h3>
                  <p className="text-[14.5px] font-light text-[#555] leading-[1.7]">{faq.answer}</p>
                </div>
              ))}
            </div>

            {/* CTA */}
            <div className="p-6 bg-[#0D1208] rounded-[12px] text-white mt-10">
              <p className="text-[15px] font-medium mb-3">Besoin d&apos;organiser une prière funèbre ?</p>
              <p className="text-[14px] font-light text-white/60 mb-4">Al Hayat coordonne la Salat al-Janaza avec les mosquées de votre ville. Notre équipe est disponible 24h/24 pour accompagner votre famille dans cette épreuve.</p>
              <Link href="/contact" className="inline-flex items-center gap-2 bg-[#2D6A2D] text-white px-5 py-3 rounded-[5px] text-[13.5px] font-medium hover:bg-[#255525] transition-colors">Nous contacter</Link>
            </div>
            <p className="text-[11px] text-[#999] font-light mt-6">Dernière mise à jour : mai 2025</p>
          </div>
        </div>
      </section>
    </div>
  );
}
