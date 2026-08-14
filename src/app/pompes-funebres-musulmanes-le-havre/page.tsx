import { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Pompes Funèbres Musulmanes Le Havre (76) | Al Hayaat — Siège | 24h/7j",
  description: "Al Hayaat, pompes funèbres musulmanes basées au Havre (44 Rue Saint-Jacques, 76600). Toilette rituelle, carré musulman, rapatriement. Siège Normandie. Habilitation préfectorale. 24h/24.",
  alternates: {
    canonical: "https://www.pompesfunebres-alhayaat.fr/pompes-funebres-musulmanes-le-havre",
  },
  openGraph: {
    title: "Pompes Funèbres Musulmanes Le Havre (76) | Al Hayaat — Siège | 24h/7j",
    description: "Al Hayaat, pompes funèbres musulmanes basées au Havre (44 Rue Saint-Jacques, 76600). Toilette rituelle, carré musulman, rapatriement. Siège Normandie. Habilitation préfectorale. 24h/24.",
    url: "https://www.pompesfunebres-alhayaat.fr/pompes-funebres-musulmanes-le-havre",
    siteName: "Al Hayaat Pompes Funèbres Musulmanes",
    locale: "fr_FR",
    type: "website",
    images: [
      {
        url: "https://www.pompesfunebres-alhayaat.fr/og-default.jpg",
        width: 1200,
        height: 630,
        alt: "Al Hayaat Pompes Funèbres Musulmanes Le Havre",
      }
    ],
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": ["FuneralHome", "LocalBusiness"],
  name: "Al Hayaat – Pompes Funèbres Musulmanes",
  telephone: "+33 7 63 21 46 56",
  address: {
    "@type": "PostalAddress",
    streetAddress: "30 Rue Saint-Jacques",
    addressLocality: "Le Havre",
    postalCode: "76600",
    addressCountry: "FR"
  },
  areaServed: ["Le Havre", "Sainte-Adresse", "Harfleur", "Montivilliers", "Normandie"],
  openingHours: "Mo-Su 00:00-23:59",
  url: "https://www.pompesfunebres-alhayaat.fr/pompes-funebres-musulmanes-le-havre",
  priceRange: "À partir de 1490€",
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "Quel est le délai pour une inhumation musulmane au Havre ?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "En France, la loi impose un délai de 24h minimum et 6 jours maximum. Au Havre, nous nous efforçons d'organiser l'inhumation dans le carré musulman le plus rapidement possible, souvent dans les 48 à 72 heures, tout en respectant les démarches obligatoires en mairie."
      }
    },
    {
      "@type": "Question",
      name: "Proposez-vous le rapatriement de corps depuis Le Havre vers le Maghreb ou l'Afrique ?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Oui, PF Al Hayaat prend en charge l'intégralité du rapatriement depuis Le Havre (ou la Normandie) vers l'Algérie, le Maroc, la Tunisie, le Sénégal, le Mali, et de nombreux autres pays, en gérant toutes les démarches consulaires et douanières."
      }
    },
    {
      "@type": "Question",
      name: "La toilette rituelle (Ghusl) est-elle réalisée au Havre ?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Oui. Le Ghusl (toilette purificatrice) est effectué par nos équipes qualifiées (hommes pour les hommes, femmes pour les femmes) dans les chambres funéraires du Havre ou de la région, dans le respect absolu de la Sunna et de l'intimité du défunt."
      }
    },
    {
      "@type": "Question",
      name: "Y a-t-il un carré musulman au cimetière du Havre ?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Oui, Le Havre dispose d'infrastructures permettant l'inhumation selon le rite islamique (carré musulman), avec une orientation des tombes vers la Qibla. Nous nous occupons de l'acquisition de la concession auprès de la mairie du Havre."
      }
    },
    {
      "@type": "Question",
      name: "Comment organiser la Salat al-Janaza au Havre ?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Nous coordonnons la prière mortuaire (Salat al-Janaza) avec les mosquées locales du Havre (comme la Mosquée En-Nour de Caucriauville ou la Mosquée de Mont-Gaillard) ou directement au cimetière avant l'inhumation."
      }
    }
  ]
};

