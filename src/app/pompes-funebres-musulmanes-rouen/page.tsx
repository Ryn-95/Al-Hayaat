import { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Pompes Funèbres Musulmanes Rouen (76) | Al Hayaat | Urgence 24h/7j",
  description: "Al Hayaat, pompes funèbres musulmanes à Rouen. Toilette rituelle, Salat Janaza, carré musulman, rapatriement Algérie/Maroc. Disponible 24h/24 dans tout le 76. Habilitation préfectorale.",
  alternates: {
    canonical: "https://pompesfunebres-alhayaat.fr/pompes-funebres-musulmanes-rouen",
  },
  openGraph: {
    title: "Pompes Funèbres Musulmanes Rouen (76) | Al Hayaat | Urgence 24h/7j",
    description: "Al Hayaat, pompes funèbres musulmanes à Rouen. Toilette rituelle, Salat Janaza, carré musulman, rapatriement Algérie/Maroc. Disponible 24h/24 dans tout le 76. Habilitation préfectorale.",
    url: "https://pompesfunebres-alhayaat.fr/pompes-funebres-musulmanes-rouen",
    siteName: "Al Hayaat Pompes Funèbres Musulmanes",
    locale: "fr_FR",
    type: "website",
    images: [
      {
        url: "https://pompesfunebres-alhayaat.fr/og-default.jpg",
        width: 1200,
        height: 630,
        alt: "Al Hayaat Pompes Funèbres Musulmanes Rouen",
      }
    ],
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": ["FuneralHome", "LocalBusiness"],
  name: "Al Hayaat – Pompes Funèbres Musulmanes Rouen",
  telephone: "+33 7 63 21 46 56",
  address: {
    "@type": "PostalAddress",
    streetAddress: "Intervention sur Rouen et Métropole",
    addressLocality: "Rouen",
    postalCode: "76000",
    addressCountry: "FR"
  },
  areaServed: ["Rouen", "Sotteville-lès-Rouen", "Saint-Étienne-du-Rouvray", "Petit-Quevilly", "Grand-Quevilly"],
  openingHours: "Mo-Su 00:00-23:59",
  url: "https://pompesfunebres-alhayaat.fr/pompes-funebres-musulmanes-rouen",
  priceRange: "À partir de 1490€",
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "Y a-t-il un carré musulman au cimetière de Rouen ?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Oui. Le cimetière monumental de Rouen dispose d'un carré musulman. Les cimetières de Sotteville-lès-Rouen et Saint-Étienne-du-Rouvray proposent également des inhumations islamiques. Al Hayaat vérifie les disponibilités et gère les démarches."
      }
    },
    {
      "@type": "Question",
      name: "Al Hayaat intervient-il la nuit à Rouen ?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Oui, 24h/24 et 7j/7. Appelez le 07 63 21 46 56 à tout moment."
      }
    },
    {
      "@type": "Question",
      name: "Combien coûtent des obsèques musulmanes à Rouen ?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Un forfait complet (toilette rituelle, kafan, cercueil, Salat al-Janaza, inhumation) débute aux alentours de 1 490 €. Contactez-nous pour un devis gratuit et transparent."
      }
    },
    {
      "@type": "Question",
      name: "Al Hayaat organise-t-il le rapatriement depuis Rouen vers l'Algérie ?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Oui. Al Hayaat organise le rapatriement depuis Rouen vers l'Algérie, le Maroc, la Tunisie et +20 pays. Le corps est acheminé via l'aéroport CDG (environ 1h30 de route). Délai habituel : 48 à 72 heures."
      }
    }
  ]
};

