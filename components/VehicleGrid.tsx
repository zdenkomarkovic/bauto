import VehicleCard from "./VehicleCard";

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
  vozila: Vozilo[];
  naslov?: string;
}

export default function VehicleGrid({ vozila, naslov }: Props) {
  if (vozila.length === 0) {
    return (
      <div className="text-center py-16 text-gray-500">
        <svg
          className="w-12 h-12 mx-auto mb-4 text-gray-300"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={1.5}
            d="M9.172 16.172a4 4 0 015.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
          />
        </svg>
        <p className="font-medium">Nema dostupnih vozila</p>
        <p className="text-sm mt-1">Proverite ponovo uskoro</p>
      </div>
    );
  }

  return (
    <section>
      {naslov && (
        <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-8">{naslov}</h2>
      )}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {vozila.map((vozilo) => (
          <VehicleCard key={vozilo._id} vozilo={vozilo} />
        ))}
      </div>
    </section>
  );
}
