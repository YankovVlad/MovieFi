import './style.css'
import { useStyle } from './style.js'
import { categories } from './data'

import React from 'react'
import { Container, Box, Typography, TextField, Grid, Paper } from '@material-ui/core';
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
            <Container className={classes.container}>
                <img src={'https://cdn.pixabay.com/photo/2017/01/18/21/49/singapore-1990959_960_720.jpg'}
                    alt={'poster'} className={classes.box__img} />
                <Box className={classes.box}>
                    <Typography variant='h2' className={classes.box__title}>
                        LETS FIND YOUR MOVIE
                    </Typography>

                </Box>
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