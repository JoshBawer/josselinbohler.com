---
slug: amdec-ia-strategie-maintenance
locale: fr
title: AMDEC IA & stratégie de maintenance
eyebrow: Workflow d’ingénierie ancré dans les sources
summary: Un workflow qui transforme documentation OEM et historique GMAO en AMDEC traçable, décisions RCM et gammes de maintenance sans inventer de chiffres non soutenus.
status: Prototype
year: "2026"
role: Méthodologie fiabilité, workflow IA et design produit
problem: Le développement d’une AMDEC et d’un plan de maintenance consomme des semaines d’expertise en extraction documentaire, assemblage de tableurs et contrôles de cohérence. Une IA générique accélère le travail mais peut aussi inventer des modes, confondre causes et effets et fabriquer des valeurs d’occurrence.
approach:
  - Extraire fonctions, limites et recommandations de maintenance depuis la source OEM réelle.
  - Calculer l’occurrence depuis l’historique de défaillances et laisser explicitement la sévérité à l’atelier d’ingénierie.
  - Maintenir une source visible pour chaque mode, tâche, fréquence et critère d’acceptation.
  - Relier l’AMDEC validée à la logique RCM, aux work packages et à une sortie prête pour la GMAO.
outcome: Le résultat est un workflow répétable où l’IA assemble et challenge l’analyse, tandis que les calculs déterministes et la validation humaine gouvernent le risque. Il permet aussi le read-across entre actifs similaires sans présenter les candidats comme des défaillances confirmées.
stack: [Claude, Python, CSV, Markdown, logique RCM, cotation type SAE J1739]
proofs:
  - value: OEM
    label: traçabilité à la source
  - value: GMAO
    label: occurrence issue de l’historique
  - value: RCM
    label: logique de décision aval
  - value: Humain
    label: sévérité et validation finale
cover: /images/work/ai-fmeca.webp
coverAlt: Feuille AMDEC anonymisée avec modes traçables et cotation des risques
featured: true
order: 2
---

## La distinction importante

Un modèle de langage est utile pour lire et structurer de grands volumes de texte technique. Il ne possède pas l’appétit au risque d’un site. Le workflow attribue donc chaque rôle clairement : le modèle extrait et rédige, le code calcule, l’ingénieur valide la conséquence et l’efficacité des tâches.

## Une chaîne qui résiste à l’audit

Chaque politique de maintenance proposée peut être suivie à rebours : tâche → logique de décision → mode de défaillance → criticité → événement GMAO ou passage OEM. Cette piste de preuves compte autant que le tableur généré.

