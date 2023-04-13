import { Box } from '@mui/material';
import React from 'react';
import MealCard from '../meal-card/MealCard';
import * as styles from './MealList.styles';

const MealList = () => {
  return (
    <Box sx={styles.container}>
      <MealCard />
      <MealCard />
      <MealCard />
    </Box>
  );
};

export default MealList;
