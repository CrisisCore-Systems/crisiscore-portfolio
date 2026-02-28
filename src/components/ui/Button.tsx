import Link from "next/link";
import { cn } from "@/lib/cn";

type CommonProps = {
  children: React.ReactNode;
  variant?: "solid" | "ghost";
  className?: string;
};

type LinkProps = CommonProps & {
  href: string;
  target?: string;
  rel?: string;
};

type ButtonProps = CommonProps & {
  href?: undefined;
  onClick?: React.MouseEventHandler<HTMLButtonElement>;
  type?: "button" | "submit" | "reset";
};

type Props = LinkProps | ButtonProps;

export function Button({ variant = "solid", className, ...props }: Props) {
  const base =
    "inline-flex items-center justify-center rounded-2xl px-4 py-2 text-sm font-mono transition will-change-transform focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-white/10";
  const solid =
    "border border-white/15 bg-white/[0.08] hover:-translate-y-0.5 hover:border-white/20 hover:bg-white/[0.12] active:translate-y-0";
  const ghost =
    "border border-white/15 text-white/85 hover:-translate-y-0.5 hover:border-white/20 hover:bg-white/[0.06] hover:text-white active:translate-y-0";

  const cls = cn(base, variant === "solid" ? solid : ghost, className);

  if ("href" in props && typeof props.href === "string") {
    const href = props.href;
    const isExternal = href.startsWith("http");
    return (
      <Link
        href={href}
        className={cls}
        target={isExternal ? "_blank" : props.target}
        rel={isExternal ? "noreferrer" : props.rel}
      >
        {props.children}
      </Link>
    );
  }

  return (
    <button className={cls} onClick={props.onClick} type={props.type}>
      {props.children}
    </button>
  );
}
