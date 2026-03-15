import { ImageResponse } from "next/og";
import { renderBrandIcon } from "@/app/lib/brand-icon";

export const runtime = "edge";

export async function GET() {
  const size = { width: 192, height: 192 };

  return new ImageResponse(renderBrandIcon(size.width), size);
}
