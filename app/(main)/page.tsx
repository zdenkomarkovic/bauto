import Link from "next/link";
import Image from "next/image";
import Hero from "@/components/Hero";
import BrendKartice from "@/components/BrendKartice";
import { buildMetadata } from "@/lib/metadata";

export const metadata = buildMetadata({
  title: "Prodaja i servis vozila Užice",
  description:
    "B AUTO doo – prodaja i servis vozila u Užicu. Kvalitetna ponuda automobila, povoljne cene i profesionalni servis.",
});

export default function HomePage() {
  return (
    <>
      <Hero />
      <BrendKartice />

      {/* O nama banner */}
      <section className="bg-white border-t border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <p className="text-yellow-400 font-semibold text-sm uppercase tracking-wider mb-2">
                Ko smo mi
              </p>
              <h2 className="text-3xl font-bold text-gray-900 mb-4">
                B AUTO – vaš pouzdani partner
              </h2>
              <p className="text-gray-600 leading-relaxed mb-6">
                Nalazimo se u Užicu na adresi Zlatiborska 71 i nudimo širok izbor kvalitetnih vozila
                uz profesionalne usluge servisa. Naš tim iskusnih stručnjaka spreman je da vam
                pomogne u pronalasku idealnog automobila.
              </p>
              <ul className="space-y-3">
                {[
                  "Velika ponuda novih vozila",
                  "Profesionalni servis i dijagnostika",
                  "Pomoc pri finansiranju i leasingu",
                  "Stručno osoblje sa godinama iskustva",
                ].map((stavka) => (
                  <li key={stavka} className="flex items-start gap-3 text-gray-700">
                    <span className="mt-0.5 w-5 h-5 bg-yellow-400 rounded-full flex items-center justify-center shrink-0 text-xs font-bold">
                      ✓
                    </span>
                    {stavka}
                  </li>
                ))}
              </ul>
              <Link
                href="/o-nama"
                className="inline-block mt-8 bg-gray-900 hover:bg-gray-800 text-white font-semibold px-6 py-3 rounded-md transition-colors"
              >
                Saznajte više
              </Link>
            </div>

            <div className="relative h-72 lg:h-96 rounded-xl overflow-hidden">
              <Image
                src="/20260108_074838.jpg"
                alt="B AUTO salon"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
