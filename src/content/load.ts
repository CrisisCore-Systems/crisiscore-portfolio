import fs from "node:fs";
import path from "node:path";
import { CanonSchema, ProjectSchema } from "./schema";

const ROOT = process.cwd();
const CONTENT = path.join(ROOT, "content");

let canonCache: unknown | undefined;
let projectsCache: unknown[] | undefined;

function readJSON(filePath: string) {
  const raw = fs.readFileSync(filePath, "utf8");
  return JSON.parse(raw) as unknown;
}

export function loadCanon() {
  if (!canonCache) {
    canonCache = readJSON(path.join(CONTENT, "canon.json"));
  }
  return CanonSchema.parse(canonCache);
}

export function loadProjects() {
  if (!projectsCache) {
    const dir = path.join(CONTENT, "projects");
    const files = fs.readdirSync(dir).filter((f) => f.endsWith(".json"));
    projectsCache = files.map((f) => readJSON(path.join(dir, f)) as unknown);
  }

  const canon = loadCanon();
  const canonLinks = canon.layers.flatMap((x) => x.links);

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
