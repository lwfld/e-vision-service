import { z, defineCollection } from "astro:content";

// Einträge liegen unter services/{lang}/{key}.md bzw. cases/{lang}/{key}.md.
// Sprache und sprachübergreifender Key werden aus der Entry-ID abgeleitet
// (siehe splitEntryId in src/i18n/content.ts) – kein slug im Frontmatter nötig.

const servicesCollection = defineCollection({
  type: "content",
  schema: ({ image }) =>
    z.object({
      title: z.string(),
      summary: z.string(),
      icon: z.string(),
      cover: image(),
      order: z.number(),
    }),
});

const casesCollection = defineCollection({
  type: "content",
  schema: ({ image }) =>
    z.object({
      title: z.string(),
      client: z.string(),
      sector: z.string(),
      location: z.string(),
      services: z.array(z.string()),
      summary: z.string(),
      cover: image(),
      order: z.number(),
      draft: z.boolean().default(false),
    }),
});

const partnersCollection = defineCollection({
  type: "data",
  schema: ({ image }) =>
    z.object({
      name: z.string(),
      alt: z.string(),
      logo: image(),
      order: z.number(),
      // "stacked" = zweizeilige Logos (höher dargestellt), "wide" = einzeilige
      shape: z.enum(["wide", "stacked"]).default("wide"),
    }),
});

export const collections = {
  services: servicesCollection,
  cases: casesCollection,
  partners: partnersCollection,
};
