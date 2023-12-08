import React from 'react'

export default function CommentsLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <>
      <h2>Comments</h2>
      <ul>{children}</ul>
    </>
  )
}
