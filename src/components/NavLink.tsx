import Link from 'next/link'
import { useLocale } from 'next-intl'

export function NavLink({
  href,
  children,
  target,
}: {
  href: string
  children: React.ReactNode
  target?: string
}) {
  const locale = useLocale()
  const isExternal = href.startsWith('http') || href.startsWith('https')
  const fullHref = isExternal ? href : href.startsWith('#') ? href : `/${locale}${href}`

  const commonClasses = `
    inline-block px-3 py-2 text-sm font-medium
    text-gray-300 hover:text-yellow-400
    border-b-2 border-transparent hover:border-red-600
    transition duration-300 ease-in-out
    bg-gradient-to-b from-transparent to-transparent hover:from-gray-800 hover:to-transparent
    rounded
    shadow-sm hover:shadow-md hover:shadow-red-900/20
  `

  if (isExternal) {
    return (
      <a 
        href={fullHref}
        target={target}
        rel={target === '_blank' ? 'noopener noreferrer' : undefined}
        className={commonClasses}
      >
        {children}
      </a>
    )
  }

  return (
    <Link
      href={fullHref}
      className={commonClasses}
    >
      {children}
    </Link>
  )
}