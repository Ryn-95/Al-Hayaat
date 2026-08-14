import type { Metadata } from "next";
import Link from "next/link";
import Breadcrumbs from "@/components/ui/Breadcrumbs";

export async function generateMetadata(): Promise<Metadata> {
  const url = "https://www.pompesfunebres-alhayaat.fr/carre-musulman-normandie";
  return {
    title: "Carrés Musulmans en Normandie : Rouen, Le Havre, Caen — Guide Complet",
    description: "Où se trouvent les carrés musulmans en Normandie ? Rouen, Le Havre, Caen : adresses, conditions, démarches. Guide complet par Al Hayat.",
    keywords: ["carré musulman Normandie", "cimetiere carre musulman", "carré musulman Rouen", "carré musulman Le Havre", "carré musulman Caen"],
    
    alternates: {
      canonical: url,
    },
    openGraph: {
      title: "Carrés Musulmans en Normandie : Rouen, Le Havre, Caen — Guide Complet",
      description: "Où se trouvent les carrés musulmans en Normandie ? Rouen, Le Havre, Caen : adresses, conditions, démarches. Guide complet par Al Hayat.",
      url: url,
      siteName: "Al Hayaat Pompes Funèbres Musulmanes",
      locale: "fr_FR",
      type: "website",
      images: [
        {
          url: "https://www.pompesfunebres-alhayaat.fr/og-default.jpg",
          width: 1200,
          height: 630,
          alt: "Al Hayaat Pompes Funèbres Musulmanes",
        }
      ],
    },
  };
}

export default function CarreMusulmanNormandiePage() {
  return (
    <div className="bg-[#F5F0E8] text-[#1A1A1A] min-h-screen font-inter">
      <section className="relative w-full pt-28 pb-16 bg-[#0D1208] text-white">
        <div className="relative z-10 w-full max-w-[1280px] mx-auto px-8 md:px-12">
          <Breadcrumbs items={[{ label: "Normandie", href: "/normandie" }, { label: "Carrés Musulmans", href: "/carre-musulman-normandie" }]} />
          <h1 className="text-[2.2rem] md:text-[3rem] font-semibold leading-[1.1] tracking-[-0.02em] text-white mb-6 mt-6 max-w-[700px]">Les Carrés Musulmans en Normandie : Où Inhumer ?</h1>
        </div>
      </section>
      <section className="w-full bg-[#F5F0E8] py-20 md:py-28">
        <div className="w-full max-w-[1280px] mx-auto px-8 md:px-12"><div className="max-w-[780px]">
          <h2 className="text-[24px] md:text-[28px] font-semibold text-[#1A1A1A] mb-6">Qu&apos;est-ce qu&apos;un carré musulman ?</h2>
          <p className="text-[15px] font-light text-[#555] leading-[1.8] mb-8">Un carré musulman est un espace dédié dans un cimetière municipal, réservé à l&apos;inhumation des défunts musulmans. Les tombes y sont orientées vers La Mecque (qibla). En France, il en existe environ 70.</p>

          <h2 className="text-[24px] md:text-[28px] font-semibold text-[#1A1A1A] mb-6">Carré musulman à Rouen</h2>
          <p className="text-[15px] font-light text-[#555] leading-[1.8] mb-4">Rouen dispose de carrés musulmans dans ses cimetières municipaux, notamment au Cimetière monumental de Rouen et à Bonsecours. Al Hayat vous accompagne dans l&apos;obtention d&apos;une concession.</p>
          <Link href="/pompes-funebres-musulmanes-rouen" className="text-[13px] text-[#2D6A2D] font-medium hover:underline mb-8 block">Nos services à Rouen →</Link>

          <h2 className="text-[24px] md:text-[28px] font-semibold text-[#1A1A1A] mb-6">Carré musulman au Havre</h2>
          <p className="text-[15px] font-light text-[#555] leading-[1.8] mb-4">Le Havre dispose d&apos;espaces musulmans dans ses cimetières. Contactez-nous pour connaître les disponibilités et les démarches.</p>
          <Link href="/pompes-funebres-musulmanes-le-havre" className="text-[13px] text-[#2D6A2D] font-medium hover:underline mb-8 block">Nos services au Havre →</Link>

          <h2 className="text-[24px] md:text-[28px] font-semibold text-[#1A1A1A] mb-6">Carré musulman à Caen</h2>
          <p className="text-[15px] font-light text-[#555] leading-[1.8] mb-4">Des espaces musulmans sont disponibles dans les cimetières de Caen et ses environs.</p>
          <Link href="/pompes-funebres-musulmanes-caen" className="text-[13px] text-[#2D6A2D] font-medium hover:underline mb-8 block">Nos services à Caen →</Link>

          <h2 className="text-[24px] md:text-[28px] font-semibold text-[#1A1A1A] mb-6">Comment obtenir une concession</h2>
          <p className="text-[15px] font-light text-[#555] leading-[1.8] mb-8">L&apos;obtention d&apos;une concession en carré musulman se fait auprès de la mairie du cimetière. Al Hayat se charge de toutes les <Link href="/demarches-administratives-deces" className="text-[#2D6A2D] font-medium hover:underline">démarches administratives</Link> pour vous.</p>

          <h2 className="text-[24px] md:text-[28px] font-semibold text-[#1A1A1A] mb-6">Alternatives : le rapatriement</h2>
          <p className="text-[15px] font-light text-[#555] leading-[1.8] mb-8">Si la famille souhaite inhumer le défunt dans son pays d&apos;origine, Al Hayat organise le <Link href="/rapatriement-corps" className="text-[#2D6A2D] font-medium hover:underline">rapatriement de corps</Link> vers l&apos;Algérie, le Maroc, la Tunisie et toutes destinations.</p>
        </div></div>
      </section>
    </div>
  );
}
