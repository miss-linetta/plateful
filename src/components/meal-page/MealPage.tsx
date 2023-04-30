import PageLayout from '@/components/common/page-layout/PageLayout';

import { Typography } from '@mui/material';
import React from 'react';
import MealInfo from './components/meal-info';

const MealPage = () => {
  return (
    <PageLayout>
      <MealInfo />
    </PageLayout>
  );
};

export default MealPage;
