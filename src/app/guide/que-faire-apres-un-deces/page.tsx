import type { Metadata } from "next";
import Link from "next/link";
import Breadcrumbs from "@/components/ui/Breadcrumbs";
export async function generateMetadata(): Promise<Metadata> {
  const url = "https://pompesfunebres-alhayaat.fr/guide/que-faire-apres-un-deces";
  return {
    title: "Que Faire après un Décès ? Guide Complet",
    description: "Les premières démarches après un décès. Guide pratique.",
    keywords: ["que faire après décès",
    
    alternates: {
      canonical: url,
    },
    openGraph: {
      title: "Que Faire après un Décès ? Guide Complet",
      description: "Les premières démarches après un décès. Guide pratique.",
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
export default function Page() { return (<div className="bg-[#F5F0E8] text-[#1A1A1A] min-h-screen font-inter"><section className="relative w-full pt-28 pb-16 bg-[#0D1208] text-white"><div className="relative z-10 w-full max-w-[1280px] mx-auto px-8 md:px-12"><Breadcrumbs items={[{ label: "Guide", href: "/guide" }, { label: "Que Faire", href: "/guide/que-faire-apres-un-deces" }]} /><h1 className="text-[2.2rem] md:text-[3rem] font-semibold leading-[1.1] text-white mb-6 mt-6">Que Faire après un Décès ?</h1></div></section><section className="w-full bg-[#F5F0E8] py-20"><div className="w-full max-w-[1280px] mx-auto px-8 md:px-12"><div className="max-w-[780px]">
  <h2 className="text-[24px] font-semibold text-[#1A1A1A] mb-6">Les premières heures</h2>
  <ul className="flex flex-col gap-3 mb-8">{["Appeler un médecin pour le certificat de décès", "Contacter Al Hayat immédiatement", "Informer la famille proche", "Ne pas toucher au corps avant l'arrivée des professionnels"].map((t,i)=>(<li key={i} className="flex items-start gap-3 text-[14.5px] text-[#555] font-light"><span className="w-1.5 h-1.5 rounded-full bg-[#2D6A2D] mt-2 shrink-0"/>{t}</li>))}</ul>
  <p className="text-[15px] font-light text-[#555] leading-[1.8] mb-4">Pour les démarches administratives détaillées : <Link href="/demarches-administratives-deces" className="text-[#2D6A2D] font-medium hover:underline">guide complet</Link>. Pour les rites : <Link href="/guide/rites-funeraires-islam-etapes" className="text-[#2D6A2D] font-medium hover:underline">étapes des funérailles islamiques</Link>.</p>
  <Link href="/contact" className="inline-flex items-center gap-2 bg-[#2D6A2D] text-white px-5 py-3 rounded-[5px] text-[13.5px] font-medium hover:bg-[#255525] transition-colors mt-4">Urgence 24/7</Link>
</div></div></section></div>); }
