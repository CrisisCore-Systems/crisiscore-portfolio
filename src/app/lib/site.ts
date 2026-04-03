export const PRIMARY_SITE_URL = "https://crisiscore-systems.ca";

function inferSiteUrl() {
  if (process.env.NEXT_PUBLIC_SITE_URL) {
    return process.env.NEXT_PUBLIC_SITE_URL;
  }

  if (process.env.NODE_ENV !== "production") {
    return "http://localhost:3000";
  }

  return PRIMARY_SITE_URL;
}

const inferred = inferSiteUrl();

export const SITE = {
  name: "CrisisCore Systems",
  tagline: "Privacy teardown and trust review for health and sensitive-data apps.",
  socialHeadline: "Privacy teardown for health and sensitive-data apps.",
  socialSubline: "48-hour risk reads, full trust reviews, and fix sprints before launch problems become trust problems.",
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
