const inferred =
  process.env.NEXT_PUBLIC_SITE_URL ??
  (process.env.VERCEL_URL
    ? `https://${process.env.VERCEL_URL}`
    : "http://localhost:3000");

export const SITE = {
  name: "CrisisCore Systems",
  tagline: "Protective computing. Privacy-first systems. Built for unstable days.",
  url: inferred,
  email: "hello@crisiscore.systems",
  socials: {
    github: "https://github.com/CrisisCore-Systems",
    // add more if you want:
    // x: "https://x.com/...",
    // linkedin: "https://linkedin.com/in/...",
  },
};
