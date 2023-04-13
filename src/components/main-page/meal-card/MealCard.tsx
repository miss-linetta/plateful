import MealService from '@/services/meals.service';
import {
  Box,
  Button,
  Card,
  CardActions,
  CardContent,
  CardHeader,
  CardMedia,
  CircularProgress,
  IconButton,
  Typography,
} from '@mui/material';
import Chip from '@mui/material/Chip';
import Stack from '@mui/material/Stack';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import React from 'react';
import { useQuery } from 'react-query';
import * as styles from './MealCard.styles';

const MealCard = () => {
  // const { data, isLoading, isError } = useQuery(
  //     queryKey: 'meals',
  //     MealService.getRandomMeal,
  //     option: {
  //         refetchOnWindowFocus: false,
  //     }
  // )

  // if (isLoading) return <CircularProgress />

  // if (isError) return <Typography>Error!</Typography>
  return (
    // <Card>
    //   {/* {data?.meals.map((meal) => {
    //     return <Typography variant="h6">{meal.strMeal}</Typography>;
    //   })} */}
    //   {/* <CardMedia component="img" height="194"></CardMedia> */}
    // </Card>

    <Card sx={styles.container}>
      <CardMedia
        component="img"
        height="194"
        image="https://www.themealdb.com/images/media/meals/1529443236.jpg"
        alt="Paella dish"
      />
      <CardContent sx={styles.info}>
        <Stack direction="row" spacing={1}>
          <Chip label="Beef" color="primary" />
          <Chip label="Chenese" color="success" />
        </Stack>
        <Typography variant="h5">Szechuan Beef</Typography>
        <Typography variant="caption" color="text.primary">
          20 ingridients
        </Typography>
      </CardContent>
      <CardActions sx={styles.button}>
        <Button variant="outlined" href="/meal-page">
          <ArrowForwardIcon />
        </Button>
      </CardActions>
    </Card>
  );
};

export default MealCard;
