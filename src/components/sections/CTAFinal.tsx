"use client";

import { motion } from "framer-motion";

export function CTAFinal() {
  return (
    <section className="relative bg-parchment-dark py-[160px] px-[8vw] text-center overflow-hidden" id="cta-final">
      {/* Decorative background */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none z-0">
        <span className="font-playfair italic text-[18vw] text-brown opacity-[0.04] leading-none select-none">
          Al Hayaat
        </span>
      </div>

      <div className="relative z-10 max-w-content mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6, ease: [0.25, 0.1, 0.25, 1.0] }}
        >
          <h2 className="font-playfair italic text-[clamp(2.5rem,5vw,4rem)] text-ink leading-[1.1] mb-6">
            Nous sommes à vos côtés,<br />
            maintenant.
          </h2>
          
          <p className="font-inter font-light text-[1rem] text-ink/60 max-w-[480px] mx-auto mb-10">
            Notre équipe est disponible 24h/24 et 7j/7 pour vous assister dans ces moments difficiles. Contactez-nous pour une intervention immédiate ou un devis gratuit.
          </p>

          <div className="flex flex-col sm:flex-row justify-center items-center gap-4">
            <a
              href="tel:+33100000000"
              className="w-full sm:w-auto inline-block bg-green text-white rounded-[4px] px-[40px] py-[16px] font-inter text-[14px] font-medium hover:bg-green-dark transition-colors duration-200 shadow-sm"
            >
              Appeler maintenant
            </a>
            <a
              href="https://wa.me/33100000000"
              className="w-full sm:w-auto inline-block bg-transparent border-[1.5px] border-brown/20 text-ink rounded-[4px] px-[40px] py-[16px] font-inter text-[14px] hover:bg-brown/5 transition-colors duration-200"
              target="_blank"
              rel="noopener noreferrer"
            >
              WhatsApp
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
