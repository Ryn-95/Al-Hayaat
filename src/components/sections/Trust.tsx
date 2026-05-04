"use client";

import { motion } from "framer-motion";

export function Trust() {
  return (
    <section className="bg-white py-[10vh] px-[5vw] border-b border-ink/10" id="chiffres">
      <div className="max-w-[1200px] mx-auto flex flex-col md:flex-row justify-between items-start md:items-center gap-12">
        {[
          { number: "24/7", label: "Intervention Immédiate" },
          { number: "< 1h", label: "Délai moyen d'arrivée" },
          { number: "120+", label: "Familles accompagnées" },
          { number: "15+", label: "Pays de rapatriement" },
        ].map((stat, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 * i, type: "spring", bounce: 0.3 }}
            className="flex flex-col items-start"
          >
            <div className="font-inter font-bold text-[3rem] md:text-[4rem] text-ink tracking-tight leading-none mb-2">
              {stat.number}
            </div>
            <div className="font-inter text-[12px] uppercase tracking-widest text-ink/50 font-medium">
              {stat.label}
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
