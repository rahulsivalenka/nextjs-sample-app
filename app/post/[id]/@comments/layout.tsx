import React from 'react'

export default function CommentsLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <>
      <h3 className="text-lg font-semibold mb-1">Comments</h3>
      <section className="divide-y">{children}</section>
    </>
  )
}
