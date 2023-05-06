import { Box, CircularProgress } from '@mui/material';
import React from 'react';
import * as style from './NoData.style';

const Loading = () => {
  return (
    <Box sx={style.noData}>
      <CircularProgress />
    </Box>
  );
};

export default Loading;
