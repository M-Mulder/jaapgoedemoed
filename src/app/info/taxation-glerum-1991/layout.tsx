import { Metadata } from 'next';
import React from 'react';

export const metadata: Metadata = {
  title: 'Taxation by Jan Pieter Glerum (1991) | Jaap Goedemoed',
  description: 'Historical valuation of Jaap Goedemoed\'s artworks by renowned art expert Jan Pieter Glerum in 1991 at OvaBloc Europe B.V. in Leiden, The Netherlands.',
};

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
