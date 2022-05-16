import { Box, Container, Stack, Typography } from '@mui/material';
import Link from 'next/link';
import * as React from 'react';

export interface IFeatureWorkProps {
}

export function FeatureWork (props: IFeatureWorkProps) {
  return (
    <Box component='section' pt={2} pb={4}>
      <Container>
        <Stack>
            <Typography>
                Works
            </Typography>
            <Link passHref href='/works'>
                View all
            </Link>
        </Stack>
        <Stack>
            <Box>

            </Box>
        </Stack>
      </Container>
    </Box>
  );
}
