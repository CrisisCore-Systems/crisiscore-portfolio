Sample 48-Hour Teardown
=======================

Product surface reviewed
- Mobile and web symptom-tracking flow for a health-adjacent product near launch
- Focus: collection defaults, consent path, export behavior, retention posture, recovery friction

Top 3 risks

1. Account creation is treated as the default trust boundary.
Why it matters:
- Forces sensitive users into centralization before they understand the value exchange.
- Creates avoidable retention and deletion burden before core use is proven.
First fix:
- Make core logging available before sign-up and move account creation to explicit sync or export moments.

2. Consent language is narrower than actual product behavior.
Why it matters:
- Buyers and users will compare the privacy claim to the actual flow and find the gap.
- Trust debt compounds when the interface implies local or minimal handling while telemetry and recovery paths say otherwise.
First fix:
- Rewrite the product claim around what the release can actually defend and remove implied guarantees from onboarding copy.

3. Recovery depends on hidden assumptions about connectivity and user attention.
Why it matters:
- Fragile recovery paths create silent failure exactly when user confidence is already low.
- Launch risk rises when the product cannot explain what happened to sensitive records after interruption.
First fix:
- Add explicit save state, failed-action messaging, and a visible export checkpoint before any destructive or sync-dependent action.

Evidence checked
- Onboarding and consent copy
- Primary logging flow
- Account requirement triggers
- Export surface and recovery messaging
- Public privacy and product claims

Recommended next step
- If these patterns are live or close to launch, continue into a full review.
- If the team only needs the first corrections, stop here and patch the consent, account-default, and recovery flows first.