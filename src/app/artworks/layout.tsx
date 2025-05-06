import { Metadata } from 'next';
import React from 'react';

export const metadata: Metadata = {
  title: 'Artworks | Jaap Goedemoed',
  description: 'Browse the collection of artworks by contemporary artist Jaap Goedemoed, including geometric compositions, mixed media pieces, and conceptual works.',
};

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
