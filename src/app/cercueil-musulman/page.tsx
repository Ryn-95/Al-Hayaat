import type { Metadata } from "next";
import Link from "next/link";
import Breadcrumbs from "@/components/ui/Breadcrumbs";
import SchemaOrg from "@/components/ui/SchemaOrg";
import { buildFuneralHomeSchema, buildFAQSchema } from "@/lib/seo-config";

export const metadata: Metadata = {
  title: "Cercueil Musulman — Loi, Tradition et Rapatriement | Al Hayat",
  description: "Cercueil musulman en France : matériaux, sobriété islamique, mise en bière, cercueil hermétique pour rapatriement. Guide complet par Al Hayat.",
  keywords: ["cercueil musulman", "cercueil islamique", "cercueil islam", "mise en bière islamique", "cercueil hermétique rapatriement"],
};

const faqs = [
  { question: "Le cercueil est-il obligatoire en Islam ?", answer: "Non, la Sunnah prescrit l\u0027inhumation dans le linceul (kafan) seul. Cependant, la loi française impose le cercueil pour toute inhumation. Al Hayat fournit un cercueil sobre en bois naturel, conforme aux deux traditions." },
  { question: "Quel bois pour un cercueil musulman ?", answer: "Le pin et le peuplier sont les bois les plus courants pour un cercueil musulman en France. Ils sont naturels, biodégradables et sobres — conformes à la tradition islamique de simplicité." },
  { question: "Faut-il un cercueil hermétique pour le rapatriement ?", answer: "Oui, le transport international de corps exige un cercueil hermétique (zinc ou aluminium) avec filtre épurateur IATA. C\u0027est une norme aérienne internationale obligatoire." },
  { question: "Combien coûte un cercueil musulman ?", answer: "Un cercueil en bois simple pour inhumation en France coûte entre 400 et 800 euros. Un cercueil hermétique pour rapatriement coûte entre 800 et 1 500 euros. Al Hayat inclut le cercueil dans ses forfaits obsèques." },
  { question: "Peut-on mettre des fleurs dans le cercueil musulman ?", answer: "La tradition islamique privilégie la sobriété. Le défunt est enveloppé dans le kafan blanc et parfumé au camphre. Les fleurs ne sont pas interdites mais ne font pas partie de la Sunnah." },
];

