import React from 'react'
import Link from 'next/link'
import { ArrowLeft } from 'lucide-react'

import { cn } from '@/lib/utils'
import { getReferer } from '@/lib/serverUtils'

type PageLayoutProps = {
  children: React.ReactNode
  heading?: string
  subheading?: string
}

function PageLayout({ children, heading, subheading }: PageLayoutProps) {
  const referer = getReferer()
  return (
    <div className="p-6 2xl:container 2xl:mx-auto">
      {Boolean(referer) && (
        <Link
          href={referer as string}
          className="inline-flex items-center hover:underline mb-5"
        >
          <ArrowLeft className="text-sm mr-1" /> Back
        </Link>
      )}
      {Boolean(heading) && (
        <h2
          className={cn(
            'text-2xl font-bold',
            Boolean(subheading) ? 'mb-2' : 'mb-6'
          )}
        >
          {heading}
        </h2>
      )}
      {Boolean(subheading) && (
        <p className="text-gray-500 mb-6 text-sm">{subheading}</p>
      )}
      {children}
    </div>
  )
}

export default PageLayout
