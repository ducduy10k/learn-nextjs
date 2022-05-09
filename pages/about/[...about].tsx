import { useRouter } from 'next/router';
import * as React from 'react';

export interface IAboutPageProps {
}

export default function AboutPage (props: IAboutPageProps) {
  const router = useRouter();
  console.log(router.query)
  return (
    <div>
      About
      { JSON.stringify(router.query)}
    </div>
  );
}
