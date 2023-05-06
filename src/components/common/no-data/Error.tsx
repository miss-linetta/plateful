import { Box, Typography } from '@mui/material';
import React from 'react';
import * as style from './NoData.style';

const Error = () => {
  return (
    <Box sx={style.noData}>
      <Typography>Error!</Typography>
    </Box>
  );
};

export default Error;
