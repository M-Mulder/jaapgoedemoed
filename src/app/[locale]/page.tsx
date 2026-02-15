import type { Metadata } from "next";
import { getLocaleData, type Locale } from "@/lib/localeData";
import { generateLocalizedMetadata } from "@/lib/metadata";
import HomeClient from "@/components/HomeClient";

const baseUrl = process.env.NEXT_PUBLIC_BASE_URL || 'https://jaapgoedemoed.com';

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  const localeData = getLocaleData(locale as Locale);
  
  return generateLocalizedMetadata({
    locale: locale as Locale,
    path: '',
    title: `${localeData.hero.title}`,
    description: localeData.hero.description,
    image: `${baseUrl}/2020/05/6-Composition-2017-Final-state-003-1320x1320.jpg`,
  });
}

export default function Home() {
  return <HomeClient />;
}
