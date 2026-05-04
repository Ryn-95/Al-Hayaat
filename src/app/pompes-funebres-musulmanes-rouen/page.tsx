import { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Pompes Funèbres Musulmanes à Rouen (76) | Al Hayaat",
  description: "PF Al Hayaat, agence de pompes funèbres musulmanes intervenant à Rouen. Inhumation en carré musulman, toilette rituelle (Ghusl) et rapatriement international.",
  alternates: {
    canonical: "https://pompesfunebres-alhayaat.fr/pompes-funebres-musulmanes-rouen",
  },
  openGraph: {
    title: "Pompes Funèbres Musulmanes à Rouen (76) | Al Hayaat",
    description: "PF Al Hayaat, agence de pompes funèbres musulmanes intervenant à Rouen. Inhumation en carré musulman, toilette rituelle (Ghusl) et rapatriement international.",
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
      name: "Où se trouvent les carrés musulmans à Rouen et son agglomération ?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "À Rouen, l'inhumation selon le rite islamique est possible notamment au Cimetière de l'Ouest ou au Cimetière Monumental, qui disposent d'aménagements spécifiques. Les communes limitrophes de la Métropole Rouen Normandie proposent également des carrés musulmans pour leurs résidents."
      }
    },
    {
      "@type": "Question",
      name: "Combien de temps faut-il pour rapatrier un corps depuis Rouen vers le Maghreb ?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Le délai de rapatriement depuis la région rouennaise vers l'Algérie, le Maroc ou la Tunisie prend généralement entre 3 et 5 jours ouvrés. Ce délai comprend les soins obligatoires, la fermeture du cercueil et l'obtention des laissez-passer auprès des consulats compétents."
      }
    },
    {
      "@type": "Question",
      name: "Peut-on réaliser la prière mortuaire (Janaza) dans une mosquée de Rouen ?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Oui. Nous travaillons de concert avec les instances religieuses locales, telles que la Mosquée El Kaouthar (Rouen Rive Gauche) ou la Mosquée Yahya de Saint-Étienne-du-Rouvray, afin d'y célébrer la Salat al-Janaza avant le départ au cimetière ou vers l'aéroport."
      }
    },
    {
      "@type": "Question",
      name: "Intervenez-vous la nuit ou le week-end à l'hôpital de Rouen (CHU Charles Nicolle) ?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Absolument. Notre permanence téléphonique est active 24h/24. Nous pouvons intervenir à tout moment pour la prise en charge d'un défunt au CHU de Rouen (Charles Nicolle) ou dans les cliniques de l'agglomération rouennaise."
      }
    },
    {
      "@type": "Question",
      name: "Qui s'occupe de la toilette rituelle (Ghusl) ?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "La purification du corps est une Amana (dépôt sacré). Elle est pratiquée par nos équipes de laveurs et laveuses expérimentés, formés aux préceptes de la Sunna, dans les espaces adaptés des chambres funéraires de la Seine-Maritime."
      }
    }
  ]
};

