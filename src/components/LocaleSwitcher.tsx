"use client";

import { useRouter, usePathname } from "next/navigation";
import { Locale } from "@/i18n/config";
import { useLocale } from "@/context/LocaleContext";
import { i18n } from "@/i18n/config";
import { removeLocaleFromPathname } from "@/lib/i18n";

const LocaleSwitcher = () => {
  const router = useRouter();
  const pathname = usePathname();
  const { locale, data } = useLocale();

  const storeLocaleCookie = (target: Locale) => {
    document.cookie = `NEXT_LOCALE=${target}; path=/; max-age=${60 * 60 * 24 * 365}`;
  };

  const gotoLocale = (target: Locale) => {
    if (target === locale) return;
    
    // Remove current locale from pathname and add new locale
    const pathnameWithoutLocale = removeLocaleFromPathname(pathname);
    const newPath = `/${target}${pathnameWithoutLocale}`;
    
    storeLocaleCookie(target);
    router.push(newPath);
  };

  return (
    <div className="flex items-center space-x-3 text-sm">
      {i18n.locales.map((loc) => (
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
