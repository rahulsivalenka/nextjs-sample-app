import { getPostById } from '@/services/posts'
import React from 'react'

type PostPageProps = {
  params: {
    id: string
  }
}

export default async function PostPage({ params: { id } }: PostPageProps) {
  const post = await getPostById(Number(id))
  return (
    <div>
      Post Page
      <pre>{JSON.stringify(post, null, 2)}</pre>
    </div>
  )
}
