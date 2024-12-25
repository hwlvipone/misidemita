// app/[locale]/about/page.tsx
import Image from 'next/image'
import teamPhoto from '@/images/team.jpg'  // 使用别名导入


export default function About() {
  return (
    <div className="bg-white">
      <div className="max-w-7xl mx-auto py-16 px-4 sm:px-6 lg:px-8">
        <div className="lg:grid lg:grid-cols-2 lg:gap-8">
          <div>
            <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
              Breaking Barriers, One Conversation at a Time
            </h2>
            <p className="mt-4 text-lg text-gray-500">
              At misidemita.net, we believe that language should never be a barrier to human connection. Our journey began with a simple yet powerful idea: what if we could make real-time translation as easy as having a conversation?
            </p>
            <div className="mt-6 prose prose-indigo prose-lg text-gray-500">
              <p>
                It all started on a bustling street in Tokyo. Our founder, Sarah, was trying to ask for directions but found herself lost in translation. That&apos;s when it hit her – in a world more connected than ever, we&apos;re still separated by language barriers.
              </p>
              <p>
                Driven by this experience, Sarah assembled a team of language enthusiasts, tech wizards, and design thinkers. Together, we set out on a mission to revolutionize communication across languages.
              </p>
              <p>
                We&apos;ve spent countless hours testing, reviewing, and pushing the boundaries of AI translation technology. Our team has traveled to over 50 countries, putting various AI translator earbuds through real-world tests in diverse scenarios – from bustling marketplaces in Marrakech to high-stakes business meetings in Shanghai.
              </p>
              <p>
                But we&apos;re more than just tech enthusiasts. We&apos;re dreamers who believe in a world where everyone can understand and be understood, regardless of the language they speak. We&aposre here to guide you through the exciting world of AI translator earbuds, helping you find the perfect tool to connect with the world around you.
              </p>
            </div>
          </div>
          <div className="mt-8 lg:mt-0">
            <div className="aspect-w-3 aspect-h-2">
                <Image
                        className="object-cover shadow-lg rounded-lg"
                        src={teamPhoto}  // 使用导入的图片
                        alt="Our team testing AI translator earbuds in Tokyo"
                        width={800}
                        height={600}
                    />

            </div>
            <div className="mt-10">
              <h3 className="text-2xl font-extrabold text-gray-900">Our Mission</h3>
              <p className="mt-4 text-lg text-gray-500">
                We&apos;re on a mission to make the world a little smaller and a lot more connected. Through rigorous testing, honest reviews, and in-depth guides, we aim to empower you with the knowledge to choose the perfect AI translator earbuds for your needs.
              </p>
              <div className="mt-6">
                <div className="flex">
                  <div className="flex-shrink-0">
                    <svg className="h-6 w-6 text-indigo-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <div className="ml-3">
                    <p className="text-lg leading-6 font-medium text-gray-900">Unbiased Reviews</p>
                    <p className="mt-2 text-base text-gray-500">
                      We promise to always provide honest, unbiased reviews based on thorough testing and real-world use.
                    </p>
                  </div>
                </div>
                <div className="mt-6 flex">
                  <div className="flex-shrink-0">
                    <svg className="h-6 w-6 text-indigo-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <div className="ml-3">
                    <p className="text-lg leading-6 font-medium text-gray-900">Expert Guidance</p>
                    <p className="mt-2 text-base text-gray-500">
                      Our team of language and tech experts is here to guide you every step of the way.
                    </p>
                  </div>
                </div>
                <div className="mt-6 flex">
                  <div className="flex-shrink-0">
                    <svg className="h-6 w-6 text-indigo-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <div className="ml-3">
                    <p className="text-lg leading-6 font-medium text-gray-900">Community-Driven</p>
                    <p className="mt-2 text-base text-gray-500">
                      We value your experiences and feedback, using them to continually improve our recommendations.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="mt-16">
          <h3 className="text-2xl font-extrabold text-gray-900">Join Our Journey</h3>
          <p className="mt-4 text-lg text-gray-500">
            Whether you&apos;re a globetrotter, a business professional, or simply someone curious about breaking down language barriers, we invite you to join us on this exciting journey. Together, let&apos;s explore the incredible potential of AI translator earbuds and make the world a more connected place, one conversation at a time.
          </p>
        </div>
      </div>
    </div>
  )
}