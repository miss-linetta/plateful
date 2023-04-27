import {
  Box,
  Card,
  CardMedia,
  Chip,
  CircularProgress,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Stack,
  Typography,
} from '@mui/material';
import React, { FC } from 'react';
import * as style from './MealInfo.styles';
import { ListIcon } from './components/ListIcon';
import { AddCircleOutline } from '@mui/icons-material';
import { GetAllMealDTO } from '@/types/service';
import { useQuery } from 'react-query';
import MealService from '@/services/meals.service';
import { useRouter } from 'next/router';
import VideoPlayer from '../video-player/VideoPlayer';

const MealInfo: FC = () => {
  const query = useRouter();
  const idMeal = query.query.idMeal as string;

  const {
    data: meal,
    isLoading,
    isError,
  } = useQuery(['meals', idMeal], () => MealService.getMeal(idMeal), {
    refetchOnWindowFocus: false,
  });

  function ingredientList(data) {
    if (!data) {
      return [];
    }

    let propertiesArr = Object.values(data);

    let ingredients = [];

    for (let i = 9; i < 28; i++) {
      if (!propertiesArr[i]) break;
      ingredients.push(propertiesArr[i]);
    }

    let measures = [];
    for (let i = 29; i < 48; i++) {
      if (!propertiesArr[i]) break;
      measures.push(propertiesArr[i]);
    }

    let ingredMeasList = [];

    for (let i = 0; i < ingredients.length; i++) {
      ingredMeasList.push(`${ingredients[i]} - ${measures[i]}`);
    }

    return ingredMeasList;
  }

  let ingredients = ingredientList(meal?.meals[0]);

  const videoURL = meal?.meals[0].strYoutube.replace('watch?v=', 'embed/');

  if (isLoading) return <CircularProgress />;

  if (isError) return <Typography>Error!</Typography>;

  return (
    <Box>
      <Box sx={style.container}>
        <Box sx={style.mainInfo}>
          <Box sx={style.titleContainer}>
            <Stack direction="row" spacing={1}>
              <Chip label={meal?.meals[0].strCategory} color="primary" />
              <Chip label={meal?.meals[0].strArea} color="success" />
              <Chip label={meal?.meals[0].strTags} color="success" />
            </Stack>
            <Typography sx={style.title} variant="h2">
              {meal?.meals[0].strMeal}
            </Typography>
            <Box>
              <Typography variant={'overline'}>Ingredients:</Typography>
              {ingredients.map((item, idx) => {
                return (
                  <List sx={style.ingredients}>
                    <Typography variant="span">{idx + 1}) </Typography>
                    {item}
                  </List>
                );
              })}
            </Box>
          </Box>
          <Card sx={style.rightContainer}>
            <CardMedia
              component="img"
              height={'auto'}
              image={meal?.meals[0].strMealThumb}
            ></CardMedia>
          </Card>
        </Box>
        <Box sx={style.instructions}>
          <Typography variant={'overline'}>Instructions</Typography>
          <Typography variant={'body1'}>
            {meal?.meals[0].strInstructions}
          </Typography>
        </Box>
        <Card sx={style.video}>
          <CardMedia component="iframe" height="540" src={videoURL}></CardMedia>
        </Card>
      </Box>
    </Box>
  );
};

export default MealInfo;
