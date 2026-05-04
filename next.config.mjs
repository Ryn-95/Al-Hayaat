/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "images.unsplash.com",
      },
    ],
  },
  async redirects() {
    return [
      // Fix cannibalization: old pages → new SEO-optimized pages
      {
        source: "/toilette-rituelle-ghusl",
        destination: "/toilette-rituelle-musulmane",
        permanent: true, // 301
      },
      {
        source: "/gestion-administrative",
        destination: "/demarches-administratives-deces",
        permanent: true,
      },
      {
        source: "/fossoyage-caveau",
        destination: "/inhumation-carre-musulman",
        permanent: true,
      },
      {
        source: "/pompes-funebres-musulmanes-argenteuil",
        destination: "/pompes-funebres-musulmanes-95-argenteuil",
        permanent: true,
      },
      {
        source: "/pompes-funebres-musulmanes-saint-denis",
        destination: "/pompes-funebres-musulmanes-93-saint-denis",
        permanent: true,
      },
      {
        source: "/ile-de-france",
        destination: "/paris-ile-de-france",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
