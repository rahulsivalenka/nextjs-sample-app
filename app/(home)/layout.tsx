import React from 'react'

import PageLayout from '@/components/PageLayout'

export default function HomeLayout({
  filters,
  list,
}: {
  filters: React.ReactNode
  list: React.ReactNode
}) {
  return (
    <PageLayout heading="Posts">
      <div className="flex flex-row gap-4">
        <aside className="w-72">{filters}</aside>
        <main className="flex-1 grid grid-cols-fluid gap-4">{list}</main>
      </div>
    </PageLayout>
  )
}
