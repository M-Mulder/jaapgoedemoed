import zh from "./localized-artworks/zh.json";
import { Locale } from "./localeData";

interface ArtworkTranslation {
  title?: string;
  description?: string;
  medium?: string;
  dimensions?: string;
}

const translations: Record<Locale, Record<string, ArtworkTranslation>> = {
  en: {},
  "nl-NL": {},
  zh,
};

export const getArtworkTranslation = (slug: string, locale: Locale): ArtworkTranslation | undefined => {
  if (!translations[locale]) {
    return undefined;
  }
  return translations[locale][slug];
};
