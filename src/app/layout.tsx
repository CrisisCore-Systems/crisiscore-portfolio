import type { Metadata } from "next";
import Script from "next/script";
import { Analytics } from "@vercel/analytics/next";
import { Inter, JetBrains_Mono } from "next/font/google";
import { Nav } from "@/components/Nav";
import { Footer } from "@/components/Footer";
import { absoluteUrl, PRIMARY_SITE_URL, SITE } from "@/app/lib/site";
import { cn } from "@/lib/cn";
import "./globals.css";

const sans = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
  display: "swap",
});

const mono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-mono",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(PRIMARY_SITE_URL),
  title: { default: SITE.name, template: `%s · ${SITE.name}` },
  description: SITE.socialHeadline,
  applicationName: SITE.name,
  verification: {
    google: "4eHlyB9okddZukiL9tsUhCxTp2aE9E0atJhSA9xaVcM",
  },
  alternates: { canonical: "/" },
  openGraph: {
    title: SITE.name,
    description: SITE.socialSubline,
    url: SITE.url,
    siteName: SITE.name,
    type: "website",
    images: [{ url: "/opengraph-image", width: 1200, height: 630, alt: SITE.socialHeadline }],
  },
  twitter: {
    card: "summary_large_image",
    title: SITE.name,
    description: SITE.socialSubline,
    images: ["/twitter-image"],
  },
  robots: { index: true, follow: true },
};

function jsonLd() {
  const sameAs = Object.values(SITE.socials);

  return {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Organization",
        "@id": `${SITE.url}#organization`,
        name: SITE.name,
        url: SITE.url,
        logo: absoluteUrl("/icon-192"),
        email: SITE.email,
        sameAs,
      },
      {
        "@type": "ProfessionalService",
        "@id": `${SITE.url}#service`,
        name: SITE.name,
        url: SITE.url,
        description: SITE.socialSubline,
        email: SITE.email,
        areaServed: "CA",
        contactPoint: [
          {
            "@type": "ContactPoint",
            email: SITE.email,
            contactType: "sales",
            availableLanguage: ["en"],
            url: `${SITE.url}/contact`,
          },
        ],
        serviceType: [
          "Trust hardening",
          "Privacy architecture",
          "Structural risk review",
          "Software audit consulting",
        ],
        sameAs,
        provider: {
          "@id": `${SITE.url}#organization`,
        },
      },
    ],
  };
}

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <head>
        {process.env.NODE_ENV === "production" ? (
          <>
            {/* Privacy-friendly analytics by Plausible */}
            <Script
              src="https://plausible.io/js/pa-dl6_o4e_YoVvubl3sdM36.js"
              strategy="beforeInteractive"
            />
            <Script id="plausible-init" strategy="beforeInteractive">{`
window.plausible=window.plausible||function(){(plausible.q=plausible.q||[]).push(arguments)};
plausible.init=plausible.init||function(i){plausible.o=i||{}};
plausible.init();
            `}</Script>
          </>
        ) : null}
      </head>
      <body
        className={cn(
          sans.variable,
          mono.variable,
          "site-noise font-sans antialiased"
        )}
      >
        <a
          href="#content"
          className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[999] focus:rounded-xl focus:border focus:border-white/15 focus:bg-black/80 focus:px-4 focus:py-2"
        >
          Skip to content
        </a>

        <noscript>
          <div className="mx-auto max-w-6xl px-4 pt-3">
            <div className="rounded-2xl border border-white/10 bg-white/[0.03] px-4 py-3 text-xs text-white/70">
              JavaScript is disabled. This site is designed to remain readable and navigable without scripts.
            </div>
          </div>
        </noscript>

        <script
          type="application/ld+json"
          // eslint-disable-next-line react/no-danger
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd()) }}
        />

        <Nav />
        <main id="content" className="mx-auto max-w-6xl px-4">
          {children}
        </main>
        <Footer />

        {process.env.NODE_ENV === "production" ? <Analytics /> : null}
      </body>
    </html>
  );
}

