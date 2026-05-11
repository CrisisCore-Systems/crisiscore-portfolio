import { getBuildCommitFull, getBuildCommitShort } from "@/app/lib/build";

export const revalidate = 0;
export const dynamic = "force-dynamic";

export async function GET(request: Request) {
  const footerBuild = getBuildCommitShort();
  const footerBuildFull = getBuildCommitFull();
  const footerBuildSource =
    process.env.VERCEL_GIT_COMMIT_SHA
      ? "vercel_runtime"
      : process.env.NEXT_PUBLIC_BUILD_COMMIT_FULL
        ? "next_public_full"
        : process.env.NEXT_PUBLIC_BUILD_COMMIT
          ? "next_public_short"
          : "unknown";
  const runtimeCommit = process.env.VERCEL_GIT_COMMIT_SHA ?? null;
  const env = process.env.VERCEL_ENV ?? process.env.NODE_ENV ?? null;
  const requestHost = request.headers.get("host");

  const payload = {
    reportedCommit: runtimeCommit,
    footerBuild,
    footerBuildFull,
    footerBuildSource,
    matchesFooterBuild: runtimeCommit ? runtimeCommit.startsWith(footerBuild) : false,
    branch: process.env.VERCEL_GIT_COMMIT_REF ?? null,
    environment: env,
    host: requestHost,
    requestHost,
    generatedAt: new Date().toISOString(),
  };

  return Response.json(payload, {
    headers: {
      "Cache-Control": "no-store, max-age=0",
    },
  });
}
