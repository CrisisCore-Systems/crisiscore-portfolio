import { loadCanon, loadProjects } from "../src/content/load";

function main() {
  const canon = loadCanon();
  const projects = loadProjects();

  if (!canon.layers.length) {
    throw new Error("canon.layers is empty");
  }
  if (!projects.length) {
    throw new Error("No projects found under content/projects");
  }

  const slugs = new Set<string>();
  for (const p of projects) {
    if (slugs.has(p.slug)) throw new Error(`Duplicate project slug: ${p.slug}`);
    slugs.add(p.slug);
  }

  console.log(
    `Content OK: canon layers=${canon.layers.length}, projects=${projects.length}`
  );
}

main();
