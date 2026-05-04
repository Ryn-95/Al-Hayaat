import type { Metadata } from "next";
import Link from "next/link";
import Breadcrumbs from "@/components/ui/Breadcrumbs";
import SchemaOrg from "@/components/ui/SchemaOrg";
import { buildFuneralHomeSchema, buildFAQSchema } from "@/lib/seo-config";

export async function generateMetadata(): Promise<Metadata> {
  const url = "https://pompesfunebres-alhayaat.fr/inhumation-carre-musulman";
  return {
    title: "Inhumation Carré Musulman — Normandie & Paris | Al Hayat",
    description: "Inhumation islamique dans un carré musulman en Normandie et Île-de-France. Orientation Qibla, démarches de concession, loi française. Al Hayat 24h/24.",
    keywords: ["inhumation islamique"],
    
    alternates: {
      canonical: url,
    },
    openGraph: {
      title: "Inhumation Carré Musulman — Normandie & Paris | Al Hayat",
      description: "Inhumation islamique dans un carré musulman en Normandie et Île-de-France. Orientation Qibla, démarches de concession, loi française. Al Hayat 24h/24.",
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
  { question: "Qu\u0027est-ce qu\u0027un carré musulman ?", answer: "Un carré musulman est une section dédiée dans un cimetière communal français, réservée aux défunts de confession musulmane. Les tombes y sont orientées vers La Mecque. On en compte environ 70 en France." },
  { question: "Le cercueil est-il obligatoire en France pour un enterrement musulman ?", answer: "Oui, la loi française (Code Général des Collectivités Territoriales) impose l\u0027utilisation d\u0027un cercueil pour toute inhumation. En Islam, le linceul seul est préférable, mais la loi prévaut. Al Hayat fournit un cercueil sobre en bois naturel, conforme aux deux traditions." },
  { question: "Comment obtenir une concession dans un carré musulman ?", answer: "La demande se fait auprès de la mairie de la commune où se situe le cimetière. Al Hayat effectue ces démarches pour vous et vous informe des disponibilités dans votre zone." },
  { question: "Le corps doit-il être orienté vers La Mecque ?", answer: "Oui, selon la Sunnah, le défunt est placé sur le côté droit, face tournée vers la Qibla (direction de La Mecque). Al Hayat vérifie l\u0027orientation de chaque tombe avant l\u0027inhumation." },
  { question: "Peut-on fleurir une tombe musulmane ?", answer: "Les fleurs ne sont pas interdites en Islam mais la sobriété est recommandée. La tradition privilégie la simplicité. Le Prophète ﷺ a placé une branche verte sur une tombe (Sahih al-Bukhari), ce qui autorise la végétation naturelle." },
];

export default function InhumationCarreMusulmanPage() {
  return (
    <div className="bg-[#F5F0E8] text-[#1A1A1A] min-h-screen font-inter">
      <SchemaOrg data={[buildFuneralHomeSchema(), buildFAQSchema(faqs)]} />
      
      <section className="relative w-full pt-28 pb-16 bg-[#0D1208] text-white">
        <div className="relative z-10 w-full max-w-[1280px] mx-auto px-8 md:px-12">
          <Breadcrumbs items={[{ label: "Services", href: "#" }, { label: "Inhumation Carré Musulman", href: "/inhumation-carre-musulman" }]} />
          <h1 className="text-[2.2rem] md:text-[3rem] font-semibold leading-[1.1] tracking-[-0.02em] text-white mb-6 mt-6 max-w-[700px]">
            Inhumation dans un Carré Musulman en France
          </h1>
          <p className="text-[15px] font-light leading-[1.8] text-white/70 max-w-[640px]">
            L&apos;inhumation est l&apos;unique mode de sépulture autorisé en Islam — la crémation est strictement interdite par consensus des savants. En France, les familles musulmanes disposent de carrés confessionnels dans certains cimetières communaux pour inhumer leurs défunts selon les rites islamiques. Al Hayat Pompes Funèbres Musulmanes accompagne les familles de Normandie et d&apos;Île-de-France dans chaque étape : recherche de concession, démarches administratives, et mise en terre conforme à la Sunnah. Notre équipe, habilitée par la préfecture, garantit que l&apos;inhumation respecte à la fois le droit français et les prescriptions religieuses.
          </p>
        </div>
      </section>

      <section className="w-full bg-[#F5F0E8] py-20 md:py-28">
        <div className="w-full max-w-[1280px] mx-auto px-8 md:px-12">
          <div className="max-w-[780px]">

            <h2 className="text-[24px] md:text-[28px] font-semibold text-[#1A1A1A] mb-6">Les règles de l&apos;inhumation selon l&apos;Islam</h2>
            <p className="text-[15px] font-light text-[#555] leading-[1.8] mb-4">
              L&apos;inhumation islamique obéit à des prescriptions précises, fondées sur le Coran et la Sunnah du Prophète ﷺ. Allah dit : « De cette terre Nous vous avons créés, en elle Nous vous ramènerons, et d&apos;elle Nous vous ferons sortir une autre fois » (Sourate Ta-Ha, 20:55). Ce verset fonde le principe de l&apos;inhumation comme retour à la terre.
            </p>
            <ul className="flex flex-col gap-3 mb-8">
              {[
                "Rapidité : l\u0027inhumation doit intervenir dans les meilleurs délais. En France, le délai légal est de 6 jours ouvrables maximum après le décès.",
                "Orientation vers La Mecque (Qibla) : le corps est posé sur le côté droit, face tournée vers la Kaaba.",
                "Cercueil obligatoire en France : la loi française impose l\u0027utilisation d\u0027un cercueil, contrairement à la pratique originelle du linceul seul.",
                "Simplicité et sobriété : pas d\u0027ornements excessifs sur le cercueil ou la tombe. Le Prophète ﷺ a recommandé de ne pas surélever les tombes.",
                "Interdiction de la crémation : le consensus des savants musulmans interdit la crémation. L\u0027inhumation est la seule option.",
              ].map((item, i) => (
                <li key={i} className="flex items-start gap-3 text-[14.5px] text-[#555] font-light leading-[1.7]">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#2D6A2D] mt-2.5 shrink-0" />
                  {item}
                </li>
              ))}
            </ul>

            <h2 className="text-[24px] md:text-[28px] font-semibold text-[#1A1A1A] mb-6">Qu&apos;est-ce qu&apos;un carré musulman ?</h2>
            <p className="text-[15px] font-light text-[#555] leading-[1.8] mb-4">
              Un carré musulman est un espace réservé dans un cimetière municipal français, dédié à l&apos;inhumation des défunts de confession musulmane. On en compte environ 70 en France. Les tombes y sont orientées vers La Mecque, conformément aux prescriptions islamiques. La loi française de 1905 sur la séparation des Églises et de l&apos;État n&apos;interdit pas les regroupements confessionnels dans les cimetières — elle les encadre.
            </p>
            <p className="text-[15px] font-light text-[#555] leading-[1.8] mb-8">
              L&apos;obtention d&apos;une concession dans un carré musulman se fait auprès de la mairie de la commune. Les disponibilités varient selon les villes — certains carrés sont saturés, d&apos;autres disposent encore de places. Al Hayat connaît la situation exacte dans chaque commune de Normandie et d&apos;Île-de-France et vous oriente vers les meilleures options.
            </p>

            <h2 className="text-[24px] md:text-[28px] font-semibold text-[#1A1A1A] mb-6">Comment Al Hayat organise l&apos;inhumation</h2>
            <div className="flex flex-col gap-5 mb-8">
              {[
                { step: "1", title: "Recherche de concession", desc: "Al Hayat identifie les carrés musulmans disponibles dans votre zone et contacte la mairie pour réserver une concession. Nous vous informons des délais et des coûts." },
                { step: "2", title: "Démarches administratives", desc: "Déclaration de décès, autorisation d\u0027inhumation, permis d\u0027inhumer — notre équipe gère 100% des formalités auprès de la mairie et de la préfecture." },
                { step: "3", title: "Préparation du défunt", desc: "Toilette rituelle (Ghusl), mise en kafan, et placement dans un cercueil sobre en bois naturel. Chaque étape est conforme à la Sunnah." },
                { step: "4", title: "Salat al-Janaza", desc: "Organisation de la prière funèbre en coordination avec la mosquée locale, avant le transfert vers le cimetière." },
                { step: "5", title: "Mise en terre", desc: "Au cimetière, le cercueil est descendu dans la fosse, le corps orienté vers la Qibla. Les proches peuvent jeter de la terre sur le cercueil. Des douas sont récitées." },
              ].map((s) => (
                <div key={s.step} className="flex gap-4 items-start p-5 bg-white border border-[#E8E2D9] rounded-[10px]">
                  <div className="w-8 h-8 rounded-full bg-[#2D6A2D] flex items-center justify-center shrink-0">
                    <span className="text-[12px] font-bold text-white">{s.step}</span>
                  </div>
                  <div>
                    <h3 className="text-[16px] font-semibold text-[#1A1A1A] mb-1">{s.title}</h3>
                    <p className="text-[14px] font-light text-[#666] leading-[1.7]">{s.desc}</p>
                  </div>
                </div>
              ))}
            </div>

            <h2 className="text-[24px] md:text-[28px] font-semibold text-[#1A1A1A] mb-6">Carrés musulmans en Normandie</h2>
            <p className="text-[15px] font-light text-[#555] leading-[1.8] mb-4">
              La Normandie dispose de plusieurs carrés musulmans dans ses principales agglomérations. Al Hayat vous accompagne dans la recherche de concession dans les cimetières suivants :
            </p>
            <div className="flex flex-wrap gap-2 mb-8">
              {[{ l: "Rouen", h: "/pompes-funebres-musulmanes-rouen" }, { l: "Le Havre", h: "/pompes-funebres-musulmanes-le-havre" }, { l: "Caen", h: "/pompes-funebres-musulmanes-caen" }, { l: "Évreux", h: "/pompes-funebres-musulmanes-evreux" }, { l: "Elbeuf", h: "/pompes-funebres-musulmanes-elbeuf" }].map((c) => (
                <Link key={c.l} href={c.h} className="px-4 py-2 bg-white border border-[#E8E2D9] rounded-full text-[13px] text-[#2D6A2D] font-medium hover:border-[#2D6A2D]/30 transition-all">{c.l}</Link>
              ))}
            </div>

            <h2 className="text-[24px] md:text-[28px] font-semibold text-[#1A1A1A] mb-6">Carrés musulmans en Île-de-France</h2>
            <p className="text-[15px] font-light text-[#555] leading-[1.8] mb-4">
              L&apos;Île-de-France dispose des plus grands carrés musulmans de France, notamment le cimetière musulman de Bobigny (Seine-Saint-Denis), le carré musulman du cimetière intercommunal de Joncherolles (Villetaneuse), et celui de Thiais (Val-de-Marne). Al Hayat gère l&apos;ensemble des démarches pour ces sites.
            </p>
            <div className="flex flex-wrap gap-2 mb-10">
              {[{ l: "Paris", h: "/pompes-funebres-musulmanes-paris" }, { l: "Seine-Saint-Denis (93)", h: "/pompes-funebres-musulmanes-93" }, { l: "Val-d\u0027Oise (95)", h: "/pompes-funebres-musulmanes-95" }, { l: "Saint-Denis", h: "/pompes-funebres-musulmanes-93-saint-denis" }].map((c) => (
                <Link key={c.l} href={c.h} className="px-4 py-2 bg-white border border-[#E8E2D9] rounded-full text-[13px] text-[#2D6A2D] font-medium hover:border-[#2D6A2D]/30 transition-all">{c.l}</Link>
              ))}
            </div>

            {/* FAQ */}
            <h2 className="text-[24px] md:text-[28px] font-semibold text-[#1A1A1A] mb-6">Questions fréquentes sur l&apos;inhumation musulmane</h2>
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
              <p className="text-[15px] font-medium mb-3">Besoin d&apos;organiser une inhumation ?</p>
              <p className="text-[14px] font-light text-white/60 mb-4">Al Hayat gère l&apos;ensemble des démarches pour l&apos;inhumation dans un carré musulman. Notre équipe est disponible 24h/24 en Normandie et à Paris.</p>
              <Link href="/contact" className="inline-flex items-center gap-2 bg-[#2D6A2D] text-white px-5 py-3 rounded-[5px] text-[13.5px] font-medium hover:bg-[#255525] transition-colors">Nous contacter</Link>
            </div>
            <p className="text-[11px] text-[#999] font-light mt-6">Dernière mise à jour : mai 2025</p>
          </div>
        </div>
      </section>
    </div>
  );
}
