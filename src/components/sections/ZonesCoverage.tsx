"use client";

import { motion } from "framer-motion";
import Link from "next/link";

export function ZonesCoverage() {
  return (
    <section className="bg-[#050505] text-white pt-[20vh] pb-[20vh] px-[5vw]" id="zones">
      <div className="max-w-[1200px] mx-auto grid grid-cols-1 md:grid-cols-2 gap-16 md:gap-8 items-center">
        
        {/* Content Left */}
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, type: "spring", bounce: 0.3 }}
        >
          <span className="font-inter text-[12px] uppercase tracking-widest text-white/50 block mb-6">
            Zones d&apos;intervention
          </span>
          <h2 className="font-inter font-bold text-[clamp(2.5rem,4vw,3.5rem)] leading-[1.1] tracking-tight mb-6">
            Île-de-France <br/>
            et Normandie.
          </h2>
          <p className="font-inter text-[1.1rem] text-white/60 leading-relaxed mb-12 max-w-[480px]">
            Nous intervenons dans tous les départements franciliens et l&apos;ensemble de la Normandie. Intervention en moins d&apos;une heure dans Paris intramuros.
          </p>

          <div className="grid grid-cols-2 gap-y-4 gap-x-8 mb-12">
            {[
              "75 — Paris",
              "77 — Seine-et-Marne",
              "78 — Yvelines",
              "91 — Essonne",
              "92 — Hauts-de-Seine",
              "93 — Seine-Saint-Denis",
              "94 — Val-de-Marne",
              "95 — Val-d'Oise",
              "14 — Calvados",
              "27 — Eure",
              "50 — Manche",
              "61 — Orne",
              "76 — Seine-Maritime"
            ].map((dept) => (
              <div key={dept} className="flex items-center gap-3">
                <div className="w-1.5 h-1.5 bg-green rounded-full opacity-50" />
                <span className="font-inter text-[13px] text-white/80">{dept}</span>
              </div>
            ))}
          </div>

          <Link
            href="/contact"
            className="inline-flex items-center justify-center px-8 py-4 border border-white/20 text-white rounded-full font-inter font-medium text-[13px] hover:bg-white hover:text-ink transition-colors duration-300"
          >
            Vérifier votre zone
          </Link>
        </motion.div>

        {/* Abstract Map Graphic Right */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 1, delay: 0.2 }}
          className="relative h-[400px] md:h-[600px] w-full flex items-center justify-center"
        >
          {/* Glassmorphism Abstract Map Container */}
          <div className="absolute inset-0 bg-white/[0.02] border border-white/10 rounded-[3rem] backdrop-blur-xl flex items-center justify-center overflow-hidden">
            {/* Mesh gradient underneath map */}
            <div className="absolute inset-0 bg-mesh opacity-30" />
            
            <svg viewBox="0 0 400 400" className="w-[80%] h-[80%] opacity-40">
              <path 
                d="M 100 200 C 150 100, 250 100, 300 200 C 350 300, 200 350, 100 200" 
                fill="none" 
                stroke="white" 
                strokeWidth="1"
                strokeDasharray="4 4"
              />
              <circle cx="250" cy="220" r="4" fill="#2B6140" />
              <circle cx="250" cy="220" r="12" fill="none" stroke="#2B6140" className="animate-ping" />
              <text x="265" y="225" fill="white" fontSize="12" className="font-inter font-medium tracking-widest">Paris</text>
              
              <circle cx="160" cy="180" r="3" fill="#2B6140" />
              <text x="170" y="185" fill="white" fontSize="10" className="font-inter tracking-widest opacity-70">Rouen</text>
            </svg>
          </div>
        </motion.div>

      </div>
    </section>
  );
}
