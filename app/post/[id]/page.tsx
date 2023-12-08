import React from 'react'

type PostPageProps = {
  params: {
    id: string
  }
}

export default function PostPage({ params: { id } }: PostPageProps) {
  return <div>Post Page: {id}</div>
}
