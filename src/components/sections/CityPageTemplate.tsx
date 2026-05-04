"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import type { CityPageData } from "@/lib/geo-data";
import Breadcrumbs from "@/components/ui/Breadcrumbs";
import SchemaOrg from "@/components/ui/SchemaOrg";
import { buildFuneralHomeSchema, buildFAQSchema, SITE_CONFIG } from "@/lib/seo-config";

const ease = [0.16, 1, 0.3, 1] as const;
const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease } },
};

interface CityPageTemplateProps {
  data: CityPageData;
  breadcrumbs: { label: string; href: string }[];
}

export default function CityPageTemplate({ data, breadcrumbs }: CityPageTemplateProps) {
  const schema = buildFuneralHomeSchema({
    name: `Al Hayat Pompes Funèbres Musulmanes ${data.city}`,
    city: data.city,
    postalCode: data.departmentCode + "000",
    areaServed: [data.city, ...data.nearbyAreas.slice(0, 4)],
  });

  const faqSchema = data.faqs?.length ? buildFAQSchema(data.faqs) : null;

  return (
    <div className="bg-[#F5F0E8] text-[#1A1A1A] min-h-screen font-inter">
      <SchemaOrg data={faqSchema ? [schema, faqSchema] : schema} />

      {/* ═══ HERO + H1 + INTRODUCTION ═══ */}
      <section className="relative w-full pt-28 pb-20 bg-[#0D1208] text-white overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-[#0D1208] via-[#0D1208]/95 to-[#0D1208]" />
        <div className="relative z-10 w-full max-w-[1280px] mx-auto px-8 md:px-12">
          <Breadcrumbs items={breadcrumbs} />
          <motion.div initial="hidden" animate="visible" variants={{ visible: { transition: { staggerChildren: 0.12 } } }}>
            <motion.div variants={fadeUp} className="flex items-center gap-2 mb-6 mt-6">
              <span className="w-1.5 h-1.5 rounded-full bg-[#6BAA6B]" />
              <span className="text-[10.5px] tracking-[0.18em] font-medium text-white/60 uppercase">
                Pompes Funèbres Musulmanes — {data.department} ({data.departmentCode})
              </span>
            </motion.div>
            <motion.h1 variants={fadeUp} className="text-[2.2rem] md:text-[3rem] font-semibold leading-[1.1] tracking-[-0.02em] text-white mb-6 max-w-[700px]">
              {data.h1}
            </motion.h1>
            {/* Introduction unique (150-200 mots) */}
            <motion.p variants={fadeUp} className="text-[15px] font-light leading-[1.8] text-white/70 max-w-[640px] mb-8">
              {data.introduction}
            </motion.p>
            <motion.div variants={fadeUp} className="flex items-center gap-3">
              <a href={`tel:${SITE_CONFIG.phone.replace(/\s/g, "")}`} className="flex items-center gap-2 bg-[#2D6A2D] text-white px-5 py-3 rounded-[5px] text-[13.5px] font-medium hover:bg-[#255525] transition-colors">
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 13a19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 3.6 2.18h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" /></svg>
                Nous appeler maintenant
              </a>
              <Link href="/contact" className="text-[13.5px] font-medium text-white/60 hover:text-white transition-colors px-3 py-3 border border-white/20 rounded-[5px] hover:bg-white/10">
                Demander un devis
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Contexte local */}
      {data.localContext && (
        <section className="w-full bg-white py-10 border-b border-[#E8E2D9]">
          <div className="w-full max-w-[1280px] mx-auto px-8 md:px-12">
            <p className="text-[14.5px] font-light text-[#666] leading-[1.8] max-w-[780px]">
              {data.localContext}
            </p>
          </div>
        </section>
      )}

      {/* ═══ H2: Services funéraires islamiques ═══ */}
      <section className="w-full bg-[#F5F0E8] py-20 md:py-28">
        <div className="w-full max-w-[1280px] mx-auto px-8 md:px-12">
          <motion.div variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }}>
            <h2 className="text-[24px] md:text-[30px] font-semibold leading-[1.2] tracking-tight text-[#1A1A1A] mb-4">
              Nos services funéraires islamiques à {data.city}
            </h2>
            <p className="text-[15px] font-light text-[#666] leading-[1.7] max-w-[640px] mb-12">
              {data.servicesIntro}
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {[
              { title: "Toilette Rituelle (Ghusl)", desc: `Ghusl al-Mayyit réalisé selon la Sunnah par notre équipe qualifiée à ${data.city}. Équipe homme et femme disponible.`, href: "/toilette-rituelle-musulmane" },
              { title: "Salat al-Janaza", desc: `Organisation de la prière funèbre en coordination avec les mosquées de ${data.city}.`, href: "/salat-al-janaza" },
              { title: "Inhumation Carré Musulman", desc: `Inhumation selon les rites islamiques dans un carré musulman à ${data.city} et ses environs.`, href: "/inhumation-carre-musulman" },
              { title: "Rapatriement de Corps", desc: "Rapatriement vers le Maghreb, l\u0027Afrique subsaharienne et toutes destinations. Prise en charge complète.", href: "/rapatriement-corps" },
              { title: "Démarches Administratives", desc: "Certificat de décès, déclaration en mairie, autorisations — nous gérons 100% des formalités.", href: "/demarches-administratives-deces" },
              { title: "Cercueil Musulman", desc: "Cercueil en bois naturel sobre et respectueux des traditions islamiques.", href: "/cercueil-musulman" },
            ].map((service, i) => (
              <motion.div key={i} variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-30px" }}>
                <Link href={service.href} className="group block p-6 bg-white border border-[#E8E2D9] rounded-[12px] hover:border-[#2D6A2D]/30 hover:shadow-sm transition-all h-full">
                  <h3 className="text-[16px] font-semibold text-[#1A1A1A] mb-2 group-hover:text-[#2D6A2D] transition-colors">{service.title}</h3>
                  <p className="text-[13px] text-[#888] font-light leading-[1.6]">{service.desc}</p>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══ H2: Carré Musulman ═══ */}
      <section className="w-full bg-white py-20 md:py-28">
        <div className="w-full max-w-[1280px] mx-auto px-8 md:px-12">
          <motion.div variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }}>
            <h2 className="text-[24px] md:text-[30px] font-semibold leading-[1.2] tracking-tight text-[#1A1A1A] mb-4">
              Inhumation dans un carré musulman à {data.city}
            </h2>
            <p className="text-[15px] font-light text-[#666] leading-[1.8] max-w-[720px] mb-8">
              {data.carreMusulmanContent}
            </p>
            {data.cemeteries.length > 0 && (
              <div className="flex flex-col gap-3 mb-8">
                {data.cemeteries.map((cemetery, i) => (
                  <div key={i} className="flex items-center gap-3 text-[14.5px]">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#2D6A2D]" />
                    <span className="text-[#444]">{cemetery}</span>
                  </div>
                ))}
              </div>
            )}
            <Link href={data.region === "Normandie" ? "/carre-musulman-normandie" : "/carre-musulman-paris-ile-de-france"} className="text-[13px] font-medium text-[#2D6A2D] hover:underline">
              Voir tous les carrés musulmans en {data.region} →
            </Link>
          </motion.div>
        </div>
      </section>

      {/* ═══ H2: Rapatriement ═══ */}
      <section className="w-full bg-[#0D1208] py-20 md:py-28 text-white">
        <div className="w-full max-w-[1280px] mx-auto px-8 md:px-12">
          <motion.div variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }}>
            <h2 className="text-[24px] md:text-[30px] font-semibold leading-[1.2] tracking-tight text-white mb-4">
              Rapatriement de corps depuis {data.city}
            </h2>
            <p className="text-[15px] font-light text-white/70 leading-[1.8] max-w-[720px] mb-10">
              {data.rapatriementContent}
            </p>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-10">
              {[
                { label: "Algérie", href: "/rapatriement-corps-algerie" },
                { label: "Maroc", href: "/rapatriement-corps-maroc" },
                { label: "Tunisie", href: "/rapatriement-corps-tunisie" },
                { label: "Afrique subsaharienne", href: "/rapatriement-corps-mali-senegal" },
              ].map((dest) => (
                <Link key={dest.label} href={dest.href} className="block p-4 border border-white/15 rounded-[8px] hover:border-[#6BAA6B]/40 hover:bg-white/5 transition-all text-center">
                  <span className="text-[14px] font-medium text-white/80">{dest.label}</span>
                </Link>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* ═══ H2: Salat al-Janaza (NOUVELLE SECTION) ═══ */}
      <section className="w-full bg-[#F5F0E8] py-20 md:py-28">
        <div className="w-full max-w-[1280px] mx-auto px-8 md:px-12">
          <motion.div variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }}>
            <h2 className="text-[24px] md:text-[30px] font-semibold leading-[1.2] tracking-tight text-[#1A1A1A] mb-4">
              Salat al-Janaza à {data.city}
            </h2>
            <p className="text-[15px] font-light text-[#666] leading-[1.8] max-w-[720px] mb-8">
              {data.salatJanazaContent}
            </p>
            {data.mosquees && data.mosquees.length > 0 && (
              <div className="flex flex-col gap-3 mb-6">
                <h3 className="text-[15px] font-semibold text-[#1A1A1A]">Mosquées partenaires à {data.city}</h3>
                {data.mosquees.map((mosquee, i) => (
                  <div key={i} className="flex items-center gap-3 text-[14.5px]">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#7A5C3A]" />
                    <span className="text-[#444]">{mosquee}</span>
                  </div>
                ))}
              </div>
            )}
            <Link href="/salat-al-janaza" className="text-[13px] font-medium text-[#2D6A2D] hover:underline">
              En savoir plus sur la Salat al-Janaza →
            </Link>
          </motion.div>
        </div>
      </section>

      {/* ═══ H2: Zones d'intervention ═══ */}
      <section className="w-full bg-white py-20 md:py-28">
        <div className="w-full max-w-[1280px] mx-auto px-8 md:px-12">
          <motion.div variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }}>
            <h2 className="text-[24px] md:text-[30px] font-semibold leading-[1.2] tracking-tight text-[#1A1A1A] mb-4">
              Nos zones d&apos;intervention depuis {data.city}
            </h2>
            <p className="text-[15px] font-light text-[#666] leading-[1.8] max-w-[720px] mb-8">
              {data.zonesContent}
            </p>
            <div className="flex flex-wrap gap-2">
              {data.nearbyAreas.map((area) => (
                <span key={area} className="px-4 py-2 bg-[#F5F0E8] border border-[#E8E2D9] rounded-full text-[13px] text-[#555] font-light">
                  {area}
                </span>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* ═══ H2: Pourquoi Al Hayat (E-E-A-T) ═══ */}
      <section className="w-full bg-[#F5F0E8] py-20 md:py-28">
        <div className="w-full max-w-[1280px] mx-auto px-8 md:px-12">
          <motion.div variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }}>
            <h2 className="text-[24px] md:text-[30px] font-semibold leading-[1.2] tracking-tight text-[#1A1A1A] mb-6">
              Pourquoi faire confiance à Al Hayat à {data.city} ?
            </h2>
            <p className="text-[15px] font-light text-[#666] leading-[1.8] max-w-[720px] mb-10">
              {data.whyAlHayatContent}
            </p>
          </motion.div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {[
              { title: "Disponibilité 24h/24, 7j/7", desc: `Un décès ne prévient pas. Al Hayat est joignable à toute heure à ${data.city} et dans tout le ${data.departmentCode}.` },
              { title: "Habilitation préfectorale", desc: `Nous sommes habilités par la préfecture pour l'exercice de l'activité funéraire en ${data.department}. Conformité totale avec la réglementation.` },
              { title: "Équipe qualifiée", desc: "Notre équipe est formée aux rites islamiques et au droit funéraire français. Équipe homme et femme pour la toilette rituelle." },
              { title: "Prise en charge complète", desc: "Du premier appel à l'inhumation, nous gérons chaque étape : transport, toilette, prière, démarches, inhumation ou rapatriement." },
            ].map((item, i) => (
              <motion.div key={i} variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-30px" }} className="flex gap-4 items-start">
                <div className="w-8 h-8 rounded-full border border-[#C8BFB0] flex items-center justify-center shrink-0 mt-0.5">
                  <span className="text-[11px] font-semibold text-[#7A5C3A]">0{i + 1}</span>
                </div>
                <div>
                  <h3 className="text-[17px] font-semibold text-[#1A1A1A] mb-1.5">{item.title}</h3>
                  <p className="text-[14.5px] font-light text-[#666] leading-[1.7]">{item.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══ H2: FAQ + Schema ═══ */}
      {data.faqs && data.faqs.length > 0 && (
        <section className="w-full bg-white py-20 md:py-28">
          <div className="w-full max-w-[1280px] mx-auto px-8 md:px-12">
            <motion.div variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }}>
              <h2 className="text-[24px] md:text-[30px] font-semibold leading-[1.2] tracking-tight text-[#1A1A1A] mb-10">
                Questions fréquentes sur les obsèques musulmanes à {data.city}
              </h2>
            </motion.div>
            <div className="flex flex-col gap-4 max-w-[780px]">
              {data.faqs.map((faq, i) => (
                <motion.div key={i} variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-20px" }} className="p-6 bg-[#F5F0E8] border border-[#E8E2D9] rounded-[12px]">
                  <h3 className="text-[16px] font-semibold text-[#1A1A1A] mb-3">{faq.question}</h3>
                  <p className="text-[14.5px] font-light text-[#555] leading-[1.7]">{faq.answer}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* ═══ CTA Contact ═══ */}
      <section className="w-full bg-[#0D1208] py-20 text-white">
        <div className="w-full max-w-[1280px] mx-auto px-8 md:px-12 flex flex-col md:flex-row justify-between items-start md:items-center gap-8">
          <div>
            <h2 className="text-[24px] md:text-[32px] font-semibold leading-[1.15] tracking-tight text-white mb-2">
              Nous contacter à {data.city}
            </h2>
            <p className="text-[15px] text-white/50 font-light">Disponibles 24h/24 — 7j/7</p>
          </div>
          <div className="flex flex-col gap-3 shrink-0">
            <a href={`tel:${SITE_CONFIG.phone.replace(/\s/g, "")}`} className="flex items-center gap-3 bg-[#2D6A2D] text-white px-7 py-4 rounded-[6px] font-medium text-[15px] hover:bg-[#255525] transition-colors">
              <svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 13a19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 3.6 2.18h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" /></svg>
              Urgence 24/7
            </a>
            <Link href="/contact" className="text-[13px] text-white/50 hover:text-white text-center transition-colors">
              Ou nous envoyer un message →
            </Link>
          </div>
        </div>
      </section>

      {/* Date de mise à jour (SEO) */}
      <div className="w-full max-w-[1280px] mx-auto px-8 md:px-12 py-4">
        <p className="text-[11px] text-[#999] font-light">Dernière mise à jour : mai 2025</p>
      </div>
    </div>
  );
}
