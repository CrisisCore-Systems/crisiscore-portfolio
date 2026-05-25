# CrisisCore Systems Visual Asset Pack

Generated for crisiscore-systems.ca based on the current public surface.

## Assets

1. `trust-failure-radar.svg`  
   Hero or proof graphic. Use near the homepage claim: finding trust failures before launch or buyer scrutiny.

2. `data-boundary-map.svg`  
   Service and audit graphic. Shows collect, store, log, export, and claim as explicit boundaries.

3. `three-point-risk-read.svg`  
   CTA asset for the free fit check and outbound offer.

4. `buyer-proof-ladder.svg`  
   Proof page visual. Turns the proof ladder into a quick visual sequence.

5. `small-business-trust-cleanup.svg`  
   New local offer graphic for motels, trades, clinics, salons, and contractors.

6. `defensibility-packet-flow.svg`  
   Deliverable graphic for Trust Hardening Review and packet preview pages.

7. `social-card-trust-failure.svg`  
   Square social card for DEV, LinkedIn, or post headers.

8. `outreach-header-local-trust-cleanup.svg`  
   Wide header for the small business trust cleanup offer.

## Suggested placement

- Homepage after hero: `trust-failure-radar.svg`
- Services page near 48 hour teardown: `three-point-risk-read.svg`
- Proof page: `buyer-proof-ladder.svg`
- PainTracker case study: `data-boundary-map.svg`
- New local offer section/page: `small-business-trust-cleanup.svg`
- Defensibility packet artifact page: `defensibility-packet-flow.svg`

## Next.js placement

Copy SVGs into:

```txt
/public/assets/crisiscore/
```

Then reference:

```jsx
<img src="/assets/crisiscore/trust-failure-radar.svg" alt="Trust failure radar showing product trust risks" />
```

A sample React component is included in `components/CrisisCoreVisualStrip.jsx`.
