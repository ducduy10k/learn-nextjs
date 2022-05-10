import { GetStaticPaths, GetStaticProps, GetStaticPropsContext } from 'next';
import { useRouter } from 'next/router';
import  React from 'react';

export interface PostPageProps {
  posts: []
}

export default function PostPage(props: PostPageProps) {
  const router= useRouter();
  return (
    <div>
      Post page : 
      <p>Query : {JSON.stringify(router.query)}</p>
      <ul>
        {props.posts.map((post:any) => (<li key={post.id}>{post.title}</li>))}
      </ul>
    </div>
  );
}



export const getStaticProps: GetStaticProps<PostPageProps> = async (context: GetStaticPropsContext) => {
  const response = await fetch('https://jsonplaceholder.typicode.com/posts');
  const data = await response.json();
  console.log(data)
  return {
    props: {
      posts: data.map((x: any)=>({
        id: x.id, 
        title : x.title
      }))
    },

  }
}

export const getStaticPaths: GetStaticPaths<{ slug: string }> = async () => {

  return {
      paths: [], //indicates that no page needs be created at build time
      fallback: 'blocking' //indicates the type of fallback
  }
}
