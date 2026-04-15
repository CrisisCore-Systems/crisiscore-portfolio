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
        "rounded-3xl border border-[color:var(--line)] bg-[color:var(--panel)] shadow-[0_16px_40px_rgba(0,0,0,0.16)] backdrop-blur-sm",
        className
      )}
    >
      {children}
    </div>
  );
}
