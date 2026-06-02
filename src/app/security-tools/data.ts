export type SecurityToolPage = {
  slug: string;
  title: string;
  description: string;
  summary: string;
  problem: string;
  who: string[];
  reviewIncludes: string[];
  deliverables: string[];
  exampleFindings: string[];
  faqs?: Array<{
    question: string;
    answer: string;
  }>;
  pricing: string;
  ctaLabel: string;
  ctaHref: string;
  proofHref?: string;
  proofLabel?: string;
};

export const SECURITY_TOOL_PAGES: SecurityToolPage[] = [
  {
    slug: "trust-surface-audit",
    title: "Trust Surface Audit",
    description:
      "A focused audit of the product's buyer-facing trust surface: the claims, boundaries, and failure paths buyers see first.",
    summary:
      "A direct service for teams that need a concrete trust audit instead of another abstract writeup. This page makes trust tangible, specific, and purchasable.",
    problem:
      "CrisisCore communicates trust expertise, but visitors need a discrete audit product for the actual trust surface they can buy.",
    who: [
      "Founders shipping sensitive or buyer-facing products with visible trust signals.",
      "Teams preparing for procurement or partner review and need the product surface mapped clearly.",
      "Operators who want a concrete audit instead of a broad trust thesis.",
    ],
    reviewIncludes: [
      "A map of the product's trust surface: claims, boundaries, and the visible risk points buyers judge first.",
      "A gap analysis between the product story and actual behavior.",
      "A review of the most important trust-breaking surfaces and evidence gaps.",
      "A recommendation on whether the right next step is teardown, full review, or fix sprint.",
    ],
    deliverables: [
      "A ranked list of the highest-value trust and boundary risks.",
      "A plain-language audit brief buyers and stakeholders can understand.",
      "Concrete first fixes for the most damaging trust gaps.",
      "A clear next-step recommendation sized to the current product stage.",
    ],
    exampleFindings: [
      "A public privacy claim that cannot be defended by the product behavior or evidence.",
      "A hidden collection path that contradicts the visible trust story.",
      "A fallback or recovery flow that exposes sensitive state without explicit consent.",
      "A sync or account requirement that widens the trust surface without justification.",
    ],
    faqs: [
      {
        question: "What does a Trust Surface Audit inspect?",
        answer:
          "It inspects the buyer-facing surface: claims, consent, data boundaries, fallback behavior, and the few product gaps that make trust feel abstract instead of concrete.",
      },
      {
        question: "Is this a security assessment or a product review?",
        answer:
          "It is both. It treats trust as a product surface and checks whether security, privacy, and UX signals line up with real behavior.",
      },
    ],
    pricing: "Starting at CA$1,400.",
    ctaLabel: "Ask whether a Trust Surface Audit fits",
    ctaHref: "/trust-risk-read",
    proofHref: "/proof",
    proofLabel: "See how evidence-based review work is presented",
  },
  {
    slug: "privacy-risk-review",
    title: "Privacy Risk Review",
    description:
      "A dedicated privacy-risk review for products with sensitive user data, focused on whether the product actually enforces the privacy story it tells.",
    summary:
      "This page is for teams that need a direct, purchasable privacy risk audit rather than another abstract privacy manifesto.",
    problem:
      "Visitors understand privacy expertise is present, but they need a product page that makes the review offer clear, specific, and actionable.",
    who: [
      "Teams handling personal, health, location, or behavioral data.",
      "Founders who have made privacy-first claims and need the product boundary to match them.",
      "Products under launch pressure, buyer review, or external scrutiny.",
    ],
    reviewIncludes: [
      "A review of actual collection, retention, sharing, export, deletion, and recovery behavior.",
      "An audit of where privacy claims exceed the product's current evidence.",
      "A check of third-party and vendor data flows that create hidden risk.",
      "A prioritized list of the privacy gaps most worth fixing before launch.",
    ],
    deliverables: [
      "A ranked privacy-risk brief with the few issues worth fixing first.",
      "A tighter, buyer-defensible product boundary for data collection and sharing.",
      "A concrete fix order tailored to launch readiness.",
      "A written brief the team can reuse in product and buyer conversations.",
    ],
    exampleFindings: [
      "Analytics or logging paths still receive sensitive context despite a privacy promise.",
      "Retention or export behavior is broad without a clear product reason.",
      "Export, deletion, or consent paths are hidden behind support or accounts.",
      "Vendor tools receive fields that the product cannot clearly justify to buyers.",
    ],
    faqs: [
      {
        question: "Will this replace a legal privacy audit?",
        answer:
          "No. It is a product and risk review that helps you narrow the privacy surface and make the product defensible before a legal or compliance review.",
      },
      {
        question: "What do I need to provide?",
        answer:
          "A product link, the current privacy story, and the flows you are least confident defending.",
      },
    ],
    pricing: "Starting at CA$1,100.",
    ctaLabel: "Check whether a Privacy Risk Review fits",
    ctaHref: "/trust-risk-read",
    proofHref: "/writing/reduce-data-collection-risk-before-launch",
    proofLabel: "Read the founder-facing minimization article",
  },
  {
    slug: "failure-mode-analysis",
    title: "Failure Mode Analysis",
    description:
      "A dedicated failure-mode analysis for sensitive products that must survive bad connectivity, partial failure, or hostile user conditions.",
    summary:
      "This page turns failure-mode thinking into a focused product offering instead of a generic resilience discussion.",
    problem:
      "The site talks about collapse and failures, but visitors need a concrete product page they can buy for real failure-mode analysis.",
    who: [
      "Products with critical recovery, offline, or degraded-mode behavior.",
      "Teams that need the system to fail safely instead of only failing loudly.",
      "Founders who need a productizable review of the worst-case states users will encounter.",
    ],
    reviewIncludes: [
      "A review of degraded and failure states across UX, data flow, and system behavior.",
      "A prioritized inventory of the failure modes that matter most first.",
      "A check of whether the product preserves privacy and trust under partial failure.",
      "A recommendation for whether to harden the failure surface or reduce scope.",
    ],
    deliverables: [
      "A prioritized failure-mode report for the product's real operating conditions.",
      "A concrete list of hardening recommendations for current failure paths.",
      "Safer default behavior for the key degraded states.",
      "A written briefing that the team can use with engineering, product, and risk stakeholders.",
    ],
    exampleFindings: [
      "Offline mode drops sensitive state without warning or recovery options.",
      "Partial sync creates stale or inconsistent records that expose private context.",
      "Login or support failures leak more user data than the normal workflow.",
      "A recovery flow surfaces sensitive state through unsupported channels.",
    ],
    faqs: [
      {
        question: "Why is failure-mode analysis important?",
        answer:
          "Because users and buyers judge a system by what happens when it goes wrong, not just by ideal security claims.",
      },
      {
        question: "Does this require a full architecture redesign?",
        answer:
          "No. The goal is to identify the smallest useful hardening changes for the current product stage.",
      },
    ],
    pricing: "Starting at CA$1,250.",
    ctaLabel: "Ask whether a Failure Mode Analysis fits",
    ctaHref: "/trust-risk-read",
    proofHref: "/proof",
    proofLabel: "See how product failure work is presented",
  },
  {
    slug: "protective-computing-review",
    title: "Protective Computing Review",
    description:
      "A dedicated review that turns Protective Computing doctrine into a concrete service: audits for human vulnerability, evidence artifacts, and safer defaults.",
    summary:
      "This page is for teams who need Protective Computing to be a defined, purchasable product path, not only a philosophy page.",
    problem:
      "Protective Computing is currently positioned as doctrine, but buyers need a direct way to purchase a Protective Computing review.",
    who: [
      "Teams building for human vulnerability, low trust, or degraded operating conditions.",
      "Founders who need evidence-backed safety without abstract theory.",
      "Products where hostile or unreliable environments are a real part of the risk model.",
    ],
    reviewIncludes: [
      "A protective posture audit that checks whether the product enforces safer defaults when things go wrong.",
      "An evidence-gap review for the claims the product makes.",
      "A check of whether fallback behavior preserves privacy and trust.",
      "A recommendation for the safest next step in the product risk path.",
    ],
    deliverables: [
      "A protective posture scorecard for the product's current behavior.",
      "A ranked list of the evidence gaps most worth closing first.",
      "Recommendations for safer defaults, fallback behavior, and proof artifacts.",
      "A written brief that translates doctrine into product decisions.",
    ],
    exampleFindings: [
      "The fallback path is less safe than the normal path, but it is still the one users will see first.",
      "Safety claims are not backed by any observable verification or evidence chain.",
      "Critical recovery behavior is assumed instead of designed and verified.",
      "A sensitive workflow is treated as an ideal case instead of a hostile case.",
    ],
    faqs: [
      {
        question: "How is Protective Computing different from a standard security review?",
        answer:
          "It is focused on real human vulnerability, evidence, and whether the product can survive adversarial or degraded conditions, not just on perimeter controls.",
      },
      {
        question: "Is this only for safety-critical products?",
        answer:
          "No. It is for any product where the user, environment, or buyer can make the assumed happy path unsafe.",
      },
    ],
    pricing: "Starting at CA$1,450.",
    ctaLabel: "Check whether a Protective Computing Review fits",
    ctaHref: "/trust-risk-read",
    proofHref: "/writing/protective-computing-doctrine",
    proofLabel: "Read the Protective Computing doctrine article",
  },
  {
    slug: "local-first-security-audit",
    title: "Local-First Security Audit",
    description:
      "A dedicated security audit for apps that need local-first defaults, explicit export, and a smaller cloud surface.",
    summary:
      "This page turns local-first security into a distinct service offering instead of a product story.",
    problem:
      "The site signals local-first thinking, but visitors need a dedicated local-first security offer they can purchase directly.",
    who: [
      "Apps that should keep sensitive data local by default or work under bad connectivity.",
      "Founders who want a security audit anchored in explicit export and minimized cloud surface.",
      "Teams that need local-first security to be a defined, buyer-facing product.",
    ],
    reviewIncludes: [
      "A local-first boundary review for storage, sync, export, and device behavior.",
      "A security check on the cloud authority and data flow assumptions.",
      "An audit of explicit export, deletion, and recovery paths for sensitive local data.",
      "A recommendation on which defaults should stay local and which ones need to be hardened.",
    ],
    deliverables: [
      "A local-first security boundary map showing what must stay local and what can sync.",
      "A ranked list of the first security corrections for local data and cloud flows.",
      "A concrete path to safer export and recovery behavior.",
      "A written briefing that the team can use with product, engineering, and buyers.",
    ],
    exampleFindings: [
      "Default sync sends sensitive local data to the cloud without a clear user choice.",
      "Export and deletion behavior is hidden behind support or account flows.",
      "Local state is not protected in the ways the privacy story implies.",
      "The product assumes ideal connectivity for workflows that should survive offline or degraded use.",
    ],
    faqs: [
      {
        question: "What makes a security audit local-first?",
        answer:
          "It evaluates whether sensitive defaults stay local, and only cloud-enable the workflow when the product can clearly justify it.",
      },
      {
        question: "Is this audit only for mobile apps?",
        answer:
          "No. It is for any product where local behavior, explicit export, and reduced cloud exposure are part of the trust model.",
      },
    ],
    pricing: "Starting at CA$1,200.",
    ctaLabel: "Ask whether a Local-First Security Audit fits",
    ctaHref: "/trust-risk-read",
    proofHref: "/case-study/pain-tracker",
    proofLabel: "Inspect a local-first case study",
  },
];

export function getSecurityToolPage(slug: string) {
  return SECURITY_TOOL_PAGES.find((page) => page.slug === slug);
}
