import { LayoutProps } from '@/models/index';
import Link from 'next/link';
import * as React from 'react';
export function AdminLayout ({children}: LayoutProps) {
  return (
    <div>
      <h1>Admin layout</h1>
      <div>Sidebar</div>
      <Link href='/'>
          <a>Home</a>
      </Link>
      <Link href='/about'>
          <a>About</a>
      </Link>
      <div>{children}</div>
    </div>
  );
}
