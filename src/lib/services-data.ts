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
  faqs?: {
    question: string;
    answer: string;
  }[];
}

export const servicesData: ServicePageData[] = [
  {
    slug: "obseques-musulmanes",
    title: "Obsèques Musulmanes en Normandie et Paris | Al Hayaat | 24h/7j",
    h1: "Organisation des Obsèques Musulmanes — Normandie & Paris",
    metaDescription:
      "Al Hayaat organise des obsèques musulmanes complètes en Normandie et à Paris. Toilette rituelle, Salat al-Janaza, inhumation en carré musulman, rapatriement. Habilitation préfectorale. Devis gratuit.",
    heroDescription:
      "Organiser des obsèques musulmanes dans le respect de la Sunnah nécessite une expertise que peu d'entreprises funéraires maîtrisent vraiment. Al Hayaat est née de cette nécessité : offrir aux familles musulmanes de Normandie et d'Île-de-France un accompagnement complet, rigoureux et humain, de la première heure jusqu'à la mise en terre. Habilitée par la préfecture, notre équipe connaît chaque étape du rite funéraire islamique — toilette rituelle, mise en kafan, Salat al-Janaza, inhumation dans un carré musulman — et maîtrise le cadre légal français qui s'y applique. Nous intervenons à Rouen, Le Havre, Caen, Paris, Saint-Denis et partout en Normandie et en IDF, 24h/24.",
    sections: [
      {
        title: "Les Étapes des Obsèques Musulmanes",
        content:
          "**1. La prise en charge immédiate du défunt**\nDès le décès constaté, Al Hayaat intervient pour le transport du corps vers une chambre funéraire. Conformément à la Sunnah, la rapidité est essentielle. Le Prophète ﷺ a dit : « Hâtez-vous de préparer les obsèques du défunt » (Sahih al-Bukhari, n°1315). Notre équipe se déplace à domicile, à l'hôpital ou en EHPAD dans les meilleurs délais.\n\n**2. La toilette rituelle (Ghusl al-Mayyit)**\nLe Ghusl est une obligation collective (fard kifaya) prescrite par le Prophète ﷺ. Notre équipe, composée d'hommes pour les défunts masculins et de femmes pour les défuntes féminines, accomplit ce rite avec pudeur et recueillement. Le corps est lavé un nombre impair de fois à l'eau mélangée de jujubier, puis parfumé au camphre, avant d'être enveloppé dans le kafan.\n\n**3. La mise en kafan (linceul)**\nLe défunt est enveloppé dans le kafan — trois pièces de tissu blanc pour l'homme, cinq pour la femme — selon les prescriptions du Prophète ﷺ. Al Hayaat fournit le kafan en coton ou en lin naturel.\n\n**4. La Salat al-Janaza**\nAl Hayaat coordonne la prière funèbre avec l'imam et la mosquée de votre choix. La Salat al-Janaza peut se tenir à la mosquée ou directement au cimetière avant l'inhumation, selon la volonté de la famille.\n\n**5. L'inhumation en carré musulman**\nLe défunt est inhumé dans un carré confessionnel d'un cimetière municipal, le corps orienté vers la Qibla (direction de La Mecque). Al Hayaat gère la recherche de concession, les démarches en mairie et le fossoyage.",
      },
      {
        title: "Ce qu'Al Hayaat Prend en Charge",
        content:
          "✓ Transport du corps (domicile, hôpital, EHPAD)\n✓ Toilette rituelle (Ghusl) par équipe qualifiée homme/femme\n✓ Mise en kafan (linceul blanc fourni)\n✓ Fourniture du cercueil en bois naturel\n✓ Salat al-Janaza (coordination avec l'imam)\n✓ Inhumation en carré musulman (orientation Qibla)\n✓ Démarches administratives complètes (mairie, préfecture)\n✓ Rapatriement international (Algérie, Maroc, Tunisie, +20 pays)",
      }
    ],
    relatedServices: [
      {
        title: "Toilette rituelle (Ghusl)",
        href: "/toilette-rituelle-musulmane",
        description: "Lavage rituel du corps selon la Sunnah, réalisé par notre équipe qualifiée.",
      },
      {
        title: "Démarches Administratives",
        href: "/demarches-administratives-deces",
        description: "Toutes les démarches prises en charge pour soulager la famille.",
      },
    ],
    faqs: [
      {
        question: "Combien de temps faut-il pour organiser des obsèques musulmanes ?",
        answer: "En France, la loi impose un délai minimum de 24h et maximum de 6 jours ouvrables entre le décès et l'inhumation. Al Hayaat s'efforce d'organiser les obsèques dans les 48 à 72 heures, conformément à la recommandation islamique de rapidité."
      },
      {
        question: "La crémation est-elle possible pour un musulman ?",
        answer: "Non. Le consensus des savants musulmans interdit la crémation. L'inhumation est la seule sépulture conforme à l'Islam. Al Hayaat propose exclusivement l'inhumation et le rapatriement."
      },
      {
        question: "Peut-on organiser des obsèques musulmanes en France pour quelqu'un décédé à l'étranger ?",
        answer: "Oui. Al Hayaat peut organiser le rapatriement du corps depuis l'étranger vers la France pour une inhumation locale. Contactez-nous immédiatement — les délais sont souvent très courts."
      }
    ]
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

export function getServicesPages() { return servicesData.map(s => ({ path: `/${s.slug}` })); }
