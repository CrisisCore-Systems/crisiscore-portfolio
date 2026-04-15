export type BuyerIntentPage = {
  slug: string;
  query: string;
  title: string;
  description: string;
  summary: string;
  painPoints: string[];
  reviewIncludes: string[];
  bestFit: string[];
  proofHref: string;
  proofLabel: string;
  artifactHref: string;
  artifactLabel: string;
};

export const BUYER_INTENT_PAGES: BuyerIntentPage[] = [
  {
    slug: "privacy-review-for-health-apps",
    query: "privacy review for health apps",
    title: "Privacy Review for Health Apps",
    description:
      "Plain-English privacy review for health and health-adjacent apps before risky defaults, hidden collection, or confusing product behavior reaches users.",
    summary:
      "This is for founders with a live or near-launch health app who need a hard look at where the product collects too much, assumes too much, or quietly routes intimate user data through the wrong systems.",
    painPoints: [
      "Health-adjacent data is being stored or transmitted by default without a clear reason.",
      "Core workflows depend on sign-up, centralization, or background sync even when they should not.",
      "Privacy language sounds safer than the actual product behavior.",
      "The team needs a concrete fix order before launch, not a vague policy rewrite.",
    ],
    reviewIncludes: [
      "A plain-English read of what the product collects, stores, and assumes in the background.",
      "The high-risk defaults most likely to create launch friction or user distrust.",
      "Boundary and minimization corrections worth shipping first.",
      "A recommendation on whether the right next step is a teardown, full review, or fix sprint.",
    ],
    bestFit: [
      "Health, wellness, disability, care coordination, or case-management products.",
      "Teams close to launch or already live with sensitive workflow exposure.",
      "Founders who want to reduce collection instead of decorating it.",
    ],
    proofHref: "/case-study/pain-tracker",
    proofLabel: "Inspect the PainTracker health workflow case study",
    artifactHref: "/artifacts/pain-tracker/architecture",
    artifactLabel: "Open the PainTracker architecture artifact",
  },
  {
    slug: "pre-launch-privacy-audit",
    query: "pre launch privacy audit",
    title: "Pre-Launch Privacy Audit",
    description:
      "Pre-launch privacy audit for sensitive-data products that need risky defaults, product gaps, and launch-blocking assumptions found before release.",
    summary:
      "A pre-launch privacy audit is useful when the product is nearly ready, but nobody has yet forced the system to justify its collection paths, recovery behavior, and trust claims under real conditions.",
    painPoints: [
      "Launch is close and the team is uneasy about what the product is collecting or retaining.",
      "Trust and privacy claims exist in copy, but the underlying product boundaries are still fuzzy.",
      "Critical flows break down under low attention, bad connectivity, or partial failure.",
      "Nobody has converted the risk picture into a small, ranked shipping plan.",
    ],
    reviewIncludes: [
      "A ranked readout of the few privacy and product failures most likely to matter first.",
      "Boundary review across product behavior, copy, exports, logging, and fallback states.",
      "A launch-facing fix order that makes clear what to ship now versus later.",
      "A written output that survives after the call ends.",
    ],
    bestFit: [
      "Products with launch pressure, stakeholder scrutiny, or buyer-facing risk.",
      "Teams that need a diagnostic first pass before deciding on a larger engagement.",
      "Founders who want an explicit privacy audit path without compliance theater.",
    ],
    proofHref: "/artifacts/security-and-audits/redacted-threat-model-excerpt",
    proofLabel: "Inspect a redacted threat-model excerpt",
    artifactHref: "/artifacts/security-and-audits/defensibility-packet-preview",
    artifactLabel: "Open the defensibility packet preview",
  },
  {
    slug: "ai-trust-review-sensitive-data-products",
    query: "trust review for AI products handling sensitive data",
    title: "Trust Review for AI Products Handling Sensitive Data",
    description:
      "Trust review for AI products that handle sensitive user data and need clearer boundaries, narrower claims, and inspectable proof before launch or sales exposure.",
    summary:
      "If an AI product touches health, legal, workplace, or other sensitive user reality, the problem is usually not the model alone. It is the surrounding product surface: logging, retention, prompts, exports, fallback states, and claims the team cannot actually defend.",
    painPoints: [
      "The product makes broad safety or privacy claims that are not tied to verifiable release evidence.",
      "Sensitive prompts, outputs, or logs may be retained longer or shared more widely than intended.",
      "Model workflows create drift between what the product says and what it can prove.",
      "The team needs narrower, more defensible boundaries before buyers or users test the claims.",
    ],
    reviewIncludes: [
      "A trust-boundary read across prompts, outputs, storage, logging, and recovery paths.",
      "Claim narrowing so the public promise matches what the release can actually prove.",
      "A concrete fix order for the highest-leverage failures.",
      "An inspection path the team can show to skeptical buyers without hand-waving.",
    ],
    bestFit: [
      "AI-assisted products with sensitive workflow exposure or buyer trust pressure.",
      "Founders preparing for launch, pilots, procurement, or public scrutiny.",
      "Teams willing to tighten boundaries instead of hiding them behind marketing language.",
    ],
    proofHref: "/case-study/proofvault",
    proofLabel: "Inspect the ProofVault release-bound trust case",
    artifactHref: "/artifacts/security-and-audits/defensibility-packet-preview",
    artifactLabel: "Open the release-bound packet preview",
  },
  {
    slug: "local-first-health-app-architecture",
    query: "local first health app architecture",
    title: "Local-First Health App Architecture Review",
    description:
      "Architecture review for health apps that want local-first defaults, explicit export, and fewer dangerous cloud assumptions in the core workflow.",
    summary:
      "This is for teams building health or wellness products that should stay useful under low attention or partial connectivity, but still need a practical architecture review before launch.",
    painPoints: [
      "The app still assumes always-on connectivity for a workflow that should survive offline or degraded conditions.",
      "Sensitive records are centralized by default even though daily use does not require it.",
      "Export and sharing behavior are vague, hidden, or coupled to account-first assumptions.",
      "The team wants local-first benefits without a hand-wavy rewrite of the product architecture.",
    ],
    reviewIncludes: [
      "A clear read on which parts of the workflow should stay local by default.",
      "Boundary review across storage, export, sign-up, sync, and degraded-mode behavior.",
      "A ranked set of architectural corrections that reduce risk without breaking the product job.",
      "A practical recommendation on whether the next move is teardown, full review, or implementation support.",
    ],
    bestFit: [
      "Health-adjacent apps where continuity and minimization matter more than analytics convenience.",
      "Teams deciding whether local-first is a real fit or just a slogan in product copy.",
      "Founders who need fewer cloud assumptions before launch or partner review.",
    ],
    proofHref: "/writing/paintracker-architecture",
    proofLabel: "Read the PainTracker architecture walkthrough",
    artifactHref: "/artifacts/pain-tracker/architecture",
    artifactLabel: "Inspect the local-first architecture artifact",
  },
  {
    slug: "reduce-data-collection-risk-before-launch",
    query: "how to reduce data collection risk before launch",
    title: "How to Reduce Data Collection Risk Before Launch",
    description:
      "Pre-launch review for products collecting more user data than they need, with a concrete plan to reduce risky defaults before launch exposure grows.",
    summary:
      "If the uneasy feeling is that the product collects too much, logs too much, or keeps too much by default, this review turns that concern into a clear minimization plan before launch makes the problem more expensive.",
    painPoints: [
      "Product and engineering both suspect the app is collecting more than the core workflow actually needs.",
      "Logging, analytics, exports, or third-party tools expanded faster than the product boundary did.",
      "Nobody has separated required collection from convenience collection.",
      "The team needs a defensible minimization story before users, buyers, or partners ask harder questions.",
    ],
    reviewIncludes: [
      "A plain-English inventory of the highest-risk collection paths.",
      "A smaller default boundary for what the product should capture, retain, and expose.",
      "A fix order for collection, logging, analytics, and sharing defaults.",
      "A recommendation for the smallest useful next step after the initial review.",
    ],
    bestFit: [
      "Near-launch teams with growing discomfort around hidden or default collection.",
      "Products handling health, legal, workplace, family, or other sensitive user reality.",
      "Founders who want to remove data risk, not rename it.",
    ],
    proofHref: "/writing/reduce-data-collection-risk-before-launch",
    proofLabel: "Read the founder-facing article on reducing collection risk",
    artifactHref: "/artifacts/security-and-audits/redacted-threat-model-excerpt",
    artifactLabel: "Inspect a redacted review artifact",
  },
  {
    slug: "privacy-architecture-for-wellness-apps",
    query: "privacy architecture for wellness apps",
    title: "Privacy Architecture for Wellness Apps",
    description:
      "Privacy architecture review for wellness apps that need safer defaults, clearer product boundaries, and fewer silent assumptions before growth adds exposure.",
    summary:
      "Wellness products often look low-stakes until they begin collecting intimate patterns, habits, symptoms, or relationship data. This review is for teams that want those boundaries fixed before trust debt piles up.",
    painPoints: [
      "A wellness app is collecting intimate behavior or health-adjacent signals without a crisp boundary.",
      "Growth features and data features expanded faster than privacy architecture did.",
      "The team wants a strong privacy posture without overbuilding compliance theater.",
      "Founders need someone to say which defaults are actually risky and which are just noisy.",
    ],
    reviewIncludes: [
      "A product-boundary read across onboarding, collection, retention, export, and sharing paths.",
      "Identification of the privacy defaults most likely to make users hesitate or opt out.",
      "A simple roadmap for tightening minimization and expectation-setting.",
      "Guidance on whether the product needs a quick teardown or a full review.",
    ],
    bestFit: [
      "Wellness and behavior-change apps with health-adjacent or intimate data exposure.",
      "Teams before launch, relaunch, or partnership discussions.",
      "Founders who want privacy architecture that matches product reality.",
    ],
    proofHref: "/writing/privacy-first-pain-tracking",
    proofLabel: "Read the privacy-first health workflow article",
    artifactHref: "/case-study/pain-tracker",
    artifactLabel: "Inspect the flagship health workflow case study",
  },
  {
    slug: "trust-review-for-mental-health-apps",
    query: "trust review for mental health apps",
    title: "Trust Review for Mental Health Apps",
    description:
      "Review for mental health apps that need safer defaults, clearer boundaries, and fewer harmful assumptions around sensitive user states.",
    summary:
      "Mental health products create risk quickly because user context is often fragile, low-energy, and high-consequence. This review focuses on the product decisions most likely to fail users before users or clinicians do.",
    painPoints: [
      "The app handles emotionally sensitive workflows but still assumes high attention and stable conditions.",
      "Collection, retention, or sharing defaults are broader than the product actually needs.",
      "The user experience says support and privacy while the architecture says surveillance and dependency.",
      "The team needs a sharper product boundary before launch, pilots, or referrals.",
    ],
    reviewIncludes: [
      "A review of the defaults most likely to feel unsafe or coercive in practice.",
      "Boundary analysis across identity, storage, export, notifications, and recovery states.",
      "A prioritized set of product and architecture corrections.",
      "A recommendation on the smallest useful engagement path from here.",
    ],
    bestFit: [
      "Mental health, emotional support, therapy-adjacent, or recovery tools.",
      "Teams with live users or near-term launch pressure.",
      "Founders who want concrete fixes, not just reassuring language.",
    ],
    proofHref: "/proof",
    proofLabel: "Inspect the proof surface for trust-reduction work",
    artifactHref: "/artifacts/security-and-audits/redacted-threat-model-excerpt",
    artifactLabel: "Inspect a redacted trust artifact",
  },
  {
    slug: "security-review-before-launch-sensitive-apps",
    query: "security review before launch for sensitive apps",
    title: "Security Review Before Launch for Sensitive Apps",
    description:
      "Pre-launch security and product review for sensitive apps that need risky defaults, weak boundaries, and misleading claim surfaces identified before release.",
    summary:
      "This is for teams that know a generic penetration test is not the whole answer. The goal is to find the launch-relevant security and product failures inside the product model itself, not only perimeter weaknesses.",
    painPoints: [
      "The team wants a launch review that goes deeper than infrastructure scanning.",
      "Product behavior, copy, and data handling have not been checked as one system.",
      "Security language exists, but the release still hides fragile assumptions.",
      "The team needs a short, ranked risk picture before public exposure grows.",
    ],
    reviewIncludes: [
      "A product-level review of security-relevant defaults, boundaries, and failure states.",
      "The few issues most likely to matter first at launch.",
      "A clear separation between urgent fixes and later hardening work.",
      "A written readout that helps the team defend release decisions.",
    ],
    bestFit: [
      "Sensitive-data apps preparing for launch or major release.",
      "Teams that need more than a generic pentest framing.",
      "Founders who want launch-relevant hardening without posturing.",
    ],
    proofHref: "/proof",
    proofLabel: "Inspect the proof surface and artifacts",
    artifactHref: "/artifacts/security-and-audits/defensibility-packet-preview",
    artifactLabel: "Open the defensibility packet preview",
  },
  {
    slug: "data-minimization-review-for-apps",
    query: "data minimization review for apps",
    title: "Data Minimization Review for Apps",
    description:
      "Data minimization review for apps that need a smaller collection boundary, clearer retention posture, and fewer risky defaults.",
    summary:
      "When a product collects more than it needs, every other privacy discussion gets harder. This review is for founders who want a practical minimization pass that reduces risk without flattening the product into nothing.",
    painPoints: [
      "The current data model grew around convenience instead of necessity.",
      "Retention and export behavior are not obviously justified by the core job.",
      "The team can feel the excess collection but has not mapped it clearly.",
      "Users or buyers are likely to ask questions the product cannot answer cleanly today.",
    ],
    reviewIncludes: [
      "A minimization-first read of what should stay, what should narrow, and what should go.",
      "Boundary review across storage, retention, logs, analytics, and user-initiated export.",
      "A prioritized list of fixes that reduce exposure fast.",
      "A recommendation on whether a quick teardown or full review is warranted next.",
    ],
    bestFit: [
      "Apps with sensitive workflows, buyer scrutiny, or uneasy default collection patterns.",
      "Teams that need a buyer-defensible minimization story.",
      "Founders who prefer narrower systems over bigger policies.",
    ],
    proofHref: "/writing/reduce-data-collection-risk-before-launch",
    proofLabel: "Read the founder-facing minimization article",
    artifactHref: "/artifacts/security-and-audits/redacted-threat-model-excerpt",
    artifactLabel: "Inspect a redacted review artifact",
  },
  {
    slug: "launch-readiness-review-for-sensitive-data-products",
    query: "launch readiness review for sensitive data products",
    title: "Launch Readiness Review for Sensitive-Data Products",
    description:
      "Launch readiness review for sensitive-data products that need a clear view of product risk, privacy gaps, and boundary failures before going live.",
    summary:
      "Some teams do not need a theory discussion. They need to know whether the product is about to launch with silent failures that will become expensive once users, buyers, or partners begin inspecting it.",
    painPoints: [
      "Launch is close but nobody has forced the product to justify its core boundary.",
      "Privacy, security, and UX decisions have not been reviewed as one system.",
      "The team needs a smaller, sharper launch-risk picture right now.",
      "There is pressure to ship, but not enough confidence in the defaults.",
    ],
    reviewIncludes: [
      "A fast launch-facing read of the defaults most likely to create friction or distrust.",
      "A short prioritized roadmap for what to fix before launch versus after launch.",
      "A plain-English explanation of where the product boundary currently breaks.",
      "A recommendation on whether to stop at the teardown or move into a deeper review.",
    ],
    bestFit: [
      "Founders with a real launch date and sensitive workflow exposure.",
      "Small teams that need ranked findings, not abstract advice.",
      "Products where the cost of being wrong at launch is trust loss, not just bug reports.",
    ],
    proofHref: "/services/pre-launch-privacy-audit",
    proofLabel: "See the pre-launch privacy audit page",
    artifactHref: "/proof",
    artifactLabel: "Inspect proof and case studies first",
  },
];

export function getBuyerIntentPage(slug: string) {
  return BUYER_INTENT_PAGES.find((page) => page.slug === slug);
}