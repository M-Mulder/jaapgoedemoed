import Link from "next/link";

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-background border-t border-border py-12">
      <div className="container-wide">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Column 1: Copyright and Basic Info */}
          <div>
            <h3 className="text-xl mb-4 font-serif">Jaap Goedemoed</h3>
            <p className="text-text-muted">
              © {currentYear} Jaap Goedemoed<br />
              All rights reserved.
            </p>
          </div>
          
          {/* Column 2: Quick Links */}
          <div>
            <h3 className="text-xl mb-4 font-serif">Explore</h3>
            <nav className="flex flex-col space-y-2">
              <Link href="/artworks" className="text-text-muted hover:text-text">
                Artworks
              </Link>
              <Link href="/exhibitions" className="text-text-muted hover:text-text">
                Exhibitions
              </Link>
              <Link href="/photographs" className="text-text-muted hover:text-text">
                Photographs
              </Link>
              <Link href="/biography" className="text-text-muted hover:text-text">
                Biography
              </Link>
            </nav>
          </div>
          
          {/* Column 3: Contact Information */}
          <div>
            <h3 className="text-xl mb-4 font-serif">Contact</h3>
            <p className="text-text-muted mb-2">
              {/* Placeholder for email */}
              info@goedemoed.com
            </p>
            <div className="flex space-x-4 mt-4">
              {/* Social Media Icons (placeholders) */}
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
