import { notFound } from "next/navigation";
import { MDXRemote } from "next-mdx-remote/rsc";
import remarkGfm from "remark-gfm";
import { getAllWritingSlugs, getWritingBySlug } from "@/app/lib/mdx";

export function generateStaticParams() {
  return getAllWritingSlugs().map((slug) => ({ slug }));
}

export function generateMetadata({ params }: { params: { slug: string } }) {
  try {
    const p = getWritingBySlug(params.slug);
    return {
      title: p.frontmatter.title,
      description: p.frontmatter.description,
    };
  } catch {
    return {};
  }
}

export default function WritingPostPage({
  params,
}: {
  params: { slug: string };
}) {
  let post;
  try {
    post = getWritingBySlug(params.slug);
  } catch {
    return notFound();
  }

  return (
    <div className="py-12">
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
    </div>
  );
}
