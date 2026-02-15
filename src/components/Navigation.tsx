"use client";

import { useMemo, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import LocaleSwitcher from "./LocaleSwitcher";
import { LocaleContent } from "@/lib/localeData";
import { getLocalizedPath, removeLocaleFromPathname } from "@/lib/i18n";

interface NavigationProps {
  locale: string;
  localeData: LocaleContent;
}

const Navigation = ({ locale, localeData }: NavigationProps) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);
  const pathname = usePathname();
  const pathnameWithoutLocale = removeLocaleFromPathname(pathname);

  const navLinks = useMemo(
    () => [
      { title: localeData.nav.home, href: getLocalizedPath(locale as any, "") },
      { title: localeData.nav.welcome, href: getLocalizedPath(locale as any, "welcome") },
      { title: localeData.nav.artworks, href: getLocalizedPath(locale as any, "artworks") },
      { title: localeData.nav.biography, href: getLocalizedPath(locale as any, "biography") },
      { title: localeData.nav.information, href: getLocalizedPath(locale as any, "info") },
      { title: localeData.nav.exhibitions, href: getLocalizedPath(locale as any, "exhibitions") },
      { title: localeData.nav.photographs, href: getLocalizedPath(locale as any, "photographs") },
      { title: localeData.nav.contact, href: getLocalizedPath(locale as any, "contact") },
    ],
    [localeData.nav, locale]
  );

  const artworksSubMenu = [
    { title: localeData.navDropdowns.allArtworks, href: getLocalizedPath(locale as any, "artworks") },
    { title: localeData.navDropdowns.howToOrder, href: getLocalizedPath(locale as any, "artworks/order") },
  ];

  const specialArtworks = [
    { title: localeData.navDropdowns.composition2017, href: getLocalizedPath(locale as any, "artworks/composition-2017") },
    { title: localeData.navDropdowns.porcupineArtworks, href: getLocalizedPath(locale as any, "artworks/porcupine-artworks") },
    { title: localeData.navDropdowns.composition2022, href: getLocalizedPath(locale as any, "artworks/composition-no-2-2022") },
    { title: localeData.navDropdowns.composition2025, href: getLocalizedPath(locale as any, "artworks/composition-2025") },
  ];

  const additionalInfo = [
    { title: localeData.navDropdowns.interview2015, href: getLocalizedPath(locale as any, "info/interview-2015") },
    { title: localeData.navDropdowns.russianInterview, href: getLocalizedPath(locale as any, "info/russian-interview") },
    { title: localeData.navDropdowns.gypsiesAmsterdam, href: getLocalizedPath(locale as any, "info/gypsies-amsterdam") },
    { title: localeData.navDropdowns.taxationGlerum, href: getLocalizedPath(locale as any, "info/taxation-glerum-1991") },
    { title: localeData.navDropdowns.seriousArtPiece, href: getLocalizedPath(locale as any, "info/serious-art-piece") },
  ];

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const handleDropdownToggle = (section: string) => {
    setOpenDropdown(openDropdown === section ? null : section);
  };
  
  // Check if path is active (comparing without locale prefix)
  const isPathActive = (href: string) => {
    const hrefWithoutLocale = removeLocaleFromPathname(href);
    return pathnameWithoutLocale === hrefWithoutLocale || 
           pathnameWithoutLocale.startsWith(hrefWithoutLocale + "/");
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

          <div className="hidden md:flex items-center space-x-8">
            <div className="flex space-x-7 ml-12">
              {navLinks.map((link) => {
                const isDropdown = link.href.endsWith("/artworks") || link.href.endsWith("/info");
                const isActive = isPathActive(link.href);

                if (isDropdown) {
                  const dropdownKey = link.href.endsWith("/artworks") ? "artworks" : "information";
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
                                      isPathActive(item.href)
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
                                      isPathActive(item.href)
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
