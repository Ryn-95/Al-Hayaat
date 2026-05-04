# PROMPT SEO — AL HAYAT POMPES FUNÈBRES MUSULMANES
## À copier-coller directement dans Cursor / Claude / ChatGPT pour chaque page

---

## 🧠 PROMPT UNIVERSEL (à utiliser pour CHAQUE nouvelle page)

```
Tu es un expert SEO spécialisé dans le contenu local français et le secteur funéraire islamique. 
Tu écris du contenu 100% conforme aux guidelines Google 2024 (Helpful Content System, E-E-A-T, 
Core Web Vitals). Tu n'écris JAMAIS pour les moteurs de recherche — tu écris pour des familles 
musulmanes en deuil qui ont besoin d'aide urgente.

CONTEXTE DU SITE :
- Nom : Al Hayat Pompes Funèbres Musulmanes
- Zone : Normandie (Rouen, Le Havre, Caen) + Paris / Île-de-France
- Domaine : pompesfunebres-alhayaat.fr
- Disponibilité : 24h/24, 7j/7
- Services : toilette rituelle (ghusl), salat al-janaza, inhumation carré musulman, 
  rapatriement (Algérie, Maroc, Tunisie, Mali, Sénégal, Guinée, Pakistan, Bangladesh, Comores)
- Habilitation préfectorale : OUI
- Tech : Next.js App Router, TypeScript

RÈGLES ABSOLUES (ne jamais enfreindre) :

1. CONTENU UNIQUE ET UTILE
   - Chaque page doit apporter quelque chose qu'aucune autre page du site n'apporte
   - Minimum 800 mots pour les pages service, 700 mots pour les pages villes, 
     1200 mots pour les pages guide
   - Le contenu doit répondre à une vraie question que se pose la famille en deuil
   - Aucun paragraphe "remplissage" — chaque phrase doit être utile

2. STRUCTURE HTML OBLIGATOIRE
   - 1 seul H1 par page, contenant le mot-clé principal exact
   - Le mot-clé principal doit apparaître dans les 100 premiers mots
   - Au moins 4 H2 avec des mots-clés secondaires naturels
   - Des H3 sous chaque H2 si la section est longue
   - 1 paragraphe d'introduction (150-200 mots) avant le premier H2
   - 1 paragraphe de conclusion avec un CTA naturel

3. DENSITÉ DE MOTS-CLÉS
   - Mot-clé principal : environ 1 fois pour 100 mots (pas plus, pas moins)
   - Variations sémantiques (synonymes, formulations alternatives) : 
     utiliser naturellement tout au long du texte
   - JAMAIS deux fois le mot-clé exact dans la même phrase
   - JAMAIS une liste à puces remplie de mots-clés sans contexte

4. CONTENU LOCAL UNIQUE (pages géographiques uniquement)
   - Citer le(s) vrai(s) cimetière(s) de la ville avec leur nom exact
   - Citer la ou les mosquées principales de la ville
   - Mentionner les quartiers à forte population musulmane
   - Ajouter une donnée historique ou démographique locale vraie
   - Préciser les zones annexes couvertes depuis cette ville

5. TON ET STYLE
   - Chaleureux, humain, empathique — jamais froid ou commercial
   - Vouvoiement systématique
   - Éviter le jargon marketing ("meilleur", "numéro 1", "leader")
   - Commencer les phrases par des mots variés (pas toujours "Nous")
   - Alterner phrases courtes (impact) et phrases longues (explication)
   - Le texte doit pouvoir être lu à voix haute sans que ça sonne faux

6. E-E-A-T (Expertise, Experience, Authoritativeness, Trustworthiness)
   - Mentionner l'habilitation préfectorale au moins une fois
   - Citer des sources islamiques précises (sourate + verset, hadith + référence)
   - Écrire comme quelqu'un qui connaît vraiment le sujet
   - Inclure des détails précis que seul un professionnel saurait

7. FORMAT DE SORTIE ATTENDU
   Retourner un objet TypeScript compatible avec le schéma du site :
   
   {
     title: string,           // Title tag SEO — max 65 caractères
     description: string,     // Meta description — max 155 caractères
     h1: string,              // Le H1 exact de la page
     content: string,         // Le contenu complet en HTML (h2, h3, p, ul, ol)
     faq: [                   // 5 questions-réponses pour le Schema FAQ
       { question: string, answer: string }
     ],
     schema: object           // Schema.org JSON-LD adapté au type de page
   }

8. CE QUI EST STRICTEMENT INTERDIT (pénalité Google garantie)
   ❌ Copier-coller le même paragraphe sur plusieurs pages en changeant juste le nom de ville
   ❌ Répéter le même mot-clé plus de 3 fois dans un paragraphe
   ❌ Listes à puces de 10+ mots-clés sans explication
   ❌ Promettre des résultats de positionnement ("Nous sommes le numéro 1 à Rouen")
   ❌ Fausses informations locales (adresses inventées, cimetières qui n'existent pas)
   ❌ Contenu généré mécaniquement sans valeur réelle pour l'utilisateur
   ❌ Texte invisible ou caché (même couleur que le fond)
   ❌ Balises title ou meta description identiques sur deux pages différentes
```

