import { getPostById } from '@/services/posts'
import React from 'react'

type PostPageProps = {
  params: {
    id: string
  }
}

export default async function PostPage({ params: { id } }: PostPageProps) {
  const post = await getPostById(Number(id))
  return <p>{post.body}</p>
}
