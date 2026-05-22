# CrisisCore Systems

CrisisCore helps sensitive-data products find trust-breaking defaults before launch.

This site is the commercial and proof surface for a founder-led consulting practice focused on pre-compliance trust hardening: risky defaults, weak consent, brittle recovery, over-collection, export and deletion gaps, and product claims that will not survive buyer or reviewer scrutiny.

## Ecosystem roles

- CrisisCore converts.
- PainTracker proves lived local-first product design under pain, stress, and degraded conditions.
- ProofVault proves release-bound trust claims and inspectable evidence.
- Protective Computing explains the doctrine behind the work.
- GitHub verifies the artifacts and source record.

## Core routes

- `/start-here`: ecosystem router and primary commercial entry point.
- `/trust-risk-read`: the dedicated 3-point trust risk read intake page.
- `/services`: offer ladder from free read to teardown, review, and fix sprint.
- `/proof`: proof path, redacted artifacts, and verification surfaces.
- `/case-study`: commercial case-study route.
- `/writing`: founder- and builder-facing trust architecture writing.

## Primary CTA

Get a 3-point trust risk read.

Input:

- app URL
- launch stage
- biggest concern

Output:

- top 3 trust risks
- recommended next step
- whether the next lane is CrisisCore, a lawyer, a pentest, compliance tooling, or nothing yet

## Local development

```bash
npm install
npm run dev
```

Open `http://localhost:3000`.

## Validation

```bash
npm run lint
npm run check:content
npm run check:links
```

## Deployment note

This repository contains the primary app under `crisiscore-portfolio/`. A mirrored deploy copy also exists in `crisiscore-portfolio-audit-deploy/` and should stay aligned when funnel routing or trust-read intake surfaces change.
