import { Box, Card, CardMedia, Typography } from '@mui/material';
import React, { FC } from 'react';
import * as style from './MealPage.style';
import { useQuery } from 'react-query';
import MealService from '@/services/meals.service';
import { useRouter } from 'next/router';
import Loading from '../common/no-data/Loading';
import Error from '../common/no-data/Error';
import MealInfo from './components';

const MealPage: FC = () => {
  const query = useRouter();
  const idMeal = query.query.idMeal as string;

  const {
    data: meal,
    isLoading,
    isError,
  } = useQuery(['meals', idMeal], () => MealService.getMeal(idMeal), {
    refetchOnWindowFocus: false,
  });

  const videoURL = meal?.meals[0].strYoutube.replace('watch?v=', 'embed/');

  if (isLoading) return <Loading />;

  if (isError) return <Error />;

  return (
    <Box sx={style.container}>
      <Box sx={style.mainInfo}>
        <MealInfo meal={meal?.meals[0]} />
        <Card sx={style.rightContainer}>
          <CardMedia
            component="img"
            height="auto"
            image={meal?.meals[0].strMealThumb}
          ></CardMedia>
        </Card>
      </Box>
      <Box sx={style.instructions}>
        <Typography variant="overline">Instructions</Typography>
        <Typography variant="body1">
          {meal?.meals[0].strInstructions}
        </Typography>
      </Box>
      <Card sx={style.video}>
        <CardMedia component="iframe" height="540" src={videoURL}></CardMedia>
      </Card>
    </Box>
  );
};

export default MealPage;
