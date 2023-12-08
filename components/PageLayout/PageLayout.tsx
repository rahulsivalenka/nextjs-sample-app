import React from 'react'
import { cn } from '@/lib/utils'

type PageLayoutProps = {
  children: React.ReactNode
  heading?: string
  subheading?: string
}

function PageLayout({ children, heading, subheading }: PageLayoutProps) {
  return (
    <div className="p-6 2xl:container 2xl:mx-auto">
      {Boolean(heading) && (
        <h2
          className={cn(
            'text-xl font-bold',
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
