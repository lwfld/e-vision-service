import { ui, defaultLang, type Lang } from "./ui";

export const langs: Lang[] = ["de", "en", "zh"];

/** getStaticPaths-Helfer: eine Route pro Sprache */
export const langPaths = langs.map((lang) => ({ params: { lang } }));

export function useLang(param: string | undefined): Lang {
  if (param && param in ui) return param as Lang;
  return defaultLang;
}

export function useTranslations(lang: Lang) {
  return ui[lang];
}

/** Sprachpräfix vor einen Pfad setzen: localePath('de', '/contact') -> '/de/contact' */
export function localePath(lang: Lang, path: string = "/") {
  const clean = path.startsWith("/") ? path : `/${path}`;
  return `/${lang}${clean === "/" ? "/" : clean}`;
}

/** Denselben Pfad in einer anderen Sprache: für den Sprachumschalter */
export function switchLangPath(pathname: string, target: Lang) {
  const stripped = pathname.replace(/^\/(de|en|zh)(?=\/|$)/, "");
  return localePath(target, stripped || "/");
}

/** HTML lang-Attribut / hreflang-Werte */
export const htmlLang: Record<Lang, string> = {
  de: "de",
  en: "en",
  zh: "zh-CN",
};
