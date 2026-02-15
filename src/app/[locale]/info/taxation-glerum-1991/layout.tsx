import React from 'react';
import type { Metadata } from 'next';
import { generateLocalizedMetadata } from '@/lib/metadata';
import type { Locale } from '@/i18n/config';

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  return generateLocalizedMetadata({
    locale: locale as Locale,
    path: 'info/taxation-glerum-1991',
    title: 'Taxation by Jan Pieter Glerum (1991)',
    description:
      "Historical valuation of Jaap Goedemoed's artworks by renowned Dutch art expert Jan Pieter Glerum in 1991 at OvaBloc Europe B.V. in Leiden, The Netherlands.",
  });
}

export default function TaxationLayout({
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
