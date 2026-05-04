"use client";

import { motion } from "framer-motion";

export function UrgencyBanner() {
  return (
    <section className="bg-green-dark" id="urgency-banner">
      <div className="py-[20px] px-[8vw]">
        <div className="max-w-content mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, ease: [0.25, 0.1, 0.25, 1.0] }}
            className="flex flex-col text-center md:text-left"
          >
            <span className="font-playfair italic text-parchment text-[1.4rem]">
              Décès survenu ?
            </span>
            <span className="font-inter font-light text-[0.9rem] text-[#F7F3EC]/60">
              Notre équipe répond immédiatement.
            </span>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, delay: 0.1, ease: [0.25, 0.1, 0.25, 1.0] }}
            className="flex flex-col items-center md:items-end gap-2"
          >
            <a
              href="tel:+33100000000"
              className="font-inter font-semibold text-parchment text-[1.8rem] tracking-[-0.02em] leading-none hover:opacity-80 transition-opacity"
            >
              01 00 00 00 00
            </a>
            <a
              href="https://wa.me/33100000000"
              className="inline-flex items-center justify-center border border-[#F7F3EC]/30 text-parchment px-[20px] py-[8px] rounded-[4px] text-[13px] font-inter hover:bg-[#F7F3EC]/10 transition-colors"
              target="_blank"
              rel="noopener noreferrer"
            >
              ou via WhatsApp
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
