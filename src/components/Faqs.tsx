import Image from 'next/image'
import { useTranslations } from 'next-intl'
import { Container } from '@/components/Container'
import backgroundImage from '@/images/background-faqs.jpg'

interface Faq {
  question: string;
  answer: string;
}

export function Faqs() {
  const t = useTranslations('Faqs')

  const faqsData = t.raw('faq');

  const faqs: Faq[] = Array.isArray(faqsData)
    ? faqsData.map((faq) => ({
        question: typeof faq === 'object' && faq !== null && 'question' in faq ? faq.question : '',
        answer: typeof faq === 'object' && faq !== null && 'answer' in faq ? faq.answer : '',
      }))
    : [];

  return (
    <section
      id="faq"
      aria-labelledby="faq-title"
      className="relative overflow-hidden bg-gray-900 py-20 sm:py-32"
    >
      <Image
        className="absolute left-1/2 top-0 max-w-none -translate-y-1/4 translate-x-[-30%] opacity-10"
        src={backgroundImage}
        alt="Path of Exile 2 Background Pattern"
        width={1558}
        height={946}
        unoptimized
      />
      <div className="absolute inset-0 bg-gradient-to-br from-red-900/30 to-gray-900/30"></div>
      <Container className="relative z-10">
        <div className="mx-auto max-w-2xl lg:mx-0">
          <h2
            id="faq-title"
            className="font-display text-3xl tracking-tight text-red-500 sm:text-4xl mb-2"
          >
            {t('title')}
          </h2>
          <div className="h-1 w-20 bg-red-600 mb-8"></div>
        </div>
        <ul
          role="list"
          className="mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-8 lg:max-w-none lg:grid-cols-3"
        >
          {faqs.length > 0 ? (
            faqs.map((faq, index) => (
              <li 
                key={index} 
                className="bg-gray-800 p-6 rounded-lg shadow-lg shadow-red-500/10 border border-red-500/20 hover:transform hover:scale-105 transition-all duration-300"
              >
                <h3 className="font-display text-lg leading-7 text-yellow-400 mb-4">
                  {faq.question}
                </h3>
                <p className="text-sm text-gray-300">{faq.answer}</p>
              </li>
            ))
          ) : (
            <li className="text-gray-300">Loading FAQs...</li>
          )}
        </ul>
      </Container>
    </section>
  )
}