import { NextResponse } from "next/server";
import { getBuildCommitFull, getBuildCommitShort } from "@/app/lib/build";

export const dynamic = "force-dynamic";
export const revalidate = 0;

export async function GET(request: Request) {
  const commit = getBuildCommitFull();
  const shortCommit = getBuildCommitShort();
  const env = process.env.VERCEL_ENV ?? process.env.NODE_ENV ?? "unknown";
  const generatedAt = new Date().toISOString();
  const host = request.headers.get("host") ?? "unknown";
  const body = [
    shortCommit,
    commit,
    `env=${env}`,
    `host=${host}`,
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