import React from 'react';
import type { Metadata } from 'next';
import { generateLocalizedMetadata } from '@/lib/metadata';
import { Locale } from '@/i18n/config';
import { getLocaleData } from '@/lib/localeData';

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  const localeData = getLocaleData(locale as Locale);
  const artworksContent = localeData.artworks;

  return generateLocalizedMetadata({
    locale: locale as Locale,
    path: 'artworks',
    title: artworksContent.title,
    description: artworksContent.description,
  });
}

export default function ArtworksLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div>
      {children}
    </div>
  );
}
