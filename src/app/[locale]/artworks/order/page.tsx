import React from "react";
import LocalizedLink from "@/components/LocalizedLink";
import Image from "next/image";
import { getLocaleData, type Locale } from "@/lib/localeData";
import { generateLocalizedMetadata } from "@/lib/metadata";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: Locale }>;
}) {
  const { locale } = await params;
  const orderContent = getLocaleData(locale).order;

  return generateLocalizedMetadata({
    locale,
    path: '/artworks/order',
    title: `${orderContent.title} | Jaap Goedemoed`,
    description: orderContent.description,
  });
}

export default async function OrderPage({
  params,
}: {
  params: Promise<{ locale: Locale }>;
}) {
  const { locale } = await params;
  const orderContent = getLocaleData(locale).order;

  return (
    <div className="min-h-screen">
      {/* Header section */}
      <div className="bg-background py-20 relative overflow-hidden">
        <div className="absolute inset-0 z-0 opacity-5 pointer-events-none">
          <div className="absolute top-0 left-0 w-full h-full bg-[url('/2018/12/Division-of-the-plane-with-various-elements-1997-160-x-160-cm.jpg')] bg-no-repeat bg-cover blur-xl"></div>
        </div>
        
        <div className="container-wide relative z-10">
          <h1 className="page-title text-center">{orderContent.title}</h1>
          <p className="text-text-muted text-center max-w-2xl mx-auto">
            {orderContent.description}
          </p>
        </div>
      </div>
      
      {/* Content section */}
      <div className="container-narrow py-16">
        <div className="prose prose-invert mx-auto">
          <h2>{orderContent.purchasingTitle}</h2>
          
          <p>{orderContent.purchasingText}</p>
          
          <h3>{orderContent.originalArtworksTitle}</h3>
          
          <p>{orderContent.originalArtworksIntro}</p>
          
          <ol>
            <li>
              <strong>{orderContent.steps.inquiry}:</strong> {orderContent.steps.inquiryText}
            </li>
            <li>
              <strong>{orderContent.steps.availability}:</strong> {orderContent.steps.availabilityText}
            </li>
            <li>
              <strong>{orderContent.steps.viewing}:</strong> {orderContent.steps.viewingText}
            </li>
            <li>
              <strong>{orderContent.steps.purchase}:</strong> {orderContent.steps.purchaseText}
            </li>
            <li>
              <strong>{orderContent.steps.shipping}:</strong> {orderContent.steps.shippingText}
            </li>
          </ol>
          
          <div className="bg-background-light p-6 rounded-md border border-border my-8">
            <h4 className="text-accent mb-4">{orderContent.availableWorksTitle}</h4>
            <p>{orderContent.availableWorksText}</p>
          </div>
          
          <h3>{orderContent.printsTitle}</h3>
          
          <p>{orderContent.printsIntro}</p>
          
          <p>{orderContent.printsEdition}</p>
          
          <ul>
            <li>{orderContent.printSizes.small}</li>
            <li>{orderContent.printSizes.medium}</li>
            <li>{orderContent.printSizes.large}</li>
          </ul>
          
          <p>{orderContent.printsOrder}</p>
          
          <h3>{orderContent.commissionsTitle}</h3>
          
          <p>{orderContent.commissionsText}</p>
          
          <p>{orderContent.commissionsInquiry}</p>
          
          <h3>{orderContent.galleryTitle}</h3>
          
          <p>{orderContent.galleryIntro}</p>
          
          <ul>
            {orderContent.galleries.map((gallery, index) => (
              <li key={index}>{gallery}</li>
            ))}
          </ul>
          
          <p>{orderContent.galleryText}</p>
          
          <h3>{orderContent.contactTitle}</h3>
          
          <p>{orderContent.contactText}</p>
        </div>
      </div>
    </div>
  );
}
