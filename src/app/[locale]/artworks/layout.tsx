import React from 'react';
import type { Metadata } from 'next';
import { generateLocalizedMetadata } from '@/lib/metadata';
import { Locale } from '@/i18n/config';

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;

  return generateLocalizedMetadata({
    locale: locale as Locale,
    path: 'artworks',
    title: 'Artworks',
    description:
      'Browse the collection of artworks by Dutch contemporary artist Jaap Goedemoed — geometric compositions, abstract art, mixed media collages, and works on old stock paper.',
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
