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

function campaignUrl(path: string, params: Record<string, string>) {
  const url = new URL(path, inferred);

  for (const [key, value] of Object.entries(params)) {
    url.searchParams.set(key, value);
  }

  return url.toString();
}

export const CAMPAIGN_LINKS = {
  profileDestinations: {
    github: campaignUrl("/trust-hardening-review", {
      utm_source: "github",
      utm_medium: "profile",
      utm_campaign: "trust_hardening",
    }),
    devto: campaignUrl("/trust-hardening-review", {
      utm_source: "devto",
      utm_medium: "profile",
      utm_campaign: "trust_hardening",
    }),
    hashnode: campaignUrl("/trust-hardening-review", {
      utm_source: "hashnode",
      utm_medium: "profile",
      utm_campaign: "trust_hardening",
    }),
  },
  articleDestinations: {
    devtoTrustReview: campaignUrl("/trust-hardening-review", {
      utm_source: "devto",
      utm_medium: "article",
      utm_campaign: "protective_computing",
    }),
    devtoPainTrackerCaseStudy: campaignUrl("/case-study/pain-tracker", {
      utm_source: "devto",
      utm_medium: "article",
      utm_campaign: "protective_computing",
    }),
  },
};

export const SITE = {
  name: "CrisisCore Systems",
  tagline: "CrisisCore helps sensitive-data products find trust-breaking defaults before launch.",
  socialHeadline: "Pre-launch trust hardening for sensitive-data products.",
  socialSubline: "Get a 3-point risk read, then move into a 48-hour teardown, full trust review, or fix sprint before risky defaults harden into architecture.",
  url: inferred,
  email: "crisiscore.systems@proton.me",
  socials: {
    github: "https://github.com/CrisisCore-Systems",
    devto: "https://dev.to/crisiscore-systems",
    zenodo: "https://zenodo.org/communities/protective-computing/records",
  },
  products: {
    painTracker: "https://paintracker.ca",
  },
  bridges: {
    protectiveComputing: "https://protective-computing.github.io",
  },
};

export function absoluteUrl(path: string) {
  return new URL(path, SITE.url).toString();
}
