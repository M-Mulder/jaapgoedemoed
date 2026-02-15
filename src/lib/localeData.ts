import { en } from "@/locales/en";
import { zh } from "@/locales/zh";

export type Locale = "en" | "zh" | "nl-NL";

export interface LocaleContent {
  nav: Record<string, string>;
  hero: Record<string, string>;
  sections: Record<string, string>;
  footer: {
    title: string;
    copyright: string;
    exploreTitle: string;
    quickLinks: string[];
    contactTitle: string;
  };
  languages: Record<Locale, string>;
}

const localeMap: Record<Locale, LocaleContent> = {
  en,
  zh,
  "nl-NL": en,
};

export const getLocaleData = (locale: Locale): LocaleContent => {
  return localeMap[locale] ?? en;
};
