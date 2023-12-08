import React from 'react'

export default function NotFoundPage() {
  return (
    <div className="flex min-h-screen items-center justify-center">
      <div className="flex gap-3">
        <h1>404</h1>
        <div className="inline-block min-h-[1em] w-0.5 self-stretch bg-neutral-300 opacity-100 dark:opacity-50"></div>
        <h2>This page could not be found.</h2>
      </div>
    </div>
  )
}
