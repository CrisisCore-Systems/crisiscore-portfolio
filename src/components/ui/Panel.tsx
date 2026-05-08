import { cn } from "@/lib/cn";

export function Panel({
  className,
  children,
}: Readonly<{
  className?: string;
  children: React.ReactNode;
}>) {
  return (
    <div
      className={cn(
        "rounded-3xl border border-[color:var(--line)] bg-[linear-gradient(180deg,rgba(120,167,181,0.08),rgba(12,18,24,0.72))] shadow-[0_18px_42px_rgba(0,0,0,0.24)] backdrop-blur-md",
        className
      )}
    >
      {children}
    </div>
  );
}
