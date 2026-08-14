import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Mentions Légales",
  description: "Mentions légales de l'entreprise PF AL HAYAAT.",
  alternates: {
    canonical: "https://www.pompesfunebres-alhayaat.fr/mentions-legales",
  },
};

export default function MentionsLegales() {
  return (
    <div className="bg-white min-h-screen pt-32 pb-24 text-[#111] font-inter">
      <div className="max-w-[800px] mx-auto px-6 md:px-12">
        <h1 className="text-[32px] md:text-[48px] font-medium tracking-tight mb-12">
          Mentions Légales
        </h1>

        <div className="space-y-12 text-[14px] md:text-[15px] font-light leading-[1.7] text-[#444]">
          <section className="space-y-4">
            <h2 className="text-[18px] font-medium text-[#111] tracking-tight">
              1. Informations sur l&apos;entreprise
            </h2>
            <div className="bg-[#FAFAFA] p-6 rounded-[8px] border border-[#E5E5E5] space-y-2">
              <p><strong className="font-medium text-[#111]">Raison sociale :</strong> Al Hayaat Pompes Funèbres Musulmanes (PF AL HAYAAT)</p>
              <p><strong className="font-medium text-[#111]">Forme juridique :</strong> SAS (Société par actions simplifiée)</p>
              <p><strong className="font-medium text-[#111]">Capital social :</strong> 1 000,00 €</p>
              <p><strong className="font-medium text-[#111]">Siège social :</strong> 44 Rue Saint-Jacques, 76600 Le Havre</p>
              <p><strong className="font-medium text-[#111]">SIREN :</strong> 944 387 075</p>
              <p><strong className="font-medium text-[#111]">SIRET :</strong> 944 387 075 00012</p>
              <p><strong className="font-medium text-[#111]">Habilitation préfectorale :</strong> [Numéro à compléter]</p>
              <p><strong className="font-medium text-[#111]">RCS :</strong> Inscrit au greffe de LE HAVRE</p>
              <p><strong className="font-medium text-[#111]">Numéro de TVA Intracommunautaire :</strong> FR78944387075</p>
              <p><strong className="font-medium text-[#111]">Code NAF / APE :</strong> 96.03Z (Services funéraires)</p>
            </div>
          </section>

          <section className="space-y-4">
            <h2 className="text-[18px] font-medium text-[#111] tracking-tight">
              2. Dirigeants
            </h2>
            <ul className="list-disc pl-5 space-y-2">
              <li><strong className="font-medium text-[#111]">Président :</strong> SOUADI Brahim</li>
              <li><strong className="font-medium text-[#111]">Directeur général :</strong> TALL Mansour</li>
            </ul>
          </section>

          <section className="space-y-4">
            <h2 className="text-[18px] font-medium text-[#111] tracking-tight">
              3. Activité
            </h2>
            <p>
              Le secteur d&apos;activités des services funéraires à savoir l&apos;organisation d&apos;obsèques tant en France qu&apos;à l&apos;étranger, rapatriement de corps, fourniture de housses, cercueils, accessoires intérieurs et extérieurs, fourniture de personnel, objets et prestations nécessaires aux obsèques, inhumations, exhumations, gestion et utilisation de chambres funéraires.
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="text-[18px] font-medium text-[#111] tracking-tight">
              4. Contact
            </h2>
            <p>
              <strong className="font-medium text-[#111]">Téléphone :</strong> <a href="tel:+33763214656" className="hover:text-[#2D6A2D]">07 63 21 46 56</a><br />
              <strong className="font-medium text-[#111]">Adresse :</strong> 44 Rue Saint-Jacques, 76600 Le Havre
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="text-[18px] font-medium text-[#111] tracking-tight">
              5. Hébergement
            </h2>
            <p>
              Le présent site est hébergé par [Nom de l&apos;hébergeur, ex: Vercel Inc., 340 S Lemon Ave #4133 Walnut, CA 91789, USA].
            </p>
          </section>
        </div>
      </div>
    </div>
  );
}
