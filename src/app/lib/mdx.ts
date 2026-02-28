import fs from "node:fs";
import path from "node:path";
import matter from "gray-matter";

const WRITING_DIR = path.join(process.cwd(), "src", "content", "writing");

export type WritingFrontmatter = {
  title: string;
  description: string;
  date: string; // YYYY-MM-DD
};

export type WritingPost = {
  slug: string;
  frontmatter: WritingFrontmatter;
  content: string;
};

export function getAllWritingSlugs(): string[] {
  if (!fs.existsSync(WRITING_DIR)) return [];
  return fs
    .readdirSync(WRITING_DIR)
    .filter((f) => f.endsWith(".mdx"))
    .map((f) => f.replace(/\.mdx$/, ""));
}

export function getAllWriting(): WritingPost[] {
  return getAllWritingSlugs()
    .map((slug) => getWritingBySlug(slug))
    .sort((a, b) => (a.frontmatter.date < b.frontmatter.date ? 1 : -1));
}

export function getWritingBySlug(slug: string): WritingPost {
  const full = path.join(WRITING_DIR, `${slug}.mdx`);
  const raw = fs.readFileSync(full, "utf8");
  const parsed = matter(raw);

  const fm = parsed.data as Partial<WritingFrontmatter>;
  if (!fm.title || !fm.description || !fm.date) {
    throw new Error(
      `Missing frontmatter fields in ${slug}.mdx (title/description/date required)`
    );
  }

  return {
    slug,
    frontmatter: { title: fm.title, description: fm.description, date: fm.date },
    content: parsed.content,
  };
}
