import Pagination from '@mui/material/Pagination';
import Stack from '@mui/material/Stack';
import * as style from './MainPage.styles';
import MealCard from '@/components/main-page/components/meal-card';
import MealService from '@/services/meals.service';
import { Box } from '@mui/material';
import { useQuery } from 'react-query';
import { FC } from 'react';
import usePagination from '../../hooks/pagination/usePagination';
import Loading from '../common/no-data/Loading';
import Error from '../common/no-data/Error';

const MainPage: FC = () => {
  const {
    data: meal,
    isLoading,
    isError,
  } = useQuery('meals', MealService.getAllMeal, {
    refetchOnWindowFocus: false,
  });

  const { currentPage, handlePageChange, maxPage, currentData } = usePagination(
    meal?.meals,
    10
  );

  if (isLoading) return <Loading />;
  if (isError) return <Error />;
  return (
    <Box>
      <Box sx={style.container}>
        {currentData.map((meal: any) => {
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
        <Pagination
          onChange={handlePageChange}
          page={currentPage}
          count={maxPage}
          color="primary"
        />
      </Stack>
    </Box>
  );
};

export default MainPage;
