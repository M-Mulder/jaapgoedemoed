"use client";

import { useRouter, usePathname, useSearchParams } from "next/navigation";
import { Locale } from "@/lib/localeData";
import { useLocale } from "@/context/LocaleContext";

const locales: Locale[] = ["en", "nl-NL", "zh"];

const LocaleSwitcher = () => {
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const { locale, data } = useLocale();

  const gotoLocale = (target: Locale) => {
    const query: Record<string, string> = {};
    searchParams.forEach((value, key) => {
      query[key] = value;
    });

    router.push({ pathname, query }, undefined, { locale: target });
  };

  return (
    <div className="flex items-center space-x-2 text-sm">
      {locales.map((loc) => (
        <button
          key={loc}
          onClick={() => gotoLocale(loc)}
          disabled={loc === locale}
          className={`px-3 py-1 rounded-full border ${
            loc === locale
              ? "border-accent bg-accent text-black"
              : "border-transparent bg-white/10 text-white hover:border-white/40"
          } transition-all duration-200 text-xs`}
        >
          {data.languages[loc]}
        </button>
      ))}
    </div>
  );
};

export default LocaleSwitcher;
