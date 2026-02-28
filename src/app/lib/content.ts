export type Project = {
  title: string;
  description: string;
  tags: string[];
  href: string;
  highlight?: boolean;
};

export type Writing = {
  title: string;
  description: string;
  date: string; // YYYY-MM-DD
  href: string;
};

export const projects: Project[] = [
  {
    title: "PainTracker.ca",
    description:
      "Privacy-first chronic pain tracking PWA. Local-first by default. No accounts required. Designed for cognitive overload and degraded conditions.",
    tags: ["Local-first", "PWA", "Privacy", "Protective UX"],
    href: "https://paintracker.ca",
    highlight: true,
  },
  {
    title: "The Overton Framework",
    description:
      "Protective Computing under conditions of human vulnerability. A systems discipline for safety, containment, reversibility, and coercion resistance.",
    tags: ["Framework", "HCI", "Safety", "Privacy"],
    href: "https://github.com/CrisisCore-Systems", // swap to Zenodo/landing page if you prefer
    highlight: true,
  },
  {
    title: "Security & Protocol Collapse Audits",
    description:
      "Recursive threat modeling, economic risk surfaces, and remediation proposals—written to survive adversarial conditions, not impress dashboards.",
    tags: ["Security", "DeFi", "Threat Modeling"],
    href: "https://github.com/CrisisCore-Systems",
  },
];

export const writing: Writing[] = [
  {
    title: "Why privacy-first health tools must be offline-capable",
    description:
      "Stability assumptions fail in real life. Here’s what protective architecture looks like when everything degrades.",
    date: "2026-02-01",
    href: "/writing",
  },
  {
    title: "Protective legitimacy: building software people can trust again",
    description:
      "Trust is not a marketing claim. It’s an architectural property.",
    date: "2026-01-10",
    href: "/writing",
  },
];
