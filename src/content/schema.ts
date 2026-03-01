import { z } from "zod";

export const LinkSchema = z
  .object({
    label: z.string().min(1),
    href: z.string().min(1),
    kind: z.enum(["internal", "external"]).optional(),
  })
  .transform((l) => ({
    ...l,
    kind: l.kind ?? (l.href.startsWith("/") ? "internal" : "external"),
  }));

export const ProjectSchema = z.object({
  slug: z.string().min(1),
  title: z.string().min(1),
  subtitle: z.string().min(1).optional().default(""),
  summary: z.string().min(1),
  description: z.string().min(1),
  tags: z.array(z.string().min(1)).default([]),
  badges: z.array(z.string().min(1)).default([]),
  highlights: z.array(z.string().min(1)).default([]),
  links: z.array(LinkSchema).default([]),
  highlight: z.boolean().optional().default(false),
  status: z.enum(["active", "maintained", "archived"]).optional().default("active"),
});

export const WritingFrontmatterSchema = z.object({
  title: z.string().min(1),
  description: z.string().min(1),
  date: z.string().regex(/^\d{4}-\d{2}-\d{2}$/, "Must be YYYY-MM-DD"),
});

export const CanonSchema = z.object({
  title: z.string().min(1),
  blurb: z.string().min(1),
  layers: z.array(
    z.object({
      layer: z.number().int().min(1),
      name: z.string().min(1),
      title: z.string().min(1),
      note: z.string().optional(),
      links: z.array(LinkSchema).default([]),
    })
  ),
});

export const DossierImageSchema = z.object({
  src: z.string().min(1),
  alt: z.string().min(1),
  width: z.number().int().positive(),
  height: z.number().int().positive(),
});

export const DossierSectionSchema = z.object({
  title: z.string().min(1),
  body: z.array(z.string().min(1)).default([]),
});

export const DossierSchema = z.object({
  slug: z.string().min(1),
  tagline: z.string().min(1),
  problem: DossierSectionSchema,
  constraints: z.object({
    title: z.string().min(1),
    items: z.array(z.string().min(1)).default([]),
  }),
  architecture: z.object({
    title: z.string().min(1),
    body: z.array(z.string().min(1)).default([]),
    diagram: DossierImageSchema.optional(),
  }),
  proof: z.object({
    title: z.string().min(1),
    links: z.array(LinkSchema).default([]),
  }),
  outcomes: z.object({
    title: z.string().min(1),
    items: z.array(z.string().min(1)).default([]),
  }),
  images: z
    .object({
      title: z.string().min(1),
      items: z.array(DossierImageSchema).default([]),
    })
    .optional(),
});

export type Link = z.infer<typeof LinkSchema>;
export type Project = z.infer<typeof ProjectSchema>;
export type WritingFrontmatter = z.infer<typeof WritingFrontmatterSchema>;
export type WritingPost = {
  slug: string;
  frontmatter: WritingFrontmatter;
  content: string;
};
export type Canon = z.infer<typeof CanonSchema>;
export type Dossier = z.infer<typeof DossierSchema>;
