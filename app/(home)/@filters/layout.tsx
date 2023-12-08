import React from 'react'
import { Filter } from 'lucide-react'

import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'

export default function FiltersPage({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <Card>
      <CardHeader>
        <CardTitle className="flex flex-row items-center gap-2 text-sm">
          <Filter size={14} className="mt-[-1px]" /> Filters
        </CardTitle>
      </CardHeader>
      <CardContent>{children}</CardContent>
    </Card>
  )
}
