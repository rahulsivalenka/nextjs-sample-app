import { Comment } from '@/types'

export async function getCommentsByPost(postId: number) {
  const response = await fetch(
    'https://jsonplaceholder.typicode.com/comments?postId=' + postId
  )

  return response.json() as unknown as Comment[]
}
