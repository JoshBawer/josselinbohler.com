---
slug: fmeca-qaqc-checker
locale: en
title: FMECA QA/QC Checker
eyebrow: Deterministic quality at engineering scale
summary: A standalone review engine that checks FMECA and maintenance-strategy exports against forty explicit engineering and data-quality rules before they reach the delivery file.
status: Internal tool
year: "2026"
role: Rule architecture, TypeScript implementation and standalone delivery
problem: "Large FMECA datasets accumulate subtle inconsistencies: weak function wording, missing task fields, invalid inspection intervals, duplicate modes, unmatched resources and contradictions between Weibull parameters and maintenance policy."
approach:
  - Express each quality expectation as a named, testable rule with severity and remediation guidance.
  - Parse source workbooks locally and keep the original engineering data on the user's machine.
  - Let reviewers accept, reject or annotate findings before applying controlled corrections.
  - Generate a QA/QC tracker and a structured downstream export from the same decisions.
outcome: The checker turns quality assurance from a late manual read-through into a repeatable gate. Because the rules are deterministic, reviewers can inspect exactly why each row was flagged and update the standard as the delivery method evolves.
stack: [TypeScript, Vite, XLSX, standalone HTML, rule engine]
proofs:
  - value: "40"
    label: explicit QA/QC rules
  - value: Local
    label: workbook processing
  - value: XLSX
    label: controlled exports
  - value: Traceable
    label: reviewer decisions
cover: /images/work/qaqc-checker.webp
coverAlt: Sanitised QA QC dashboard showing engineering findings grouped by rule
featured: true
order: 3
---

## Rules instead of a black box

The tool does not return a generic quality score. It identifies the row, the exact expectation, the evidence in the source data and the proposed resolution. That makes a finding reviewable by an engineer and maintainable by the delivery team.

## Built for handover

The application can be packaged as one standalone HTML file with its reference libraries bundled. That matters for controlled client environments where installing another platform is not realistic.
