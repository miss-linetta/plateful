import {
  Box,
  Card,
  CardContent,
  CardMedia,
  Link,
  Typography,
} from '@mui/material';
import Chip from '@mui/material/Chip';
import Stack from '@mui/material/Stack';
import React, { FC } from 'react';
import * as style from './MealCard.styles';
import { GetMealDTO } from '@/types/service';
import router from 'next/router';

export type CardProps = GetMealDTO;

const MealCard: FC<CardProps> = (meal) => {
  // const [isFavorite, setIsFavorite] = useState(false);
  // const [favorites, setFavorites] = useState([]);

  const handleClick = (e: any) => {
    e.preventDefault();
    router.push(`/Meal?idMeal=${meal.idMeal}`);
  };

  return (
    <Link href={`/${meal.idMeal}`} onClick={handleClick}>
      <Card key={meal.idMeal} sx={style.container}>
        <CardMedia
          component="img"
          height="194"
          image={meal.strMealThumb}
          alt={meal.strMeal}
        />
        <CardContent sx={style.info}>
          <Stack sx={style.tags} direction="row" spacing={1}>
            <Box>
              <Chip label={meal.strCategory} color="primary" />
              <Chip label={meal.strArea} color="success" />
            </Box>
            {/* <IconButton
              size="large"
              type="button"
              onClick={favoriteClickHandler}
            >
              {!isFavorite ? (
                <FavoriteBorderIcon fontSize="inherit" />
              ) : (
                <FavoriteOutlinedIcon
                  fontSize="inherit"
                  sx={{ color: '#ba2b2b' }}
                />
              )}
            </IconButton> */}
          </Stack>
          <Typography variant="h5">{meal.strMeal}</Typography>
          <Typography variant="caption" color="text.primary">
            20 ingridients
          </Typography>
        </CardContent>
      </Card>
    </Link>
  );
};

export default MealCard;
