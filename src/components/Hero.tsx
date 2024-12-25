import { useTranslations } from 'next-intl'
import { Container } from '@/components/Container'

export function Hero() {
  const t = useTranslations('Hero')

  return (
    <div className="bg-gray-900 bg-opacity-90 bg-[url('/path-to-your-background.jpg')] bg-cover bg-center bg-blend-overlay">
      <Container className="py-12 lg:py-20">
        <div className="flex flex-col items-center justify-center gap-12">
          <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-red-500 leading-tight drop-shadow-lg text-center">
            {t('title')}
          </h1>
          <div className="w-full max-w-4xl mx-auto">
            <div className="relative w-full" style={{ paddingBottom: '56.25%' }}> {/* 16:9 Aspect Ratio */}
              <iframe 
                className="absolute top-0 left-0 w-full h-full rounded-lg shadow-2xl border-4 border-gray-700"
                src="https://www.youtube.com/embed/iC7z1nBHVVI?si=qrrCaRrE1f7Bg3AL" 
                title="MiSide Mita Trailer"  
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
                allowFullScreen
                frameBorder="0"
              ></iframe>
            </div>
          </div>
        </div>
      </Container>
    </div>
  )
}