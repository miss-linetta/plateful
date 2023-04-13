import { SxProps, Theme } from "@mui/material";

export const container: SxProps<Theme> = {
    width: '250px',
}

export const button: SxProps<Theme> = {
    justifyContent: 'flex-end'
}

export const info: SxProps<Theme> = {
    display: 'flex',
    flexDirection: 'column',
    gap:'8px'  
}
