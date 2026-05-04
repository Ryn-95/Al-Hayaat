"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { parisCities } from "@/lib/geo-data";
import Breadcrumbs from "@/components/ui/Breadcrumbs";
import SchemaOrg from "@/components/ui/SchemaOrg";
import { buildFuneralHomeSchema, SITE_CONFIG } from "@/lib/seo-config";

const ease = [0.16, 1, 0.3, 1] as const;
const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease } },
};

export default function ParisIleDeFrancePage() {
  const schema = buildFuneralHomeSchema({
    name: "Al Hayat Pompes Funèbres Musulmanes Paris Île-de-France",
    city: "Paris",
    postalCode: "75000",
    areaServed: ["Paris", "Île-de-France", "Seine-Saint-Denis", "Val-d'Oise"],
  });

  return (
    <div className="bg-[#F5F0E8] text-[#1A1A1A] min-h-screen font-inter">
      <SchemaOrg data={schema} />

      <section className="relative w-full pt-28 pb-20 bg-[#0D1208] text-white">
        <div className="absolute inset-0 bg-gradient-to-b from-[#0D1208] via-[#0D1208]/95 to-[#0D1208]" />
        <div className="relative z-10 w-full max-w-[1280px] mx-auto px-8 md:px-12">
          <Breadcrumbs items={[{ label: "Paris & Île-de-France", href: "/ile-de-france" }]} />
          <motion.div initial="hidden" animate="visible" variants={{ visible: { transition: { staggerChildren: 0.12 } } }}>
            <motion.h1 variants={fadeUp} className="text-[2.2rem] md:text-[3rem] font-semibold leading-[1.1] tracking-[-0.02em] text-white mb-6 mt-6 max-w-[700px]">
              Pompes Funèbres Musulmanes à Paris et en Île-de-France
            </motion.h1>
            <motion.p variants={fadeUp} className="text-[15px] font-light leading-[1.7] text-white/60 max-w-[560px] mb-8">
              Al Hayat accompagne les familles musulmanes de Paris et de toute l&apos;Île-de-France. Nous intervenons dans le 75, le 92, le 93, le 94 et le 95. Toilette rituelle, Salat al-Janaza, inhumation en carré musulman, rapatriement international. Disponibles 24h/24, 7j/7.
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

      <section className="w-full bg-[#F5F0E8] py-20 md:py-28">
        <div className="w-full max-w-[1280px] mx-auto px-8 md:px-12">
          <motion.div variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }}>
            <h2 className="text-[24px] md:text-[30px] font-semibold leading-[1.2] tracking-tight text-[#1A1A1A] mb-4">
              Nos zones d&apos;intervention en Île-de-France
            </h2>
            <p className="text-[15px] font-light text-[#666] leading-[1.7] max-w-[640px] mb-12">
              Nous intervenons à Paris et dans tous les départements d&apos;Île-de-France. Cliquez sur votre zone pour découvrir nos services locaux.
            </p>
          </motion.div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {parisCities.map((city, i) => (
              <motion.div key={city.slug} variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-30px" }} transition={{ delay: i * 0.05 }}>
                <Link href={`/${city.slug}`} className="group block p-6 bg-white border border-[#E8E2D9] rounded-[12px] hover:border-[#2D6A2D]/30 hover:shadow-sm transition-all">
                  <div className="flex items-start justify-between mb-2">
                    <h3 className="text-[17px] font-semibold text-[#1A1A1A] group-hover:text-[#2D6A2D] transition-colors">{city.city}</h3>
                    <span className="text-[12px] text-[#999] font-light bg-[#F5F0E8] px-2 py-0.5 rounded">{city.departmentCode}</span>
                  </div>
                  <p className="text-[13px] text-[#888] font-light leading-[1.5] mb-3">
                    Pompes funèbres musulmanes — {city.city}. Toilette rituelle, rapatriement, carré musulman.
                  </p>
                  <span className="text-[12px] text-[#2D6A2D] font-medium group-hover:underline">Voir nos services →</span>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="w-full bg-white py-20 md:py-28">
        <div className="w-full max-w-[1280px] mx-auto px-8 md:px-12">
          <h2 className="text-[24px] md:text-[30px] font-semibold leading-[1.2] tracking-tight text-[#1A1A1A] mb-4">Nos services funéraires islamiques à Paris</h2>
          <p className="text-[15px] font-light text-[#666] leading-[1.7] max-w-[640px] mb-10">Al Hayat propose un accompagnement complet pour les familles musulmanes de Paris et d&apos;Île-de-France.</p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {[
              { title: "Toilette Rituelle (Ghusl)", href: "/toilette-rituelle-musulmane" },
              { title: "Salat al-Janaza", href: "/salat-al-janaza" },
              { title: "Inhumation Carré Musulman", href: "/inhumation-carre-musulman" },
              { title: "Rapatriement de Corps", href: "/rapatriement-corps" },
              { title: "Démarches Administratives", href: "/demarches-administratives-deces" },
              { title: "Assurance Décès Islamique", href: "/assurance-deces-musulmane" },
            ].map((s) => (
              <Link key={s.title} href={s.href} className="flex items-center gap-3 p-5 border border-[#E8E2D9] rounded-[10px] hover:border-[#2D6A2D]/30 transition-all group">
                <span className="w-2 h-2 rounded-full bg-[#2D6A2D] shrink-0" />
                <span className="text-[15px] font-medium text-[#1A1A1A] group-hover:text-[#2D6A2D] transition-colors">{s.title}</span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="w-full bg-[#0D1208] py-20 text-white">
        <div className="w-full max-w-[1280px] mx-auto px-8 md:px-12 flex flex-col md:flex-row justify-between items-start md:items-center gap-8">
          <div>
            <h2 className="text-[24px] md:text-[32px] font-semibold text-white mb-2">Nous contacter à Paris</h2>
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
