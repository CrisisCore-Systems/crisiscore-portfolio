function inferSiteUrl() {
  if (process.env.NEXT_PUBLIC_SITE_URL) {
    return process.env.NEXT_PUBLIC_SITE_URL;
  }

  if (process.env.VERCEL_PROJECT_PRODUCTION_URL) {
    return `https://${process.env.VERCEL_PROJECT_PRODUCTION_URL}`;
  }

  if (process.env.VERCEL_URL) {
    return `https://${process.env.VERCEL_URL}`;
  }

  return "http://localhost:3000";
}

const inferred = inferSiteUrl();

export const SITE = {
  name: "CrisisCore Systems",
  tagline: "Protective computing. Privacy-first systems. Built for unstable days.",
  url: inferred,
  email: "crisiscore.systems@proton.me",
  socials: {
    github: "https://github.com/CrisisCore-Systems",
    // add more if you want:
    // x: "https://x.com/...",
    // linkedin: "https://linkedin.com/in/...",
  },
};

export function absoluteUrl(path: string) {
  return new URL(path, SITE.url).toString();
}
