---
slug: rca-copilot-factory-brain
locale: en
title: RCA Copilot & Factory Brain
eyebrow: Evidence-led failure investigation
summary: A guided RCA workspace that keeps hypotheses separate from facts, links every conclusion to evidence and turns completed investigations into reusable plant knowledge.
status: Prototype
year: "2026"
role: Product strategy, reliability method, UX and implementation
problem: Root cause analyses often collapse too early into a favoured explanation. Evidence sits in separate files, corrective actions lose their link to verified causes and the final report disappears into a folder.
approach:
  - Structure the investigation from problem definition and timeline to hypotheses, cause tree, evidence and corrective actions.
  - Make the evidence register the only route for promoting a hypothesis to verified or refuted.
  - Separate facts sourced from site data from engineering patterns proposed for review.
  - Feed completed investigations into a searchable Factory Brain rather than another static archive.
outcome: The prototype demonstrates how AI can challenge an investigation without owning the verdict. A deterministic self-test covers the CSV parser, methodological gates, knowledge cross-checks and the complete RCA/FMECA flow.
stack: [HTML, CSS, JavaScript, Python, LLM Wiki, Obsidian-compatible Markdown]
proofs:
  - value: 60/60
    label: deterministic self-tests
  - value: 6
    label: guided investigation stages
  - value: Evidence
    label: required before verification
  - value: A3
    label: printable report output
cover: /images/work/rca-factory-brain.webp
coverAlt: Sanitised cause tree and evidence workspace from the RCA Copilot
featured: true
order: 1
---

## Designed against premature certainty

The interface never presents an AI answer as the root cause. It presents candidate paths, asks the team what would confirm or refute them and keeps the status visible. Corrective actions can only attach to causes that have passed the evidence gate.

> AI proposes hypotheses. The investigation team owns verification and the final engineering decision.

## From report to compounding knowledge

The second half of the concept is the Factory Brain: a structured site memory built from maintenance history, OEM material, equipment pages and completed RCAs. Each new investigation can reuse prior facts while retaining source provenance.

