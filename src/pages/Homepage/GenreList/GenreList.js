import { categories } from '../data'
import './style.css'
import React from 'react'
import { makeStyles } from '@material-ui/styles';

import { Container, Typography, Grid } from '@material-ui/core';
import { GenreCard } from './GenreCard/GenreCard';

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
}))

export const GenreList = () => {
    const classes = useStyle()

    const getCategories = (categories) => {
        return categories.map(item => {
            return ( 
                <GenreCard key={item.id} item={item}/>
            )
        })
    }

    return (
        <Container className={classes.container}>
            <Typography 
                variant='h4'
                sx={{
                    margin: '2rem 0 !important',
                    color:'black',
                    textShadow: '2px 2px 5px grey',
                    fontFamily: 'Montserrat, sans-serif',
                    }}>
                Categories
            </Typography>

            <Grid container spacing={1}>
                {getCategories(categories)}
            </Grid>
    </Container>
    )
}