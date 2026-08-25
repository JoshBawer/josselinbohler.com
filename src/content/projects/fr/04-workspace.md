---
slug: atelier-reliability-factory
locale: fr
title: Reliability Factory Workspace
eyebrow: Environnement intégré d’ingénierie de fiabilité
summary: Un workspace local-first réunissant AMDEC, diagrammes de blocs, calculs RAM analytiques et Monte Carlo, données projet et assistance IA dans un même modèle d’ingénierie.
status: Prototype
year: "2026"
role: Architecture produit, calculs de fiabilité et implémentation front-end
problem: Les équipes fiabilité passent entre tableurs, outils de modélisation, rapports et chats IA déconnectés. Le contexte est reconstruit à chaque fois, les révisions divergent et le lien entre mode de défaillance et modèle de production devient difficile à conserver.
approach:
  - Créer un espace projet avec équipements, fonctions, modes et contrôles structurés.
  - Fournir des calculs analytiques et Monte Carlo derrière un éditeur RBD visuel.
  - Conserver une logique local-first pour l’itération rapide, avec import/export explicite.
  - Introduire l’assistance IA à des points de rédaction bornés plutôt que sur toute la surface de décision.
outcome: "Le prototype pose l’ossature technique d’un modèle de fiabilité vivant : un même projet alimente worksheet, ranking des risques, modélisation système et futurs liens de preuve sans reconstruire le contexte pour chaque méthode."
stack: [React, TypeScript, Vite, React Flow, Recharts, Dexie, Zustand, Vitest]
proofs:
  - value: AMDEC
    label: worksheet structuré
  - value: RBD
    label: modèle système visuel
  - value: 2×
    label: moteurs analytique et Monte Carlo
  - value: Local-first
    label: persistance projet
cover: /images/work/reliability-workspace.webp
coverAlt: Workspace Reliability Factory avec panneaux d’ingénierie AMDEC et RBD
featured: true
order: 4
---

## Un objet, plusieurs vues d’ingénierie

AMDEC et RAM sont souvent achetées et maintenues comme des études distinctes. Le workspace explore un autre modèle : stocker les objets d’ingénierie une fois, puis produire la feuille, le diagramme, la vue risque ou le rapport nécessaire à la décision.

## Discipline produit

Le workspace reste un prototype et un moteur interne de delivery. Il n’est pas présenté comme une plateforme enterprise finalisée. Cette frontière est volontaire : répéter le workflow d’abord, durcir ensuite ce qui reste commun.
