import type { NextRequest } from "next/server";
import { NextResponse } from "next/server";

const DUPLICATE_HOST = "crisiscore-portfolio.vercel.app";
const CANONICAL_ORIGIN = "https://crisiscore-systems.ca";

export function proxy(request: NextRequest) {
  if (request.nextUrl.hostname !== DUPLICATE_HOST) {
    return NextResponse.next();
  }

  const redirectUrl = new URL(request.nextUrl.pathname + request.nextUrl.search, CANONICAL_ORIGIN);
  return NextResponse.redirect(redirectUrl, 301);
}

export const config = {
  matcher: ["/((?!_next/static|_next/image|favicon.ico).*)"],
};