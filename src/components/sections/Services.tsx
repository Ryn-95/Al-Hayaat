"use client";

import { motion } from "framer-motion";
import Link from "next/link";

const services = [
  {
    id: "01",
    title: "Obsèques musulmanes",
    description: "Organisation complète selon les rites islamiques. Tradition prophétique et dignité absolue du défunt.",
    href: "/obseques-musulmanes",
    col: "md:col-span-8",
  },
  {
    id: "02",
    title: "Rapatriement",
    description: "Prise en charge vers le pays d'origine en délai réduit.",
    href: "/rapatriement-corps",
    col: "md:col-span-4",
  },
  {
    id: "03",
    title: "Toilette (Ghusl)",
    description: "Toilette rituelle par nos équipes qualifiées selon la Sunnah, avec pudeur.",
    href: "/toilette-rituelle-ghusl",
    col: "md:col-span-4",
  },
  {
    id: "04",
    title: "Accompagnement",
    description: "Gestion des formalités (mairie, préfecture) et soutien psychologique continu.",
    href: "/gestion-administrative",
    col: "md:col-span-8",
  },
];

export function Services() {
  return (
    <section className="w-full bg-[#0A0A0A] text-white py-[15vh] px-6 flex justify-center" id="services">
      <div className="w-full max-w-[1200px]">
        
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, type: "spring", bounce: 0.3 }}
          className="mb-16 text-center"
        >
          <span className="font-inter text-[12px] uppercase tracking-widest text-white/50 block mb-4">
            Nos Prestations
          </span>
          <h2 className="font-inter font-bold text-[clamp(2.5rem,5vw,4rem)] leading-[1.1] tracking-tight">
            L&apos;essentiel, pris en charge.
          </h2>
        </motion.div>

        {/* Apple/Framer style Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-6">
          {services.map((service, index) => (
            <motion.div 
              key={service.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8, delay: index * 0.1, type: "spring", bounce: 0.3 }}
              className={`relative group ${service.col} bg-[#111] border border-white/5 rounded-[2rem] p-8 md:p-12 overflow-hidden hover:bg-[#151515] transition-colors duration-500`}
            >
              {/* Subtle inner glow on hover */}
              <div className="absolute inset-0 bg-gradient-to-b from-white/[0.03] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              
              <div className="relative z-10 h-full flex flex-col justify-between min-h-[200px]">
                <div className="flex justify-between items-start mb-12">
                  <div className="w-12 h-12 rounded-full bg-white/5 border border-white/10 flex items-center justify-center font-inter font-medium text-[14px] text-white/70 group-hover:bg-white group-hover:text-ink transition-colors duration-500">
                    {service.id}
                  </div>
                  <svg className="w-6 h-6 text-white/20 group-hover:text-white/80 transition-colors duration-500 transform group-hover:translate-x-1 group-hover:-translate-y-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </div>
                
                <Link href={service.href} className="block mt-auto">
                  <h3 className="font-inter font-semibold text-[1.5rem] md:text-[2rem] leading-tight mb-4 tracking-tight">
                    {service.title}
                  </h3>
                  <p className="font-inter text-[1rem] text-white/50 leading-relaxed max-w-[400px]">
                    {service.description}
                  </p>
                </Link>
              </div>
            </motion.div>
          ))}
        </div>
        
      </div>
    </section>
  );
}
