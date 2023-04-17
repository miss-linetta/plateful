import PageLayout from '@/components/common/page-layout/PageLayout';
import MealList from '@/components/main-page/meal-list/MealList';
import Pagination from '@mui/material/Pagination';
import Stack from '@mui/material/Stack';
import * as styles from './MainPage.styles';

const MainPage = () => {
  return (
    <PageLayout>
      <MealList />
      <Stack sx={styles.pagination} spacing={2}>
        <Pagination count={10} color="primary" />
      </Stack>
    </PageLayout>
  );
};

export default MainPage;
