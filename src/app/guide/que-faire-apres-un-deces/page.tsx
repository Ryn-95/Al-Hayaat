import SchemaOrg from "@/components/ui/SchemaOrg";
import { buildArticleSchema } from "@/lib/seo-config";
import type { Metadata } from "next";
import Link from "next/link";
import Breadcrumbs from "@/components/ui/Breadcrumbs";
export async function generateMetadata(): Promise<Metadata> {
  const url = "https://pompesfunebres-alhayaat.fr/guide/que-faire-apres-un-deces";
  return {
    title: "Que Faire après un Décès Musulman ? — Premières Démarches | Al Hayaat",
    description: "Décès d'un proche : que faire dans les premières heures ? Certificat de décès, appeler Al Hayaat, démarches en mairie. Guide pas à pas pour les familles musulmanes.",
    keywords: ["que faire après décès"],
    
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
export default function Page() { return (<div className="bg-[#F5F0E8] text-[#1A1A1A] min-h-screen font-inter"><SchemaOrg data={buildArticleSchema({ headline: "Que Faire Immédiatement après un Décès Musulman ?", datePublished: "2024-01-01" })} /><section className="relative w-full pt-28 pb-16 bg-[#0D1208] text-white"><div className="relative z-10 w-full max-w-[1280px] mx-auto px-8 md:px-12"><Breadcrumbs items={[{ label: "Guide", href: "/guide" }, { label: "Que Faire", href: "/guide/que-faire-apres-un-deces" }]} /><h1 className="text-[2.2rem] md:text-[3rem] font-semibold leading-[1.1] tracking-[-0.02em] text-white mb-6 mt-6 max-w-[700px]">Que Faire Immédiatement après un Décès Musulman ?</h1></div></section><section className="w-full bg-[#F5F0E8] py-20"><div className="w-full max-w-[1280px] mx-auto px-8 md:px-12"><div className="max-w-[780px]">
    <h2 className="text-[24px] font-semibold text-[#1A1A1A] mb-6">Les Premières Minutes — Spirituel et Pratique</h2>
  <p className="text-[15px] font-light text-[#555] leading-[1.8] mb-4">À l'annonce du décès ou à la découverte du corps, la première parole est l'istirja' :</p>
  <p className="text-[15px] font-medium text-[#1A1A1A] mb-6 italic">Inna lillahi wa inna ilayhi raji'oun — « Nous appartenons à Allah et c'est vers Lui que nous retournons. »</p>
  <p className="text-[15px] font-light text-[#555] leading-[1.8] mb-4">Ensuite, pratiquement :</p>
  <ul className="flex flex-col gap-2 mb-8">{["Appeler le 15 (SAMU) ou le médecin pour constater le décès et délivrer le certificat médical de décès. Sans ce document, rien ne peut commencer.", "Appeler Al Hayaat immédiatement au 07 63 21 46 56. Plus tôt nous sommes contactés, plus vite les rites islamiques peuvent commencer et les démarches s'enclencher.", "Ne pas déplacer le corps avant l'arrivée du médecin ou des pompes funèbres, sauf nécessité absolue."].map((t,i)=>(<li key={i} className="flex items-start gap-3 text-[14.5px] text-[#555] font-light"><span className="w-1.5 h-1.5 rounded-full bg-[#2D6A2D] mt-2 shrink-0"/>{t}</li>))}</ul>

  <h2 className="text-[24px] font-semibold text-[#1A1A1A] mb-6">Dans les Premières 24 Heures</h2>
  <ul className="flex flex-col gap-2 mb-8">{["Déclaration de décès à la mairie du lieu de décès (Al Hayaat s'en charge)", "Obtention de plusieurs copies de l'acte de décès", "Décision : inhumation en France ou rapatriement ?", "Prévenir la famille et la communauté"].map((t,i)=>(<li key={i} className="flex items-start gap-3 text-[14.5px] text-[#555] font-light"><span className="w-1.5 h-1.5 rounded-full bg-[#2D6A2D] mt-2 shrink-0"/>{t}</li>))}</ul>

  <h2 className="text-[24px] font-semibold text-[#1A1A1A] mb-6">Dans les Premières 48 à 72 Heures</h2>
  <ul className="flex flex-col gap-2 mb-8">{["Toilette rituelle (Ghusl) du défunt", "Mise en kafan", "Salat al-Janaza", "Inhumation en carré musulman OU préparation du dossier de rapatriement"].map((t,i)=>(<li key={i} className="flex items-start gap-3 text-[14.5px] text-[#555] font-light"><span className="w-1.5 h-1.5 rounded-full bg-[#2D6A2D] mt-2 shrink-0"/>{t}</li>))}</ul>

  <h2 className="text-[24px] font-semibold text-[#1A1A1A] mb-6">Après l'Inhumation</h2>
  <ul className="flex flex-col gap-2 mb-8">{["Informer les organismes (banque, CAF, Sécurité sociale, mutuelle, caisse de retraite)", "Régler la succession", "Faire des douas et de la sadaqa régulièrement pour le défunt"].map((t,i)=>(<li key={i} className="flex items-start gap-3 text-[14.5px] text-[#555] font-light"><span className="w-1.5 h-1.5 rounded-full bg-[#2D6A2D] mt-2 shrink-0"/>{t}</li>))}</ul>

  <p className="text-[15px] font-light text-[#555] leading-[1.8] mb-4">Pour les démarches administratives détaillées : <Link href="/demarches-administratives-deces" className="text-[#2D6A2D] font-medium hover:underline">guide complet</Link>. Pour les rites : <Link href="/guide/rites-funeraires-islam-etapes" className="text-[#2D6A2D] font-medium hover:underline">étapes des funérailles islamiques</Link>.</p>
  <Link href="/contact" className="inline-flex items-center gap-2 bg-[#2D6A2D] text-white px-5 py-3 rounded-[5px] text-[13.5px] font-medium hover:bg-[#255525] transition-colors mt-4">Urgence 24/7</Link>
</div></div></section></div>); }