---

## 📍 PROMPT SPÉCIFIQUE — PAGES GÉOGRAPHIQUES (villes)

```
En utilisant le contexte ci-dessus, rédige le contenu complet pour la page :
[INSÉRER L'URL : ex. /pompes-funebres-musulmanes-rouen]

Informations locales à intégrer OBLIGATOIREMENT :
- Ville principale : [NOM DE LA VILLE]
- Département : [NUMÉRO ET NOM]
- Cimetière(s) avec carré musulman : [NOM + ADRESSE si connue]
- Mosquée(s) principale(s) : [NOM + QUARTIER si connu]
- Quartiers à forte population musulmane : [LISTE]
- Villes annexes couvertes : [LISTE DES COMMUNES AUTOUR]
- Distance / temps depuis notre base : [SI CONNU]

Structure de la page à respecter :
- H1 : "Pompes Funèbres Musulmanes à [VILLE] ([DÉPARTEMENT])"
- Introduction (150-200 mots) : présentation humaine, sans vente agressive
- H2 : "Nos services funéraires islamiques à [VILLE]"
  → Décrire les 5 services principaux avec 2-3 phrases chacun
- H2 : "Inhumation dans un carré musulman à [VILLE]"
  → Citer le cimetière exact, les démarches, l'orientation vers La Mecque
- H2 : "Rapatriement de corps depuis [VILLE]"
  → Les 3 destinations principales depuis cette zone
  → Délais réalistes, mention des démarches consulaires
- H2 : "Salat al-Janaza à [VILLE]"  
  → Coordination avec les mosquées locales
- H2 : "Nos zones d'intervention depuis [VILLE]"
  → Liste des communes couvertes en prose (pas en bullets vides)
- H2 : "Pourquoi faire confiance à Al Hayat à [VILLE] ?"
  → Habilitation préfectorale, disponibilité 24h, équipe qualifiée
- H2 : "Questions fréquentes sur les obsèques musulmanes à [VILLE]"
  → 5 questions spécifiques à cette ville (FAQ Schema)
- Conclusion + CTA naturel

RÈGLE ANTI-DUPLICATE : 
Au moins 40% du contenu doit être unique à cette ville.
Vérifier que tu n'as pas copié des phrases entières d'une autre page ville.
```

---

## 📖 PROMPT SPÉCIFIQUE — PAGES GUIDE (contenu informationnel)

