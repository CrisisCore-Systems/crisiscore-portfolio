import { loadCanon, loadDossiers, loadProjects, loadWriting } from "../src/content/load";

function main() {
  const canon = loadCanon();
  const projects = loadProjects();
  const dossiers = loadDossiers();
  const posts = loadWriting();

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

  const dossierSlugs = new Set<string>();
  for (const d of dossiers) {
    if (dossierSlugs.has(d.slug))
      throw new Error(`Duplicate dossier slug: ${d.slug}`);
    dossierSlugs.add(d.slug);
    if (!slugs.has(d.slug)) {
      throw new Error(`Dossier exists for unknown project slug: ${d.slug}`);
    }
  }

  const postSlugs = new Set<string>();
  for (const p of posts) {
    if (postSlugs.has(p.slug)) throw new Error(`Duplicate writing slug: ${p.slug}`);
    postSlugs.add(p.slug);
  }

  console.log(
    `Content OK: canon layers=${canon.layers.length}, projects=${projects.length}, dossiers=${dossiers.length}, writing=${posts.length}`
  );
}

main();
