---
slug: reliability-factory-workspace
locale: en
title: Reliability Factory Workspace
eyebrow: Integrated reliability engineering environment
summary: A local-first workspace joining FMECA, reliability block diagrams, analytical and Monte Carlo RAM calculations, project data and AI assistance in one coherent engineering model.
status: Prototype
year: "2026"
role: Product architecture, reliability calculations and front-end implementation
problem: Reliability teams move between disconnected spreadsheets, modelling tools, reports and AI chats. Context is repeatedly rebuilt, revisions drift and the relationship between a failure mode and the production model is difficult to preserve.
approach:
  - Create a project workspace with structured equipment, functions, failure modes and controls.
  - Provide both analytical and Monte Carlo reliability calculations behind a visual RBD editor.
  - Keep data local-first for fast iteration and explicit export/import.
  - Add AI assistance at bounded drafting points rather than across the entire decision surface.
outcome: "The prototype establishes the technical spine for a living reliability model: the same project can support worksheet analysis, risk ranking, system modelling and future evidence links without rebuilding context for every method."
stack: [React, TypeScript, Vite, React Flow, Recharts, Dexie, Zustand, Vitest]
proofs:
  - value: FMECA
    label: structured worksheet
  - value: RBD
    label: visual system model
  - value: 2×
    label: analytic and Monte Carlo engines
  - value: Local-first
    label: project persistence
cover: /images/work/reliability-workspace.webp
coverAlt: Reliability Factory workspace with FMECA and RBD engineering panels
featured: true
order: 4
---

## One object, several engineering views

FMECA and RAM are often purchased and maintained as separate studies. The workspace explores a different model: store the engineering objects once, then render the worksheet, block diagram, risk view or report needed for the decision.

## Product discipline

The workspace remains a prototype and an internal delivery engine. It is not presented as a finished enterprise platform. That boundary is intentional: repeat the workflow first, then harden what stays common.
