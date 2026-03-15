export function renderBrandIcon(size: number) {
  const outerRadius = Math.round(size * 0.22);
  const innerSize = Math.round(size * 0.62);
  const innerRadius = Math.round(innerSize * 0.24);
  const lineWidth = Math.max(2, Math.round(size * 0.006));

  return (
    <div
      style={{
        width: `${size}px`,
        height: `${size}px`,
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: "#05080C",
        color: "#EEF2F5",
        borderRadius: outerRadius,
        position: "relative",
        overflow: "hidden",
        fontFamily: 'ui-sans-serif, system-ui, -apple-system, Segoe UI, Roboto, Helvetica, Arial',
      }}
    >
      <div
        style={{
          position: "absolute",
          inset: 0,
          background:
            "radial-gradient(72% 62% at 18% 12%, rgba(157,223,255,0.18), transparent 62%)," +
            "radial-gradient(60% 50% at 82% 24%, rgba(255,255,255,0.08), transparent 64%)," +
            "linear-gradient(180deg, rgba(255,255,255,0.03), rgba(255,255,255,0))",
        }}
      />

      <div
        style={{
          position: "absolute",
          inset: Math.round(size * 0.05),
          borderRadius: Math.round(size * 0.18),
          border: `${lineWidth}px solid rgba(255,255,255,0.10)`,
        }}
      />

      <div
        style={{
          width: innerSize,
          height: innerSize,
          borderRadius: innerRadius,
          border: `${lineWidth}px solid rgba(157,223,255,0.28)`,
          background: "linear-gradient(180deg, rgba(12,18,24,0.98), rgba(10,15,20,0.92))",
          boxShadow: "inset 0 0 0 1px rgba(255,255,255,0.04)",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          padding: Math.round(size * 0.09),
          gap: Math.round(size * 0.035),
          position: "relative",
          overflow: "hidden",
        }}
      >
        <div
          style={{
            position: "absolute",
            inset: 0,
            opacity: 0.18,
            backgroundImage:
              "linear-gradient(to right, rgba(255,255,255,0.10) 1px, transparent 1px), linear-gradient(to bottom, rgba(255,255,255,0.08) 1px, transparent 1px)",
            backgroundSize: `${Math.max(18, Math.round(size * 0.08))}px ${Math.max(18, Math.round(size * 0.08))}px`,
          }}
        />

        <div
          style={{
            fontSize: Math.round(size * 0.16),
            fontWeight: 800,
            letterSpacing: "-0.06em",
            position: "relative",
          }}
        >
          CC
        </div>
        <div
          style={{
            width: Math.round(innerSize * 0.58),
            height: lineWidth,
            background: "rgba(157,223,255,0.55)",
            position: "relative",
          }}
        />
        <div
          style={{
            fontSize: Math.max(10, Math.round(size * 0.046)),
            opacity: 0.76,
            letterSpacing: "0.18em",
            textTransform: "uppercase",
            position: "relative",
          }}
        >
          Systems
        </div>
      </div>
    </div>
  );
}