export default function PompesFunebresRouen() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />

      <section className="relative w-full pt-40 pb-20 bg-[#FAFAFA] border-b border-[#E5E5E5]">
        <div className="max-w-[1000px] mx-auto px-6 md:px-12">
          <div className="flex items-center gap-2 mb-6">
            <span className="w-1.5 h-1.5 rounded-full bg-[#2D6A2D]" />
            <span className="text-[10px] tracking-[0.2em] font-medium text-[#666] uppercase">Normandie • Seine-Maritime</span>
          </div>
          <h1 className="text-[36px] md:text-[52px] font-medium leading-[1.1] tracking-tight text-[#111] mb-8">
            Pompes Funèbres Musulmanes à Rouen et en Seine-Maritime (76)
          </h1>
          <p className="text-[15px] md:text-[16px] font-light leading-[1.7] text-[#555] max-w-[700px]">
            Rouen est le cœur historique de la communauté musulmane normande. Depuis les années 1960, des dizaines de milliers de familles d'origine algérienne, marocaine et tunisienne ont fait de la Seine-Maritime leur terre d'adoption. Al Hayaat accompagne ces familles dans l'une des épreuves les plus difficiles de la vie — la perte d'un proche — avec toute la rigueur du droit funéraire français et la profonde connaissance des rites islamiques. Nous intervenons à Rouen, Sotteville-lès-Rouen, Saint-Étienne-du-Rouvray, Grand-Quevilly, Petit-Quevilly, Mont-Saint-Aignan et dans toute l'agglomération rouennaise, 24h/24.
          </p>
        </div>
      </section>

      <section className="w-full py-20 bg-white">
        <div className="max-w-[800px] mx-auto px-6 md:px-12 font-light text-[#444] text-[15px] leading-[1.8] space-y-16">
          
          <div className="space-y-6">
            <h2 className="text-[24px] font-medium text-[#111] tracking-tight">
              Le Carré Musulman à Rouen
            </h2>
            <p>
              Rouen dispose de plusieurs cimetières accueillant des inhumations islamiques. Le cimetière monumental de Rouen (Route de Darnétal, 76000 Rouen) dispose d'un carré musulman où les tombes sont orientées vers la Qibla. Les cimetières de Sotteville-lès-Rouen et de Saint-Étienne-du-Rouvray accueillent également des familles musulmanes. Al Hayaat gère l'obtention de concession auprès de la mairie de Rouen et des communes environnantes.
            </p>
          </div>

          <div className="space-y-6">
            <h2 className="text-[24px] font-medium text-[#111] tracking-tight">
              Les Mosquées de Rouen et l'Organisation de la Salat al-Janaza
            </h2>
            <p>
              La Salat al-Janaza peut être organisée dans plusieurs mosquées de Rouen et de son agglomération. Al Hayaat coordonne avec les imams des mosquées de Sotteville-lès-Rouvray, du Grand-Quevilly et des principales salles de prière de Rouen pour trouver les horaires les plus appropriés. Sur demande de la famille, la prière peut se tenir directement au cimetière.
            </p>
          </div>

          <div className="space-y-6">
            <h2 className="text-[24px] font-medium text-[#111] tracking-tight">
              Notre Zone d'Intervention depuis Rouen
            </h2>
            <p>
              Depuis Rouen, Al Hayaat intervient rapidement dans toute la Seine-Maritime (76) : Sotteville-lès-Rouen, Saint-Étienne-du-Rouvray, Grand-Quevilly, Petit-Quevilly, Mont-Saint-Aignan, Elbeuf, Barentin, Darnétal, Bois-Guillaume, et toutes les communes du département. Nous rejoignons également l'Eure (27) et les autres départements normands.
            </p>
          </div>

        </div>
      </section>

      <section className="w-full py-20 bg-[#FAFAFA] border-t border-[#E5E5E5]">
        <div className="max-w-[800px] mx-auto px-6 md:px-12">
          <h2 className="text-[24px] md:text-[32px] font-medium text-[#111] tracking-tight mb-10 text-center">
            Questions fréquentes
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

      <section className="w-full py-24 bg-[#111] text-center px-6">
        <h2 className="text-[28px] md:text-[36px] font-medium text-white mb-6">
          Nous sommes à vos côtés.
        </h2>
        <p className="text-[15px] text-white/60 mb-10 max-w-[500px] mx-auto font-light">
          Pour une intervention urgente sur Rouen ou pour anticiper un rapatriement, nos conseillers funéraires vous répondent de jour comme de nuit.
        </p>
        <a href="tel:+33763214656" className="inline-flex items-center gap-3 bg-[#2D6A2D] text-white px-8 py-4 rounded-[6px] font-medium text-[15px] hover:bg-[#255525] transition-colors">
          Appeler le 07 63 21 46 56
        </a>
      </section>
    </>
  );
}
