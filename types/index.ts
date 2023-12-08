export type Post = {
  id: number
  title: string
  body: string
  userId: number
}

export type User = {
  id: number
  name: string
  username: string
  email: string
  address: {
    street: string
    city: string
  }
}

export type Comment = {
  id: number
  postId: number
  name: string
  email: string
  body: string
}

export type Option = {
  label: string
  value: string
}
