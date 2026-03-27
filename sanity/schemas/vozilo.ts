import { defineField, defineType } from "sanity";

export const voziloSchema = defineType({
  name: "vozilo",
  title: "Vozilo",
  type: "document",
  fields: [
    defineField({
      name: "naziv",
      title: "Ime vozila",
      type: "string",
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "slug",
      title: "Slug (URL)",
      type: "slug",
      options: { source: "naziv", maxLength: 96 },
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "marka",
      title: "Marka",
      type: "string",
      options: {
        list: [
          { title: "Renault", value: "renault" },
          { title: "Dacia", value: "dacia" },
        ],
        layout: "radio",
      },
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "pogon",
      title: "Pogon",
      type: "string",
      description: "Npr. Full Hybrid, Electric, Mild Hybrid, Benzin, Dizel...",
    }),
    defineField({
      name: "kratakOpis",
      title: "Kratak opis",
      description: "Jedna rečenica koja opisuje vozilo.",
      type: "string",
    }),
    defineField({
      name: "cena",
      title: "Cena (EUR)",
      type: "number",
    }),
    defineField({
      name: "slikaKartica",
      title: "Slika za karticu (listing)",
      description: "Prikazuje se na stranici sa svim vozilima.",
      type: "image",
      options: { hotspot: true },
      fields: [
        defineField({ name: "alt", title: "Alt tekst", type: "string" }),
      ],
    }),
    defineField({
      name: "slikaKarticaMobile",
      title: "Slika za karticu – mobilni",
      description: "Prikazuje se na mobilnim uređajima na stranici sa svim vozilima.",
      type: "image",
      options: { hotspot: true },
      fields: [
        defineField({ name: "alt", title: "Alt tekst", type: "string" }),
      ],
    }),
    defineField({
      name: "slika",
      title: "Slika vozila (detalj)",
      description: "Prikazuje se na stranici vozila.",
      type: "image",
      options: { hotspot: true },
      fields: [
        defineField({ name: "alt", title: "Alt tekst", type: "string" }),
      ],
    }),
    defineField({
      name: "redosled",
      title: "Redosled prikaza",
      description: "Manji broj = prikazuje se prvi.",
      type: "number",
      initialValue: 99,
      validation: (Rule) => Rule.required().integer().min(1),
    }),
    defineField({
      name: "cenovnik",
      title: "Cenovnik (PDF)",
      type: "file",
      options: { accept: "application/pdf" },
    }),
    defineField({
      name: "katalog",
      title: "Katalog (PDF)",
      type: "file",
      options: { accept: "application/pdf" },
    }),
  ],
  preview: {
    select: {
      title: "naziv",
      subtitle: "marka",
      media: "slika",
    },
    prepare({ title, subtitle, media }) {
      const marka = subtitle === "renault" ? "Renault" : subtitle === "dacia" ? "Dacia" : "";
      return { title, subtitle: marka, media };
    },
  },
});
