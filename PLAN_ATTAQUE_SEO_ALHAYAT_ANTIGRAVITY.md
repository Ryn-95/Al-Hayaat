# 🕌 PLAN D'ATTAQUE SEO — AL HAYAT POMPES FUNÈBRES MUSULMANES
## Document opérationnel pour Antigravity — Normandie + Paris

> **Objectif :** Devenir le site numéro 1 sur toutes les requêtes "pompes funèbres musulmanes" en Normandie, et top 3 sur Paris. Voler le trafic de Al Janaza, Erradja, El Malek, En-Nour, Manzil Assistance.
> **Contexte :** La Normandie est un désert SEO absolu sur ce marché. Aucun concurrent n'a de site correctement optimisé dans la région.

---

## PARTIE 1 — FONDATIONS TECHNIQUES (Semaine 1)

### 1.1 Domaine & hébergement

- **Domaine recommandé :** `al-hayat-funeraire.fr` ou `pompes-funebres-musulmanes-normandie.fr`
- Le domaine doit contenir les mots-clés principaux (normandie OU musulmanes)
- Hébergement France, serveur rapide (OVH, Scaleway, ou équivalent)
- **SSL obligatoire** (HTTPS) — Google pénalise les sites HTTP
- **CDN** à activer pour les images (Cloudflare gratuit suffit)

### 1.2 CMS recommandé

- **WordPress** avec Yoast SEO Premium OU RankMath Pro
- Thème léger : GeneratePress ou Kadence (vitesse critique)
- **Éviter** Wix, Squarespace — mauvaise indexation

### 1.3 Core Web Vitals — cibles obligatoires

| Métrique | Cible |
|---|---|
| LCP (Largest Contentful Paint) | < 2,5 secondes |
| FID / INP | < 100ms |
| CLS (Cumulative Layout Shift) | < 0,1 |
| Score PageSpeed Mobile | > 80 |
| Score PageSpeed Desktop | > 90 |

**Pour y arriver :**
- Images en format WebP, compressées (max 150ko par image)
- Pas de vidéos en autoplay
- Fonts chargées en local (pas Google Fonts externe)
- Minification CSS/JS active
- Cache navigateur configuré

### 1.4 Structure d'URL (obligatoire, à configurer dès le début)

```
Format : /slug-court-avec-mot-cle/
Bon : /pompes-funebres-musulmanes-rouen/
Mauvais : /page?id=23 ou /category/services/obsèques/
```

Activer dans WordPress : Réglages > Permaliens > "Nom de l'article"

### 1.5 Fichiers techniques à créer

**robots.txt** (à la racine du site) :
```
User-agent: *
Allow: /
Disallow: /wp-admin/
Disallow: /wp-login.php
Sitemap: https://votredomaine.fr/sitemap.xml
```

**sitemap.xml** : Généré automatiquement par Yoast/RankMath — le soumettre dans Google Search Console dès ouverture du site.

**Google Search Console** : À créer immédiatement. Soumettre le sitemap. Vérifier l'indexation de chaque nouvelle page publiée.

**Google Analytics 4** : À installer. Configurer les événements : appel téléphonique (clic sur le numéro), formulaire de contact envoyé, temps passé sur page.

---

## PARTIE 2 — ARCHITECTURE DU SITE (arborescence complète)

```
HOMEPAGE /
│
├── /services/ (pas indexé — sert juste de hub)
│   ├── /toilette-rituelle-musulmane/
│   ├── /salat-al-janaza/
│   ├── /inhumation-carre-musulman/
│   ├── /rapatriement-corps/
│   │   ├── /rapatriement-corps-algerie/
│   │   ├── /rapatriement-corps-maroc/
│   │   ├── /rapatriement-corps-tunisie/
│   │   ├── /rapatriement-corps-mali-senegal/
│   │   └── /rapatriement-corps-pakistan-bangladesh/
│   ├── /cercueil-musulman/
│   ├── /demarches-administratives-deces/
│   ├── /marbrerie-pierre-tombale-musulmane/
│   └── /assurance-deces-musulmane/
│
├── /normandie/ (hub géographique principal)
│   ├── /pompes-funebres-musulmanes-rouen/
│   ├── /pompes-funebres-musulmanes-le-havre/
│   ├── /pompes-funebres-musulmanes-caen/
│   ├── /pompes-funebres-musulmanes-dieppe/
│   ├── /pompes-funebres-musulmanes-evreux/
│   ├── /pompes-funebres-musulmanes-cherbourg/
│   ├── /pompes-funebres-musulmanes-alençon/
│   ├── /pompes-funebres-musulmanes-elbeuf/
│   ├── /pompes-funebres-musulmanes-fecamp/
│   ├── /pompes-funebres-musulmanes-saint-etienne-du-rouvray/
│   ├── /pompes-funebres-musulmanes-grand-quevilly/
│   ├── /pompes-funebres-musulmanes-mont-saint-aignan/
│   ├── /pompes-funebres-musulmanes-sotteville-les-rouen/
│   ├── /pompes-funebres-musulmanes-val-de-reuil/
│   ├── /pompes-funebres-musulmanes-louviers/
│   └── /carre-musulman-normandie/
│
├── /paris-ile-de-france/ (hub géographique Paris)
│   ├── /pompes-funebres-musulmanes-paris/
│   ├── /pompes-funebres-musulmanes-paris-18/
│   ├── /pompes-funebres-musulmanes-paris-19/
│   ├── /pompes-funebres-musulmanes-paris-20/
│   ├── /pompes-funebres-musulmanes-93/
│   ├── /pompes-funebres-musulmanes-95/
│   └── /carre-musulman-paris-ile-de-france/
│
├── /guide/ (hub contenu informationnel — moteur de trafic)
│   ├── /doua-deces-islam/
│   ├── /condoleances-islam/
│   ├── /deuil-islam/
│   ├── /salat-janaza-comment-faire/
│   ├── /enterrement-islam-vetement/
│   ├── /kafan-linceul-islam/
│   ├── /lavage-mortuaire-islam/
│   ├── /invocations-cimetiere-islam/
│   ├── /message-condoleances-arabe/
│   ├── /40-jours-islam/
│   ├── /rites-funeraires-islam-etapes/
│   ├── /rapatriement-corps-delai/
│   ├── /prix-obsèques-musulmanes/
│   └── /que-faire-apres-un-deces/
│
└── /contact/
```

**Total : ~45 pages à créer.** Priorité d'exécution détaillée en Partie 5.

---

## PARTIE 3 — CONTENU PAGE PAR PAGE (ultra-détaillé)

### ═══ PAGE D'ACCUEIL (/) ═══

**URL :** `https://votredomaine.fr/`
**Title tag (70 car. max) :** `Pompes Funèbres Musulmanes Al Hayat | Normandie & Paris | 24h/7j`
**Meta description (160 car.) :** `Al Hayat accompagne les familles musulmanes de Normandie et Paris. Toilette rituelle, Salat al-Janaza, rapatriement Algérie/Maroc. Disponibles 24h/24 7j/7. Devis gratuit.`
**H1 :** `Pompes Funèbres Musulmanes Al Hayat — Normandie & Paris`

