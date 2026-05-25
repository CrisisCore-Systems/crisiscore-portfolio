import { getBuildCommitFull, getBuildCommitShort } from "@/app/lib/build";

export const revalidate = 0;
export const dynamic = "force-dynamic";

export async function GET(request: Request) {
  const footerBuild = getBuildCommitShort();
  const fullCommit = getBuildCommitFull();
  const runtimeCommit = process.env.VERCEL_GIT_COMMIT_SHA ?? fullCommit;
  const env = process.env.VERCEL_ENV ?? process.env.NODE_ENV ?? null;
  const requestHost = request.headers.get("host");

  const payload = {
    commit: footerBuild,
    environment: env,
    host: requestHost,
    matchesFooterBuild: runtimeCommit ? runtimeCommit.startsWith(footerBuild) : false,
    generatedAt: new Date().toISOString(),
  };

  return Response.json(payload, {
    headers: {
      "Cache-Control": "no-store, max-age=0",
    },
  });
}
