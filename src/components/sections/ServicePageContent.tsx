"use client";

import Link from "next/link";
import { AnimateOnScroll } from "@/components/ui/AnimateOnScroll";
import { Button } from "@/components/ui/Button";
import type { ServicePageData } from "@/lib/services-data";

export function ServicePageContent({ data }: { data: ServicePageData }) {
  const faqSchema = data.faqs && data.faqs.length > 0 ? {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: data.faqs.map(faq => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: faq.answer
      }
    }))
  } : null;

  return (
    <>
      {/* Breadcrumb Schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "BreadcrumbList",
            itemListElement: [
              { "@type": "ListItem", position: 1, name: "Accueil", item: "https://al-hayaat.fr" },
              { "@type": "ListItem", position: 2, name: data.h1, item: `https://al-hayaat.fr/${data.slug}` },
            ],
          }),
        }}
      />
      {faqSchema && (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
        />
      )}

      {/* Hero */}
      <section className="section-padding pt-32 pb-16 lg:pt-40 lg:pb-20">
        <div className="max-w-[800px] mx-auto">
          <AnimateOnScroll>
            <nav className="flex items-center gap-2 mb-8 text-[13px] font-inter text-text-muted">
              <Link href="/" className="hover:text-primary transition-colors">Accueil</Link>
              <span>/</span>
              <span className="text-text-primary">{data.h1}</span>
            </nav>
          </AnimateOnScroll>

          <AnimateOnScroll delay={0.1}>
            <h1 className="font-playfair text-display text-text-primary mb-6">
              {data.h1}
            </h1>
          </AnimateOnScroll>

          <AnimateOnScroll delay={0.2}>
            <p className="font-inter font-light text-[1.1rem] text-text-secondary leading-relaxed mb-10">
              {data.heroDescription}
            </p>
          </AnimateOnScroll>

          <AnimateOnScroll delay={0.3}>
            <div className="flex flex-wrap gap-4">
              <Button variant="primary" size="lg" href="/contact">
                Nous contacter
              </Button>
              <Button variant="ghost" size="lg" href="/tarifs">
                Voir les tarifs
              </Button>
            </div>
          </AnimateOnScroll>
        </div>
      </section>

      {/* Content Sections */}
      {data.sections.map((section, i) => (
        <section
          key={i}
          className={`section-padding py-16 lg:py-20 ${i % 2 === 0 ? "bg-beige" : ""}`}
        >
          <div className="max-w-[800px] mx-auto">
            <AnimateOnScroll>
              <h2 className="font-playfair text-[1.6rem] lg:text-[2rem] text-text-primary mb-6">
                {section.title}
              </h2>
            </AnimateOnScroll>
            <AnimateOnScroll delay={0.1}>
              <p className="font-inter font-light text-text-secondary text-[15px] leading-relaxed">
                {section.content}
              </p>
            </AnimateOnScroll>
          </div>
        </section>
      ))}

      {/* Related Services */}
      <section className="section-padding py-16 lg:py-20">
        <div className="max-w-[800px] mx-auto">
          <AnimateOnScroll>
            <h2 className="font-playfair text-[1.6rem] text-text-primary mb-8">
              Services complémentaires
            </h2>
          </AnimateOnScroll>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            {data.relatedServices.map((service, i) => (
              <AnimateOnScroll key={service.href} delay={0.1 * i}>
                <Link href={service.href} className="group block">
                  <div className="bg-cream border border-[rgba(43,97,64,0.10)] rounded-card p-6 card-hover">
                    <h3 className="font-inter font-medium text-text-primary mb-2">{service.title}</h3>
                    <p className="font-inter font-light text-[14px] text-text-secondary mb-3">{service.description}</p>
                    <span className="text-primary text-[13px] font-inter font-medium group-hover:underline">
                      En savoir plus →
                    </span>
                  </div>
                </Link>
              </AnimateOnScroll>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      {data.faqs && data.faqs.length > 0 && (
        <section className="w-full bg-white py-16 lg:py-20 border-t border-[#E5E5E5]">
          <div className="max-w-[800px] mx-auto px-6 md:px-0">
            <AnimateOnScroll>
              <h2 className="font-playfair text-[1.6rem] lg:text-[2rem] text-[#1A1A1A] mb-8">
                Questions fréquentes
              </h2>
            </AnimateOnScroll>
            <div className="flex flex-col border-t border-[#E5E5E5]">
              {data.faqs.map((faq, i) => (
                <details key={i} className="group border-b border-[#E5E5E5]">
                  <summary className="flex items-center justify-between py-6 cursor-pointer list-none [&::-webkit-details-marker]:hidden">
                    <span className="text-[15px] md:text-[16px] font-medium text-[#111] pr-6">{faq.question}</span>
                    <span className="relative flex items-center justify-center w-6 h-6 shrink-0 transition-transform duration-300 group-open:rotate-180">
                      <span className="absolute w-[14px] h-[1.5px] bg-[#111] transition-transform duration-300 group-open:rotate-180" />
                      <span className="absolute w-[1.5px] h-[14px] bg-[#111] transition-transform duration-300 group-open:rotate-90" />
                    </span>
                  </summary>
                  <div className="pb-6 pr-12 text-[14px] font-light text-[#666] leading-[1.6]">
                    {faq.answer}
                  </div>
                </details>
              ))}
            </div>
          </div>
        </section>
      )}
    </>
  );
}
