import { ImageResponse } from "next/og";
import { SITE } from "@/app/lib/site";

export const runtime = "edge";
export const alt = `${SITE.name} — ${SITE.tagline}`;
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
          padding: "72px",
          backgroundColor: "#000",
          color: "#fff",
          position: "relative",
          fontFamily:
            'ui-sans-serif, system-ui, -apple-system, Segoe UI, Roboto, Helvetica, Arial, "Apple Color Emoji", "Segoe UI Emoji"',
        }}
      >
        <div
          style={{
            position: "absolute",
            inset: 0,
            background:
              "radial-gradient(700px 420px at 18% 18%, rgba(255,255,255,0.12), transparent 60%)," +
              "radial-gradient(720px 520px at 82% 28%, rgba(255,255,255,0.10), transparent 62%)," +
              "radial-gradient(900px 600px at 50% 120%, rgba(255,255,255,0.10), transparent 60%)",
            opacity: 1,
          }}
        />
        <div
          style={{
            position: "absolute",
            inset: 0,
            backgroundImage:
              "linear-gradient(to right, rgba(255,255,255,0.08) 1px, transparent 1px), linear-gradient(to bottom, rgba(255,255,255,0.08) 1px, transparent 1px)",
            backgroundSize: "72px 72px",
            opacity: 0.16,
          }}
        />

        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: 12,
            position: "relative",
          }}
        >
          <div
            style={{
              width: 44,
              height: 44,
              borderRadius: 14,
              border: "1px solid rgba(255,255,255,0.18)",
              background: "rgba(255,255,255,0.06)",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              fontWeight: 700,
              letterSpacing: "-0.02em",
            }}
          >
            CC
          </div>
          <div style={{ display: "flex", flexDirection: "column" }}>
            <div
              style={{
                fontSize: 22,
                fontWeight: 700,
                letterSpacing: "-0.02em",
              }}
            >
              {SITE.name}
            </div>
            <div
              style={{
                fontSize: 14,
                opacity: 0.7,
                letterSpacing: "0.18em",
                textTransform: "uppercase",
              }}
            >
              Protective Computing
            </div>
          </div>
        </div>

        <div style={{ position: "relative", maxWidth: 980 }}>
          <div
            style={{
              fontSize: 54,
              fontWeight: 750,
              lineHeight: 1.04,
              letterSpacing: "-0.03em",
            }}
          >
            Protective architecture for people living inside instability.
          </div>
          <div style={{ marginTop: 18, fontSize: 22, lineHeight: 1.4, opacity: 0.78 }}>
            {SITE.tagline}
          </div>

          <div style={{ marginTop: 26, display: "flex", gap: 10, flexWrap: "wrap" }}>
            {["Local-first", "Degraded-first", "Reversible", "Privacy-first"].map((t) => (
              <div
                key={t}
                style={{
                  fontSize: 14,
                  padding: "10px 14px",
                  borderRadius: 999,
                  border: "1px solid rgba(255,255,255,0.14)",
                  background: "rgba(255,255,255,0.06)",
                  opacity: 0.92,
                }}
              >
                {t}
              </div>
            ))}
          </div>
        </div>

        <div
          style={{
            position: "relative",
            display: "flex",
            justifyContent: "space-between",
            opacity: 0.7,
          }}
        >
          <div style={{ fontSize: 16 }}>{SITE.url.replace(/^https?:\/\//, "")}</div>
          <div style={{ fontSize: 16 }}>Proof over promises</div>
        </div>
      </div>
    ),
    { ...size }
  );
}
