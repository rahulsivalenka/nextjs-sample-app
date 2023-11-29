import { Post } from '@/app/_types';
import React from 'react';

type PostListItemProps = {
  post: Post;
};

export default function PostListItem({
  post: { id, title, body },
}: PostListItemProps) {
  return (
    <article
      key={id}
      className="p-2 grid grid-cols-1 bg-white shadow-md divide-y divide-solid"
    >
      <h4 className="p-2 font-medium">{title}</h4>
      <p className="p-2">{body}</p>
      <div className="p-2">
        <button className="px-3 py-1 font-semibold text-xs bg-accent text-accent-text rounded-full shadow-sm hover:shadow-md active:shadow-none">
          View Details
        </button>
      </div>
    </article>
  );
}
