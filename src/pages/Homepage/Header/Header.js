import React from 'react'
import { makeStyles } from '@material-ui/styles';
import { Container, Box, Typography } from '@material-ui/core'; 


const useStyle = makeStyles((theme) => ({
    container: {
        position: 'relative',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        maxWidth: '1440px',
        height: '50vw',
        marginBottom: '40px',

    },
    box: {

        display: 'flex',
        alignItems: 'center',
        justifyContent: 'flex-start',
        flexDirection: 'column',
        height: '450px',
        zIndex: '100'

    },
    boxImage: {
        position: 'absolute',
        top: '1rem',
        left: '0',
        width: '100%',
        
    },
    
}))

export const Header = () => {
    const classes = useStyle()

    return (
        <Container className={classes.container}>
                <img 
                    src={'https://www.teahub.io/photos/full/299-2993546_marvel-deadpool-movie-wallpaper-deadpool-png.jpg'}
                    alt={'poster'} 
                    className={classes.boxImage}
                    />
                <Box className={classes.box}>
                    <Typography 
                        variant='h2'
                        sx={{ 
                            width: '20%',
                            marginTop: '3vw',
                            color:'black',
                            fontFamily: 'Montserrat, sans-serif',
                            textShadow: '5px 5px 7px grey',
                            zIndex: '200',
                            '@media (max-width:900px)': {
                                fontSize: '3rem',
                            },
                            '@media (max-width:700px)': {
                                fontSize: '2rem',
                            },
                            '@media (max-width:400px)': {
                                fontSize: '1.5rem',
                            },
                            }}>
                        LETS FIND YOUR MOVIE
                    </Typography>
                </Box>
            </Container>
    )
}