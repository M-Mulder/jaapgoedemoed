"use client";

"use client";

import { useRouter } from "next/navigation";
import { Locale } from "@/lib/localeData";
import { useLocale } from "@/context/LocaleContext";

const locales: Locale[] = ["en", "nl-NL", "zh"];

const LocaleSwitcher = () => {
  const router = useRouter();
  const { locale, data } = useLocale();

  const storeLocaleCookie = (target: Locale) => {
    document.cookie = `NEXT_LOCALE=${target}; path=/; max-age=${60 * 60 * 24 * 365}`;
  };

  const gotoLocale = (target: Locale) => {
    if (target === locale) return;
    storeLocaleCookie(target);
    router.refresh();
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
