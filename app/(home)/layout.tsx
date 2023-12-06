import React from 'react'

export default function HomeLayout({
  filters,
  list,
}: {
  filters: React.ReactNode
  list: React.ReactNode
}) {
  return (
    <div className="p-6 2xl:container 2xl:mx-auto">
      <h3 className="text-xl font-bold mb-6">Posts</h3>
      <div className="flex flex-row gap-4">
        <aside className="w-64 bg-white shadow-md p-5">{filters}</aside>
        <main className="flex-1 grid grid-cols-fluid gap-4">{list}</main>
      </div>
    </div>
  )
}
