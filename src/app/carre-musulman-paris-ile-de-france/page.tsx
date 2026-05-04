import type { Metadata } from "next";
import Link from "next/link";
import Breadcrumbs from "@/components/ui/Breadcrumbs";

export async function generateMetadata(): Promise<Metadata> {
  const url = "https://pompesfunebres-alhayaat.fr/carre-musulman-paris-ile-de-france";
  return {
    title: "Carrés Musulmans Paris & Île-de-France — Guide Complet",
    description: "Où se trouvent les carrés musulmans à Paris et en Île-de-France ? Bobigny, Joncherolles, Thiais. Adresses, conditions, démarches. Al Hayat.",
    keywords: ["carré musulman Paris",
    
    alternates: {
      canonical: url,
    },
    openGraph: {
      title: "Carrés Musulmans Paris & Île-de-France — Guide Complet",
      description: "Où se trouvent les carrés musulmans à Paris et en Île-de-France ? Bobigny, Joncherolles, Thiais. Adresses, conditions, démarches. Al Hayat.",
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

export default function CarreMusulmanParisPage() {
  return (
    <div className="bg-[#F5F0E8] text-[#1A1A1A] min-h-screen font-inter">
      <section className="relative w-full pt-28 pb-16 bg-[#0D1208] text-white">
        <div className="relative z-10 w-full max-w-[1280px] mx-auto px-8 md:px-12">
          <Breadcrumbs items={[{ label: "Paris & Île-de-France", href: "/paris-ile-de-france" }, { label: "Carrés Musulmans", href: "/carre-musulman-paris-ile-de-france" }]} />
          <h1 className="text-[2.2rem] md:text-[3rem] font-semibold leading-[1.1] tracking-[-0.02em] text-white mb-6 mt-6 max-w-[700px]">Les Carrés Musulmans à Paris et en Île-de-France</h1>
        </div>
      </section>
      <section className="w-full bg-[#F5F0E8] py-20 md:py-28">
        <div className="w-full max-w-[1280px] mx-auto px-8 md:px-12"><div className="max-w-[780px]">
          <h2 className="text-[24px] md:text-[28px] font-semibold text-[#1A1A1A] mb-6">Principaux carrés musulmans en Île-de-France</h2>
          <div className="flex flex-col gap-4 mb-8">{[
            { name: "Cimetière musulman de Bobigny (93)", desc: "Le plus grand carré musulman d'Île-de-France." },
            { name: "Cimetière intercommunal de Joncherolles (93)", desc: "Villetaneuse / Dugny." },
            { name: "Cimetière de Thiais (94)", desc: "Carré musulman dans le Val-de-Marne." },
            { name: "Cimetière de Tremblay-en-France (93)", desc: "Espace musulman disponible." },
          ].map((c, i) => (<div key={i} className="p-5 bg-white border border-[#E8E2D9] rounded-[10px]"><h3 className="text-[15px] font-semibold text-[#1A1A1A] mb-1">{c.name}</h3><p className="text-[13px] text-[#888] font-light">{c.desc}</p></div>))}</div>

          <h2 className="text-[24px] md:text-[28px] font-semibold text-[#1A1A1A] mb-6">Obtenir une concession</h2>
          <p className="text-[15px] font-light text-[#555] leading-[1.8] mb-8">Al Hayat se charge des <Link href="/demarches-administratives-deces" className="text-[#2D6A2D] font-medium hover:underline">démarches administratives</Link> pour obtenir une concession en carré musulman. L&apos;<Link href="/inhumation-carre-musulman" className="text-[#2D6A2D] font-medium hover:underline">inhumation</Link> est organisée selon les rites islamiques.</p>
          <Link href="/contact" className="inline-flex items-center gap-2 bg-[#2D6A2D] text-white px-5 py-3 rounded-[5px] text-[13.5px] font-medium hover:bg-[#255525] transition-colors">Nous contacter</Link>
        </div></div>
      </section>
    </div>
  );
}
