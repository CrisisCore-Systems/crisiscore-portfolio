import React from "react";
import Image from "next/image";

type Props = { className?: string };

export default function CrisisCoreVisualStrip({ className = "" }: Props) {
  const base = "/assets/crisiscore";
  const images = [
    "small-business-trust-cleanup.png",
    "three-point-risk-read.png",
    "trust-failure-radar.png",
  ];

  return (
    <div className={className + " cc-visual-strip"} style={{ display: "flex", gap: 12, alignItems: "center" }}>
      {images.map((img) => (
        <Image
          key={img}
          src={`${base}/${img}`}
          alt={img.replace(/[-.]/g, " ")}
          width={84}
          height={84}
          style={{ height: 84 }}
        />
      ))}
    </div>
  );
}
