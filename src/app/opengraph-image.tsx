import { ImageResponse } from "next/og";
import { SITE } from "@/app/lib/site";

export const runtime = "edge";
export const alt = `${SITE.name} — ${SITE.socialHeadline}`;
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "1200px",
          height: "630px",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          overflow: "hidden",
          background:
            "radial-gradient(circle at top left, rgba(201,139,71,0.24), transparent 34%), radial-gradient(circle at bottom right, rgba(255,205,145,0.16), transparent 28%), linear-gradient(135deg, #120f0d 0%, #1c1512 56%, #100d0b 100%)",
          color: "#f7f0e8",
          padding: "54px 58px",
        }}
      >
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "flex-start",
            width: "100%",
          }}
        >
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              gap: "14px",
              maxWidth: "820px",
            }}
          >
            <div
              style={{
                fontSize: 24,
                letterSpacing: "0.22em",
                textTransform: "uppercase",
                color: "rgba(247,240,232,0.62)",
              }}
            >
              CrisisCore Systems
            </div>
            <div
              style={{
                display: "flex",
                fontSize: 66,
                lineHeight: 1.02,
                fontWeight: 700,
                letterSpacing: "-0.04em",
                maxWidth: "820px",
              }}
            >
              {SITE.socialHeadline}
            </div>
            <div
              style={{
                display: "flex",
                fontSize: 29,
                lineHeight: 1.28,
                color: "rgba(247,240,232,0.78)",
                maxWidth: "760px",
              }}
            >
              {SITE.socialSubline}
            </div>
          </div>

          <div
            style={{
              display: "flex",
              flexDirection: "column",
              gap: "12px",
              alignItems: "flex-end",
            }}
          >
            <div
              style={{
                display: "flex",
                padding: "14px 18px",
                borderRadius: "999px",
                border: "1px solid rgba(247,240,232,0.14)",
                background: "rgba(255,255,255,0.05)",
                fontSize: 21,
                color: "rgba(247,240,232,0.84)",
              }}
            >
              crisiscore-systems.ca
            </div>
          </div>
        </div>

        <div
          style={{
            display: "flex",
            gap: "16px",
            alignItems: "center",
            flexWrap: "wrap",
          }}
        >
          {[
            "Fast teardown reviews",
            "Full trust hardening reviews",
            "Fix sprints",
          ].map((item) => (
            <div
              key={item}
              style={{
                display: "flex",
                padding: "14px 18px",
                borderRadius: "18px",
                border: "1px solid rgba(247,240,232,0.12)",
                background: "rgba(255,255,255,0.04)",
                fontSize: 22,
                color: "rgba(247,240,232,0.88)",
              }}
            >
              {item}
            </div>
          ))}
        </div>
      </div>
    ),
    { ...size }
  );
}
