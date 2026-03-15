import { ImageResponse } from "next/og";
import { renderBrandIcon } from "@/app/lib/brand-icon";

export const runtime = "edge";
export const size = { width: 512, height: 512 };
export const contentType = "image/png";

export default function Icon() {
  return new ImageResponse(renderBrandIcon(size.width), { ...size });
}
