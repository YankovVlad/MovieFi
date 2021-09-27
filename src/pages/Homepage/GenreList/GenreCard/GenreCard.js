
import React from 'react';
import { Typography, Grid, Paper } from '@material-ui/core';
import {
    BrowserRouter as Router,
    Link,
} from "react-router-dom";

export const GenreCard = ({item}) => {

    return (
        <Grid item xs={12} sm={6} md={4}  key={item.id}>
            <Link to={`/category/${item.label}`} style={{ textDecoration: 'none' }}>
                <Paper
                sx={{
                    position: 'relative',
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                    height: '15rem',
                    color: 'white',
                    background: `url(${item.posterUrl}) center/cover`,
                    transition: 'transform 0.2s ease-in',
                    '&:hover': {
                        cursor: 'pointer',
                        transform: 'translate(-5px, -5px)'
                    }
                }}
                >
                    <Typography 
                        variant='h4' 
                        sx={{ 
                            zIndex: '200', 
                            fontFamily: 'Montserrat, sans-serif',
                            '@media (max-width:900px)': {
                                fontSize: '2.5rem',
                            },
                            '@media (max-width:700px)': {
                                fontSize: '2rem',
                            },
                            
                            }}>
                        {item.label}
                    </Typography>
                    <div className={'backdrop-wrap'} />
                </Paper>
            </Link>
        </Grid>
    )
}