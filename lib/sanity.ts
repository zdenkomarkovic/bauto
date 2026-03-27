import { createClient } from "next-sanity";
import imageUrlBuilder from "@sanity/image-url";
// eslint-disable-next-line @typescript-eslint/no-explicit-any
type SanityImageSource = any;

const projectId = process.env.NEXT_PUBLIC_SANITY_PROJECT_ID;
const isSanityConfigured = !!(projectId && projectId.length > 4);

export const sanityClient = createClient({
  projectId: projectId || "xxxxxxxxxxxxxxxx",
  dataset: process.env.NEXT_PUBLIC_SANITY_DATASET ?? "production",
  apiVersion: "2024-01-01",
  useCdn: isSanityConfigured,
  ...(isSanityConfigured ? {} : { token: undefined }),
});

// eslint-disable-next-line @typescript-eslint/no-explicit-any
let _builder: any = null;
function getBuilder() {
  if (!_builder) _builder = imageUrlBuilder(sanityClient);
  return _builder;
}
export function urlFor(source: SanityImageSource) {
  return getBuilder().image(source);
}

// ─── Types ────────────────────────────────────────────────────────────────────

export interface Vozilo {
  _id: string;
  naziv: string;
  slug: { current: string };
  marka: "renault" | "dacia";
  pogon?: string;
  kratakOpis?: string;
  cena?: number;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  slikaKartica?: { asset: any; alt?: string };
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  slikaKarticaMobile?: { asset: any; alt?: string };
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  slika?: { asset: any; alt?: string };
  redosled?: number;
  cenovnikUrl?: string;
  katalogUrl?: string;
}

// ─── Queries ──────────────────────────────────────────────────────────────────

const VOZILO_FIELDS = `
  _id,
  naziv,
  slug,
  marka,
  pogon,
  kratakOpis,
  cena,
  redosled,
  slikaKartica,
  slikaKarticaMobile,
  slika,
  "cenovnikUrl": cenovnik.asset->url,
  "katalogUrl": katalog.asset->url
`;

export async function getVozila(marka?: "renault" | "dacia") {
  const filter = marka
    ? `_type == "vozilo" && marka == "${marka}"`
    : `_type == "vozilo"`;

  const query = `*[${filter}] | order(redosled asc, _createdAt desc) { ${VOZILO_FIELDS} }`;

  if (!isSanityConfigured) return [];
  return sanityClient.fetch<Vozilo[]>(query);
}

export async function getVozilo(slug: string) {
  const query = `*[_type == "vozilo" && slug.current == $slug][0] { ${VOZILO_FIELDS} }`;

  if (!isSanityConfigured) return null;
  return sanityClient.fetch<Vozilo>(query, { slug });
}
