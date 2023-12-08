import React from 'react'
import { ResolvingMetadata } from 'next/types'

import PageLayout from '@/components/PageLayout'
import { getPostById } from '@/services/posts'
import { fetchUser } from '@/services/users'
import { Card, CardContent } from '@/components/ui/card'

const TRIM_LENGTH = 20

export async function generateMetadata(
  {
    params,
  }: {
    params: {
      id: string
    }
  },
  parent: ResolvingMetadata
) {
  const parentMeta = await parent
  const title = parentMeta.title?.absolute

  function getTitle(text: string) {
    if (title) {
      return `${
        text.length > TRIM_LENGTH ? `${text.slice(0, TRIM_LENGTH)}...` : text
      } | ${title}`
    }
    return text
  }

  const post = await getPostById(Number(params.id))

  return {
    title: getTitle(post.title),
  }
}

type PostPageLayoutProps = {
  children: React.ReactNode
  comments: React.ReactNode
  params: {
    id: string
  }
}

export default async function PostPageLayout({
  children,
  comments,
  params: { id },
}: PostPageLayoutProps) {
  const post = await getPostById(Number(id))
  const user = await fetchUser(post.userId)

  return (
    <PageLayout heading={post.title} subheading={`By ${user.name}`}>
      <Card>
        <CardContent className="flex space-x-8 pt-6">
          <main className="w-3/5">{children}</main>
          <aside className="w-2/5 bg-neutral-100 rounded-md p-6">
            {comments}
          </aside>
        </CardContent>
      </Card>
    </PageLayout>
  )
}
