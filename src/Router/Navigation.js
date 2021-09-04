
import React, { useState } from "react";
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link,
} from "react-router-dom";

import { AppBar, Box, Container, Button, Toolbar, Typography } from "@material-ui/core";
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import { makeStyles } from '@material-ui/core/styles';

import { Homepage } from "../pages/Homepage/Homepage";
import { MovieList } from "../pages/MovieList/MovieList.js";
import { Movie } from "../pages/Movie/Movie";
import { AboutUs } from "../pages/AboutUs/AboutUs";
import { Profile } from "../pages/Profile/Propfile";
import { LoginDialog } from "../components/LoginDialog/LoginDialog";
import { useDispatch, useSelector } from "react-redux";
import { ACTIONS_TYPES } from "../constants/constants";
import { RegDialog } from "../components/RegDialog/RegDialog";


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
    },
    button: {
        wordWrap: 'normal',
        margin: '0 1rem'
    }
})
)

export const Navigation = () => {
    const classes = useStyles()
    const dispatch = useDispatch()
    const user = useSelector((state) => state.user)

    const onClickOpenLogin = () => {
        dispatch({type: ACTIONS_TYPES.OPEN_DIALOG_LOGIN})
    }
   
    const onClickOpenRegistration = () => {
        dispatch({type: ACTIONS_TYPES.OPEN_DIALOG_REGISTRATION})
    }
    const onClickLogout = () => {
        dispatch({type: ACTIONS_TYPES.LOGOUT_USER})
        sessionStorage.removeItem('jwt')
        sessionStorage.removeItem('user')
    }
   


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
                                <Link to='/about' className={classes.link}> About Us</Link>
                            </Box>
                        </Container>
                        {user ? 
                        (<>
                            {console.log(user)}
                            <Typography>{user.nickname}</Typography>
                            <Button color="primary" onClick={onClickLogout} className={classes.button}>Log Out</Button>
                        </>
                        ) :
                        (<>
                            <Button color="primary" onClick={onClickOpenLogin} className={classes.button}>Log In</Button>
                            <Button color="secondary" onClick={onClickOpenRegistration} className={classes.button}>Sign In</Button>
                        </>)
                        }
                        
                        <LoginDialog />
                        <RegDialog />
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

                <Route path="/about">
                    <AboutUs />
                </Route>

                <Route path="/profile">
                    <Profile 
                        onClickOpenLogin={onClickOpenLogin}
                        onClickOpenRegistration={onClickOpenRegistration}
                    />
                </Route>

                <Route path="/">
                    <Homepage />
                </Route>

            </Switch >
        </Router >
    )
}
