import React from 'react'
import Link from 'next/link'

import { Post } from '@/types'
import { fetchUser } from '@/services/users'
import { Button } from '@/components/ui/button'
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card'

type PostListItemProps = {
  post: Post
}

export default function PostListItem({
  post: { id, title, body },
}: PostListItemProps) {
  const user = React.use(fetchUser(id))

  return (
    <article key={id}>
      <Card className="h-full flex flex-col">
        <CardHeader>
          <CardTitle>{title}</CardTitle>
        </CardHeader>
        <CardContent className="flex-1">{body}</CardContent>
        <CardFooter>
          <p className="text-gray-500 text-sm">By {user.name}</p>
          <Link className="ml-auto" href={`/post/${id}`} passHref>
            <Button variant="accent" size="xs">
              View Details
            </Button>
          </Link>

          {/* px-3 py-1 font-semibold text-xs bg-accent text-accent-text rounded-full shadow-sm hover:shadow-md active:shadow-none */}
        </CardFooter>
      </Card>
    </article>
  )
}