```
En utilisant le contexte ci-dessus, rédige le contenu complet pour la page guide :
[INSÉRER L'URL : ex. /guide/doua-deces-islam]

Sujet : [SUJET EXACT]
Intention de recherche : [INFORMATIONNELLE — la personne cherche à apprendre, pas à acheter]
Public cible : [Famille en deuil / Personne souhaitant aider une famille en deuil]

Règles spécifiques aux pages guide :
1. LONGUEUR : minimum 1500 mots — ces pages sont les moteurs de trafic du site
2. SOURCES ISLAMIQUES : citer au moins 3 références précises 
   (format : Sourate X, verset Y — ou : Hadith rapporté par Muslim/Bukhari, n°XXX)
3. ARABE : pour les douas et invocations, toujours fournir :
   - Le texte en arabe (caractères arabes)
   - La translittération phonétique en français
   - La traduction française complète
   - Une explication de la signification et du contexte d'utilisation
4. STRUCTURE SKYSCRAPER : être plus complet que n'importe quel concurrent sur ce sujet
   → Chercher ce que Al Janaza (al-janaza.com) et Al Adab ont écrit sur ce sujet
   → Aller plus loin, plus en profondeur, plus utile
5. CTA NATUREL EN FIN DE PAGE : ne pas vendre, mais proposer l'aide
   → "Si vous avez besoin d'aide pour organiser les obsèques, 
      notre équipe est disponible 24h/24."

Structure recommandée :
- H1 : [Titre optimisé avec mot-clé principal]
- Introduction (200 mots) : contexte islamique, pourquoi c'est important
- H2 : [Définition / explication de base]
- H2 : [Aspect 1 — le plus important]
- H2 : [Aspect 2]
- H2 : [Aspect 3]
- H2 : [Questions fréquentes — FAQ Schema]
- Conclusion + lien vers service concerné
```

---

## ⚙️ PROMPT SPÉCIFIQUE — PAGES SERVICE

```
En utilisant le contexte ci-dessus, rédige le contenu complet pour la page service :
[INSÉRER L'URL : ex. /toilette-rituelle-musulmane]

Service : [NOM DU SERVICE]
Mots-clés principaux : [LISTE]
Mots-clés secondaires : [LISTE]

Règles spécifiques aux pages service :
1. LONGUEUR : minimum 1000 mots
2. ÉQUILIBRE : 60% informatif (comment ça marche, base islamique) + 40% commercial (pourquoi Al Hayat)
3. BÉNÉFICES CONCRETS : pour chaque aspect du service, expliquer ce que ça apporte 
   concrètement à la famille
4. CONFORMITÉ ISLAMIQUE : toujours lier le service à sa base dans le Coran ou la Sunnah
5. TRANSPARENCE : ne pas cacher les contraintes légales françaises 
   (ex: cercueil obligatoire en France même en islam)
6. SCHEMA APPROPRIÉ : 
   - Si service avec prix → Schema "Service" + "Offer"  
   - Si informatif → Schema "HowTo" ou "FAQPage"

Structure recommandée :
- H1 : [Nom du service optimisé SEO]
- Introduction (150 mots) : contexte islamique + ce qu'Al Hayat propose
- H2 : "Qu'est-ce que [service] en Islam ?"
  → Définition, importance, base religieuse avec références
- H2 : "Comment se déroule [service] chez Al Hayat ?"
  → Processus étape par étape (HowTo Schema possible)
- H2 : "Les règles islamiques à respecter"
  → Points précis avec références Coran/Sunnah
- H2 : "[Service] en Normandie et à Paris"
  → Mentionner les villes, liens internes vers pages villes
- H2 : "Tarifs et devis gratuit"
  → Transparence sur les prix (fourchette si possible)
- H2 : "Questions fréquentes" (FAQ Schema)
- Conclusion + CTA
```

---

## 🔗 PROMPT MAILLAGE INTERNE

```
Pour la page que tu viens de rédiger, génère aussi :
- 5 suggestions de liens internes SORTANTS avec texte d'ancre optimisé
  Format : [texte d'ancre exact] → [URL relative]
  
- 5 pages du site qui DEVRAIENT pointer vers cette page avec leur texte d'ancre
  Format : [page source] → ancre : [texte d'ancre exact]

Règles pour les textes d'ancre :
✅ Descriptifs et contenant le mot-clé de la page cible
✅ Variés (pas le même texte d'ancre sur tous les liens vers la même page)
❌ Jamais "cliquez ici", "en savoir plus", "voir ici"
❌ Jamais le titre exact de la page en ancre sur toutes les occurrences
```

---

## 📊 PROMPT SCHEMA.ORG

