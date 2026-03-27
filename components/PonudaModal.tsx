"use client";

import { useState } from "react";

interface Props {
  nazivVozila: string;
}

export default function PonudaModal({ nazivVozila }: Props) {
  const [otvoren, setOtvoren] = useState(false);
  const [poslato, setPoslato] = useState(false);
  const [greska, setGreska] = useState(false);
  const [saljem, setSaljem] = useState(false);
  const [forma, setForma] = useState({
    ime: "",
    prezime: "",
    email: "",
    telefon: "",
    poruka: "",
  });

  function handleChange(e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) {
    setForma((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setSaljem(true);
    setGreska(false);
    try {
      const res = await fetch("/api/ponuda", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ ...forma, vozilo: nazivVozila }),
      });
      if (res.ok) {
        setPoslato(true);
      } else {
        setGreska(true);
      }
    } catch {
      setGreska(true);
    } finally {
      setSaljem(false);
    }
  }

  return (
    <>
      {/* Dugme */}
      <button
        onClick={() => setOtvoren(true)}
        className="bg-yellow-400 hover:bg-yellow-300 text-gray-900 font-semibold px-4 py-1.5 text-sm rounded-md transition-colors"
      >
        Zatraži ponudu
      </button>

      {/* Modal */}
      {otvoren && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
          {/* Pozadina */}
          <div
            className="absolute inset-0 bg-black/60 backdrop-blur-sm"
            onClick={() => setOtvoren(false)}
          />

          {/* Sadržaj */}
          <div className="relative bg-white rounded-xl shadow-xl w-full max-w-lg max-h-[90vh] overflow-y-auto">
            {/* Header */}
            <div className="flex items-start justify-between p-6 border-b border-gray-200">
              <div>
                <p className="text-xs text-gray-400 uppercase tracking-wider mb-1">Zatraži ponudu</p>
                <h2 className="text-xl font-bold text-gray-900">{nazivVozila}</h2>
              </div>
              <button
                onClick={() => setOtvoren(false)}
                className="text-gray-400 hover:text-gray-600 transition-colors ml-4 mt-1"
                aria-label="Zatvori"
              >
                <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>

            {/* Forma / Potvrda */}
            <div className="p-6">
              {poslato ? (
                <div className="text-center py-8">
                  <div className="w-14 h-14 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <svg className="w-7 h-7 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <h3 className="text-lg font-bold text-gray-900 mb-2">Hvala na upitu!</h3>
                  <p className="text-gray-500 text-sm">Javićemo Vam se u najkraćem mogućem roku.</p>
                  <button
                    onClick={() => { setOtvoren(false); setPoslato(false); }}
                    className="mt-6 bg-gray-900 hover:bg-gray-800 text-white font-semibold px-6 py-2 rounded-md transition-colors text-sm"
                  >
                    Zatvori
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">
                        Ime <span className="text-red-500">*</span>
                      </label>
                      <input
                        type="text"
                        name="ime"
                        required
                        value={forma.ime}
                        onChange={handleChange}
                        className="w-full border border-gray-300 rounded-md px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-yellow-400 focus:border-transparent"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">
                        Prezime
                      </label>
                      <input
                        type="text"
                        name="prezime"
                        value={forma.prezime}
                        onChange={handleChange}
                        className="w-full border border-gray-300 rounded-md px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-yellow-400 focus:border-transparent"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      Email <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="email"
                      name="email"
                      required
                      value={forma.email}
                      onChange={handleChange}
                      className="w-full border border-gray-300 rounded-md px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-yellow-400 focus:border-transparent"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      Telefon <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="tel"
                      name="telefon"
                      required
                      value={forma.telefon}
                      onChange={handleChange}
                      className="w-full border border-gray-300 rounded-md px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-yellow-400 focus:border-transparent"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      Poruka
                    </label>
                    <textarea
                      name="poruka"
                      rows={3}
                      value={forma.poruka}
                      onChange={handleChange}
                      className="w-full border border-gray-300 rounded-md px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-yellow-400 focus:border-transparent resize-none"
                    />
                  </div>

                  <p className="text-xs text-gray-400 leading-relaxed">
                    Slanjem ovog obrasca saglasni ste da B Auto prikuplja i obrađuje Vaše lične podatke (ime, email, telefon) u cilju odgovora na ovaj upit, u skladu sa Zakonom o zaštiti podataka o ličnosti (Sl. glasnik RS, br. 87/2018) i GDPR. Podaci se koriste isključivo u ovu svrhu i neće biti prosleđeni trećim licima.
                  </p>

                  {greska && (
                    <p className="text-sm text-red-600">Došlo je do greške. Pokušajte ponovo ili nas pozovite.</p>
                  )}
                  <button
                    type="submit"
                    disabled={saljem}
                    className="w-full bg-yellow-400 hover:bg-yellow-300 disabled:opacity-60 text-gray-900 font-semibold py-2.5 rounded-md transition-colors"
                  >
                    {saljem ? "Slanje..." : "Pošalji upit"}
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      )}
    </>
  );
}
