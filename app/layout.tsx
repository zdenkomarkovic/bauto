import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { SITE_NAME, SITE_URL, KOMPANIJA } from "@/lib/constants";
const inter = Inter({ subsets: ["latin", "latin-ext"] });

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: `${SITE_NAME} – Prodaja i servis vozila Užice`,
    template: `%s | ${SITE_NAME}`,
  },
  description:
    "B AUTO doo – prodaja i servis vozila u Užicu. Kvalitetna ponuda automobila, povoljne cene i profesionalni servis.",
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

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="sr" className={inter.className}>
      <body className="flex flex-col min-h-screen">
        {children}
      </body>
    </html>
  );
}
