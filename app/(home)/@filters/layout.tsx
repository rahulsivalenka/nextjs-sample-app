import React from 'react'
import { Filter } from 'lucide-react'

export default function FiltersPage({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <div className="flex flex-col gap-2 divide-y">
      <h3 className="flex items-center gap-2 font-medium text-sm">
        <Filter size={14} className="mt-[-1px]" /> Filters
      </h3>
      <div className="flex flex-col gap-2 pt-6">{children}</div>
    </div>
  )
}
