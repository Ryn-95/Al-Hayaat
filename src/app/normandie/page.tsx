"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { normandieCities } from "@/lib/geo-data";
import Breadcrumbs from "@/components/ui/Breadcrumbs";
import SchemaOrg from "@/components/ui/SchemaOrg";
import { buildFuneralHomeSchema, SITE_CONFIG } from "@/lib/seo-config";

const ease = [0.16, 1, 0.3, 1] as const;
const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease } },
};

export default function NormandiePage() {
  const schema = buildFuneralHomeSchema({
    name: "Al Hayat Pompes Funèbres Musulmanes Normandie",
    city: "Rouen",
    areaServed: ["Normandie", "Rouen", "Le Havre", "Caen", "Dieppe", "Évreux", "Cherbourg"],
  });

  return (
    <div className="bg-[#F5F0E8] text-[#1A1A1A] min-h-screen font-inter">
      <SchemaOrg data={schema} />

      {/* Hero */}
      <section className="relative w-full pt-28 pb-20 bg-[#0D1208] text-white">
        <div className="absolute inset-0 bg-gradient-to-b from-[#0D1208] via-[#0D1208]/95 to-[#0D1208]" />
        <div className="relative z-10 w-full max-w-[1280px] mx-auto px-8 md:px-12">
          <Breadcrumbs items={[{ label: "Normandie", href: "/normandie" }]} />
          <motion.div initial="hidden" animate="visible" variants={{ visible: { transition: { staggerChildren: 0.12 } } }}>
            <motion.h1 variants={fadeUp} className="text-[2.2rem] md:text-[3rem] font-semibold leading-[1.1] tracking-[-0.02em] text-white mb-6 mt-6 max-w-[700px]">
              Pompes Funèbres Musulmanes en Normandie
            </motion.h1>
            <motion.p variants={fadeUp} className="text-[15px] font-light leading-[1.7] text-white/60 max-w-[560px] mb-8">
              Al Hayat accompagne les familles musulmanes dans toute la Normandie. Rouen, Le Havre, Caen, Dieppe, Évreux, Cherbourg — nous intervenons dans les départements 76, 14, 27 et 50. Toilette rituelle, Salat al-Janaza, rapatriement, inhumation en carré musulman. Disponibles 24h/24, 7j/7.
            </motion.p>
            <motion.div variants={fadeUp} className="flex items-center gap-3">
              <a href={`tel:${SITE_CONFIG.phone.replace(/\s/g, "")}`} className="flex items-center gap-2 bg-[#2D6A2D] text-white px-5 py-3 rounded-[5px] text-[13.5px] font-medium hover:bg-[#255525] transition-colors">
                Nous appeler maintenant
              </a>
              <Link href="/contact" className="text-[13.5px] font-medium text-white/60 hover:text-white transition-colors px-3 py-3 border border-white/20 rounded-[5px] hover:bg-white/10">
                Demander un devis
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* City Cards */}
      <section className="w-full bg-[#F5F0E8] py-20 md:py-28">
        <div className="w-full max-w-[1280px] mx-auto px-8 md:px-12">
          <motion.div variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }}>
            <h2 className="text-[24px] md:text-[30px] font-semibold leading-[1.2] tracking-tight text-[#1A1A1A] mb-4">
              Nos agences et zones d&apos;intervention en Normandie
            </h2>
            <p className="text-[15px] font-light text-[#666] leading-[1.7] max-w-[640px] mb-12">
              Nous intervenons dans toutes les grandes villes de Normandie et leurs environs. Cliquez sur votre ville pour découvrir nos services locaux.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {normandieCities.map((city, i) => (
              <motion.div key={city.slug} variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-30px" }} transition={{ delay: i * 0.05 }}>
                <Link href={`/${city.slug}`} className="group block p-6 bg-white border border-[#E8E2D9] rounded-[12px] hover:border-[#2D6A2D]/30 hover:shadow-sm transition-all">
                  <div className="flex items-start justify-between mb-2">
                    <h3 className="text-[17px] font-semibold text-[#1A1A1A] group-hover:text-[#2D6A2D] transition-colors">{city.city}</h3>
                    <span className="text-[12px] text-[#999] font-light bg-[#F5F0E8] px-2 py-0.5 rounded">{city.departmentCode}</span>
                  </div>
                  <p className="text-[13px] text-[#888] font-light leading-[1.5] mb-3">
                    Pompes funèbres musulmanes à {city.city} — Toilette rituelle, rapatriement, carré musulman.
                  </p>
                  <span className="text-[12px] text-[#2D6A2D] font-medium group-hover:underline">Voir nos services →</span>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Overview */}
      <section className="w-full bg-white py-20 md:py-28">
        <div className="w-full max-w-[1280px] mx-auto px-8 md:px-12">
          <motion.div variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }}>
            <h2 className="text-[24px] md:text-[30px] font-semibold leading-[1.2] tracking-tight text-[#1A1A1A] mb-10">
              Les rites funéraires islamiques respectés en Normandie
            </h2>
          </motion.div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {[
              { title: "Toilette rituelle (Ghusl al-Mayyit)", desc: "Réalisée selon la Sunnah par notre équipe qualifiée. Équipe homme et femme disponible pour respecter les prescriptions islamiques.", href: "/toilette-rituelle-musulmane" },
              { title: "Salat al-Janaza", desc: "Organisation de la prière funèbre avec l'imam de votre choix, dans la mosquée ou la salle de prière la plus proche.", href: "/salat-al-janaza" },
              { title: "Inhumation en carré musulman", desc: "Recherche de concession, orientation vers la Qibla, mise en terre selon les rites islamiques.", href: "/inhumation-carre-musulman" },
              { title: "Rapatriement de corps", desc: "Transfert du défunt vers l'Algérie, le Maroc, la Tunisie, le Mali, le Sénégal et toutes destinations.", href: "/rapatriement-corps" },
            ].map((service, i) => (
              <motion.div key={i} variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }} className="flex gap-4 items-start border-b border-[#E0D9CF] pb-8 last:border-0 last:pb-0">
                <div className="w-8 h-8 rounded-full border border-[#C8BFB0] flex items-center justify-center shrink-0 mt-0.5">
                  <span className="text-[11px] font-semibold text-[#7A5C3A]">0{i + 1}</span>
                </div>
                <div>
                  <Link href={service.href} className="text-[17px] font-semibold text-[#1A1A1A] mb-1.5 hover:text-[#2D6A2D] transition-colors block">{service.title}</Link>
                  <p className="text-[14.5px] font-light text-[#666] leading-[1.7]">{service.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Rapatriement from Normandie */}
      <section className="w-full bg-[#0D1208] py-20 text-white">
        <div className="w-full max-w-[1280px] mx-auto px-8 md:px-12">
          <motion.div variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }}>
            <h2 className="text-[24px] md:text-[30px] font-semibold leading-[1.2] tracking-tight text-white mb-4">
              Rapatriement de corps depuis la Normandie
            </h2>
            <p className="text-[15px] font-light text-white/60 leading-[1.7] max-w-[640px] mb-10">
              Al Hayat organise le rapatriement funéraire depuis toutes les villes de Normandie vers le pays d&apos;origine du défunt. Algérie, Maroc, Tunisie, Mali, Sénégal, Pakistan, Bangladesh et bien d&apos;autres destinations.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Carré Musulman */}
      <section className="w-full bg-[#F5F0E8] py-20 md:py-28">
        <div className="w-full max-w-[1280px] mx-auto px-8 md:px-12">
          <motion.div variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }}>
            <h2 className="text-[24px] md:text-[30px] font-semibold leading-[1.2] tracking-tight text-[#1A1A1A] mb-4">
              Inhumation dans un carré musulman en Normandie
            </h2>
            <p className="text-[15px] font-light text-[#666] leading-[1.7] max-w-[640px] mb-8">
              La Normandie dispose de plusieurs carrés musulmans dans ses cimetières municipaux. Al Hayat vous aide à obtenir une concession et organise l&apos;inhumation selon les rites islamiques.
            </p>
            <Link href="/carre-musulman-normandie" className="inline-flex items-center gap-2 bg-[#1A1A1A] text-white px-6 py-3.5 rounded-[5px] text-[14px] font-medium hover:bg-[#2D6A2D] transition-colors">
              Guide des carrés musulmans en Normandie
              <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14M12 5l7 7-7 7" /></svg>
            </Link>
          </motion.div>
        </div>
      </section>

      {/* CTA */}
      <section className="w-full bg-[#0D1208] py-20 text-white">
        <div className="w-full max-w-[1280px] mx-auto px-8 md:px-12 flex flex-col md:flex-row justify-between items-start md:items-center gap-8">
          <div>
            <h2 className="text-[24px] md:text-[32px] font-semibold leading-[1.15] tracking-tight text-white mb-2">
              Contactez-nous pour tout le territoire normand
            </h2>
            <p className="text-[15px] text-white/50 font-light">Disponibles 24h/24 — 7j/7</p>
          </div>
          <a href={`tel:${SITE_CONFIG.phone.replace(/\s/g, "")}`} className="flex items-center gap-3 bg-[#2D6A2D] text-white px-7 py-4 rounded-[6px] font-medium text-[15px] hover:bg-[#255525] transition-colors">
            Urgence 24/7
          </a>
        </div>
      </section>
    </div>
  );
}
