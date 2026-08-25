---
slug: keep-it-running
locale: en
title: Keep It Running
eyebrow: Reliability learned through plant decisions
summary: An English-language learning game that puts the player on a factory floor with diagnostic instruments, live plant metrics and technically grounded maintenance decisions.
status: Published
year: "2026"
role: Learning design, reliability content and application implementation
problem: Reliability training is often presented as formulas and slides, disconnected from the noisy, time-limited decisions people make around equipment. The learner can recognise an acronym without knowing which signal or action fits a real breakdown.
approach:
  - Build five shifts progressing from foundations and P–F intervals to FMECA, system reliability and Weibull.
  - Require the player to move to the failed asset and select the instrument that can produce the needed evidence.
  - Change availability, MTTR, risk and budget as each decision is made.
  - Explain why a technically plausible but poorly sequenced action still has a cost.
outcome: The completed campaign includes fifteen interactive breakdowns, a moving technician, six diagnostic tools, persistent local progress and automated calculation, content and browser-playthrough tests.
stack: [React, TypeScript, Vite, Vitest, Playwright, localStorage]
proofs:
  - value: "5"
    label: playable shifts
  - value: "15"
    label: breakdown scenarios
  - value: "6"
    label: diagnostic instruments
  - value: E2E
    label: complete campaign test
cover: /images/work/keep-it-running.webp
coverAlt: Keep It Running reliability game factory floor and control board
featured: true
order: 6
---

## Diagnose before acting

The game rewards the same discipline expected on a plant: get close to the asset, choose the right measurement, interpret the signal and only then decide. Using the wrong tool consumes time and budget because it does not produce useful evidence.

## Serious content in a different format

The visual treatment is playful, but the content is not simplified into trivia. Availability calculations, P–F interval logic, FMECA consequence, series/parallel reliability and Weibull interpretation all change the plant state.

