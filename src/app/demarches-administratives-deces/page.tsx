import type { Metadata } from "next";
import Link from "next/link";
import Breadcrumbs from "@/components/ui/Breadcrumbs";
import SchemaOrg from "@/components/ui/SchemaOrg";
import { buildFuneralHomeSchema, buildFAQSchema } from "@/lib/seo-config";

export async function generateMetadata(): Promise<Metadata> {
  const url = "https://pompesfunebres-alhayaat.fr/demarches-administratives-deces";
  return {
    title: "Démarches Administratives après un Décès Musulman | Al Hayaat — Normandie & Paris",
    description: "Déclaration de décès, acte de décès, autorisation d'inhumer, formalités consulaires : Al Hayaat gère 100% des démarches administratives pour les familles musulmanes de Normandie et Paris.",
    keywords: ["démarches administratives décès", "que faire après un deces musulman", "déclaration décès", "acte de décès", "formalités obsèques"],
    
    alternates: {
      canonical: url,
    },
    openGraph: {
      title: "Démarches Administratives après un Décès Musulman | Al Hayaat — Normandie & Paris",
      description: "Déclaration de décès, acte de décès, autorisation d'inhumer, formalités consulaires : Al Hayaat gère 100% des démarches administratives pour les familles musulmanes de Normandie et Paris.",
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
  { question: "Quel est le premier geste à faire après un décès ?", answer: "Appelez un médecin pour obtenir le certificat de décès, puis contactez Al Hayat immédiatement. Nous prenons en charge toutes les démarches suivantes : déclaration en mairie, acte de décès, autorisations." },
  { question: "Combien de temps pour déclarer un décès en mairie ?", answer: "La déclaration doit être faite dans les 24 heures suivant le décès, à la mairie du lieu de décès. Al Hayat effectue cette démarche pour vous." },
  { question: "Quels documents faut-il pour le rapatriement ?", answer: "Pour le rapatriement, il faut : l\u0027acte de décès, le certificat de non-contagion, l\u0027autorisation préfectorale de transfert, et les documents consulaires du pays de destination." },
  { question: "Al Hayat gère-t-il les formalités avec les consulats ?", answer: "Oui, Al Hayat coordonne toutes les formalités consulaires : Algérie, Maroc, Tunisie, Mali, Sénégal, et tous les pays de destination pour le rapatriement." },
  { question: "Combien de temps a-t-on pour inhumer en France ?", answer: "La loi française impose un délai maximum de 6 jours ouvrables après le décès pour procéder à l\u0027inhumation. En Islam, la rapidité est recommandée — idéalement dans les 24 heures." },
  { question: "Qui peut déclarer un décès en mairie ?", answer: "Tout proche du défunt peut déclarer le décès. Al Hayaat effectue systématiquement cette démarche pour vous, avec une procuration si nécessaire." },
  { question: "Combien de copies de l'acte de décès faut-il demander ?", answer: "Il faut demander au moins 10 copies de l'acte de décès. Chaque organisme (banque, assurance, mutuelle, CAF, retraite, sécurité sociale) exigera un original. Al Hayaat s'en charge pour vous." }
];

export default function DemarchesAdminPage() {
  return (
    <div className="bg-[#F5F0E8] text-[#1A1A1A] min-h-screen font-inter">
      <SchemaOrg data={[buildFuneralHomeSchema(), buildFAQSchema(faqs)]} />
      <section className="relative w-full pt-28 pb-16 bg-[#0D1208] text-white">
        <div className="relative z-10 w-full max-w-[1280px] mx-auto px-8 md:px-12">
          <Breadcrumbs items={[{ label: "Services", href: "#" }, { label: "Démarches Administratives", href: "/demarches-administratives-deces" }]} />
          <h1 className="text-[2.2rem] md:text-[3rem] font-semibold leading-[1.1] tracking-[-0.02em] text-white mb-6 mt-6 max-w-[700px]">
            Démarches Administratives après un Décès Musulman — Al Hayaat s'en occupe
          </h1>
          <p className="text-[15px] font-light leading-[1.8] text-white/70 max-w-[640px]">
            Un décès entraîne une série de formalités administratives urgentes que les familles en deuil doivent accomplir dans des délais très courts — souvent 24 à 48 heures. Pour une famille musulmane, ces démarches s'ajoutent à la nécessité d'organiser rapidement les rites islamiques conformément à la Sunnah. Al Hayaat Pompes Funèbres Musulmanes, habilitée par la préfecture, prend en charge l'intégralité de ces procédures en Normandie (Rouen, Le Havre, Caen, Dieppe, Évreux) et en Île-de-France (Paris, Saint-Denis, Argenteuil). Vous vous concentrez sur le deuil et la prière — nous gérons le reste.
          </p>
        </div>
      </section>

      <section className="w-full bg-[#F5F0E8] py-20 md:py-28">
        <div className="w-full max-w-[1280px] mx-auto px-8 md:px-12"><div className="max-w-[780px]">

          <h2 className="text-[24px] md:text-[28px] font-semibold text-[#1A1A1A] mb-6">Les premières heures après le décès</h2>
          <p className="text-[15px] font-light text-[#555] leading-[1.8] mb-4">
            Dès la survenue du décès, deux actions sont immédiates et urgentes. La première : faire constater le décès par un médecin, qui délivrera le certificat de décès. Ce document est la base de toutes les démarches ultérieures. Si le décès survient à l&apos;hôpital, le personnel médical s&apos;en charge. Si le décès survient à domicile, il faut appeler un médecin ou le SAMU.
          </p>
          <p className="text-[15px] font-light text-[#555] leading-[1.8] mb-8">
            La seconde action : contacter Al Hayat immédiatement. Plus tôt nous intervenons, plus nous pouvons organiser les obsèques dans les délais recommandés par l&apos;Islam. Le Prophète ﷺ a dit : « Hâtez-vous de préparer les obsèques du défunt » (Sahih al-Bukhari, n°1315). Notre équipe est joignable 24h/24.
          </p>

          <h2 className="text-[24px] md:text-[28px] font-semibold text-[#1A1A1A] mb-6">La chronologie des démarches</h2>
          <div className="flex flex-col gap-5 mb-8">
            {[
              { step: "1", title: "Certificat de décès (immédiat)", desc: "Délivré par le médecin constatant le décès. Document indispensable pour toutes les démarches. Si le décès est suspect, une autopsie peut être ordonnée par le procureur." },
              { step: "2", title: "Déclaration en mairie (sous 24h)", desc: "La déclaration doit être faite à la mairie du lieu de décès dans les 24 heures. Elle permet d\u0027obtenir l\u0027acte de décès (plusieurs copies nécessaires). Al Hayat effectue cette démarche pour vous." },
              { step: "3", title: "Autorisation d\u0027inhumer", desc: "Délivrée par la mairie après présentation de l\u0027acte de décès. Nécessaire avant la fermeture du cercueil et l\u0027inhumation dans un carré musulman." },
              { step: "4", title: "Autorisation de transport (si nécessaire)", desc: "Si le corps doit être transporté hors de la commune de décès, une autorisation préfectorale de transport est requise. Obligatoire pour le rapatriement international." },
              { step: "5", title: "Formalités consulaires (si rapatriement)", desc: "Pour un rapatriement, le consulat du pays de destination doit délivrer une autorisation. Chaque pays a ses propres exigences : certificat de non-contagion, traduction assermentée de l\u0027acte de décès, etc." },
            ].map((s) => (
              <div key={s.step} className="flex gap-4 items-start p-5 bg-white border border-[#E8E2D9] rounded-[10px]">
                <div className="w-8 h-8 rounded-full bg-[#7A5C3A] flex items-center justify-center shrink-0">
                  <span className="text-[12px] font-bold text-white">{s.step}</span>
                </div>
                <div>
                  <h3 className="text-[16px] font-semibold text-[#1A1A1A] mb-1">{s.title}</h3>
                  <p className="text-[14px] font-light text-[#666] leading-[1.7]">{s.desc}</p>
                </div>
              </div>
            ))}
          </div>

          <h2 className="text-[24px] md:text-[28px] font-semibold text-[#1A1A1A] mb-6">Les formalités consulaires pour le rapatriement</h2>
          <p className="text-[15px] font-light text-[#555] leading-[1.8] mb-4">
            En cas de <Link href="/rapatriement-corps" className="text-[#2D6A2D] font-medium hover:underline">rapatriement de corps</Link>, des formalités spécifiques doivent être accomplies auprès du consulat du pays de destination. Al Hayat coordonne avec les consulats de <Link href="/rapatriement-corps-algerie" className="text-[#2D6A2D] font-medium hover:underline">l&apos;Algérie</Link>, du <Link href="/rapatriement-corps-maroc" className="text-[#2D6A2D] font-medium hover:underline">Maroc</Link>, de la <Link href="/rapatriement-corps-tunisie" className="text-[#2D6A2D] font-medium hover:underline">Tunisie</Link>, et de tous les pays africains et asiatiques.
          </p>
          <p className="text-[15px] font-light text-[#555] leading-[1.8] mb-8">
            Les documents généralement requis comprennent : l&apos;acte de décès traduit et apostillé, le certificat de non-contagion, l&apos;autorisation préfectorale de transport international, et le laissez-passer mortuaire du consulat. Al Hayat maîtrise les exigences spécifiques de chaque pays et vous évite les retards et les erreurs administratives.
          </p>

          <h2 className="text-[24px] md:text-[28px] font-semibold text-[#1A1A1A] mb-6">Ce qu&apos;Al Hayat prend en charge</h2>
          <div className="p-6 bg-white border border-[#E8E2D9] rounded-[12px] mb-8">
            <ul className="flex flex-col gap-2">
              {["Certificat de décès — coordination avec le médecin", "Déclaration en mairie dans les 24 heures", "Obtention de l\u0027acte de décès (copies multiples)", "Autorisation d\u0027inhumer", "Autorisation de transport (intercommunal ou international)", "Certificat de non-contagion pour le rapatriement", "Formalités consulaires (tous pays)", "Coordination avec les caisses de retraite et assurances", "Information de la CAF, sécurité sociale, mutuelle"].map((d, i) => (
                <li key={i} className="flex items-start gap-3 text-[14px] text-[#555] font-light">
                  <span className="text-[#2D6A2D]">✓</span>{d}
                </li>
              ))}
            </ul>
          </div>

          <h2 className="text-[24px] md:text-[28px] font-semibold text-[#1A1A1A] mb-6">Questions fréquentes</h2>
          <div className="flex flex-col gap-4 mb-10">
            {faqs.map((faq, i) => (
              <div key={i} className="p-6 bg-white border border-[#E8E2D9] rounded-[12px]">
                <h3 className="text-[16px] font-semibold text-[#1A1A1A] mb-3">{faq.question}</h3>
                <p className="text-[14.5px] font-light text-[#555] leading-[1.7]">{faq.answer}</p>
              </div>
            ))}
          </div>

          <div className="p-6 bg-[#0D1208] rounded-[12px] text-white mt-10">
            <p className="text-[15px] font-medium mb-3">Un décès vient de survenir ?</p>
            <p className="text-[14px] font-light text-white/60 mb-4">Contactez Al Hayat immédiatement. Nous prenons en charge 100% des démarches administratives pour que vous puissiez vous consacrer au deuil et à la prière.</p>
            <Link href="/contact" className="inline-flex items-center gap-2 bg-[#2D6A2D] text-white px-5 py-3 rounded-[5px] text-[13.5px] font-medium hover:bg-[#255525] transition-colors">Nous contacter — 24h/24</Link>
          </div>
          <p className="text-[11px] text-[#999] font-light mt-6">Dernière mise à jour : mai 2025</p>
        </div></div>
      </section>
    </div>
  );
}
