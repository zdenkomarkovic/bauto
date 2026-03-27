import Link from "next/link";
import Image from "next/image";
import { urlFor } from "@/lib/sanity";

interface Vozilo {
  _id: string;
  naziv: string;
  slug: { current: string };
  marka: string;
  model: string;
  godiste: number;
  cena?: number;
  kilometraza?: number;
  gorivo?: string;
  menjac?: string;
  kategorija?: string;
  stanje?: string;
  slika?: {
    asset: { _ref: string };
    alt?: string;
  };
}

interface Props {
  vozilo: Vozilo;
}

const gorivoLabel: Record<string, string> = {
  dizel: "Dizel",
  benzin: "Benzin",
  hibrid: "Hibrid",
  elektricni: "Električni",
  lpg: "LPG",
};

const menjacLabel: Record<string, string> = {
  manuelni: "Manuelni",
  automatski: "Automatski",
  poluautomatski: "Poluauto.",
};

export default function VehicleCard({ vozilo }: Props) {
  const imgUrl = vozilo.slika
    ? urlFor(vozilo.slika).width(640).height(420).auto("format").url()
    : null;

  return (
    <Link
      href={`/vozila/${vozilo.slug.current}`}
      className="group bg-white rounded-xl border border-gray-200 overflow-hidden hover:shadow-lg transition-shadow flex flex-col"
    >
      {/* Slika */}
      <div className="relative h-52 bg-gray-100 overflow-hidden">
        {imgUrl ? (
          <Image
            src={imgUrl}
            alt={vozilo.naziv}
            fill
            className="object-cover group-hover:scale-105 transition-transform duration-300"
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          />
        ) : (
          <div className="absolute inset-0 flex items-center justify-center text-gray-300">
            <svg className="w-16 h-16" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={1}
                d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"
              />
            </svg>
          </div>
        )}

        {/* Badge kategorija */}
        <div className="absolute top-3 left-3 flex gap-2">
          {vozilo.kategorija && (
            <span
              className={`text-xs font-semibold px-2 py-1 rounded ${
                vozilo.kategorija === "novo"
                  ? "bg-green-600 text-white"
                  : "bg-gray-800 text-white"
              }`}
            >
              {vozilo.kategorija === "novo" ? "Novo" : "Polovno"}
            </span>
          )}
          {vozilo.stanje === "rezervisano" && (
            <span className="text-xs font-semibold px-2 py-1 rounded bg-yellow-500 text-white">
              Rezervisano
            </span>
          )}
        </div>
      </div>

      {/* Info */}
      <div className="p-4 flex flex-col flex-1">
        <h3 className="font-bold text-gray-900 text-base leading-snug group-hover:text-red-600 transition-colors">
          {vozilo.naziv}
        </h3>
        <p className="text-sm text-gray-500 mt-0.5">{vozilo.godiste}</p>

        {/* Detalji */}
        <div className="mt-3 flex flex-wrap gap-2">
          {vozilo.kilometraza !== undefined && (
            <span className="text-xs bg-gray-100 text-gray-600 px-2 py-1 rounded">
              {vozilo.kilometraza.toLocaleString("sr-RS")} km
            </span>
          )}
          {vozilo.gorivo && (
            <span className="text-xs bg-gray-100 text-gray-600 px-2 py-1 rounded">
              {gorivoLabel[vozilo.gorivo] ?? vozilo.gorivo}
            </span>
          )}
          {vozilo.menjac && (
            <span className="text-xs bg-gray-100 text-gray-600 px-2 py-1 rounded">
              {menjacLabel[vozilo.menjac] ?? vozilo.menjac}
            </span>
          )}
        </div>

        {/* Cena */}
        <div className="mt-auto pt-4">
          {vozilo.cena ? (
            <p className="text-xl font-bold text-red-600">
              {vozilo.cena.toLocaleString("sr-RS")} €
            </p>
          ) : (
            <p className="text-sm text-gray-400 italic">Cena na upit</p>
          )}
        </div>
      </div>
    </Link>
  );
}