**Structure de la page (dans l'ordre) :**

1. **Header fixe** — Logo + Numéro de téléphone cliquable + CTA "Urgence décès" en rouge
2. **Hero section**
   - Citation coranique : إِنَّا لِلَّهِ وَإِنَّا إِلَيْهِ رَاجِعُونَ — "Nous appartenons à Allah et c'est vers Lui que nous retournons."
   - Sous-titre : "Al Hayat vous accompagne avec dignité dans les moments les plus difficiles."
   - 2 boutons CTA : "Nous appeler maintenant" (urgence) + "Demander un devis" (formulaire)
3. **Zones d'intervention** — Rouen, Le Havre, Caen, Paris (avec liens vers pages villes)
4. **Nos 6 services** (blocs cliquables avec icône + lien)
   - Toilette rituelle (Ghusl) → /toilette-rituelle-musulmane/
   - Salat al-Janaza → /salat-al-janaza/
   - Inhumation carré musulman → /inhumation-carre-musulman/
   - Rapatriement de corps → /rapatriement-corps/
   - Démarches administratives → /demarches-administratives-deces/
   - Assurance décès → /assurance-deces-musulmane/
5. **Pourquoi Al Hayat** — 4 arguments : Disponibilité 24h/7j / Rites 100% conformes / Prise en charge admin complète / Équipe homme + femme pour la toilette
6. **Chiffres** : Années d'expérience / Pays desservis / Disponibilité 24h/7j
7. **Avis clients Google** (widget GMB ou screenshots)
8. **FAQ rapide** (5 questions, schema FAQ intégré)
9. **Derniers articles du guide** (3 articles en lien)
10. **Footer** : Coordonnées, numéro, zones, liens légaux, habilitation préfectorale

**Mots-clés à placer naturellement dans le texte :**
pompes funèbres musulmanes, pompe funèbre islamique, obsèques musulmanes, enterrement musulman, rites islamiques, Normandie, Paris, Rouen, Le Havre, Caen, toilette rituelle, salat al-janaza, rapatriement, carré musulman, 24h/24, habilitation préfectorale, démarches administratives

**Schema.org à intégrer (JSON-LD dans le `<head>`) :**
```json
{
  "@context": "https://schema.org",
  "@type": "FuneralHome",
  "name": "Al Hayat Pompes Funèbres Musulmanes",
  "url": "https://votredomaine.fr",
  "telephone": "+33XXXXXXXXX",
  "description": "Pompes funèbres musulmanes en Normandie et Paris. Toilette rituelle, Salat al-Janaza, rapatriement de corps, inhumation carré musulman. Disponibles 24h/24.",
  "address": [
    {
      "@type": "PostalAddress",
      "streetAddress": "VOTRE ADRESSE",
      "addressLocality": "Rouen",
      "postalCode": "76000",
      "addressRegion": "Normandie",
      "addressCountry": "FR"
    }
  ],
  "areaServed": ["Normandie", "Paris", "Île-de-France", "Rouen", "Le Havre", "Caen"],
  "openingHoursSpecification": {
    "@type": "OpeningHoursSpecification",
    "dayOfWeek": ["Monday","Tuesday","Wednesday","Thursday","Friday","Saturday","Sunday"],
    "opens": "00:00",
    "closes": "23:59"
  },
  "availableLanguage": ["French", "Arabic"],
  "priceRange": "€€",
  "aggregateRating": {
    "@type": "AggregateRating",
    "ratingValue": "5",
    "reviewCount": "XX"
  }
}
```

---

### ═══ PAGES GÉOGRAPHIQUES NORMANDIE ═══

#### /pompes-funebres-musulmanes-rouen/

**Title :** `Pompes Funèbres Musulmanes Rouen (76) — Al Hayat | Urgence 24h/7j`
**Meta :** `Pompes funèbres musulmanes à Rouen. Toilette rituelle, Salat Janaza, carré musulman, rapatriement Algérie/Maroc. Al Hayat, disponible 24h/24 dans tout le 76.`
**H1 :** `Pompes Funèbres Musulmanes à Rouen (76)`

**Structure :**
- H2 : Nos services funéraires musulmans à Rouen et en Seine-Maritime
  - Liste des services avec description courte (toilette, prière, enterrement, rapatriement)
- H2 : Inhumation dans un carré musulman à Rouen
  - Indiquer le(s) cimetière(s) de Rouen avec carrés musulmans (ex: cimetière monumental de Rouen, Bonsecours...)
  - Expliquer comment obtenir une concession
- H2 : Rapatriement de corps depuis Rouen
  - Algérie, Maroc, Tunisie, Mali, Sénégal
  - Délais (48-72h en général)
  - Mention du fonds solidarité algérien
- H2 : Zones desservies depuis Rouen
  - Sotteville-lès-Rouen, Grand-Quevilly, Petit-Quevilly, Mont-Saint-Aignan, Bois-Guillaume, Déville-lès-Rouen, Maromme, Elbeuf, Louviers, Val-de-Reuil
- H2 : Pourquoi choisir Al Hayat à Rouen ?
  - Disponibilité 24h, habilitation préfectorale, équipe qualifiée, prise en charge complète
- H2 : Nous contacter à Rouen
  - Formulaire de contact + numéro cliquable

**Mots-clés cibles (à répéter naturellement, 8-12 fois minimum pour les principaux) :**
- pompes funèbres musulmanes Rouen (8x minimum)
- pompe funèbre musulmane 76 (4x)
- enterrement musulman Rouen (4x)
- toilette rituelle Rouen (3x)
- salat janaza Rouen (3x)
- carré musulman Rouen (4x)
- rapatriement corps Rouen (3x)
- obsèques musulmanes Seine-Maritime (3x)
- obsèques islamiques Rouen (3x)
- inhumation musulmane Rouen (3x)
- janaza Rouen (3x)

**Schema Local :**
```json
{
  "@type": "FuneralHome",
  "name": "Al Hayat Pompes Funèbres Musulmanes Rouen",
  "address": {"addressLocality": "Rouen", "postalCode": "76000"},
  "areaServed": "Rouen"
}
```

---

#### /pompes-funebres-musulmanes-le-havre/

**Title :** `Pompes Funèbres Musulmanes Le Havre (76) — Al Hayat | 24h/7j`
**Meta :** `Pompes funèbres musulmanes au Havre. Rites islamiques respectés, rapatriement Algérie/Maroc, toilette rituelle. Al Hayat, disponible 24h/24 dans tout le Havre et le pays de Caux.`
**H1 :** `Pompes Funèbres Musulmanes au Havre (76)`

**H2 à inclure :**
- Nos services funéraires islamiques au Havre
- Carré musulman au Havre — où inhumer ?
- Rapatriement de corps depuis Le Havre
- Zones couvertes : Harfleur, Montivilliers, Gonfreville-l'Orcher, Sainte-Adresse, Fécamp, Lillebonne
- Pourquoi nous choisir au Havre
- Nous contacter

**Mots-clés :** pompes funèbres musulmanes Le Havre, pompe funèbre islamique Havre, enterrement musulman Le Havre, carré musulman Le Havre, rapatriement corps Le Havre, obsèques musulmanes Havre, salat janaza Havre, toilette rituelle Le Havre, pompe funèbre 76 Le Havre

---

#### /pompes-funebres-musulmanes-caen/

**Title :** `Pompes Funèbres Musulmanes Caen (14) — Al Hayat`
**Meta :** `Pompes funèbres musulmanes à Caen et dans le Calvados. Toilette rituelle, Salat Janaza, rapatriement. Al Hayat intervient dans tout le 14. Disponible 24h/24.`
**H1 :** `Pompes Funèbres Musulmanes à Caen (14)`

**H2 :**
- Services funéraires musulmans à Caen
- Carré musulman à Caen
- Rapatriement depuis Caen
- Zones : Hérouville-Saint-Clair, Mondeville, Colombelles, Lisieux, Bayeux, Argentan
- Nous contacter à Caen

**Mots-clés :** pompes funèbres musulmanes Caen, pompe funèbre islamique Caen, enterrement musulman Caen, pompe funèbre musulmane 14, obsèques islamiques Calvados, carré musulman Caen, rapatriement corps Caen, salat janaza Caen

---

#### /pompes-funebres-musulmanes-dieppe/

**Title :** `Pompes Funèbres Musulmanes Dieppe (76) — Al Hayat`
**Meta :** `Pompes funèbres musulmanes à Dieppe et dans la Côte d'Albâtre. Rites islamiques, rapatriement, toilette rituelle. Al Hayat disponible 24h/24.`
**H1 :** `Pompes Funèbres Musulmanes à Dieppe et dans le Pays Dieppois`
**Mots-clés :** pompes funèbres musulmanes Dieppe, enterrement musulman Dieppe, pompe funèbre 76 Dieppe, obsèques islamiques Dieppe

---

#### /pompes-funebres-musulmanes-evreux/

**Title :** `Pompes Funèbres Musulmanes Évreux (27) — Al Hayat`
**Meta :** `Pompes funèbres musulmanes à Évreux et dans l'Eure. Rites islamiques, toilette rituelle, rapatriement. Al Hayat disponible 24h/7j dans tout le 27.`
**H1 :** `Pompes Funèbres Musulmanes à Évreux (27) et dans l'Eure`
**Mots-clés :** pompes funèbres musulmanes Évreux, pompe funèbre islamique Eure, enterrement musulman Évreux, pompe funèbre musulmane 27, obsèques islamiques Évreux, Val-de-Reuil obsèques musulmanes, Vernon obsèques musulmanes

---

#### /pompes-funebres-musulmanes-cherbourg/

**Title :** `Pompes Funèbres Musulmanes Cherbourg (50) — Al Hayat`
**Mots-clés :** pompes funèbres musulmanes Cherbourg, pompe funèbre islamique Manche, enterrement musulman Cherbourg, obsèques islamiques 50

---

#### /normandie/ (Hub régional)

**Title :** `Pompes Funèbres Musulmanes en Normandie — Al Hayat | Rouen, Le Havre, Caen`
**Meta :** `Al Hayat, pompes funèbres musulmanes dans toute la Normandie. Rouen, Le Havre, Caen, Dieppe, Évreux. Toilette rituelle, rapatriement, carré musulman. 24h/7j.`
**H1 :** `Pompes Funèbres Musulmanes en Normandie`

**H2 :**
- Nos agences et zones d'intervention en Normandie
- Les rites funéraires islamiques respectés en Normandie
- Rapatriement de corps depuis la Normandie
- Inhumation dans un carré musulman en Normandie
- Contactez-nous pour tout le territoire normand

**Liens internes obligatoires :** Vers toutes les pages villes de Normandie (maillage hub → spoke)

---

#### /carre-musulman-normandie/

**Title :** `Carrés Musulmans en Normandie : Rouen, Le Havre, Caen — Guide Complet`
**Meta :** `Où se trouvent les carrés musulmans en Normandie ? Rouen, Le Havre, Caen : adresses, conditions, démarches. Guide complet par Al Hayat.`
**H1 :** `Les Carrés Musulmans en Normandie : Où Inhumer ?`

**H2 :**
- Qu'est-ce qu'un carré musulman ?
- Carré musulman à Rouen : adresse et conditions
- Carré musulman au Havre : adresse et conditions
- Carré musulman à Caen
- Autres cimetières avec espaces musulmans en Normandie
- Comment obtenir une concession dans un carré musulman
- L'inhumation islamique en France : règles légales
- Alternatives : le rapatriement vers le pays d'origine

**Mots-clés :** carré musulman Normandie, carré musulman Rouen, carré musulman Le Havre, carré musulman Caen, inhumation musulmane Normandie, enterrement islamique Normandie, concession carré musulman, fosse islamique Normandie

---

### ═══ PAGES GÉOGRAPHIQUES PARIS ═══

#### /pompes-funebres-musulmanes-paris/

**Title :** `Pompes Funèbres Musulmanes Paris — Al Hayat | Toute l'Île-de-France`
**Meta :** `Pompes funèbres musulmanes à Paris et en Île-de-France. Toilette rituelle, Salat Janaza, rapatriement, carré musulman. Al Hayat disponible 24h/24 7j/7.`
**H1 :** `Pompes Funèbres Musulmanes à Paris et en Île-de-France`

**H2 :**
- Nos services funéraires islamiques à Paris
- Carrés musulmans à Paris et en IDF
- Rapatriement de corps depuis Paris
- Nos zones d'intervention en Île-de-France (75, 92, 93, 94, 95)
- Nous contacter à Paris

**Mots-clés :** pompes funèbres musulmanes Paris, pompe funèbre islamique Paris, enterrement musulman Paris, carré musulman Paris, rapatriement corps Paris, obsèques musulmanes IDF, salat janaza Paris, toilette rituelle Paris, pompe funèbre 75

---

### ═══ PAGES SERVICES ═══

#### /toilette-rituelle-musulmane/

**Title :** `Toilette Rituelle Musulmane (Ghusl) — Al Hayat Normandie & Paris`
**Meta :** `La toilette rituelle islamique (Ghusl al-Mayyit) réalisée selon la Sunnah par notre équipe qualifiée. Hommes et femmes. Al Hayat Normandie & Paris.`
**H1 :** `La Toilette Rituelle Musulmane (Ghusl al-Mayyit)`

**Structure complète :**
- H2 : Qu'est-ce que le Ghusl al-Mayyit ?
  - Définition islamique, obligation religieuse (fard kifaya), base dans le Coran et la Sunnah
  - Verset/hadith de référence
- H2 : Les étapes du lavage mortuaire selon la Sunnah
  - Étape 1 : Couvrir les parties intimes
  - Étape 2 : Retirer les impuretés (istinja)
  - Étape 3 : Ablutions (wudhu)
  - Étape 4 : Lavage complet du corps (nombre impair de fois)
  - Étape 5 : Séchage et parfum (camphre)
  - Étape 6 : Mise dans le Kafan (linceul)
- H2 : Qui peut réaliser la toilette rituelle ?
  - Hommes pour un homme / femmes pour une femme
  - Sauf époux/épouse (règles)
  - Notre équipe mixte qualifiée
- H2 : Notre équipe de toiletteurs et toiletteuses
  - Formation, respect des rites, discrétion
- H2 : La toilette rituelle à Rouen, Le Havre, Caen, Paris
  - Intervention dans toute la Normandie et IDF
- H2 : Tarifs et devis gratuit

**Mots-clés :** toilette rituelle musulmane, ghusl mayyit, ghusl al-mayyit, lavage mortuaire islam, toilette mortuaire islamique, purification défunt islam, lavage rituel mort islam, ghusl mort, toiletteur musulman, lavement corps islam

---

#### /salat-al-janaza/

**Title :** `Salat al-Janaza — Organisation de la Prière Funèbre Musulmane`
**Meta :** `Nous organisons la Salat al-Janaza (prière funèbre) avec l'imam et la mosquée de votre choix. Rouen, Le Havre, Caen, Paris. Al Hayat.`
**H1 :** `La Salat al-Janaza : Prière Funèbre Islamique`

**Structure :**
- H2 : Qu'est-ce que la Salat al-Janaza ?
  - Obligation collective (fard kifaya), signification spirituelle
- H2 : Les étapes de la Salat al-Janaza
  - 1er Takbir : Al-Fatiha
  - 2e Takbir : Salawat sur le Prophète ﷺ
  - 3e Takbir : Doua pour le défunt
  - 4e Takbir : Salam final
- H2 : Comment nous organisons la Salat al-Janaza
  - Coordination avec l'imam
  - Salle de prière ou mosquée
  - Transport jusqu'à la mosquée
- H2 : Où organiser la prière à Rouen, Le Havre, Caen, Paris ?
  - Mentionner les grandes mosquées de chaque ville
- H2 : Doua récitée pendant la Salat al-Janaza (en arabe + phonétique + traduction)

**Mots-clés :** salat al janaza, salat janaza, prière funèbre musulmane, janaza islam, prière mortuaire islam, prière du mort islam, comment faire salat janaza, takbir janaza, janaza Rouen, janaza Normandie, prière funèbre Rouen

---

#### /inhumation-carre-musulman/

**Title :** `Inhumation dans un Carré Musulman — Al Hayat Normandie & Paris`
**Meta :** `Organisation de l'inhumation selon les rites islamiques dans un carré musulman. Orientation vers La Mecque, fosse, linceul. Al Hayat, Normandie et Paris.`
**H1 :** `Inhumation Islamique dans un Carré Musulman`

**Structure :**
- H2 : Les règles de l'inhumation selon l'Islam
  - Rapidité (avant 24h idéalement, avant 6 jours légalement en France)
  - Orientation vers La Mecque (qibla)
  - Corps posé sur le côté droit
  - Cercueil obligatoire en France (règle légale)
- H2 : Qu'est-ce qu'un carré musulman ?
  - Espace réservé dans les cimetières municipaux français
  - Il en existe environ 70 en France
- H2 : Comment obtenir une place dans un carré musulman
  - Démarches auprès de la mairie / cimetière
  - Concession, tarifs, durée
- H2 : L'inhumation en Normandie
  - Carrés disponibles à Rouen, Le Havre, Caen
- H2 : L'inhumation en Île-de-France
  - Bobigny, Joncherolles, et autres
- H2 : Nous nous occupons de tout

**Mots-clés :** inhumation islamique, carré musulman France, enterrement islamique, inhumation rite musulman, concession carré musulman, fosse islamique, enterrement selon islam, inhumation musulmane délai, cercueil muslim

---

#### /rapatriement-corps/

**Title :** `Rapatriement de Corps — Pompes Funèbres Musulmanes Al Hayat`
**Meta :** `Service de rapatriement de corps depuis la Normandie et Paris. Algérie, Maroc, Tunisie, Mali, Sénégal, Pakistan. Démarches complètes prises en charge. Al Hayat.`
**H1 :** `Rapatriement de Corps : Nos Services Complets`

**Structure :**
- H2 : Qu'est-ce que le rapatriement funéraire ?
- H2 : Pourquoi les familles musulmanes choisissent le rapatriement
  - Traditions, racines, maqbara (cimetière du pays d'origine)
- H2 : Notre processus de rapatriement en 8 étapes
  1. Prise en charge du défunt
  2. Toilette rituelle
  3. Mise en bière (cercueil hermétique)
  4. Obtention des documents (décès, non-contagion, transit)
  5. Coordination avec le consulat
  6. Transport vers l'aéroport
  7. Vol vers le pays de destination
  8. Réception par la famille locale
- H2 : Délais habituels (48-72h selon le pays)
- H2 : Destinations desservies (Algérie, Maroc, Tunisie, Mali, Sénégal, Guinée, Pakistan, Bangladesh, Mauritanie, Comores...)
- H2 : Coût du rapatriement et assurances
- H2 : Depuis la Normandie et Paris

**Mots-clés :** rapatriement corps, rapatriement funéraire, rapatriement défunt, transfert corps étranger, rapatriement corps France, pompes funèbres rapatriement, rapatriement musulman

---

#### /rapatriement-corps-algerie/

**Title :** `Rapatriement de Corps en Algérie — Al Hayat Normandie & Paris`
**Meta :** `Rapatriement de corps en Algérie depuis la Normandie et Paris. Fonds de solidarité algérien, documents requis, délais. Al Hayat prend tout en charge.`
**H1 :** `Rapatriement de Corps en Algérie`

**Structure :**
- H2 : Les conditions du rapatriement vers l'Algérie
  - Cercueil hermétique zinc/aluminium obligatoire
  - Filtre épurateur conforme IATA
  - Pas de thanatopraxie si délai < 7 jours
- H2 : Documents nécessaires
  - Certificat de décès médical
  - Acte de décès mairie
  - Autorisation de fermeture de cercueil
  - Autorisation préfectorale de transport
  - Certificat de non-contagion
  - Autorisation d'entrée du territoire algérien
  - Passeport / CNIE du défunt
  - Coordonnées de la famille en Algérie
- H2 : Le fonds de solidarité algérien (prise en charge gratuite)
  - Conditions d'éligibilité
  - Comment en bénéficier
  - Nous vous aidons à monter le dossier
- H2 : Délais depuis la Normandie et Paris
- H2 : Nos partenaires locaux en Algérie
- H2 : Nous contacter pour un rapatriement en urgence

**Mots-clés :** rapatriement corps Algérie, rapatriement corps algérie France, transfert corps Algérie, rapatriement Paris Alger, ambassade France Algérie rapatriement, rapatriement Algérie depuis Normandie, fonds solidarité algérien, décès algérien France démarches, consulat Algérie rapatriement

---

#### /rapatriement-corps-maroc/

**Title :** `Rapatriement de Corps au Maroc — Al Hayat Normandie & Paris`
**Meta :** `Rapatriement de corps au Maroc depuis la Normandie et Paris. Documents, délais, prise en charge. Al Hayat gère toutes les démarches administratives.`
**H1 :** `Rapatriement de Corps au Maroc`

**Structure :**
- H2 : Conditions du rapatriement vers le Maroc
- H2 : Les documents à fournir (liste complète détaillée)
  - Nom, prénom, date/lieu décès, cause décès
  - Filiation complète du défunt
  - Coordonnées famille au Maroc
  - CNIE ou passeport marocain
  - Certificat décès, certificat sanitaire de non-contagion
  - Autorisation sortie territoire
  - Lieu d'inhumation au Maroc
  - Poste frontière d'entrée
  - Justificatif prise en charge financière
- H2 : Prise en charge financière par l'État marocain
  - Conditions (ressources insuffisantes)
  - Pièces justificatives requises
  - Délégation aux services consulaires
- H2 : Souscrire une assurance rapatriement au préalable
- H2 : Délais et organisation

**Mots-clés :** rapatriement corps Maroc, rapatriement marocain, décès au Maroc, consulat Maroc rapatriement corps, rapatriement France Maroc, transfert corps Maroc, Maroc défunt rapatriement, prise en charge Maroc rapatriement

---

#### /rapatriement-corps-tunisie/

**Title :** `Rapatriement de Corps en Tunisie — Al Hayat`
**Meta :** `Rapatriement de corps en Tunisie depuis la France. Démarches, documents, délais. Al Hayat vous accompagne de A à Z.`
**H1 :** `Rapatriement de Corps en Tunisie`
**Mots-clés :** rapatriement corps Tunisie, rapatriement Tunisie France, ambassade Tunisie France rapatriement, transfert corps Tunisie, décès tunisien France, rapatriement Tunis depuis Normandie

---

#### /rapatriement-corps-mali-senegal/

**Title :** `Rapatriement de Corps en Afrique Subsaharienne — Al Hayat`
**H1 :** `Rapatriement de Corps en Afrique : Mali, Sénégal, Guinée, Côte d'Ivoire`
**Mots-clés :** rapatriement corps Mali, rapatriement corps Sénégal, rapatriement corps Guinée, rapatriement corps Côte d'Ivoire, rapatriement Afrique subsaharienne

---

#### /cercueil-musulman/

**Title :** `Cercueil Musulman — Caractéristiques et Mise en Bière Islamique`
**Meta :** `Tout savoir sur le cercueil pour un enterrement musulman en France. Matériaux, sobriété, mise en bière, cercueil hermétique pour rapatriement. Al Hayat.`
**H1 :** `Le Cercueil Musulman : Ce que Dit la Loi et la Tradition`

**Structure :**
- H2 : Le cercueil en Islam : une nécessité légale en France
  - L'inhumation directe en linceul sans cercueil (pratique originelle islamique)
  - L'obligation du cercueil par la loi française (CGCT)
- H2 : Caractéristiques du cercueil islamique
  - Bois naturel (pin ou cèdre), biodégradable
  - Simple et sobre (pas d'ornements)
  - Respectueux de la tradition (pas de signe de richesse)
- H2 : La mise en bière selon l'Islam
  - Étapes : couvrir le visage, tourner le corps côté droit, desserrer les nœuds du linceul
  - Qui peut y participer ? La famille peut aider
- H2 : Le cercueil hermétique pour le rapatriement
  - Cercueil plombé (zinc ou aluminium) + filtre épurateur IATA
  - Épaisseur minimale 22mm
  - Double cercueil (traditionnel + métallique)
- H2 : Nos cercueils chez Al Hayat

**Mots-clés :** cercueil musulman, cercueil islamique, cercueil islam, cercueil inhumation musulmane, cercueil hermétique rapatriement, mise en bière islamique, mise en bière musulmane, cercueil sobriété islam, cercueil bois naturel islam

---

#### /demarches-administratives-deces/

**Title :** `Démarches Administratives après un Décès Musulman — Al Hayat`
**Meta :** `Que faire après un décès ? Déclaration en mairie, acte de décès, autorisation d'inhumer, formalités consulaires. Al Hayat prend tout en charge pour vous.`
**H1 :** `Les Démarches Administratives après un Décès`

**Structure :**
- H2 : Les premières heures après le décès
  - Appeler un médecin pour le certificat de décès
  - Contacter Al Hayat immédiatement
- H2 : La déclaration de décès en mairie
  - Délai (dans les 24h)
  - Documents requis
  - L'acte de décès
- H2 : L'autorisation d'inhumer
  - Délivrée par la mairie
  - Nécessaire avant la fermeture du cercueil
- H2 : L'autorisation de transport de corps
  - En France
  - Vers l'étranger (rapatriement)
- H2 : Le certificat de non-contagion
  - Obligatoire pour le transport aérien
- H2 : Les formalités consulaires
  - En cas de rapatriement
  - Coordination avec l'ambassade ou le consulat
- H2 : Nous prenons tout en charge
  - Liste de ce qu'Al Hayat gère à votre place
- H2 : Documents à préparer de votre côté (liste simple)

**Mots-clés :** démarches administratives décès, que faire après décès, déclaration décès mairie, acte de décès, autorisation d'inhumer, autorisation transport corps, certificat de décès, formalités décès musulman, administratif obsèques islam

---

#### /assurance-deces-musulmane/

**Title :** `Assurance Décès Musulmane & Rapatriement — Al Hayat`
**Meta :** `Préparer ses obsèques et son rapatriement à l'avance. Assurance décès islamique, Sakina Takaful, prévoyance obsèques. Al Hayat vous conseille.`
**H1 :** `Assurance Décès et Prévoyance Obsèques Islamique`

**Structure :**
- H2 : Pourquoi souscrire une assurance décès ?
  - Soulager la famille
  - Garantir le respect de ses volontés
  - Financer le rapatriement si souhaité
- H2 : L'assurance rapatriement
  - Couvre les frais de transfert du corps
  - Indispensable pour les Maghrébins et Africains vivant en France
- H2 : Contrat obsèques en capital vs en prestations
- H2 : Sakina Takaful et autres assurances conformes à l'Islam
- H2 : Comment anticiper avec Al Hayat
  - Enregistrer ses volontés à l'avance

**Mots-clés :** assurance décès musulmane, assurance décès islam, assurance décès islamique, assurance rapatriement corps, prévoyance obsèques musulmane, Sakina Takaful, contrat obsèques islamique, financer obsèques islam, anticiper obsèques musulman

---

### ═══ PAGES GUIDE/INFORMATIONNEL (Moteur de trafic national) ═══

#### /guide/doua-deces-islam/

**Title :** `Doua pour un Mort en Islam — Invocations Complètes (Arabe + Traduction)`
**Meta :** `Toutes les douas pour un défunt : en arabe, phonétique et français. Doua pour le mort, l'entrée au paradis, la miséricorde d'Allah, les proches endeuillés.`
**H1 :** `Doua pour un Mort en Islam : Les Invocations Essentielles`

**Structure ultra-complète (c'est LA page à soigner le plus) :**
- H2 : Qu'est-ce qu'une Doua ?
  - Définition, importance dans l'Islam, quand les réciter
- H2 : Les Douas pour le défunt
  - Doua de base (pardon et miséricorde) — Arabe ✓ Phonétique ✓ Traduction ✓ Explication ✓
  - Doua pour le pardon — Arabe ✓ Phonétique ✓ Traduction ✓
  - Doua de la prière funèbre (complète) — Arabe ✓ Phonétique ✓ Traduction ✓
- H2 : Doua pour l'entrée au Paradis
  - Arabe ✓ Phonétique ✓ Traduction ✓
- H2 : Doua pour la miséricorde d'Allah (la plus longue et connue)
  - Arabe ✓ Phonétique ✓ Traduction ✓ Explication complète ✓
- H2 : Doua pour les proches endeuillés
  - Doua pour la patience — Arabe ✓ Phonétique ✓ Traduction ✓
  - Doua pour la consolation — Arabe ✓ Phonétique ✓ Traduction ✓
- H2 : Douas à réciter au cimetière
  - Invocation en entrant au cimetière
  - Invocation devant la tombe
  - Invocation pour tous les défunts
- H2 : Quand réciter les Douas pour le mort ?
  - À l'annonce du décès / lors de la toilette / pendant la Salat Janaza / à l'enterrement / lors des visites à la tombe / tous les jours
- H2 : Comment faire pour que sa Doua soit exaucée ?
  - Conditions : sincérité, licéité, moments propices (vendredi, soujoud, jeûne...)

**Mots-clés (tous à inclure) :** doua pour un mort, doua pour le mort, invocations pour un mort, invocation pour le mort, doua décès islam, doua défunt, doua mort islam, invocation mort islam, dua pour les morts, doua janaza, doua pour le défunt arabe, invocation défunt islam, doua maghfira défunt, doua islamique pour mort, invocation au cimetière islam

---

#### /guide/condoleances-islam/

**Title :** `Condoléances en Islam : Messages, Prières et Formules Complètes`
**Meta :** `Comment exprimer ses condoléances en Islam ? Prière, messages en arabe et en français, gestes à faire, durée du deuil. Guide complet.`
**H1 :** `Condoléances Musulmanes : Comment les Exprimer ?`

**Structure :**
- H2 : L'importance des condoléances en Islam
  - Obligation morale et spirituelle
  - Durée recommandée pour rendre visite (3 jours)
- H2 : La formule essentielle : Inna Lillahi wa Inna Ilayhi Raji'oun
  - En arabe : إِنَّا لِلَّهِ وَإِنَّا إِلَيْهِ رَاجِعُونَ
  - Phonétique + traduction + contexte coranique
- H2 : La prière de condoléances complète
  - En arabe + phonétique + traduction
- H2 : Messages de condoléances en arabe (10 exemples)
  - Chacun avec : arabe + transcription + traduction + contexte d'usage
- H2 : Messages de condoléances en français pour une famille musulmane
  - 5 exemples naturels, humains, appropriés
- H2 : Ce qu'il faut faire lors des condoléances
  - Rendre visite à la famille
  - Préparer un repas
  - S'abstenir de rires ou divertissements
  - Faire des dons en mémoire du défunt
- H2 : Ce qu'il ne faut PAS faire
  - Expressions inappropriées, comportements à éviter
- H2 : La période de deuil (3 jours et 40 jours)

**Mots-clés :** condoléances islam, condoléance islam, condoleances musulmanes, condoleance musulmane, message condoléances islam, formule condoléances islam, phrase condoléances islam, inna lillahi wa inna ilayhi rajioun, ta'azia islam, condoléances arabe traduction, comment exprimer condoléances musalmane

---

#### /guide/deuil-islam/

**Title :** `Le Deuil en Islam : Durée, Règles, Obligations et Invocations`
**Meta :** `Combien de temps dure le deuil en Islam ? 3 jours, 40 jours, viduité : tout ce qu'il faut savoir. Obligations, invocations, pratiques islamiques du deuil.`
**H1 :** `Le Deuil en Islam : Durée, Règles et Pratiques`

**Mots-clés :** deuil islam, deuil musulman, 40 jours islam, durée deuil islam, règles deuil islam, décès islam, iddah veuvage islam, viduité islam, arbaïn islam, deuil islamique 3 jours, deuil après décès islam, étapes deuil islam

---

#### /guide/enterrement-islam-vetement/

**Title :** `Comment s'Habiller pour un Enterrement Musulman ? Guide Complet 2024`
**Meta :** `Quelle tenue adopter pour un enterrement musulman ? Couleurs, habits appropriés, ce qu'il faut éviter. Guide complet pour hommes et femmes.`
**H1 :** `Comment s'Habiller pour un Enterrement Musulman ?`

**Mots-clés :** enterrement islam vêtement, enterrement islam vetement, comment s'habiller enterrement musulman, tenue enterrement musulman, habits enterrement islamique, code vestimentaire enterrement islam, robe enterrement musulman, tenue deuil islamique

---

#### /guide/salat-janaza-comment-faire/

**Title :** `Comment Faire la Salat Janaza ? Les 4 Takbir Expliqués`
**Meta :** `Guide complet pour faire la Salat al-Janaza : étapes, takbir, douas, règles. Avec les textes en arabe, phonétique et traduction française.`
**H1 :** `Comment Faire la Salat al-Janaza (Prière Funèbre) ?`

**Mots-clés :** salat janaza comment faire, salat al janaza explication, comment faire prière mort islam, takbir janaza, prière funèbre islam étapes, salat janazah règles, prière janaza texte arabe, comment prier pour le mort islam

---

#### /guide/kafan-linceul-islam/

**Title :** `Le Kafan (Linceul) en Islam : Règles, Mise en Place et Signification`
**H1 :** `Le Kafan : Le Linceul Islamique`
**Mots-clés :** kafan islam, linceul musulman, linceul blanc islam, kafan mort islam, enroulement linceul islam, kafan homme femme différence, mise en linceul islamique, habit mort islam

---

#### /guide/40-jours-islam/

**Title :** `Les 40 Jours en Islam après un Décès : Vrai ou Faux ?`
**Meta :** `Que dit l'Islam sur les 40 jours après un décès ? Origine, pratiques, ce que le Coran dit vraiment. Explication complète.`
**H1 :** `Les 40 Jours après un Décès en Islam : Ce qu'il Faut Savoir`
**Mots-clés :** 40 jours islam, 40 jours après décès islam, arbaïn islam, quarantaine deuil islam, deuil 40 jours islam, origine 40 jours deuil, islam 40 jours défunt

---

#### /guide/invocations-cimetiere-islam/

**Title :** `Invocations au Cimetière en Islam : Douas à Réciter Devant une Tombe`
**Meta :** `Que dire lors d'une visite au cimetière en Islam ? Invocations en arabe, phonétique et traduction. Doua en entrant, doua devant la tombe, doua de départ.`
**H1 :** `Invocations à Réciter au Cimetière (Maqbara) en Islam`
**Mots-clés :** invocations cimetière islam, doua cimetière, que dire cimetière islam, doua visite tombe, prière cimetière musulman, invocation tombe islam, doua maqbara, ziyarat maqbara doua

---

#### /guide/message-condoleances-arabe/

**Title :** `20 Messages de Condoléances en Arabe avec Traduction Française`
**Meta :** `Messages de condoléances en arabe : 20 exemples avec traduction en français. Pour WhatsApp, SMS, visite à la famille. Formules authentiques islamiques.`
**H1 :** `Messages de Condoléances en Arabe : 20 Exemples Prêts à Utiliser`
**Mots-clés :** message condoléances arabe, condoléances arabe traduction, formule condoléances arabe français, SMS condoléances arabe, WhatsApp condoléances arabe, condoléances islamiques arabe, ta'azia arabe

---

#### /guide/lavage-mortuaire-islam/

**Title :** `Le Lavage Mortuaire en Islam (Ghusl) : Tout ce qu'il Faut Savoir`
**H1 :** `Le Lavage Mortuaire Islamique (Ghusl al-Mayyit) : Guide Complet`
**Mots-clés :** lavage mortuaire islam, ghusl mort, toilette mortuaire islamique, lavage rituel défunt, purification corps islam, lavage corps mort islam, qui lave le mort islam

---

#### /guide/rites-funeraires-islam-etapes/

**Title :** `Les Rites Funéraires Islamiques : De la Mort à l'Inhumation (Étapes)`
**Meta :** `Toutes les étapes des funérailles musulmanes : annonce du décès, toilette rituelle, linceul, prière Janaza, inhumation. Guide complet.`
**H1 :** `Les Rites Funéraires Islamiques : Étapes Complètes`
**Mots-clés :** rites funéraires islamiques, rites funéraires musulmans, funérailles islamiques étapes, obsèques islamiques tradition, enterrement islamique rituel, cérémonies funèbres islam

---

## PARTIE 4 — SEO ON-PAGE : RÈGLES À RESPECTER SUR CHAQUE PAGE

### 4.1 Structure des balises (obligatoire)

```
1 seul H1 par page — contient le mot-clé principal
H2 — sous-sections majeures (contient les mots-clés secondaires)
H3 — sous-sections mineures (optionnel)
```

### 4.2 Densité de mots-clés

- Mot-clé principal : 1% à 1,5% de densité (ni moins, ni plus)
- Dans le H1 : obligatoirement
- Dans les 100 premiers mots du texte : obligatoirement
- Dans un H2 : au moins une fois
- Dans le dernier paragraphe : recommandé
- Dans l'attribut alt des images : obligatoirement

### 4.3 Longueur de contenu minimale

| Type de page | Longueur minimale |
|---|---|
| Page service | 800 mots |
| Page géographique | 700 mots |
| Page guide/blog | 1 200 mots |
| Doua / condoléances | 1 500 mots (contenu riche en arabe) |
| Page d'accueil | 600 mots |

### 4.4 Images

- Alt texte : `pompes funèbres musulmanes Rouen Al Hayat` (descriptif + mot-clé)
- Nom de fichier : `toilette-rituelle-musulmane.webp` (pas `IMG_123.jpg`)
- Format : WebP obligatoire
- Taille : max 150ko par image
- Au moins 2 images par page de service / guide

### 4.5 Maillage interne (CRITIQUE pour le SEO)

**Règle :** Chaque page doit avoir au moins 3 liens internes entrants ET 3 liens sortants vers d'autres pages du site.

**Liens obligatoires :**
- Toutes les pages géographiques → liens vers les pages services
- Toutes les pages services → liens vers les pages géographiques
- Toutes les pages guide → liens vers les pages services + 1 CTA en bas de page
- La page d'accueil → liens vers toutes les pages majeures

**Texte d'ancre des liens internes :**
```
BON :  <a href="/salat-al-janaza/">salat al-janaza</a>
BON :  <a href="/pompes-funebres-musulmanes-rouen/">pompes funèbres musulmanes Rouen</a>
MAUVAIS : <a href="/salat-al-janaza/">cliquez ici</a>
MAUVAIS : <a href="/salat-al-janaza/">en savoir plus</a>
```

---

## PARTIE 5 — GOOGLE MY BUSINESS (Priorité absolue)

### Fiche 1 — Normandie

**Catégorie principale :** Pompes funèbres
**Catégories secondaires :** Services funèbres, Pompes funèbres islamiques
**Nom :** Al Hayat Pompes Funèbres Musulmanes — Normandie
**Description (750 car.) :**
> Al Hayat accompagne les familles musulmanes de Normandie avec respect et dignité dans les moments les plus difficiles. Basés à [VILLE], nous intervenons dans tout le 76, le 14, le 27 et le 50. Nos services incluent la toilette rituelle (Ghusl al-Mayyit) réalisée par une équipe qualifiée, l'organisation de la Salat al-Janaza avec l'imam de votre choix, l'inhumation dans un carré musulman, et le rapatriement de corps vers l'Algérie, le Maroc, la Tunisie, le Mali, le Sénégal et de nombreuses autres destinations. Nous prenons en charge 100% des démarches administratives. Habilitation préfectorale. Disponibles 24h/24, 7j/7.

**Actions obligatoires sur GMB :**
- Ajouter toutes les photos (équipe, locaux, service si possible)
- Activer le bouton "Appeler" visible
- Renseigner les horaires : 24h/24, 7j/7
- Activer les messages Google
- Ajouter les attributs : "Accessible en fauteuil roulant", "Service disponible 24h", etc.
- Publier 1 post/semaine (article du guide, rappel d'un service, occasion islamique)

**Stratégie d'avis :**
- Demander systématiquement un avis Google à chaque famille servie
- Script SMS à envoyer 2 semaines après les obsèques :
  > "Cher(e) [Prénom], nous espérons que vous allez bien. Si notre accompagnement vous a aidé lors de cette épreuve, un avis Google nous aiderait beaucoup à continuer notre mission. Merci de votre confiance. Al Hayat."
- Répondre à TOUS les avis (positifs et négatifs) dans les 24h

---

## PARTIE 6 — SCHEMA.ORG (Données structurées — à intégrer sur chaque page)

### Schema FAQ (pages guide)
```json
{
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "Combien de temps dure le deuil en Islam ?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Selon le Coran, la durée officielle du deuil est de 3 jours pour les membres de la famille. Pour l'épouse d'un défunt, la période de viduité (iddah) est de 4 mois et 10 jours."
      }
    }
  ]
}
```

### Schema BreadcrumbList (toutes les pages)
```json
{
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  "itemListElement": [
    {"@type": "ListItem", "position": 1, "name": "Accueil", "item": "https://votredomaine.fr/"},
    {"@type": "ListItem", "position": 2, "name": "Normandie", "item": "https://votredomaine.fr/normandie/"},
    {"@type": "ListItem", "position": 3, "name": "Rouen", "item": "https://votredomaine.fr/pompes-funebres-musulmanes-rouen/"}
  ]
}
```

### Schema Article (pages guide)
```json
{
  "@context": "https://schema.org",
  "@type": "Article",
  "headline": "Doua pour un Mort en Islam",
  "datePublished": "2024-01-01",
  "dateModified": "2024-06-01",
  "author": {"@type": "Organization", "name": "Al Hayat Pompes Funèbres Musulmanes"},
  "publisher": {"@type": "Organization", "name": "Al Hayat", "logo": {"@type": "ImageObject", "url": "https://votredomaine.fr/logo.png"}}
}
```

### Schema LocalBusiness (pages géographiques)
```json
{
  "@context": "https://schema.org",
  "@type": "FuneralHome",
  "name": "Al Hayat Pompes Funèbres Musulmanes Rouen",
  "address": {
    "@type": "PostalAddress",
    "addressLocality": "Rouen",
    "postalCode": "76000",
    "addressCountry": "FR"
  },
  "telephone": "+33XXXXXXXXX",
  "openingHours": "Mo-Su 00:00-23:59"
}
```

---

## PARTIE 7 — MOTS-CLÉS COMPILÉS (liste complète classée)

### 🔴 PRIORITÉ 1 — Mots-clés commerciaux locaux Normandie (à dominer en premier)

```
pompes funèbres musulmanes Rouen
pompe funèbre musulmane 76
pompes funèbres musulmanes Le Havre
pompes funèbres musulmanes Caen
pompes funèbres musulmanes Normandie
pompe funèbre islamique Rouen
enterrement musulman Rouen
enterrement islamique Rouen
obsèques islamiques Rouen
obsèques musulmanes Rouen
obsèques muslmanes Seine-Maritime
salat janaza Rouen
salat janaza Normandie
janaza Rouen
toilette rituelle Rouen
toilette rituelle Le Havre
carré musulman Rouen
carré musulman Le Havre
carré musulman Caen
rapatriement corps Rouen
rapatriement corps Le Havre
rapatriement corps Normandie
pompe funèbre musulmane 14 (Caen)
pompe funèbre musulmane 27 (Évreux)
obsèques islamiques Caen
obsèques islamiques Le Havre
enterrement islamique Normandie
inhumation islamique Rouen
inhumation islamique Le Havre
inhumation islamique Caen
pompes funèbres musulmanes Dieppe
pompes funèbres musulmanes Évreux
pompes funèbres musulmanes Cherbourg
pompes funèbres musulmanes Alençon
carré musulman Normandie
```

### 🔴 PRIORITÉ 1 — Mots-clés commerciaux (trafic avec intention achat)

```
pompes funèbres musulmanes
pompe funèbre islamique
obsèques musulmanes
enterrement musulman
rapatriement corps Algérie
rapatriement corps Maroc
rapatriement corps Tunisie
rapatriement marocain
rapatriement algérien
transfert corps étranger
assurance décès musulmane
assurance décès islamique
assurance rapatriement corps
toilette rituelle musulmane
toilette rituelle islamique
ghusl mayyit
pompes funèbres musulmanes Paris
pompes funèbres musulmanes 75
enterrement islamique Paris
carré musulman Paris
carré musulman IDF
obsèques islamiques IDF
```

### 🟠 PRIORITÉ 2 — Mots-clés informationnels à fort volume

```
doua pour un mort
doua pour le mort
invocations pour un mort
invocation pour le mort
doua décès islam
doua défunt
invocation pour les morts islam
condoléances islam
condoléance islam
message condoléances islam
condoleances musulmanes
deuil islam
40 jours islam
40 jours après décès islam
enterrement islam vêtement
enterrement islam vetement
comment s'habiller enterrement musulman
tenue enterrement musulman
salat janaza
salat al janaza
comment faire salat janaza
prière janaza étapes
kafan islam
linceul musulman
lavage mortuaire islam
toilette mortuaire islamique
rites funéraires islamiques
cercueil musulman
démarches administratives décès
que faire après décès
invocations cimetière islam
doua cimetière islam
message condoléances arabe
condoléances arabe traduction
```

### 🟡 PRIORITÉ 3 — Mots-clés longue traîne (moins de volume mais conversion plus forte)

```
pompes funèbres musulmanes pas cher Rouen
pompes funèbres musulmanes urgence Rouen
enterrement musulman 24h Normandie
rapatriement corps Algérie depuis Rouen
rapatriement corps Maroc depuis Normandie
doua pour un mort en arabe avec traduction
message condoléances islam whatsapp
salat janaza étapes arabe phonétique français
comment faire ghusl mort femme
doua après enterrement
invocation en entrant au cimetière islam
que dire lors décès musulman
carré musulman cimetière Rouen adresse
combien coûte rapatriement Algérie depuis France
assurance décès islamique halal
démarches administratives rapatriement Algérie
fonds solidarité algérien rapatriement
consulat Algérie rapatriement corps France
délai inhumation islam France
```

---

## PARTIE 8 — STRATÉGIE DE CONTENU MENSUELLE

### Mois 1 — Fondations (SPRINT)
**Semaine 1 :** Technique
- Installation WordPress + plugins SEO
- Configuration domaine, SSL, vitesse
- Google Search Console + Analytics
- Google My Business Normandie créé et optimisé

**Semaine 2 :** Pages géographiques urgentes
- Page Rouen (priorité absolue)
- Page Le Havre
- Page Caen
- Hub /normandie/

**Semaine 3 :** Pages services clés
- Toilette rituelle
- Salat al-Janaza
- Rapatriement corps (hub)
- Rapatriement Algérie
- Rapatriement Maroc

**Semaine 4 :** Contenu informationnel trafic rapide
- Doua pour un mort (LA page flagship)
- Condoléances islam

---

### Mois 2 — Expansion
- Page d'accueil finalisée et optimisée
- Pages : deuil islam, 40 jours islam, enterrement islam vêtement
- Pages : Évreux, Dieppe, hub Normandie géographique complet
- Schema.org intégré sur toutes les pages existantes
- Carré musulman Normandie
- Démarches administratives, Cercueil musulman, Assurance décès

---

### Mois 3 — Consolidation + Paris
- Pages guide : salat janaza comment faire, kafan, lavage mortuaire
- Pages Paris : hub IDF + Paris arrondissements (18e, 19e, 20e — forte population musulmane)
- Pages : rapatriement Tunisie, Mali/Sénégal
- Invocations cimetière, message condoléances arabe

---

### Mois 4-6 — Domination longue traîne + backlinks
- Nouvelles pages villes (Alençon, Cherbourg, Fécamp, Elbeuf, Louviers...)
- Articles blog complémentaires (1 par semaine)
- Acquisition de backlinks :
  - Associations musulmanes de Normandie
  - Mosquées (leur proposer un partenariat, être listé sur leur site)
  - Annuaires funéraires
  - Presses locales (communiqué de presse)
  - Pages Jaunes, Yelp, Trustpilot

---

## PARTIE 9 — BACKLINKS : STRATÉGIE D'ACQUISITION

**Objectif :** Atteindre 20-30 backlinks de qualité en 6 mois.

### Sources à cibler (par ordre de priorité) :

1. **Mosquées de Normandie** — demander un listing / partenariat sur leur site
   - Grande Mosquée de Rouen
   - Mosquées de Le Havre
   - Mosquées de Caen
   
2. **Associations culturelles musulmanes** — Demander à être référencé comme prestataire de confiance
   - Associations maghrébines de Seine-Maritime
   - UOIF / EMF locaux

3. **Annuaires funéraires** (backlinks faciles)
   - Pages Jaunes (gratuit)
   - Yelp (gratuit)
   - Obseques-infos.com
   - Comitam-obseques.com
   - Mappy
   - 118000 / 118218

4. **Presse locale Normandie**
   - Paris Normandie
   - Actu.fr Normandie
   - Communiqué de presse lors de l'ouverture

5. **Annuaires islamiques**
   - Saphirnews.com (article ou listing)
   - Oumma.com
   - Islam.fr (guide des mosquées)

6. **Sites institutionnels**
   - Mairies de Rouen, Le Havre, Caen (certaines ont une page "services" avec listings)

---

## PARTIE 10 — TABLEAU DE BORD — INDICATEURS DE SUCCÈS

### KPIs à suivre chaque semaine dans Google Search Console

| KPI | Cible mois 3 | Cible mois 6 |
|---|---|---|
| Pages indexées | 25+ | 45+ |
| Positions totales | 100+ | 400+ |
| Clics organiques/mois | 200+ | 800+ |
| Position moy. "pompes funèbres musulmanes Rouen" | Top 5 | Top 3 |
| Position moy. "doua pour un mort" | Top 5 | Top 3 |
| Avis Google (Normandie) | 10+ | 25+ |

### Actions hebdomadaires obligatoires

- [ ] Vérifier Google Search Console : erreurs d'indexation ?
- [ ] Vérifier PageSpeed : score > 80 sur mobile ?
- [ ] Publier 1 post Google My Business
- [ ] Vérifier les avis + répondre sous 24h
- [ ] 1 nouveau contenu (page ou article)

---

## ANNEXE — CHECKLIST PAGE PAR PAGE (à cocher avant publication)

Pour chaque page créée, vérifier :

- [ ] Title tag : mot-clé principal + nom de marque, max 70 caractères
- [ ] Meta description : mot-clé + CTA, max 160 caractères
- [ ] H1 unique contenant le mot-clé principal
- [ ] Mot-clé dans les 100 premiers mots du texte
- [ ] Au moins 3 H2 avec mots-clés secondaires
- [ ] Contenu > 700 mots (pages service) ou > 1 200 mots (guide)
- [ ] Au moins 2 images avec alt text optimisé
- [ ] 3 liens internes entrants (autres pages → cette page)
- [ ] 3 liens internes sortants (cette page → autres pages)
- [ ] URL courte et lisible contenant le mot-clé
- [ ] Schema.org approprié intégré (JSON-LD)
- [ ] Fil d'Ariane (breadcrumb) visible
- [ ] Numéro de téléphone cliquable (tel: link)
- [ ] CTA visible (bouton appel ou formulaire)
- [ ] Page soumise dans Google Search Console après publication

---

*Plan rédigé sur la base du scrapping et de l'analyse de 14 concurrents directs : Al Janaza, Erradja Funéraires, El Malek, En-Nour, Manzil Assistance, El Ouadjib, Obsèques Nour, Al Adab, Kitab wa Sunna, PFM Amana, Orient Funéraire, El Imded, PFM Service, Pompes Funèbres Salam.*

*Analyse réalisée par Claude pour Al Hayat Pompes Funèbres Musulmanes.*
