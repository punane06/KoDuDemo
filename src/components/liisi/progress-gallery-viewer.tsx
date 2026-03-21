"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { ChevronLeft, ChevronRight, X } from "lucide-react";

import type { ProgressGalleryPhoto } from "@/lib/mockData";

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
      <header className="flex items-start justify-between px-6 pt-12 pb-6">
        <div>
          <h1 className="text-2xl font-medium">Progress Gallery</h1>
          <p className="mt-1 text-sm text-white/60">
            {activeIndex + 1} of {total}
          </p>
        </div>
        <Link
          href="/liisi"
          aria-label="Close gallery"
          className="rounded-full p-2 text-white/80 transition hover:bg-white/10 hover:text-white"
        >
          <X size={22} />
        </Link>
      </header>

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
                  isActive
                    ? "border-[#FACC58] ring-2 ring-[#FACC58]/30"
                    : "border-white/15 opacity-80 hover:opacity-100",
                ].join(" ")}
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
    </main>
  );
}
