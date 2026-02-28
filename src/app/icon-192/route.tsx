import { ImageResponse } from "next/og";

export const runtime = "edge";

export async function GET() {
  const size = { width: 192, height: 192 };

  return new ImageResponse(
    (
      <div
        style={{
          width: `${size.width}px`,
          height: `${size.height}px`,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          backgroundColor: "#000",
          color: "#fff",
          borderRadius: 44,
          position: "relative",
          fontFamily:
            'ui-sans-serif, system-ui, -apple-system, Segoe UI, Roboto, Helvetica, Arial',
        }}
      >
        <div
          style={{
            position: "absolute",
            inset: 0,
            borderRadius: 44,
            background:
              "radial-gradient(120px 100px at 30% 25%, rgba(255,255,255,0.14), transparent 60%)," +
              "radial-gradient(140px 110px at 70% 35%, rgba(255,255,255,0.10), transparent 62%)",
          }}
        />

        <div
          style={{
            width: 120,
            height: 120,
            borderRadius: 28,
            border: "1px solid rgba(255,255,255,0.18)",
            background: "rgba(255,255,255,0.06)",
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            padding: 18,
            gap: 10,
            position: "relative",
          }}
        >
          <div style={{ fontSize: 28, fontWeight: 800, letterSpacing: "-0.03em" }}>
            CC
          </div>
          <div style={{ height: 2, width: 72, background: "rgba(255,255,255,0.28)" }} />
          <div
            style={{
              fontSize: 10,
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
    size
  );
}
