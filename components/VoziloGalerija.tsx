"use client";

import Image from "next/image";
import { useState } from "react";
import { urlFor } from "@/lib/sanity";

interface Slika {
  asset: { _ref: string };
  alt?: string;
}

interface Props {
  slike: Slika[];
  naziv: string;
}

export default function VoziloGalerija({ slike, naziv }: Props) {
  const [aktivan, setAktivan] = useState(0);

  if (!slike || slike.length === 0) {
    return (
      <div className="bg-gray-100 rounded-xl h-72 flex items-center justify-center text-gray-300">
        <svg className="w-20 h-20" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
        </svg>
      </div>
    );
  }

  return (
    <div>
      {/* Glavna slika */}
      <div className="relative h-72 md:h-96 rounded-xl overflow-hidden bg-gray-100">
        <Image
          src={urlFor(slike[aktivan]!).width(900).height(600).auto("format").url()}
          alt={slike[aktivan]?.alt ?? naziv}
          fill
          className="object-cover"
          sizes="(max-width: 1024px) 100vw, 60vw"
          priority
        />

        {slike.length > 1 && (
          <>
            <button
              onClick={() => setAktivan((a) => (a - 1 + slike.length) % slike.length)}
              className="absolute left-3 top-1/2 -translate-y-1/2 bg-black/40 hover:bg-black/60 text-white w-9 h-9 rounded-full flex items-center justify-center text-xl transition-colors"
            >
              ‹
            </button>
            <button
              onClick={() => setAktivan((a) => (a + 1) % slike.length)}
              className="absolute right-3 top-1/2 -translate-y-1/2 bg-black/40 hover:bg-black/60 text-white w-9 h-9 rounded-full flex items-center justify-center text-xl transition-colors"
            >
              ›
            </button>
            <div className="absolute bottom-3 right-3 bg-black/50 text-white text-xs px-2 py-1 rounded">
              {aktivan + 1} / {slike.length}
            </div>
          </>
        )}
      </div>

      {/* Thumbnails */}
      {slike.length > 1 && (
        <div className="mt-3 flex gap-2 overflow-x-auto pb-1">
          {slike.map((slika, i) => (
            <button
              key={i}
              onClick={() => setAktivan(i)}
              className={`relative shrink-0 w-20 h-14 rounded-lg overflow-hidden border-2 transition-colors ${
                i === aktivan ? "border-red-600" : "border-transparent"
              }`}
            >
              <Image
                src={urlFor(slika).width(160).height(112).auto("format").url()}
                alt={slika.alt ?? `${naziv} – slika ${i + 1}`}
                fill
                className="object-cover"
                sizes="80px"
              />
            </button>
          ))}
        </div>
      )}
    </div>
  );
}
