import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";
import { i18n } from "@/i18n/config";

const PUBLIC_FILE = /\.(.*)$/;

const detectLocale = (acceptLanguage: string): string => {
  const language = acceptLanguage.split(",")[0].toLowerCase();
  if (language.includes("zh")) {
    return "zh";
  }
  if (language.includes("nl")) {
    return "nl";
  }
  return "en";
};

export function middleware(request: NextRequest) {
  const { nextUrl, headers } = request;
  const pathname = nextUrl.pathname;

  // Skip Next.js internals, API routes, and public files
  if (
    pathname.startsWith("/_next") ||
    pathname.startsWith("/api") ||
    PUBLIC_FILE.test(pathname)
  ) {
    return NextResponse.next();
  }

  // Check if pathname starts with a locale
  const pathnameHasLocale = i18n.locales.some(
    (locale) => pathname.startsWith(`/${locale}/`) || pathname === `/${locale}`
  );

  // If pathname doesn't have a locale, redirect to add it
  if (!pathnameHasLocale) {
    const cookieLocale = request.cookies.get("NEXT_LOCALE")?.value;
    const locale = cookieLocale ?? detectLocale(headers.get("accept-language") ?? "");
    
    // Redirect to the same path with locale prefix
    const newUrl = new URL(`/${locale}${pathname}`, request.url);
    newUrl.search = nextUrl.search; // Preserve query params
    
    const response = NextResponse.redirect(newUrl);
    response.cookies.set("NEXT_LOCALE", locale, {
      path: "/",
      maxAge: 60 * 60 * 24 * 365,
    });
    return response;
  }

  // Extract locale from pathname for header
  const localeInPath = i18n.locales.find(
    (locale) => pathname.startsWith(`/${locale}/`) || pathname === `/${locale}`
  );

  const response = NextResponse.next();
  
  // Set locale header for server components
  if (localeInPath) {
    response.headers.set("x-locale", localeInPath);
    
    // Update cookie if different
    const cookieLocale = request.cookies.get("NEXT_LOCALE")?.value;
    if (cookieLocale !== localeInPath) {
      response.cookies.set("NEXT_LOCALE", localeInPath, {
        path: "/",
        maxAge: 60 * 60 * 24 * 365,
      });
    }
  }

  return response;
}

export const config = {
  matcher: ["/((?!_next/static|_next/image|favicon.svg|favicon.ico).*)"],
};
