import { notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { getVozilo, urlFor } from "@/lib/sanity";
import { buildMetadata } from "@/lib/metadata";
import PonudaModal from "@/components/PonudaModal";
import TestVoznjaModal from "@/components/TestVoznjaModal";

interface Props {
  params: Promise<{ slug: string }>;
}

export async function generateMetadata({ params }: Props) {
  const { slug } = await params;
  const vozilo = await getVozilo(slug);
  if (!vozilo) return {};
  return buildMetadata({
    title: vozilo.naziv,
    description: vozilo.kratakOpis ?? `${vozilo.naziv} – na prodaju u B AUTO salonu Užice.`,
  });
}

export default async function VoziloPage({ params }: Props) {
  const { slug } = await params;
  const vozilo = await getVozilo(slug);
  if (!vozilo) notFound();

  const markaHref = `/${vozilo.marka}`;
  const markaLabel = vozilo.marka === "renault" ? "Renault" : "Dacia";

  return (
    <div className="bg-gray-900 lg:bg-gray-50">
      {/* Hero – desktop */}
      {vozilo.slika && (
        <div className="hidden lg:block relative w-full h-[calc(100vh-64px)]">
          <Image
            src={urlFor(vozilo.slika).width(1920).url()}
            alt={vozilo.slika.alt ?? vozilo.naziv}
            fill
            className="object-cover"
            sizes="100vw"
            priority
          />

          {/* Overlay gradijent */}
          <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/30 to-transparent" />

          {/* Sadržaj preko slike */}
          <div className="absolute inset-0 flex flex-col justify-between max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
            {/* Breadcrumb */}
            <nav className="flex items-center gap-2 text-sm text-white/70">
              <Link href="/" className="hover:text-white transition-colors">
                Početna
              </Link>
              <span>/</span>
              <Link href={markaHref} className="hover:text-white transition-colors">
                {markaLabel}
              </Link>
              <span>/</span>
              <span className="text-white font-medium truncate">{vozilo.naziv}</span>
            </nav>

            {/* Info – levo dole */}
            <div className="max-w-lg pb-10">
              <h1 className="text-5xl xl:text-6xl font-bold text-white leading-tight mb-1">
                {vozilo.naziv}
              </h1>
              {vozilo.kratakOpis && (
                <p className="text-white/80 text-2xl leading-relaxed mb-2">{vozilo.kratakOpis}</p>
              )}
              {vozilo.cena && (
                <div className="flex items-baseline gap-3 mb-8">
                  <span className="text-white/70 text-2xl">Dostupan od</span>
                  <span className="text-3xl font-bold text-white">
                    {vozilo.cena.toLocaleString("sr-RS")} €
                  </span>
                </div>
              )}

              {/* Dugmad */}
              <div className="flex flex-col gap-3">
                <div className="flex gap-3">
                  <PonudaModal nazivVozila={vozilo.naziv} />
                  <TestVoznjaModal nazivVozila={vozilo.naziv} />
                </div>
                <div className="flex gap-3">
                  {vozilo.cenovnikUrl && (
                    <a
                      href={vozilo.cenovnikUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 bg-white/10 hover:bg-white/20 text-white font-semibold px-5 py-2 rounded-md border border-white/40 backdrop-blur-sm transition-colors text-sm"
                    >
                      <svg
                        className="w-4 h-4"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
                        />
                      </svg>
                      Cenovnik
                    </a>
                  )}
                  {vozilo.katalogUrl && (
                    <a
                      href={vozilo.katalogUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 bg-white/10 hover:bg-white/20 text-white font-semibold px-5 py-2 rounded-md border border-white/40 backdrop-blur-sm transition-colors text-sm"
                    >
                      <svg
                        className="w-4 h-4"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
                        />
                      </svg>
                      Katalog
                    </a>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Mobile layout */}
      <div className="lg:hidden mt-0">
        {/* Slika – gornji deo */}
        {(vozilo.slikaKarticaMobile ?? vozilo.slika) && (
          <Image
            src={urlFor(vozilo.slikaKarticaMobile ?? vozilo.slika).width(800).url()}
            alt={vozilo.naziv}
            width={800}
            height={600}
            className="w-full h-auto"
            priority
          />
        )}

        {/* Sadržaj – ista pozadina kao footer */}
        <div className="bg-gray-900 px-5 py-8 flex flex-col gap-4">
          <h1 className="text-3xl font-bold text-white leading-tight mt-4">{vozilo.naziv}</h1>
          {vozilo.kratakOpis && (
            <p className="text-white/80 text-lg leading-relaxed">{vozilo.kratakOpis}</p>
          )}
          {vozilo.cena && (
            <div className="flex items-baseline gap-3">
              <span className="text-white/70 text-base">Dostupan od</span>
              <span className="text-base font-bold text-white">
                {vozilo.cena.toLocaleString("sr-RS")} €
              </span>
            </div>
          )}

          <div className="flex flex-col gap-3 pt-2">
            <div className="flex gap-3">
              <PonudaModal nazivVozila={vozilo.naziv} />
              <TestVoznjaModal nazivVozila={vozilo.naziv} />
            </div>
            <div className="flex gap-3">
              {vozilo.cenovnikUrl && (
                <a
                  href={vozilo.cenovnikUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 bg-white/10 hover:bg-white/20 text-white font-semibold px-4 py-2.5 rounded-md border border-white/40 transition-colors text-sm"
                >
                  <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
                    />
                  </svg>
                  Cenovnik
                </a>
              )}
              {vozilo.katalogUrl && (
                <a
                  href={vozilo.katalogUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 bg-white/10 hover:bg-white/20 text-white font-semibold px-4 py-2.5 rounded-md border border-white/40 transition-colors text-sm"
                >
                  <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
                    />
                  </svg>
                  Katalog
                </a>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
