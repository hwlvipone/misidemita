import Image from 'next/image'
import { useTranslations } from 'next-intl'

import { Button } from '@/components/Button'
import { Container } from '@/components/Container'
import backgroundImage from '@/images/background-call-to-action.jpg'

export function CallToAction() {
  const t = useTranslations('CallToAction')

  return (
    <section
      id="get-started-today"
      className="relative overflow-hidden bg-gray-900 py-32"
    >
      <Image
        className="absolute left-1/2 top-1/2 max-w-none -translate-x-1/2 -translate-y-1/2 opacity-20 blur-sm"
        src={backgroundImage}
        alt="Path of Exile 2 Background"
        width={2347}
        height={1244}
        unoptimized
      />
      <div className="absolute inset-0 bg-gradient-to-br from-red-900/70 to-gray-900/70"></div>
      <Container className="relative">
        <div className="mx-auto max-w-lg text-center">
          <h2 className="font-display text-4xl tracking-tight text-red-500 sm:text-5xl mb-6 text-shadow-lg">
            {t('title')}
          </h2>
          <p className="mt-4 text-lg tracking-tight text-gray-300 text-shadow">
            {t('description')}
          </p>
          <Button 
            href="/planner" 
            className="mt-10 bg-red-600 hover:bg-red-700 text-white px-8 py-3 rounded-lg font-bold uppercase tracking-wide transition-all duration-300 transform hover:scale-105 hover:shadow-lg hover:shadow-red-500/50"
          >
            {t('buttonText')}
          </Button>
        </div>
      </Container>
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute inset-0 bg-[url('/path/to/your/rune-texture.png')] opacity-10"></div>
      </div>
    </section>
  )
}