export default function PompesFunebresLeHavre() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />

      {/* Hero Section */}
      <section className="relative w-full pt-40 pb-20 bg-[#FAFAFA] border-b border-[#E5E5E5]">
        <div className="max-w-[1000px] mx-auto px-6 md:px-12">
          <div className="flex items-center gap-2 mb-6">
            <span className="w-1.5 h-1.5 rounded-full bg-[#2D6A2D]" />
            <span className="text-[10px] tracking-[0.2em] font-medium text-[#666] uppercase">Normandie • Seine-Maritime</span>
          </div>
          <h1 className="text-[36px] md:text-[52px] font-medium leading-[1.1] tracking-tight text-[#111] mb-8">
            Pompes Funèbres Musulmanes au Havre (76) — Siège Al Hayaat
          </h1>
          <p className="text-[15px] md:text-[16px] font-light leading-[1.7] text-[#555] max-w-[700px] mb-8">
            La perte d&apos;un proche est une épreuve douloureuse. Au Havre (76600) et dans toute l&apos;agglomération havraise, <strong>PF Al Hayaat</strong> (habilitation préfectorale) vous accompagne avec dignité et humanité. Située au 44 Rue Saint-Jacques au Havre, notre équipe est disponible 24h/24 et 7j/7 pour organiser des obsèques strictement conformes au rite islamique, vous déchargeant ainsi de tout le poids administratif et logistique.
          </p>
          <h2 className="text-[24px] font-medium text-[#111] tracking-tight mb-4">
            Le Havre : Le Cœur de l'Activité d'Al Hayaat en Normandie
          </h2>
          <p className="text-[15px] md:text-[16px] font-light leading-[1.7] text-[#555] max-w-[700px]">
            Notre siège social est établi au 44 Rue Saint-Jacques, 76600 Le Havre. Depuis cette base, Al Hayaat rayonne sur toute la Seine-Maritime et l'ensemble de la Normandie. Le Havre est une ville à forte population musulmane, notamment dans les quartiers de Caucriauville, Mont-Gaillard, Sanvic et Les Neiges. Notre connaissance de ces quartiers et de leurs mosquées nous permet d'intervenir avec une réactivité maximale.
          </p>
        </div>
      </section>

      {/* Content Section */}
      <section className="w-full py-20 bg-white">
        <div className="max-w-[800px] mx-auto px-6 md:px-12 font-light text-[#444] text-[15px] leading-[1.8] space-y-16">
          
          <div className="space-y-6">
            <h2 className="text-[24px] font-medium text-[#111] tracking-tight">
              Nos services funéraires islamiques au Havre
            </h2>
            <p>
              Notre entreprise, PF Al Hayaat, prend en charge chaque étape des funérailles islamiques avec un profond respect pour la Sunna. Nous savons que la réactivité est essentielle. Dès votre premier appel, un conseiller dédié prend le relais.
            </p>
            <ul className="list-disc pl-5 space-y-3">
              <li><strong>Toilette rituelle (Ghusl) :</strong> Réalisée par des équipes pieuses et formées, dans la discrétion des chambres funéraires de la région havraise.</li>
              <li><strong>Démarches administratives :</strong> Déclaration de décès à la mairie du Havre, obtention des autorisations de transport et d&apos;inhumation.</li>
              <li><strong>Inhumation ou rapatriement :</strong> Organisation complète, que le défunt repose en France ou dans son pays d&apos;origine.</li>
              <li><strong>Soutien familial :</strong> Un accompagnement bienveillant pour vous guider dans ce moment d&apos;épreuve.</li>
            </ul>
          </div>

          <div className="space-y-6">
            <h2 className="text-[24px] font-medium text-[#111] tracking-tight">
              Inhumation dans un carré musulman au Havre
            </h2>
            <p>
              L&apos;inhumation en pleine terre et l&apos;orientation du défunt vers La Mecque (Qibla) sont des piliers du rite funéraire musulman. Au Havre, plusieurs infrastructures permettent d&apos;accueillir les défunts de confession musulmane dans des carrés dédiés, notamment au sein des grands cimetières de l&apos;agglomération havraise.
            </p>
            <p>
              Le Cimetière Nord du Havre (Rue Jule Lecesne) et le Cimetière Sainte-Marie disposent d'espaces permettant l'inhumation selon le rite islamique. Al Hayaat gère la demande de concession auprès des services d'état civil du Havre, et s'assure de l'orientation correcte du corps vers la Qibla.
            </p>
          </div>

          <div className="space-y-6">
            <h2 className="text-[24px] font-medium text-[#111] tracking-tight">
              Rapatriement de corps depuis Le Havre (76)
            </h2>
            <p>
              Si la volonté du défunt ou de la famille est un retour vers la terre d&apos;origine, PF Al Hayaat est spécialiste du <Link href="/rapatriement-corps" className="text-[#2D6A2D] underline underline-offset-4">rapatriement international</Link>. Depuis Le Havre, nous coordonnons le transfert du corps vers les aéroports parisiens (Roissy-Charles de Gaulle ou Orly), pour un départ vers le Maghreb (Algérie, Maroc, Tunisie), l&apos;Afrique de l&apos;Ouest (Sénégal, Mali, Guinée) ou d&apos;autres destinations.
            </p>
            <p>
              Ce service inclut les soins de conservation obligatoires pour le transport aérien (lorsque la loi l&apos;exige), la fourniture d&apos;un cercueil hermétique zingué, la réservation des vols, et la gestion complète des visas et laissez-passer mortuaires auprès des consulats.
            </p>
          </div>

          <div className="space-y-6">
            <h2 className="text-[24px] font-medium text-[#111] tracking-tight">
              Salat al-Janaza à Le Havre
            </h2>
            <p>
              La prière mortuaire est une obligation communautaire (Fard Kifaya). Nous organisons la Salat al-Janaza en étroite collaboration avec les lieux de culte de la ville, qu&apos;il s&apos;agisse de la Mosquée En-Nour (quartier Caucriauville), de la Mosquée de Mont-Gaillard, ou des autres salles de prière de l&apos;agglomération. Lorsque cela est nécessaire ou préféré par la famille, la prière peut également se tenir directement au cimetière.
            </p>
          </div>

          <div className="space-y-6">
            <h2 className="text-[24px] font-medium text-[#111] tracking-tight">
              Nos zones d&apos;intervention en Normandie
            </h2>
            <p>
              Notre siège social étant établi au 30 Rue Saint-Jacques au Havre, notre réactivité est optimale dans toute l&apos;agglomération de la communauté urbaine Le Havre Seine Métropole. Nous intervenons rapidement à Sainte-Adresse, Harfleur, Montivilliers, Gonfreville-l&apos;Orcher, Octeville-sur-Mer, ainsi que dans tout le département de la Seine-Maritime (76) et au-delà en Normandie (Rouen, Caen, Évreux).
            </p>
          </div>

          <div className="space-y-6">
            <h2 className="text-[24px] font-medium text-[#111] tracking-tight">
              Pourquoi faire confiance à Al Hayaat au Havre ?
            </h2>
            <p>
              Faire appel à PF Al Hayaat, c'est choisir une agence bénéficiant de l'habilitation préfectorale officielle, garante de notre professionnalisme et du strict respect de la législation française. Mais c'est avant tout choisir des frères et sœurs dévoués à préserver la dignité du défunt musulman. Notre disponibilité totale (24h/24) et la transparence absolue de nos devis vous assurent un accompagnement sans faille dans ces moments où chaque détail compte.
            </p>
          </div>

        </div>
      </section>

      {/* FAQ Section */}
      <section className="w-full py-20 bg-[#FAFAFA] border-t border-[#E5E5E5]">
        <div className="max-w-[800px] mx-auto px-6 md:px-12">
          <h2 className="text-[24px] md:text-[32px] font-medium text-[#111] tracking-tight mb-10 text-center">
            Questions fréquentes sur les obsèques musulmanes au Havre
          </h2>
          <div className="space-y-4">
            {faqSchema.mainEntity.map((faq, index) => (
              <div key={index} className="bg-white p-6 rounded-[8px] border border-[#E5E5E5]">
                <h3 className="text-[16px] font-medium text-[#111] mb-2">{faq.name}</h3>
                <p className="text-[14.5px] font-light text-[#555] leading-[1.6]">{faq.acceptedAnswer.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Bottom */}
      <section className="w-full py-24 bg-[#111] text-center px-6">
        <h2 className="text-[28px] md:text-[36px] font-medium text-white mb-6">
          Nous sommes à vos côtés.
        </h2>
        <p className="text-[15px] text-white/60 mb-10 max-w-[500px] mx-auto font-light">
          Pour toute urgence décès au Havre ou pour un devis gratuit concernant un rapatriement ou une inhumation, notre équipe vous répond 24h/24.
        </p>
        <a href="tel:+33763214656" className="inline-flex items-center gap-3 bg-[#2D6A2D] text-white px-8 py-4 rounded-[6px] font-medium text-[15px] hover:bg-[#255525] transition-colors">
          Appeler le 07 63 21 46 56
        </a>
      </section>
    </>
  );
}
