import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Politique de Confidentialité",
  description: "Politique de confidentialité et gestion des données personnelles de PF AL HAYAAT.",
  alternates: {
    canonical: "https://www.pompesfunebres-alhayaat.fr/politique-confidentialite",
  },
};

export default function PolitiqueConfidentialite() {
  return (
    <div className="bg-white min-h-screen pt-32 pb-24 text-[#111] font-inter">
      <div className="max-w-[800px] mx-auto px-6 md:px-12">
        <h1 className="text-[32px] md:text-[48px] font-medium tracking-tight mb-12">
          Politique de Confidentialité
        </h1>

        <div className="space-y-12 text-[14px] md:text-[15px] font-light leading-[1.7] text-[#444]">
          <p>
            Chez <strong className="font-medium text-[#111]">Al Hayaat Pompes Funèbres Musulmanes</strong>, nous accordons une importance primordiale à la protection de vos données personnelles. Cette politique vise à vous informer sur la manière dont nous collectons, utilisons et protégeons vos informations.
          </p>

          <section className="space-y-4">
            <h2 className="text-[18px] font-medium text-[#111] tracking-tight">
              1. Données collectées
            </h2>
            <p>Nous pouvons être amenés à collecter les données suivantes lors de vos demandes de contact ou de devis :</p>
            <ul className="list-disc pl-5 space-y-2">
              <li>Nom et prénom</li>
              <li>Adresse e-mail</li>
              <li>Numéro de téléphone</li>
              <li>Informations nécessaires à l&apos;organisation des obsèques (identité du défunt, lieu, etc.)</li>
            </ul>
          </section>

          <section className="space-y-4">
            <h2 className="text-[18px] font-medium text-[#111] tracking-tight">
              2. Utilisation des données
            </h2>
            <p>Les données collectées sont utilisées exclusivement dans le cadre de :</p>
            <ul className="list-disc pl-5 space-y-2">
              <li>La gestion de vos demandes de contact et d&apos;informations</li>
              <li>L&apos;établissement de devis personnalisés</li>
              <li>L&apos;organisation et la coordination des services funéraires et démarches administratives associées</li>
            </ul>
            <p className="mt-4 text-[#666] italic">
              Al Hayaat Pompes Funèbres Musulmanes s&apos;oppose strictement à l&apos;utilisation de ses données à des fins de prospection commerciale par des tiers, et nous appliquons cette même règle à vos données : elles ne seront jamais revendues ou cédées à des fins publicitaires.
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="text-[18px] font-medium text-[#111] tracking-tight">
              3. Durée de conservation
            </h2>
            <p>
              Vos données personnelles sont conservées pendant la durée nécessaire à l&apos;accomplissement des finalités mentionnées ci-dessus, et conformément aux obligations légales de conservation des documents administratifs et comptables (généralement 5 à 10 ans).
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="text-[18px] font-medium text-[#111] tracking-tight">
              4. Vos droits
            </h2>
            <p>
              Conformément à la réglementation européenne (RGPD) et française en vigueur, vous disposez d&apos;un droit d&apos;accès, de rectification, de suppression et de portabilité de vos données personnelles. Vous pouvez également vous opposer à leur traitement.
            </p>
            <p>
              Pour exercer ces droits, veuillez nous contacter :
            </p>
            <ul className="list-disc pl-5 space-y-2 mt-2">
              <li>Par courrier : Al Hayaat Pompes Funèbres Musulmanes, 44 Rue Saint-Jacques, 76600 Le Havre</li>
              <li>Par téléphone : <a href="tel:+33763214656" className="hover:text-[#2D6A2D]">07 63 21 46 56</a></li>
            </ul>
          </section>

          <section className="space-y-4">
            <h2 className="text-[18px] font-medium text-[#111] tracking-tight">
              5. Cookies
            </h2>
            <p>
              Notre site web utilise des cookies techniques strictement nécessaires à son bon fonctionnement. Nous n&apos;utilisons pas de cookies de traçage publicitaire invasifs.
            </p>
          </section>
        </div>
      </div>
    </div>
  );
}
