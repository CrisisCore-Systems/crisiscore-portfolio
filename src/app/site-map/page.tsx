import Link from "next/link";
import { ARTIFACTS } from "@/app/lib/artifacts";
import { BUYER_INTENT_PAGES } from "@/app/lib/buyer-intent";
import { Panel } from "@/components/ui/Panel";
import { Button } from "@/components/ui/Button";
import { loadProjects, loadWriting } from "@/content/load";

export const metadata = {
  title: "Sitemap",
  description: "Human-readable sitemap for CrisisCore Systems core service pages, proof surfaces, dossiers, and writing.",
};

export const dynamic = "force-dynamic";
export const revalidate = 0;

export default function SiteMapPage() {
  const buildStamp = process.env.NEXT_PUBLIC_BUILD_COMMIT;
  const buildSuffix = buildStamp && buildStamp !== "unknown" ? `?v=${buildStamp}` : "";
  const withBuild = (path: string) => `${path}${buildSuffix}`;

  const projects = loadProjects();
  const writing = loadWriting();

  return (
    <div className="py-12">
      <div className="cc-kicker">Navigation map</div>
      <h1 className="mt-3 text-3xl font-semibold tracking-[-0.02em] sm:text-4xl">Sitemap</h1>
      <p className="mt-3 max-w-3xl text-sm text-white/70">
        Human-readable route map for buyers, auditors, and operators. The main conversion path is home, services, proof, about, and contact; the rest supports evaluation.
      </p>

      <div className="mt-6 flex flex-wrap gap-3">
        <Button href={withBuild("/services")}>Services</Button>
        <Button href={withBuild("/sitemap.xml")} variant="ghost">XML sitemap</Button>
        <Button href={withBuild("/proof/fetchability.json")} variant="ghost">Fetchability JSON</Button>
        <Button href={withBuild("/deploy-id")} variant="ghost">Deploy ID</Button>
      </div>

      <div className="mt-10 grid gap-4 lg:grid-cols-3">
        <Panel className="p-7">
          <div className="text-sm font-semibold">Core routes</div>
          <ul className="mt-4 space-y-2 text-sm text-white/75">
            {["/", "/services", "/proof", "/about", "/contact", "/projects", "/writing", "/rss.xml", "/version.json", "/deploy-id"].map((route) => (
              <li key={route}>
                <Link className="hover:text-white" href={withBuild(route)}>{route}</Link>
              </li>
            ))}
          </ul>
        </Panel>

        <Panel className="p-7">
          <div className="text-sm font-semibold">Buyer-intent pages</div>
          <ul className="mt-4 space-y-2 text-sm text-white/75">
            {BUYER_INTENT_PAGES.map((page) => (
              <li key={page.slug}>
                <Link className="hover:text-white" href={withBuild(`/services/${page.slug}`)}>
                  /services/{page.slug}
                </Link>
              </li>
            ))}
          </ul>
        </Panel>

        <Panel className="p-7">
          <div className="text-sm font-semibold">Evidence dossiers</div>
          <ul className="mt-4 space-y-2 text-sm text-white/75">
            {projects.map((project) => (
              <li key={project.slug}>
                <Link className="hover:text-white" href={withBuild(`/projects/${project.slug}`)}>
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
                <Link className="hover:text-white" href={withBuild(`/writing/${post.slug}`)}>
                  /writing/{post.slug}
                </Link>
              </li>
            ))}
          </ul>
        </Panel>

        <Panel className="p-7 lg:col-span-3">
          <div className="text-sm font-semibold">Artifact routes</div>
          <ul className="mt-4 grid gap-2 text-sm text-white/75 sm:grid-cols-2 lg:grid-cols-3">
            {ARTIFACTS.map((artifact) => (
              <li key={artifact.slug}>
                <Link className="hover:text-white" href={withBuild(`/artifacts/${artifact.slug}`)}>
                  /artifacts/{artifact.slug}
                </Link>
              </li>
            ))}
          </ul>
        </Panel>
      </div>
    </div>
  );
}
