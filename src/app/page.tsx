"use client";

import { useRef } from "react";
import Link from "next/link";
import Image from "next/image";
import { motion, useScroll, useTransform, useReducedMotion } from "framer-motion";

// Brand palette from logo
// Green: #2D6A2D  Brown: #7A5C3A  Cream: #F5F0E8

const ease = [0.16, 1, 0.3, 1] as const;

const servicesList = [
  {
    num: "01",
    title: "Obsèques Musulmanes en France",
    desc: "Organisation complète des funérailles islamiques en Normandie et en Île-de-France : mise en bière selon les règles islamiques, Salat al-Janaza organisée avec l'imam de votre choix, inhumation en carré musulman. Nous intervenons dans tout le 76, le 14, le 27 et le 75/92/93/94/95.",
    href: "/obseques-musulmanes",
    img: "/Image/OBSÈQUES MUSULMANES (MISE EN BIÈRE : INHUMATION).png"
  },
  {
    num: "02",
    title: "Rapatriement de Corps vers l'étranger",
    desc: "Transport du défunt vers son pays d'origine en 48 à 72h. Algérie, Maroc, Tunisie, Mali, Sénégal, Guinée, Pakistan, Bangladesh, Comores, Côte d'Ivoire et plus de 20 destinations. Coordination complète avec les consulats, préfectures et compagnies aériennes.",
    href: "/rapatriement-corps",
    img: "/Image/RAPATRIEMENT (AÉROPORT : LOGISTIQUE).png"
  },
  {
    num: "03",
    title: "Toilette Rituelle — Ghusl al-Mayyit",
    desc: "Le lavage mortuaire est réalisé selon la Sunnah du Prophète ﷺ, par des professionnels formés et expérimentés. Équipes séparées hommes et femmes, dans un cadre de dignité absolue.",
    href: "/toilette-rituelle-ghusl",
    img: "/Image/TOILETTE RITUELLE (GHUSL — VERSION SYMBOLIQUE).png"
  },
  {
    num: "04",
    title: "Démarches Administratives complètes",
    desc: "Prise en charge de toutes les formalités : déclaration de décès en mairie, acte de décès, autorisation de fermeture de cercueil, autorisation de transport, certificat de non-contagion, coordination consulaire. Vous n'avez rien à gérer.",
    href: "/gestion-administrative",
    img: "/Image/DÉMARCHES ADMINISTRATIVES (CRÉDIBILITÉ).png"
  },
  {
    num: "05",
    title: "Fossoyage & Carré Musulman",
    desc: "Acquisition de concession dans un carré musulman en Normandie et en Île-de-France. Ouverture et fermeture de caveau. Inhumation orientée vers La Mecque (Qibla), selon les prescriptions islamiques.",
    href: "/fossoyage-caveau",
    img: "https://images.unsplash.com/photo-1501004318641-b39e6451bec6?q=80&w=1600&auto=format&fit=crop"
  },
  {
    num: "06",
    title: "Accompagnement Familial personnalisé",
    desc: "Un conseiller unique dédié à votre famille, disponible 24h/24 et 7j/7. Présent du premier appel jusqu'après l'inhumation — démarches résiduelles, assurances, organismes. Parce que vous ne devez pas traverser ça seuls.",
    href: "/accompagnement",
    img: "https://images.unsplash.com/photo-1528696892704-5e1122852276?q=80&w=1600&auto=format&fit=crop"
  }
];

