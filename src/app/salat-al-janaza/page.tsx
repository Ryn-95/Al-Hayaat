import type { Metadata } from "next";
import Link from "next/link";
import Breadcrumbs from "@/components/ui/Breadcrumbs";
import SchemaOrg from "@/components/ui/SchemaOrg";
import { buildFuneralHomeSchema, buildFAQSchema } from "@/lib/seo-config";

export async function generateMetadata(): Promise<Metadata> {
  const url = "https://pompesfunebres-alhayaat.fr/salat-al-janaza";
  return {
    title: "Salat al-Janaza (Prière Funèbre) — Organisation en Normandie & Paris | Al Hayaat",
    description: "Al Hayaat organise la Salat al-Janaza avec l'imam de votre choix en Normandie et à Paris. Coordination mosquée, horaires, déroulement complet. Disponible 24h/24.",
    keywords: ["salat al-janaza"],
    
    alternates: {
      canonical: url,
    },
    openGraph: {
      title: "Salat al-Janaza (Prière Funèbre) — Organisation en Normandie & Paris | Al Hayaat",
      description: "Al Hayaat organise la Salat al-Janaza avec l'imam de votre choix en Normandie et à Paris. Coordination mosquée, horaires, déroulement complet. Disponible 24h/24.",
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
  { question: "La Salat al-Janaza est-elle obligatoire ?", answer: "Oui, c'est une obligation communautaire (fard kifaya). Si personne ne l'accomplit, tous les membres de la communauté sont en faute. Al Hayaat s'assure que cette prière est organisée dans tous les cas." },
  { question: "Peut-on faire la Salat al-Janaza sans mosquée ?", answer: "Oui. La Salat al-Janaza peut être réalisée en extérieur, au cimetière, ou dans tout espace propre. L'imam peut se déplacer sur place avec Al Hayaat." },
  { question: "Combien de personnes minimum pour la Salat al-Janaza ?", answer: "Théoriquement, un seul croyant peut accomplir la Salat al-Janaza. Cependant, plus la communauté est nombreuse, plus la récompense est grande pour le défunt." }
];

export default function SalatAlJanazaPage() {
  return (
    <div className="bg-[#F5F0E8] text-[#1A1A1A] min-h-screen font-inter">
      <SchemaOrg data={[buildFuneralHomeSchema(), buildFAQSchema(faqs)]} />
      
      <section className="relative w-full pt-28 pb-16 bg-[#0D1208] text-white">
        <div className="relative z-10 w-full max-w-[1280px] mx-auto px-8 md:px-12">
          <Breadcrumbs items={[{ label: "Services", href: "#" }, { label: "Salat al-Janaza", href: "/salat-al-janaza" }]} />
          <h1 className="text-[2.2rem] md:text-[3rem] font-semibold leading-[1.1] tracking-[-0.02em] text-white mb-6 mt-6 max-w-[700px]">
            Organisation de la Salat al-Janaza en Normandie et à Paris
          </h1>
          <p className="text-[15px] font-light leading-[1.8] text-white/70 max-w-[640px]">
            La Salat al-Janaza (صَلَاةُ الْجَنَازَة) est la prière funèbre que la communauté musulmane accomplit collectivement pour son défunt. C'est une obligation communautaire (fard kifaya) : si un groupe s'en acquitte, les autres en sont dispensés. Négliger cette obligation lorsque personne ne la remplit constitue un péché pour l'ensemble de la communauté. Al Hayaat coordonne l'organisation de la Salat al-Janaza dans toute la Normandie et en Île-de-France — en lien avec la mosquée de votre choix ou l'imam disponible.
          </p>
        </div>
      </section>

      <section className="w-full bg-[#F5F0E8] py-20 md:py-28">
        <div className="w-full max-w-[1280px] mx-auto px-8 md:px-12">
          <div className="max-w-[780px]">

            <h2 className="text-[24px] md:text-[28px] font-semibold text-[#1A1A1A] mb-6">Comment se déroule la Salat al-Janaza ?</h2>
            <p className="text-[15px] font-light text-[#555] leading-[1.8] mb-4">
              La Salat al-Janaza se prie debout, sans roukou ni soujoud. L'imam se place au niveau de la poitrine du défunt (homme) ou au niveau du milieu du corps (femme). Les fidèles doivent être en état de pureté rituelle (wudhu) et faire face à la Qibla.
            </p>
            <div className="flex flex-col gap-5 mb-8">
              {[
                { step: "1er Takbir", title: "Récitation de la sourate Al-Fatiha", desc: "Après le premier Takbir, on récite silencieusement la sourate Al-Fatiha." },
                { step: "2e Takbir", title: "Récitation des Salawat sur le Prophète ﷺ", desc: "Après le deuxième Takbir, on récite la prière ibrahimiyya." },
                { step: "3e Takbir", title: "Doua pour le défunt", desc: "On invoque Allah en faveur du défunt : « Allahoumma ighfir lahu warhamhu... »" },
                { step: "4e Takbir", title: "Salam final", desc: "Après le quatrième Takbir, on tourne la tête à droite puis à gauche pour le Salam." },
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

            <h2 className="text-[24px] md:text-[28px] font-semibold text-[#1A1A1A] mb-6">Mosquées Partenaires en Normandie</h2>
            <p className="text-[15px] font-light text-[#555] leading-[1.8] mb-4">
              Al Hayaat collabore avec les principales mosquées de Normandie pour organiser la Salat al-Janaza dans les meilleures conditions :<br /><br />
              <strong>Rouen :</strong> Grande Mosquée de Rouen (Rue Jean Jaurès) et mosquées de Sotteville, Grand-Quevilly, Saint-Étienne-du-Rouvray.<br /><br />
              <strong>Le Havre :</strong> Mosquée En-Nour (Caucriauville), Mosquée de Mont-Gaillard, mosquées de Harfleur et Montivilliers.<br /><br />
              <strong>Caen :</strong> Mosquée de Caen et lieux de culte du Calvados.
            </p>
            
            <h2 className="text-[24px] md:text-[28px] font-semibold text-[#1A1A1A] mb-6">La Salat al-Janaza à Domicile ou au Cimetière</h2>
            <p className="text-[15px] font-light text-[#555] leading-[1.8] mb-6">
              Sur demande de la famille, la Salat al-Janaza peut se tenir directement au cimetière avant l'inhumation, ou en chambre funéraire. Al Hayaat s'adapte à chaque situation et coordonne avec l'imam pour trouver l'horaire le plus respectueux des délais islamiques.
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
