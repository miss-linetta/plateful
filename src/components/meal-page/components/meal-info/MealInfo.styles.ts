import { SxProps, Theme } from "@mui/material";

export const container: SxProps<Theme> = {
    paddingLeft: '40px', 
    paddingRight: '40px', 
    marginTop: '60px',
    marginBottom: '80px', 
}

export const title: SxProps<Theme> = {
    paddingTop: '20px',
    paddingBottom: '20px',
    
}

export const mainInfo: SxProps<Theme> = {
    display: 'flex',
    flexGrow: '1',
    gap: '30px',
    justifyContent: 'space-between'
}

export const rightContainer: SxProps<Theme> = {
    width: '40%',
    boxShadow: 'none',
    height: '40%',
    img: {
        paddingTop: '60px',
        borderRadius: '5px',
        border: 'none',
    }
}

export const instructions: SxProps<Theme> = {
    marginTop: '40px'
}

export const video: SxProps<Theme> = {
    marginTop: '60px',
}
