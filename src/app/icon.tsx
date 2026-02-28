import { ImageResponse } from "next/og";

export const runtime = "edge";
export const size = { width: 512, height: 512 };
export const contentType = "image/png";

export default function Icon() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "512px",
          height: "512px",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          backgroundColor: "#000",
          color: "#fff",
          borderRadius: 120,
          position: "relative",
          fontFamily:
            'ui-sans-serif, system-ui, -apple-system, Segoe UI, Roboto, Helvetica, Arial',
        }}
      >
        <div
          style={{
            position: "absolute",
            inset: 0,
            borderRadius: 120,
            background:
              "radial-gradient(320px 240px at 30% 25%, rgba(255,255,255,0.14), transparent 60%)," +
              "radial-gradient(360px 260px at 70% 35%, rgba(255,255,255,0.10), transparent 62%)",
          }}
        />
        <div
          style={{
            width: 320,
            height: 320,
            borderRadius: 80,
            border: "1px solid rgba(255,255,255,0.18)",
            background: "rgba(255,255,255,0.06)",
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            padding: 42,
            gap: 18,
            position: "relative",
          }}
        >
          <div style={{ fontSize: 44, fontWeight: 800, letterSpacing: "-0.03em" }}>CC</div>
          <div style={{ height: 2, width: 180, background: "rgba(255,255,255,0.28)" }} />
          <div
            style={{
              fontSize: 18,
              opacity: 0.75,
              letterSpacing: "0.12em",
              textTransform: "uppercase",
            }}
          >
            Systems
          </div>
        </div>
      </div>
    ),
    { ...size }
  );
}
