import { cn } from "@/lib/cn";

export function Badge({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <span
      className={cn(
        "rounded-full border border-white/10 bg-white/[0.04] px-3 py-1 text-xs text-white/70",
        className
      )}
    >
      {children}
    </span>
  );
}
