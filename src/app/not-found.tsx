import Link from "next/link";

export default function NotFound() {
  return (
    <div className="flex-1 bg-[#FAFAFA] flex flex-col items-center justify-center min-h-[70vh] px-6 text-center pt-32 pb-20">
        <h1 className="text-[32px] md:text-[48px] font-medium text-[#111] mb-6">
          Page introuvable
        </h1>
        <p className="text-[16px] text-[#666] font-light max-w-[600px] mx-auto mb-10 leading-[1.7]">
          La page que vous recherchez n'existe plus ou a été déplacée. Dans ces moments difficiles, nous tenons à vous accompagner sans délai.
        </p>
        
        <div className="flex flex-col items-center gap-6 mb-16">
          <a 
            href="tel:+33763214656" 
            className="flex items-center gap-3 bg-[#111] text-white px-8 py-4 rounded-[6px] font-medium text-[15px] hover:bg-[#333] transition-colors"
          >
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 13a19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 3.6 2.18h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
            </svg>
            Appeler notre permanence 24h/7j
          </a>
        </div>

        <div className="w-full max-w-[500px] border-t border-[#E5E5E5] pt-10">
          <h2 className="text-[13px] uppercase tracking-[0.1em] text-[#888] font-medium mb-6">Liens utiles</h2>
          <div className="flex flex-wrap justify-center gap-4">
            <Link href="/" className="text-[14px] text-[#111] hover:text-[#666] underline underline-offset-4 decoration-[#E5E5E5] transition-colors">
              Retour à l'accueil
            </Link>
            <Link href="/pompes-funebres-musulmanes-rouen" className="text-[14px] text-[#111] hover:text-[#666] underline underline-offset-4 decoration-[#E5E5E5] transition-colors">
              Agence Rouen
            </Link>
            <Link href="/pompes-funebres-musulmanes-le-havre" className="text-[14px] text-[#111] hover:text-[#666] underline underline-offset-4 decoration-[#E5E5E5] transition-colors">
              Agence Le Havre
            </Link>
            <Link href="/pompes-funebres-musulmanes-paris" className="text-[14px] text-[#111] hover:text-[#666] underline underline-offset-4 decoration-[#E5E5E5] transition-colors">
              Intervention Paris
            </Link>
            <Link href="/contact" className="text-[14px] text-[#111] hover:text-[#666] underline underline-offset-4 decoration-[#E5E5E5] transition-colors">
              Nous contacter
            </Link>
          </div>
        </div>
      </div>
  );
}