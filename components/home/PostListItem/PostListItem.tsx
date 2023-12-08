import React from 'react'
import Link from 'next/link'

import { Post } from '@/types'
import { fetchUser } from '@/services/users'
import { Button } from '@/components/ui/button'

type PostListItemProps = {
  post: Post
}

export default function PostListItem({
  post: { id, title, body },
}: PostListItemProps) {
  const user = React.use(fetchUser(id))

  return (
    <article
      key={id}
      className="p-2 grid grid-cols-1 grid-rows-[auto_1fr_auto] bg-white shadow-md divide-y divide-solid"
    >
      <h4 className="p-2 font-medium">{title}</h4>
      <p className="p-2">{body}</p>
      <div className="p-2 flex items-center">
        <p className="text-gray-500 text-sm">By {user.name}</p>
        <Link className="ml-auto" href={`/post/${id}`} passHref>
          <Button variant="accent" size="xs">
            View Details
          </Button>
        </Link>

        {/* px-3 py-1 font-semibold text-xs bg-accent text-accent-text rounded-full shadow-sm hover:shadow-md active:shadow-none */}
      </div>
    </article>
  )
}
