"use client";

import Image from "next/image";
import { useState, useEffect, useCallback } from "react";

const slides = [
  { src: "/hero3.jpg", alt: "B AUTO – vozila" },
  { src: "/hero1.jpg", alt: "B AUTO – salon" },
  { src: "/hero2.jpg", alt: "B AUTO – ponuda" },
  { src: "/hero4.jpg", alt: "B AUTO – ponuda" },
  { src: "/hero5.jpg", alt: "B AUTO – ponuda" },
];

export default function Hero() {
  const [current, setCurrent] = useState(0);

  const next = useCallback(() => setCurrent((c) => (c + 1) % slides.length), []);
  const prev = () => setCurrent((c) => (c - 1 + slides.length) % slides.length);

  useEffect(() => {
    const timer = setInterval(next, 5000);
    return () => clearInterval(timer);
  }, [next]);

  return (
    <div className="w-full">
      <section className="relative w-full aspect-video sm:aspect-auto sm:h-[calc(100vh-4rem)] overflow-hidden bg-gray-900">
        {slides.map((slide, i) => (
          <div
            key={i}
            className={`absolute inset-0 transition-opacity duration-700 ${i === current ? "opacity-100" : "opacity-0"}`}
          >
            <Image
              src={slide.src}
              alt={slide.alt}
              fill
              className="object-cover"
              priority={i === 0}
              sizes="100vw"
            />
          </div>
        ))}

        {/* Overlay + H1 – samo desktop */}
        <div className="absolute inset-0 bg-black/40 hidden sm:block" />
        <div className="absolute inset-x-0 bottom-0 pb-16 hidden sm:block">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight drop-shadow-lg max-w-4xl">
              B Auto
              <span className="block text-2xl sm:text-3xl font-medium mt-2 text-white/90">
                Ovlašćeni prodavac i serviser za vozila Renault i Dacia
              </span>
            </h1>
          </div>
        </div>

        {/* Strelice – samo desktop */}
        <button
          onClick={prev}
          className="hidden sm:flex absolute left-4 top-1/2 -translate-y-1/2 z-10 bg-black/30 hover:bg-black/50 text-white w-10 h-10 rounded-full items-center justify-center text-2xl transition-colors"
          aria-label="Prethodni"
        >
          ‹
        </button>
        <button
          onClick={next}
          className="hidden sm:flex absolute right-4 top-1/2 -translate-y-1/2 z-10 bg-black/30 hover:bg-black/50 text-white w-10 h-10 rounded-full items-center justify-center text-2xl transition-colors"
          aria-label="Sledeći"
        >
          ›
        </button>

        {/* Dots */}
        <div className="absolute bottom-4 left-1/2 -translate-x-1/2 z-10 flex gap-2">
          {slides.map((_, i) => (
            <button
              key={i}
              onClick={() => setCurrent(i)}
              className={`w-2.5 h-2.5 rounded-full transition-colors ${i === current ? "bg-white" : "bg-white/40"}`}
              aria-label={`Slajd ${i + 1}`}
            />
          ))}
        </div>
      </section>

      {/* H1 – samo mobilni, ispod slike */}
      <div className="sm:hidden bg-gray-900 px-4 py-6">
        <h1 className="text-2xl font-bold text-white leading-tight">
          B Auto
          <span className="block text-base font-medium mt-1 text-white/80">
            Ovlašćeni prodavac i serviser za vozila Renault i Dacia
          </span>
        </h1>
      </div>
    </div>
  );
}
