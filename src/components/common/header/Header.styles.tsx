import { SxProps, Theme } from '@mui/material';

export const container: SxProps<Theme> = {
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
  paddingTop: '20px',
  paddingLeft: '40px',
  paddingRight: '40px',
  position: 'relative',
  //   h1: {
  //     width: '50%',
  //     textAlign: 'center',
  //     transform: 'translateX(50%)',
  //   },
  //   div: {
  //     width: '50%',
  //   },
};

export const actions: SxProps<Theme> = {
  position: 'relative',
  right: '0',
};
