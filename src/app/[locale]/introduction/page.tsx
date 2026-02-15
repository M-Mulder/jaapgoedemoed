import React from 'react';
import { generateLocalizedMetadata } from '@/lib/metadata';
import type { Locale } from '@/i18n/config';

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  return generateLocalizedMetadata({
    locale: locale as Locale,
    path: 'introduction',
    title: 'Introduction',
    description:
      "An introduction to the artistic world of Jaap Goedemoed — exploring the artist's journey, philosophy, and the evolution of his geometric and abstract work.",
  });
}

const IntroductionPage = () => {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">Introduction</h1>
      <p className="text-lg text-gray-700 mb-4">
        Welcome to the artistic world of Jaap Goedemoed. This section provides an overview of the artist's journey, philosophy, and the evolution of his work.
      </p>
      <p className="text-lg text-gray-700">
        Explore the various sections of the site to delve deeper into specific periods, themes, and mediums.
      </p>
      {/* More content can be added here later */}
    </div>
  );
};

export default IntroductionPage;
