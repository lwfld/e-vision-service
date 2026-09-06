import { getCollection, type CollectionEntry } from "astro:content";
import type { Lang } from "./ui";

/** Entry-ID "de/warehousing-logistics.md" -> { lang: "de", key: "warehousing-logistics" } */
export function splitEntryId(id: string) {
  const [lang, rest] = id.split("/");
  return { lang: lang as Lang, key: rest.replace(/\.(md|mdx)$/, "") };
}

export async function getServices(lang: Lang) {
  const all = await getCollection("services", ({ id }) => splitEntryId(id).lang === lang);
  return all.sort((a, b) => a.data.order - b.data.order);
}

export async function getCases(lang: Lang) {
  const all = await getCollection(
    "cases",
    ({ id, data }) => splitEntryId(id).lang === lang && !data.draft,
  );
  return all.sort((a, b) => a.data.order - b.data.order);
}

export function entryKey(entry: CollectionEntry<"services"> | CollectionEntry<"cases">) {
  return splitEntryId(entry.id).key;
}
