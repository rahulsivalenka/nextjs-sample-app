import { User } from '@/types'

export async function fetchUser(userId: number) {
  const response = await fetch(
    `https://jsonplaceholder.typicode.com/users/${userId}`
  )
  return response.json() as unknown as User
}

export async function fetchUsers() {
  const response = await fetch(`https://jsonplaceholder.typicode.com/users`)
  return response.json() as unknown as User[]
}

export async function fetchUserOptions() {
  const users = await fetchUsers()
  return users.map((user) => ({
    value: user.id.toString(),
    label: user.name,
  }))
}
