import { NextFetchEvent, NextRequest, NextResponse } from 'next/server'
import acceptLanguage from 'accept-language'
import { fallbackLng, languages, cookieName } from '../app/i18n/settings'
import { CustomMiddleware } from './chain'

acceptLanguage.languages(languages)
const PUBLIC_FILE = /\.(.*)$/

export const config = {
  matcher: [
    '/((?!api|_next/static|_next/public|_next/image|assets|favicon.ico|sw.js).*)'
  ]
}

export function withI18nMiddleware(middleware: CustomMiddleware) {
  return async (
    req: NextRequest,
    event: NextFetchEvent,
    response: NextResponse
  ) => {
    let lng

    if (req.cookies.has(cookieName))
      lng = acceptLanguage.get(req?.cookies?.get(cookieName)?.value)
    if (!lng) lng = acceptLanguage.get(req.headers.get('Accept-Language'))
    if (!lng) lng = fallbackLng

    if (PUBLIC_FILE.test(req.nextUrl.pathname)) {
      return
    }

    // Redirect if lng in path is not supported
    if (
      !languages.some(loc => req.nextUrl.pathname.startsWith(`/${loc}`)) &&
      !req.nextUrl.pathname.startsWith('/_next')
    ) {
      return NextResponse.redirect(
        new URL(`/${lng}${req.nextUrl.pathname}`, req.url)
      )
    }

    if (req.headers.has('referer')) {
      const refererUrl = new URL(req?.headers?.get('referer') || '')
      const lngInReferer = languages.find(l =>
        refererUrl.pathname.startsWith(`/${l}`)
      )
      const response = NextResponse.next()
      if (lngInReferer) response.cookies.set(cookieName, lngInReferer)
      return response
    }

    return middleware(req, event, response)
  }
}