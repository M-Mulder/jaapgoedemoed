import { Metadata } from 'next';
import React from 'react';

export const metadata: Metadata = {
  title: 'Information | Jaap Goedemoed',
  description: 'Learn more about contemporary artist Jaap Goedemoed, his artistic journey, exhibitions, and notable events throughout his career.',
};

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
