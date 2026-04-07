import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { SITE_NAME, SITE_URL, KOMPANIJA, KONTAKT, RADNO_VREME } from "@/lib/constants";
const inter = Inter({ subsets: ["latin", "latin-ext"] });

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: `${SITE_NAME} – Prodaja i servis vozila Užice`,
    template: `%s | ${SITE_NAME}`,
  },
  description:
    "B AUTO doo – prodaja i servis vozila u Užicu. Ovlašćeni diler Renault i Dacia. Kvalitetna ponuda automobila, povoljne cene i profesionalni servis.",
  keywords: [
    "B AUTO",
    "auto salon Užice",
    "prodaja automobila Užice",
    "Renault Užice",
    "Dacia Užice",
    "servis vozila Užice",
    "ovlašćeni diler Renault",
    "ovlašćeni diler Dacia",
  ],
  openGraph: {
    type: "website",
    locale: "sr_RS",
    url: SITE_URL,
    siteName: SITE_NAME,
  },
  twitter: {
    card: "summary_large_image",
  },
};

const localBusinessJsonLd = {
  "@context": "https://schema.org",
  "@type": "AutoDealer",
  name: KOMPANIJA.naziv,
  url: SITE_URL,
  logo: `${SITE_URL}/logo novi.png`,
  image: `${SITE_URL}/og-image.png`,
  description:
    "Ovlašćeni diler Renault i Dacia vozila u Užicu. Prodaja novih vozila i profesionalni servis.",
  address: {
    "@type": "PostalAddress",
    streetAddress: KOMPANIJA.adresa,
    addressLocality: "Užice",
    postalCode: "31311",
    addressRegion: "Zlatibor",
    addressCountry: "RS",
  },
  geo: {
    "@type": "GeoCoordinates",
    latitude: 43.8213,
    longitude: 19.8062,
  },
  telephone: KONTAKT.prodaja.telefoni[0].replace(/\s/g, ""),
  email: KONTAKT.prodaja.email,
  openingHoursSpecification: [
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
      opens: "08:30",
      closes: "16:30",
    },
  ],
  priceRange: "€€",
  currenciesAccepted: "RSD, EUR",
  areaServed: {
    "@type": "GeoCircle",
    geoMidpoint: {
      "@type": "GeoCoordinates",
      latitude: 43.8213,
      longitude: 19.8062,
    },
    geoRadius: "100000",
  },
  brand: [
    { "@type": "Brand", name: "Renault" },
    { "@type": "Brand", name: "Dacia" },
  ],
  sameAs: [],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="sr" className={inter.className}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessJsonLd) }}
        />
      </head>
      <body className="flex flex-col min-h-screen">
        {children}
      </body>
    </html>
  );
}
