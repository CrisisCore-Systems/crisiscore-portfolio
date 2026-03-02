import { NextResponse } from "next/server";

export const dynamic = "force-dynamic";
export const revalidate = 0;

function readCommit() {
  return (
    process.env.NEXT_PUBLIC_BUILD_COMMIT_FULL ??
    process.env.NEXT_PUBLIC_BUILD_COMMIT ??
    process.env.VERCEL_GIT_COMMIT_SHA ??
    "unknown"
  );
}

export async function GET() {
  const commit = readCommit();
  const shortCommit = commit === "unknown" ? commit : commit.slice(0, 7);
  const env = process.env.VERCEL_ENV ?? process.env.NODE_ENV ?? "unknown";
  const region = process.env.VERCEL_REGION ?? "unknown";
  const url = process.env.VERCEL_URL ?? "unknown";
  const generatedAt = new Date().toISOString();
  const body = [
    shortCommit,
    commit,
    `env=${env}`,
    `region=${region}`,
    `url=${url}`,
    `generatedAt=${generatedAt}`,
    "",
  ].join("\n");

  return new NextResponse(body, {
    status: 200,
    headers: {
      "content-type": "text/plain; charset=utf-8",
      "cache-control": "no-store, max-age=0",
    },
  });
}