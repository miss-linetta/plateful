import React, { FC } from 'react';
import { Box, Typography } from '@mui/material';
import { MealIcon } from './components/MealIcon';
import * as style from './Header.styles';
import Link from 'next/link';

const Header: FC = () => {
  return (
    <Box sx={style.container}>
      <Link href={'/'}>
        <Typography variant="h1" sx={{ fontSize: 50 }}>
          Plateful <MealIcon />
        </Typography>
      </Link>
    </Box>
  );
};

export default Header;
