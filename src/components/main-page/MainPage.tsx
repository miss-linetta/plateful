import PageLayout from '@/components/common/page-layout/PageLayout';
import Pagination from '@mui/material/Pagination';
import Stack from '@mui/material/Stack';
import * as style from './MainPage.styles';
import MealCard from '@/components/main-page/components/meal-card';
import MealService from '@/services/meals.service';
import { CircularProgress, Typography, Box } from '@mui/material';
import { useQuery } from 'react-query';
import { GetMealDTO } from '@/types/service';
import { FC } from 'react';

const MainPage: FC = () => {
  const {
    data: meal,
    isLoading,
    isError,
  } = useQuery('meals', MealService.getAllMeal, {
    refetchOnWindowFocus: false,
  });

  if (isLoading) return <CircularProgress />;

  if (isError) return <Typography>Error!</Typography>;
  return (
    <PageLayout>
      <Box sx={style.container}>
        {meal?.meals &&
          meal?.meals.map((meal) => {
            return (
              <MealCard
                key={meal.idMeal}
                strMealThumb={meal.strMealThumb}
                strMeal={meal.strMeal}
                strCategory={meal.strCategory}
                strArea={meal.strArea}
                idMeal={meal.idMeal}
              />
            );
          })}
      </Box>
      <Stack sx={style.pagination} spacing={2}>
        <Pagination count={10} color="primary" />
      </Stack>
    </PageLayout>
  );
};

export default MainPage;
