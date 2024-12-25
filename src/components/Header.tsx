import Link from 'next/link'
import { Container } from '@/components/Container'
import { Logo } from '@/components/Logo'
import { NavLink } from '@/components/NavLink'
import { useTranslations } from 'next-intl'
import MobileNavigation from './MobileNavigation'
import LanguageSwitcher from './LanguageSwitcher'

export function Header() {
    const t = useTranslations('Header')

    return (
        <header className="bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900 py-4 shadow-lg">
            <Container>
                <nav className="relative z-50 flex justify-between items-center">
                    <div className="flex items-center md:gap-x-12">
                        <Link href="/" aria-label="Home">
                            <Logo className="h-12 w-auto" />
                        </Link>
                        <div className="hidden md:flex md:gap-x-8">
                            <NavLink href="/#hero">{t('home')}</NavLink>
                            <NavLink href="/#primary-features">{t('features')}</NavLink>
                            <NavLink href="/#testimonials">{t('testimonials')}</NavLink>
                            <NavLink href="/#faqs">{t('faqs')}</NavLink>
                        </div>
                    </div>
                    <div className="flex items-center gap-x-5 md:gap-x-8">
                        <div className="hidden md:block">
                            <LanguageSwitcher />
                        </div>
                        <div className="md:hidden">
                            <MobileNavigation />
                        </div>
                    </div>
                </nav>
            </Container>
        </header>
    )
}