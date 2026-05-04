"use client";

import { motion } from "framer-motion";
import Link from "next/link";

const recentPosts = [
  {
    title: "Comprendre les rites funéraires en Islam : De la toilette rituelle à l'inhumation",
    excerpt: "Un guide détaillé sur les différentes étapes obligatoires selon la Sunnah pour accompagner dignement un défunt musulman.",
    category: "Guide & Rites",
    slug: "comprendre-rites-funeraires-islam",
  },
  {
    title: "Le rapatriement de corps vers le Maghreb : Démarches et délais",
    excerpt: "Quelles sont les obligations légales et consulaires pour rapatrier un proche vers l'Algérie, le Maroc ou la Tunisie ?",
    category: "Rapatriement",
    slug: "rapatriement-corps-maghreb-demarches",
  },
  {
    title: "Le deuil en Islam : Comment accompagner une famille endeuillée",
    excerpt: "Conseils spirituels et pratiques pour apporter un soutien utile et réconfortant lors de la perte d'un être cher.",
    category: "Spiritualité",
    slug: "deuil-en-islam-accompagner-famille",
  },
];

export function BlogPreview() {
  return (
    <section className="bg-parchment pt-[120px] pb-[120px] px-[8vw]" id="blog">
      <div className="max-w-content mx-auto">
        {/* Top Header */}
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6 border-b border-ink/10 pb-8">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.6, ease: [0.25, 0.1, 0.25, 1.0] }}
            className="font-playfair text-[clamp(2.5rem,4vw,3.5rem)] text-ink leading-none tracking-[-0.01em]"
          >
            Actualités & Conseils
          </motion.h2>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.6, delay: 0.1, ease: [0.25, 0.1, 0.25, 1.0] }}
          >
            <Link
              href="/blog"
              className="group font-inter text-[12px] uppercase tracking-[0.1em] text-ink hover:text-green-dark transition-colors duration-200 flex items-center gap-2"
            >
              Voir tous les articles
              <div className="w-[20px] h-[1px] bg-ink group-hover:w-[40px] group-hover:bg-green-dark transition-all duration-300" />
            </Link>
          </motion.div>
        </div>

        {/* Article Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-8">
          {recentPosts.map((post, i) => (
            <motion.div
              key={post.slug}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: 0.1 * i, ease: [0.25, 0.1, 0.25, 1.0] }}
            >
              <Link href={`/blog/${post.slug}`} className="block h-full group">
                <div className="flex flex-col items-start h-full">
                  <span className="font-inter text-[10px] uppercase tracking-[0.15em] text-ink/50 border border-ink/10 px-[10px] py-[4px] mb-6">
                    {post.category}
                  </span>
                  <h3 className="font-playfair text-[1.6rem] text-ink leading-[1.2] mb-4 group-hover:text-green-dark transition-colors duration-300">
                    {post.title}
                  </h3>
                  <p className="font-inter font-light text-[0.95rem] text-ink/70 leading-[1.7] flex-1">
                    {post.excerpt}
                  </p>
                  <div className="font-inter text-[11px] uppercase tracking-[0.1em] text-ink/50 mt-[32px] flex items-center gap-2">
                    Lire
                    <div className="w-[20px] h-[1px] bg-ink/30 group-hover:w-[40px] group-hover:bg-green-dark transition-all duration-300" />
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
