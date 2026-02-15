import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

const PUBLIC_FILE = /\.(.*)$/;

const detectLocale = (acceptLanguage: string): string => {
  const language = acceptLanguage.split(",")[0].toLowerCase();
  if (language.includes("zh")) {
    return "zh";
  }
  if (language.includes("nl")) {
    return "nl-NL";
  }
  return "en";
};

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

  const cookieLocale = request.cookies.get("NEXT_LOCALE")?.value;
  let locale = cookieLocale ?? detectLocale(headers.get("accept-language") ?? "");

  const response = NextResponse.next();
  if (cookieLocale !== locale) {
    response.cookies.set("NEXT_LOCALE", locale, {
      path: "/",
      maxAge: 60 * 60 * 24 * 365,
    });
  }

  return response;
}

export const config = {
  matcher: ["/((?!_next/static|_next/image|favicon.svg|favicon.ico).*)"],
};
