import Image from "next/image";
import Link from "next/link";
import { getVozila, urlFor } from "@/lib/sanity";
import { buildMetadata } from "@/lib/metadata";
import { KOMPANIJA, KONTAKT, RADNO_VREME } from "@/lib/constants";

export const metadata = buildMetadata({
  title: "Dacia – nova vozila",
  description: "Pogledajte ponudu novih Dacia vozila u B AUTO salonu u Užicu.",
});

export default async function DaciaPage() {
  const vozila = await getVozila("dacia");

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Desktop hero */}
      <div className="relative w-full h-[calc(100vh-4rem)] hidden sm:block">
        <Image
          src="/bigster-desktop (1).webp"
          alt="Dacia Bigster"
          fill
          className="object-cover"
          sizes="100vw"
          priority
        />
        {/* Desktop logo gore levo */}
        <div className="absolute inset-0 flex items-center">
          <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <Image
              src="/dacia (1).webp"
              alt="Dacia"
              width={333}
              height={166}
              className="object-contain w-[333px] invert"
            />
          </div>
        </div>
        {/* Desktop info blok – donji levi ugao */}
        <div className="absolute bottom-0 left-0 right-0">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-8">
            <div className="inline-block bg-black/40 backdrop-blur-sm text-white rounded-xl p-5 text-sm space-y-3 max-w-sm">
              <p className="text-lg font-bold">Dobrodošli u B Auto</p>
              <div className="flex items-start gap-2 text-gray-200">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-4 h-4 mt-0.5 shrink-0"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={1.8}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"
                  />
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1 1 15 0Z"
                  />
                </svg>
                <span>
                  {KOMPANIJA.adresa}, {KOMPANIJA.mesto}
                </span>
              </div>
              <div className="flex items-start gap-2 text-gray-200">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-4 h-4 mt-0.5 shrink-0"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={1.8}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M12 6v6h4.5m4.5 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
                  />
                </svg>
                <span>
                  Pon–Pet: {RADNO_VREME.radniDani} · Sub/Ned: {RADNO_VREME.subota}
                </span>
              </div>
              <div className="space-y-1">
                {KONTAKT.prodaja.telefoni.map((tel) => (
                  <a
                    key={tel}
                    href={`tel:${tel.replace(/\s/g, "")}`}
                    className="flex items-center gap-2 text-gray-200 hover:text-yellow-400 transition-colors"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="w-4 h-4 shrink-0"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      strokeWidth={1.8}
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 0 0 2.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 0 1-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 0 0-1.091-.852H4.5A2.25 2.25 0 0 0 2.25 4.5v2.25Z"
                      />
                    </svg>
                    {tel}
                  </a>
                ))}
                <a
                  href={`mailto:${KONTAKT.prodaja.email}`}
                  className="flex items-center gap-2 text-gray-200 hover:text-yellow-400 transition-colors"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-4 h-4 shrink-0"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={1.8}
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M21.75 6.75v10.5a2.25 2.25 0 0 1-2.25 2.25h-15a2.25 2.25 0 0 1-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25m19.5 0v.243a2.25 2.25 0 0 1-1.07 1.916l-7.5 4.615a2.25 2.25 0 0 1-2.36 0L3.32 8.91a2.25 2.25 0 0 1-1.07-1.916V6.75"
                    />
                  </svg>
                  {KONTAKT.prodaja.email}
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Mobile hero */}
      <div className="sm:hidden">
        <div className="relative w-full aspect-[2560/1707]">
          <Image
            src="/bigster-mobile (1).webp"
            alt="Dacia Bigster"
            fill
            className="object-cover"
            sizes="100vw"
            priority
          />
          <div className="absolute bottom-4 left-4">
            <Image
              src="/dacia (1).webp"
              alt="Dacia"
              width={80}
              height={40}
              className="object-contain invert"
            />
          </div>
        </div>
        {/* Mobile info blok */}
        <div className="bg-gray-900 text-white px-4 py-6 space-y-3 text-sm">
          <p className="text-lg font-bold">Dobrodošli u B Auto</p>
          <div className="flex items-start gap-2 text-gray-300">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="w-4 h-4 mt-0.5 shrink-0"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={1.8}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"
              />
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1 1 15 0Z"
              />
            </svg>
            <span>
              {KOMPANIJA.adresa}, {KOMPANIJA.mesto}
            </span>
          </div>
          <div className="flex items-start gap-2 text-gray-300">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="w-4 h-4 mt-0.5 shrink-0"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={1.8}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M12 6v6h4.5m4.5 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
              />
            </svg>
            <span>
              Pon–Pet: {RADNO_VREME.radniDani} · Sub/Ned: {RADNO_VREME.subota}
            </span>
          </div>
          <div className="space-y-1">
            {KONTAKT.prodaja.telefoni.map((tel) => (
              <a
                key={tel}
                href={`tel:${tel.replace(/\s/g, "")}`}
                className="flex items-center gap-2 text-gray-300 hover:text-yellow-400 transition-colors"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-4 h-4 shrink-0"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={1.8}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 0 0 2.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 0 1-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 0 0-1.091-.852H4.5A2.25 2.25 0 0 0 2.25 4.5v2.25Z"
                  />
                </svg>
                {tel}
              </a>
            ))}
            <a
              href={`mailto:${KONTAKT.prodaja.email}`}
              className="flex items-center gap-2 text-gray-300 hover:text-yellow-400 transition-colors"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="w-4 h-4 shrink-0"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={1.8}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M21.75 6.75v10.5a2.25 2.25 0 0 1-2.25 2.25h-15a2.25 2.25 0 0 1-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25m19.5 0v.243a2.25 2.25 0 0 1-1.07 1.916l-7.5 4.615a2.25 2.25 0 0 1-2.36 0L3.32 8.91a2.25 2.25 0 0 1-1.07-1.916V6.75"
                />
              </svg>
              {KONTAKT.prodaja.email}
            </a>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <h2 className="text-2xl font-bold text-gray-900 mb-8">Naša ponuda Dacia vozila</h2>
        {vozila.length === 0 ? (
          <p className="text-gray-500 text-center py-16">Trenutno nema vozila u ponudi.</p>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {vozila.map((vozilo) => (
              <Link
                key={vozilo._id}
                href={`/vozila/${vozilo.slug.current}`}
                className="bg-white rounded-xl border border-gray-200 overflow-hidden hover:shadow-md transition-shadow group"
              >
                  <div className="relative aspect-[4/3] bg-gray-100">
                    {vozilo.slikaKarticaMobile || vozilo.slikaKartica ? (
                      <>
                        {vozilo.slikaKarticaMobile && (
                          <Image
                            src={urlFor(vozilo.slikaKarticaMobile).width(600).url()}
                            alt={vozilo.slikaKarticaMobile.alt ?? vozilo.naziv}
                            fill
                            className="object-cover group-hover:scale-105 transition-transform duration-300 sm:hidden"
                            sizes="100vw"
                          />
                        )}
                        {vozilo.slikaKartica && (
                          <Image
                            src={urlFor(vozilo.slikaKartica).width(600).url()}
                            alt={vozilo.slikaKartica.alt ?? vozilo.naziv}
                            fill
                            className="object-cover group-hover:scale-105 transition-transform duration-300 hidden sm:block"
                            sizes="(max-width: 1024px) 50vw, 33vw"
                          />
                        )}
                      </>
                    ) : (
                      <div className="flex items-center justify-center h-full text-gray-300 text-sm">
                        Nema slike
                      </div>
                    )}
                  </div>
                  <div className="p-5">
                    <h2 className="font-bold text-gray-900 text-lg leading-snug">{vozilo.naziv}</h2>
                    {vozilo.pogon && (
                      <div className="flex flex-col items-start gap-1 mt-1">
                        {/full h[iy]brid/i.test(vozilo.pogon) && (
                          <span className="text-xs text-gray-400">
                            Takođe kao
                          </span>
                        )}
                        <span className="inline-block text-xs font-semibold text-yellow-400 px-2.5 py-0.5 border rounded-full">
                          {vozilo.pogon}
                        </span>
                      </div>
                    )}
                    {vozilo.kratakOpis && (
                      <p className="text-sm text-gray-500 mt-1 line-clamp-2">{vozilo.kratakOpis}</p>
                    )}
                    {vozilo.cena && (
                      <p className="  font-bold text-lg">
                        Dostupan od {vozilo.cena.toLocaleString("sr-RS")} €
                      </p>
                    )}
                  </div>
              </Link>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
