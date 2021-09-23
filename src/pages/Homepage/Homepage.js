import './style.css'
import { useStyle } from './style.js'
import { categories } from './data'

import React from 'react'
import { Container, Box, Typography, TextField, Grid, Paper } from '@material-ui/core';
import { AutocompleteSearch } from '../../components/AutocompleteSearch/AutocompleteSearch';
import { BrowserRouter as Router, Link } from "react-router-dom";



export const Homepage = () => {
    const classes = useStyle()

    const getCategories = (categories) => {
        return categories.map(item => {
            return (
                <Grid item xs={4} key={item.id}>
                    <Link to={`/category/${item.label}`} style={{ textDecoration: 'none' }}>
                        <Paper className={classes.card} style={{ background: `url(${item.posterUrl}) center/cover` }}>
                            <Typography variant='h4' className={classes.cardText}>
                                {item.label}
                            </Typography>
                            <div className={'backdrop-wrap'} />
                        </Paper>
                    </Link>

                </Grid>

            )
        })
    }

    return (
        <div className={classes.root}>
            <Container className={classes.container} >
                <img src={'https://www.teahub.io/photos/full/299-2993546_marvel-deadpool-movie-wallpaper-deadpool-png.jpg'}
                    alt={'poster'} className={classes.box__img} />
                    {/* <img src={'https://www.pixel4k.com/wp-content/uploads/2018/10/venom-and-carnage-artwork_1538785901.jpg'}
                    alt={'poster'} className={classes.box__img} /> */}
                <Box className={classes.box}>
                    <Typography variant='h2' className={classes.box__title}>
                        LETS FIND YOUR MOVIE
                    </Typography>

                </Box>
                <AutocompleteSearch />
            </Container>
            <Container className={classes.container}>

                <Typography variant='h4' className={classes.subtitle}>
                    Categories
                </Typography>

                <Grid container spacing={1}>

                    {getCategories(categories)}

                </Grid>
            </Container>
        </div >
    )
}