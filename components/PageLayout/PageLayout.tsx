import React from 'react'

type PageLayoutProps = {
  children: React.ReactNode
  heading?: string
}

function PageLayout({ children, heading }: PageLayoutProps) {
  return (
    <div className="p-6 2xl:container 2xl:mx-auto">
      {Boolean(heading) && (
        <h3 className="text-xl font-bold mb-6">{heading}</h3>
      )}
      {children}
    </div>
  )
}

export default PageLayout
