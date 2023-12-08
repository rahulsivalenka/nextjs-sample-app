import React from 'react'

import PageLayout from '@/components/PageLayout'

type PostPageLayoutProps = {
  children: React.ReactNode
  comments: React.ReactNode
}

export default function PostPageLayout({
  children,
  comments,
}: PostPageLayoutProps) {
  return (
    <PageLayout>
      {children}
      {comments}
    </PageLayout>
  )
}
