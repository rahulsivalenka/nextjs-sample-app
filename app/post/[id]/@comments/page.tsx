import { getCommentsByPost } from '@/services/comments'
import React from 'react'

type CommentsPageProps = {
  params: {
    id: string
  }
}

export default async function CommentsPage({
  params: { id: postId },
}: CommentsPageProps) {
  const comments = await getCommentsByPost(Number(postId))

  return (
    <>
      {comments.map((comment) => (
        <article className="p-4" key={comment.id}>
          <h4 className="font-medium">{comment.name}</h4>
          <p className="text-gray-500">{comment.body}</p>
        </article>
      ))}
    </>
  )
}
