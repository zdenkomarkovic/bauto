export const SITE_URL =
  process.env.NEXT_PUBLIC_SITE_URL ?? "http://localhost:3000";

export const SITE_NAME = "B AUTO";

export const KOMPANIJA = {
  naziv: "B AUTO doo",
  adresa: "Zlatiborska 71",
  mesto: "31311 Užice - Bela Zemlja",
  pib: "110 36 38 61",
};

export const KONTAKT = {
  prodaja: {
    telefoni: ["031 57 27 67", "031 57 26 76"],
    email: "prodaja@bauto.rs",
  },
  servis: {
    telefoni: ["031 57 00 18", "031 57 04 18"],
    email: "servis@bauto.rs",
  },
};

export const RADNO_VREME = {
  radniDani: "08:30 – 16:30",
  subota: "Zatvoreno",
  nedjelja: "Zatvoreno",
};
