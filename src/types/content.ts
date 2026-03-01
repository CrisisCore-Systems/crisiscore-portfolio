export type Link = {
  label: string;
  href: string;
  kind: "internal" | "external";
};

export type Project = {
  slug: string;
  title: string;
  subtitle: string;
  summary: string;
  description: string;
  tags: string[];
  badges: string[];
  highlights: string[];
  links: Link[];
  highlight: boolean;
  status: "active" | "maintained" | "archived";
};
