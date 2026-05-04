import Link from "next/link";
import Image from "next/image";

export function Footer() {
  return (
    <footer className="bg-[#FAFAFA] border-t border-[#E5E5E5] pt-20 pb-10 font-inter">
      <div className="max-w-[1280px] mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 lg:gap-8 mb-20">
          
          {/* Brand Column */}
          <div className="lg:col-span-4 flex flex-col items-start">
            <Link href="/" className="mb-6 mix-blend-multiply relative h-12 w-32">
              <Image 
                src="/Image/Logo_ALHAYAAT.jpeg" 
                alt="Al Hayaat Pompes Funèbres Musulmanes" 
                fill
                className="object-contain rounded-[2px]" 
              />
            </Link>
            <p className="text-[13px] text-[#666] leading-[1.7] font-light max-w-[300px]">
              Al Hayaat — Pompes Funèbres Musulmanes<br/>
              Spécialisée dans les obsèques islamiques en Normandie et à Paris. Toilette rituelle (Ghusl), Salat al-Janaza, inhumation en carré musulman, rapatriement vers l&apos;Algérie, le Maroc, la Tunisie et +20 pays. Habilitation préfectorale. Disponibles 24h/24, 7j/7.
            </p>
          </div>

          {/* Agence Column */}
          <div className="lg:col-span-3 flex flex-col gap-5">
            <span className="text-[10px] tracking-[0.2em] font-semibold text-[#111] uppercase">Notre agence</span>
            <div className="flex flex-col gap-3">
              <p className="text-[13px] text-[#666] font-light leading-[1.6]">
                <strong className="font-medium text-[#111]">Le Havre</strong><br/>
                44 Rue Saint-Jacques, 76600 Le Havre
              </p>
              <p className="text-[13px] text-[#666] font-light leading-[1.6]">
                <strong className="font-medium text-[#111]">Normandie</strong><br/>
                Intervention 76 · 14 · 27 · 50 · 61
              </p>
              <p className="text-[13px] text-[#666] font-light leading-[1.6]">
                <strong className="font-medium text-[#111]">Île-de-France</strong><br/>
                Intervention 75 · 92 · 93 · 94 · 95
              </p>
              <a href="tel:+33763214656" className="text-[14px] font-medium text-[#111] mt-2 hover:text-[#2D6A2D] transition-colors">
                Urgence 24/7 : 07 63 21 46 56
              </a>
            </div>
          </div>

          {/* Zones Column */}
          <div className="lg:col-span-2 flex flex-col gap-5">
            <span className="text-[10px] tracking-[0.2em] font-semibold text-[#111] uppercase">Zones d&apos;intervention</span>
            {[
              { label: "Rouen", href: "/pompes-funebres-musulmanes-rouen" },
              { label: "Le Havre", href: "/pompes-funebres-musulmanes-le-havre" },
              { label: "Caen", href: "/pompes-funebres-musulmanes-caen" },
              { label: "Dieppe", href: "/pompes-funebres-musulmanes-dieppe" },
              { label: "Évreux", href: "/pompes-funebres-musulmanes-evreux" },
              { label: "Paris", href: "/pompes-funebres-musulmanes-paris" },
              { label: "Saint-Denis (93)", href: "/pompes-funebres-musulmanes-saint-denis" },
              { label: "Argenteuil (95)", href: "/pompes-funebres-musulmanes-argenteuil" },
              { label: "Toute l'Île-de-France", href: "/ile-de-france" }
            ].map((l) => (
              <Link
                key={l.label}
                href={l.href}
                className="group flex items-center justify-between text-[13px] text-[#666] hover:text-[#111] transition-colors duration-300 font-light"
              >
                <span className="group-hover:translate-x-1 transition-transform">{l.label}</span>
                <span className="opacity-0 group-hover:opacity-100 transition-opacity">→</span>
              </Link>
            ))}
          </div>

          {/* Services Column */}
          <div className="lg:col-span-3 flex flex-col gap-5">
            <span className="text-[10px] tracking-[0.2em] font-semibold text-[#111] uppercase">Nos services</span>
            {[
              { label: "Obsèques Musulmanes", href: "/obseques-musulmanes" },
              { label: "Toilette Rituelle (Ghusl)", href: "/toilette-rituelle-musulmane" },
              { label: "Salat al-Janaza", href: "/salat-al-janaza" },
              { label: "Rapatriement Algérie", href: "/rapatriement-corps-algerie" },
              { label: "Rapatriement Maroc", href: "/rapatriement-corps-maroc" },
              { label: "Carré Musulman", href: "/inhumation-carre-musulman" },
              { label: "Démarches Admin.", href: "/demarches-administratives-deces" }
            ].map((l) => (
              <Link
                key={l.label}
                href={l.href}
                className="group flex items-center justify-between text-[13px] text-[#666] hover:text-[#111] transition-colors duration-300 font-light"
              >
                <span className="group-hover:translate-x-1 transition-transform">{l.label}</span>
                <span className="opacity-0 group-hover:opacity-100 transition-opacity">→</span>
              </Link>
            ))}
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="flex flex-col md:flex-row justify-between items-center pt-8 border-t border-[#E5E5E5] gap-4">
          <div className="flex flex-col md:flex-row items-center gap-2 md:gap-4 text-center md:text-left">
            <span className="text-[12px] text-[#999] font-light">
              © {new Date().getFullYear()} Al Hayaat — Pompes Funèbres Musulmanes
            </span>
            <span className="hidden md:inline text-[#DDD]">|</span>
            <span className="text-[12px] text-[#999] font-light">
              Normandie · Paris · International
            </span>
            <span className="hidden md:inline text-[#DDD]">|</span>
            <span className="text-[12px] text-[#999] font-light">
              Habilitation préfectorale
            </span>
          </div>
          <div className="flex items-center gap-6">
            <Link
              href="/mentions-legales"
              className="text-[12px] text-[#999] hover:text-[#111] transition-colors duration-300 font-light"
            >
              Mentions légales
            </Link>
            <Link
              href="/politique-confidentialite"
              className="text-[12px] text-[#999] hover:text-[#111] transition-colors duration-300 font-light"
            >
              Confidentialité
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
