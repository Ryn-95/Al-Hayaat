export interface BlogPost {
  slug: string;
  title: string;
  h1: string;
  category: string;
  date: string;
  readingTime: string;
  excerpt: string;
  metaDescription: string;
  content: {
    heading: string;
    text: string;
  }[];
  relatedSlugs: string[];
}

export const blogPosts: BlogPost[] = [
  {
    slug: "etapes-enterrement-musulman-france",
    title: "Les étapes d'un enterrement musulman en France",
    h1: "Les étapes d'un enterrement musulman en France",
    category: "Guide pratique",
    date: "2025-03-15",
    readingTime: "8 min",
    excerpt: "De la toilette rituelle à l'inhumation en carré musulman, découvrez comment se déroulent des obsèques islamiques conformes en France.",
    metaDescription: "Guide complet des étapes d'un enterrement musulman en France : toilette rituelle, prière funéraire, inhumation en carré musulman. Tout savoir sur les obsèques islamiques.",
    content: [
      {
        heading: "La prise en charge du défunt",
        text: "Dès la survenue du décès, le corps du défunt doit être pris en charge dans les meilleurs délais. En France, la loi impose de faire constater le décès par un médecin qui délivre un certificat de décès. Ce document est indispensable pour engager toutes les démarches ultérieures. La famille ou les pompes funèbres musulmanes prennent ensuite en charge le transport du corps vers une chambre funéraire ou un lieu dédié à la préparation rituelle. Chez Al Hayaat, nous intervenons en moins d'une heure pour assurer cette prise en charge avec dignité et respect.",
      },
      {
        heading: "La toilette rituelle (ghusl)",
        text: "Le ghusl est l'une des étapes les plus importantes des obsèques musulmanes. Il s'agit du lavage rituel du corps selon les prescriptions coraniques. Le défunt est lavé par des personnes du même sexe, de droite à gauche, avec de l'eau pure et du savon. Ce rituel suit un protocole précis transmis par la tradition prophétique. Après le lavage, le corps est séché puis enveloppé dans le kafan, un linceul blanc composé de plusieurs pièces de tissu. Le ghusl est une obligation religieuse que les pompes funèbres musulmanes Al Hayaat réalisent avec le plus grand soin.",
      },
      {
        heading: "La prière funéraire (salat al-janaza)",
        text: "La salat al-janaza est la prière funéraire accomplie en l'honneur du défunt avant l'inhumation. Elle peut être réalisée dans une mosquée, dans une salle de prière ou directement au cimetière. Cette prière collective est dirigée par un imam et constitue une obligation communautaire (fard kifaya) pour les musulmans. Al Hayaat coordonne l'organisation de cette prière avec l'imam et la mosquée de votre choix.",
      },
      {
        heading: "L'inhumation en carré musulman",
        text: "L'inhumation doit idéalement avoir lieu le plus rapidement possible après le décès, conformément à la sunna. En France, la loi impose un délai minimum de 24 heures et maximum de 6 jours. Le corps est inhumé dans un carré musulman, une zone du cimetière dédiée, avec le visage orienté vers la Qibla (direction de La Mecque). De nombreux cimetières en Île-de-France disposent de carrés musulmans, notamment à Bobigny, Tremblay-en-France et Pontoise.",
      },
      {
        heading: "Les démarches administratives",
        text: "Parallèlement aux rites religieux, des démarches administratives sont nécessaires : déclaration de décès en mairie dans les 24 heures, obtention du permis d'inhumer, et éventuellement des autorisations de transport. Si la famille souhaite un rapatriement du corps vers le pays d'origine, des formalités consulaires et aéroportuaires s'ajoutent. Al Hayaat prend en charge l'intégralité de ces démarches pour que la famille puisse se concentrer sur le deuil.",
      },
    ],
    relatedSlugs: ["ghusl-toilette-rituelle-islam-france", "carre-musulman-cimetiere-ile-de-france", "delai-inhumation-islam-france"],
  },
  {
    slug: "rapatriement-corps-maroc-algerie-tunisie",
    title: "Rapatriement de corps vers le Maroc, l'Algérie et la Tunisie",
    h1: "Rapatriement de corps : Maroc, Algérie, Tunisie",
    category: "Rapatriement",
    date: "2025-02-20",
    readingTime: "10 min",
    excerpt: "Démarches, documents, délais et coûts — le guide complet pour organiser un rapatriement de dépouille vers le Maghreb.",
    metaDescription: "Comment organiser un rapatriement de corps vers le Maroc, l'Algérie ou la Tunisie ? Démarches, documents, coûts et délais. Guide complet par Al Hayaat.",
    content: [
      {
        heading: "Pourquoi rapatrier un corps ?",
        text: "De nombreuses familles musulmanes vivant en France souhaitent que leur défunt soit inhumé dans son pays d'origine. Ce choix, profondément personnel et culturel, nécessite une organisation rigoureuse. Le rapatriement de corps vers le Maroc, l'Algérie ou la Tunisie est le plus fréquemment demandé en France. Al Hayaat organise plus de 100 rapatriements par an vers ces trois pays du Maghreb et d'autres destinations.",
      },
      {
        heading: "Les documents nécessaires",
        text: "Le rapatriement d'un corps à l'étranger nécessite plusieurs documents : le certificat de décès, l'acte de décès délivré par la mairie, l'autorisation préfectorale de transport de corps, le certificat de non-épidémie, et les documents consulaires du pays de destination. Pour le Maroc, un laissez-passer mortuaire est délivré par le consulat. Pour l'Algérie, une autorisation de rapatriement est nécessaire. Al Hayaat constitue l'intégralité de ce dossier administratif.",
      },
      {
        heading: "Le processus de transport",
        text: "Le corps du défunt est placé dans un cercueil de transport hermétique agréé pour le transport aérien. Ce cercueil spécial répond aux normes internationales (cercueil zingué). Le transport est assuré par des compagnies aériennes régulières avec un traitement spécifique et respectueux du fret funéraire. À l'arrivée, les partenaires locaux d'Al Hayaat prennent en charge le corps et assurent le transport jusqu'au lieu d'inhumation.",
      },
      {
        heading: "Délais et coûts",
        text: "Un rapatriement vers le Maghreb prend généralement entre 3 et 7 jours, selon les délais d'obtention des documents et la disponibilité des vols. Chez Al Hayaat, le rapatriement débute à partir de 2 900 €, incluant le cercueil de transport, la liasse documentaire, l'accompagnement aéroport et la coordination dans le pays d'accueil. Chaque devis est détaillé et sans frais cachés.",
      },
    ],
    relatedSlugs: ["rapatriement-international-documents-necessaires", "demarches-administratives-deces-france", "cout-obseques-musulmanes-france"],
  },
  {
    slug: "carre-musulman-cimetiere-ile-de-france",
    title: "Carrés musulmans en Île-de-France : liste et démarches",
    h1: "Carré musulman : où sont-ils en Île-de-France ?",
    category: "Inhumation",
    date: "2025-01-10",
    readingTime: "7 min",
    excerpt: "Liste complète des cimetières disposant d'un carré musulman en région parisienne, avec les démarches pour obtenir une concession.",
    metaDescription: "Où trouver un carré musulman en Île-de-France ? Liste des cimetières, démarches pour obtenir une concession. Guide pratique Al Hayaat.",
    content: [
      {
        heading: "Qu'est-ce qu'un carré musulman ?",
        text: "Un carré musulman est une section d'un cimetière communal réservée aux défunts de confession musulmane. Bien que la France soit un État laïque, la loi de 1905 sur la séparation des Églises et de l'État n'interdit pas l'aménagement de carrés confessionnels dans les cimetières. Le carré musulman permet une inhumation selon les rites islamiques : orientation du corps vers la Qibla, respect des traditions de mise en terre, et regroupement communautaire.",
      },
      {
        heading: "Liste des principaux carrés musulmans en Île-de-France",
        text: "Plusieurs cimetières d'Île-de-France disposent de carrés musulmans : le cimetière de Bobigny (93), Tremblay-en-France (93), Pontoise (95), Évry (91), Villeneuve-Saint-Georges (94), Clichy-sous-Bois (93), Nanterre (92), Argenteuil (95), et Mantes-la-Jolie (78). La disponibilité des places varie selon les communes et les périodes. Al Hayaat connaît parfaitement ces emplacements et peut vous orienter vers le carré le plus adapté à votre situation.",
      },
      {
        heading: "Comment obtenir une concession",
        text: "Pour obtenir une concession dans un carré musulman, il faut généralement que le défunt ait un lien avec la commune (résidence, lieu de décès, ou caveau familial existant). La demande est effectuée auprès du service funéraire de la mairie. Al Hayaat se charge de cette démarche en votre nom, en constituant le dossier et en assurant le suivi avec l'administration.",
      },
    ],
    relatedSlugs: ["etapes-enterrement-musulman-france", "delai-inhumation-islam-france"],
  },
  {
    slug: "cout-obseques-musulmanes-france",
    title: "Combien coûtent des obsèques musulmanes en France ?",
    h1: "Coût des obsèques musulmanes en France",
    category: "Tarifs",
    date: "2025-03-01",
    readingTime: "6 min",
    excerpt: "Décryptage des prix des obsèques musulmanes en France : obsèques locales, rapatriement, toilette rituelle. Tout ce qu'il faut savoir.",
    metaDescription: "Quel est le prix des obsèques musulmanes en France ? Tarifs pour obsèques locales, rapatriement, ghusl. Guide transparent par Al Hayaat.",
    content: [
      {
        heading: "Les composantes du coût",
        text: "Le coût des obsèques musulmanes dépend de plusieurs facteurs : le type de prestation (obsèques locales ou rapatriement), le cercueil choisi, les soins de conservation éventuels, les démarches administratives, la concession au cimetière, et le transport. Chez Al Hayaat, nous détaillons chaque poste de dépense dans nos devis pour une transparence totale.",
      },
      {
        heading: "Tarifs indicatifs",
        text: "Des obsèques musulmanes locales en Île-de-France débutent à partir de 1 490 €, incluant l'organisation complète, le cercueil, le transport du corps et les démarches administratives. Un rapatriement vers le Maghreb ou ailleurs commence à partir de 2 900 €. Un pack complet combinant obsèques, rapatriement, toilette rituelle et gestion administrative complète est disponible sur devis personnalisé.",
      },
      {
        heading: "Aides financières possibles",
        text: "Plusieurs aides peuvent contribuer au financement des obsèques : le capital décès versé par la Sécurité sociale, les assurances obsèques, les mutuelles, et les aides sociales communales. Certaines associations musulmanes proposent également une aide financière aux familles en difficulté. Al Hayaat peut vous orienter vers les dispositifs adaptés à votre situation.",
      },
    ],
    relatedSlugs: ["etapes-enterrement-musulman-france", "rapatriement-corps-maroc-algerie-tunisie"],
  },
  {
    slug: "ghusl-toilette-rituelle-islam-france",
    title: "Le ghusl (toilette rituelle) en islam : guide complet",
    h1: "Ghusl : la toilette rituelle en islam",
    category: "Rite sacré",
    date: "2025-02-05",
    readingTime: "9 min",
    excerpt: "Tout savoir sur le ghusl : signification, étapes, prescriptions coraniques et réalisation en France par des professionnels formés.",
    metaDescription: "Guide complet sur le ghusl (toilette rituelle islamique) : étapes, prescriptions, et organisation en France. Par Al Hayaat, pompes funèbres musulmanes.",
    content: [
      {
        heading: "Signification du ghusl",
        text: "Le mot ghusl (غسل) signifie littéralement « lavage » en arabe. Dans le contexte funéraire, il désigne le lavage rituel obligatoire du corps du défunt avant l'inhumation. Le ghusl est considéré comme une obligation communautaire (fard kifaya) en islam : si un groupe de musulmans s'en acquitte, les autres en sont dispensés. C'est un acte d'adoration et de respect envers le défunt, qui le prépare pour sa rencontre avec Dieu.",
      },
      {
        heading: "Les étapes du ghusl",
        text: "Le ghusl suit un protocole précis : le corps est d'abord déshabillé et couvert d'un drap pour préserver sa pudeur. Les parties intimes sont nettoyées. Le lavage commence par le côté droit, puis le côté gauche, en partant de la tête vers les pieds. De l'eau pure et du savon sont utilisés. L'opération est répétée un nombre impair de fois (3, 5 ou 7). Du camphre peut être ajouté à la dernière eau de rinçage. Le corps est ensuite séché et parfumé avant d'être enveloppé dans le kafan.",
      },
      {
        heading: "Qui peut réaliser le ghusl ?",
        text: "Le ghusl doit être réalisé par des musulmans du même sexe que le défunt. L'exception est faite pour les époux : un homme peut laver sa femme et inversement. Les personnes qui réalisent le ghusl doivent connaître les prescriptions religieuses et faire preuve de discrétion absolue. Chez Al Hayaat, notre équipe est spécifiquement formée à la réalisation du ghusl selon les prescriptions de la sunna.",
      },
    ],
    relatedSlugs: ["etapes-enterrement-musulman-france", "carre-musulman-cimetiere-ile-de-france"],
  },
  {
    slug: "delai-inhumation-islam-france",
    title: "Délai d'inhumation en islam et en France : ce qu'il faut savoir",
    h1: "Délai d'inhumation en islam et en France",
    category: "Réglementation",
    date: "2025-01-25",
    readingTime: "5 min",
    excerpt: "Quels sont les délais d'inhumation en islam et selon la loi française ? Comment concilier les deux ? Explications et conseils pratiques.",
    metaDescription: "Délai d'inhumation en islam vs loi française : comment concilier tradition religieuse et réglementation. Guide pratique Al Hayaat.",
    content: [
      {
        heading: "Ce que dit l'islam",
        text: "En islam, il est fortement recommandé d'inhumer le défunt le plus rapidement possible après le décès. Le Prophète Muhammad (paix et bénédictions sur lui) a dit : « Hâtez-vous d'enterrer vos morts ». Cette recommandation vise à honorer le défunt et à faciliter le processus de deuil pour la famille. Dans les pays musulmans, l'inhumation a souvent lieu le jour même du décès.",
      },
      {
        heading: "Ce que dit la loi française",
        text: "En France, la loi fixe un délai minimum de 24 heures après le décès avant l'inhumation (sauf dérogation préfectorale), et un délai maximum de 6 jours ouvrables. Ces délais permettent d'effectuer les démarches administratives obligatoires et, le cas échéant, les investigations médicales. En cas de rapatriement, des délais supplémentaires sont nécessaires pour constituer le dossier administratif et organiser le transport.",
      },
      {
        heading: "Comment Al Hayaat concilie les deux",
        text: "Chez Al Hayaat, nous mettons tout en œuvre pour accélérer chaque étape et respecter à la fois la tradition islamique et la réglementation française. Notre réactivité (intervention en moins d'une heure, disponibilité 24h/24) et notre connaissance des procédures administratives nous permettent de réduire les délais au minimum. Pour les obsèques locales, nous pouvons généralement organiser l'inhumation dans les 24 à 48 heures suivant le décès.",
      },
    ],
    relatedSlugs: ["etapes-enterrement-musulman-france", "demarches-administratives-deces-france"],
  },
  {
    slug: "demarches-administratives-deces-france",
    title: "Démarches administratives après un décès en France",
    h1: "Démarches administratives après un décès",
    category: "Administratif",
    date: "2025-02-10",
    readingTime: "7 min",
    excerpt: "Certificat de décès, déclaration en mairie, permis d'inhumer : guide complet des démarches obligatoires après un décès en France.",
    metaDescription: "Quelles sont les démarches administratives après un décès en France ? Certificat, mairie, permis d'inhumer. Guide complet Al Hayaat.",
    content: [
      {
        heading: "Le certificat de décès",
        text: "Le certificat de décès est le premier document à obtenir. Il est établi par un médecin qui constate le décès. Ce document est indispensable pour toutes les démarches ultérieures. En cas de décès à l'hôpital, le certificat est généralement établi par le médecin de l'établissement. En cas de décès à domicile, il faut appeler un médecin ou le SAMU. Al Hayaat peut coordonner cette étape dès le premier appel.",
      },
      {
        heading: "La déclaration en mairie",
        text: "Le décès doit être déclaré en mairie dans les 24 heures suivant le constat. Cette déclaration est effectuée à la mairie du lieu de décès. Les pièces nécessaires sont le certificat de décès et une pièce d'identité du défunt. La mairie délivre alors l'acte de décès, un document officiel nécessaire pour les obsèques et les démarches ultérieures (succession, banque, assurance).",
      },
      {
        heading: "Le permis d'inhumer et les autorisations",
        text: "Le permis d'inhumer est délivré par le maire de la commune où aura lieu l'inhumation. En cas de transport du corps hors de la commune de décès, une autorisation préfectorale de transport est nécessaire. Pour un rapatriement international, des autorisations consulaires et un certificat de non-épidémie sont également requis. Al Hayaat gère l'ensemble de ces formalités pour que la famille n'ait pas à s'en préoccuper.",
      },
    ],
    relatedSlugs: ["etapes-enterrement-musulman-france", "delai-inhumation-islam-france"],
  },
  {
    slug: "rapatriement-international-documents-necessaires",
    title: "Rapatriement international : les documents nécessaires",
    h1: "Documents nécessaires pour un rapatriement international",
    category: "Rapatriement",
    date: "2025-01-05",
    readingTime: "6 min",
    excerpt: "Liste complète des documents nécessaires pour rapatrier un corps depuis la France vers un pays étranger. Procédures et conseils.",
    metaDescription: "Quels documents pour rapatrier un corps depuis la France ? Liste complète, procédures consulaires et conseils pratiques. Guide Al Hayaat.",
    content: [
      {
        heading: "Documents obligatoires",
        text: "Le rapatriement d'un corps depuis la France nécessite : le certificat de décès original, l'acte de décès délivré par la mairie, l'autorisation préfectorale de fermeture de cercueil et de transport, le certificat de non-contagion (attestant que le décès n'est pas dû à une maladie épidémique), et le laissez-passer mortuaire délivré par le consulat du pays de destination. Chacun de ces documents a un délai d'obtention spécifique.",
      },
      {
        heading: "Formalités consulaires",
        text: "Le consulat du pays de destination joue un rôle central dans le processus de rapatriement. Il délivre le laissez-passer mortuaire, qui autorise l'entrée du corps sur le territoire national. Les consulats du Maroc, de l'Algérie et de la Tunisie ont chacun leurs propres procédures et formulaires. Al Hayaat entretient des relations régulières avec ces consulats, ce qui permet d'accélérer les démarches.",
      },
      {
        heading: "Coordination transport aérien",
        text: "Le transport aérien d'un corps nécessite un cercueil hermétique répondant aux normes IATA. Une déclaration de fret spécifique est remplie, et le cercueil est enregistré comme fret accompagné ou non accompagné selon les compagnies. Al Hayaat coordonne l'ensemble de la logistique avec les compagnies aériennes et assure la réception du corps dans le pays de destination via ses partenaires locaux.",
      },
    ],
    relatedSlugs: ["rapatriement-corps-maroc-algerie-tunisie", "demarches-administratives-deces-france"],
  },
];

export function getPostBySlug(slug: string): BlogPost | undefined {
  return blogPosts.find((p) => p.slug === slug);
}

export function getRelatedPosts(slugs: string[]): BlogPost[] {
  return blogPosts.filter((p) => slugs.includes(p.slug));
}
