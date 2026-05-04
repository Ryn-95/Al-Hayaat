import type { Metadata } from "next";
import Link from "next/link";
import Breadcrumbs from "@/components/ui/Breadcrumbs";
import SchemaOrg from "@/components/ui/SchemaOrg";
import { buildFuneralHomeSchema, buildFAQSchema } from "@/lib/seo-config";

export async function generateMetadata(): Promise<Metadata> {
  const url = "https://pompesfunebres-alhayaat.fr/toilette-rituelle-musulmane";
  return {
    title: "Toilette Rituelle Musulmane (Ghusl al-Mayyit) — Al Hayat",
    description: "Toilette rituelle musulmane (Ghusl) réalisée selon la Sunnah par une équipe qualifiée. Hommes et femmes. Al Hayat en Normandie et Paris, 24h/24.",
    keywords: ["toilette rituelle musulmane"],
    
    alternates: {
      canonical: url,
    },
    openGraph: {
      title: "Toilette Rituelle Musulmane (Ghusl al-Mayyit) — Al Hayat",
      description: "Toilette rituelle musulmane (Ghusl) réalisée selon la Sunnah par une équipe qualifiée. Hommes et femmes. Al Hayat en Normandie et Paris, 24h/24.",
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

const faqs = [
  { question: "Qui peut réaliser la toilette rituelle musulmane ?", answer: "La toilette rituelle doit être effectuée par des personnes du même sexe que le défunt. Exception : un époux peut laver son épouse et inversement. Chez Al Hayat, nous disposons d\u0027une équipe mixte formée aux rites islamiques." },
  { question: "Combien de temps dure le Ghusl al-Mayyit ?", answer: "La toilette rituelle dure en moyenne 30 à 45 minutes. Le corps est lavé un nombre impair de fois (3, 5 ou 7) avec de l\u0027eau et du jujubier (sidr), puis parfumé au camphre." },
  { question: "Peut-on faire la toilette rituelle à domicile ?", answer: "Oui, si les conditions le permettent (espace suffisant, eau courante). Al Hayat peut aussi réaliser le Ghusl en chambre funéraire ou à l\u0027hôpital." },
  { question: "La toilette rituelle est-elle obligatoire en Islam ?", answer: "Oui, le Ghusl al-Mayyit est une obligation collective (fard kifaya). Si un groupe s\u0027en acquitte, les autres en sont dispensés. Le Prophète ﷺ l\u0027a prescrit explicitement." },
  { question: "Combien coûte la toilette rituelle chez Al Hayat ?", answer: "La toilette rituelle est incluse dans nos forfaits obsèques. Pour un service isolé, contactez-nous pour un devis gratuit. Nos tarifs sont transparents et communiqués dès le premier appel." },
];

export default function ToiletteRituellePage() {
  return (
    <div className="bg-[#F5F0E8] text-[#1A1A1A] min-h-screen font-inter">
      <SchemaOrg data={[buildFuneralHomeSchema(), buildFAQSchema(faqs)]} />
      
      {/* Hero */}
      <section className="relative w-full pt-28 pb-16 bg-[#0D1208] text-white">
        <div className="relative z-10 w-full max-w-[1280px] mx-auto px-8 md:px-12">
          <Breadcrumbs items={[{ label: "Services", href: "#" }, { label: "Toilette Rituelle", href: "/toilette-rituelle-musulmane" }]} />
          <h1 className="text-[2.2rem] md:text-[3rem] font-semibold leading-[1.1] tracking-[-0.02em] text-white mb-6 mt-6 max-w-[700px]">
            La Toilette Rituelle Musulmane (Ghusl al-Mayyit)
          </h1>
          <p className="text-[15px] font-light leading-[1.8] text-white/70 max-w-[640px]">
            La toilette rituelle musulmane est l&apos;un des derniers devoirs que la communauté rend au défunt. Le Ghusl al-Mayyit est une obligation religieuse (fard kifaya) prescrite par le Prophète ﷺ, qui a dit : « Lavez-le avec de l&apos;eau et du jujubier » (Sahih al-Bukhari, n°1253 ; Sahih Muslim, n°939). Chez Al Hayat, cette étape sacrée est confiée à des professionnels formés aux prescriptions coraniques et à la Sunnah, disponibles 24h/24 en Normandie et en Île-de-France. Notre équipe, habilitée par la préfecture, accomplit ce rituel avec le soin, la pudeur et la dignité que chaque défunt mérite.
          </p>
        </div>
      </section>

      {/* Contenu principal */}
      <section className="w-full bg-[#F5F0E8] py-20 md:py-28">
        <div className="w-full max-w-[1280px] mx-auto px-8 md:px-12">
          <div className="max-w-[780px]">

            {/* H2: Définition */}
            <h2 className="text-[24px] md:text-[28px] font-semibold text-[#1A1A1A] mb-6">Qu&apos;est-ce que le Ghusl al-Mayyit en Islam ?</h2>
            <p className="text-[15px] font-light text-[#555] leading-[1.8] mb-4">
              Le Ghusl al-Mayyit (غسل الميت) est le lavage rituel du corps du défunt avant l&apos;inhumation. Il s&apos;agit d&apos;une obligation collective (fard kifaya) en Islam : si un groupe de musulmans s&apos;en acquitte, les autres en sont dispensés. Négliger cette obligation lorsque personne ne s&apos;en charge constitue un péché pour l&apos;ensemble de la communauté.
            </p>
            <p className="text-[15px] font-light text-[#555] leading-[1.8] mb-4">
              Cette purification est fondée sur le Coran et la Sunnah. Allah dit : « De cette terre Nous vous avons créés, en elle Nous vous ramènerons » (Sourate Ta-Ha, 20:55). Le Prophète ﷺ a donné des instructions précises sur la manière de laver le défunt, en commençant par les parties droites et les membres des ablutions.
            </p>
            <p className="text-[15px] font-light text-[#555] leading-[1.8] mb-8">
              Le Ghusl n&apos;est pas un simple acte d&apos;hygiène — c&apos;est un acte d&apos;adoration. La personne qui l&apos;accomplit avec sincérité obtient une grande récompense. Le Prophète ﷺ a dit : « Quiconque lave un mort et préserve sa pudeur, Allah lui pardonne quarante fois » (Hadith rapporté par Al-Hakim).
            </p>

            {/* H2: Étapes */}
            <h2 className="text-[24px] md:text-[28px] font-semibold text-[#1A1A1A] mb-6">Comment se déroule la toilette rituelle chez Al Hayat ?</h2>
            <p className="text-[15px] font-light text-[#555] leading-[1.8] mb-6">
              Chez Al Hayat, le Ghusl est effectué selon un protocole rigoureux, fidèle aux enseignements du Prophète ﷺ. Voici les étapes que notre équipe suit systématiquement :
            </p>
            <div className="flex flex-col gap-5 mb-8">
              {[
                { step: "1", title: "Couvrir les parties intimes (Awra)", desc: "Le corps est recouvert d\u0027un drap du nombril aux genoux. Les parties intimes ne sont jamais exposées, même pendant le lavage. C\u0027est un droit du défunt que l\u0027Islam protège scrupuleusement." },
                { step: "2", title: "Retirer les impuretés (Istinja)", desc: "Les impuretés visibles sont retirées délicatement à l\u0027aide d\u0027un gant, sans jamais exposer les parties intimes. Cette étape prépare le corps au lavage proprement dit." },
                { step: "3", title: "Ablutions rituelles (Wudhu)", desc: "Les ablutions sont réalisées sur le défunt : lavage du visage, des avant-bras, passage des mains mouillées sur la tête, et lavage des pieds. C\u0027est exactement comme le wudhu du vivant." },
                { step: "4", title: "Lavage complet du corps", desc: "Le corps est lavé un nombre impair de fois (3, 5 ou 7), en commençant systématiquement par le côté droit. De l\u0027eau mélangée à du jujubier (sidr) est utilisée pour les premiers lavages. Le dernier rinçage se fait à l\u0027eau pure, parfois additionnée de camphre." },
                { step: "5", title: "Séchage et parfum (Kafour)", desc: "Le corps est séché avec délicatesse puis parfumé au camphre (kafour), en insistant sur les sept points de prosternation : le front, le nez, les deux mains, les deux genoux et les pieds." },
                { step: "6", title: "Mise dans le Kafan (linceul)", desc: "Le défunt est enveloppé dans le kafan — trois pièces de tissu blanc pour l\u0027homme, cinq pour la femme. Le linceul est simple, blanc, en coton ou en lin, sans couture ni ornement. Le Prophète ﷺ a recommandé des vêtements blancs pour le linceul (Sunan Abu Dawud)." },
              ].map((s) => (
                <div key={s.step} className="flex gap-4 items-start p-5 bg-white border border-[#E8E2D9] rounded-[10px]">
                  <div className="w-8 h-8 rounded-full bg-[#2D6A2D] flex items-center justify-center shrink-0">
                    <span className="text-[12px] font-bold text-white">{s.step}</span>
                  </div>
                  <div>
                    <h3 className="text-[16px] font-semibold text-[#1A1A1A] mb-1">{s.title}</h3>
                    <p className="text-[14px] font-light text-[#666] leading-[1.7]">{s.desc}</p>
                  </div>
                </div>
              ))}
            </div>

            {/* H2: Règles islamiques */}
            <h2 className="text-[24px] md:text-[28px] font-semibold text-[#1A1A1A] mb-6">Les règles islamiques de la toilette mortuaire</h2>
            <p className="text-[15px] font-light text-[#555] leading-[1.8] mb-4">
              La toilette rituelle musulmane doit être réalisée par des personnes du même sexe que le défunt : des hommes pour un homme, des femmes pour une femme. Exception : un époux peut laver son épouse et inversement, comme l&apos;atteste le hadith d&apos;Aïcha (رضي الله عنها) : « Si j&apos;avais su ce que je sais maintenant, seules ses épouses auraient lavé le Prophète ﷺ » (Sunan Abu Dawud, n°3141).
            </p>
            <p className="text-[15px] font-light text-[#555] leading-[1.8] mb-4">
              Chez Al Hayat, nous disposons d&apos;une <strong>équipe mixte qualifiée</strong> — hommes et femmes formés aux rites islamiques — pour assurer le Ghusl en toute conformité. La pudeur du défunt est préservée à chaque instant : le corps n&apos;est jamais exposé au regard, et seules les personnes nécessaires sont présentes.
            </p>
            <p className="text-[15px] font-light text-[#555] leading-[1.8] mb-8">
              En cas de décès d&apos;un enfant, les deux sexes peuvent procéder au lavage. Pour un martyr (shahid), le lavage n&apos;est pas requis selon l&apos;avis majoritaire des savants.
            </p>

            {/* H2: Normandie et Paris */}
            <h2 className="text-[24px] md:text-[28px] font-semibold text-[#1A1A1A] mb-6">La toilette rituelle en Normandie et à Paris</h2>
            <p className="text-[15px] font-light text-[#555] leading-[1.8] mb-6">
              Al Hayat intervient dans toute la Normandie et en Île-de-France pour réaliser la toilette rituelle musulmane. Nous nous déplaçons au domicile, à l&apos;hôpital ou en chambre funéraire. Notre équipe est disponible 24h/24 et se rend sur place dans les plus brefs délais, car en Islam, les obsèques doivent être organisées rapidement.
            </p>
            <div className="flex flex-wrap gap-2 mb-10">
              {[
                { label: "Rouen", href: "/pompes-funebres-musulmanes-rouen" },
                { label: "Le Havre", href: "/pompes-funebres-musulmanes-le-havre" },
                { label: "Caen", href: "/pompes-funebres-musulmanes-caen" },
                { label: "Paris", href: "/pompes-funebres-musulmanes-paris" },
              ].map((city) => (
                <Link key={city.href} href={city.href} className="px-4 py-2 bg-white border border-[#E8E2D9] rounded-full text-[13px] text-[#2D6A2D] font-medium hover:border-[#2D6A2D]/30 transition-all">
                  {city.label}
                </Link>
              ))}
            </div>

            {/* H2: Tarifs */}
            <h2 className="text-[24px] md:text-[28px] font-semibold text-[#1A1A1A] mb-6">Tarifs et devis gratuit</h2>
            <p className="text-[15px] font-light text-[#555] leading-[1.8] mb-8">
              Le tarif de la toilette rituelle est inclus dans nos forfaits obsèques musulmanes. Si vous souhaitez uniquement le service de Ghusl, nous vous communiquons un tarif transparent dès le premier appel. Aucun frais caché. Vous pouvez demander un <Link href="/contact" className="text-[#2D6A2D] font-medium hover:underline">devis gratuit</Link> ou nous appeler directement. Al Hayat s&apos;engage à proposer des tarifs accessibles, conformément à la tradition islamique de solidarité envers les familles en deuil.
            </p>

            {/* H2: FAQ */}
            <h2 className="text-[24px] md:text-[28px] font-semibold text-[#1A1A1A] mb-6">Questions fréquentes sur la toilette rituelle</h2>
            <div className="flex flex-col gap-4 mb-10">
              {faqs.map((faq, i) => (
                <div key={i} className="p-6 bg-white border border-[#E8E2D9] rounded-[12px]">
                  <h3 className="text-[16px] font-semibold text-[#1A1A1A] mb-3">{faq.question}</h3>
                  <p className="text-[14.5px] font-light text-[#555] leading-[1.7]">{faq.answer}</p>
                </div>
              ))}
            </div>

            {/* CTA */}
            <div className="p-6 bg-[#0D1208] rounded-[12px] text-white mt-10">
              <p className="text-[15px] font-medium mb-3">Al Hayat vous accompagne</p>
              <p className="text-[14px] font-light text-white/60 mb-4">Si vous avez besoin d&apos;aide pour organiser la toilette rituelle ou les obsèques complètes, notre équipe est disponible 24h/24. Nous intervenons en <Link href="/normandie" className="text-[#6BAA6B] hover:underline">Normandie</Link> et à <Link href="/ile-de-france" className="text-[#6BAA6B] hover:underline">Paris</Link>.</p>
              <Link href="/contact" className="inline-flex items-center gap-2 bg-[#2D6A2D] text-white px-5 py-3 rounded-[5px] text-[13.5px] font-medium hover:bg-[#255525] transition-colors">Nous contacter</Link>
            </div>

            <p className="text-[11px] text-[#999] font-light mt-6">Dernière mise à jour : mai 2025</p>
          </div>
        </div>
      </section>
    </div>
  );
}
