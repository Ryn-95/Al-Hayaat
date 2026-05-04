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
        source: "/pompes-funebres-musulmanes-95-argenteuil",
        destination: "/pompes-funebres-musulmanes-argenteuil",
        permanent: true,
      },
      {
        source: "/pompes-funebres-musulmanes-93-saint-denis",
        destination: "/pompes-funebres-musulmanes-saint-denis",
        permanent: true,
      },
      {
        source: "/paris-ile-de-france",
        destination: "/ile-de-france",
        permanent: true,
      },
      {
        source: "/rapatriement-algerie",
        destination: "/rapatriement-corps-algerie",
        permanent: true,
      },
      {
        source: "/rapatriement-maroc",
        destination: "/rapatriement-corps-maroc",
        permanent: true,
      },
      {
        source: "/rapatriement-corps-comores",
        destination: "/rapatriement-corps-afrique",
        permanent: true,
      },
      {
        source: "/rapatriement-corps-guinee",
        destination: "/rapatriement-corps-afrique",
        permanent: true,
      },
      {
        source: "/rapatriement-corps-mauritanie",
        destination: "/rapatriement-corps-afrique",
        permanent: true,
      },
      {
        source: "/rapatriement-corps-cote-divoire",
        destination: "/rapatriement-corps-afrique",
        permanent: true,
      }
    ];
  },
};

export default nextConfig;
