import { SxProps, Theme } from "@mui/material";

export const pagination: SxProps<Theme> = {
    marginBottom: '40px',
    ul: {
        width: '100%',
        display: 'flex',
        justifyItems: 'center'
    }
  };

  export const container: SxProps<Theme> = {
    width: '100%',
    display: 'flex',
    flexWrap: 'wrap',
    alignItems: 'center',
    justifyContent: 'center',
    gap: '20px',
    padding: '40px'
}