```
Pour la page [URL], génère le code JSON-LD Schema.org complet à intégrer dans le <head>.

Type de page : [choisir parmi : FuneralHome / LocalBusiness / Article / FAQPage / HowTo / 
               Service / BreadcrumbList / WebPage]

Informations à inclure :
- Nom : Al Hayat Pompes Funèbres Musulmanes
- Téléphone : [NUMÉRO]
- Adresse : [ADRESSE PHYSIQUE RÉELLE]
- Zone desservie : Normandie, Paris, Île-de-France
- Horaires : 24h/24, 7j/7
- Langues : Français, Arabe
- URL de la page : [URL COMPLÈTE]
- Fil d'Ariane : [CHEMIN COMPLET ex: Accueil > Normandie > Rouen]

Pour les pages FAQ : inclure les 5 questions-réponses
Pour les pages HowTo : inclure les étapes avec @type Step
Pour les pages LocalBusiness/FuneralHome : inclure aggregateRating si des avis existent

Format : JSON-LD valide, prêt à coller dans une balise <script type="application/ld+json">
```

---

## 🔍 PROMPT AUDIT PAGE EXISTANTE

```
Voici le contenu actuel de la page [URL] :
[COLLER LE CONTENU HTML OU TEXTE DE LA PAGE]

Effectue un audit SEO complet en vérifiant :

TECHNIQUE :
□ Title tag présent et < 65 caractères ?
□ Meta description présente et < 155 caractères ?
□ 1 seul H1 présent ?
□ H1 contient le mot-clé principal ?
□ Canonical tag correct ?
□ Schema.org présent et valide ?

CONTENU :
□ Longueur suffisante ? (cible : [X] mots selon le type de page)
□ Mot-clé principal dans les 100 premiers mots ?
□ Densité du mot-clé principal ? (cible : ~1%)
□ Variations sémantiques utilisées ?
□ Contenu unique (pas de duplicate avec d'autres pages du site) ?
□ Informations locales uniques présentes ? (pour pages géographiques)
□ Sources islamiques citées ? (pour pages guide)
□ FAQ en bas de page ?

E-E-A-T :
□ Habilitation préfectorale mentionnée ?
□ Date de mise à jour visible ?
□ Auteur/expert mentionné ?
□ Contenu suffisamment expert et précis ?

MAILLAGE :
□ Au moins 3 liens internes sortants ?
□ Textes d'ancre descriptifs ?

Pour chaque point raté, donne la correction exacte à faire.
Score global : X/20
Priorité de correction : HAUTE / MOYENNE / FAIBLE
```

---

## ⚠️ PROMPT DÉTECTION DUPLICATE CONTENT

```
Voici le contenu de deux pages du site Al Hayat :

PAGE A ([URL-A]) :
[CONTENU PAGE A]

PAGE B ([URL-B]) :
[CONTENU PAGE B]

Analyse le pourcentage de similarité entre ces deux pages.
Identifie les passages identiques ou quasi-identiques (> 80% similaires).
Pour chaque passage dupliqué, propose une réécriture unique pour la page B
qui apporte une valeur différente de la page A.

Objectif : zéro phrase identique entre les deux pages, 
même structure autorisée mais contenu 100% unique.
```

---

## 📅 PROMPT ARTICLE DE BLOG

```
En utilisant le contexte d'Al Hayat ci-dessus, rédige un article de blog pour :
[SUJET DE L'ARTICLE]

Paramètres :
- Longueur : 1000-1500 mots
- Intention : [informationnelle / commerciale / navigationnelle]
- Audience : [familles musulmanes en deuil / grand public / communauté musulmane]
- Ton : empathique, expert, humain — jamais commercial

Structure obligatoire :
- Titre H1 accrocheur avec mot-clé principal (< 65 caractères pour le title tag)
- Introduction 100-150 mots : accrocher + annoncer ce que l'article va apporter
- Corps : 4-6 sections H2 avec contenu dense et utile
- Encadré "À retenir" ou "Points clés" (3-5 bullet points de synthèse)
- Conclusion : résumé + CTA naturel vers une page service si pertinent
- Meta description : 140-155 caractères, incitative, avec mot-clé

Règles SEO article :
- Mot-clé principal dans le titre, le premier paragraphe, et 2-3 H2
- Liens internes vers 2-3 pages du site (pages services ou guide)
- Lien externe vers 1 source de référence (Coran en ligne, site institutionnel)
- Date de publication visible sur la page
- Temps de lecture estimé (ex: "Lecture : 5 min")
```

