import Link from "next/link";
import Image from "next/image";
import { KOMPANIJA, KONTAKT, RADNO_VREME } from "@/lib/constants";

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-200 border-t-4 border-yellow-400">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Usluge */}
        <div id="usluge" className="mb-12">
          <h3 className="text-white font-semibold text-sm uppercase tracking-wider mb-6">Usluge</h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                naziv: "Prodaja novih vozila",
                opis: "Bogat izbor novih Renault i Dacia modela sa mogućnošću test vožnje. Naši savetnici pomažu vam da pronađete pravo vozilo za vaše potrebe i budžet.",
              },
              {
                naziv: "Servis i rezervni delovi",
                opis: "Redovno održavanje, tehnički pregledi i sve vrste popravki koje obavljaju ovlašćeni tehničari isključivo uz originalne rezervne delove.",
              },
              {
                naziv: "Električna vozila",
                opis: "Upoznajte Renault E-Tech liniju — od čisto električnih do hibridnih modela. Savetujemo vas o opcijama punjenja i dostupnim podsticajima.",
              },
              {
                naziv: "Servis E-Tech pogona",
                opis: "Naši specijalisti su obučeni za dijagnostiku i servis elektromotornih sistema, baterija i hibridnih pogonskih sklopova.",
              },
              {
                naziv: "Finansiranje",
                opis: "Fleksibilni modeli finansiranja u saradnji sa bankarskim partnerima — pronađite mesečnu ratu koja vam odgovara i odmah preuzmite vozilo.",
              },
              {
                naziv: "Renault i Dacia pomoć na putu",
                opis: "Putna pomoć dostupna 24/7. U slučaju kvara, Renault servisna mreža i Dacia servisna mreža reaguje brzo i stoji vam na raspolaganju gde god se nalazili.",
              },
            ].map((usluga) => (
              <div key={usluga.naziv} className="border-l-2 border-yellow-400 pl-4">
                <h4 className="text-white font-medium text-sm mb-1">{usluga.naziv}</h4>
                <p className="text-gray-300 text-xs leading-relaxed">{usluga.opis}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="border-t-4 border-yellow-400 mb-10"></div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Kompanija */}
          <div>
            <div className="inline-block bg-black p-2 rounded mb-3">
              <Image
                src="/logo novi.png"
                alt="B AUTO"
                width={120}
                height={48}
                className="h-10 w-auto object-contain invert"
              />
            </div>
            <p className="text-sm text-gray-300 leading-relaxed mb-3">
              {KOMPANIJA.naziv} – Ovlašćeni prodavac i serviser Renault i Dacia vozila u Užicu
            </p>
            <p className="text-sm leading-relaxed">
              {KOMPANIJA.adresa}
              <br />
              {KOMPANIJA.mesto}
            </p>
            <p className="text-sm mt-2">PIB: {KOMPANIJA.pib}</p>
          </div>

          {/* Prodaja */}
          <div>
            <h3 className="text-white font-semibold text-sm uppercase tracking-wider mb-4">
              Prodaja
            </h3>
            <ul className="space-y-2 text-sm">
              {KONTAKT.prodaja.telefoni.map((tel) => (
                <li key={tel}>
                  <a
                    href={`tel:${tel.replace(/\s/g, "")}`}
                    className="flex items-center gap-2 hover:text-yellow-400 transition-colors"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="w-3.5 h-3.5 shrink-0"
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
                </li>
              ))}
              <li>
                <a
                  href={`mailto:${KONTAKT.prodaja.email}`}
                  className="flex items-center gap-2 hover:text-yellow-400 transition-colors"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-3.5 h-3.5 shrink-0"
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
              </li>
            </ul>
            <h4 className="text-gray-300 text-xs uppercase tracking-wider mt-4 mb-2">
              Radno vreme
            </h4>
            <ul className="space-y-1 text-sm">
              <li>
                <span>Pon – Pet:&nbsp;&nbsp;</span>
                <span className="text-white">{RADNO_VREME.radniDani}</span>
              </li>
              <li>
                <span>Subota:&nbsp;&nbsp;</span>
                <span className="text-gray-300">{RADNO_VREME.subota}</span>
              </li>
              <li>
                <span>Nedjelja:&nbsp;&nbsp;</span>
                <span className="text-gray-300">{RADNO_VREME.nedjelja}</span>
              </li>
            </ul>
          </div>

          {/* Servis */}
          <div>
            <h3 className="text-white font-semibold text-sm uppercase tracking-wider mb-4">
              Servis
            </h3>
            <ul className="space-y-2 text-sm">
              {KONTAKT.servis.telefoni.map((tel) => (
                <li key={tel}>
                  <a
                    href={`tel:${tel.replace(/\s/g, "")}`}
                    className="flex items-center gap-2 hover:text-yellow-400 transition-colors"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="w-3.5 h-3.5 shrink-0"
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
                </li>
              ))}
              <li>
                <a
                  href={`mailto:${KONTAKT.servis.email}`}
                  className="flex items-center gap-2 hover:text-yellow-400 transition-colors"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-3.5 h-3.5 shrink-0"
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
                  {KONTAKT.servis.email}
                </a>
              </li>
            </ul>
            <h4 className="text-gray-300 text-xs uppercase tracking-wider mt-4 mb-2">
              Radno vreme
            </h4>
            <ul className="space-y-1 text-sm">
              <li>
                <span>Pon – Pet:&nbsp;&nbsp;</span>
                <span className="text-white">{RADNO_VREME.radniDani}</span>
              </li>
              <li>
                <span>Subota:&nbsp;&nbsp;</span>
                <span className="text-gray-300">{RADNO_VREME.subota}</span>
              </li>
              <li>
                <span>Nedjelja:&nbsp;&nbsp;</span>
                <span className="text-gray-300">{RADNO_VREME.nedjelja}</span>
              </li>
            </ul>
          </div>

          {/* Navigacija */}
          <div>
            <h3 className="text-white font-semibold text-sm uppercase tracking-wider mb-3">
              Navigacija
            </h3>
            <ul className="space-y-1 text-sm">
              {[
                { href: "/", label: "Početna" },
                { href: "/o-nama", label: "O nama" },
                { href: "/#usluge", label: "Usluge" },
                { href: "/renault", label: "Renault" },
                { href: "/dacia", label: "Dacia" },
                { href: "/kontakt", label: "Kontakt" },
              ].map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="hover:text-yellow-400 transition-colors">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-10 pt-6 border-t border-gray-600 text-center text-xs text-gray-200 flex flex-col sm:flex-row justify-between gap-1">
          <span>
            © {new Date().getFullYear()} {KOMPANIJA.naziv} · Sva prava zadržana
          </span>
          <span>
            Izrada sajta:{" "}
            <a
              href="https://manikamwebsolutions.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-white transition-colors"
            >
              Manikam Web Solutions
            </a>
          </span>
        </div>
      </div>
    </footer>
  );
}
