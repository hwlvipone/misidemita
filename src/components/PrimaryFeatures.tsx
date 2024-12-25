// PrimaryFeatures.tsx
import { Container } from '@/components/Container'
import { useTranslations } from "next-intl";

interface Feature {
  title: string;
  description: string;
}

export function PrimaryFeatures() {
  const t = useTranslations('PrimaryFeatures')

  const featuresData = t.raw('features');

  const features: Feature[] = Array.isArray(featuresData)
    ? featuresData.map((feature) => ({
        title: typeof feature === 'object' && feature !== null && 'title' in feature ? feature.title : '',
        description: typeof feature === 'object' && feature !== null && 'description' in feature ? feature.description : '',
      }))
    : [];

  return (
    <section
      id="features"
      aria-label="Path of Exile 2 Skill Planning Features"
      className="relative overflow-hidden bg-gray-900 py-20 min-h-[600px] bg-[url('/path/to/your/texture.png')] bg-cover bg-center bg-blend-overlay"
    >
      <Container className="relative">
        <h2 className="font-display text-3xl tracking-tight text-red-500 sm:text-4xl md:text-5xl mb-12 text-center font-bold text-shadow">
          {t('title')}
        </h2>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-stretch">
          <div className="grid grid-cols-1 gap-6">
            {features.map((feature, index) => (
              <div
                key={index}
                className="bg-gray-800 rounded-lg p-6 ring-1 ring-inset ring-red-500/30 hover:ring-red-500/50 hover:bg-gray-700 transition-all duration-300 shadow-lg hover:shadow-red-500/20"
              >
                <h3 className="font-display text-xl text-yellow-400 mb-2">
                  {feature.title}
                </h3>
                <p className="text-gray-300 text-shadow-sm">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
          <div className="h-full flex items-center bg-black/40 rounded-lg overflow-hidden backdrop-blur-sm border border-red-500/30">
            <div className="w-full h-full flex items-center justify-center p-6">
              <div className="rounded-lg overflow-hidden w-full h-full shadow-2xl shadow-red-500/20">
                <iframe 
                  width="100%" 
                  height="100%" 
                  src="https://www.youtube.com/embed/CCIfU6yZGA4?si=so5Cek4riNb5P3sW" 
                  title="YouTube video player" 
                  frameBorder="0" 
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
                  allowFullScreen
                ></iframe>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  )
}