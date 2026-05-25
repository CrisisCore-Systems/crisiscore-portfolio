import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

export function middleware(req: NextRequest) {
  const accept = req.headers.get("accept") || "";
  const url = req.nextUrl.clone();

  // Only handle our generated asset folder
  if (!url.pathname.startsWith("/assets/crisiscore/")) {
    return NextResponse.next();
  }

  // Prefer AVIF, then WebP, then fall back to original path.
  // Edge middleware cannot synchronously check filesystem, so this rewrite
  // assumes the generator produces .avif/.webp alongside .png. If a
  // rewritten file doesn't exist it will 404 — generator should create them.
  if (accept.includes("image/avif")) {
    url.pathname = url.pathname.replace(/\.(png|jpg|jpeg)$/i, ".avif");
    return NextResponse.rewrite(url);
  }

  if (accept.includes("image/webp")) {
    url.pathname = url.pathname.replace(/\.(png|jpg|jpeg)$/i, ".webp");
    return NextResponse.rewrite(url);
  }

  return NextResponse.next();
}

export const config = {
  matcher: ["/assets/crisiscore/:path*"],
};
