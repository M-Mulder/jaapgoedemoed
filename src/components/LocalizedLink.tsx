"use client";

import Link from "next/link";
import { useLocale } from "@/context/LocaleContext";
import { getLocalizedPath } from "@/lib/i18n";
import { ComponentProps } from "react";

type LocalizedLinkProps = Omit<ComponentProps<typeof Link>, 'href'> & {
  href: string;
};

export default function LocalizedLink({ href, ...props }: LocalizedLinkProps) {
  const { locale } = useLocale();
  const localizedHref = href.startsWith('/') && !href.startsWith(`/${locale}`)
    ? getLocalizedPath(locale as any, href.slice(1))
    : href;

  return <Link href={localizedHref} {...props} />;
}
