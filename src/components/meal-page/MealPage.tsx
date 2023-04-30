import PageLayout from '@/components/common/page-layout/PageLayout';
import {
  Box,
  Card,
  CardMedia,
  Chip,
  CircularProgress,
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

  function ingredientList(data: any) {
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

  if (isLoading)
    return (
      <Box sx={style.noData}>
        <CircularProgress />
      </Box>
    );

  if (isError)
    return (
      <Box sx={style.noData}>
        <Typography>Error!</Typography>;
      </Box>
    );

  return (
    <PageLayout>
      <Box>
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
                <Typography variant={'overline'}>Ingredients:</Typography>
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
            <CardMedia
              component="iframe"
              height="540"
              src={videoURL}
            ></CardMedia>
          </Card>
        </Box>
      </Box>
    </PageLayout>
  );
};

export default MealPage;
