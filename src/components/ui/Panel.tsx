import { cn } from "@/lib/cn";

export function Panel({
  className,
  children,
}: {
  className?: string;
  children: React.ReactNode;
}) {
  return (
    <div
      className={cn(
        "rounded-3xl border border-white/10 bg-gradient-to-b from-white/[0.05] to-white/[0.02]",
        className
      )}
    >
      {children}
    </div>
  );
}
