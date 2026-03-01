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

export type Link = z.infer<typeof LinkSchema>;
export type Project = z.infer<typeof ProjectSchema>;
export type Canon = z.infer<typeof CanonSchema>;
