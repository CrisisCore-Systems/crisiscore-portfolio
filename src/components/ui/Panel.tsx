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
        "rounded-3xl border border-[color:var(--line)] bg-[linear-gradient(180deg,rgba(255,245,233,0.035),rgba(255,245,233,0.01))] shadow-[0_18px_42px_rgba(0,0,0,0.2)] backdrop-blur-md",
        className
      )}
    >
      {children}
    </div>
  );
}
