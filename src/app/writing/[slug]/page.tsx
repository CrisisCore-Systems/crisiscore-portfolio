import { notFound } from "next/navigation";
import Link from "next/link";
import { MDXRemote } from "next-mdx-remote/rsc";
import remarkGfm from "remark-gfm";
import { absoluteUrl } from "@/app/lib/site";
import { loadWriting, loadWritingPost } from "@/content/load";
import { Panel } from "@/components/ui/Panel";
import { Button } from "@/components/ui/Button";

type ParamsLike = { slug: string } | Promise<{ slug: string }>;

async function getSlug(params: ParamsLike) {
  const resolved = await Promise.resolve(params);
  return resolved.slug;
}

export function generateStaticParams() {
  return loadWriting().map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: { params: ParamsLike }) {
  try {
    const slug = await getSlug(params);
    const p = loadWritingPost(slug);
    const socialImageBySlug: Record<string, string> = {
      "proofvault-trust-case-v1-0-1": "/assets/proof-cards/release_bound_artifact_hash_wide_16x9.svg",
      "protective-computing-doctrine": "/assets/diagram_plates/diagram_04_local_authority_vs_cloud_dependence.svg",
      "overton-doi": "/assets/diagram_plates/diagram_02_protective_computing_lifecycle.svg",
    };
    const socialImage = socialImageBySlug[slug];

    return {
      title: p.frontmatter.title,
      description: p.frontmatter.description,
      openGraph: socialImage ? { images: [{ url: absoluteUrl(socialImage) }] } : undefined,
      twitter: socialImage ? { images: [absoluteUrl(socialImage)] } : undefined,
    };
  } catch {
    return {};
  }
}

export default async function WritingPostPage({
  params,
}: Readonly<{
  params: ParamsLike;
}>) {
  let post;
  try {
    const slug = await getSlug(params);
    post = loadWritingPost(slug);
  } catch {
    return notFound();
  }

  return (
    <div className="py-12">
      <Link href="/writing" className="text-sm text-white/60 hover:text-white">
        ← Back to writing
      </Link>

      <div className="mt-6 text-xs uppercase tracking-[0.2em] text-white/45">
        Writing / Article
      </div>
      <div className="text-xs text-white/50">{post.frontmatter.date}</div>
      <h1 className="mt-2 text-3xl font-semibold">{post.frontmatter.title}</h1>
      <p className="mt-3 max-w-3xl text-sm text-white/70">
        {post.frontmatter.description}
      </p>

      <article className="prose prose-invert mt-10 max-w-3xl">
        <MDXRemote
          source={post.content}
          options={{ mdxOptions: { remarkPlugins: [remarkGfm] } }}
        />
      </article>

      <Panel className="mt-10 max-w-3xl p-6">
        <div className="text-sm font-semibold">Continue reading</div>
        <div className="mt-4 flex flex-wrap gap-3">
          <Button href="/writing" variant="ghost">
            Writing index
          </Button>
          <Button href="/projects" variant="ghost">
            Projects
          </Button>
          <Button href="/proof" variant="ghost">
            Proof
          </Button>
        </div>
      </Panel>
    </div>
  );
}
