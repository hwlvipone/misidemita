// MobileNavigation.tsx (Client Component)
'use client'

import { Fragment } from 'react'
import Link from 'next/link'
import { Popover, Transition } from '@headlessui/react'
import clsx from 'clsx'
import { useTranslations } from 'next-intl'
import { useLocale } from 'next-intl'

function MobileNavLink({ href, children }: { href: string, children: React.ReactNode }) {
    const locale = useLocale()
    const fullHref = href.startsWith('#') ? href : `/${locale}${href}`

    return (
        <Popover.Button as={Link} href={fullHref} className="block w-full p-2">
            {children}
        </Popover.Button>
    )
}

function MobileNavIcon({ open }: { open: boolean }) {
    return (
        <svg
            aria-hidden="true"
            className="h-3.5 w-3.5 overflow-visible stroke-slate-700"
            fill="none"
            strokeWidth={2}
            strokeLinecap="round"
        >
            <path
                d="M0 1H14M0 7H14M0 13H14"
                className={clsx(
                    'origin-center transition',
                    open && 'scale-90 opacity-0',
                )}
            />
            <path
                d="M2 2L12 12M12 2L2 12"
                className={clsx(
                    'origin-center transition',
                    !open && 'scale-90 opacity-0',
                )}
            />
        </svg>
    )
}

export default function MobileNavigation() {
    const t = useTranslations('Header')

    return (
        <Popover>
            <Popover.Button
                className="relative z-10 flex h-8 w-8 items-center justify-center ui-not-focus-visible:outline-none"
                aria-label="Toggle Navigation"
            >
                {({ open }) => <MobileNavIcon open={open} />}
            </Popover.Button>
            <Transition.Root>
                <Transition.Child
                    as={Fragment}
                    enter="duration-150 ease-out"
                    enterFrom="opacity-0"
                    enterTo="opacity-100"
                    leave="duration-150 ease-in"
                    leaveFrom="opacity-100"
                    leaveTo="opacity-0"
                >
                    <Popover.Overlay className="fixed inset-0 bg-slate-300/50" />
                </Transition.Child>
                <Transition.Child
                    as={Fragment}
                    enter="duration-150 ease-out"
                    enterFrom="opacity-0 scale-95"
                    enterTo="opacity-100 scale-100"
                    leave="duration-100 ease-in"
                    leaveFrom="opacity-100 scale-100"
                    leaveTo="opacity-0 scale-95"
                >
                <Popover.Panel
                                as="div"
                                className="absolute inset-x-0 top-full mt-4 flex origin-top flex-col rounded-2xl bg-white p-4 text-lg tracking-tight text-slate-900 shadow-xl ring-1 ring-slate-900/5"
                            >
                                <MobileNavLink href="/#hero">{t('home')}</MobileNavLink>
                                <MobileNavLink href="/#primary-features">{t('features')}</MobileNavLink>
                                <MobileNavLink href="/#testimonials">{t('testimonials')}</MobileNavLink>
                                <MobileNavLink href="/#faqs">{t('faqs')}</MobileNavLink>
                                <hr className="m-2 border-slate-300/40" />
                </Popover.Panel>

                </Transition.Child>
            </Transition.Root>
        </Popover>
    )
}