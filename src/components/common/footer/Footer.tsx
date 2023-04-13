import { Box, Typography } from '@mui/material';
import React from 'react';
import * as styles from './Footer.styles';

const Footer = () => {
  const date = new Date();
  return (
    <Box sx={styles.container}>
      <Typography variant="h6">
        Copyright © {date.getFullYear()} Plateful.
      </Typography>
      <Typography variant="h6">All rights reserved.</Typography>
    </Box>
  );
};

export default Footer;
