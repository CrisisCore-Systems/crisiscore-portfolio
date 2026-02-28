export type DossierSection = {
  title: string;
  body: string[];
};

export type DossierLink = {
  label: string;
  href: string;
};

export type DossierImage = {
  src: string;
  alt: string;
  width: number;
  height: number;
};

export type ProjectDossier = {
  slug: string;
  tagline: string;
  problem: DossierSection;
  constraints: { title: string; items: string[] };
  architecture: {
    title: string;
    body: string[];
    diagram?: DossierImage;
  };
  proof: {
    title: string;
    links: DossierLink[];
  };
  outcomes: { title: string; items: string[] };
  images?: { title: string; items: DossierImage[] };
};

export const DOSSIERS: Record<string, ProjectDossier> = {
  "pain-tracker": {
    slug: "pain-tracker",
    tagline:
      "Privacy-first pain documentation built for low energy, low trust, and partial connectivity.",
    problem: {
      title: "Problem",
      body: [
        "People living with chronic pain need consistent documentation for themselves, clinicians, and disability processes—without turning their body into a data exhaust product.",
        "Most trackers assume stability: always-online sync, account creation, high attention, and high trust. Those assumptions fail precisely when the user needs the tool most.",
      ],
    },
    constraints: {
      title: "Constraints",
      items: [
        "Degraded-first: low battery, low bandwidth, interrupted sessions.",
        "Cognitive overload: reduce steps, reduce choices, preserve progress.",
        "Privacy-first: avoid default data centralization; minimize third-party surfaces.",
        "Reversibility: exports are explicit; user remains the authority.",
      ],
    },
    architecture: {
      title: "Architecture",
      body: [
        "Local-first by default: entries persist on-device using browser storage so the system remains usable offline and under partial connectivity.",
        "Sharing is user-controlled: the primary proof artifact is an explicit export that can be used for clinicians or records when the user chooses.",
      ],
      diagram: {
        src: "/projects/pain-tracker/architecture.svg",
        alt: "PainTracker architecture sketch: client UI, local store, offline support, optional export",
        width: 1200,
        height: 675,
      },
    },
    proof: {
      title: "Proof",
      links: [
        { label: "Live app", href: "https://paintracker.ca" },
        {
          label: "GitHub repo",
          href: "https://github.com/CrisisCore-Systems/pain-tracker",
        },
      ],
    },
    outcomes: {
      title: "Outcomes",
      items: [
        "A working local-first PWA surface (live deployment) designed around protective UX primitives.",
        "Measurable activity is exposed directly on the dossier via live repo stats (stars / last push), rather than narrative claims.",
      ],
    },
    images: {
      title: "Artifacts",
      items: [
        {
          src: "/projects/pain-tracker/ui-01.svg",
          alt: "PainTracker interface sketch showing fast logging",
          width: 1200,
          height: 750,
        },
        {
          src: "/projects/pain-tracker/ui-02.svg",
          alt: "PainTracker interface sketch showing export and proof surface",
          width: 1200,
          height: 750,
        },
      ],
    },
  },

  "security-and-audits": {
    slug: "security-and-audits",
    tagline:
      "Audit work for systems that operate under low trust: adversarial access, coercion risk, incentive pressure, and degraded operational reality.",
    problem: {
      title: "Problem",
      body: [
        "Most security output fails at the moment it matters: it’s too abstract, too compliance-shaped, or too disconnected from real adversaries and real operator constraints.",
        "This work focuses on exploitability, incentive-driven failure, and operational collapse vectors. The goal is to produce remediation that is testable and survivable, not performative.",
      ],
    },
    constraints: {
      title: "Constraints",
      items: [
        "Assume adversarial reality: motivated attackers, not hypothetical ones.",
        "Minimize theater: findings must include reproduction paths or falsifiable tests.",
        "Threat boundaries are explicit: what is protected, from whom, and under what assumptions.",
        "Prioritize operator usefulness: triage order, hard-fail guards, and clear next actions.",
        "Respect degraded environments: low trust, partial observability, incident pressure.",
      ],
    },
    architecture: {
      title: "Method",
      body: [
        "Start with boundaries and incentives: define assets, actors, and the minimum conditions required for safety. If those conditions don’t hold, the system must fail safe.",
        "Model the attack surface (network, dependencies, authn/authz, data flows, key material, privileged paths) and the operational surface (on-call reality, logging, rollback, incident response).",
        "Convert risks into a prioritized remediation plan with verification steps: patches + tests + observable evidence that the failure mode is actually closed.",
      ],
      diagram: {
        src: "/projects/security-and-audits/audit-pipeline.svg",
        alt: "Audit pipeline diagram: scope and threat model, map surfaces, reproduce issues, remediate, verify, and harden",
        width: 1200,
        height: 675,
      },
    },
    proof: {
      title: "Proof",
      links: [
        { label: "Contact", href: "/contact" },
        { label: "Proof page", href: "/proof" },
        { label: "GitHub", href: "https://github.com/CrisisCore-Systems" },
        {
          label: "Protective Legitimacy Score (PLS) — rubric",
          href: "https://doi.org/10.5281/zenodo.18783432",
        },
      ],
    },
    outcomes: {
      title: "Outputs",
      items: [
        "A threat model with explicit assumptions and hard boundaries (what must not fail).",
        "Actionable findings: reproduction steps, impact, and recommended fixes.",
        "A remediation plan ordered by risk reduction per unit effort.",
        "Verification steps: tests or procedures that prove the issue is closed.",
        "Operator-ready notes: rollback guidance and failure-mode monitoring suggestions.",
      ],
    },
  },
};
