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
        <li key={comment.id}>{comment.body}</li>
      ))}
    </>
  )
}
