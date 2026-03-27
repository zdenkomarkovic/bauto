import { defineConfig } from "sanity";
import { structureTool } from "sanity/structure";
import { schemaTypes } from "./sanity/schemas";

export default defineConfig({
  name: "bauto",
  title: "B AUTO – Upravljanje sadržajem",
  basePath: "/studio",
  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID!,
  dataset: process.env.NEXT_PUBLIC_SANITY_DATASET ?? "production",
  tools: (prev) =>
    prev.filter((tool) => tool.name !== "releases" && tool.name !== "vision"),
  plugins: [
    structureTool({
      structure: (S) =>
        S.list()
          .title("Vozila")
          .items([
            S.listItem()
              .title("Renault")
              .child(
                S.documentList()
                  .title("Renault vozila")
                  .filter('_type == "vozilo" && marka == "renault"')
              ),
            S.listItem()
              .title("Dacia")
              .child(
                S.documentList()
                  .title("Dacia vozila")
                  .filter('_type == "vozilo" && marka == "dacia"')
              ),
          ]),
    }),
  ],
  schema: {
    types: schemaTypes,
  },
});
