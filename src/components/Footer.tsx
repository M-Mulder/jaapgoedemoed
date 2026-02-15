import Link from "next/link";
import { LocaleContent } from "@/lib/localeData";

interface FooterProps {
  locale: string;
  localeData: LocaleContent;
}

const Footer = ({ locale, localeData }: FooterProps) => {
  const currentYear = new Date().getFullYear();
  const quickLinks = [
    { label: localeData.footer.quickLinks[0], href: "/artworks" },
    { label: localeData.footer.quickLinks[1], href: "/exhibitions" },
    { label: localeData.footer.quickLinks[2], href: "/photographs" },
    { label: localeData.footer.quickLinks[3], href: "/biography" },
  ];

  return (
    <footer className="bg-background border-t border-border py-12">
      <div className="container-wide">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-xl mb-4 font-serif">{localeData.footer.title}</h3>
            <p className="text-text-muted">
              {localeData.footer.copyright.replace("{year}", currentYear.toString())}
              <br />
              All rights reserved.
            </p>
          </div>

          <div>
            <h3 className="text-xl mb-4 font-serif">{localeData.footer.exploreTitle}</h3>
            <nav className="flex flex-col space-y-2">
              {quickLinks.map((link) => (
                <Link key={link.href} href={link.href} className="text-text-muted hover:text-text">
                  {link.label}
                </Link>
              ))}
            </nav>
          </div>

          <div>
            <h3 className="text-xl mb-4 font-serif">{localeData.footer.contactTitle}</h3>
            <p className="text-text-muted mb-2">info@goedemoed.com</p>
            <div className="flex space-x-4 mt-4">
              <a href="#" className="text-text-muted hover:text-accent" aria-label="Instagram">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4.5v15m7.5-7.5h-15" />
                </svg>
              </a>
              <a href="#" className="text-text-muted hover:text-accent" aria-label="Twitter">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 20l4-16m2 16l4-16M6 9h14M4 15h14" />
                </svg>
              </a>
              <a href="#" className="text-text-muted hover:text-accent" aria-label="LinkedIn">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
