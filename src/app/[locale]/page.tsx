import { CallToAction } from '@/components/CallToAction'
import { Faqs } from '@/components/Faqs'
import { Hero } from '@/components/Hero'
import { PrimaryFeatures } from '@/components/PrimaryFeatures'
import { SecondaryFeatures } from '@/components/SecondaryFeatures'
import { Testimonials } from '@/components/Testimonials'
import ModShowcase from '@/components/ModShowcase'

export default function Home() {
  return (
    <>
      <main>
        <div id="hero"><Hero /></div>
        <div id="primary-features"><PrimaryFeatures /></div>
        <SecondaryFeatures />
        <CallToAction />
        <div id="testimonials"><Testimonials /></div>
        <div id="faqs"><Faqs /></div>
      </main>
    </>
  )
}