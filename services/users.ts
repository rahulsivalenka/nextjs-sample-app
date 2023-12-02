import { User } from '@/types'

export async function fetchUser(userId: number) {
  const response = await fetch(
    `https://jsonplaceholder.typicode.com/users/${userId}`
  )
  return response.json() as unknown as User
}
