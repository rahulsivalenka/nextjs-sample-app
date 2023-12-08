import { Post } from '@/types'

export async function getPosts() {
  const response = await fetch(
    'https://jsonplaceholder.typicode.com/posts?_limit=10'
  )

  return response.json() as unknown as Post[]
}

export async function getPostById(id: number) {
  const response = await fetch(
    'https://jsonplaceholder.typicode.com/posts/' + id
  )

  return response.json() as unknown as Post
}
