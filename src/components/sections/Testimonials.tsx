"use client";

import { motion } from "framer-motion";

export function Testimonials() {
  return (
    <section className="bg-parchment text-ink pt-[20vh] pb-[20vh] px-[5vw] flex items-center justify-center relative overflow-hidden" id="confiance">
      
      <div className="max-w-[1000px] mx-auto text-center relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6, type: "spring", bounce: 0.3 }}
          className="mb-12 flex justify-center"
        >
          <span className="font-inter text-[12px] uppercase tracking-widest text-ink/50 font-medium">
            L&apos;Humain
          </span>
        </motion.div>

        <motion.h2
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 1, delay: 0.1, type: "spring", bounce: 0.3 }}
          className="font-inter font-bold text-[clamp(2.5rem,6vw,5rem)] text-ink leading-[1.1] tracking-tight"
        >
          &ldquo;Dans le silence de l&apos;absence, <br className="hidden md:block"/>nous apportons <br className="hidden md:block"/>
          <span className="text-ink/50">la douceur de la présence.</span>&rdquo;
        </motion.h2>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1, delay: 0.3 }}
          className="mt-[10vh] flex flex-col items-center gap-6"
        >
          <div className="w-[1px] h-[60px] bg-ink/20" />
          <p className="font-inter text-[12px] uppercase tracking-widest text-ink/50 max-w-[400px] leading-[1.8]">
            Des centaines de familles nous ont confié <br/> le dernier voyage de leurs proches.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
