"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";

export function CookieBanner() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Vérifier si l'utilisateur a déjà fait un choix
    const consent = localStorage.getItem("cookie-consent");
    if (!consent) {
      // Petit délai pour une apparition plus élégante
      const timer = setTimeout(() => setIsVisible(true), 1000);
      return () => clearTimeout(timer);
    }
  }, []);

  const handleAccept = () => {
    localStorage.setItem("cookie-consent", "accepted");
    setIsVisible(false);
  };

  const handleDecline = () => {
    localStorage.setItem("cookie-consent", "declined");
    setIsVisible(false);
  };

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ y: 100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: 100, opacity: 0, transition: { duration: 0.3 } }}
          transition={{ type: "spring", damping: 25, stiffness: 200 }}
          className="fixed bottom-0 left-0 right-0 z-[100] p-4 md:p-6 pointer-events-none"
        >
          <div className="mx-auto max-w-[1000px] pointer-events-auto">
            <div className="bg-white/80 backdrop-blur-xl border border-black/5 shadow-[0_20px_40px_-15px_rgba(0,0,0,0.1)] rounded-2xl p-6 md:p-8 flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
              
              <div className="flex-1 max-w-[600px]">
                <h3 className="text-[15px] font-medium text-[#111] mb-2 tracking-tight">Respect de votre vie privée</h3>
                <p className="text-[13px] md:text-[14px] font-light text-[#555] leading-relaxed">
                  Pour vous offrir la meilleure expérience, nous utilisons des cookies strictement nécessaires au fonctionnement du site. 
                  Nous n&apos;utilisons aucun tracker publicitaire intrusif. Pour en savoir plus, consultez notre{" "}
                  <Link href="/politique-confidentialite" className="underline underline-offset-4 decoration-black/20 hover:decoration-black/100 transition-all">
                    politique de confidentialité
                  </Link>.
                </p>
              </div>

              <div className="flex flex-row items-center gap-3 w-full md:w-auto shrink-0">
                <button
                  onClick={handleDecline}
                  className="flex-1 md:flex-none px-6 py-3 text-[13px] font-medium text-[#666] hover:text-[#111] bg-transparent hover:bg-black/5 rounded-full transition-all duration-300"
                >
                  Refuser
                </button>
                <button
                  onClick={handleAccept}
                  className="flex-1 md:flex-none px-6 py-3 text-[13px] font-medium text-white bg-[#111] hover:bg-black rounded-full shadow-md transition-all duration-300 hover:scale-105 active:scale-95"
                >
                  Accepter
                </button>
              </div>

            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