export default function CercueilMusulmanPage() {
  return (
    <div className="bg-[#F5F0E8] text-[#1A1A1A] min-h-screen font-inter">
      <SchemaOrg data={[buildFuneralHomeSchema(), buildFAQSchema(faqs)]} />
      <section className="relative w-full pt-28 pb-16 bg-[#0D1208] text-white">
        <div className="relative z-10 w-full max-w-[1280px] mx-auto px-8 md:px-12">
          <Breadcrumbs items={[{ label: "Services", href: "#" }, { label: "Cercueil Musulman", href: "/cercueil-musulman" }]} />
          <h1 className="text-[2.2rem] md:text-[3rem] font-semibold leading-[1.1] tracking-[-0.02em] text-white mb-6 mt-6 max-w-[700px]">
            Le Cercueil Musulman : Loi Française et Tradition Islamique
          </h1>
          <p className="text-[15px] font-light leading-[1.8] text-white/70 max-w-[640px]">
            En Islam, la Sunnah prescrit l&apos;inhumation du défunt directement dans le kafan (linceul), sans cercueil. Mais en France, la loi impose l&apos;utilisation d&apos;un cercueil pour toute inhumation ou transport de corps. Cette obligation crée une tension que les familles musulmanes doivent gérer dans l&apos;urgence du deuil. Al Hayat propose des cercueils conformes à la fois au droit français et à la tradition de sobriété islamique — en bois naturel, simples, sans ornement excessif. Pour les rapatriements, nous fournissons les cercueils hermétiques réglementaires.
          </p>
        </div>
      </section>

      <section className="w-full bg-[#F5F0E8] py-20 md:py-28">
        <div className="w-full max-w-[1280px] mx-auto px-8 md:px-12"><div className="max-w-[780px]">
          <h2 className="text-[24px] md:text-[28px] font-semibold text-[#1A1A1A] mb-6">Le cercueil en Islam : ce que disent les textes</h2>
          <p className="text-[15px] font-light text-[#555] leading-[1.8] mb-4">
            La pratique originelle islamique, fondée sur la Sunnah du Prophète ﷺ, prescrit l&apos;inhumation directe dans le linceul. Le Prophète ﷺ a été enterré dans trois pièces de tissu blanc, sans cercueil (Sahih al-Bukhari, n°1271). Les quatre écoles juridiques (madhahib) reconnaissent que le cercueil n&apos;est pas requis par la Charia.
          </p>
          <p className="text-[15px] font-light text-[#555] leading-[1.8] mb-8">
            Cependant, les savants musulmans autorisent l&apos;utilisation du cercueil lorsque la loi du pays de résidence l&apos;exige. En France, l&apos;article R2213-25 du Code Général des Collectivités Territoriales rend le cercueil obligatoire. Les familles musulmanes ne sont donc pas en faute en utilisant un cercueil — elles respectent une nécessité légale reconnue par la jurisprudence islamique (fiqh).
          </p>

          <h2 className="text-[24px] md:text-[28px] font-semibold text-[#1A1A1A] mb-6">Caractéristiques du cercueil musulman</h2>
          <p className="text-[15px] font-light text-[#555] leading-[1.8] mb-4">
            Le cercueil musulman se distingue par sa sobriété, conformément aux enseignements islamiques sur l&apos;humilité devant la mort. Le Prophète ﷺ a recommandé la simplicité dans les funérailles. Voici les caractéristiques que respecte Al Hayat :
          </p>
          <ul className="flex flex-col gap-3 mb-8">
            {[
              "Bois naturel (pin, peuplier ou cèdre) — biodégradable et sobre",
              "Absence d\u0027ornements excessifs : pas de dorures, sculptures ou décorations ostentatoires",
              "Capiton intérieur blanc, rappelant la pureté du kafan",
              "Dimensions adaptées au défunt, avec espace pour le linceul",
              "Poignées simples et discrètes — fonctionnelles, pas décoratives",
            ].map((t, i) => (
              <li key={i} className="flex items-start gap-3 text-[14.5px] text-[#555] font-light leading-[1.7]">
                <span className="w-1.5 h-1.5 rounded-full bg-[#2D6A2D] mt-2.5 shrink-0" />{t}
              </li>
            ))}
          </ul>

          <h2 className="text-[24px] md:text-[28px] font-semibold text-[#1A1A1A] mb-6">La mise en bière selon les rites islamiques</h2>
          <p className="text-[15px] font-light text-[#555] leading-[1.8] mb-4">
            Après la <Link href="/toilette-rituelle-musulmane" className="text-[#2D6A2D] font-medium hover:underline">toilette rituelle (Ghusl)</Link> et l&apos;enveloppement dans le <Link href="/guide/kafan-linceul-islam" className="text-[#2D6A2D] font-medium hover:underline">kafan</Link>, le défunt est placé dans le cercueil avec soin. Le visage est tourné vers la droite, en direction de la Qibla (La Mecque). Les nœuds du linceul sont desserrés. Le corps ne doit pas être exposé — la pudeur du défunt est préservée même après la mort.
          </p>
          <p className="text-[15px] font-light text-[#555] leading-[1.8] mb-8">
            Chez Al Hayat, la mise en bière est réalisée immédiatement après la toilette rituelle et avant la <Link href="/salat-al-janaza" className="text-[#2D6A2D] font-medium hover:underline">Salat al-Janaza</Link>. Le cercueil est ensuite transporté vers la mosquée pour la prière funèbre, puis vers le <Link href="/inhumation-carre-musulman" className="text-[#2D6A2D] font-medium hover:underline">carré musulman</Link> pour l&apos;inhumation.
          </p>

          <h2 className="text-[24px] md:text-[28px] font-semibold text-[#1A1A1A] mb-6">Le cercueil hermétique pour le rapatriement</h2>
          <p className="text-[15px] font-light text-[#555] leading-[1.8] mb-4">
            Pour le <Link href="/rapatriement-corps" className="text-[#2D6A2D] font-medium hover:underline">rapatriement international de corps</Link>, un cercueil hermétique est obligatoire. Cette exigence est imposée par les normes IATA (transport aérien) et les réglementations sanitaires internationales.
          </p>
          <ul className="flex flex-col gap-3 mb-8">
            {[
              "Matériau : zinc ou aluminium, étanche aux gaz et liquides",
              "Épaisseur minimale de 22 mm pour le bois extérieur",
              "Filtre épurateur IATA intégré pour le transport aérien",
              "Double cercueil : cercueil bois extérieur + caisson métallique intérieur",
              "Scellé par un opérateur habilité — Al Hayat dispose de cette habilitation",
            ].map((t, i) => (
              <li key={i} className="flex items-start gap-3 text-[14.5px] text-[#555] font-light leading-[1.7]">
                <span className="w-1.5 h-1.5 rounded-full bg-[#7A5C3A] mt-2.5 shrink-0" />{t}
              </li>
            ))}
          </ul>

          <h2 className="text-[24px] md:text-[28px] font-semibold text-[#1A1A1A] mb-6">Questions fréquentes sur le cercueil musulman</h2>
          <div className="flex flex-col gap-4 mb-10">
            {faqs.map((faq, i) => (
              <div key={i} className="p-6 bg-white border border-[#E8E2D9] rounded-[12px]">
                <h3 className="text-[16px] font-semibold text-[#1A1A1A] mb-3">{faq.question}</h3>
                <p className="text-[14.5px] font-light text-[#555] leading-[1.7]">{faq.answer}</p>
              </div>
            ))}
          </div>

          <div className="p-6 bg-[#0D1208] rounded-[12px] text-white mt-10">
            <p className="text-[15px] font-medium mb-3">Al Hayat vous accompagne</p>
            <p className="text-[14px] font-light text-white/60 mb-4">Le choix du cercueil fait partie de l&apos;accompagnement complet proposé par Al Hayat. Contactez-nous pour un devis gratuit incluant le cercueil adapté à votre situation.</p>
            <Link href="/contact" className="inline-flex items-center gap-2 bg-[#2D6A2D] text-white px-5 py-3 rounded-[5px] text-[13.5px] font-medium hover:bg-[#255525] transition-colors">Nous contacter</Link>
          </div>
          <p className="text-[11px] text-[#999] font-light mt-6">Dernière mise à jour : mai 2025</p>
        </div></div>
      </section>
    </div>
  );
}
