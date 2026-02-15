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
    path: 'welcome',
    title: 'Welcome',
    description:
      'Welcome to the studio and artistic world of Dutch contemporary artist Jaap Goedemoed — geometric compositions, abstract art, and mixed media since 1984.',
  });
}

export default function WelcomeLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
