"use client";

import { useRouter, useSearchParams } from "next/navigation";

interface Props {
  marke: string[];
  activeKategorija?: string;
  activeMarka?: string;
}

export default function VozilaFilter({ marke, activeKategorija, activeMarka }: Props) {
  const router = useRouter();

  function update(key: string, value: string | undefined) {
    const params = new URLSearchParams();
    if (key !== "kategorija" && activeKategorija) params.set("kategorija", activeKategorija);
    if (key !== "marka" && activeMarka) params.set("marka", activeMarka);
    if (value) params.set(key, value);
    router.push(`/vozila${params.toString() ? `?${params}` : ""}`);
  }

  const kategorije = [
    { value: undefined, label: "Sve" },
    { value: "novo", label: "Nova vozila" },
    { value: "polovno", label: "Polovna vozila" },
  ];

  return (
    <div className="flex flex-wrap gap-6 items-end bg-white p-5 rounded-xl border border-gray-200">
      {/* Kategorija */}
      <div>
        <p className="text-xs font-semibold text-gray-500 uppercase tracking-wider mb-2">
          Kategorija
        </p>
        <div className="flex gap-2 flex-wrap">
          {kategorije.map((k) => (
            <button
              key={k.label}
              onClick={() => update("kategorija", k.value)}
              className={`text-sm px-4 py-1.5 rounded-full border transition-colors ${
                activeKategorija === k.value
                  ? "bg-red-600 text-white border-red-600"
                  : "border-gray-300 text-gray-700 hover:border-red-400"
              }`}
            >
              {k.label}
            </button>
          ))}
        </div>
      </div>

      {/* Marka */}
      {marke.length > 0 && (
        <div>
          <p className="text-xs font-semibold text-gray-500 uppercase tracking-wider mb-2">
            Marka
          </p>
          <select
            value={activeMarka ?? ""}
            onChange={(e) => update("marka", e.target.value || undefined)}
            className="text-sm border border-gray-300 rounded-md px-3 py-1.5 focus:outline-none focus:ring-2 focus:ring-red-500"
          >
            <option value="">Sve marke</option>
            {marke.map((m) => (
              <option key={m} value={m}>
                {m}
              </option>
            ))}
          </select>
        </div>
      )}

      {/* Reset */}
      {(activeKategorija || activeMarka) && (
        <button
          onClick={() => router.push("/vozila")}
          className="text-sm text-red-600 hover:text-red-700 font-medium underline"
        >
          Poništi filtere
        </button>
      )}
    </div>
  );
}
