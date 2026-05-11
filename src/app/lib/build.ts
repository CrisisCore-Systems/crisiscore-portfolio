export function getBuildCommitFull() {
  return (
    process.env.VERCEL_GIT_COMMIT_SHA ??
    process.env.NEXT_PUBLIC_BUILD_COMMIT_FULL ??
    process.env.NEXT_PUBLIC_BUILD_COMMIT ??
    "unknown"
  );
}

export function getBuildCommitShort() {
  const full = getBuildCommitFull();
  return full === "unknown" ? full : full.slice(0, 7);
}
