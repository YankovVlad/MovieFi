
import React from "react";
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link,
} from "react-router-dom";

import { AppBar, Box, Container, Toolbar, Typography } from "@material-ui/core";
import { makeStyles } from '@material-ui/core/styles';

import { Homepage } from "../pages/Homepage/Homepage";
import { MovieList } from "../pages/MovieList/MovieList.js";
import { Movie } from "../pages/Movie/Movie";

const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
        fontFamily: 'Montserrat, sans-serif'
    },
    title: {
        fontFamily: 'Montserrat, sans-serif'
    },
    titleOtherFont: {
        fontFamily: 'Dancing Script, cursive',
        color: 'red'
    },
    nav: {
        maxWidth: '1440px',
        margin: '0 auto',
        background: '#000012'
    },
    box: {
        display: 'flex',
        justifyContent: 'center',
        gap: '2%'
    },
    link: {
        padding: '5px 10px',
        border: '2px solid #000012',
        color: '#ffffff',
        textDecoration: 'none',
        transition: 'border 0.3s ease-in, color 0.3s ease-in',
        '&:hover': {
            color: 'red',
            borderBottom: '2px solid red',
        }
    }
})
)

export const Navigation = () => {
    const classes = useStyles()


    return (
        <Router>
            <div className={classes.root}>
                <AppBar position='static' className={classes.nav}>
                    <Toolbar>
                        <Typography variant='h5' className={classes.title}>
                            Movie
                        </Typography>
                        <Typography variant='h4' className={classes.titleOtherFont}>
                            Find
                        </Typography>
                        <Container>
                            <Box className={classes.box}>
                                <Link to='/' className={classes.link}> Home </Link>
                                <Link to='/profile' className={classes.link}> Profile </Link>
                                <Link to='/about' className={classes.link}> About </Link>
                            </Box>
                        </Container>

                    </Toolbar>
                </AppBar>
            </div>
            < Switch >
                <Route path="/category/:genre">
                    <MovieList />
                </Route>

                <Route path="/movie/:id">
                    <Movie />
                </Route>

                <Route path="/">
                    <Homepage />
                </Route>

            </Switch >
        </Router >
    )
}
