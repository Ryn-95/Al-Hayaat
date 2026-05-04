import type { Metadata } from "next";
import Link from "next/link";
import Breadcrumbs from "@/components/ui/Breadcrumbs";

export async function generateMetadata(): Promise<Metadata> {
  const url = "https://pompesfunebres-alhayaat.fr/guide";
  return {
    title: "Guide des Rites Funéraires Islamiques — Invocations, Deuil, Obsèques | Al Hayaat",
    description: "Guide complet des rites funéraires islamiques : douas pour le mort, condoléances en islam, Salat al-Janaza, kafan, deuil, 40 jours. Invocations en arabe avec traduction.",
    
    
    alternates: {
      canonical: url,
    },
    openGraph: {
      title: "Guide des Rites Funéraires Islamiques — Invocations, Deuil, Obsèques | Al Hayaat",
      description: "Guide complet des rites funéraires islamiques : douas pour le mort, condoléances en islam, Salat al-Janaza, kafan, deuil, 40 jours. Invocations en arabe avec traduction.",
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

const articles = [
  { title: "Doua pour un Mort en Islam", desc: "Toutes les invocations pour un défunt : en arabe, phonétique et français.", href: "/guide/doua-deces-islam", tag: "Invocations" },
  { title: "Condoléances en Islam", desc: "Comment exprimer ses condoléances ? Messages, prières et formules complètes.", href: "/guide/condoleances-islam", tag: "Traditions" },
  { title: "Le Deuil en Islam", desc: "Durée, règles, obligations et invocations pendant le deuil islamique.", href: "/guide/deuil-islam", tag: "Deuil" },
  { title: "Comment Faire la Salat Janaza", desc: "Guide complet des 4 Takbir avec textes en arabe et traduction.", href: "/guide/salat-janaza-comment-faire", tag: "Prière" },
  { title: "Enterrement Islam : Vêtements", desc: "Quelle tenue pour un enterrement musulman ? Guide hommes et femmes.", href: "/guide/enterrement-islam-vetement", tag: "Traditions" },
  { title: "Le Kafan (Linceul) en Islam", desc: "Règles, mise en place et signification du linceul islamique.", href: "/guide/kafan-linceul-islam", tag: "Rites" },
  { title: "Le Lavage Mortuaire en Islam", desc: "Tout savoir sur le Ghusl al-Mayyit : étapes et règles.", href: "/guide/lavage-mortuaire-islam", tag: "Rites" },
  { title: "Invocations au Cimetière", desc: "Douas à réciter devant une tombe en Islam.", href: "/guide/invocations-cimetiere-islam", tag: "Invocations" },
  { title: "Messages de Condoléances en Arabe", desc: "20 exemples prêts à utiliser avec traduction française.", href: "/guide/message-condoleances-arabe", tag: "Messages" },
  { title: "Les 40 Jours en Islam", desc: "Que dit l'Islam sur les 40 jours après un décès ?", href: "/guide/40-jours-islam", tag: "Deuil" },
  { title: "Rites Funéraires Islamiques", desc: "De la mort à l'inhumation : toutes les étapes.", href: "/guide/rites-funeraires-islam-etapes", tag: "Rites" },
  { title: "Prix des Obsèques Musulmanes", desc: "Combien coûtent des obsèques musulmanes en France ?", href: "/guide/prix-obseques-musulmanes", tag: "Pratique" },
  { title: "Que Faire après un Décès", desc: "Les premières démarches à accomplir.", href: "/guide/que-faire-apres-un-deces", tag: "Pratique" },
];

export default function GuidePage() {
  return (
    <div className="bg-[#F5F0E8] text-[#1A1A1A] min-h-screen font-inter">
      <section className="relative w-full pt-28 pb-16 bg-[#0D1208] text-white">
        <div className="relative z-10 w-full max-w-[1280px] mx-auto px-8 md:px-12">
          <Breadcrumbs items={[{ label: "Guide", href: "/guide" }]} />
          <h1 className="text-[2.2rem] md:text-[3rem] font-semibold leading-[1.1] tracking-[-0.02em] text-white mb-6 mt-6 max-w-[700px]">
            Guide des Rites Funéraires Islamiques
          </h1>
          <p className="text-[15px] font-light leading-[1.7] text-white/60 max-w-[520px]">
            Ce guide a été rédigé par Al Hayaat pour aider les familles musulmanes à comprendre et accomplir correctement les rites funéraires islamiques. Face à la perte d'un proche, connaître les obligations et les recommandations de la Sunnah apporte une forme de paix et de structure dans la douleur. Toutes les invocations (douas) sont présentées avec le texte arabe original, la phonétique française et la traduction, avec les références hadith authentifiées.
          </p>
        </div>
      </section>
      <section className="w-full bg-[#F5F0E8] py-20 md:py-28">
        <div className="w-full max-w-[1280px] mx-auto px-8 md:px-12">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {articles.map((article) => (
              <Link key={article.href} href={article.href} className="group block p-6 bg-white border border-[#E8E2D9] rounded-[12px] hover:border-[#2D6A2D]/30 hover:shadow-sm transition-all">
                <span className="text-[10.5px] tracking-[0.14em] font-semibold text-[#7A5C3A] uppercase mb-3 block">{article.tag}</span>
                <h2 className="text-[17px] font-semibold text-[#1A1A1A] mb-2 group-hover:text-[#2D6A2D] transition-colors">{article.title}</h2>
                <p className="text-[13px] text-[#888] font-light leading-[1.5]">{article.desc}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
