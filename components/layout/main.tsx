import { LayoutProps } from '@/models/index';
import { Stack } from '@mui/material';
import { Box } from '@mui/system';
import Link from 'next/link';
import React, { useEffect } from 'react';
import { Footer, Header } from '../common';

export function MainLayout({ children }: LayoutProps) {
    useEffect(() => {
        console.log('Main layout mouting');
        return () => {
            console.log('Main layout unmouting');
        }
    }, [])

    return (
        <Stack>
            <Header/>
            <Link href='/'>
                <a>Home</a>
            </Link>
            <Link href='/posts'>
                <a>About</a>
            </Link>
            <Box component="main">{children}</Box>
            <Footer/>
        </Stack>
    );
}
