import { GetStaticPaths, GetStaticProps, GetStaticPropsContext } from 'next'
import { useRouter } from 'next/router'
import React from 'react'

export interface PostPageProps {
  post: any
}

export default function PostDetailPage({post}: PostPageProps) {
  const router = useRouter()
  console.log(post)
  if(!post) return null
  return (
    <div>
      Post page :<p>Query : {JSON.stringify(post)}</p>
    </div>
  )
}

export const getStaticPaths: GetStaticPaths = async () => {
  console.log('Get paths');
  const response = await fetch('https://jsonplaceholder.typicode.com/posts')
  const data = await response.json();
  // console.log(data)
  var arr = data.map((post:any)=>({params:{postid:post.id + ''}}));
  return {
    paths: arr,
    fallback: false // true or 'blocking'
  };
}

export const getStaticProps: GetStaticProps<PostPageProps> = async (
  context: GetStaticPropsContext
) => {
  console.log('Get props');
  const postId = context.params?.postid;
  console.log(postId)

  if(!postId) return {notFound: true}
  const response = await fetch(`https://jsonplaceholder.typicode.com/posts/${postId}`)
  const data = await response.json()
  console.log(data)
  return {
    props: {
      post: data,
    },
  }
}

