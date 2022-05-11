import { LayoutProps } from '@/models/index';
import Link from 'next/link';
import React, { useEffect } from 'react';

export function MainLayout({ children }: LayoutProps) {
    useEffect(() => {
        console.log('Main layout mouting');
        return () => {
            console.log('Main layout unmouting');
        }
    }, [])

    return (
        <div>
            <h1>Main layout</h1>
            <Link href='/'>
                <a>Home</a>
            </Link>
            <Link href='/posts'>
                <a>About</a>
            </Link>
            <div>{children}</div>
        </div>
    );
}
