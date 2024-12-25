import createMiddleware from 'next-intl/middleware';
import { NextRequest, NextResponse } from 'next/server';
import teamPhoto from '@/images/team.jpg'  // 使用别名导入

const intlMiddleware = createMiddleware({
  locales: ['en', 'de', 'fr', 'ja', 'es','ru','pt-BR','pl'],
  defaultLocale: 'en'
});

export default function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;

  if (
    pathname === '/robots.txt' || 
    pathname === '/sitemap.xml'||
    pathname === '/ads.txt'
  )
  {
    return NextResponse.next();
  }

  // 检查请求路径是否以 '/api' 开头
  if (pathname.startsWith('/api')) {
    // 如果是 API 路由，直接返回，不进行国际化处理
    return NextResponse.next();
  }

  // 对于其他路由，使用 intl 中间件
  return intlMiddleware(request);
}

export const config = {
  matcher: [
    '/',
    '/(fr|en|de|ja|es|ru|pt-BR|pl)/:path*',
    '/((?!_next|api|robots.txt|sitemap.xml|.*\\.(?:jpg|png|gif|ico|svg|webp|js|css|woff|woff2|ttf|webmanifest)).*)'
  ]
};