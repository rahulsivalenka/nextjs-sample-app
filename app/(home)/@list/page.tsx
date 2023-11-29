import PostListItem from '@/app/_components/home/PostListItem/PostListItem';
import { Post } from '@/app/_types';
import React from 'react';

async function getPosts() {
  const response = await fetch(
    'https://jsonplaceholder.typicode.com/posts?_limit=10'
  );

  return response.json() as unknown as Post[];
}

export default async function ListPage() {
  const posts = await getPosts();
  return (
    <>
      {posts.map((post) => (
        <PostListItem key={post.id} post={post} />
      ))}
    </>
  );
}
