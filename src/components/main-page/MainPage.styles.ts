import { SxProps, Theme } from "@mui/material";

export const pagination: SxProps<Theme> = {
    marginBottom: '40px',
    ul: {
        width: '100%',
        display: 'flex',
        justifyContent: 'center',
    }
  };

export const container: SxProps<Theme> = {
  width: '100%',
  display: 'flex',
  flexWrap: 'wrap',
  alignItems: 'center',
  justifyContent: 'center',
  gap: '25px',
  paddingTop: '40px',
  paddingBottom: '80px',
  paddingLeft: '80px',
  paddingRight: '80px',
  '@media(max-width: 1024px)' : {
    paddingLeft: '40px',
    paddingRight: '40px',
  }

}

export const noData: SxProps<Theme> = {
  width: '100%',
  height: '100vh',
  display: 'flex',
  alignContent: 'center',
  alignItems: 'center',
  justifyContent: 'center',
}

