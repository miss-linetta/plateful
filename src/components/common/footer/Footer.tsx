/* eslint-disable react/no-unescaped-entities */
import { Box, Typography } from '@mui/material';
import React from 'react';
import * as style from './Footer.styles';
import { MealIcon } from './MealIcon';

const Footer = () => {
  const date = new Date();
  return (
    <Box sx={style.container}>
      <MealIcon />
      <Typography variant="subtitle2">
        Copyright © {date.getFullYear()} Plateful.
      </Typography>
      <Typography variant="subtitle2">All rights reserved.</Typography>
    </Box>
  );
};

export default Footer;
