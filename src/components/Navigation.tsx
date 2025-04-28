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
          {/* Logo using the actual image file with text overlay */}
          <div className="flex items-center">
            <Link href="/" className="inline-block group">
              <div className="relative h-16 w-64 overflow-hidden rounded-sm shadow-md border border-[#444] transition-all duration-500 ease-out 
                group-hover:shadow-lg group-hover:shadow-accent/20 group-hover:scale-[1.02]">
                {/* Actual artwork image with subtle zoom effect on hover */}
                <div className="absolute inset-0 transition-transform duration-1000 ease-out group-hover:scale-105">
                  <Image 
                    src="/logo/ApplicationFrameHost_0x58qnirpO.png" 
                    alt="Jaap Goedemoed - Artwork Pattern" 
                    fill 
                    style={{ objectFit: 'cover' }}
                    className="rounded-sm"
                  />
                </div>
                
                {/* Decorative geometric accents inspired by the pattern */}
                <div className="absolute inset-x-0 top-0 h-[2px] bg-gradient-to-r from-transparent via-accent to-transparent opacity-70"></div>
                <div className="absolute inset-x-0 bottom-0 h-[2px] bg-gradient-to-r from-transparent via-accent to-transparent opacity-70"></div>
                <div className="absolute inset-y-0 left-0 w-[2px] bg-gradient-to-b from-transparent via-accent to-transparent opacity-70"></div>
                <div className="absolute inset-y-0 right-0 w-[2px] bg-gradient-to-b from-transparent via-accent to-transparent opacity-70"></div>
                
                {/* Dynamic corner decorations */}
                <div className="absolute top-0 left-0 w-6 h-6 overflow-hidden">
                  <div className="absolute top-0 left-0 w-3 h-3 border-t-2 border-l-2 border-accent rotate-0 opacity-70
                    transition-all duration-500 group-hover:w-4 group-hover:h-4 group-hover:opacity-100"></div>
                </div>
                <div className="absolute top-0 right-0 w-6 h-6 overflow-hidden">
                  <div className="absolute top-0 right-0 w-3 h-3 border-t-2 border-r-2 border-accent rotate-0 opacity-70
                    transition-all duration-500 group-hover:w-4 group-hover:h-4 group-hover:opacity-100"></div>
                </div>
                <div className="absolute bottom-0 left-0 w-6 h-6 overflow-hidden">
                  <div className="absolute bottom-0 left-0 w-3 h-3 border-b-2 border-l-2 border-accent rotate-0 opacity-70
                    transition-all duration-500 group-hover:w-4 group-hover:h-4 group-hover:opacity-100"></div>
                </div>
                <div className="absolute bottom-0 right-0 w-6 h-6 overflow-hidden">
                  <div className="absolute bottom-0 right-0 w-3 h-3 border-b-2 border-r-2 border-accent rotate-0 opacity-70
                    transition-all duration-500 group-hover:w-4 group-hover:h-4 group-hover:opacity-100"></div>
                </div>
                
                {/* Modern, refined title treatment */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="relative px-3">
                    {/* Text container with angled clip-path for geometric effect */}
                    <div className="bg-black/15 backdrop-blur-[1px] p-2 rounded-sm backdrop-brightness-150"
                         style={{ clipPath: 'polygon(5% 0%, 95% 0%, 100% 5%, 100% 95%, 95% 100%, 5% 100%, 0% 95%, 0% 5%)' }}>
                      <div className="bg-white/40 p-1.5">
                        <h1 className="text-center">
                          {/* First name with visual emphasis */}
                          <span className="block relative font-mono uppercase text-lg tracking-[0.3em] font-bold text-black">
                            <span className="relative inline-block">
                              J<span className="absolute -top-0.5 -right-0.5 w-1 h-1 bg-accent rounded-full opacity-0 group-hover:opacity-100 transition-opacity"></span>
                            </span>
                            <span className="relative inline-block">
                              A<span className="absolute -top-0.5 -right-0.5 w-1 h-1 bg-accent rounded-full opacity-0 group-hover:opacity-100 transition-opacity delay-100"></span>
                            </span>
                            <span className="relative inline-block">
                              A<span className="absolute -top-0.5 -right-0.5 w-1 h-1 bg-accent rounded-full opacity-0 group-hover:opacity-100 transition-opacity delay-150"></span>
                            </span>
                            <span className="relative inline-block">
                              P<span className="absolute -top-0.5 -right-0.5 w-1 h-1 bg-accent rounded-full opacity-0 group-hover:opacity-100 transition-opacity delay-200"></span>
                            </span>
                          </span>
                          
                          {/* Decorative separator that animates on hover */}
                          <div className="flex items-center justify-center my-0.5 overflow-hidden h-[3px]">
                            <div className="h-[2px] w-0 bg-accent group-hover:w-12 transition-all duration-700"></div>
                          </div>
                          
                          {/* Last name with slightly more subdued styling */}
                          <span className="block font-mono uppercase text-sm tracking-[0.2em] font-light text-black/80
                            transition-all duration-700 group-hover:tracking-[0.25em]">GOEDEMOED</span>
                        </h1>
                      </div>
                    </div>
                  </div>
                </div>
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
