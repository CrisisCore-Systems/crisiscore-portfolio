import Link from "next/link";
import { Panel } from "@/components/ui/Panel";
import { Button } from "@/components/ui/Button";
import { loadProjects, loadWriting } from "@/content/load";

export const metadata = {
  title: "Sitemap",
  description: "Human-readable sitemap for key routes, dossiers, and writing.",
};

export default function SiteMapPage() {
  const projects = loadProjects();
  const writing = loadWriting();

  return (
    <div className="py-12">
      <div className="cc-kicker">Navigation map</div>
      <h1 className="mt-3 text-3xl font-semibold tracking-[-0.02em] sm:text-4xl">Sitemap</h1>
      <p className="mt-3 max-w-3xl text-sm text-white/70">
        Human-readable route map for auditors and operators. XML sitemap remains available for most crawlers, though some networks may block it.
      </p>

      <div className="mt-6 flex flex-wrap gap-3">
        <Button href="/sitemap.xml" variant="ghost">XML sitemap</Button>
        <Button href="/proof/fetchability.json" variant="ghost">Fetchability JSON</Button>
      </div>

      <div className="mt-10 grid gap-4 lg:grid-cols-3">
        <Panel className="p-7">
          <div className="text-sm font-semibold">Core routes</div>
          <ul className="mt-4 space-y-2 text-sm text-white/75">
            {["/", "/projects", "/writing", "/proof", "/about", "/contact", "/rss.xml"].map((route) => (
              <li key={route}>
                <Link className="hover:text-white" href={route}>{route}</Link>
              </li>
            ))}
          </ul>
        </Panel>

        <Panel className="p-7">
          <div className="text-sm font-semibold">Project dossiers</div>
          <ul className="mt-4 space-y-2 text-sm text-white/75">
            {projects.map((project) => (
              <li key={project.slug}>
                <Link className="hover:text-white" href={`/projects/${project.slug}`}>
                  /projects/{project.slug}
                </Link>
              </li>
            ))}
          </ul>
        </Panel>

        <Panel className="p-7">
          <div className="text-sm font-semibold">Writing posts</div>
          <ul className="mt-4 space-y-2 text-sm text-white/75">
            {writing.map((post) => (
              <li key={post.slug}>
                <Link className="hover:text-white" href={`/writing/${post.slug}`}>
                  /writing/{post.slug}
                </Link>
              </li>
            ))}
          </ul>
        </Panel>
      </div>
    </div>
  );
}
