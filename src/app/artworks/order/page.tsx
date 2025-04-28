import React from "react";
import Link from "next/link";
import Image from "next/image";

export const metadata = {
  title: 'How to Order Artworks | Jaap Goedemoed',
  description: 'Learn how to order original artworks and prints by Jaap Goedemoed.',
};

export default function OrderPage() {
  return (
    <div className="min-h-screen">
      {/* Header section */}
      <div className="bg-background py-20 relative overflow-hidden">
        <div className="absolute inset-0 z-0 opacity-5 pointer-events-none">
          <div className="absolute top-0 left-0 w-full h-full bg-[url('/2018/12/Division-of-the-plane-with-various-elements-1997-160-x-160-cm.jpg')] bg-no-repeat bg-cover blur-xl"></div>
        </div>
        
        <div className="container-wide relative z-10">
          <h1 className="page-title text-center">How to Order Artworks</h1>
          <p className="text-text-muted text-center max-w-2xl mx-auto">
            A guide to acquiring original artworks and prints by Jaap Goedemoed
          </p>
        </div>
      </div>
      
      {/* Content section */}
      <div className="container-narrow py-16">
        <div className="prose prose-invert mx-auto">
          <h2>Purchasing Available Works</h2>
          
          <p>
            Jaap Goedemoed's artworks are available for purchase directly through this website or through 
            select gallery partners. All works are accompanied by a certificate of authenticity and detailed 
            provenance information.
          </p>
          
          <h3>Original Artworks</h3>
          
          <p>
            Original works can be purchased through the following process:
          </p>
          
          <ol>
            <li>
              <strong>Inquiry:</strong> Send an email to <a href="mailto:inquiries@jaapgoedemoed.com" className="text-accent hover:text-accent-hover">inquiries@jaapgoedemoed.com</a> with the title of the artwork you're interested in.
            </li>
            <li>
              <strong>Availability and Price:</strong> You will receive confirmation of availability and pricing information within 48 hours.
            </li>
            <li>
              <strong>Viewing:</strong> Arrangements can be made for in-person viewing at the artist's Amsterdam studio or through one of our gallery partners.
            </li>
            <li>
              <strong>Purchase:</strong> Once you decide to proceed, you'll receive an invoice with payment instructions.
            </li>
            <li>
              <strong>Shipping or Collection:</strong> After payment, arrangements for shipping or collection will be made according to your preference.
            </li>
          </ol>
          
          <div className="bg-background-light p-6 rounded-md border border-border my-8">
            <h4 className="text-accent mb-4">Currently Available Original Works</h4>
            <p>
              To see which original artworks are currently available for purchase, please visit the <Link href="/artworks" className="text-accent hover:text-accent-hover">Artworks Gallery</Link>. 
              Available works are marked with an "Available" tag. Works that are in private collections or museum collections are noted accordingly.
            </p>
          </div>
          
          <h3>Limited Edition Prints</h3>
          
          <p>
            Selected works are available as high-quality limited edition prints, produced using archival pigment 
            inks on premium fine art paper. Each print is signed and numbered by the artist, and comes with a 
            certificate of authenticity.
          </p>
          
          <p>
            Print editions are typically limited to 25 or fewer, ensuring exclusivity and value.
          </p>
          
          <ul>
            <li>Small prints (30 x 30 cm) - €250</li>
            <li>Medium prints (50 x 50 cm) - €450</li>
            <li>Large prints (70 x 70 cm) - €650</li>
          </ul>
          
          <p>
            To order prints, please use the same inquiry process as for original works.
          </p>
          
          <h3>Commissions</h3>
          
          <p>
            Jaap Goedemoed is available for commissioned works for private collectors, corporate environments, 
            and public spaces. Commissions begin with a consultation to discuss your space, preferences, and vision.
          </p>
          
          <p>
            For commission inquiries, please email <a href="mailto:commissions@jaapgoedemoed.com" className="text-accent hover:text-accent-hover">commissions@jaapgoedemoed.com</a> with 
            a description of your project and any relevant specifications (dimensions, setting, timeline, etc.).
          </p>
          
          <div className="my-12 flex flex-col sm:flex-row gap-6 justify-center">
            <Link href="/artworks/prices" className="btn">
              View Pricing Information
            </Link>
            <Link href="/artworks/shipping" className="btn btn-outline">
              Shipping Details
            </Link>
          </div>
          
          <h3>Gallery Representation</h3>
          
          <p>
            In addition to direct sales, Jaap Goedemoed is represented by the following galleries:
          </p>
          
          <ul>
            <li>Galerie Moderne, Amsterdam, Netherlands</li>
            <li>Contemporary Art Space, Rotterdam, Netherlands</li>
            <li>Geometric Visions Gallery, Berlin, Germany</li>
          </ul>
          
          <p>
            If you prefer to work through a gallery, please contact these representatives directly for their available inventory.
          </p>
          
          <h3>Contact for Further Information</h3>
          
          <p>
            If you have any questions about purchasing artwork, or would like to arrange a studio visit, 
            please don't hesitate to reach out through our <Link href="/contact" className="text-accent hover:text-accent-hover">Contact page</Link> or 
            email <a href="mailto:inquiries@jaapgoedemoed.com" className="text-accent hover:text-accent-hover">inquiries@jaapgoedemoed.com</a>.
          </p>
        </div>
      </div>
    </div>
  );
}
