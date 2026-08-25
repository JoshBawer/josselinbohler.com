---
slug: copilote-rca-factory-brain
locale: fr
title: RCA Copilot & Factory Brain
eyebrow: Investigation de défaillance fondée sur les preuves
summary: Un espace RCA guidé qui sépare les hypothèses des faits, relie chaque conclusion aux preuves et transforme les analyses terminées en connaissance industrielle réutilisable.
status: Prototype
year: "2026"
role: Stratégie produit, méthode fiabilité, UX et implémentation
problem: Les analyses de causes racines convergent souvent trop vite vers une explication favorite. Les preuves restent dispersées, les actions perdent leur lien avec les causes vérifiées et le rapport final disparaît dans un dossier.
approach:
  - Structurer l’investigation de la définition du problème aux actions, en passant par la chronologie, les hypothèses, l’arbre causal et les preuves.
  - Faire du registre de preuves le seul chemin permettant de déclarer une hypothèse vérifiée ou réfutée.
  - Séparer les faits issus de la donnée site des pistes de connaissance ingénieur proposées à la revue.
  - Alimenter un Factory Brain interrogeable avec les analyses terminées plutôt qu’une nouvelle archive statique.
outcome: Le prototype démontre comment l’IA peut challenger l’investigation sans posséder le verdict. Un autotest déterministe couvre le parseur CSV, les gates méthodologiques, les recoupements de connaissance et le flux RCA/AMDEC complet.
stack: [HTML, CSS, JavaScript, Python, LLM Wiki, Markdown compatible Obsidian]
proofs:
  - value: 60/60
    label: autotests déterministes
  - value: 6
    label: étapes d’investigation guidées
  - value: Preuve
    label: obligatoire avant vérification
  - value: A3
    label: rapport imprimable
cover: /images/work/rca-factory-brain.webp
coverAlt: Arbre causal et registre de preuves anonymisés du RCA Copilot
featured: true
order: 1
---

## Conçu contre les certitudes prématurées

L’interface ne présente jamais une réponse IA comme la cause racine. Elle montre des chemins candidats, demande à l’équipe ce qui permettrait de les confirmer ou de les réfuter et conserve leur statut visible. Une action corrective ne peut être reliée qu’à une cause ayant franchi le gate de preuves.

> L’IA propose des hypothèses. L’équipe d’investigation possède la vérification et la décision d’ingénierie finale.

## Du rapport à la connaissance cumulative

La seconde moitié du concept est le Factory Brain : une mémoire site structurée à partir de l’historique maintenance, des documents OEM, des fiches équipements et des RCA terminées. Chaque nouvelle investigation peut réutiliser les faits antérieurs tout en conservant leur provenance.

