"use client";

import { useMemo, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import LocaleSwitcher from "./LocaleSwitcher";
import { LocaleContent } from "@/lib/localeData";

interface NavigationProps {
  locale: string;
  localeData: LocaleContent;
}

const Navigation = ({ locale, localeData }: NavigationProps) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);
  const pathname = usePathname();

  const navLinks = useMemo(
    () => [
      { title: localeData.nav.home, href: "/" },
      { title: localeData.nav.welcome, href: "/welcome" },
      { title: localeData.nav.artworks, href: "/artworks" },
      { title: localeData.nav.biography, href: "/biography" },
      { title: localeData.nav.information, href: "/info" },
      { title: localeData.nav.exhibitions, href: "/exhibitions" },
      { title: localeData.nav.photographs, href: "/photographs" },
      { title: localeData.nav.contact, href: "/contact" },
    ],
    [localeData.nav]
  );

  const artworksSubMenu = [
    { title: "All Artworks", href: "/artworks" },
    { title: "How to Order", href: "/artworks/order" },
  ];

  const specialArtworks = [
    { title: "Composition 2017", href: "/artworks/composition-2017" },
    { title: "Making of 2 Porcupine Artworks", href: "/artworks/porcupine-artworks" },
    { title: "The making of Composition no. 2 - 2022", href: "/artworks/composition-no-2-2022" },
    { title: "The Making of Composition 2025", href: "/artworks/composition-2025" },
  ];

  const additionalInfo = [
    { title: "Interview with JG 2015", href: "/info/interview-2015" },
    { title: "JG Interview in Russian", href: "/info/russian-interview" },
    { title: "Gypsies in Amsterdam", href: "/info/gypsies-amsterdam" },
    { title: "Taxation by J.P. Glerum 1991", href: "/info/taxation-glerum-1991" },
    { title: "A Serious Piece of Art", href: "/info/serious-art-piece" },
  ];

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const handleDropdownToggle = (section: string) => {
    setOpenDropdown(openDropdown === section ? null : section);
  };

  return (
    <nav className="bg-background border-b border-border py-4">
      <div className="container-wide relative">
        <div className="flex justify-between items-center">
          <div className="flex items-center">
            <Link href="/" className="inline-block group">
              <div className="py-2">
                <h1 className="font-serif text-3xl tracking-wide">
                  <span className="text-accent font-semibold mr-1 transition-all duration-300 ease-in-out group-hover:opacity-90">
                    Jaap
                  </span>
                  <span className="text-accent font-medium transition-all duration-300 ease-in-out group-hover:opacity-90">
                    Goedemoed
                  </span>
                </h1>
              </div>
            </Link>
          </div>

          <button
            onClick={toggleMenu}
            className="md:hidden text-text p-2 focus:outline-none"
            aria-label="Toggle menu"
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" viewBox="0 0 24 24" stroke="currentColor" fill="none">
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d={isMenuOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"}
              />
            </svg>
          </button>

          <div className="hidden md:flex items-center space-x-6">
            <div className="flex space-x-6">
              {navLinks.map((link) => {
                const isDropdown = link.href === "/artworks" || link.href === "/info";
                const isActive = pathname === link.href || pathname.startsWith(link.href + "/");

                if (isDropdown) {
                  const dropdownKey = link.href === "/artworks" ? "artworks" : "information";
                  return (
                    <div key={link.href} className="relative group">
                      <button
                        onClick={() => handleDropdownToggle(dropdownKey)}
                        className={`flex items-center ${
                          isActive ? "text-accent font-medium" : "text-text-muted hover:text-text"
                        } transition-colors`}
                      >
                        {link.title}
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          className={`h-4 w-4 ml-1 transition-transform ${openDropdown === dropdownKey ? "rotate-180" : ""}`}
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                        >
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                        </svg>
                      </button>
                      {openDropdown === dropdownKey && (
                        <div className="absolute left-0 mt-2 w-56 bg-background-light border border-border rounded-md shadow-lg z-50">
                          <div className="py-2">
                            {dropdownKey === "artworks" && (
                              <>
                                <div className="px-4 py-2 font-medium text-text-muted border-b border-border">
                                  {localeData.sections.galleryOptions}
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
                                  {localeData.sections.featuredWorks}
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
                            {dropdownKey === "information" &&
                              additionalInfo.map((item) => (
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
                          </div>
                        </div>
                      )}
                    </div>
                  );
                }

                return (
                  <Link
                    key={link.href}
                    href={link.href}
                    className={`${
                      isActive ? "text-accent font-medium" : "text-text-muted hover:text-text"
                    } transition-colors`}
                  >
                    {link.title}
                  </Link>
                );
              })}
            </div>
            <LocaleSwitcher />
          </div>
        </div>

        {isMenuOpen && (
          <div className="md:hidden absolute top-16 left-0 right-0 bg-background-light z-50 border-b border-border">
            <div className="container-wide py-4 flex flex-col">
              {navLinks.map((link) => {
                const isDropdown = link.href === "/artworks" || link.href === "/info";
                const dropdownKey = link.href === "/artworks" ? "artworks" : "information";
                const isActive = pathname === link.href || pathname.startsWith(link.href + "/");
                if (isDropdown) {
                  return (
                    <div key={link.href} className="py-2">
                      <button
                        onClick={() => handleDropdownToggle(dropdownKey)}
                        className={`flex items-center justify-between w-full ${
                          isActive ? "text-accent font-medium" : "text-text-muted hover:text-text"
                        } transition-colors py-2`}
                      >
                        <span>{link.title}</span>
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          className={`h-4 w-4 ml-1 transition-transform ${openDropdown === dropdownKey ? "rotate-180" : ""}`}
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                        >
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                        </svg>
                      </button>
                      {openDropdown === dropdownKey && (
                        <div className="pl-4 mt-2 border-l-2 border-border">
                          {dropdownKey === "artworks" && (
                            <>
                              <div className="text-sm font-medium text-text-muted py-2">
                                {localeData.sections.galleryOptions}
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
                                      pathname === item.href ? "text-accent" : "text-text-muted hover:text-text"
                                    }`}
                                  >
                                    {item.title}
                                  </Link>
                              ))}
                              <div className="text-sm font-medium text-text-muted py-2 mt-2">
                                {localeData.sections.featuredWorks}
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
                                    pathname === item.href ? "text-accent" : "text-text-muted hover:text-text"
                                  }`}
                                >
                                  {item.title}
                                </Link>
                              ))}
                            </>
                          )}
                          {dropdownKey === "information" &&
                            additionalInfo.map((item) => (
                              <Link
                                key={item.href}
                                href={item.href}
                                onClick={() => {
                                  setOpenDropdown(null);
                                  setIsMenuOpen(false);
                                }}
                                className={`block py-2 ${
                                  pathname === item.href ? "text-accent" : "text-text-muted hover:text-text"
                                }`}
                              >
                                {item.title}
                              </Link>
                            ))}
                        </div>
                      )}
                    </div>
                  );
                }

                return (
                  <Link
                    key={link.href}
                    href={link.href}
                    onClick={() => setIsMenuOpen(false)}
                    className={`${
                      isActive ? "text-accent font-medium" : "text-text-muted hover:text-text"
                    } transition-colors py-2 block`}
                  >
                    {link.title}
                  </Link>
                );
              })}
              <div className="mt-4">
                <LocaleSwitcher />
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navigation;
