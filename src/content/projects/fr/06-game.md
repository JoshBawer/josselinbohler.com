---
slug: keep-it-running-jeu
locale: fr
title: Keep It Running
eyebrow: Apprendre la fiabilité par les décisions terrain
summary: Un jeu pédagogique en anglais qui place le joueur dans une usine avec instruments de diagnostic, métriques live et décisions de maintenance techniquement fondées.
status: Published
year: "2026"
role: Design pédagogique, contenu fiabilité et implémentation applicative
problem: La formation fiabilité est souvent présentée sous forme de formules et de slides, loin des décisions bruyantes et limitées dans le temps prises autour des équipements. L’apprenant reconnaît un acronyme sans savoir quel signal ou quelle action convient à une panne réelle.
approach:
  - Construire cinq shifts progressant des fondamentaux et de l’intervalle P–F vers l’AMDEC, la fiabilité système et Weibull.
  - Obliger le joueur à rejoindre l’actif en panne et choisir l’instrument capable de produire la preuve nécessaire.
  - Faire évoluer disponibilité, MTTR, risque et budget avec chaque décision.
  - Expliquer pourquoi une action techniquement plausible mais mal séquencée conserve un coût.
outcome: La campagne complète contient quinze pannes interactives, un technicien mobile, six outils de diagnostic, une progression locale persistante et des tests automatisés de calcul, contenu et parcours navigateur.
stack: [React, TypeScript, Vite, Vitest, Playwright, localStorage]
proofs:
  - value: "5"
    label: shifts jouables
  - value: "15"
    label: scénarios de panne
  - value: "6"
    label: instruments de diagnostic
  - value: E2E
    label: test de campagne complet
cover: /images/work/keep-it-running.webp
coverAlt: Usine et panneau de contrôle du jeu de fiabilité Keep It Running
featured: true
order: 6
---

## Diagnostiquer avant d’agir

Le jeu récompense la même discipline qu’un site industriel : rejoindre l’actif, choisir la bonne mesure, interpréter le signal puis décider. Utiliser le mauvais outil consomme temps et budget car il ne produit aucune preuve utile.

## Un contenu sérieux dans un autre format

Le traitement visuel est ludique, mais le contenu n’est pas réduit à des questions trivia. Calculs de disponibilité, logique P–F, conséquences AMDEC, fiabilité série/parallèle et interprétation Weibull modifient réellement l’état de l’usine.