export default function HomePage() {
  const containerRef = useRef<HTMLDivElement>(null);
  const prefersReducedMotion = useReducedMotion();

  const { scrollY } = useScroll();
  const heroY = useTransform(scrollY, [0, 1000], ["0%", "20%"]);
  const heroOpacity = useTransform(scrollY, [0, 800], [1, 0.1]);

  const fadeUp = {
    hidden: { opacity: 0, y: prefersReducedMotion ? 0 : 32 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease } }
  };

  const fadeIn = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { duration: 0.9, ease } }
  };

  return (
    <div ref={containerRef} className="bg-[#F5F0E8] text-[#1A1A1A] min-h-screen font-inter overflow-x-hidden selection:bg-[#2D6A2D] selection:text-white">

      {/* ── HERO (PARALLAX & SMOOTH ANIMATIONS) ── */}
      <section id="hero" className="relative w-full h-screen min-h-[700px] flex flex-col justify-center text-white overflow-hidden">
        <motion.div 
          className="absolute inset-0 bg-[#0D1208]"
          style={{ y: prefersReducedMotion ? 0 : heroY, opacity: heroOpacity }}
        >
          <img
            src="/Image/HERO.png"
            alt="Cimetière paisible"
            className="w-full h-full object-cover object-center opacity-55 animate-[kenburns-soft_18s_ease-in-out_infinite_alternate]"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#0D1208]/95 via-[#0D1208]/70 to-transparent" />
          <div className="absolute inset-0 bg-gradient-to-t from-[#0D1208]/60 via-transparent to-transparent" />
        </motion.div>

        <div className="relative z-10 w-full max-w-[1280px] mx-auto px-8 md:px-12 pt-20">
          <motion.div
            className="flex flex-col max-w-[580px]"
            initial="hidden"
            animate="visible"
            variants={{ visible: { transition: { staggerChildren: 0.15 } } }}
          >
            <motion.div variants={fadeUp} className="flex items-center gap-2 mb-8">
              <span className="w-1.5 h-1.5 rounded-full bg-[#6BAA6B]" />
              <span className="text-[10.5px] tracking-[0.18em] font-medium text-white/70 uppercase">Pompes Funèbres Musulmanes — Normandie & Paris · Habilitation Préfectorale</span>
            </motion.div>

            <motion.h1 variants={fadeUp} className="text-[2.6rem] md:text-[3.8rem] font-semibold leading-[1.08] tracking-[-0.03em] text-white mb-6">
              Pompes Funèbres Musulmanes<br />
              <span className="text-white/60">en Normandie et à Paris</span>
            </motion.h1>

            <motion.p variants={fadeUp} className="text-[15px] font-light leading-[1.7] text-white/65 max-w-[550px] mb-10">
              Al Hayaat prend en charge l&apos;ensemble des obsèques islamiques — toilette rituelle (Ghusl), Salat al-Janaza, inhumation en carré musulman ou rapatriement vers l&apos;Algérie, le Maroc, la Tunisie et au-delà. Disponibles 24h/24, 7j/7, sans exception.
            </motion.p>

            <motion.div variants={fadeUp} className="flex flex-wrap items-center gap-4 md:gap-6 mt-4">
              <Link href="/contact" className="group flex items-center gap-2 bg-[#2D6A2D] text-white px-7 py-4 rounded-[6px] text-[14px] font-medium transition-all duration-400 ease-[cubic-bezier(0.16,1,0.3,1)] hover:bg-[#255525] hover:-translate-y-1 hover:shadow-[0_10px_20px_-10px_rgba(45,106,45,0.5)]">
                Nous appeler : 07 63 21 46 56
                <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="transition-transform duration-300 group-hover:translate-x-1">
                  <path d="M5 12h14M12 5l7 7-7 7" />
                </svg>
              </Link>
              <Link href="/contact" className="text-[13px] md:text-[14px] text-white/70 hover:text-white transition-colors underline underline-offset-4 decoration-white/30 hover:decoration-white">
                Demander un devis gratuit
              </Link>
            </motion.div>
          </motion.div>
        </div>

        {/* Bottom stat strip */}
        <div className="absolute bottom-0 left-0 right-0 z-10">
          <div className="w-full max-w-[1280px] mx-auto px-8 md:px-12 py-7 flex items-center gap-6 md:gap-12 border-t border-white/10 overflow-x-auto whitespace-nowrap scrollbar-hide">
            {[
              ["24/7", "Disponibles"],
              ["100%", "Conforme au rite"],
              ["Rouen · Le Havre", "Caen · Paris"],
              ["Habilitation", "Préfectorale"]
            ].map(([val, label]) => (
              <div key={val} className="flex flex-col shrink-0">
                <span className="text-[15px] md:text-[17px] font-semibold text-white">{val}</span>
                <span className="text-[10px] md:text-[11px] text-white/50 mt-0.5">{label}</span>
              </div>
            ))}
            <div className="ml-auto hidden md:flex items-center gap-2 text-white/55 text-[11px] tracking-[0.14em] uppercase">
              <span>Scroll</span>
              <span className="inline-flex h-5 w-5 items-center justify-center rounded-full border border-white/20">
                <motion.span
                  aria-hidden
                  initial={{ y: -1, opacity: 0.4 }}
                  animate={{ y: 2, opacity: 1 }}
                  transition={{ duration: 1.2, ease, repeat: Infinity, repeatType: "reverse" }}
                  className="block h-1.5 w-1.5 rounded-full bg-white/70"
                />
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* ── ENGAGEMENT & EXPERTISE (ULTRA MINIMALIST LEDGER) ── */}
      <section id="engagement" className="w-full bg-white py-16 md:py-32 border-t border-[#E5E5E5]">
        <div className="w-full max-w-[1100px] mx-auto px-6 md:px-12 flex flex-col lg:flex-row gap-12 lg:gap-24">
          
          {/* Left Column: The Statement */}
          <div className="w-full lg:w-[40%] flex flex-col">
            <motion.div variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }}>
              <span className="text-[10px] font-medium tracking-[0.2em] text-[#999] uppercase mb-6 md:mb-8 block">
                01 — Engagement
              </span>
              <h2 className="text-[22px] md:text-[26px] font-normal text-[#111] leading-[1.3] tracking-tight mb-5 md:mb-6">
                Des obsèques islamiques organisées<br className="hidden md:block" />de A à Z, en Normandie et à Paris.
              </h2>
              <p className="text-[13px] md:text-[14px] font-light text-[#666] leading-[1.6] md:leading-[1.7] max-w-[600px] mb-8 md:mb-12">
                Perdre un proche est une épreuve que personne ne devrait traverser seul, encore moins dans la confusion des démarches administratives. Depuis Rouen, Le Havre, Caen et toute la Normandie — ainsi qu&apos;à Paris et en Île-de-France — notre équipe intervient à toute heure. Nous coordonnons chaque étape à votre place : la toilette rituelle (Ghusl), la Salat al-Janaza, l&apos;inhumation dans un carré musulman, le rapatriement vers votre pays d&apos;origine. Un seul appel suffit. Nous gérons le reste.
              </p>
              
              <div className="flex flex-col gap-3 md:gap-4">
                <Link href="/contact" className="text-[12px] font-medium text-[#111] flex items-center gap-2 group w-fit">
                  Nous contacter
                  <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="transition-transform duration-300 group-hover:translate-x-1"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
                </Link>
                <a href="tel:+33763214656" className="text-[12px] font-medium text-[#999] hover:text-[#111] transition-colors w-fit">
                  07 63 21 46 56
                </a>
              </div>
            </motion.div>
          </div>

          {/* Right Column: The Ledger (Domains) */}
          <div className="w-full lg:w-[60%] flex flex-col pt-2 md:pt-1">
            <motion.div variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }}>
              <span className="text-[10px] font-medium tracking-[0.2em] text-[#999] uppercase mb-6 md:mb-8 block">
                02 — Domaines couverts
              </span>
              
              <div className="flex flex-col border-t border-[#E5E5E5]">
                {[
                  { title: "Obsèques Musulmanes", sub: "Mise en bière islamique · Inhumation en carré musulman orienté Qibla · Salat al-Janaza" },
                  { title: "Rapatriement de Corps", sub: "Algérie · Maroc · Tunisie · Mali · Sénégal · Pakistan · Comores · +20 pays" },
                  { title: "Toilette Rituelle — Ghusl", sub: "Ghusl al-Mayyit selon la Sunnah · Équipe hommes & femmes · Dignité absolue" },
                  { title: "Démarches Administratives", sub: "Acte de décès · Autorisation d'inhumer · Consulats · Préfectures · Assurances rapatriement" },
                  { title: "Fossoyage & Carré Musulman", sub: "Acquisition de concession · Ouverture et fermeture · Inhumation orientée La Mecque" },
                ].map((item, i) => (
                  <div key={i} className="group flex items-start justify-between py-5 md:py-6 border-b border-[#E5E5E5] hover:border-[#111] transition-colors duration-500 cursor-default">
                    <div className="flex gap-4 md:gap-12">
                      <span className="text-[10px] text-[#999] font-medium pt-0.5 md:pt-1 w-4">0{i+1}</span>
                      <div className="flex flex-col gap-0.5 md:gap-1">
                        <h4 className="text-[14.5px] md:text-[15px] font-medium text-[#111] tracking-tight">{item.title}</h4>
                        <p className="text-[11.5px] md:text-[12px] font-light text-[#666]">{item.sub}</p>
                      </div>
                    </div>
                    <div className="pt-1 opacity-100 md:opacity-0 -translate-x-0 md:-translate-x-2 md:group-hover:opacity-100 md:group-hover:translate-x-0 transition-all duration-500">
                      <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="text-[#999] md:text-[#111]"><path d="M5 12h14M12 5l7 7-7 7" /></svg>
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>

        </div>
      </section>

      {/* ── SECTION B : ACCORDÉON + IMAGE + QUOTE (Strategic Precision) ── */}
      <section id="accompagnement-complet" className="w-full bg-white py-16 md:py-32">
        <div className="w-full max-w-[1280px] mx-auto px-6 md:px-12 flex flex-col lg:flex-row gap-12 lg:gap-20 items-start">

          {/* Left : Accordion */}
          <div className="w-full lg:w-[48%] flex flex-col order-2 lg:order-1">
            <div className="flex flex-col pb-6 border-b border-[#E8E2D9]">
              <h3 className="text-[18px] md:text-[20px] font-semibold text-[#1A1A1A] mb-3 md:mb-4 tracking-tight">Accompagnement complet</h3>
              <p className="text-[14px] md:text-[14.5px] font-light text-[#666] leading-[1.6] md:leading-[1.7] mb-6 md:mb-7 max-w-[560px]">
                Notre travail va au-delà des formalités — nous traduisons votre douleur en actions concrètes et organisées. Chez Al Hayaat, la prise en charge n&apos;est pas un document ; c&apos;est une présence humaine et professionnelle, de Rouen à Paris, de la première heure jusqu&apos;au bout.
              </p>
              <ul className="flex flex-col gap-3">
                {[
                  "Coordination complète de toutes les démarches funéraires islamiques",
                  "Équipe formée aux rites islamiques (Ghusl, Kafan, Salat Janaza) et au droit funéraire français",
                  "Suivi personnalisé pour chaque famille, un interlocuteur unique",
                  "Disponibilité 24h/24 et 7j/7 — aucune heure n'est trop tardive",
                  "Transparence totale des tarifs — devis gratuit sans engagement",
                  "Rapatriement international vers +20 destinations (Algérie, Maroc, Tunisie, Mali, Sénégal...)",
                  "Habilitation préfectorale — intervention légalement certifiée",
                ].map((txt, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <div className="mt-[3px] w-4 h-4 md:w-5 md:h-5 rounded-full bg-[#F3EEE7] flex items-center justify-center shrink-0">
                      <svg width="8" height="8" viewBox="0 0 24 24" fill="none" stroke="#9A9489" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12" /></svg>
                    </div>
                    <span className="text-[13.5px] md:text-[14px] font-normal text-[#555] leading-[1.5] md:leading-[1.55]">{txt}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="flex flex-col hidden md:flex">
              {[
                "Disponibilité 24h/24 et 7j/7",
                "Transparence des tarifs",
                "Rapatriement international",
              ].map((title, i) => (
                <div
                  key={i}
                  className="flex items-center py-6 border-b border-[#E8E2D9] group"
                >
                  <h4 className="text-[18px] font-medium text-[#6B7280] group-hover:text-[#111827] transition-colors tracking-tight">
                    {title}
                  </h4>
                </div>
              ))}
            </div>
          </div>

          {/* Right : Image + overlapping quote */}
          <div className="w-full lg:w-[52%] relative order-1 lg:order-2 mb-4 lg:mb-0">
            <div className="w-full aspect-[4/3] md:aspect-[3/4] max-h-[400px] md:max-h-[680px] rounded-[12px] md:rounded-[14px] overflow-hidden bg-[#F3EEE7]">
              <img
                src="/Image/DÉMARCHES ADMINISTRATIVES (CRÉDIBILITÉ).png"
                alt="Conseiller Al Hayaat"
                className="w-full h-full object-cover"
              />
            </div>

            <div className="absolute -bottom-6 md:bottom-6 right-6 md:right-auto md:left-6 w-[90%] md:w-[82%] bg-white px-5 md:px-6 py-5 md:py-6 rounded-[12px] md:rounded-[14px] shadow-lg md:shadow-sm border border-[#EFE9E0]">
              <p className="text-[13px] md:text-[14.5px] font-normal leading-[1.5] md:leading-[1.65] text-[#1A1A1A] mb-4 md:mb-5">
                &quot;La mort n&apos;est pas une fin — c&apos;est un passage. Notre rôle est de l&apos;accompagner avec toute la dignité qu&apos;il mérite, et d&apos;alléger votre fardeau à chaque instant.&quot;
              </p>
              <div className="flex items-center gap-3">
                <img
                  src="https://images.unsplash.com/photo-1559136555-9303baea8ebd?q=80&w=200&auto=format&fit=crop"
                  alt="Fondateur Al Hayaat"
                  className="w-8 h-8 md:w-10 md:h-10 rounded-full object-cover"
                />
                <div className="flex flex-col">
                  <span className="text-[12px] md:text-[13.5px] font-semibold text-[#111827]">Équipe Al Hayaat</span>
                  <span className="text-[11px] md:text-[12px] text-[#6B7280] font-normal">Fondateurs &amp; Conseillers</span>
                </div>
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* ── SECTION C : DARK SPLIT — checklist gauche / grande image droite ── */}
      <section id="accompagnement" className="w-full bg-[#0D1208] overflow-hidden">
        <div className="w-full max-w-[1280px] mx-auto flex flex-col lg:flex-row">

          {/* Left dark text */}
          <div className="w-full lg:w-[50%] flex flex-col justify-center py-16 md:py-20 px-6 md:px-14 order-2 lg:order-1">
            <motion.div variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }}>
              <p className="text-[14px] md:text-[15px] font-light text-white/60 leading-[1.6] md:leading-[1.7] mb-10 md:mb-12 max-w-[420px]">
                Notre service d&apos;accompagnement aide les familles à traverser chaque étape avec sérénité — de la première heure jusqu&apos;à l&apos;inhumation. Voici comment nous vous soutenons :
              </p>
              <div className="flex flex-col gap-6 md:gap-8">
                {[
                  { title: "Organisation des obsèques islamiques", desc: "Nous coordonnons chaque détail — toilette rituelle, Salat al-Janaza, inhumation en carré musulman orienté vers La Mecque — pour que vous puissiez vous consacrer entièrement au recueillement et à la prière." },
                  { title: "Rapatriement vers +20 pays", desc: "Nous gérons le transfert du corps, les autorisations préfectorales, les documents consulaires et la logistique internationale. Algérie, Maroc, Tunisie, Mali, Sénégal, Pakistan, Comores et bien plus encore." },
                  { title: "Soutien continu à la famille", desc: "Nous restons à vos côtés après les funérailles pour les démarches administratives résiduelles, les organismes sociaux, les assurances. Parce que notre accompagnement ne s'arrête pas à l'inhumation." },
                ].map((item, i) => (
                  <div key={i} className="flex gap-3 md:gap-4 items-start">
                    <div className="mt-0.5 md:mt-1 shrink-0 w-4 h-4 md:w-5 md:h-5 rounded-full border border-white/20 flex items-center justify-center">
                      <svg width="8" height="8" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12" /></svg>
                    </div>
                    <div>
                      <h3 className="text-[15px] md:text-[16px] font-semibold text-white mb-1.5 md:mb-2">{item.title}</h3>
                      <p className="text-[13px] md:text-[13.5px] font-light text-white/50 leading-[1.5] md:leading-[1.65]">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>

          {/* Right image */}
          <div className="w-full lg:w-[50%] relative min-h-[350px] md:min-h-[500px] lg:min-h-[700px] order-1 lg:order-2">
            <img
              src="/Image/Hero2.png"
              alt="Accompagnement"
              className="absolute inset-0 w-full h-full object-cover"
            />
            {/* CTA bottom */}
            <div className="absolute bottom-4 left-4 md:bottom-8 md:left-8">
              <Link href="/contact" className="inline-flex items-center gap-2 bg-white text-[#1A1A1A] px-5 md:px-6 py-3 md:py-3.5 rounded-[5px] text-[13px] md:text-[14px] font-semibold hover:bg-[#F5F0E8] transition-colors shadow-lg">
                Nous appeler
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14M12 5l7 7-7 7" /></svg>
              </Link>
            </div>
          </div>

        </div>
      </section>

      {/* ── SERVICES (TESLA / APPLE PRO LIGHT MODE) ── */}
      <section id="services" className="w-full min-h-[100svh] bg-white flex flex-col p-4 md:p-8 overflow-hidden border-t border-[#E5E5E5]">
        
        {/* Minimalist Header */}
        <motion.div variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }} className="flex flex-col md:flex-row md:items-end justify-between gap-6 shrink-0 pt-4 md:pt-8 pb-8 md:pb-12">
          <div>
            <span className="text-[10px] tracking-[0.3em] font-medium text-[#999] uppercase block mb-4">Expertises</span>
            <h2 className="text-[32px] md:text-[48px] font-medium leading-[1] tracking-tight text-[#111]">
              Nos services funéraires islamiques.
            </h2>
          </div>
          <p className="text-[14px] md:text-[15px] font-light text-[#666] leading-[1.6] max-w-[420px] md:text-right">
            Une prise en charge intégrale, conforme à la Sunnah du Prophète ﷺ, dans le respect de votre douleur — en Normandie et à Paris.
          </p>
        </motion.div>

        {/* Ultra-Minimalist Grid */}
        <div className="flex-1 grid grid-cols-1 md:grid-cols-3 gap-3 md:gap-5 h-full pb-2 md:pb-0">
          {servicesList.map((s, i) => (
            <Link 
              href={s.href} 
              key={i} 
              className="group relative flex flex-col justify-between overflow-hidden rounded-[16px] md:rounded-[24px] bg-[#F8F8F8] border border-[#E5E5E5] hover:border-[#CCC] transition-colors duration-700 p-5 md:p-8 min-h-[300px] md:min-h-0"
            >
              {/* Cinematic Image Reveal */}
              <div className="absolute inset-0 z-0 pointer-events-none">
                <img 
                  src={s.img} 
                  alt={s.title} 
                  className="w-full h-full object-cover opacity-[0.8] transition-transform duration-[2s] ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:scale-105" 
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#111] via-[#111]/40 to-transparent" />
              </div>

              {/* Top: Tech-inspired Badge & Icon */}
              <div className="relative z-10 flex justify-between items-start">
                <span className="text-[12px] md:text-[14px] font-medium text-white/50 group-hover:text-white/90 tracking-[0.2em] transition-colors duration-500">
                  {s.num}
                </span>
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="text-white/0 group-hover:text-white -translate-x-3 translate-y-3 group-hover:translate-x-0 group-hover:translate-y-0 transition-all duration-700 ease-[cubic-bezier(0.16,1,0.3,1)]">
                  <path d="M5 12h14M12 5l7 7-7 7" />
                </svg>
              </div>

              {/* Bottom: Typography */}
              <div className="relative z-10 flex flex-col gap-3 md:gap-4 mt-auto">
                <h3 className="text-[18px] sm:text-[20px] md:text-[28px] font-medium text-white/90 group-hover:text-white tracking-tight leading-[1.1] transition-colors duration-500">
                  {s.title}
                </h3>
                <p className="text-[12px] sm:text-[13px] md:text-[14px] font-light text-white/70 group-hover:text-white leading-[1.5] line-clamp-3 md:line-clamp-none transition-colors duration-500">
                  {s.desc}
                </p>
              </div>
            </Link>
          ))}
        </div>

      </section>

      {/* ── ZONES D'INTERVENTION ── */}
      <section id="zones" className="w-full bg-[#FAFAFA] py-20 md:py-32 border-b border-[#E5E5E5]">
        <div className="max-w-[1280px] mx-auto px-6 md:px-12">
          
          <motion.div variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-40px" }} className="mb-12 md:mb-16">
            <span className="text-[10px] tracking-[0.3em] font-medium text-[#999] uppercase block mb-4">03 — Zones d'intervention</span>
            <h2 className="text-[32px] md:text-[48px] font-medium leading-[1] tracking-tight text-[#111] max-w-[600px] mb-6">
              Nous intervenons dans toute la Normandie et en Île-de-France.
            </h2>
            <p className="text-[14px] md:text-[15px] font-light text-[#666] leading-[1.6] max-w-[600px]">
              Al Hayaat est basée au Havre et couvre l'ensemble du territoire normand — Seine-Maritime (76), Calvados (14), Eure (27), Manche (50), Orne (61) — ainsi que Paris et toute l'Île-de-France. Nos équipes se déplacent 24h/24, sans surcoût pour les interventions de nuit ou le week-end.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-16 border-t border-[#E5E5E5] pt-12 md:pt-16">
            <motion.div variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-40px" }} className="flex flex-col">
              <h3 className="text-[18px] font-medium text-[#111] mb-6">Normandie :</h3>
              <ul className="flex flex-col gap-4">
                <li><Link href="/pompes-funebres-musulmanes-rouen" className="group flex items-center justify-between py-2 border-b border-[#E5E5E5] text-[14px] text-[#555] hover:text-[#111] transition-colors"><span className="group-hover:translate-x-1 transition-transform">Pompes funèbres Rouen</span> <span>→</span></Link></li>
                <li><Link href="/pompes-funebres-musulmanes-le-havre" className="group flex items-center justify-between py-2 border-b border-[#E5E5E5] text-[14px] text-[#555] hover:text-[#111] transition-colors"><span className="group-hover:translate-x-1 transition-transform">Pompes funèbres Le Havre</span> <span>→</span></Link></li>
                <li><Link href="/pompes-funebres-musulmanes-caen" className="group flex items-center justify-between py-2 border-b border-[#E5E5E5] text-[14px] text-[#555] hover:text-[#111] transition-colors"><span className="group-hover:translate-x-1 transition-transform">Pompes funèbres Caen</span> <span>→</span></Link></li>
                <li><Link href="/pompes-funebres-musulmanes-dieppe" className="group flex items-center justify-between py-2 border-b border-[#E5E5E5] text-[14px] text-[#555] hover:text-[#111] transition-colors"><span className="group-hover:translate-x-1 transition-transform">Pompes funèbres Dieppe</span> <span>→</span></Link></li>
                <li><Link href="/pompes-funebres-musulmanes-evreux" className="group flex items-center justify-between py-2 border-b border-[#E5E5E5] text-[14px] text-[#555] hover:text-[#111] transition-colors"><span className="group-hover:translate-x-1 transition-transform">Pompes funèbres Évreux</span> <span>→</span></Link></li>
                <li><Link href="/normandie" className="group flex items-center justify-between py-2 border-b border-[#E5E5E5] text-[14px] text-[#555] hover:text-[#111] transition-colors"><span className="group-hover:translate-x-1 transition-transform">Toute la Normandie</span> <span>→</span></Link></li>
              </ul>
            </motion.div>

            <motion.div variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-40px" }} className="flex flex-col">
              <h3 className="text-[18px] font-medium text-[#111] mb-6">Paris / Île-de-France :</h3>
              <ul className="flex flex-col gap-4">
                <li><Link href="/pompes-funebres-musulmanes-paris" className="group flex items-center justify-between py-2 border-b border-[#E5E5E5] text-[14px] text-[#555] hover:text-[#111] transition-colors"><span className="group-hover:translate-x-1 transition-transform">Pompes funèbres Paris</span> <span>→</span></Link></li>
                <li><Link href="/pompes-funebres-musulmanes-saint-denis" className="group flex items-center justify-between py-2 border-b border-[#E5E5E5] text-[14px] text-[#555] hover:text-[#111] transition-colors"><span className="group-hover:translate-x-1 transition-transform">Pompes funèbres Saint-Denis</span> <span>→</span></Link></li>
                <li><Link href="/pompes-funebres-musulmanes-argenteuil" className="group flex items-center justify-between py-2 border-b border-[#E5E5E5] text-[14px] text-[#555] hover:text-[#111] transition-colors"><span className="group-hover:translate-x-1 transition-transform">Pompes funèbres Argenteuil</span> <span>→</span></Link></li>
                <li><Link href="/ile-de-france" className="group flex items-center justify-between py-2 border-b border-[#E5E5E5] text-[14px] text-[#555] hover:text-[#111] transition-colors"><span className="group-hover:translate-x-1 transition-transform">Toute l'Île-de-France</span> <span>→</span></Link></li>
              </ul>
            </motion.div>
          </div>

        </div>
      </section>

      {/* ── VALEURS (TESLA / APPLE PRO CINEMATIC) ── */}
      <section id="philosophie" className="relative w-full min-h-[100svh] bg-black overflow-hidden flex items-center border-t border-white/5 py-24 md:py-0">
        
        {/* Full Bleed Background Image */}
        <div className="absolute inset-0 z-0">
          <img
            src="/Image/IMAGE PRINCIPALE (SECTION “ÉTAPE PAR ÉTAPE”).png"
            alt="Philosophie"
            className="w-full h-full object-cover opacity-30 md:opacity-40 grayscale-[20%] transition-transform duration-[10s] ease-out hover:scale-105"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black via-black/80 to-transparent w-full md:w-[65%]" />
          <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-black/40" />
        </div>

        {/* Content */}
        <div className="relative z-10 w-full max-w-[1400px] mx-auto px-6 md:px-12 lg:px-20 flex flex-col md:flex-row justify-between items-end md:items-center h-full pb-12 md:pb-0 pt-20 md:pt-0">
          
          {/* Left: Text */}
          <div className="w-full md:w-[55%] flex flex-col">
            <motion.div variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }}>
              <span className="text-[10px] tracking-[0.3em] font-medium text-white/40 uppercase block mb-4">Philosophie</span>
              <h2 className="text-[38px] md:text-[56px] lg:text-[72px] font-medium leading-[0.95] tracking-tighter text-white mb-10 md:mb-16">
                Ce qui nous<br />guide.
              </h2>
              
              <div className="flex flex-col gap-8 md:gap-10">
                {[
                  { title: "Respect absolu des rites islamiques", desc: "La dignité du défunt est sacrée selon l'Islam. Chaque geste — le Ghusl, le Kafan, la Salat Janaza — est accompli avec rigueur et recueillement, conformément aux enseignements du Coran et de la Sunnah." },
                  { title: "Disponibilité sans condition — 24h/24, 7j/7", desc: "Un décès ne prévient pas. À 3h du matin, le dimanche, en plein ramadan — notre ligne répond à chaque appel. Un conseiller prend votre dossier immédiatement, depuis Rouen, Le Havre, Caen ou Paris." },
                  { title: "Transparence totale des tarifs", desc: "Devis détaillé remis dès le premier appel, sans engagement. Aucun frais caché. Nous vous informons également des aides auxquelles vous avez droit : fonds solidarité algérien, aides consulaires marocaines, assurances rapatriement." }
                ].map((v, i) => (
                  <div key={i} className="flex items-start gap-5 md:gap-6 group cursor-default">
                    <span className="text-[11px] font-medium text-white/20 group-hover:text-white/60 tracking-[0.2em] pt-1.5 transition-colors duration-500">0{i + 1}</span>
                    <div className="flex flex-col gap-1.5 md:gap-2">
                      <h3 className="text-[18px] md:text-[22px] font-medium text-white/80 group-hover:text-white tracking-tight transition-colors duration-500">{v.title}</h3>
                      <p className="text-[13px] md:text-[14px] font-light text-white/40 group-hover:text-white/70 leading-[1.6] max-w-[420px] transition-colors duration-500">{v.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>

          {/* Right: Accent Glassmorphism Card */}
          <motion.div 
            variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }}
            className="hidden md:flex w-full md:w-[35%] justify-end"
          >
            <div className="bg-white/[0.03] backdrop-blur-2xl border border-white/10 p-8 lg:p-10 rounded-[24px] max-w-[320px] shadow-2xl relative overflow-hidden group">
              <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
              <span className="relative z-10 text-[9px] text-white/40 font-medium tracking-[0.25em] uppercase block mb-4">Notre promesse</span>
              <p className="relative z-10 text-[16px] lg:text-[18px] text-white/90 font-light leading-[1.6] italic">
                &quot;Être à vos côtés est une priorité.&quot;
              </p>
            </div>
          </motion.div>

        </div>
      </section>

      {/* ── CITATION (APPLE/TESLA HEROIC QUOTE) ── */}
      <section className="w-full py-20 md:py-28 flex items-center justify-center bg-[#F9F8F6] border-y border-[#E5E5E5]">
        <div className="w-full max-w-[1000px] mx-auto px-6 md:px-12 flex flex-col items-center text-center">
          
          <motion.div 
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
            viewport={{ once: true }}
            className="flex flex-col items-center"
          >
            <div className="w-px h-12 md:h-16 bg-[#D1C8B8] mb-6 md:mb-8" />
            <span className="text-[9px] md:text-[10px] font-medium tracking-[0.3em] text-[#888] uppercase">
              Notre Mission
            </span>
          </motion.div>

          <motion.h2 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 1.2, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
            viewport={{ once: true }}
            className="text-[26px] md:text-[36px] lg:text-[42px] font-light leading-[1.25] tracking-wide text-[#111] max-w-[700px] mt-6 md:mt-8"
          >
            Suspendre le temps.<br />
            <span className="text-[#999]">Honorer le passage.</span>
          </motion.h2>

        </div>
      </section>

      {/* ── PROCESSUS ── */}
      <section id="processus" className="w-full bg-white py-16 md:py-32">
        <div className="w-full max-w-[1280px] mx-auto px-6 md:px-12">
          <motion.div variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }} className="mb-10 md:mb-16">
            <span className="text-[10px] md:text-[10.5px] tracking-[0.18em] font-semibold text-[#2D6A2D] uppercase block mb-3 md:mb-4">Processus</span>
            <h2 className="text-[24px] md:text-[36px] font-semibold leading-[1.2] tracking-tight text-[#1A1A1A]">Étape par étape,<br className="block md:hidden" /> avec clarté.</h2>
          </motion.div>
          {/* Grid de processus (3 colonnes) */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10 md:gap-16">
            
            <motion.div variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-40px" }} className="flex flex-col">
              <div className="w-full aspect-[4/3] bg-[#EBEBEB] mb-6 overflow-hidden rounded-[8px]">
                <img src="/Image/IMAGE ÉTAPE 01 — L’APPEL.png" alt="Étape 1" className="w-full h-full object-cover transition-transform duration-700 hover:scale-105" />
              </div>
              <span className="text-[11px] font-semibold tracking-wider text-[#999] mb-3">01 — L'APPEL</span>
              <h3 className="text-[18px] md:text-[20px] font-medium text-[#111] mb-3">Prise en charge immédiate</h3>
              <p className="text-[14px] text-[#666] leading-[1.6] font-light">
                Appelez-nous au 07 63 21 46 56, à n'importe quelle heure. Un conseiller Al Hayaat décroche et prend votre dossier en main immédiatement — que vous soyez à Rouen, au Havre, à Caen ou à Paris. Nous vous guidons sur les premières actions à accomplir dans l'heure qui suit le décès.
              </p>
            </motion.div>

            <motion.div variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-40px" }} className="flex flex-col">
              <div className="w-full aspect-[4/3] bg-[#EBEBEB] mb-6 overflow-hidden rounded-[8px]">
                <img src="/Image/IMAGE ÉTAPE 02 — PRISE EN CHARGE.png" alt="Étape 2" className="w-full h-full object-cover transition-transform duration-700 hover:scale-105" />
              </div>
              <span className="text-[11px] font-semibold tracking-wider text-[#999] mb-3">02 — LOGISTIQUE</span>
              <h3 className="text-[18px] md:text-[20px] font-medium text-[#111] mb-3">Intervention & Démarches</h3>
              <p className="text-[14px] text-[#666] leading-[1.6] font-light">
                Notre équipe se déplace dans les 2 à 4 heures. Nous gérons le transport du défunt, la toilette rituelle (Ghusl al-Mayyit) réalisée selon la Sunnah, et l'ensemble des démarches administratives. En cas de rapatriement, nous engageons immédiatement les formalités consulaires et préfectorales.
              </p>
            </motion.div>

            <motion.div variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-40px" }} className="flex flex-col">
              <div className="w-full aspect-[4/3] bg-[#EBEBEB] mb-6 overflow-hidden rounded-[8px]">
                <img src="/Image/IMAGE ÉTAPE 03 — INHUMATION.png" alt="Étape 3" className="w-full h-full object-cover transition-transform duration-700 hover:scale-105" />
              </div>
              <span className="text-[11px] font-semibold tracking-wider text-[#999] mb-3">03 — CÉRÉMONIE</span>
              <h3 className="text-[18px] md:text-[20px] font-medium text-[#111] mb-3">Inhumation ou Rapatriement</h3>
              <p className="text-[14px] text-[#666] leading-[1.6] font-light">
                En France : cérémonie à la mosquée, Salat al-Janaza avec l'imam, inhumation en carré musulman orienté vers La Mecque.<br/>
                À l'étranger : rapatriement organisé en 48 à 72 heures, coordination avec la famille sur place, remise digne du défunt à destination.
              </p>
            </motion.div>

          </div>
        </div>
      </section>

      {/* ── SECTION D : FULL-WIDTH DARK IMAGE + STATS ── */}
      <section id="accompagnement-famille" className="relative w-full overflow-hidden min-h-[400px] md:min-h-[500px] flex flex-col justify-between">
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1518005020951-eccb494ad742?q=80&w=2000&auto=format&fit=crop"
            alt="Accompagnement famille"
            className="w-full h-full object-cover object-center"
          />
          <div className="absolute inset-0 bg-[#0D1208]/80" />
        </div>

        <div className="relative z-10 w-full max-w-[1280px] mx-auto px-6 md:px-12 pt-16 md:pt-24 pb-12 md:pb-16">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-5 md:gap-7 mb-8 md:mb-10">
            <div className="flex items-center gap-2 text-white/70">
              <span className="w-1.5 h-1.5 rounded-full bg-[#6BAA6B]" />
              <span className="text-[9.5px] md:text-[10.5px] tracking-[0.18em] font-medium uppercase">Accompagnement famille</span>
            </div>
            <Link href="/contact" className="inline-flex items-center gap-2 bg-white text-[#1A1A1A] px-5 md:px-7 py-3 md:py-4 rounded-[6px] text-[13px] md:text-[13.5px] font-semibold transition-all duration-400 ease-[cubic-bezier(0.16,1,0.3,1)] hover:bg-[#F5F0E8] md:hover:-translate-y-1 md:hover:shadow-lg w-fit group">
              Nous appeler
              <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="transition-transform duration-300 md:group-hover:translate-x-1"><path d="M5 12h14M12 5l7 7-7 7" /></svg>
            </Link>
          </div>
          <motion.h2
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="text-[20px] md:text-[32px] lg:text-[38px] font-semibold text-white leading-[1.3] md:leading-[1.3] tracking-tight max-w-[820px]"
          >
            Accompagnez vos proches avec sérénité — nous gérons chaque démarche, chaque formalité, chaque détail.
          </motion.h2>
        </div>

        <div className="relative z-10 w-full max-w-[1280px] mx-auto px-6 md:px-12 pb-12 md:pb-16">
          <motion.div
            variants={{ visible: { transition: { staggerChildren: 0.1 } } }}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8 border-t border-white/15 pt-8 md:pt-10"
          >
            {[
              ["24/7", "Disponibles sans interruption — Normandie & Paris"],
              ["100%", "Conforme aux rites islamiques (Ghusl, Kafan, Salat Janaza)"],
              ["15+", "Années d'expérience au service des familles musulmanes"],
              ["+20 Pays", "desservis pour le rapatriement de corps"],
            ].map(([val, label]) => (
              <motion.div key={val} variants={fadeUp} className="flex flex-col">
                <span className="text-[28px] md:text-[44px] font-semibold text-white leading-none mb-1.5 md:mb-2">{val}</span>
                <span className="text-[11px] md:text-[12.5px] text-white/50 font-light leading-[1.3] md:leading-snug">{label}</span>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ── FAQ ── */}
      <section className="w-full bg-white py-20 md:py-32 border-b border-[#E5E5E5]">
        <div className="max-w-[800px] mx-auto px-6 md:px-12">
          
          <motion.div variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-40px" }} className="mb-12 md:mb-16">
            <span className="text-[10px] tracking-[0.3em] font-medium text-[#999] uppercase block mb-4">Questions fréquentes</span>
            <h2 className="text-[32px] md:text-[48px] font-medium leading-[1] tracking-tight text-[#111] mb-6">
              Ce que les familles nous demandent le plus souvent.
            </h2>
          </motion.div>

          <div className="flex flex-col border-t border-[#E5E5E5]">
            {[
              {
                q: "Dans quel délai intervenez-vous après un décès en Normandie ?",
                a: "Notre équipe intervient dans les 2 à 4 heures suivant votre appel, 24h/24 et 7j/7, dans tout le 76, le 14, le 27, le 50 et le 61. Aucun délai supplémentaire la nuit ou le week-end."
              },
              {
                q: "Organisez-vous le rapatriement vers l'Algérie et le Maroc ?",
                a: "Oui. Nous gérons le rapatriement vers plus de 20 destinations, dont l'Algérie, le Maroc, la Tunisie, le Mali, le Sénégal, la Guinée, le Pakistan, les Comores et bien d'autres. Nous prenons en charge 100% des formalités administratives et consulaires."
              },
              {
                q: "La toilette rituelle (Ghusl) est-elle réalisée selon la Sunnah ?",
                a: "Absolument. Notre équipe est formée spécifiquement aux rites islamiques. Le Ghusl al-Mayyit est réalisé séparément pour les hommes et les femmes, dans le respect total de la Sunnah du Prophète ﷺ."
              },
              {
                q: "Y a-t-il des carrés musulmans en Normandie ?",
                a: "Oui. Nous connaissons tous les cimetières normands disposant d'un espace réservé aux inhumations islamiques à Rouen, Le Havre, Caen et dans les communes environnantes. Nous vous guidons pour l'acquisition de la concession."
              },
              {
                q: "Vos tarifs sont-ils transparents ?",
                a: "Nous remettons un devis détaillé dès le premier appel, sans engagement. Aucun coût caché. Nous vous informons également des aides disponibles : fonds solidarité algérien, aides consulaires marocaines, assurances rapatriement."
              }
            ].map((faq, i) => (
              <details key={i} className="group border-b border-[#E5E5E5]">
                <summary className="flex items-center justify-between py-6 cursor-pointer list-none [&::-webkit-details-marker]:hidden">
                  <span className="text-[15px] md:text-[16px] font-medium text-[#111] pr-6">{faq.q}</span>
                  <span className="relative flex items-center justify-center w-6 h-6 shrink-0 transition-transform duration-300 group-open:rotate-180">
                    <span className="absolute w-[14px] h-[1.5px] bg-[#111] transition-transform duration-300 group-open:rotate-180" />
                    <span className="absolute w-[1.5px] h-[14px] bg-[#111] transition-transform duration-300 group-open:rotate-90" />
                  </span>
                </summary>
                <div className="pb-6 pr-12 text-[14px] font-light text-[#666] leading-[1.6]">
                  {faq.a}
                </div>
              </details>
            ))}
          </div>

        </div>
      </section>

      {/* ── CTA FINAL ── */}
      <section className="w-full relative overflow-hidden py-20 md:py-32">
        <div className="absolute inset-0">
          <Image
            src="https://images.unsplash.com/photo-1500382017468-9049fed747ef?q=80&w=2000&auto=format&fit=crop"
            alt="Fond nature"
            fill
            className="object-cover opacity-20 grayscale"
          />
          <div className="absolute inset-0 bg-[#0D1208]/92" />
        </div>
        <div className="relative w-full max-w-[1280px] mx-auto px-6 md:px-12 flex flex-col">
          <motion.div variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-40px" }} className="mb-12 md:mb-16">
            <h2 className="text-[32px] md:text-[48px] font-medium text-white tracking-tight mb-4">
              Nous sommes là pour vous.<br />
              <span className="text-[#999]">Maintenant. Partout en Normandie et à Paris.</span>
            </h2>
            <p className="text-[14px] md:text-[15px] font-light text-[#999] max-w-[500px]">
              Une famille en deuil ne devrait pas gérer les démarches seule. C'est notre rôle — pas le vôtre. Que le décès vienne de survenir ou que vous souhaitiez anticiper l'organisation des obsèques, notre équipe est disponible maintenant.
            </p>
          </motion.div>

          <div className="flex flex-col md:flex-row items-center justify-start gap-6">
            <motion.div variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }} className="w-full md:w-auto shrink-0">
              <a href="tel:+33763214656" className="flex items-center justify-center gap-3 bg-white text-[#111] px-6 md:px-8 py-4 md:py-5 rounded-[6px] font-medium text-[14px] md:text-[15px] transition-all duration-400 ease-[cubic-bezier(0.16,1,0.3,1)] hover:bg-gray-100 md:hover:-translate-y-1 md:hover:shadow-[0_10px_30px_-10px_rgba(255,255,255,0.2)] group">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="transition-transform duration-300 md:group-hover:scale-110">
                  <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 13a19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 3.6 2.18h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
                </svg>
                07 63 21 46 56 — Urgence 24h/7j
              </a>
            </motion.div>
            <motion.div variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }} className="w-full md:w-auto shrink-0 flex justify-center">
              <Link href="/contact" className="text-[13.5px] md:text-[14px] text-[#999] font-medium transition-all duration-300 hover:text-white text-center underline underline-offset-4 decoration-[#999]/50 hover:decoration-white">
                Ou nous envoyer un message →
              </Link>
            </motion.div>
          </div>

          <motion.div variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }} className="mt-16 flex flex-wrap justify-start gap-4 md:gap-6">
            <span className="flex items-center gap-2 text-[12px] text-[#888]"><svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"></polyline></svg> Habilitation préfectorale</span>
            <span className="flex items-center gap-2 text-[12px] text-[#888]"><svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"></polyline></svg> Rouen · Le Havre · Caen · Paris</span>
            <span className="flex items-center gap-2 text-[12px] text-[#888]"><svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"></polyline></svg> Rapatriement +20 pays</span>
            <span className="flex items-center gap-2 text-[12px] text-[#888]"><svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"></polyline></svg> Devis gratuit et sans engagement</span>
          </motion.div>
        </div>
      </section>

    </div>
  );
}
