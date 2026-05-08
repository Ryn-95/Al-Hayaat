import Link from "next/link";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Message envoyé — Al Hayaat",
  description: "Merci pour votre message. Nous vous répondrons dans les plus brefs délais.",
  robots: {
    index: false, // On ne veut pas indexer cette page de succès
    follow: false,
  }
};

export default function MerciPage() {
  return (
    <div className="min-h-[70vh] flex items-center justify-center section-padding pt-32 pb-20">
      <div className="max-w-[600px] w-full bg-white border border-[rgba(43,97,64,0.10)] rounded-card p-10 text-center shadow-card">
        <div className="w-20 h-20 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-6">
          <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="#2B6140" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />
            <polyline points="22 4 12 14.01 9 11.01" />
          </svg>
        </div>
        
        <h1 className="font-playfair text-[2rem] md:text-[2.5rem] text-text-primary mb-4">
          Message envoyé avec succès
        </h1>
        
        <p className="font-inter font-light text-[1.05rem] text-text-secondary mb-8 leading-relaxed">
          Nous avons bien reçu votre demande. Notre équipe en a pris connaissance et vous recontactera dans les plus brefs délais. En cas d'urgence absolue, n'hésitez pas à nous appeler directement.
        </p>
        
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <Link 
            href="/"
            className="inline-flex items-center justify-center font-medium font-inter transition-all duration-200 bg-primary text-white hover:bg-primary-dark h-12 px-8 rounded-button text-[15px] w-full sm:w-auto"
          >
            Retour à l'accueil
          </Link>
          <a 
            href="tel:+33763214656"
            className="inline-flex items-center justify-center font-medium font-inter transition-all duration-200 bg-cream text-primary border border-primary/20 hover:border-primary h-12 px-8 rounded-button text-[15px] w-full sm:w-auto"
          >
            Appeler le 07 63 21 46 56
          </a>
        </div>
      </div>
    </div>
  );
}
