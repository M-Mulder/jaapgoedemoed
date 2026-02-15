import { Locale } from "@/i18n/config";

/**
 * Generate a localized path
 * @param locale - The locale code
 * @param path - The path without locale prefix (e.g., '/artworks')
 * @returns The localized path (e.g., '/en/artworks')
 */
export function getLocalizedPath(locale: Locale, path: string): string {
  // Remove leading slash if present
  const cleanPath = path.startsWith('/') ? path.slice(1) : path;
  return `/${locale}${cleanPath ? `/${cleanPath}` : ''}`;
}

/**
 * Extract locale from pathname
 * @param pathname - The current pathname
 * @returns The extracted locale or null
 */
export function getLocaleFromPathname(pathname: string): Locale | null {
  const segments = pathname.split('/').filter(Boolean);
  const firstSegment = segments[0];
  
  if (firstSegment === 'en' || firstSegment === 'nl' || firstSegment === 'zh') {
    return firstSegment;
  }
  
  return null;
}

/**
 * Remove locale prefix from pathname
 * @param pathname - The current pathname
 * @returns The pathname without locale prefix
 */
export function removeLocaleFromPathname(pathname: string): string {
  const locale = getLocaleFromPathname(pathname);
  if (!locale) return pathname;
  
  return pathname.replace(new RegExp(`^/${locale}`), '') || '/';
}
