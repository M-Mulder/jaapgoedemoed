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
    path: 'info',
    title: 'Information',
    description:
      'Learn more about Dutch contemporary artist Jaap Goedemoed — his artistic journey, interviews, exhibitions, and notable events throughout his career since 1984.',
  });
}

export default function InfoLayout({
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
