"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const faqs = [
  {
    question: "Quelles sont les premières démarches lors d'un décès ?",
    answer: "La première étape est d'obtenir le certificat de décès (par un médecin). Ensuite, contactez-nous immédiatement. Nous prenons le relais pour déclarer le décès en mairie (dans les 24h) et organiser le transfert du défunt vers une chambre funéraire ou son domicile."
  },
  {
    question: "Combien de temps prend un rapatriement ?",
    answer: "Le délai moyen est de 3 à 5 jours ouvrés. Ce délai dépend de l'obtention des laissez-passer consulaires, des autorisations préfectorales et des disponibilités des vols."
  },
  {
    question: "Comment se déroule la toilette rituelle (Ghusl) ?",
    answer: "La toilette est effectuée par des personnes de même sexe (sauf conjoints), qualifiées et pieuses. Elle respecte scrupuleusement la Sunnah : lavage minutieux, ablutions, purification, puis enveloppement dans trois linceuls (Kafan) de tissu blanc non cousu."
  },
  {
    question: "Intervenez-vous la nuit et les week-ends ?",
    answer: "Oui, notre permanence téléphonique et nos équipes d'intervention sont disponibles 24h/24 et 7j/7, y compris les jours fériés."
  },
];

export function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section className="bg-white text-ink pt-[15vh] pb-[20vh] px-[5vw]" id="faq">
      <div className="max-w-[800px] mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6, type: "spring", bounce: 0.3 }}
          className="mb-16 text-center"
        >
          <span className="font-inter text-[12px] uppercase tracking-widest text-ink/50 block mb-4">
            Questions Fréquentes
          </span>
          <h2 className="font-inter font-bold text-[clamp(2.5rem,4vw,3.5rem)] leading-tight tracking-tight">
            Informations Essentielles.
          </h2>
        </motion.div>

        <div className="flex flex-col border-t border-ink/10">
          {faqs.map((faq, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="border-b border-ink/10"
            >
              <button
                className="w-full py-8 flex items-center justify-between text-left group"
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
              >
                <span className="font-inter font-semibold text-[1.1rem] md:text-[1.25rem] text-ink group-hover:text-ink/70 transition-colors duration-300 pr-8">
                  {faq.question}
                </span>
                <span className="relative flex-shrink-0 w-6 h-6 flex items-center justify-center">
                  <span className={`absolute w-[18px] h-[2px] bg-ink transition-transform duration-500 ${openIndex === index ? "rotate-180" : ""}`} />
                  <span className={`absolute w-[2px] h-[18px] bg-ink transition-transform duration-500 ${openIndex === index ? "rotate-90 opacity-0" : ""}`} />
                </span>
              </button>
              
              <AnimatePresence>
                {openIndex === index && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
                    className="overflow-hidden"
                  >
                    <p className="font-inter text-[1rem] text-ink/60 pb-8 leading-relaxed">
                      {faq.answer}
                    </p>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
