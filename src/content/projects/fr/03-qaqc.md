---
slug: controle-qualite-amdec
locale: fr
title: FMECA QA/QC Checker
eyebrow: Qualité déterministe à l’échelle de l’ingénierie
summary: Un moteur de revue autonome qui contrôle les exports AMDEC et stratégie de maintenance avec quarante règles explicites avant leur intégration au fichier de livraison.
status: Internal tool
year: "2026"
role: Architecture des règles, implémentation TypeScript et livraison autonome
problem: "Les grands jeux de données AMDEC accumulent des incohérences subtiles : fonctions mal formulées, champs de tâche manquants, fréquences d’inspection invalides, doublons, ressources non alignées et contradictions entre paramètres Weibull et politique de maintenance."
approach:
  - Transformer chaque attente qualité en règle nommée et testable, avec sévérité et guide de correction.
  - Lire les classeurs localement et conserver la donnée d’ingénierie sur la machine de l’utilisateur.
  - Permettre aux reviewers d’accepter, rejeter ou annoter les constats avant toute correction contrôlée.
  - Générer un tracker QA/QC et un export aval structuré depuis les mêmes décisions.
outcome: Le checker transforme l’assurance qualité, d’une relecture manuelle tardive en gate répétable. Les règles étant déterministes, les reviewers voient exactement pourquoi chaque ligne est signalée et peuvent faire évoluer le standard avec la méthode de delivery.
stack: [TypeScript, Vite, XLSX, HTML autonome, moteur de règles]
proofs:
  - value: "40"
    label: règles QA/QC explicites
  - value: Local
    label: traitement des classeurs
  - value: XLSX
    label: exports contrôlés
  - value: Traçable
    label: décisions de revue
cover: /images/work/qaqc-checker.webp
coverAlt: Dashboard QA QC anonymisé avec constats d’ingénierie regroupés par règle
featured: true
order: 3
---

## Des règles plutôt qu’une boîte noire

L’outil ne renvoie pas un score qualité générique. Il identifie la ligne, l’attente exacte, la preuve dans la donnée source et la résolution proposée. Le constat reste donc vérifiable par un ingénieur et maintenable par l’équipe delivery.

## Conçu pour la transmission

L’application peut être packagée dans un fichier HTML autonome avec ses bibliothèques de référence. C’est essentiel dans les environnements contrôlés où installer une plateforme supplémentaire n’est pas réaliste.
