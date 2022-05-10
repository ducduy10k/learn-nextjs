import { GetStaticProps, GetStaticPropsContext } from 'next'
import Link from 'next/link'
import { useRouter } from 'next/router'
import * as React from 'react'

export interface PostListPageProps {
  posts: []
}

export default function PostListPage(props: PostListPageProps) {
  const router = useRouter()
  return (
    <div>
      Post page :<p>Query : {JSON.stringify(router.query)}</p>
      <ul>
        {props.posts.map((post: any) => (
          <li key={post.id}>
            <Link href={`posts/${post.id}`}>
              <a>{post.title}</a>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  )
}

export const getStaticProps: GetStaticProps<PostListPageProps> = async (
  context: GetStaticPropsContext
) => {
  const response = await fetch('https://jsonplaceholder.typicode.com/posts')
  const data = await response.json()
  return {
    props: {
      posts: data.map((x: any) => ({
        id: x.id,
        title: x.title,
      })),
    },
  }
}
