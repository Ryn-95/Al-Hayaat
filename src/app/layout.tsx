import type { Metadata } from "next";
import { Inter, Playfair_Display } from "next/font/google";
import "./globals.css";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { CookieBanner } from "@/components/layout/CookieBanner";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
  display: "swap",
  weight: ["400", "500"],
  style: ["normal", "italic"],
});

export const metadata: Metadata = {
  title: "Pompes Funèbres Musulmanes Rouen, Le Havre & Paris | Al Hayaat | 24h/7j",
  description: "Al Hayaat accompagne les familles musulmanes en Normandie (Rouen, Le Havre, Caen) et Paris. Toilette rituelle ghusl, Salat Janaza, rapatriement Algérie Maroc Tunisie. Disponible 24h/24 7j/7.",
  alternates: {
    canonical: "https://pompesfunebres-alhayaat.fr",
  },
  openGraph: {
    title: "Pompes Funèbres Musulmanes Normandie & Paris | Al Hayaat",
    description: "Toilette rituelle, Salat al-Janaza, rapatriement de corps Algérie/Maroc. Disponible 24h/24 7j/7. Habilitation préfectorale.",
    url: "https://pompesfunebres-alhayaat.fr",
    siteName: "Al Hayaat Pompes Funèbres Musulmanes",
    locale: "fr_FR",
    type: "website",
  },
  icons: {
    icon: [
      { url: "/Image/Favicon.png" },
      { url: "/Image/Favicon.png", type: "image/png" }
    ],
    shortcut: "/Image/Favicon.png",
    apple: "/Image/Favicon.png",
    other: {
      rel: "apple-touch-icon-precomposed",
      url: "/Image/Favicon.png",
    },
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr" className={`${inter.variable} ${playfair.variable}`}>
      <head>
        <meta name="theme-color" content="#F7F3EC" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "FuneralHome",
              name: "Al Hayaat Pompes Funèbres Musulmanes",
              url: "https://pompesfunebres-alhayaat.fr",
              telephone: "+33763214656",
              description: "Pompes funèbres musulmanes en Normandie (Rouen, Le Havre, Caen) et Paris. Toilette rituelle Ghusl, Salat al-Janaza, rapatriement Algérie Maroc Tunisie. Disponibles 24h/24.",
              address: {
                "@type": "PostalAddress",
                streetAddress: "44 Rue Saint-Jacques",
                addressLocality: "Le Havre",
                postalCode: "76600",
                addressRegion: "Normandie",
                addressCountry: "FR"
              },
              areaServed: [
                "Rouen", "Le Havre", "Caen", "Dieppe", "Évreux",
                "Normandie", "Seine-Maritime", "Calvados", "Eure",
                "Paris", "Île-de-France", "Seine-Saint-Denis", "Val-d'Oise"
              ],
              openingHoursSpecification: {
                "@type": "OpeningHoursSpecification",
                dayOfWeek: ["Monday","Tuesday","Wednesday","Thursday","Friday","Saturday","Sunday"],
                opens: "00:00",
                closes: "23:59"
              }
            }),
          }}
        />
      </head>
      <body className="font-inter bg-white text-ink antialiased selection:bg-black selection:text-white">
        <Header />
        <main>{children}</main>
        <Footer />
        <CookieBanner />
      </body>
    </html>
  );
}
