"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";

export function Hero() {
  return (
    <section className="relative min-h-[100svh] w-full overflow-hidden flex items-center justify-center" id="hero">
      
      {/* Background Image (Immersive) */}
      <div className="absolute inset-0 z-0">
        <Image 
          src="https://images.unsplash.com/photo-1542816417-0983c9c9ad53?q=80&w=2070&auto=format&fit=crop" 
          alt="pompes funèbres musulmanes Rouen Al Hayaat"
          fill
          priority
          className="object-cover grayscale-[20%]"
        />
        {/* Soft overlay to ensure text legibility while keeping the image very visible */}
        <div className="absolute inset-0 bg-parchment/60 backdrop-blur-[2px]"></div>
        
        {/* Subtle bottom gradient to blend with the next section */}
        <div className="absolute inset-0 bg-gradient-to-t from-parchment via-transparent to-transparent"></div>
      </div>
      
      {/* Animated Premium Mesh Gradient Background (Reduced opacity so image shines through) */}
      <div className="absolute inset-0 z-0 opacity-30 mix-blend-overlay">
        <div className="absolute top-[-20%] left-[-10%] w-[50%] h-[50%] bg-green/10 blur-[120px] rounded-full animate-[pulse-dot_8s_ease-in-out_infinite]" />
        <div className="absolute bottom-[-10%] right-[-10%] w-[60%] h-[60%] bg-brown/5 blur-[120px] rounded-full animate-[pulse-dot_10s_ease-in-out_infinite_reverse]" />
        <div className="absolute top-[40%] left-[30%] w-[40%] h-[40%] bg-green-dark/10 blur-[140px] rounded-full" />
      </div>
      
      {/* Subtle Grid overlay for texture */}
      <div className="absolute inset-0 z-0 bg-[linear-gradient(to_right,#2a282405_1px,transparent_1px),linear-gradient(to_bottom,#2a282405_1px,transparent_1px)] bg-[size:4rem_4rem]" />

      <div className="relative z-10 text-center px-6 w-full max-w-[1000px] mt-16">
        
        <motion.div
          initial={{ opacity: 0, y: 20, scale: 0.95 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ duration: 0.8, type: "spring", bounce: 0.4 }}
          className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-brown/10 bg-brown/5 backdrop-blur-md mb-8"
        >
          <span className="w-2 h-2 rounded-full bg-green animate-pulse" />
          <span className="font-inter text-[11px] font-medium uppercase tracking-wider text-ink/80">
            Pompes Funèbres · Paris & Normandie
          </span>
        </motion.div>

        <motion.h1 
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.1, type: "spring", bounce: 0.3 }}
          className="font-inter font-bold text-[clamp(3rem,8vw,6rem)] leading-[1.05] tracking-tighter text-ink mb-8"
        >
          Un dernier voyage, <br className="hidden md:block"/>
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-ink to-ink/60">dans la plus grande dignité.</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.2 }}
          className="font-inter text-[1.1rem] md:text-[1.25rem] text-ink/70 max-w-[600px] mx-auto leading-relaxed mb-12"
        >
          Nous accompagnons les familles musulmanes dans les moments les plus difficiles. Respect absolu des rites, discrétion et intervention immédiate.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.3 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          <Link
            href="/contact"
            className="w-full sm:w-auto px-8 py-4 bg-green text-white rounded-full font-inter font-semibold text-[14px] hover:scale-105 active:scale-95 transition-all duration-200 shadow-sm"
          >
            Intervention Urgente
          </Link>
          <Link
            href="/#services"
            className="w-full sm:w-auto px-8 py-4 bg-brown/5 text-ink border border-brown/10 rounded-full font-inter font-medium text-[14px] hover:bg-brown/10 transition-all duration-200 backdrop-blur-md"
          >
            Découvrir nos services
          </Link>
        </motion.div>

      </div>
      
    </section>
  );
}
