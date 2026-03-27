import { KONTAKT, RADNO_VREME } from "@/lib/constants";

export default function KontaktBanner() {
  return (
    <section className="bg-gray-900 text-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center md:text-left">
          {/* Prodaja */}
          <div>
            <div className="flex items-center justify-center md:justify-start gap-3 mb-3">
              <span className="w-10 h-10 bg-red-600 rounded-full flex items-center justify-center shrink-0">
                <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
              </span>
              <h3 className="font-bold text-lg">Prodaja</h3>
            </div>
            <div className="space-y-1">
              {KONTAKT.prodaja.telefoni.map((tel) => (
                <a
                  key={tel}
                  href={`tel:${tel.replace(/\s/g, "")}`}
                  className="block text-gray-300 hover:text-red-400 transition-colors"
                >
                  {tel}
                </a>
              ))}
              <a
                href={`mailto:${KONTAKT.prodaja.email}`}
                className="block text-gray-300 hover:text-red-400 transition-colors text-sm"
              >
                {KONTAKT.prodaja.email}
              </a>
            </div>
          </div>

          {/* Servis */}
          <div>
            <div className="flex items-center justify-center md:justify-start gap-3 mb-3">
              <span className="w-10 h-10 bg-red-600 rounded-full flex items-center justify-center shrink-0">
                <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
              </span>
              <h3 className="font-bold text-lg">Servis</h3>
            </div>
            <div className="space-y-1">
              {KONTAKT.servis.telefoni.map((tel) => (
                <a
                  key={tel}
                  href={`tel:${tel.replace(/\s/g, "")}`}
                  className="block text-gray-300 hover:text-red-400 transition-colors"
                >
                  {tel}
                </a>
              ))}
              <a
                href={`mailto:${KONTAKT.servis.email}`}
                className="block text-gray-300 hover:text-red-400 transition-colors text-sm"
              >
                {KONTAKT.servis.email}
              </a>
            </div>
          </div>

          {/* Radno vreme */}
          <div>
            <div className="flex items-center justify-center md:justify-start gap-3 mb-3">
              <span className="w-10 h-10 bg-red-600 rounded-full flex items-center justify-center shrink-0">
                <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </span>
              <h3 className="font-bold text-lg">Radno vreme</h3>
            </div>
            <div className="space-y-1 text-gray-300 text-sm">
              <div className="flex justify-center md:justify-start gap-6">
                <span>Pon – Pet</span>
                <span className="text-white font-medium">{RADNO_VREME.radniDani}</span>
              </div>
              <div className="flex justify-center md:justify-start gap-6">
                <span>Subota</span>
                <span className="text-red-400 font-medium">{RADNO_VREME.subota}</span>
              </div>
              <div className="flex justify-center md:justify-start gap-6">
                <span>Nedjelja</span>
                <span className="text-red-400 font-medium">{RADNO_VREME.nedjelja}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