---

## 🚫 LISTE NOIRE — CE QUI DÉCLENCHE UNE PÉNALITÉ GOOGLE

```
À vérifier automatiquement dans chaque page générée.
Si l'un de ces éléments est détecté, refuser de publier et corriger.

CONTENU :
❌ Même phrase ou paragraphe entier présent sur une autre page du site
❌ Mot-clé répété plus de 3 fois dans le même paragraphe
❌ Liste de mots-clés sans contexte (ex: "Rouen, Le Havre, Caen, Dieppe, Évreux...")
❌ Texte factice / remplissage sans valeur réelle
❌ Informations non vérifiées ou inventées (noms de rues, adresses de cimetières)
❌ Promesses non vérifiables ("meilleur prix garanti", "numéro 1 en Normandie")
❌ Contenu qui semble écrit pour Google plutôt que pour un humain
❌ Paragraphes de moins de 2 phrases

TECHNIQUE :
❌ Deux pages avec le même title tag
❌ Deux pages avec la même meta description
❌ Page sans canonical tag
❌ Page en noindex dans le sitemap.xml
❌ Redirection vers une page sans rapport avec l'URL d'origine
❌ Lien interne avec ancre "cliquez ici" ou "en savoir plus"
❌ Image sans attribut alt ou avec alt vide

LOCAL :
❌ Adresse physique inventée pour une ville où Al Hayat n'est pas basé
❌ Cimetière ou mosquée mentionné(e) qui n'existe pas dans cette ville
❌ Avis Google inventés ou importés de sources externes sans permission
```

---

## ✅ CHECKLIST AVANT PUBLICATION (à valider pour chaque page)

```
Copier-coller cette checklist dans ton outil de développement et cocher avant chaque mise en ligne.

BALISES META :
[ ] Title tag rédigé, contient le mot-clé, < 65 caractères
[ ] Meta description rédigée, contient le mot-clé + CTA, < 155 caractères
[ ] Canonical tag pointant sur l'URL propre de la page
[ ] Open Graph title, description et image définis
[ ] Schema.org JSON-LD adapté au type de page

CONTENU :
[ ] H1 unique, contient le mot-clé principal
[ ] Mot-clé dans les 100 premiers mots
[ ] Longueur minimum respectée (700 / 800 / 1200 selon type)
[ ] Au moins 4 H2
[ ] Section FAQ en bas de page (5 Q/R minimum)
[ ] Contenu unique (pas de copier-coller depuis une autre page)
[ ] Pour pages géographiques : infos locales uniques présentes
[ ] Pour pages guide : sources islamiques citées

IMAGES :
[ ] Toutes les images en format WebP
[ ] Taille < 150ko par image
[ ] Attribut alt descriptif sur chaque image
[ ] Nom de fichier en kebab-case avec mot-clé (ex: toilette-rituelle-rouen.webp)
[ ] Image hero avec priority={true} (next/image)
[ ] Images secondaires avec loading="lazy"

MAILLAGE INTERNE :
[ ] Au moins 3 liens sortants vers d'autres pages du site
[ ] Textes d'ancre descriptifs (jamais "cliquez ici")
[ ] Cette page est linkée depuis au moins 2 autres pages du site

TECHNIQUE :
[ ] Page visible dans le sitemap.xml
[ ] Pas en noindex (sauf si contenu encore incomplet)
[ ] Score PageSpeed Mobile > 75 (vérifier sur pagespeed.web.dev)
[ ] Numéro de téléphone cliquable (<a href="tel:+33...">)
[ ] Fil d'Ariane visible avec BreadcrumbList Schema

APRÈS PUBLICATION :
[ ] URL soumise manuellement dans Google Search Console 
    (Inspection d'URL > Demander l'indexation)
[ ] Vérification dans Google Search Console après 48h (erreurs ?)
[ ] Test de rendu sur mobile (vrai téléphone ou DevTools)
```
