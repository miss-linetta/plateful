import {
  Button,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Link,
  Typography,
} from '@mui/material';
import Chip from '@mui/material/Chip';
import Stack from '@mui/material/Stack';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import React, { FC } from 'react';
import * as style from './MealCard.styles';
import { GetMealDTO } from '@/types/service';
import router from 'next/router';

export type CardProps = GetMealDTO;

const MealCard: FC<CardProps> = (meal) => {
  function handleClick(e) {
    e.preventDefault();
    router.push(`/Meal?idMeal=${meal.idMeal}`);
  }

  return (
    <Link href={`/${meal.idMeal}`} onClick={handleClick}>
      <Card sx={style.container}>
        <CardMedia
          component="img"
          height="194"
          image={meal.strMealThumb}
          alt={meal.strMeal}
        />
        <CardContent sx={style.info}>
          <Stack direction="row" spacing={1}>
            <Chip label={meal.strCategory} color="primary" />
            <Chip label={meal.strArea} color="success" />
          </Stack>
          <Typography variant="h5">{meal.strMeal}</Typography>
          <Typography variant="caption" color="text.primary">
            20 ingridients
          </Typography>
        </CardContent>
        <CardActions sx={style.button}>
          <Button variant="outlined" href={`/${meal.idMeal}`}>
            <ArrowForwardIcon />
          </Button>
        </CardActions>
      </Card>
    </Link>
  );
};

export default MealCard;
