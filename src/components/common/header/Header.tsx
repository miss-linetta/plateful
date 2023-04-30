import React, { FC, useState } from 'react';
import SearchIcon from '@mui/icons-material/Search';
import { Box, Button, Input, Typography } from '@mui/material';
import { MealIcon } from './MealIcon';
import * as style from './Header.styles';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import Link from 'next/link';

const Header: FC = () => {
  return (
    <Box sx={style.container}>
      <Link href={'/'}>
        <Typography variant="h1" sx={{ fontSize: 50 }}>
          Plateful <MealIcon />
        </Typography>
      </Link>
      {/* <Box sx={style.actions}>
        <Button >
          <SearchIcon sx={{ fontSize: 40 }} />
        </Button>
        <FavoriteBorderIcon sx={{ fontSize: 40 }} />
      </Box> */}
    </Box>
  );
};

export default Header;
