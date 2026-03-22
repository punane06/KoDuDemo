"use client";

import Image from "next/image";
import { Search, ZoomIn } from "lucide-react";

import { liisiControls } from "@/components/liisi/liisi-design-system";

interface LiisiViewerSurfaceProps {
  imageUrl: string;
  imageAlt: string;
  zoomScale: number;
  onZoomIn: () => void;
  onZoomOut: () => void;
  onResetZoom: () => void;
  imageHeightClassName?: string;
}

export function LiisiViewerSurface({
  imageUrl,
  imageAlt,
  zoomScale,
  onZoomIn,
  onZoomOut,
  onResetZoom,
  imageHeightClassName = "h-[300px]",
}: LiisiViewerSurfaceProps) {
  return (
    <div className="flex flex-1 flex-col justify-center">
      <div className="w-full">
        <div className={`relative w-full overflow-hidden ${imageHeightClassName}`}>
          <div
            data-testid="floorplan-zoom-surface"
            className="absolute inset-0"
            style={{ transform: `scale(${zoomScale})`, transformOrigin: "center center", transition: "transform 180ms" }}
          >
            <Image
              src={imageUrl}
              alt={imageAlt}
              fill
              sizes="(max-width: 640px) 100vw, 420px"
              className="object-cover"
              priority
            />
          </div>
        </div>
      </div>

      <div className="mt-8 flex w-full justify-end pr-4">
        <div className="flex flex-col gap-4">
          <button
            type="button"
            onClick={onZoomIn}
            aria-label="Zoom in"
            className={liisiControls.viewerFab}
          >
            <ZoomIn size={20} />
          </button>
          <button
            type="button"
            onClick={onZoomOut}
            aria-label="Zoom out"
            className={liisiControls.viewerFab}
          >
            <Search size={20} />
          </button>
          <button
            type="button"
            onClick={onResetZoom}
            aria-label="Reset zoom"
            className={`${liisiControls.viewerFab} ${liisiControls.viewerFabText}`}
          >
            1:1
          </button>
        </div>
      </div>
    </div>
  );
}
