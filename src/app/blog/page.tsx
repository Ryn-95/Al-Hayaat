import { Metadata } from "next";
import Link from "next/link";
import { blogPosts } from "@/lib/blog-data";

export async function generateMetadata(): Promise<Metadata> {
  const url = "https://www.pompesfunebres-alhayaat.fr/blog";
  return {
    title: "Blog — Guides pratiques pour les familles musulmanes en deuil",
    description: "Ressources, guides et articles pour accompagner les familles musulmanes : obsèques islamiques, rapatriement, ghusl, carrés musulmans, démarches administratives.",
    
    
    alternates: {
      canonical: url,
    },
    openGraph: {
      title: "Blog — Guides pratiques pour les familles musulmanes en deuil",
      description: "Ressources, guides et articles pour accompagner les familles musulmanes : obsèques islamiques, rapatriement, ghusl, carrés musulmans, démarches administratives.",
      url: url,
      siteName: "Al Hayaat Pompes Funèbres Musulmanes",
      locale: "fr_FR",
      type: "website",
      images: [
        {
          url: "https://www.pompesfunebres-alhayaat.fr/og-default.jpg",
          width: 1200,
          height: 630,
          alt: "Al Hayaat Pompes Funèbres Musulmanes",
        }
      ],
    },
  };
}

export default function BlogPage() {
  return (
    <>
      <section className="section-padding pt-32 pb-16 lg:pt-40 lg:pb-20">
        <div className="max-w-[1400px] mx-auto">
          <h1 className="font-playfair text-display text-text-primary mb-4">
            Blog
          </h1>
          <p className="font-inter font-light text-[1.1rem] text-text-secondary max-w-[560px] mb-16">
            Guides pratiques et ressources pour accompagner les familles musulmanes dans les moments les plus difficiles.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {blogPosts.map((post) => (
              <Link key={post.slug} href={`/blog/${post.slug}`} className="group block">
                <article className="bg-cream border border-[rgba(43,97,64,0.10)] rounded-card p-7 h-full flex flex-col card-hover">
                  <div className="flex items-center gap-3 mb-4">
                    <span className="eyebrow text-[10px]">{post.category}</span>
                    <span className="text-[12px] font-inter text-text-muted">{post.readingTime}</span>
                  </div>
                  <h2 className="font-inter font-medium text-[1.05rem] text-text-primary mb-3 leading-snug">
                    {post.title}
                  </h2>
                  <p className="font-inter font-light text-[14px] text-text-secondary leading-relaxed mb-5 flex-1">
                    {post.excerpt}
                  </p>
                  <div className="flex items-center justify-between">
                    <span className="text-primary text-[13px] font-inter font-medium group-hover:underline flex items-center gap-1.5">
                      Lire l&apos;article
                      <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><line x1="5" y1="12" x2="19" y2="12" /><polyline points="12 5 19 12 12 19" /></svg>
                    </span>
                    <time className="text-[12px] font-inter text-text-muted" dateTime={post.date}>
                      {new Date(post.date).toLocaleDateString("fr-FR", { day: "numeric", month: "long", year: "numeric" })}
                    </time>
                  </div>
                </article>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
