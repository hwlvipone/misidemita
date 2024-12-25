import { Inter, Lexend } from 'next/font/google'
import clsx from 'clsx'
import { NextIntlClientProvider } from 'next-intl';
import { getMessages, getTranslations } from 'next-intl/server';
import '@/styles/tailwind.css'
import { type Metadata } from 'next'
import { GoogleAnalytics } from '@next/third-parties/google'
import { headers } from 'next/headers';
import { unstable_setRequestLocale } from 'next-intl/server';
import { Header } from '@/components/Header'
import { Footer } from '@/components/Footer'

const inter = Inter({
    subsets: ['latin'],
    display: 'swap',
    variable: '--font-inter',
})

const lexend = Lexend({
    subsets: ['latin'],
    display: 'swap',
    variable: '--font-lexend',
})

export async function generateMetadata({ params: { locale } }: { params: { locale: string } }): Promise<Metadata> {
    unstable_setRequestLocale(locale);
    const t = await getTranslations({ locale, namespace: 'Seo' });

    const title = t('title');
    const description = t('description');
    const headersList = headers();
    const pathname = headersList.get('x-pathname') || '';

    const canonicalUrl = pathname === '/'
        ? `https://www.misidemita.net/${locale}`
        : `https://www.misidemita.net/${locale}${pathname}`;

    const alternateLanguages = ['en', 'ja', 'de', 'es', 'fr', 'ru', 'pt-BR', 'pl'].reduce((acc, lang) => {
        acc[lang] = `https://www.misidemita.net/${lang}${pathname}`;
        return acc;
    }, {} as Record<string, string>);

    return {
        title,
        description,
        icons: {
            icon: '/favicon.ico',
        },
        openGraph: {
            type: 'website',
            locale: locale,
            url: canonicalUrl,
            siteName: 'Miside Mods',
            title,
            description,
            images: [
                {
                    url: 'https://www.misidemita.net/og-image.png',
                    width: 1200,
                    height: 630,
                    alt: 'Miside Mods',
                }
            ],
        },
        twitter: {
            card: 'summary_large_image',
            site: '@Miside Mods',
            creator: '@Miside Mods',
            title,
            description,
            images: ['https://www.misidemita.net/twitter-image.png'],
        },
        alternates: {
            canonical: canonicalUrl,
            languages: alternateLanguages,
        },
        robots: {
            index: true,
            follow: true,
        },
        viewport: {
            width: 'device-width',
            initialScale: 1,
        },
    };
}

export default async function LocaleLayout({
    children,
    params: { locale }
}: {
    children: React.ReactNode;
    params: { locale: string };
}) {
    unstable_setRequestLocale(locale);
    const messages = await getMessages();

    return (
        <html
            lang={locale}
            className={clsx(
                'h-full scroll-smooth bg-white antialiased',
                inter.variable,
                lexend.variable,
            )}
        >
            <body className="flex flex-col min-h-screen">
                <NextIntlClientProvider messages={messages}>
                    <Header />
                    <main className="flex-grow">
                        {children}
                    </main>
                    <Footer />
                </NextIntlClientProvider>
                <GoogleAnalytics gaId="G-ZH84RZRDTE" />
            </body>
        </html>
    )
}