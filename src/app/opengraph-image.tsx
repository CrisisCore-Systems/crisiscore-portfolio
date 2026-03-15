import { ImageResponse } from "next/og";
import { SITE } from "@/app/lib/site";

export const runtime = "edge";
export const alt = `${SITE.name} — ${SITE.tagline}`;
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function Image() {
  const socialAsset = new URL("/assets/founder-banners/github_social_image.png", SITE.url).toString();

  return new ImageResponse(
    (
      <div
        style={{
          width: "1200px",
          height: "630px",
          display: "flex",
          backgroundColor: "#000",
          overflow: "hidden",
        }}
      >
        <img
          src={socialAsset}
          alt={alt}
          style={{
            width: "1200px",
            height: "630px",
            objectFit: "cover",
          }}
        />
      </div>
    ),
    { ...size }
  );
}
