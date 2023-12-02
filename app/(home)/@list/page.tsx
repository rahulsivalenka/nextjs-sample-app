import PostListItem from '@/components/home/PostListItem'
import { getPosts } from '@/services/posts'
import { Post } from '@/types'
import React from 'react'

export default async function ListPage() {
  const posts = await getPosts()
  return (
    <>
      {posts.map((post) => (
        <PostListItem key={post.id} post={post} />
      ))}
    </>
  )
}
