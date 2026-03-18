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
    slug: "pain-tracker/ui-01-fastlog",
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
  {
    slug: "security-and-audits/defensibility-packet-preview",
    title: "Defensibility Packet preview",
    summary: "Redacted specimen showing the packet outline, measurable endpoints, and required access boundary.",
    kind: "svg",
    rawPath: "/assets/proof-cards/defensibility_packet_preview_wide_16x9.svg",
    githubMirror:
      "https://github.com/CrisisCore-Systems/crisiscore-portfolio/blob/main/public/assets/proof-cards/defensibility_packet_preview_wide_16x9.svg",
  },
  {
    slug: "overton-framework/protective-computing-lifecycle",
    title: "Protective computing lifecycle diagram",
    summary: "Diagram plate showing the discipline from baseline doctrine through operational translation and audit measurement.",
    kind: "svg",
    rawPath: "/assets/diagram_plates/diagram_02_protective_computing_lifecycle.svg",
    githubMirror:
      "https://github.com/CrisisCore-Systems/crisiscore-portfolio/blob/main/public/assets/diagram_plates/diagram_02_protective_computing_lifecycle.svg",
  },
  {
    slug: "overton-framework/local-authority-vs-cloud-dependence",
    title: "Local authority vs cloud dependence diagram",
    summary: "Trust-boundary comparison between user authority and infrastructure dependence.",
    kind: "svg",
    rawPath: "/assets/diagram_plates/diagram_04_local_authority_vs_cloud_dependence.svg",
    githubMirror:
      "https://github.com/CrisisCore-Systems/crisiscore-portfolio/blob/main/public/assets/diagram_plates/diagram_04_local_authority_vs_cloud_dependence.svg",
  },
  {
    slug: "security-and-audits/threat-boundary-map",
    title: "Threat boundary map",
    summary: "Diagram plate showing assets, adversaries, trust edges, and where protective assumptions stop.",
    kind: "svg",
    rawPath: "/assets/diagram_plates/diagram_03_threat_boundary_map.svg",
    githubMirror:
      "https://github.com/CrisisCore-Systems/crisiscore-portfolio/blob/main/public/assets/diagram_plates/diagram_03_threat_boundary_map.svg",
  },
  {
    slug: "security-and-audits/defensibility-packet-flow",
    title: "Defensibility packet flow diagram",
    summary: "Diagram plate showing how findings, evidence, and decision support turn into a review-ready packet.",
    kind: "svg",
    rawPath: "/assets/diagram_plates/diagram_06_defensibility_packet_flow.svg",
    githubMirror:
      "https://github.com/CrisisCore-Systems/crisiscore-portfolio/blob/main/public/assets/diagram_plates/diagram_06_defensibility_packet_flow.svg",
  },
];

export function getArtifact(slug: string) {
  return ARTIFACTS.find((x) => x.slug === slug);
}

export function getArtifactByRawPath(rawPath: string) {
  return ARTIFACTS.find((x) => x.rawPath === rawPath);
}
