import { SxProps, Theme } from "@mui/material";
import { relative } from "path";

export const container: SxProps<Theme> = {
    width: '300px',
    height: '360px',
    h5: {
        textDecoration: 'none' 
    }
}

export const info: SxProps<Theme> = {
    display: 'flex',
    flexDirection: 'column',
    gap:'8px',
}

export const tags: SxProps<Theme> = {
    display: 'flex',
    justifyContent: 'space-between',
    div: {
        marginRight: '10px' 
    },
    button: {
        padding: '0',
        margin: '0',
        justifyContent: 'flex-end',
        color: 'black',
    }
}
