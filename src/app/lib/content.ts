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
    title: "The Overton Framework",
    summary: "Protective Computing canon. DOI-backed. Operational constraints, not vibes.",
    description:
      "A systems discipline for building software that stays safe and usable when stability assumptions fail (connectivity, cognition, safety, institutional trust).",
    tags: ["Framework", "Safety", "Privacy", "HCI"],
    links: [
      { label: "DOI (Zenodo)", href: "https://doi.org/10.5281/zenodo.18688516" },
      {
        label: "Mirror (repo)",
        href: "https://github.com/CrisisCore-Systems/pain-tracker/blob/main/docs/engineering/overton-framework-protective-computing-v1.3.md",
      },
    ],
    highlight: true,
  },
  {
    slug: "security-and-audits",
    title: "Security & Collapse Audits",
    summary:
      "Threat modeling + remediation written to survive adversarial reality.",
    description:
      "Security audits and collapse-vector analysis focused on exploitability, incentives, and operational failure surfaces—written for action, not theater.",
    tags: ["Security", "Threat Modeling", "Systems"],
    links: [{ label: "GitHub profile", href: "https://github.com/CrisisCore-Systems" }],
  },
];
