import { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { blogPosts, getPostBySlug, getRelatedPosts } from "@/lib/blog-data";
import { Button } from "@/components/ui/Button";

export async function generateStaticParams() {
  return blogPosts.map((post) => ({ slug: post.slug }));
}

export async function generateMetadata({ params }: { params: { slug: string } }): Promise<Metadata> {
  const post = getPostBySlug(params.slug);
  if (!post) return { title: "Article introuvable" };
  const url = `https://www.pompesfunebres-alhayaat.fr/blog/${post.slug}`;
  return {
    title: post.title,
    description: post.metaDescription,
    alternates: {
      canonical: url,
    },
    openGraph: {
      title: post.title,
      description: post.metaDescription,
      url: url,
      siteName: "Al Hayaat Pompes Funèbres Musulmanes",
      locale: "fr_FR",
      type: "article",
      images: [
        {
          url: "https://www.pompesfunebres-alhayaat.fr/og-default.jpg",
          width: 1200,
          height: 630,
          alt: post.title,
        }
      ],
    },
  };
}

export default function BlogArticlePage({ params }: { params: { slug: string } }) {
  const post = getPostBySlug(params.slug);
  if (!post) notFound();

  const related = getRelatedPosts(post.relatedSlugs);

  return (
    <>
      {/* Breadcrumb + Article Schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify([
            {
              "@context": "https://schema.org",
              "@type": "BreadcrumbList",
              itemListElement: [
                { "@type": "ListItem", position: 1, name: "Accueil", item: "https://www.pompesfunebres-alhayaat.fr" },
                { "@type": "ListItem", position: 2, name: "Blog", item: "https://www.pompesfunebres-alhayaat.fr/blog" },
                { "@type": "ListItem", position: 3, name: post.title, item: `https://www.pompesfunebres-alhayaat.fr/blog/${post.slug}` },
              ],
            },
            {
              "@context": "https://schema.org",
              "@type": "Article",
              headline: post.h1,
              datePublished: post.date,
              author: { "@type": "Organization", name: "Al Hayaat" },
              publisher: { "@type": "Organization", name: "Al Hayaat – Pompes Funèbres Musulmanes" },
              description: post.metaDescription,
            },
          ]),
        }}
      />

      {/* Hero */}
      <section className="section-padding pt-32 pb-12 lg:pt-40 lg:pb-16">
        <div className="max-w-[800px] mx-auto">
          <nav className="flex items-center gap-2 mb-8 text-[13px] font-inter text-text-muted">
            <Link href="/" className="hover:text-primary transition-colors">Accueil</Link>
            <span>/</span>
            <Link href="/blog" className="hover:text-primary transition-colors">Blog</Link>
            <span>/</span>
            <span className="text-text-secondary truncate">{post.title}</span>
          </nav>

          <div className="flex items-center gap-4 mb-6">
            <span className="eyebrow text-[10px]">{post.category}</span>
            <span className="text-[12px] font-inter text-text-muted">{post.readingTime} de lecture</span>
            <time className="text-[12px] font-inter text-text-muted" dateTime={post.date}>
              {new Date(post.date).toLocaleDateString("fr-FR", { day: "numeric", month: "long", year: "numeric" })}
            </time>
          </div>

          <h1 className="font-playfair text-[clamp(2rem,4vw,3rem)] leading-tight text-text-primary mb-6">
            {post.h1}
          </h1>
          <p className="font-inter font-light text-[1.05rem] text-text-secondary leading-relaxed">
            {post.excerpt}
          </p>
        </div>
      </section>

      {/* Content */}
      <section className="section-padding pb-12">
        <div className="max-w-[800px] mx-auto">
          {post.content.map((section, i) => (
            <div key={i} className="mb-12">
              <h2 className="font-playfair text-[1.5rem] text-text-primary mb-4">
                {section.heading}
              </h2>
              <p className="font-inter font-light text-[15px] text-text-secondary leading-relaxed">
                {section.text}
              </p>

              {/* Mid-article CTA after 2nd section */}
              {i === 1 && (
                <div className="mt-10 mb-2 bg-primary-light border border-[rgba(43,97,64,0.15)] rounded-card p-6">
                  <p className="font-inter font-medium text-[14px] text-primary mb-3">
                    Besoin d&apos;aide ? Notre équipe est disponible 24h/24.
                  </p>
                  <div className="flex flex-wrap gap-3">
                    <Button variant="primary" size="sm" href="tel:+33XXXXXXXXX">Appeler</Button>
                    <Button variant="ghost" size="sm" href="https://wa.me/33XXXXXXXXX">WhatsApp</Button>
                  </div>
                </div>
              )}
            </div>
          ))}

          {/* À lire aussi */}
          {post.content.length > 2 && (
            <div className="bg-beige rounded-card p-6 mb-12">
              <p className="eyebrow mb-3">À lire aussi</p>
              <ul className="space-y-2">
                {related.slice(0, 2).map((r) => (
                  <li key={r.slug}>
                    <Link href={`/blog/${r.slug}`} className="text-primary font-inter text-[14px] hover:underline">
                      {r.title}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          )}

          {/* End CTA */}
          <div className="bg-primary rounded-card p-8 text-center">
            <h3 className="font-playfair italic text-[1.4rem] text-white mb-3">
              Besoin d&apos;accompagnement ?
            </h3>
            <p className="font-inter font-light text-white/80 text-[14px] mb-6">
              Al Hayaat est à vos côtés 24h/24, 7j/7.
            </p>
            <div className="flex flex-wrap justify-center gap-3">
              <Button variant="white" size="md" href="tel:+33XXXXXXXXX">Appeler</Button>
              <Button variant="whiteGhost" size="md" href="/contact">Nous contacter</Button>
            </div>
          </div>
        </div>
      </section>

      {/* Related Articles */}
      {related.length > 0 && (
        <section className="section-padding py-16 bg-beige">
          <div className="max-w-[1400px] mx-auto">
            <h2 className="font-playfair text-[1.6rem] text-text-primary mb-8">
              Articles similaires
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {related.map((r) => (
                <Link key={r.slug} href={`/blog/${r.slug}`} className="group block">
                  <article className="bg-cream border border-[rgba(43,97,64,0.10)] rounded-card p-6 card-hover">
                    <span className="eyebrow text-[10px] mb-2 block">{r.category}</span>
                    <h3 className="font-inter font-medium text-[15px] text-text-primary mb-2">{r.title}</h3>
                    <p className="font-inter font-light text-[13px] text-text-secondary line-clamp-2">{r.excerpt}</p>
                  </article>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}
    </>
  );
}
