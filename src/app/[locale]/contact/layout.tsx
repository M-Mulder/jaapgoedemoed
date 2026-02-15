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
    path: 'contact',
    title: 'Contact',
    description:
      'Get in touch with Dutch contemporary artist Jaap Goedemoed. Inquiries about artworks, exhibitions, commissions, and collaborations.',
  });
}

export default function ContactLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
