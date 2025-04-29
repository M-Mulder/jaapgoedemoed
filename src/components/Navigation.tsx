"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";

const Navigation = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const pathname = usePathname();

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  // Main navigation links
  const navLinks = [
    { title: "Home", href: "/" },
    { title: "Artworks", href: "/artworks" },
    { title: "Biography", href: "/biography" },
    { title: "Information", href: "/info" },
    { title: "Exhibitions", href: "/exhibitions" },
    { title: "Photographs", href: "/photographs" },
    { title: "Contact", href: "/contact" },
  ];

  // Submenu items for artworks dropdown - only showing pages that exist
  const artworksSubMenu = [
    { title: "All Artworks", href: "/artworks" },
    { title: "How to Order", href: "/artworks/order" },
  ];

  // Only showing special artworks pages that exist
  const specialArtworks = [
    { title: "Composition 2017", href: "/artworks/composition-2017" },
    { title: "Porcupine Artworks", href: "/artworks/porcupine-artworks" },
    { title: "Composition No. 2 – 2022", href: "/artworks/composition-no-2-2022" },
  ];

  // Only showing information pages that exist
  const additionalInfo = [
    { title: "Interview with JG 2015", href: "/info/interview-2015" },
    { title: "Gypsies in Amsterdam", href: "/info/gypsies-amsterdam" },
  ];

  // State for managing dropdown menus
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);
  
  const handleDropdownToggle = (dropdown: string) => {
    if (openDropdown === dropdown) {
      setOpenDropdown(null);
    } else {
      setOpenDropdown(dropdown);
    }
  };

  return (
    <nav className="bg-background border-b border-border py-4">
      <div className="container-wide relative">
        <div className="flex justify-between items-center">
          {/* Text-based logo with aesthetic font */}
          <div className="flex items-center">
            <Link href="/" className="inline-block group">
              <div className="py-2">
                <h1 className="font-serif text-3xl tracking-wide transition-all duration-300 ease-in-out">
                  <span className="text-text font-light mr-1 hover:text-accent">Jaap</span>
                  <span className="text-text-muted font-medium hover:text-accent">Goedemoed</span>
                </h1>
              </div>
            </Link>
          </div>

          {/* Mobile Navigation Button */}
          <button
            onClick={toggleMenu}
            className="md:hidden text-text p-2 focus:outline-none"
            aria-label="Toggle menu"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d={isMenuOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"}
              />
            </svg>
          </button>

          {/* Navigation Links - Now positioned at right */}
          <div className="hidden md:flex space-x-6">
            {navLinks.map((link) => {
              // Special handling for dropdown menus
              if (link.title === "Artworks" || link.title === "Information") {
                return (
                  <div key={link.href} className="relative group">
                    <button
                      onClick={() => handleDropdownToggle(link.title)}
                      className={`flex items-center ${
                        pathname === link.href || pathname.startsWith(link.href + "/")
                          ? "text-accent font-medium"
                          : "text-text-muted hover:text-text"
                      } transition-colors`}
                    >
                      {link.title}
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className={`h-4 w-4 ml-1 transition-transform ${
                          openDropdown === link.title ? "rotate-180" : ""
                        }`}
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M19 9l-7 7-7-7"
                        />
                      </svg>
                    </button>
                    
                    {/* Dropdown Menu */}
                    {openDropdown === link.title && (
                      <div className="absolute left-0 mt-2 w-56 bg-background-light border border-border rounded-md shadow-lg z-50">
                        <div className="py-2">
                          {/* Choose which submenu to display */}
                          {link.title === "Artworks" && (
                            <>
                              {/* Artworks Submenu */}
                              <div className="px-4 py-2 font-medium text-text-muted border-b border-border">
                                Gallery Options
                              </div>
                              {artworksSubMenu.map((item) => (
                                <Link
                                  key={item.href}
                                  href={item.href}
                                  onClick={() => setOpenDropdown(null)}
                                  className={`block px-4 py-2 ${
                                    pathname === item.href
                                      ? "text-accent"
                                      : "text-text-muted hover:text-text hover:bg-background"
                                  }`}
                                >
                                  {item.title}
                                </Link>
                              ))}
                              
                              <div className="px-4 py-2 mt-2 font-medium text-text-muted border-b border-border">
                                Featured Works
                              </div>
                              {specialArtworks.map((item) => (
                                <Link
                                  key={item.href}
                                  href={item.href}
                                  onClick={() => setOpenDropdown(null)}
                                  className={`block px-4 py-2 ${
                                    pathname === item.href
                                      ? "text-accent"
                                      : "text-text-muted hover:text-text hover:bg-background"
                                  }`}
                                >
                                  {item.title}
                                </Link>
                              ))}
                            </>
                          )}
                          
                          {link.title === "Information" && (
                            <>
                              {/* Additional Information Submenu */}
                              {additionalInfo.map((item) => (
                                <Link
                                  key={item.href}
                                  href={item.href}
                                  onClick={() => setOpenDropdown(null)}
                                  className={`block px-4 py-2 ${
                                    pathname === item.href
                                      ? "text-accent"
                                      : "text-text-muted hover:text-text hover:bg-background"
                                  }`}
                                >
                                  {item.title}
                                </Link>
                              ))}
                            </>
                          )}
                        </div>
                      </div>
                    )}
                  </div>
                );
              }
              
              // Regular links without dropdown
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`${
                    pathname === link.href
                      ? "text-accent font-medium"
                      : "text-text-muted hover:text-text"
                  } transition-colors`}
                >
                  {link.title}
                </Link>
              );
            })}
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden absolute top-16 left-0 right-0 bg-background-light z-50 border-b border-border">
            <div className="container-wide py-4 flex flex-col">
              {navLinks.map((link) => {
                // Special handling for dropdown menus in mobile view
                if (link.title === "Artworks" || link.title === "Information") {
                  return (
                    <div key={link.href} className="py-2">
                      <button
                        onClick={() => handleDropdownToggle(link.title)}
                        className={`flex items-center justify-between w-full ${
                          pathname === link.href || pathname.startsWith(link.href + "/")
                            ? "text-accent font-medium"
                            : "text-text-muted hover:text-text"
                        } transition-colors py-2`}
                      >
                        <span>{link.title}</span>
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          className={`h-4 w-4 ml-1 transition-transform ${
                            openDropdown === link.title ? "rotate-180" : ""
                          }`}
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M19 9l-7 7-7-7"
                          />
                        </svg>
                      </button>
                      
                      {/* Mobile Dropdown Content */}
                      {openDropdown === link.title && (
                        <div className="pl-4 mt-2 border-l-2 border-border">
                          {link.title === "Artworks" && (
                            <>
                              <div className="text-sm font-medium text-text-muted py-2">
                                Gallery Options
                              </div>
                              {artworksSubMenu.map((item) => (
                                <Link
                                  key={item.href}
                                  href={item.href}
                                  onClick={() => {
                                    setOpenDropdown(null);
                                    setIsMenuOpen(false);
                                  }}
                                  className={`block py-2 ${
                                    pathname === item.href
                                      ? "text-accent"
                                      : "text-text-muted hover:text-text"
                                  }`}
                                >
                                  {item.title}
                                </Link>
                              ))}
                              
                              <div className="text-sm font-medium text-text-muted py-2 mt-2">
                                Featured Works
                              </div>
                              {specialArtworks.map((item) => (
                                <Link
                                  key={item.href}
                                  href={item.href}
                                  onClick={() => {
                                    setOpenDropdown(null);
                                    setIsMenuOpen(false);
                                  }}
                                  className={`block py-2 ${
                                    pathname === item.href
                                      ? "text-accent"
                                      : "text-text-muted hover:text-text"
                                  }`}
                                >
                                  {item.title}
                                </Link>
                              ))}
                            </>
                          )}
                          
                          {link.title === "Information" && (
                            <>
                              {additionalInfo.map((item) => (
                                <Link
                                  key={item.href}
                                  href={item.href}
                                  onClick={() => {
                                    setOpenDropdown(null);
                                    setIsMenuOpen(false);
                                  }}
                                  className={`block py-2 ${
                                    pathname === item.href
                                      ? "text-accent"
                                      : "text-text-muted hover:text-text"
                                  }`}
                                >
                                  {item.title}
                                </Link>
                              ))}
                            </>
                          )}
                        </div>
                      )}
                    </div>
                  );
                }
                
                // Regular links without dropdown
                return (
                  <Link
                    key={link.href}
                    href={link.href}
                    onClick={() => setIsMenuOpen(false)}
                    className={`${
                      pathname === link.href
                      ? "text-accent font-medium"
                      : "text-text-muted hover:text-text"
                    } transition-colors py-2 block`}
                  >
                    {link.title}
                  </Link>
                );
              })}
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navigation;
