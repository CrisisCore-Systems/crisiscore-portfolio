export type ArtifactEntry = {
  slug: string;
  title: string;
  summary: string;
  kind: "svg" | "markdown";
  rawPath: string;
  githubMirror: string;
};

export const ARTIFACTS: ArtifactEntry[] = [
  {
    slug: "pain-tracker/architecture",
    title: "PainTracker architecture diagram",
    summary: "Architecture sketch for local-first pain tracking flow.",
    kind: "svg",
    rawPath: "/projects/pain-tracker/architecture.svg",
    githubMirror:
      "https://github.com/CrisisCore-Systems/crisiscore-portfolio/blob/main/public/projects/pain-tracker/architecture.svg",
  },
  {
    slug: "pain-tracker/ui-01",
    title: "PainTracker UI artifact (fast logging)",
    summary: "UI sketch showing low-friction entry under constraint.",
    kind: "svg",
    rawPath: "/projects/pain-tracker/ui-01.svg",
    githubMirror:
      "https://github.com/CrisisCore-Systems/crisiscore-portfolio/blob/main/public/projects/pain-tracker/ui-01.svg",
  },
  {
    slug: "pain-tracker/ui-02",
    title: "PainTracker UI artifact (export and proof surface)",
    summary: "UI sketch showing export controls and verification surface.",
    kind: "svg",
    rawPath: "/projects/pain-tracker/ui-02.svg",
    githubMirror:
      "https://github.com/CrisisCore-Systems/crisiscore-portfolio/blob/main/public/projects/pain-tracker/ui-02.svg",
  },
  {
    slug: "security-and-audits/audit-pipeline",
    title: "Security audit pipeline diagram",
    summary: "Scope → model → reproduce → remediate → verify workflow.",
    kind: "svg",
    rawPath: "/projects/security-and-audits/audit-pipeline.svg",
    githubMirror:
      "https://github.com/CrisisCore-Systems/crisiscore-portfolio/blob/main/public/projects/security-and-audits/audit-pipeline.svg",
  },
  {
    slug: "security-and-audits/redacted-threat-model-excerpt",
    title: "Redacted threat model excerpt",
    summary: "Sample artifact showing boundary, adversaries, findings, and closure criteria.",
    kind: "markdown",
    rawPath: "/projects/security-and-audits/redacted-threat-model-excerpt.md",
    githubMirror:
      "https://github.com/CrisisCore-Systems/crisiscore-portfolio/blob/main/public/projects/security-and-audits/redacted-threat-model-excerpt.md",
  },
];

export function getArtifact(slug: string) {
  return ARTIFACTS.find((x) => x.slug === slug);
}

export function getArtifactByRawPath(rawPath: string) {
  return ARTIFACTS.find((x) => x.rawPath === rawPath);
}
