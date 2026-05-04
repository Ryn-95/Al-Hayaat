export interface ServicePageData {
  slug: string;
  title: string;
  h1: string;
  metaDescription: string;
  heroDescription: string;
  sections: {
    title: string;
    content: string;
  }[];
  relatedServices: {
    title: string;
    href: string;
    description: string;
  }[];
}

export const servicesData: ServicePageData[] = [
  {
    slug: "obseques-musulmanes",
    title: "Obsèques musulmanes en Île-de-France — Al Hayaat",
    h1: "Obsèques musulmanes en Île-de-France",
    metaDescription:
      "Organisation complète d'obsèques musulmanes à Paris et en Île-de-France. Respect des rites islamiques, disponibilité 24h/24. Devis gratuit — Al Hayaat.",
    heroDescription:
      "Al Hayaat organise l'intégralité des obsèques musulmanes en Île-de-France et en Normandie, dans le strict respect des rites islamiques. De la mise en bière à l'inhumation en carré musulman, nous prenons en charge chaque étape avec dignité, discrétion et professionnalisme.",
    sections: [
      {
        title: "Un accompagnement de A à Z",
        content:
          "Dès la survenue du décès, notre équipe se déplace à votre domicile, à l'hôpital ou en maison de retraite. Nous prenons en charge le transport du défunt, les démarches administratives (certificat de décès, déclaration en mairie, autorisations), la préparation selon les rites islamiques (toilette rituelle, mise en bière), et l'organisation de l'inhumation en carré musulman. Un interlocuteur unique vous accompagne tout au long du processus.",
      },
      {
        title: "Conformité aux rites islamiques",
        content:
          "Chaque étape des obsèques est réalisée en conformité avec les prescriptions de l'islam sunnite. La toilette rituelle (ghusl) est effectuée par des professionnels formés du même sexe que le défunt. Le linceul (kafan) est préparé selon la tradition. La salat al-janaza est coordonnée avec l'imam. L'inhumation est réalisée avec le corps orienté vers la Qibla.",
      },
      {
        title: "Disponibilité et réactivité",
        content:
          "Un décès ne prévient pas. C'est pourquoi Al Hayaat est joignable 24 heures sur 24, 7 jours sur 7. Notre équipe peut intervenir en moins d'une heure sur l'ensemble de l'Île-de-France. En Normandie, nous intervenons dans les meilleurs délais grâce à notre réseau de partenaires locaux.",
      },
    ],
    relatedServices: [
      {
        title: "Toilette rituelle (ghusl)",
        href: "/toilette-rituelle-ghusl",
        description: "Le ghusl, réalisé dans le respect absolu des prescriptions coraniques.",
      },
      {
        title: "Gestion administrative",
        href: "/gestion-administrative",
        description: "Toutes les démarches prises en charge pour soulager la famille.",
      },
    ],
  },
  {
    slug: "rapatriement-corps",
    title: "Rapatriement de corps en pays musulman — France",
    h1: "Rapatriement de corps en pays musulman",
    metaDescription:
      "Rapatriement de corps vers le Maroc, l'Algérie, la Tunisie et au-delà. Al Hayaat gère toutes les démarches. Disponible 24h/24.",
    heroDescription:
      "Le rapatriement d'un défunt vers son pays d'origine est une démarche complexe qui demande expertise et coordination. Al Hayaat prend en charge l'intégralité du processus, de l'obtention des documents administratifs à la réception du corps dans le pays d'accueil.",
    sections: [
      {
        title: "Vers plus de 15 pays",
        content:
          "Nous organisons des rapatriements vers le Maroc, l'Algérie, la Tunisie, la Turquie, le Sénégal, le Mali, la Mauritanie, l'Égypte, la Jordanie, le Liban, le Pakistan, le Bangladesh, les Comores, et bien d'autres destinations. Notre réseau de partenaires internationaux nous permet d'assurer un acheminement fluide et respectueux.",
      },
      {
        title: "Démarches et documents",
        content:
          "Le rapatriement nécessite l'obtention d'un permis d'inhumer, d'une autorisation préfectorale de transport, de soins de conservation si nécessaire, et de la coordination avec le consulat du pays de destination. Nous constituons l'intégralité de la liasse documentaire et coordonnons avec les compagnies aériennes et les autorités aéroportuaires.",
      },
      {
        title: "Transparence des coûts",
        content:
          "Le rapatriement international débute à partir de 2 900 €. Ce tarif inclut le cercueil de transport agréé, la liasse documentaire complète, l'accompagnement aéroport et la coordination avec les partenaires dans le pays d'accueil. Chaque devis est détaillé et sans frais cachés.",
      },
    ],
    relatedServices: [
      {
        title: "Gestion administrative",
        href: "/gestion-administrative",
        description: "Toutes les démarches administratives prises en charge.",
      },
      {
        title: "Obsèques musulmanes",
        href: "/obseques-musulmanes",
        description: "Organisation complète d'obsèques en France.",
      },
    ],
  },
  {
    slug: "toilette-rituelle-ghusl",
    title: "Toilette rituelle islamique (ghusl) — Paris",
    h1: "Toilette rituelle islamique (ghusl)",
    metaDescription:
      "Toilette rituelle (ghusl) réalisée par des professionnels formés à Paris et en Île-de-France. Respect des prescriptions coraniques — Al Hayaat.",
    heroDescription:
      "Le ghusl est une obligation religieuse fondamentale en islam. Chez Al Hayaat, cette étape sacrée est confiée à des professionnels formés aux prescriptions coraniques, qui agissent avec dignité, respect et discrétion.",
    sections: [
      {
        title: "Un rituel sacré",
        content:
          "Le ghusl (غسل) consiste en le lavage rituel du défunt avant l'inhumation. Le corps est lavé de droite à gauche, avec de l'eau pure et du savon, selon un protocole codifié par la tradition prophétique. Ce rituel est réalisé par des personnes du même sexe que le défunt, dans un environnement calme et respectueux.",
      },
      {
        title: "Enveloppement dans le kafan",
        content:
          "Après le ghusl, le défunt est séché puis enveloppé dans le kafan — un linceul blanc immaculé composé de plusieurs pièces de tissu. Le kafan est préparé selon la sunna, avec le soin et la délicatesse que mérite ce moment solennel.",
      },
      {
        title: "Professionnels certifiés",
        content:
          "Notre équipe est spécifiquement formée à la réalisation du ghusl selon les prescriptions islamiques. Chaque membre a suivi une formation complète auprès d'autorités religieuses reconnues. Nous intervenons à domicile, en chambre funéraire ou dans un lieu dédié.",
      },
    ],
    relatedServices: [
      {
        title: "Obsèques musulmanes",
        href: "/obseques-musulmanes",
        description: "Organisation complète des obsèques islamiques.",
      },
      {
        title: "Accompagnement famille",
        href: "/accompagnement-famille",
        description: "Un soutien humain dans les moments les plus difficiles.",
      },
    ],
  },
  {
    slug: "gestion-administrative",
    title: "Gestion administrative décès — Al Hayaat",
    h1: "Gestion administrative complète",
    metaDescription:
      "Certificat de décès, déclaration en mairie, autorisations de transport — Al Hayaat gère toutes les démarches administratives pour vous.",
    heroDescription:
      "Les formalités administratives liées à un décès sont nombreuses et complexes. Al Hayaat prend en charge l'intégralité des démarches pour que la famille puisse se concentrer sur l'essentiel : le deuil et le recueillement.",
    sections: [
      {
        title: "Les démarches que nous gérons",
        content:
          "Nous nous occupons de l'obtention du certificat de décès auprès du médecin, de la déclaration de décès en mairie dans les 24 heures, de la demande d'autorisation d'inhumation ou de transport, des formalités consulaires en cas de rapatriement, et de la coordination avec les caisses de retraite et organismes sociaux.",
      },
      {
        title: "Rapidité et efficacité",
        content:
          "Grâce à notre expérience et à nos relations avec les administrations locales, nous accélérons chaque étape du processus. Les délais légaux sont respectés, les documents sont constitués avec rigueur, et la famille est tenue informée à chaque avancement.",
      },
      {
        title: "Un interlocuteur unique",
        content:
          "Vous n'avez qu'un seul numéro à appeler. Votre conseiller dédié coordonne l'ensemble des intervenants — mairie, préfecture, consulat, compagnie aérienne — pour que vous n'ayez à vous occuper de rien.",
      },
    ],
    relatedServices: [
      {
        title: "Rapatriement de corps",
        href: "/rapatriement-corps",
        description: "Transport international du défunt.",
      },
      {
        title: "Obsèques musulmanes",
        href: "/obseques-musulmanes",
        description: "Organisation complète des obsèques.",
      },
    ],
  },
  {
    slug: "accompagnement-famille",
    title: "Accompagnement famille en deuil — Al Hayaat",
    h1: "Accompagnement de la famille",
    metaDescription:
      "Un interlocuteur unique, disponible et à l'écoute, pour accompagner les familles musulmanes dans l'épreuve du deuil — Al Hayaat.",
    heroDescription:
      "Perdre un proche est une épreuve immense. Al Hayaat met à votre disposition un conseiller dédié, disponible jour et nuit, qui vous accompagne avec humanité, écoute et professionnalisme tout au long du processus.",
    sections: [
      {
        title: "Un soutien humain avant tout",
        content:
          "Chez Al Hayaat, nous ne sommes pas de simples prestataires. Nous sommes des accompagnateurs. Chaque famille est unique, chaque deuil est différent. Notre rôle est d'être présents, de rassurer, d'expliquer chaque étape avec patience et compassion, et de soulager les proches de toute charge logistique et administrative.",
      },
      {
        title: "Disponibilité permanente",
        content:
          "Votre conseiller dédié est joignable par téléphone et par WhatsApp, 24 heures sur 24. Il vous informe en temps réel de l'avancement des démarches, répond à toutes vos questions, et s'adapte à vos souhaits et à votre rythme.",
      },
      {
        title: "Respect des volontés",
        content:
          "Nous prenons le temps de comprendre les volontés de la famille et du défunt. Lieu d'inhumation, rites spécifiques, rapatriement ou obsèques locales — chaque décision vous appartient, et nous mettons tout en œuvre pour la concrétiser.",
      },
    ],
    relatedServices: [
      {
        title: "Obsèques musulmanes",
        href: "/obseques-musulmanes",
        description: "Organisation complète des obsèques islamiques.",
      },
      {
        title: "Gestion administrative",
        href: "/gestion-administrative",
        description: "Toutes les démarches prises en charge.",
      },
    ],
  },
  {
    slug: "fossoyage-caveau",
    title: "Fossoyage & caveau musulman — Al Hayaat",
    h1: "Fossoyage et caveau en carré musulman",
    metaDescription:
      "Concession en carré musulman, inhumation selon l'orientation qibla. Al Hayaat organise le fossoyage et la mise en terre en Île-de-France.",
    heroDescription:
      "L'inhumation en carré musulman est un droit et une exigence pour de nombreuses familles. Al Hayaat se charge de trouver et d'obtenir une concession adaptée, et d'organiser le fossoyage et la mise en terre dans le respect de l'orientation vers la Qibla.",
    sections: [
      {
        title: "Carrés musulmans en Île-de-France",
        content:
          "Nous connaissons parfaitement les cimetières disposant de carrés musulmans en région parisienne : Bobigny, Tremblay-en-France, Pontoise, Évry, et bien d'autres. Nous effectuons les démarches auprès des mairies pour obtenir une concession dans les meilleurs délais.",
      },
      {
        title: "Orientation Qibla",
        content:
          "Conformément aux prescriptions islamiques, le défunt est inhumé avec le visage tourné vers la Qibla (La Mecque). Nos équipes de fossoyeurs sont formées à cette exigence et s'assurent que l'orientation est respectée avec précision.",
      },
      {
        title: "Fossoyage professionnel",
        content:
          "Le fossoyage est réalisé par des professionnels qualifiés, dans le respect des normes en vigueur et des exigences de chaque cimetière. Nous nous occupons de tout, de l'ouverture à la fermeture de la sépulture.",
      },
    ],
    relatedServices: [
      {
        title: "Obsèques musulmanes",
        href: "/obseques-musulmanes",
        description: "Organisation complète des obsèques islamiques.",
      },
      {
        title: "Accompagnement famille",
        href: "/accompagnement-famille",
        description: "Un soutien humain dans les moments les plus difficiles.",
      },
    ],
  },
];

export function getServiceBySlug(slug: string): ServicePageData | undefined {
  return servicesData.find((s) => s.slug === slug);
}
