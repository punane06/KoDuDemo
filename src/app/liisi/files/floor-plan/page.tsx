"use client";

import { useMemo, useState } from "react";

import { LiisiHeader } from "@/components/liisi/liisi-header";
import { LiisiViewerSurface } from "@/components/liisi/liisi-viewer-surface";

const technicalLayers = [
  {
    id: "layer-electrical",
    title: "Electrical",
    subtitle: "Outlets & Wiring",
    imageUrl: "https://picsum.photos/seed/kodu-floorplan-electrical/900/560",
  },
  {
    id: "layer-water",
    title: "Water",
    subtitle: "Plumbing",
    imageUrl: "https://picsum.photos/seed/kodu-floorplan-water/900/560",
  },
  {
    id: "layer-switches",
    title: "Switches",
    subtitle: "Light Controls",
    imageUrl: "https://picsum.photos/seed/kodu-floorplan-switches/900/560",
  },
] as const;

export default function LiisiFloorPlanPage() {
  const [activeLayerId, setActiveLayerId] = useState<(typeof technicalLayers)[number]["id"]>(
    technicalLayers[0].id
  );
  const [zoomScale, setZoomScale] = useState(1);

  const activeLayer = useMemo(
    () => technicalLayers.find((layer) => layer.id === activeLayerId) ?? technicalLayers[0],
    [activeLayerId]
  );

  function handleZoomIn() {
    setZoomScale((current) => Math.min(2.5, Number((current + 0.25).toFixed(2))));
  }

  function handleZoomOut() {
    setZoomScale((current) => Math.max(0.75, Number((current - 0.25).toFixed(2))));
  }

  function handleResetZoom() {
    setZoomScale(1);
  }

  return (
    <main className="flex min-h-screen w-full flex-col bg-[#181a1c] text-white">
      <LiisiHeader
        title="Floor Plan"
        subtitle="Pinch to zoom, drag to pan"
        backHref="/liisi/files"
        variant="inner-viewer"
      />

      <section className="flex w-full flex-1 flex-col">
        {/* Image and Zoom Controls - Unified Block */}
        <LiisiViewerSurface
          imageUrl={activeLayer.imageUrl}
          imageAlt={`${activeLayer.title} floor plan layer`}
          zoomScale={zoomScale}
          onZoomIn={handleZoomIn}
          onZoomOut={handleZoomOut}
          onResetZoom={handleResetZoom}
        />

        <div className="mt-auto border-t border-[#3b3f42] px-4 pt-4 pb-6">
          <p className="text-[12px] uppercase tracking-[0.08em] text-[#a8b0b3]">Technical Layers</p>

          <div className="mt-3 grid grid-cols-3 gap-2">
            {technicalLayers.map((layer) => (
              <button
                key={layer.id}
                type="button"
                onClick={() => setActiveLayerId(layer.id)}
                aria-pressed={activeLayer.id === layer.id}
                className={[
                  "rounded-2xl border px-3 py-4 text-left",
                  activeLayer.id === layer.id
                    ? "border-[#5a6268] bg-[#24282c]"
                    : "border-[#4d545a] bg-[#202427] hover:bg-[#24282c]",
                ].join(" ")}
              >
                <p className="text-[14px] font-medium text-[#f1f1f1]">{layer.title}</p>
                <p className="mt-0.5 text-[11px] leading-tight text-[#a8afb2]">{layer.subtitle}</p>
              </button>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
