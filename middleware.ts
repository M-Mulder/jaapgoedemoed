import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

const PUBLIC_FILE = /\.(.*)$/;

export function middleware(request: NextRequest) {
  const { nextUrl, headers } = request;
  const pathname = nextUrl.pathname;

  if (
    pathname.startsWith("/_next") ||
    pathname.startsWith("/api") ||
    PUBLIC_FILE.test(pathname)
  ) {
    return NextResponse.next();
  }

  const currentLocale = nextUrl.locale;

  if (currentLocale === "nl-NL" || currentLocale === "zh") {
    return NextResponse.next();
  }

  const acceptLanguage = headers.get("accept-language") ?? "";
  if (acceptLanguage.toLowerCase().includes("nl")) {
    const redirectUrl = nextUrl.clone();
    const base = pathname.replace(/^\/(en|zh|nl-NL)/, "");
    redirectUrl.pathname = base === "" ? "/nl-NL" : `/nl-NL${base}`;
    return NextResponse.redirect(redirectUrl);
  }

  return NextResponse.next();
}

export const config = {
  matcher: ["/((?!_next/static|_next/image|favicon.svg|favicon.ico).*)"],
};
