export type Project = {
  slug: string;
  title: string;
  summary: string;
  description: string;
  tags: string[];
  links: { label: string; href: string }[];
  highlight?: boolean;
};

export const projects: Project[] = [
  {
    slug: "pain-tracker",
    title: "PainTracker.ca",
    summary:
      "Privacy-first chronic pain tracking PWA. Local-first by default. Offline-capable.",
    description:
      "A privacy-first, offline-capable pain documentation system designed for cognitive overload and degraded conditions. No accounts required. Data stays local by default.",
    tags: ["Local-first", "PWA", "Privacy", "Protective UX"],
    links: [
      { label: "Live app", href: "https://paintracker.ca" },
      {
        label: "GitHub repo",
        href: "https://github.com/CrisisCore-Systems/pain-tracker",
      },
    ],
    highlight: true,
  },
  {
    slug: "overton-framework",
    title: "Protective Computing Canon (Zenodo)",
    summary:
      "A layered discipline for systems built under instability: theory → operations → measurement.",
    description:
      "Protective Computing is an engineered discipline for systems built under human vulnerability: foundational theory (Overton Framework), operational translation (Field Guide), and measurement & audit (PLS rubric).",
    tags: ["Canon", "Zenodo", "Audit", "Protective Computing"],
    links: [
      {
        label: "Overton Framework v1.3 — Foundational theory",
        href: "https://doi.org/10.5281/zenodo.18688516",
      },
      {
        label: "Field Guide v0.1 — Operational translation",
        href: "https://doi.org/10.5281/zenodo.18782339",
      },
      {
        label: "PLS v1.0-rc1 — Measurement & audit (review draft)",
        href: "https://doi.org/10.5281/zenodo.18783432",
      },
      {
        label: "Read the canon →",
        href: "https://zenodo.org/communities/protective-computing/records",
      },
    ],
    highlight: true,
  },
  {
    slug: "security-and-audits",
    title: "Security & Collapse Audits",
    summary:
      "Threat modeling + remediation written for adversarial reality (not compliance theater).",
    description:
      "Security review for systems operating under low trust: exploitability, incentives, and failure surfaces. Output is actionable: clear risk boundaries, reproduction steps, and prioritized remediation.",
    tags: ["Security", "Threat Modeling", "Audit", "Systems"],
    links: [
      { label: "Contact", href: "/contact" },
      { label: "Proof", href: "/proof" },
      { label: "GitHub", href: "https://github.com/CrisisCore-Systems" },
    ],
  },
];
