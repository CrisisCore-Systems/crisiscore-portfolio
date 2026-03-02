export const revalidate = 0;
export const dynamic = "force-dynamic";

export async function GET(request: Request) {
  const footerBuild = process.env.NEXT_PUBLIC_BUILD_COMMIT ?? "unknown";
  const footerBuildFull = process.env.NEXT_PUBLIC_BUILD_COMMIT_FULL ?? "unknown";
  const footerBuildSource = process.env.NEXT_PUBLIC_BUILD_COMMIT_SOURCE ?? "unknown";
  const runtimeCommit = process.env.VERCEL_GIT_COMMIT_SHA ?? null;
  const env = process.env.VERCEL_ENV ?? process.env.NODE_ENV ?? null;

  const payload = {
    reportedCommit: runtimeCommit,
    footerBuild,
    footerBuildFull,
    footerBuildSource,
    matchesFooterBuild: runtimeCommit ? runtimeCommit.startsWith(footerBuild) : false,
    branch: process.env.VERCEL_GIT_COMMIT_REF ?? null,
    environment: env,
    env,
    region: process.env.VERCEL_REGION ?? null,
    url: process.env.VERCEL_URL ?? null,
    requestHost: request.headers.get("host"),
    requestForwardedHost: request.headers.get("x-forwarded-host"),
    requestVercelId: request.headers.get("x-vercel-id"),
    requestVercelDeploymentUrl: request.headers.get("x-vercel-deployment-url"),
    generatedAt: new Date().toISOString(),
  };

  return Response.json(payload, {
    headers: {
      "Cache-Control": "no-store, max-age=0",
    },
  });
}
