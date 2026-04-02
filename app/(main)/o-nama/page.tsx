import Image from "next/image";
import { buildMetadata } from "@/lib/metadata";
import { KOMPANIJA } from "@/lib/constants";

export const metadata = buildMetadata({
  title: "O nama",
  description: "Saznajte više o B AUTO doo – prodaji i servisu vozila u Užicu od osnivanja.",
});

export default function ONamaPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-gray-900 text-white py-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-3xl font-bold">O nama</h1>
          <p className="text-gray-400 mt-1">Upoznajte {KOMPANIJA.naziv}</p>
        </div>
      </div>

      {/* Uvod */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <p className="text-yellow-400 font-semibold text-sm uppercase tracking-wider mb-2">
              Naša priča
            </p>
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Vaš pouzdani partner za kupovinu i servis vozila
            </h2>
            <p className="text-gray-600 leading-relaxed mb-4">
              B AUTO je kompanija sa tradicijom dugom 25 godina, izgrađena na poverenju, kvalitetu
              i posvećenosti svakom klijentu. Kao ovlašćeni diler brendova Renault i Dacia, ponosno
              predstavljamo spoj savremene automobilske tehnologije i vrhunske usluge.
            </p>
            <p className="text-gray-600 leading-relaxed mb-4">
              Tokom više od dve i po decenije poslovanja, izgradili smo reputaciju pouzdanog
              partnera, kako za kupovinu novih i polovnih vozila, tako i za kompletno održavanje i
              servisiranje. Naš tim čine iskusni i stručno obučeni profesionalci, koji svakom
              klijentu pristupaju individualno, sa ciljem da pronađu najbolje rešenje za njegove
              potrebe.
            </p>
            <p className="text-gray-600 leading-relaxed mb-4">
              U B AUTO verujemo da je kupovina automobila više od same transakcije – to je početak
              dugoročnog odnosa. Zato kontinuirano unapređujemo našu ponudu i kvalitet usluge,
              prateći najviše standarde brendova koje zastupamo.
            </p>
            <p className="text-gray-600 leading-relaxed font-medium">
              Naša misija je jasna: da pružimo sigurnost, kvalitet i zadovoljstvo na svakom
              kilometru.
            </p>
          </div>

          <div className="relative h-80 rounded-xl overflow-hidden">
            <Image
              src="/20260122_164313.jpg"
              alt="B AUTO salon"
              fill
              className="object-cover"
              sizes="(max-width: 1024px) 100vw, 50vw"
            />
          </div>
        </div>
      </section>

      {/* Naše vrednosti */}
      <section className="bg-white border-t border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900">Naše vrednosti</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                icon: (
                  <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z" />
                  </svg>
                ),
                naslov: "Poverenje",
                opis: "Gradimo dugoročne odnose sa kupcima zasnovane na poštenju i transparentnosti.",
              },
              {
                icon: (
                  <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                ),
                naslov: "Kvalitet",
                opis: "Svako vozilo prolazi temeljnu kontrolu pre prodaje. Nema iznenađenja.",
              },
              {
                icon: (
                  <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M11.42 15.17L17.25 21A2.652 2.652 0 0021 17.25l-5.877-5.877M11.42 15.17l2.496-3.03c.317-.384.74-.626 1.208-.766M11.42 15.17l-4.655 5.653a2.548 2.548 0 11-3.586-3.586l6.837-5.63m5.108-.233c.55-.164 1.163-.188 1.743-.14a4.5 4.5 0 004.486-6.336l-3.276 3.277a3.004 3.004 0 01-2.25-2.25l3.276-3.276a4.5 4.5 0 00-6.336 4.486c.091 1.076-.071 2.264-.904 2.95l-.102.085m-1.745 1.437L5.909 7.5H4.5L2.25 3.75l1.5-1.5L7.5 4.5v1.409l4.26 4.26m-1.745 1.437l1.745-1.437m6.615 8.206L15.75 15.75M4.867 19.125h.008v.008h-.008v-.008z" />
                  </svg>
                ),
                naslov: "Stručnost",
                opis: "Tim iskusnih stručnjaka sa godinama iskustva u prodaji i servisu vozila.",
              },
              {
                icon: (
                  <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v12m-3-2.818l.879.659c1.171.879 3.07.879 4.242 0 1.172-.879 1.172-2.303 0-3.182C13.536 12.219 12.768 12 12 12c-.725 0-1.45-.22-2.003-.659-1.106-.879-1.106-2.303 0-3.182s2.9-.879 4.006 0l.415.33M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                ),
                naslov: "Povoljnost",
                opis: "Konkurentne cene i mogućnost dogovora. Pomažemo i pri finansiranju.",
              },
            ].map((stavka) => (
              <div
                key={stavka.naslov}
                className="bg-gray-50 rounded-xl p-6 text-center border border-gray-200"
              >
                <div className="w-12 h-12  text-yellow-400 border-1 rounded-full flex items-center justify-center mx-auto mb-4">
                  {stavka.icon}
                </div>
                <h3 className="font-bold text-gray-900  mb-2">{stavka.naslov}</h3>
                <p className="text-sm text-gray-600 leading-relaxed">{stavka.opis}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
