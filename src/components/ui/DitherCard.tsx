"use client";

import { useState, Suspense, lazy, type ReactNode } from "react";

const Dithering = lazy(() =>
  import("@paper-design/shaders-react").then((mod) => ({
    default: mod.Dithering,
  }))
);

interface DitherCardProps {
  children: ReactNode;
  className?: string;
}

export default function DitherCard({ children, className = "" }: DitherCardProps) {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div
      className={`group relative overflow-hidden ${className}`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      onTouchStart={() => setIsHovered(!isHovered)}
    >
      <Suspense fallback={null}>
        <div
          className="pointer-events-none absolute inset-0 z-0 transition-opacity duration-700"
          style={{ opacity: isHovered ? 0.35 : 0.1 }}
        >
          <Dithering
            colorBack="#00000000"
            colorFront="#FFFFFF"
            shape="warp"
            type="4x4"
            speed={isHovered ? 0.6 : 0.15}
            className="size-full"
            minPixelRatio={1}
          />
        </div>
      </Suspense>

      <div className="relative z-10">{children}</div>
    </div>
  );
}
