export type BuyerIntentPage = {
  slug: string;
  title: string;
  description: string;
  summary: string;
  faqs?: Array<{
    question: string;
    answer: string;
  }>;
  useThisWhen?: string[];
  audience?: string[];
  riskProfile?: string;
  painPoints: string[];
  reviewIncludes: string[];
  bestFit: string[];
  exampleFailures?: string[];
  deliverables?: string[];
  proofIntro?: string;
  proofItems?: string[];
  notFit?: string[];
  fitCheckPrompt?: string;
  primaryIndexTarget: boolean;
  parentHref?: string;
  parentLabel?: string;
  proofHref: string;
  proofLabel: string;
  artifactHref: string;
  artifactLabel: string;
};

export const BUYER_INTENT_PAGES: BuyerIntentPage[] = [
  {
    slug: "privacy-review-for-health-apps",
    title: "Privacy Review for Health Apps",
    description:
      "For health and health-adjacent products, this review finds risky collection paths, hidden assumptions, and trust-breaking product behavior before they reach users.",
    summary:
      "Built for founders with a live or near-launch health product who need a concrete read on where the app collects too much, explains too little, or routes intimate user data through the wrong systems.",
    faqs: [
      {
        question: "What does a health app privacy review check?",
        answer:
          "It checks whether the product can defend its collection, consent, storage, sharing, retention, export, recovery, and deletion choices.",
      },
      {
        question: "Is this a legal compliance audit?",
        answer:
          "No. It is a product trust and architecture review. It can support compliance preparation, but it does not replace legal advice.",
      },
      {
        question: "When should a founder use this?",
        answer:
          "Before launch, before buyer review, before adding analytics or AI features, or before making claims about privacy, security, or sensitive data handling.",
      },
      {
        question: "What do I receive?",
        answer:
          "A written review identifying the highest-risk trust failures, why they matter, and what to fix first.",
      },
    ],
    useThisWhen: [
      "The product handles symptoms, mood, disability, care coordination, or wellness behavior.",
      "The team is unsure whether collection, consent, storage, or sharing defaults are too broad.",
      "You need a health-specific product boundary review before launch, partner review, or wider rollout.",
    ],
    audience: [
      "Founders shipping health, wellness, disability, care coordination, or case-management products.",
      "Teams with a live beta, near-launch release, or partner review coming up.",
      "Operators who need product-boundary guidance, not a generic policy rewrite.",
    ],
    riskProfile:
      "The launch risk is a health workflow that quietly normalizes extra collection, background sync, or account-first behavior before the team can explain why those defaults exist.",
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
    exampleFailures: [
      "Symptom, mood, or care data is centralized before the daily workflow proves it needs cloud storage.",
      "Consent copy promises restraint while analytics, logging, or support tooling still capture intimate detail by default.",
      "Export, sharing, or recovery paths are so vague that users cannot tell what leaves the device or when.",
    ],
    deliverables: [
      "A ranked list of the collection, retention, and workflow risks that matter first.",
      "A tighter product boundary for storage, sync, export, and onboarding behavior.",
      "A launch-facing fix order the team can ship against without turning the review into theater.",
    ],
    proofIntro:
      "This review method comes from live sensitive-data product work rather than generic privacy checklist consulting.",
    proofItems: [
      "PainTracker: local-first health logging with explicit export instead of default centralization.",
      "Privacy-first pain tracking writing: product rationale for narrow collection and clearer user control.",
      "PainTracker architecture artifact: concrete system boundary decisions for storage, export, and degraded use.",
    ],
    notFit: [
      "Teams looking for a compliance certificate without product changes.",
      "Products that only need legal document drafting rather than workflow inspection.",
      "General wellness marketing sites with no sensitive user behavior inside the product.",
    ],
    fitCheckPrompt: "the flow where trust or consent feels most fragile",
    primaryIndexTarget: true,
    proofHref: "/case-study/pain-tracker",
    proofLabel: "Inspect the PainTracker health workflow case study",
    artifactHref: "/artifacts/pain-tracker/architecture",
    artifactLabel: "Open the PainTracker architecture artifact",
  },
  {
    slug: "privacy-first-health-app-architecture",
    title: "Privacy-First Health App Architecture",
    description:
      "Architecture review for health apps that need local-first defaults, offline use, explicit export, and less risky health data collection before launch or buyer review.",
    summary:
      "Built for teams shipping health, wellness, disability, or symptom-tracking apps that need the product architecture to match the privacy promise: local-first where it matters, cloud use only when justified, and export paths users can understand.",
    faqs: [
      {
        question: "What is privacy-first health app architecture?",
        answer:
          "It is the product and technical boundary that decides what stays local, what syncs, what gets collected, how export works, and which privacy claims the system can actually defend.",
      },
      {
        question: "Is this only for local-first apps?",
        answer:
          "No. Local-first is often the safer default for sensitive workflows, but the review also maps justified cloud use, sync boundaries, account requirements, and recovery behavior.",
      },
      {
        question: "When should a founder use this?",
        answer:
          "Before launch, before partner review, before adding analytics or AI features, or when the health data flow feels broader than the user job requires.",
      },
      {
        question: "What do I receive?",
        answer:
          "A privacy architecture map, ranked correction list, and practical recommendation on whether the next step is a teardown, full review, or implementation sprint.",
      },
    ],
    useThisWhen: [
      "The app handles symptoms, pain, mood, disability, care notes, medication context, or other intimate health data.",
      "Core use should work offline or under low attention, but the current system assumes accounts, sync, or cloud storage too early.",
      "You need a health app privacy architecture review before launch, buyer review, or a partner conversation.",
    ],
    audience: [
      "Health and wellness founders who need architecture that supports the privacy story.",
      "Teams deciding what should stay local, what can sync, and what should never be collected by default.",
      "Product and engineering leads preparing for launch, procurement, or investor diligence.",
    ],
    riskProfile:
      "The product risk is a sensitive health workflow where cloud-first storage, vague export behavior, and over-broad collection quietly contradict the privacy promise.",
    painPoints: [
      "The app says privacy-first, but the architecture still centralizes intimate records by default.",
      "Offline use, local storage, explicit export, deletion, and recovery have not been reviewed as one system.",
      "Analytics, support tooling, account creation, or AI features widen the health data boundary before anyone can defend it.",
      "The team needs a plain architecture decision map before buyers or users ask sharper questions.",
    ],
    reviewIncludes: [
      "A health data boundary map covering storage, sync, export, retention, deletion, and recovery.",
      "A review of local-first defaults, offline behavior, and the points where cloud authority is justified or excessive.",
      "A ranked correction list for the privacy architecture failures most likely to matter first.",
      "A plain-language story the team can use to explain what the product collects, avoids, and exports.",
    ],
    bestFit: [
      "Health, wellness, chronic condition, disability, care coordination, and symptom-tracking products.",
      "Teams that want privacy-first app architecture, not only policy language.",
      "Founders who need the product to survive trust scrutiny without pretending every cloud dependency is harmless.",
    ],
    exampleFailures: [
      "A chronic pain or symptom app requires an account before the core daily record can exist.",
      "Health notes sync to a cloud account by default even though daily use only needs local storage and explicit export.",
      "The privacy page says user control, but export, deletion, and recovery are hidden behind support or account flows.",
    ],
    deliverables: [
      "A privacy-first health app architecture map for local storage, sync, export, and account boundaries.",
      "A ranked list of fixes that reduce health data exposure before launch or buyer review.",
      "A recommendation on whether this needs a focused teardown, full review, or fix sprint.",
    ],
    proofIntro:
      "This path is grounded in PainTracker, a working privacy-first chronic pain tracking app that uses offline logging, local storage, and explicit export as the reference implementation.",
    proofItems: [
      "PainTracker case study: chronic pain tracking without forced cloud accounts for core use.",
      "PainTracker architecture artifact: local-first storage, offline behavior, and explicit export boundaries.",
      "Privacy-first health app architecture article: the buyer-intent framing for this review path.",
    ],
    notFit: [
      "Teams that want to maximize health data collection for analytics before defining the user job.",
      "Products with no sensitive health workflow or offline continuity requirement.",
      "Organizations looking only for legal policy drafting without product architecture changes.",
    ],
    fitCheckPrompt: "the health data flow that feels hardest to defend",
    primaryIndexTarget: true,
    proofHref: "/writing/privacy-first-health-app-architecture",
    proofLabel: "Read the privacy-first health app architecture article",
    artifactHref: "/artifacts/pain-tracker/architecture",
    artifactLabel: "Inspect the PainTracker architecture artifact",
  },
  {
    slug: "pre-launch-privacy-audit",
    title: "Pre-Launch Privacy Audit for Sensitive Data Apps",
    description:
      "For sensitive-data products approaching release, this audit finds risky defaults, brittle recovery paths, and trust claims the product cannot yet defend.",
    summary:
      "Use this when launch is close and nobody has yet forced the product to justify its collection paths, recovery behavior, logging posture, and trust claims under real operating conditions.",
    faqs: [
      {
        question: "What does a pre-launch privacy audit check?",
        answer:
          "It checks the risky defaults, brittle recovery paths, logging posture, retention choices, and privacy claims most likely to fail under real launch conditions.",
      },
      {
        question: "Is this a compliance certification?",
        answer:
          "No. It is a launch-facing product review that helps the team narrow risky defaults and fix the most important issues before release.",
      },
      {
        question: "When should a founder use this?",
        answer:
          "When launch is close, partner review is coming, or the team is not confident it can defend the current privacy posture.",
      },
      {
        question: "What do I receive?",
        answer:
          "A ranked launch-risk brief, a practical fix order, and written notes the team can use across product, engineering, and buyer conversations.",
      },
    ],
    useThisWhen: [
      "Launch is close and the team cannot clearly defend its privacy claims.",
      "Logging behavior, recovery flows, and data boundaries have not been tested as one product surface.",
      "You need a ranked launch-risk picture before shipping, sales exposure, or stakeholder review.",
    ],
    audience: [
      "Founders with a real launch date, sales pressure, or stakeholder scrutiny.",
      "Teams that need a diagnostic before deciding whether the work stays small or expands into a full review.",
      "Products whose privacy posture will be inspected by buyers, partners, or early users immediately after release.",
    ],
    riskProfile:
      "The launch risk is shipping with unresolved collection, fallback, or messaging gaps that become visible the moment a buyer, partner, or skeptical user starts testing the product boundary.",
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
    exampleFailures: [
      "Marketing or onboarding copy makes calming claims the product cannot support once logging, exports, or support access are inspected.",
      "Critical recovery flows collapse under bad connectivity or partial setup, leaving sensitive users with no reliable fallback.",
      "Retention, analytics, or support tooling remain broader than the launch workflow actually needs.",
    ],
    deliverables: [
      "A ranked launch-risk brief focused on the few issues that matter before release.",
      "A concrete fix order that separates launch-blockers from work that can wait.",
      "Written notes the team can reuse in product, engineering, and buyer conversations.",
    ],
    proofIntro:
      "The audit path is grounded in redacted review artifacts and release-bound trust work, not abstract launch advice.",
    proofItems: [
      "Redacted threat-model excerpt: how risk is scoped without hand-waving.",
      "Defensibility packet preview: what skeptical buyers can inspect after the review.",
      "Protective Computing doctrine: the operating standard behind degraded-condition checks.",
    ],
    notFit: [
      "Teams that are still at idea stage with no product boundary to inspect.",
      "Organizations looking only for infrastructure scanning or a compliance badge.",
      "Founders who want reassurance without narrowing risky defaults.",
    ],
    fitCheckPrompt: "the launch date and the privacy claim you are least confident defending",
    primaryIndexTarget: true,
    proofHref: "/artifacts/security-and-audits/redacted-threat-model-excerpt",
    proofLabel: "Inspect a redacted threat-model excerpt",
    artifactHref: "/artifacts/security-and-audits/defensibility-packet-preview",
    artifactLabel: "Open the defensibility packet preview",
  },
  {
    slug: "ai-trust-review-sensitive-data-products",
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
    primaryIndexTarget: false,
    parentHref: "/services/pre-launch-privacy-audit",
    parentLabel: "Pre-Launch Privacy Audit",
    proofHref: "/case-study/proofvault",
    proofLabel: "Inspect the ProofVault release-bound trust case",
    artifactHref: "/artifacts/security-and-audits/defensibility-packet-preview",
    artifactLabel: "Open the release-bound packet preview",
  },
  {
    slug: "local-first-health-app-architecture",
    title: "Local-First Health App Architecture Review",
    description:
      "For health apps that should survive low attention and bad connectivity, this review maps where local-first defaults, explicit export, and narrower cloud assumptions actually belong.",
    summary:
      "Built for teams shipping health or wellness products that should remain useful under degraded conditions, but still need a practical architecture review before launch or procurement review.",
    faqs: [
      {
        question: "What does a local-first health app architecture review check?",
        answer:
          "It checks what should stay on device, what can sync, how export should work, and where account-first or cloud-first assumptions are creating unnecessary risk.",
      },
      {
        question: "Is this a request to rebuild the whole product?",
        answer:
          "No. The goal is to find the highest-leverage architecture corrections that reduce risk without breaking the core workflow.",
      },
      {
        question: "When should a founder use this?",
        answer:
          "Before launch, before procurement review, or when a health workflow should survive low bandwidth, low attention, or low trust conditions.",
      },
      {
        question: "What do I receive?",
        answer:
          "A local-first boundary map, ranked architecture corrections, and a practical recommendation on whether the next move is a teardown, full review, or implementation sprint.",
      },
    ],
    useThisWhen: [
      "The workflow should keep working under low bandwidth, low attention, or low trust.",
      "The architecture still assumes accounts, sync, or cloud authority too early.",
      "You need to know what should stay local, what can sync, and what should disappear before launch.",
    ],
    audience: [
      "Health and wellness teams deciding whether local-first is a real architectural fit.",
      "Products where continuity, explicit export, and low-friction recovery matter more than analytics convenience.",
      "Founders under launch or partner pressure who need fewer cloud assumptions, not a vague rewrite mandate.",
    ],
    riskProfile:
      "The product risk is an intimate workflow that quietly depends on centralized storage, always-on connectivity, or account-first recovery even when the user job should survive without them.",
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
    exampleFailures: [
      "Daily capture breaks when connectivity drops even though the core workflow should still be available offline.",
      "Sensitive records sync to the cloud by default before the team has justified why local storage is insufficient.",
      "Export and sharing depend on account creation or support intervention instead of explicit user action.",
    ],
    deliverables: [
      "A local-first boundary map showing what should stay on device, what can sync, and what should disappear.",
      "A ranked set of architecture corrections for storage, export, sign-up, and degraded-mode behavior.",
      "A practical recommendation on whether the next move is a teardown, full review, or implementation sprint.",
    ],
    proofIntro:
      "The architecture review is grounded in a live health workflow built around continuity under degraded conditions.",
    proofItems: [
      "PainTracker architecture walkthrough: why local-first mattered to the workflow.",
      "PainTracker architecture artifact: the concrete storage and export model behind that decision.",
      "Protective Computing doctrine: the broader operating model for software under low attention and partial failure.",
    ],
    notFit: [
      "Teams that are committed to centralizing everything for analytics convenience.",
      "Products with no sensitive workflow continuity requirement.",
      "Organizations asking for an infrastructure migration plan rather than a product-boundary review.",
    ],
    fitCheckPrompt: "the workflow that must keep working when connectivity, attention, or trust fails",
    primaryIndexTarget: true,
    proofHref: "/writing/paintracker-architecture",
    proofLabel: "Read the PainTracker architecture walkthrough",
    artifactHref: "/artifacts/pain-tracker/architecture",
    artifactLabel: "Inspect the local-first architecture artifact",
  },
  {
    slug: "reduce-data-collection-risk-before-launch",
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
    primaryIndexTarget: false,
    parentHref: "/services/data-minimization-review-for-apps",
    parentLabel: "Data Minimization Review for Apps",
    proofHref: "/writing/reduce-data-collection-risk-before-launch",
    proofLabel: "Read the founder-facing article on reducing collection risk",
    artifactHref: "/artifacts/security-and-audits/redacted-threat-model-excerpt",
    artifactLabel: "Inspect a redacted review artifact",
  },
  {
    slug: "privacy-architecture-for-wellness-apps",
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
    primaryIndexTarget: false,
    parentHref: "/services/privacy-review-for-health-apps",
    parentLabel: "Privacy Review for Health Apps",
    proofHref: "/writing/privacy-first-pain-tracking",
    proofLabel: "Read the privacy-first health workflow article",
    artifactHref: "/case-study/pain-tracker",
    artifactLabel: "Inspect the flagship health workflow case study",
  },
  {
    slug: "trust-review-for-mental-health-apps",
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
    primaryIndexTarget: false,
    parentHref: "/services/privacy-review-for-health-apps",
    parentLabel: "Privacy Review for Health Apps",
    proofHref: "/case-study",
    proofLabel: "Start with the commercial case study, then inspect proof materials",
    artifactHref: "/artifacts/security-and-audits/redacted-threat-model-excerpt",
    artifactLabel: "Inspect a redacted trust artifact",
  },
  {
    slug: "security-review-before-launch-sensitive-apps",
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
    primaryIndexTarget: false,
    parentHref: "/services/pre-launch-privacy-audit",
    parentLabel: "Pre-Launch Privacy Audit",
    proofHref: "/case-study",
    proofLabel: "Start with the commercial case study, then inspect proof materials",
    artifactHref: "/artifacts/security-and-audits/defensibility-packet-preview",
    artifactLabel: "Open the defensibility packet preview",
  },
  {
    slug: "data-minimization-review-for-apps",
    title: "Data Minimization Review for Apps",
    description:
      "For products collecting more than the core job requires, this review narrows the data boundary, clarifies retention posture, and removes risky defaults before they calcify.",
    summary:
      "Use this when the product collects, logs, or retains more than the core workflow can justify and the team needs a practical minimization pass before launch, procurement, or user scrutiny makes the excess harder to unwind.",
    faqs: [
      {
        question: "What does a data minimization review check?",
        answer:
          "It checks which fields, logs, exports, retention windows, analytics paths, and third-party tools are necessary for the core job and which ones should narrow or disappear.",
      },
      {
        question: "Is this only about policy language?",
        answer:
          "No. It is a product-boundary review of what the system actually collects, stores, retains, and shares by default.",
      },
      {
        question: "When should a founder use this?",
        answer:
          "Before launch, before procurement scrutiny, or when the team already feels the product is collecting more than it can justify cleanly.",
      },
      {
        question: "What do I receive?",
        answer:
          "A minimization-first inventory, a prioritized fix list for storage and logging defaults, and a smaller data story the team can defend.",
      },
    ],
    useThisWhen: [
      "The product collects, logs, exports, or retains more than the core workflow can justify.",
      "The team can feel the excess but has not separated required collection from convenience collection.",
      "You need a buyer-defensible minimization story before launch, procurement, or user scrutiny.",
    ],
    audience: [
      "Founders who can already feel the product collecting too much but need a defensible reduction plan.",
      "Teams with sensitive workflows, buyer scrutiny, or expanding analytics and support tooling.",
      "Products nearing launch or relaunch where excess data would be expensive to explain.",
    ],
    riskProfile:
      "The risk is not just over-collection. It is the accumulation of logs, retention, exports, and third-party tooling that silently widen the product boundary until no one can explain what is actually necessary.",
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
    exampleFailures: [
      "The product captures diagnostic, behavioral, or support data by default even though the core job can run without it.",
      "Retention windows exist because nobody removed them, not because the workflow requires them.",
      "Exports, analytics, or vendor tooling still receive fields that no longer serve a user-facing purpose.",
    ],
    deliverables: [
      "A minimization-first inventory of what should stay, narrow, or be removed.",
      "A prioritized fix list for storage, retention, logging, analytics, and sharing defaults.",
      "A smaller, buyer-defensible data story the team can actually stand behind.",
    ],
    proofIntro:
      "The minimization work is tied to concrete founder guidance and redacted review artifacts, not abstract privacy slogans.",
    proofItems: [
      "Founder-facing minimization article: how to reduce collection risk before launch.",
      "Redacted review artifact: what a narrowed collection boundary looks like in practice.",
      "PainTracker case study: a live example of reducing default collection while preserving the product job.",
    ],
    notFit: [
      "Teams optimizing for maximal data capture or ad-tech style enrichment.",
      "Products that only need terms-of-service cleanup.",
      "Organizations unwilling to remove convenience collection when it is no longer justified.",
    ],
    fitCheckPrompt: "the one data flow that feels hardest to justify",
    primaryIndexTarget: true,
    proofHref: "/writing/reduce-data-collection-risk-before-launch",
    proofLabel: "Read the founder-facing minimization article",
    artifactHref: "/artifacts/security-and-audits/redacted-threat-model-excerpt",
    artifactLabel: "Inspect a redacted review artifact",
  },
  {
    slug: "launch-readiness-review-for-sensitive-data-products",
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
    primaryIndexTarget: false,
    parentHref: "/services/pre-launch-privacy-audit",
    parentLabel: "Pre-Launch Privacy Audit",
    proofHref: "/services/pre-launch-privacy-audit",
    proofLabel: "See the pre-launch privacy audit page",
    artifactHref: "/proof",
    artifactLabel: "Inspect proof and case studies first",
  },
];

export const PRIMARY_BUYER_INTENT_PAGES = BUYER_INTENT_PAGES.filter((page) => page.primaryIndexTarget);

export function getMergedBuyerIntentPages(parentSlug: string) {
  const parentHref = `/services/${parentSlug}`;
  return BUYER_INTENT_PAGES.filter((page) => page.parentHref === parentHref);
}

export function getBuyerIntentPage(slug: string) {
  return BUYER_INTENT_PAGES.find((page) => page.slug === slug);
}
