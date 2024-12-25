import Image from 'next/image'
import { useTranslations } from 'next-intl'

import { Container } from '@/components/Container'
import avatarImage1 from '@/images/avatars/avatar-1.png'
import avatarImage2 from '@/images/avatars/avatar-2.png'
import avatarImage3 from '@/images/avatars/avatar-3.png'

const avatars = [avatarImage1, avatarImage2, avatarImage3]

interface Testimonial {
  content: string
  author: {
    name: string
    role: string
  }
}

function QuoteIcon(props: React.ComponentPropsWithoutRef<'svg'>) {
  return (
    <svg aria-hidden="true" width={105} height={78} {...props}>
      <path d="M25.086 77.292c-4.821 0-9.115-1.205-12.882-3.616-3.767-2.561-6.78-6.102-9.04-10.622C1.054 58.534 0 53.411 0 47.686c0-5.273.904-10.396 2.712-15.368 1.959-4.972 4.746-9.567 8.362-13.786a59.042 59.042 0 0 1 12.43-11.3C28.325 3.917 33.599 1.507 39.324 0l11.074 13.786c-6.479 2.561-11.677 5.951-15.594 10.17-3.767 4.219-5.65 7.835-5.65 10.848 0 1.356.377 2.863 1.13 4.52.904 1.507 2.637 3.089 5.198 4.746 3.767 2.41 6.328 4.972 7.684 7.684 1.507 2.561 2.26 5.5 2.26 8.814 0 5.123-1.959 9.19-5.876 12.204-3.767 3.013-8.588 4.52-14.464 4.52Zm54.24 0c-4.821 0-9.115-1.205-12.882-3.616-3.767-2.561-6.78-6.102-9.04-10.622-2.11-4.52-3.164-9.643-3.164-15.368 0-5.273.904-10.396 2.712-15.368 1.959-4.972 4.746-9.567 8.362-13.786a59.042 59.042 0 0 1 12.43-11.3C82.565 3.917 87.839 1.507 93.564 0l11.074 13.786c-6.479 2.561-11.677 5.951-15.594 10.17-3.767 4.219-5.65 7.835-5.65 10.848 0 1.356.377 2.863 1.13 4.52.904 1.507 2.637 3.089 5.198 4.746 3.767 2.41 6.328 4.972 7.684 7.684 1.507 2.561 2.26 5.5 2.26 8.814 0 5.123-1.959 9.19-5.876 12.204-3.767 3.013-8.588 4.52-14.464 4.52Z" />
    </svg>
  )
}

export function Testimonials() {
  const t = useTranslations('Testimonials')

  const rawTestimonials = t.raw('testimonials')
  const testimonials = Array.isArray(rawTestimonials) ? rawTestimonials as Testimonial[] : []

  // Split testimonials into columns
  const columns = testimonials.reduce<Testimonial[][]>((acc, testimonial, index) => {
    const columnIndex = index % 3
    if (!acc[columnIndex]) {
      acc[columnIndex] = []
    }
    acc[columnIndex].push(testimonial)
    return acc
  }, [])

  return (
    <section
      id="testimonials"
      aria-label="What our players are saying"
      className="bg-gray-900 py-20 sm:py-32 relative overflow-hidden"
    >
      <div className="absolute inset-0 bg-[url('/path/to/your/poe2-background.jpg')] bg-cover bg-center opacity-10"></div>
      <div className="absolute inset-0 bg-gradient-to-br from-red-900/30 to-gray-900/30"></div>
      <Container className="relative z-10">
        <div className="mx-auto max-w-2xl md:text-center">
          <h2 className="font-display text-3xl tracking-tight text-red-500 sm:text-4xl mb-2">
            {t("title")}
          </h2>
          <div className="h-1 w-20 bg-red-600 mx-auto mb-8"></div>
        </div>
        <ul
          role="list"
          className="mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-6 sm:gap-8 lg:mt-20 lg:max-w-none lg:grid-cols-3"
        >
          {columns.map((column, columnIndex) => (
            <li key={columnIndex}>
              <ul role="list" className="flex flex-col gap-y-6 sm:gap-y-8">
                {column.map((testimonial, testimonialIndex) => (
                  <li key={testimonialIndex}>
                    <figure className="relative rounded-lg bg-gray-800 p-6 shadow-xl shadow-red-500/10 border border-red-500/20">
                      <QuoteIcon className="absolute left-6 top-6 fill-red-500/20" />
                      <blockquote className="relative">
                        <p className="text-lg tracking-tight text-gray-300">
                          {testimonial.content}
                        </p>
                      </blockquote>
                      <figcaption className="relative mt-6 flex items-center justify-between border-t border-gray-700 pt-6">
                        <div>
                          <div className="font-display text-base text-red-400">
                            {testimonial.author.name}
                          </div>
                          <div className="mt-1 text-sm text-gray-500">
                            {testimonial.author.role}
                          </div>
                        </div>
                        <div className="overflow-hidden rounded-full bg-gray-700 border-2 border-red-500">
                          <Image
                            className="h-14 w-14 object-cover"
                            src={avatars[columnIndex % avatars.length]}
                            alt="Poe2 Skills Testimonial "
                            width={56}
                            height={56}
                          />
                        </div>
                      </figcaption>
                    </figure>
                  </li>
                ))}
              </ul>
            </li>
          ))}
        </ul>
      </Container>
    </section>
  )
}