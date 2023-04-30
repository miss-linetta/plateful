import { SxProps, Theme, useMediaQuery } from '@mui/material';

export const container: SxProps<Theme> = {
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  paddingTop: '40px',
  paddingLeft: '80px',
  paddingRight: '80px',
  position: 'relative',
  a: {
    textDecoration: 'none',
    color: 'black',
    h1: {
      textAlign: 'center',
    },
  },
};

export const actions: SxProps<Theme> = {
  position: 'relative',
  right: '0',
};
