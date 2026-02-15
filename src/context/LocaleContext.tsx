"use client";

import { createContext, useContext, useMemo } from "react";
import { Locale, LocaleContent } from "@/lib/localeData";

interface LocaleContextValue {
  locale: Locale;
  data: LocaleContent;
}

const LocaleContext = createContext<LocaleContextValue | undefined>(undefined);

interface LocaleProviderProps {
  locale: Locale;
  data: LocaleContent;
  children: React.ReactNode;
}

export const LocaleProvider = ({ locale, data, children }: LocaleProviderProps) => {
  const value = useMemo(() => ({ locale, data }), [locale, data]);
  return <LocaleContext.Provider value={value}>{children}</LocaleContext.Provider>;
};

export const useLocale = (): LocaleContextValue => {
  const context = useContext(LocaleContext);
  if (!context) {
    throw new Error("useLocale must be used within a LocaleProvider");
  }
  return context;
};
