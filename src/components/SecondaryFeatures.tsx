import Image from 'next/image'
import { useTranslations } from 'next-intl'

import { Container } from '@/components/Container'
import screenshotContacts from '@/images/screenshots/flux-showcase.jpg'

interface Feature {
  name: string
  summary: string
  description: string
  image: any
  icon: string
}

const features: Array<Feature> = [
  {
    name: 'Psychological Narrative Analysis',
    summary: 'Unravel the depths of the story',
    description: 'Dive deep into the intricate psychological narrative, exploring character motivations, hidden symbolism, and the blurred lines between reality and virtual existence. Our analysis tools help you decode the complex storylines and uncover hidden meanings behind every interaction.',
    image: screenshotContacts,
    icon: `<svg width="36" height="36" fill="none" viewBox="0 0 36 36">
      <path d="m30 15-4 5-4-11-4 18-4-11-4 7-4-5" stroke="url(#gradient-story)" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
      <defs>
        <linearGradient id="gradient-story" x1="11.5" y1="18" x2="36" y2="15.5" gradientUnits="userSpaceOnUse">
          <stop offset=".194" stop-color="#fff"/>
          <stop offset="1" stop-color="#FF4B4B"/>
        </linearGradient>
      </defs>
    </svg>`,
  },
  {
    name: 'Relationship Dynamics Simulator',
    summary: 'Explore character interactions',
    description: 'Utilize our advanced relationship dynamics simulator to explore the intricate web of interactions between characters. Predict outcomes, analyze emotional responses, and understand the ripple effects of your choices throughout the game\'s branching narrative paths.',
    image: screenshotContacts,
    icon: `<svg width="36" height="36" fill="none" viewBox="0 0 36 36">
      <path opacity=".5" d="M8 17a1 1 0 0 1 1-1h18a1 1 0 0 1 1 1v2a1 1 0 0 1-1 1H9a1 1 0 0 1-1-1v-2Z" fill="#fff"/>
      <path opacity=".3" d="M8 24a1 1 0 0 1 1-1h18a1 1 0 0 1 1 1v2a1 1 0 0 1-1 1H9a1 1 0 0 1-1-1v-2Z" fill="#fff"/>
      <path d="M8 10a1 1 0 0 1 1-1h18a1 1 0 0 1 1 1v2a1 1 0 0 1-1 1H9a1 1 0 0 1-1-1v-2Z" fill="#fff"/>
    </svg>`,
  },
  {
    name: 'Psychological Profile Builder',
    summary: 'Craft your character\'s psyche',
    description: 'Create and refine your character\'s psychological profile using our comprehensive builder. Tailor personality traits, past experiences, and cognitive patterns to shape your protagonist\'s responses to the game\'s psychological challenges and plot twists.',
    image: screenshotContacts,
    icon: `<svg width="36" height="36" fill="none" viewBox="0 0 36 36">
      <path opacity=".5" d="M25.778 25.778c.39.39 1.027.393 1.384-.028A11.952 11.952 0 0 0 30 18c0-6.627-5.373-12-12-12S6 11.373 6 18c0 2.954 1.067 5.659 2.838 7.75.357.421.993.419 1.384.028.39-.39.386-1.02.036-1.448A9.959 9.959 0 0 1 8 18c0-5.523 4.477-10 10-10s10 4.477 10 10a9.959 9.959 0 0 1-2.258 6.33c-.35.427-.354 1.058.036 1.448Z" fill="#fff"/>
      <path d="M12 28.395V28a6 6 0 0 1 12 0v.395A11.945 11.945 0 0 1 18 30c-2.186 0-4.235-.584-6-1.605ZM21 16.5c0-1.933-.5-3.5-3-3.5s-3 1.567-3 3.5 1.343 3.5 3 3.5 3-1.567 3-3.5Z" fill="#fff"/>
    </svg>`,
  },
  {
    name: 'Immersive Scene Deconstructor',
    summary: 'Analyze environmental storytelling',
    description: 'Deconstruct the game\'s immersive scenes with our cutting-edge analysis tool. Uncover hidden clues in the environment, decode symbolic imagery, and piece together the subliminal narrative woven into the game\'s visual design.',
    image: screenshotContacts,
    icon: `<svg width="36" height="36" fill="none" viewBox="0 0 36 36">
      <path d="M18 3L3 10.5V25.5L18 33L33 25.5V10.5L18 3Z" stroke="#fff" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
      <path d="M3 10.5L18 18" stroke="#fff" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
      <path d="M18 33V18" stroke="#fff" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
      <path d="M33 10.5L18 18" stroke="#fff" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
      <path d="M18 3V10.5" stroke="#fff" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
    </svg>`,
  },
  {
    name: 'Decision Tree Visualizer',
    summary: 'Map out your choices and consequences',
    description: 'Visualize the complex web of decisions and their consequences with our intuitive decision tree tool. Track multiple storylines, anticipate plot twists, and strategize your path through the game\'s intricate narrative branches.',
    image: screenshotContacts,
    icon: `<svg width="36" height="36" fill="none" viewBox="0 0 36 36">
      <path d="M18 3v30M3 18h30M3 3h30v30H3V3z" stroke="#fff" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
      <circle cx="18" cy="18" r="3" fill="#fff"/>
      <circle cx="27" cy="9" r="3" fill="#fff"/>
      <circle cx="9" cy="27" r="3" fill="#fff"/>
    </svg>`,
  },
]

function Feature({ feature, isActive }: { feature: Feature; isActive: boolean }) {
  return (
    <div className={`${isActive ? 'transform scale-105' : 'opacity-75 hover:opacity-100'} transition-all duration-300`}>
      <div className={`w-12 h-12 rounded-lg ${isActive ? 'bg-red-600' : 'bg-gray-700'} flex items-center justify-center`}>
        <div dangerouslySetInnerHTML={{ __html: feature.icon }} className="w-8 h-8" />
      </div>
      <h3 className={`mt-6 text-lg font-medium ${isActive ? 'text-yellow-400' : 'text-gray-300'}`}>
        {feature.name}
      </h3>
      <p className="mt-2 font-display text-xl text-gray-100">{feature.summary}</p>
      <p className="mt-4 text-sm text-gray-400">{feature.description}</p>
    </div>
  )
}

function Features() {
  return (
    <div className="mt-20 grid grid-cols-1 gap-y-10 lg:grid-cols-3 lg:gap-x-8">
      {features.map((feature, index) => (
        <Feature key={feature.name} feature={feature} isActive={index === 0} />
      ))}

    </div>
  )
}

export function SecondaryFeatures() {
  const t = useTranslations('SecondaryFeatures')

  return (
    <section
      id="secondary-features"
      aria-label="Advanced features for Path of Exile 2 build planning"
      className="bg-gray-900 py-20 sm:py-32"
    >
      <Container>
        <div className="mx-auto max-w-2xl md:text-center">
          <h2 className="font-display text-3xl tracking-tight text-red-500 sm:text-4xl md:text-5xl">
            {t('title')}
          </h2>
          <p className="mt-4 text-lg tracking-tight text-gray-300">
            {t('description')}
          </p>
        </div>
        <Features />
      </Container>
    </section>
  )
}