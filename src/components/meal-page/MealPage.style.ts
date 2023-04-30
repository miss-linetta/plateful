import { SxProps, Theme } from "@mui/material";

export const container: SxProps<Theme> = {
    paddingLeft: '80px',
    paddingRight: '80px',
    marginTop: '60px',
    marginBottom: '80px',
    '@media(max-width: 1024px)' : {
        paddingLeft: '40px',
        paddingRight: '40px',
    } 
}

export const title: SxProps<Theme> = {
    paddingTop: '20px',
    paddingBottom: '20px',
    
}

export const mainInfo: SxProps<Theme> = {
    display: 'flex',
    flexGrow: '1',
    gap: '30px',
    justifyContent: 'space-between',
    '@media(max-width: 850px)' : {
        flexDirection: 'column-reverse'
      }
}

export const rightContainer: SxProps<Theme> = {
    width: '40%',
    boxShadow: 'none',
    height: '40%',
    '@media(max-width: 850px)' : {
        width: '100%',
    },
    img: {
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

export const noData: SxProps<Theme> = {
    width: '100%',
    height: '100vh',
    display: 'flex',
    alignContent: 'center',
    alignItems: 'center',
    justifyContent: 'center',
}
