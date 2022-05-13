import { Box } from '@mui/material';
import * as React from 'react';

export interface IHeaderProps {
}

export  function Header (props: IHeaderProps) {
  return (
    <Box component="header" py={2} textAlign="center">
        Header
    </Box>
  );
}
