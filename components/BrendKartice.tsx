import Link from "next/link";
import Image from "next/image";

const brendovi = [
  {
    naziv: "Renault",
    slika: "/renault.webp",
    href: "/renault",
  },
  {
    naziv: "Dacia",
    slika: "/dacia.webp",
    href: "/dacia",
  },
];

export default function BrendKartice() {
  return (
    <section className="bg-white py-14">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-10">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-3">Izaberite vaš brend</h2>
          <p className="text-gray-500 max-w-xl mx-auto">
            Kao ovlašćeni diler, nudimo vozila Renault i Dacia sa fabričkom garancijom i kompletnom
            prodajnom podrškom na jednom mestu.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 max-w-3xl mx-auto">
          {brendovi.map((brend) => (
            <Link
              key={brend.naziv}
              href={brend.href}
              className="group relative flex items-center justify-center h-48 rounded-xl border border-gray-200 overflow-hidden bg-gray-50 hover:shadow-md transition-all"
            >
              <Image
                src={brend.slika}
                alt={brend.naziv}
                fill
                className="object-contain p-8 group-hover:scale-105 transition-transform duration-300"
                sizes="(max-width: 640px) 100vw, 50vw"
              />
              <div className="absolute bottom-0 inset-x-0 bg-gradient-to-t from-black/20 to-transparent py-3 text-center opacity-0 group-hover:opacity-100 transition-opacity">
                <span className="text-white font-semibold text-sm drop-shadow">
                  Pogledaj vozila →
                </span>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
