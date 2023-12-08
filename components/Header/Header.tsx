import React from 'react'
import Image from 'next/image'
import Link from 'next/link'

import { Button } from '@/components/ui/button'

type HeaderProps = {}

export default function Header({}: HeaderProps) {
  return (
    <header className="sticky top-0 left-0 bg-primary">
      <div className="h-header bg-header px-6 py-2 flex items-center gap-2 2xl:container 2xl:mx-auto">
        <Image src="/logo.svg" width="48" height="48" alt="Logo" />
        <Link href="/" passHref>
          <h1 className="font-medium text-lg text-primary-foreground">
            Sample App
          </h1>
        </Link>

        <div className="ml-auto" />

        <Button variant="cta">Login</Button>
      </div>
    </header>
  )
}
