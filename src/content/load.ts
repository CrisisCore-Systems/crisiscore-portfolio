import fs from "node:fs";
import path from "node:path";
import matter from "gray-matter";
import {
  CanonSchema,
  DossierSchema,
  ProjectSchema,
  WritingFrontmatterSchema,
  type WritingPost,
} from "./schema";

const ROOT = process.cwd();
const CONTENT = path.join(ROOT, "content");

let canonCache: unknown = null;
let projectsCache: unknown[] = [];
let dossiersCache: unknown[] = [];
let writingCache: WritingPost[] | null = null;

function readJSON(filePath: string) {
  const raw = fs.readFileSync(filePath, "utf8");
  return JSON.parse(raw) as unknown;
}

export function loadCanon() {
  if (canonCache === null) {
    canonCache = readJSON(path.join(CONTENT, "canon.json"));
  }
  return CanonSchema.parse(canonCache);
}

export function loadProjects() {
  if (projectsCache.length === 0) {
    const dir = path.join(CONTENT, "projects");
    const files = fs.readdirSync(dir).filter((f) => f.endsWith(".json"));
    projectsCache = files.map((f) => readJSON(path.join(dir, f)));
  }

  const canon = loadCanon();
  const canonLinks = canon.layers.flatMap((layer) =>
    layer.links.map((l) => {
      if (l.label === "DOI (Zenodo)" || l.label === "DOI") {
        return {
          ...l,
          label: `DOI (${layer.title})`,
        };
      }
      return l;
    })
  );

  return projectsCache
    .map((raw) => {
      const p = ProjectSchema.parse(raw);
      if (p.slug === "overton-framework") {
        return {
          ...p,
          links: canonLinks,
        };
      }
      return p;
    })
    .sort((a, b) => a.title.localeCompare(b.title));
}

export function loadProject(slug: string) {
  const projects = loadProjects();
  const p = projects.find((x) => x.slug === slug);
  if (!p) throw new Error(`Unknown project slug: ${slug}`);
  return p;
}

export function loadDossiers() {
  if (dossiersCache.length === 0) {
    const dir = path.join(CONTENT, "dossiers");
    if (fs.existsSync(dir)) {
      const files = fs.readdirSync(dir).filter((f) => f.endsWith(".json"));
      dossiersCache = files.map((f) => readJSON(path.join(dir, f)));
    }
  }

  return dossiersCache.map((raw) => DossierSchema.parse(raw));
}

export function loadDossier(slug: string) {
  const dossiers = loadDossiers();
  return dossiers.find((d) => d.slug === slug);
}

export function loadWriting(): WritingPost[] {
  if (writingCache !== null) return writingCache;

  const dir = path.join(CONTENT, "writing");
  if (!fs.existsSync(dir)) {
    writingCache = [];
    return writingCache;
  }

  const files = fs.readdirSync(dir).filter((f) => f.endsWith(".mdx"));
  writingCache = files
    .map((f) => {
      const slug = f.replace(/\.mdx$/, "");
      return loadWritingPost(slug);
    })
    .sort((a, b) => (a.frontmatter.date < b.frontmatter.date ? 1 : -1));

  return writingCache;
}

export function loadWritingPost(slug: string): WritingPost {
  const full = path.join(CONTENT, "writing", `${slug}.mdx`);
  const raw = fs.readFileSync(full, "utf8");
  const parsed = matter(raw);
  const frontmatter = WritingFrontmatterSchema.parse(parsed.data);

  return {
    slug,
    frontmatter,
    content: parsed.content,
  };
}
