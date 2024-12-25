import Link from 'next/link'
import { Button } from '@/components/Button'
import { Logo } from '@/components/Logo'
import { SlimLayout } from '@/components/SlimLayout'
import { type Metadata } from 'next'

export const metadata: Metadata = {
  title: '404 - Page Not Found',
}

export default function NotFound() {
  return (
       <div className="flex min-h-screen bg-gray-50">
      <div className="flex-1 flex flex-col justify-center">
    <SlimLayout>
      <div className="flex">
        <Link href="/" aria-label="Home">
          <Logo className="h-10 w-auto" />
        </Link>
      </div>
      <h2 className="mt-20 text-lg font-semibold text-gray-900">
        404 - Page Not Found
      </h2>
      <p className="mt-2 text-sm text-gray-700">
        Oops! The page you are looking for doesn&t exist.{' '}
        <Link
          href="/"
          className="font-medium text-blue-600 hover:underline"
        >
          Go back to homepage
        </Link>{' '}
        or try using the search.
      </p>
      <div className="mt-10">
        <Button href="/" variant="solid" color="blue" className="w-full">
          <span>
            Return to Homepage <span aria-hidden="true">&rarr;</span>
          </span>
        </Button>
      </div>
    </SlimLayout>
              </div>
    </div>
  )
}