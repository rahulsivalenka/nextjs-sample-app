import React from 'react'
import { ResolvingMetadata } from 'next/types'

import PageLayout from '@/components/PageLayout'
import { getPostById } from '@/services/posts'

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

  return (
    <PageLayout heading={post.title}>
      <div className="flex space-x-8">
        <main className="w-3/5">{children}</main>
        <aside className="w-2/5 bg-white shadow-md rounded-md p-4">
          {comments}
        </aside>
      </div>
    </PageLayout>
  )
}
