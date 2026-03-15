import Image from "next/image";
import { cn } from "@/lib/cn";

type AssetFigureProps = {
  src: string;
  alt: string;
  title?: string;
  body?: string;
  className?: string;
  mediaClassName?: string;
  imageClassName?: string;
  sizes?: string;
};

export function AssetFigure({
  src,
  alt,
  title,
  body,
  className,
  mediaClassName,
  imageClassName,
  sizes,
}: AssetFigureProps) {
  return (
    <div
      className={cn(
        "overflow-hidden rounded-3xl border border-white/10 bg-gradient-to-b from-white/[0.05] to-white/[0.02]",
        className
      )}
    >
      <div className="border-b border-white/10 bg-[radial-gradient(circle_at_top,rgba(34,211,238,0.12),transparent_55%)] p-3">
        <div
          className={cn(
            "relative aspect-[16/9] overflow-hidden rounded-2xl border border-white/10 bg-black/20",
            mediaClassName
          )}
        >
          <Image
            src={src}
            alt={alt}
            fill
            sizes={sizes ?? "(min-width: 1280px) 30vw, (min-width: 768px) 50vw, 100vw"}
            className={cn("object-contain p-3", imageClassName)}
          />
        </div>
      </div>

      {title || body ? (
        <div className="p-5">
          {title ? <div className="text-sm font-semibold text-white">{title}</div> : null}
          {body ? <p className="mt-2 text-sm leading-relaxed text-white/70">{body}</p> : null}
        </div>
      ) : null}
    </div>
  );
}