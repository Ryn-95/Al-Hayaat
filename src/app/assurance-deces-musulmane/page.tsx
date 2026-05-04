import type { Metadata } from "next";
import Link from "next/link";
import Breadcrumbs from "@/components/ui/Breadcrumbs";

export async function generateMetadata(): Promise<Metadata> {
  const url = "https://pompesfunebres-alhayaat.fr/assurance-deces-musulmane";
  return {
    title: "Assurance Décès Musulmane & Rapatriement — Al Hayat",
    description: "Préparer ses obsèques et son rapatriement à l'avance. Assurance décès islamique, prévoyance obsèques. Al Hayat vous conseille.",
    keywords: ["assurance décès musulmane", "assurance obseques islam", "prevoyance funeraire musulmane", "assurance rapatriement corps", "assurance al hayat"],
    
    alternates: {
      canonical: url,
    },
    openGraph: {
      title: "Assurance Décès Musulmane & Rapatriement — Al Hayat",
      description: "Préparer ses obsèques et son rapatriement à l'avance. Assurance décès islamique, prévoyance obsèques. Al Hayat vous conseille.",
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

export default function AssuranceDecesPage() {
  return (
    <div className="bg-[#F5F0E8] text-[#1A1A1A] min-h-screen font-inter">
      <section className="relative w-full pt-28 pb-16 bg-[#0D1208] text-white">
        <div className="relative z-10 w-full max-w-[1280px] mx-auto px-8 md:px-12">
          <Breadcrumbs items={[{ label: "Services", href: "#" }, { label: "Assurance Décès", href: "/assurance-deces-musulmane" }]} />
          <h1 className="text-[2.2rem] md:text-[3rem] font-semibold leading-[1.1] tracking-[-0.02em] text-white mb-6 mt-6 max-w-[700px]">Assurance Décès et Prévoyance Obsèques Islamique</h1>
        </div>
      </section>
      <section className="w-full bg-[#F5F0E8] py-20 md:py-28">
        <div className="w-full max-w-[1280px] mx-auto px-8 md:px-12"><div className="max-w-[780px]">
          <h2 className="text-[24px] md:text-[28px] font-semibold text-[#1A1A1A] mb-6">Pourquoi souscrire une assurance décès ?</h2>
          <p className="text-[15px] font-light text-[#555] leading-[1.8] mb-8">Souscrire une assurance décès permet de soulager sa famille d&apos;un poids financier considérable, de garantir le respect de ses volontés (inhumation locale ou <Link href="/rapatriement-corps" className="text-[#2D6A2D] font-medium hover:underline">rapatriement</Link>), et de financer l&apos;ensemble des obsèques à l&apos;avance.</p>

          <h2 className="text-[24px] md:text-[28px] font-semibold text-[#1A1A1A] mb-6">L&apos;assurance rapatriement</h2>
          <p className="text-[15px] font-light text-[#555] leading-[1.8] mb-8">L&apos;assurance rapatriement couvre les frais de transfert du corps vers le pays d&apos;origine. Indispensable pour les Maghrébins et Africains vivant en France. Les destinations les plus courantes : <Link href="/rapatriement-corps-algerie" className="text-[#2D6A2D] font-medium hover:underline">Algérie</Link>, <Link href="/rapatriement-corps-maroc" className="text-[#2D6A2D] font-medium hover:underline">Maroc</Link>, <Link href="/rapatriement-corps-tunisie" className="text-[#2D6A2D] font-medium hover:underline">Tunisie</Link>.</p>

          <h2 className="text-[24px] md:text-[28px] font-semibold text-[#1A1A1A] mb-6">Contrat obsèques en capital vs en prestations</h2>
          <p className="text-[15px] font-light text-[#555] leading-[1.8] mb-8">Le contrat en capital verse une somme à vos bénéficiaires. Le contrat en prestations finance directement les obsèques auprès du prestataire choisi. Al Hayat vous conseille sur la formule la plus adaptée à votre situation.</p>

          <h2 className="text-[24px] md:text-[28px] font-semibold text-[#1A1A1A] mb-6">Comment anticiper avec Al Hayat</h2>
          <p className="text-[15px] font-light text-[#555] leading-[1.8] mb-8">Vous pouvez enregistrer vos volontés à l&apos;avance auprès d&apos;Al Hayat : choix entre inhumation locale ou rapatriement, rites spécifiques, personnes à contacter. Nous conservons ces informations en toute confidentialité.</p>
          <Link href="/contact" className="inline-flex items-center gap-2 bg-[#2D6A2D] text-white px-5 py-3 rounded-[5px] text-[13.5px] font-medium hover:bg-[#255525] transition-colors">Nous contacter pour en savoir plus</Link>
        </div></div>
      </section>
    </div>
  );
}
