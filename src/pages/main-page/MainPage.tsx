import PageLayout from '@/components/common/page-layout/PageLayout';
import MealList from '@/components/main-page/meal-list/MealList';
import React from 'react';

const MainPage = () => {
  return (
    <PageLayout>
      <MealList />
    </PageLayout>
  );
};

export default MainPage;
