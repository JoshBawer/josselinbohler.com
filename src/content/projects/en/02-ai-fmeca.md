---
slug: ai-fmeca-maintenance-strategy
locale: en
title: AI FMECA & Maintenance Strategy
eyebrow: Source-grounded engineering workflow
summary: A workflow that turns OEM documentation and CMMS history into a traceable FMECA, RCM decisions and maintenance work packages without inventing unsupported numbers.
status: Prototype
year: "2026"
role: Reliability methodology, AI workflow and product design
problem: FMECA and maintenance-plan development consume weeks of expert time in document extraction, spreadsheet assembly and consistency checks. Generic AI can make the process faster, but it can also invent modes, confuse causes with effects and fabricate occurrence values.
approach:
  - Extract functions, limits and maintenance recommendations from the actual OEM source.
  - Calculate occurrence from failure history and keep severity explicitly owned by the engineering workshop.
  - Maintain a visible source for every mode, task, interval and acceptance criterion.
  - Connect the validated FMECA to RCM logic, work packages and a CMMS-ready output.
outcome: The result is a repeatable engineering workflow in which AI assembles and challenges the analysis while deterministic calculations and human validation govern risk. It also supports read-across between similar assets without presenting candidates as confirmed failures.
stack: [Claude, Python, CSV, Markdown, RCM logic, SAE J1739-style scoring]
proofs:
  - value: OEM
    label: traceability to source
  - value: CMMS
    label: occurrence from history
  - value: RCM
    label: decision logic downstream
  - value: Human
    label: severity and final approval
cover: /images/work/ai-fmeca.webp
coverAlt: Sanitised FMECA worksheet showing traceable failure modes and risk scoring
featured: true
order: 2
---

## The important distinction

A language model is useful for reading and structuring large volumes of engineering text. It is not the owner of a plant's risk appetite. The workflow therefore assigns each job deliberately: the model extracts and drafts, code calculates, and the engineer validates consequence and task effectiveness.

## A chain that survives audit

Every proposed maintenance policy can be followed backwards: task → decision logic → failure mode → criticality → CMMS event or OEM passage. That evidence trail matters as much as the generated spreadsheet.

