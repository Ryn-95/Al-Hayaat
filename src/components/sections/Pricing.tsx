"use client";

import { motion } from "framer-motion";
import Link from "next/link";

const pricingItems = [
  {
    title: "Obsèques locales",
    price: "Sur devis",
    includes: "Démarches, Toilette rituelle (Ghusl), Mise en bière, Transport, Inhumation",
  },
  {
    title: "Rapatriement",
    price: "Sur devis",
    includes: "Démarches consulaires, Soins, Cercueil de transport, Vol international, Coordination",
  },
  {
    title: "Sur mesure",
    price: "Sur devis",
    includes: "Adaptation spécifique, Transport longue distance France, Accompagnement renforcé",
  },
];

export function Pricing() {
  return (
    <section className="bg-[#050505] text-white pt-[20vh] pb-[20vh] px-[5vw] overflow-hidden" id="tarifs">
      <div className="max-w-[1200px] mx-auto relative">
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          className="mb-[15vh] relative z-10 text-center"
        >
          <span className="font-inter text-[12px] uppercase tracking-widest text-white/50 block mb-4">
            Engagements
          </span>
          <h2 className="font-inter font-bold text-[clamp(2.5rem,5vw,4rem)] leading-[1.1] tracking-tight">
            Des tarifs sans équivoque.
          </h2>
        </motion.div>

        {/* Brutalist Pricing Table / List */}
        <div className="flex flex-col relative z-10 max-w-[900px] mx-auto">
          <div className="hidden md:grid grid-cols-12 gap-8 pb-4 font-inter text-[12px] uppercase tracking-widest text-white/40 border-b border-white/10">
            <div className="col-span-4">Service</div>
            <div className="col-span-5">Inclus</div>
            <div className="col-span-3 text-right">Tarif à partir de</div>
          </div>

          {pricingItems.map((item, i) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.8, delay: 0.1 * i, ease: [0.16, 1, 0.3, 1] }}
              className="grid grid-cols-1 md:grid-cols-12 gap-4 md:gap-8 items-center py-10 border-b border-white/10 hover:bg-white/[0.02] transition-colors duration-500 group"
            >
              <div className="col-span-1 md:col-span-4">
                <h3 className="font-inter font-semibold text-[1.5rem] md:text-[2rem] text-white leading-tight tracking-tight">
                  {item.title}
                </h3>
              </div>
              
              <div className="col-span-1 md:col-span-5">
                <p className="font-inter text-[0.95rem] md:text-[1rem] text-white/60 leading-relaxed pr-[2vw]">
                  {item.includes}
                </p>
              </div>

              <div className="col-span-1 md:col-span-3 flex justify-between md:justify-end items-center mt-4 md:mt-0">
                <span className="font-inter font-medium text-[2rem] md:text-[2.5rem] text-white tracking-tight">
                  {item.price}
                </span>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1, delay: 0.5 }}
          className="mt-[10vh] flex justify-center relative z-10"
        >
          <Link
            href="/contact"
            className="group flex items-center gap-6 font-inter text-[12px] uppercase tracking-widest text-white/80 hover:text-white transition-colors"
          >
            Obtenir un devis précis
            <div className="relative flex items-center justify-center w-[40px] h-[40px] rounded-full border border-white/20 group-hover:bg-white group-hover:text-ink transition-all duration-500">
              <span className="absolute transform group-hover:translate-x-1 transition-transform duration-300">→</span>
            </div>
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
