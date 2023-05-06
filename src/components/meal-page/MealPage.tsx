import {
  Box,
  Card,
  CardMedia,
  Chip,
  List,
  ListItem,
  Stack,
  Typography,
} from '@mui/material';
import React, { FC } from 'react';
import * as style from './MealPage.style';
import { useQuery } from 'react-query';
import MealService from '@/services/meals.service';
import { useRouter } from 'next/router';
import { ingredientList } from './utils/ingredientList';
import Loading from '../common/no-data/Loading';
import Error from '../common/no-data/Error';

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

  const ingredients = ingredientList(meal?.meals[0]);

  const videoURL = meal?.meals[0].strYoutube.replace('watch?v=', 'embed/');

  if (isLoading) return <Loading />;

  if (isError) return <Error />;

  return (
    <Box sx={style.container}>
      <Box sx={style.mainInfo}>
        <Box>
          <Stack direction="row" spacing={1}>
            <Chip label={meal?.meals[0].strCategory} color="primary" />
            <Chip label={meal?.meals[0].strArea} color="success" />
          </Stack>
          <Typography sx={style.title} variant="h2">
            {meal?.meals[0].strMeal}
          </Typography>
          <Box>
            <Typography variant="overline">Ingredients:</Typography>
            <List>
              {ingredients.map((item, idx) => {
                return (
                  <ListItem key={idx}>
                    <Typography key={idx} variant="body2">
                      {idx + 1}) {item}
                    </Typography>
                  </ListItem>
                );
              })}
            </List>
          </Box>
        </Box>
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
