import { Post } from '@/types'

export async function getPosts() {
  const response = await fetch(
    'https://jsonplaceholder.typicode.com/posts?_limit=10'
  )

  return response.json() as unknown as Post[]
}