export default function PompesFunebresRouen() {
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
            Pompes Funèbres Musulmanes<br className="hidden md:block" /> à Rouen (76)
          </h1>
          <p className="text-[15px] md:text-[16px] font-light leading-[1.7] text-[#555] max-w-[700px]">
            Perdre un être cher est un moment d&apos;une profonde vulnérabilité. Pour les familles endeuillées de la capitale normande, <strong>PF Al Hayaat</strong> assure un accompagnement global et bienveillant. Notre agence de pompes funèbres musulmanes intervient à Rouen (76000) et dans toute sa métropole. Habilités par la préfecture, nous mettons notre savoir-faire à votre service 24h/24 afin de garantir des obsèques fidèles aux préceptes de l&apos;Islam, tout en vous préservant des lourdeurs administratives.
          </p>
        </div>
      </section>

      {/* Content Section */}
      <section className="w-full py-20 bg-white">
        <div className="max-w-[800px] mx-auto px-6 md:px-12 font-light text-[#444] text-[15px] leading-[1.8] space-y-16">
          
          <div className="space-y-6">
            <h2 className="text-[24px] font-medium text-[#111] tracking-tight">
              Nos services funéraires islamiques à Rouen
            </h2>
            <p>
              Pour honorer la mémoire de votre proche, PF Al Hayaat déploie une logistique complète et respectueuse des traditions religieuses. Dès que le certificat de décès est dressé (que ce soit à domicile, au CHU Charles Nicolle ou en EHPAD), notre équipe prend le relais.
            </p>
            <ul className="list-disc pl-5 space-y-3">
              <li><strong>Purification (Ghusl) :</strong> Lavage rituel effectué par des frères et sœurs pieux, selon la tradition prophétique, garantissant la dignité du défunt.</li>
              <li><strong>Gestion documentaire :</strong> Nous nous chargeons de déclarer le décès auprès de l&apos;état civil de Rouen et de solliciter toutes les autorisations légales.</li>
              <li><strong>Cérémonie et Inhumation :</strong> Mise en place du convoi funéraire, de la prière mortuaire jusqu&apos;à la mise en terre locale ou au départ pour l&apos;étranger.</li>
              <li><strong>Écoute et conseil :</strong> Une présence continue pour répondre à vos interrogations religieuses et pratiques.</li>
            </ul>
          </div>

          <div className="space-y-6">
            <h2 className="text-[24px] font-medium text-[#111] tracking-tight">
              Inhumation dans un carré musulman à Rouen
            </h2>
            <p>
              Le repos éternel en terre (sans caveau bétonné lorsque la législation le permet) et l&apos;orientation du visage vers la Qibla sont des droits fondamentaux du défunt musulman. La ville de Rouen met à disposition des espaces dédiés, communément appelés carrés musulmans, notamment au Cimetière de l&apos;Ouest et au Cimetière Monumental.
            </p>
            <p>
              Nos conseillers funéraires vous assistent dans l&apos;achat de la concession auprès de la mairie rouennaise. Nous coordonnons l&apos;intervention des fossoyeurs pour que l&apos;inhumation se déroule dans la sérénité et le recueillement, en conformité totale avec la jurisprudence islamique (Fiqh).
            </p>
          </div>

          <div className="space-y-6">
            <h2 className="text-[24px] font-medium text-[#111] tracking-tight">
              Rapatriement de corps depuis Rouen
            </h2>
            <p>
              Beaucoup de familles souhaitent que leur parent repose sur sa terre natale. Notre pôle <Link href="/rapatriement-corps" className="text-[#2D6A2D] underline underline-offset-4">rapatriement de corps</Link> organise le transfert international depuis la région rouennaise. Nous gérons les vols vers le Maroc, l&apos;Algérie, la Tunisie, ainsi que vers l&apos;Afrique subsaharienne (Sénégal, Mali, Côte d&apos;Ivoire).
            </p>
            <p>
              Ce processus complexe inclut le passage par le consulat compétent, la traduction des actes de décès, la mise en bière dans un cercueil hermétique obligatoire pour les vols internationaux, et le transport routier depuis la chambre funéraire de Rouen jusqu&apos;aux aéroports de Paris (CDG ou Orly).
            </p>
          </div>

          <div className="space-y-6">
            <h2 className="text-[24px] font-medium text-[#111] tracking-tight">
              Salat al-Janaza à Rouen
            </h2>
            <p>
              L&apos;office de la prière sur le défunt (Salat al-Janaza) est une étape cruciale pour solliciter la miséricorde divine. En fonction de vos souhaits et des capacités d&apos;accueil, cette prière peut être accomplie au sein des mosquées de l&apos;agglomération (comme la Mosquée El Kaouthar à Rouen ou la Mosquée Yahya à Saint-Étienne-du-Rouvray) ou directement devant la sépulture au cimetière, juste avant l&apos;enterrement.
            </p>
          </div>

          <div className="space-y-6">
            <h2 className="text-[24px] font-medium text-[#111] tracking-tight">
              Nos zones d&apos;intervention depuis Rouen
            </h2>
            <p>
              Notre rayon d&apos;action couvre l&apos;intégralité de la Métropole Rouen Normandie. En cas d&apos;urgence, nos véhicules agréés se déplacent rapidement sur Rouen (Rive Droite et Rive Gauche), mais également à Sotteville-lès-Rouen, Petit-Quevilly, Grand-Quevilly, Saint-Étienne-du-Rouvray, Mont-Saint-Aignan, Bois-Guillaume, ainsi que dans les communes plus éloignées comme Elbeuf ou Barentin.
            </p>
          </div>

          <div className="space-y-6">
            <h2 className="text-[24px] font-medium text-[#111] tracking-tight">
              Pourquoi faire confiance à Al Hayaat à Rouen ?
            </h2>
            <p>
              S'appuyer sur PF Al Hayaat, c'est choisir la tranquillité d'esprit. Notre habilitation préfectorale atteste de notre rigueur réglementaire. Par ailleurs, notre profonde connaissance du rite islamique et du tissu associatif musulman normand nous permet d'agir avec tact et efficacité. Nous nous engageons à fournir des prestations dignes, avec une tarification transparente et sans frais cachés.
            </p>
          </div>

        </div>
      </section>

      {/* FAQ Section */}
      <section className="w-full py-20 bg-[#FAFAFA] border-t border-[#E5E5E5]">
        <div className="max-w-[800px] mx-auto px-6 md:px-12">
          <h2 className="text-[24px] md:text-[32px] font-medium text-[#111] tracking-tight mb-10 text-center">
            Questions fréquentes sur les obsèques musulmanes à Rouen
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
          Pour une intervention urgente sur Rouen ou pour anticiper un rapatriement, nos conseillers funéraires vous répondent de jour comme de nuit.
        </p>
        <a href="tel:+33763214656" className="inline-flex items-center gap-3 bg-[#2D6A2D] text-white px-8 py-4 rounded-[6px] font-medium text-[15px] hover:bg-[#255525] transition-colors">
          Appeler le 07 63 21 46 56
        </a>
      </section>
    </>
  );
}
