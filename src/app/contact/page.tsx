import { Metadata } from "next";
import { ContactForm } from "@/components/sections/ContactForm";

export async function generateMetadata(): Promise<Metadata> {
  const url = "https://pompesfunebres-alhayaat.fr/contact";
  return {
    title: "Contact — Al Hayaat Pompes Funèbres Musulmanes",
    description: "Contactez Al Hayaat 24h/24, 7j/7. Par téléphone, WhatsApp ou formulaire. Devis gratuit pour obsèques musulmanes et rapatriement.",
    
    
    alternates: {
      canonical: url,
    },
    openGraph: {
      title: "Contact — Al Hayaat Pompes Funèbres Musulmanes",
      description: "Contactez Al Hayaat 24h/24, 7j/7. Par téléphone, WhatsApp ou formulaire. Devis gratuit pour obsèques musulmanes et rapatriement.",
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

export default function ContactPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "BreadcrumbList",
            itemListElement: [
              { "@type": "ListItem", position: 1, name: "Accueil", item: "https://al-hayaat.fr" },
              { "@type": "ListItem", position: 2, name: "Contact", item: "https://al-hayaat.fr/contact" },
            ],
          }),
        }}
      />

      <section className="section-padding pt-32 pb-20 lg:pt-40 lg:pb-28">
        <div className="max-w-[1200px] mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-[1fr_1.2fr] gap-16 lg:gap-20">
            {/* Left: Contact Info */}
            <div>
              <h1 className="font-playfair text-display text-text-primary mb-6">
                Contactez-nous
              </h1>
              <p className="font-inter font-light text-text-secondary text-[1.05rem] leading-relaxed mb-10">
                Notre équipe est disponible 24 heures sur 24, 7 jours sur 7.
                N&apos;hésitez pas à nous appeler, nous sommes là pour vous accompagner.
              </p>

              {/* Quick Contact */}
              <div className="space-y-5 mb-12">
                <a
                  href="tel:+33XXXXXXXXX"
                  className="flex items-center gap-4 bg-primary text-white p-5 rounded-card hover:bg-primary-dark transition-colors"
                  id="contact-phone-cta"
                >
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
                  </svg>
                  <div>
                    <span className="block font-inter font-medium text-[15px]">Appeler maintenant</span>
                    <span className="block font-inter text-[13px] text-white/70">01 XX XX XX XX</span>
                  </div>
                </a>

                <a
                  href="https://wa.me/33XXXXXXXXX"
                  className="flex items-center gap-4 bg-cream border border-[rgba(43,97,64,0.15)] p-5 rounded-card hover:border-primary transition-colors"
                  target="_blank"
                  rel="noopener noreferrer"
                  id="contact-whatsapp-cta"
                >
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="#2B6140">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                  </svg>
                  <div>
                    <span className="block font-inter font-medium text-[15px] text-text-primary">Écrire sur WhatsApp</span>
                    <span className="block font-inter text-[13px] text-text-muted">Réponse rapide garantie</span>
                  </div>
                </a>
              </div>

              {/* Info */}
              <div className="space-y-4 text-[14px] font-inter text-text-secondary">
                <div className="flex items-start gap-3">
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#2B6140" strokeWidth="1.5" className="mt-0.5 flex-shrink-0">
                    <circle cx="12" cy="12" r="10" />
                    <polyline points="12 6 12 12 16 14" />
                  </svg>
                  <span>Disponible 24h/24, 7j/7 — y compris nuits et jours fériés</span>
                </div>
                <div className="flex items-start gap-3">
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#2B6140" strokeWidth="1.5" className="mt-0.5 flex-shrink-0">
                    <rect x="2" y="4" width="20" height="16" rx="2" />
                    <path d="M22 7l-10 7L2 7" />
                  </svg>
                  <span>contact@al-hayaat.fr</span>
                </div>
                <div className="flex items-start gap-3">
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#2B6140" strokeWidth="1.5" className="mt-0.5 flex-shrink-0">
                    <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
                    <circle cx="12" cy="10" r="3" />
                  </svg>
                  <span>Paris · Île-de-France · Normandie</span>
                </div>
              </div>
            </div>

            {/* Right: Form */}
            <div>
              <div className="bg-white border border-[rgba(43,97,64,0.10)] rounded-card p-8 lg:p-10 shadow-card">
                <h2 className="font-playfair text-[1.4rem] text-text-primary mb-2">
                  Envoyez-nous un message
                </h2>
                <p className="font-inter font-light text-[14px] text-text-muted mb-8">
                  Nous vous répondons dans les plus brefs délais.
                </p>
                <ContactForm />
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
