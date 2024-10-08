import { chain } from '@/middlewares/chain'
import { withI18nMiddleware } from '@/middlewares/i18nMiddleware'

// add your middlewares to the chain: e. g. chain([withI18nMiddleware, yourMiddleware])
export default chain([withI18nMiddleware])

export const config = {
  matcher: ['/((?!api|_next/static|_next/image|favicon.ico).*)']
}