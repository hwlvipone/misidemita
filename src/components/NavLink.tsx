import Link from 'next/link'
import { useLocale } from 'next-intl'

export function NavLink({
  href,
  children,
}: {
  href: string
  children: React.ReactNode
}) {
  const locale = useLocale()
  const fullHref = href.startsWith('#') ? href : `/${locale}${href}`

  return (
    <Link
      href={fullHref}
      className="
        inline-block px-3 py-2 text-sm font-medium
        text-gray-300 hover:text-yellow-400
        border-b-2 border-transparent hover:border-red-600
        transition duration-300 ease-in-out
        bg-gradient-to-b from-transparent to-transparent hover:from-gray-800 hover:to-transparent
        rounded
        shadow-sm hover:shadow-md hover:shadow-red-900/20
      "
    >
      {children}
    </Link>
  )
}