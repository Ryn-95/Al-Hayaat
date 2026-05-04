"use client";

import Link from "next/link";
import { motion } from "framer-motion";

export function UniversalCTA() {
  return (
    <section className="w-full bg-[#FAFAFA] py-16 md:py-24 border-t border-[#E5E5E5] font-inter">
      <div className="max-w-[800px] mx-auto px-6 md:px-12 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
        >
          <div className="mb-10">
            <span className="inline-block text-[11px] font-semibold tracking-[0.2em] text-[#A83232] uppercase mb-3 bg-[#A83232]/10 px-3 py-1 rounded-full">Urgence 24h/7j</span>
            <h2 className="text-[24px] md:text-[32px] font-medium text-[#111] mb-4 tracking-tight">
              Un décès vient de survenir ?
            </h2>
            <p className="text-[14px] md:text-[15px] text-[#666] font-light leading-[1.6] max-w-[500px] mx-auto">
              Appelez Al Hayaat immédiatement. Notre équipe intervient 24h/24 en Normandie et en Île-de-France.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              href="tel:+33763214656"
              className="w-full sm:w-auto flex items-center justify-center gap-2 bg-[#A83232] text-white px-8 py-4 rounded-[6px] text-[14px] font-medium transition-colors hover:bg-[#8A2828] shadow-md shadow-[#A83232]/20"
            >
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 13a19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 3.6 2.18h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
              </svg>
              Appeler le 07 63 21 46 56
            </a>
            <Link
              href="/contact"
              className="w-full sm:w-auto flex items-center justify-center gap-2 bg-white text-[#111] border border-[#E5E5E5] px-8 py-4 rounded-[6px] text-[14px] font-medium transition-colors hover:bg-[#F5F5F5]"
            >
              Nous écrire →
            </Link>
          </div>

          <div className="mt-12 pt-8 border-t border-[#E5E5E5]">
            <h3 className="text-[16px] font-medium text-[#111] mb-2">Besoin d'un devis pour des obsèques ou un rapatriement ?</h3>
            <p className="text-[13px] text-[#666] font-light mb-4">Contactez-nous. Réponse immédiate, 24h/24.</p>
            <Link
              href="/contact"
              className="inline-flex items-center justify-center text-[13px] font-medium text-[#2D6A2D] hover:text-[#1A401A] underline underline-offset-4"
            >
              Demander un devis gratuit
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  );
}