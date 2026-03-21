"use client";

import { useState } from "react";
import Image from "next/image";
import { ChevronLeft, ChevronRight } from "lucide-react";

import type { ProgressGalleryPhoto } from "@/lib/mockData";
import { liisiColors } from "@/components/liisi/liisi-design-system";
import { LiisiHeader } from "@/components/liisi/liisi-header";
import { LiisiChatFab } from "@/components/liisi/liisi-chat-fab";

interface ProgressGalleryViewerProps {
  photos: ProgressGalleryPhoto[];
}

export function ProgressGalleryViewer({ photos }: ProgressGalleryViewerProps) {
  const [activeIndex, setActiveIndex] = useState(0);

  const activePhoto = photos[activeIndex];
  const total = photos.length;

  function showPreviousPhoto() {
    setActiveIndex((current) => (current - 1 + total) % total);
  }

  function showNextPhoto() {
    setActiveIndex((current) => (current + 1) % total);
  }

  return (
    <main className="flex min-h-screen w-screen flex-col bg-black text-white">
      <LiisiHeader
        title="Progress Gallery"
        subtitle={`${activeIndex + 1} of ${total}`}
        backHref="/liisi"
        variant="inner"
      />

      <section className="relative flex flex-1 items-center justify-center px-0">
        <div className="relative h-[42vh] w-full overflow-hidden bg-zinc-950">
          <Image
            src={activePhoto.url}
            alt={activePhoto.title}
            fill
            sizes="(max-width: 640px) 100vw, 420px"
            className="object-cover"
            priority
          />
        </div>

        <button
          type="button"
          onClick={showPreviousPhoto}
          aria-label="Previous photo"
          className="absolute left-6 top-1/2 z-10 flex h-14 w-14 -translate-y-1/2 items-center justify-center rounded-full bg-white/75 text-black shadow-lg backdrop-blur-sm transition hover:bg-white/90"
        >
          <ChevronLeft size={28} />
        </button>

        <button
          type="button"
          onClick={showNextPhoto}
          aria-label="Next photo"
          className="absolute right-6 top-1/2 z-10 flex h-14 w-14 -translate-y-1/2 items-center justify-center rounded-full bg-white/75 text-black shadow-lg backdrop-blur-sm transition hover:bg-white/90"
        >
          <ChevronRight size={28} />
        </button>
      </section>

      <section className="px-6 pb-6 pt-8">
        <div className="flex gap-3 overflow-x-auto pb-1">
          {photos.map((photo, index) => {
            const isActive = index === activeIndex;

            return (
              <button
                key={photo.id}
                type="button"
                onClick={() => setActiveIndex(index)}
                className={[
                  "relative h-16 w-16 shrink-0 cursor-pointer overflow-hidden rounded-2xl border transition",
                  isActive ? "opacity-100" : "border-white/15 opacity-80 hover:opacity-100",
                ].join(" ")}
                style={
                  isActive
                    ? {
                        borderColor: liisiColors.accent,
                        boxShadow: `0 0 0 2px ${liisiColors.accent}4D`,
                      }
                    : undefined
                }
                aria-label={`Open ${photo.title}`}
                aria-pressed={isActive}
              >
                <Image
                  src={photo.url}
                  alt={photo.title}
                  fill
                  sizes="64px"
                  className="object-cover"
                />
              </button>
            );
          })}
        </div>
      </section>

      <LiisiChatFab />
    </main>
  );
}
