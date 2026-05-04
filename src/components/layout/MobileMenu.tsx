"use client";

import { motion } from "framer-motion";
import Link from "next/link";

interface MobileMenuProps {
  isOpen: boolean;
  onClose: () => void;
}

const menuLinks = [
  { label: "Nos services", href: "/#services" },
  { label: "Tarifs", href: "/tarifs" },
  { label: "Blog", href: "/blog" },
  { label: "Contact", href: "/contact" },
];

export function MobileMenu({ onClose }: MobileMenuProps) {
  return (
    <motion.div
      className="fixed inset-0 z-40 bg-green-dark flex flex-col"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.3 }}
    >
      {/* Navigation Links */}
      <nav className="flex flex-col items-center justify-center flex-1 gap-8 mt-20">
        {menuLinks.map((link, index) => (
          <motion.div
            key={link.href}
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.6,
              delay: 0.1 + index * 0.08,
              ease: [0.25, 0.1, 0.25, 1.0],
            }}
          >
            <Link
              href={link.href}
              onClick={onClose}
              className="text-white font-playfair italic text-[3rem] hover:text-green-tint transition-colors duration-300"
            >
              {link.label}
            </Link>
          </motion.div>
        ))}
      </nav>

      {/* Bottom CTAs */}
      <motion.div
        className="flex flex-col items-center gap-4 pb-12 px-8"
        initial={{ opacity: 0, y: 24 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.5, duration: 0.6, ease: [0.25, 0.1, 0.25, 1.0] }}
      >
        <a
          href="tel:+33100000000"
          className="w-full max-w-xs flex items-center justify-center gap-3 bg-green text-white py-4 rounded-[6px] text-[15px] font-inter font-medium"
        >
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
          </svg>
          Appeler maintenant
        </a>
        <a
          href="https://wa.me/33100000000"
          className="w-full max-w-xs flex items-center justify-center gap-3 border border-white/30 text-white py-4 rounded-[6px] text-[15px] font-inter font-medium hover:bg-white/10 transition-colors"
          target="_blank"
          rel="noopener noreferrer"
        >
          WhatsApp
        </a>
      </motion.div>
    </motion.div>
  );
}
