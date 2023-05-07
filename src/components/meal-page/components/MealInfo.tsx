import { Box, Chip, List, ListItem, Stack, Typography } from '@mui/material';
import React from 'react';
import * as style from './MealInfo.style';
import { ingredientList } from './utils/ingredientList';

const MealInfo = ({ meal }: any) => {
  const ingredients = ingredientList(meal);

  return (
    <Box>
      <Stack direction="row" spacing={1}>
        <Chip label={meal.strCategory} color="primary" />
        <Chip label={meal.strArea} color="success" />
      </Stack>
      <Typography sx={style.title} variant="h2">
        {meal.strMeal}
      </Typography>
      <Box>
        <Typography variant="overline">Ingredients:</Typography>
        <List>
          {ingredients.map((item: any, idx: number) => {
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
  );
};

export default MealInfo;
