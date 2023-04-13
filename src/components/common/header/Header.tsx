import React from 'react';
import SearchIcon from '@mui/icons-material/Search';
import { Box, Typography } from '@mui/material';
import { MealIcon } from './MealIcon';
import * as style from './Header.styles';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';

const Header = () => {
  return (
    <Box sx={style.container}>
      <Typography variant="h1" sx={{ fontSize: 50 }}>
        Plateful <MealIcon />
      </Typography>
      <Box sx={style.actions}>
        <SearchIcon sx={{ fontSize: 50 }} />
        <FavoriteBorderIcon sx={{ fontSize: 50 }} />
      </Box>
    </Box>
  );
};

export default Header;
