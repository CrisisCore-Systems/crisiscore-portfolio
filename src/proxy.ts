import type { NextRequest } from "next/server";
import { NextResponse } from "next/server";

const DUPLICATE_HOSTS = new Set([
  "crisiscore-portfolio.vercel.app",
  "www.crisiscore-portfolio.vercel.app",
  "www.crisiscore-systems.ca",
  "crisiscore.systems.ca",
  "crisiscoresystems.ca",
  "www.crisiscoresystems.ca",
  "crisiscore.ca",
  "www.crisiscore.ca",
]);
const CANONICAL_ORIGIN = "https://crisiscore-systems.ca";

export function proxy(request: NextRequest) {
  const forwardedHost = request.headers.get("x-forwarded-host")?.split(",")[0]?.trim();
  const hostHeader = request.headers.get("host")?.split(":")[0]?.trim();
  const hostname = forwardedHost || hostHeader || request.nextUrl.hostname;

  if (!hostname || !DUPLICATE_HOSTS.has(hostname)) {
    return NextResponse.next();
  }

  const redirectUrl = new URL(request.nextUrl.pathname + request.nextUrl.search, CANONICAL_ORIGIN);
  return NextResponse.redirect(redirectUrl, 301);
}

export const config = {
  matcher: ["/((?!_next/static|_next/image|favicon.ico).*)"],
};
