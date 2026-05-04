"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";

export function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const pathname = usePathname();
  const isHome = pathname === "/";

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close mobile menu when route changes
  useEffect(() => {
    setMobileMenuOpen(false);
  }, [pathname]);

  const navLinks = [
    { label: "Services", href: "/#services" },
    { label: "Zones d'intervention", href: "/#zones" },
    { label: "Guide islamique", href: "/guide" },
    { label: "Contact", href: "/contact" },
  ];

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-[60] transition-all duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] ${
          scrolled || !isHome || mobileMenuOpen
            ? "py-3 bg-white/80 backdrop-blur-2xl shadow-[0_1px_2px_rgba(0,0,0,0.02),0_8px_24px_-8px_rgba(0,0,0,0.05)] border-b border-black/[0.03]"
            : "pt-8 pb-4 bg-transparent border-b border-transparent"
        }`}
      >
        <div className="w-full max-w-[1280px] mx-auto px-6 md:px-12 flex items-center justify-between">
          
          {/* Logo */}
          <Link href="/" className="flex items-center transition-transform duration-300 hover:scale-105 relative z-[70] group h-12 md:h-16 w-28 md:w-40">
            <Image 
              src="/Image/Logo_ALHAYAAT.jpeg" 
              alt="Al Hayaat Pompes Funèbres Musulmanes" 
              fill
              className={`object-contain rounded-[2px] transition-all duration-500 ${
                (scrolled || !isHome || mobileMenuOpen) ? "mix-blend-multiply" : "brightness-0 invert opacity-90 group-hover:opacity-100"
              }`} 
            />
          </Link>
          
          {/* Desktop Navigation (Floating Pill style) */}
          <nav className={`hidden md:flex items-center justify-center absolute left-1/2 -translate-x-1/2 transition-all duration-500 ${
            scrolled || !isHome 
              ? "bg-white/90 backdrop-blur-md shadow-[0_2px_12px_rgba(0,0,0,0.04)] rounded-full px-6 py-2.5 border border-black/[0.04] scale-100 opacity-100" 
              : "bg-transparent scale-105 opacity-90"
          }`}>
            <ul className="flex items-center gap-8">
              {navLinks.map((item) => (
                <li key={item.label}>
                  <Link
                    href={item.href}
                    className={`text-[13px] font-medium tracking-[0.02em] transition-all duration-300 relative group ${
                      scrolled || !isHome
                        ? "text-[#666] hover:text-[#111]"
                        : "text-white/70 hover:text-white"
                    }`}
                  >
                    {item.label}
                    <span className={`absolute -bottom-1.5 left-1/2 w-0 h-[2px] -translate-x-1/2 transition-all duration-300 group-hover:w-full rounded-full ${
                      scrolled || !isHome ? "bg-[#111]" : "bg-white"
                    }`} />
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          {/* Desktop Contact Action */}
          <div className="hidden md:flex items-center gap-4">
            <div className={`hidden lg:flex flex-col items-end mr-2 ${scrolled || !isHome ? "text-[#111]" : "text-white"}`}>
              <span className="text-[10px] font-semibold tracking-[0.1em] uppercase opacity-70">Urgence 24h/7j</span>
              <a href="tel:+33763214656" className="text-[13px] font-bold tracking-wider text-[#A83232]">07 63 21 46 56</a>
            </div>
            <Link
              href="/contact"
              className={`relative overflow-hidden flex items-center gap-2 px-6 py-2.5 rounded-full text-[12px] tracking-[0.05em] font-semibold uppercase transition-all duration-500 group ${
                scrolled || !isHome
                  ? "bg-[#111] text-white hover:bg-[#2D6A2D] hover:shadow-[0_8px_20px_-8px_rgba(45,106,45,0.4)]"
                  : "bg-white/10 backdrop-blur-md text-white border border-white/20 hover:bg-white hover:text-[#111]"
              }`}
            >
              <span className="relative z-10">Nous contacter</span>
              {/* Shine effect on hover */}
              <div className="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/20 to-transparent group-hover:animate-[shine_1s_ease-in-out]" />
            </Link>
          </div>

          {/* Mobile Menu Toggle (Minimalist) */}
          <button 
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className={`md:hidden relative z-[70] w-12 h-12 -mr-2 flex flex-col items-center justify-center gap-[5px] transition-colors ${
              scrolled || !isHome || mobileMenuOpen ? "text-[#111]" : "text-white"
            }`}
            aria-label="Toggle menu"
          >
            <span className={`block w-6 h-[1.5px] rounded-full bg-current transition-all duration-300 ease-[cubic-bezier(0.16,1,0.3,1)] ${mobileMenuOpen ? "translate-y-[6.5px] rotate-45" : ""}`} />
            <span className={`block w-6 h-[1.5px] rounded-full bg-current transition-all duration-300 ease-[cubic-bezier(0.16,1,0.3,1)] ${mobileMenuOpen ? "opacity-0" : ""}`} />
            <span className={`block w-6 h-[1.5px] rounded-full bg-current transition-all duration-300 ease-[cubic-bezier(0.16,1,0.3,1)] ${mobileMenuOpen ? "-translate-y-[6.5px] -rotate-45" : ""}`} />
          </button>
        </div>
      </header>

      {/* Mobile Menu Overlay (Apple-like full screen blur) */}
      <div 
        className={`fixed inset-0 bg-white/95 backdrop-blur-2xl z-[55] md:hidden transition-all duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] flex flex-col justify-between ${
          mobileMenuOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
        }`}
      >
        <div className="flex flex-col items-start px-8 pt-32 pb-10 flex-1">
          <nav className="flex flex-col gap-6 w-full">
            {navLinks.map((item, i) => (
              <Link
                key={item.label}
                href={item.href}
                onClick={() => setMobileMenuOpen(false)}
                className={`text-[32px] font-medium text-[#111] tracking-tight transition-all duration-500 border-b border-[#E5E5E5] pb-6 ${
                  mobileMenuOpen ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"
                }`}
                style={{ transitionDelay: `${i * 100}ms` }}
              >
                {item.label}
              </Link>
            ))}
          </nav>
        </div>
        
        <div className={`px-8 pb-12 transition-all duration-700 delay-300 ${mobileMenuOpen ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"}`}>
          <Link
            href="/contact"
            onClick={() => setMobileMenuOpen(false)}
            className="flex items-center justify-between w-full p-6 rounded-[16px] bg-[#111] text-white text-[16px] font-medium hover:bg-[#2D6A2D] transition-colors group"
          >
            <span>Nous contacter</span>
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="transition-transform group-hover:translate-x-1"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
          </Link>
          <div className="mt-6 flex flex-col gap-2">
            <span className="text-[11px] tracking-[0.2em] font-semibold text-[#999] uppercase">Urgence 24/7</span>
            <a href="tel:+33763214656" className="text-[18px] text-[#111] font-medium">
              07 63 21 46 56
            </a>
          </div>
        </div>
      </div>
    </>
  );
}
