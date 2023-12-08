import React from 'react'

import PageLayout from '@/components/PageLayout'

type PostPageLayoutProps = {
  children: React.ReactNode
}

export default function PostPageLayout({ children }: PostPageLayoutProps) {
  return <PageLayout>{children}</PageLayout>
}
