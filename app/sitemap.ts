import type { MetadataRoute } from "next";
import { SITE_URL } from "@/lib/constants";
import { getVozila } from "@/lib/sanity";

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const staticPages: MetadataRoute.Sitemap = [
    {
      url: SITE_URL,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 1,
    },
    {
      url: `${SITE_URL}/renault`,
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 0.9,
    },
    {
      url: `${SITE_URL}/dacia`,
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 0.9,
    },
    {
      url: `${SITE_URL}/o-nama`,
      lastModified: new Date(),
      changeFrequency: "yearly",
      priority: 0.6,
    },
    {
      url: `${SITE_URL}/kontakt`,
      lastModified: new Date(),
      changeFrequency: "yearly",
      priority: 0.7,
    },
  ];

  let vozilaPages: MetadataRoute.Sitemap = [];
  try {
    const vozila = await getVozila();
    vozilaPages = vozila.map((vozilo) => ({
      url: `${SITE_URL}/vozila/${vozilo.slug.current}`,
      lastModified: new Date(),
      changeFrequency: "monthly" as const,
      priority: 0.8,
    }));
  } catch {
    // Sanity nije konfigurisan ili nije dostupan
  }

  return [...staticPages, ...vozilaPages];
}
