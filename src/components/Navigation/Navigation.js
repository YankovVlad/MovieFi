import React from "react";
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link,
} from "react-router-dom";
import { makeStyles } from "@material-ui/styles";
import { useDispatch } from "react-redux";
import { createTheme, ThemeProvider } from '@material-ui/core/styles';

import { AppBar, Container, Box, Toolbar, useMediaQuery} from "@material-ui/core";
import { LoginDialog } from "../LoginDialog/LoginDialog";
import { RegDialog } from "../RegDialog/RegDialog";
import { UserBlock } from "./UserBlock/UserBlock";
import { Homepage } from "../../pages/Homepage/Homepage";
import { MovieList } from "../../pages/MovieList/MovieList.js";
import { Movie } from "../../pages/Movie/Movie";
import { AboutUs } from "../../pages/AboutUs/AboutUs"
import { Profile } from "../../pages/Profile/Profile";
import { BurgerMenu } from "./BurgerMenu/BurgerMenu";
import { MainTitle } from "./MainTitle/MainTitle";

import { openLogin, openRegistration} from "../../actions";

const theme = createTheme();
const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
        fontFamily: 'Montserrat, sans-serif'
    },
    nav: {
        display: 'flex',
        maxWidth: '1440px',
        margin: '0 auto',
    },
    toolbar: {
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center'
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
})
)

export const Navigation = () => {
    

    const classes = useStyles()
    const dispatch = useDispatch()
    const matches = useMediaQuery(theme.breakpoints.down('sm'))

    const onClickOpenLogin = () => {
        dispatch(openLogin())
    }
   
    const onClickOpenRegistration = () => {
        dispatch(openRegistration())
    }

    return (
    <ThemeProvider theme={theme}>
        <Router>
            <div className={classes.root} >
                <AppBar position='relative' className={classes.nav} sx={{background:'#000012'}}>
                    <Toolbar className={classes.toolbar}>

                        <MainTitle />
                        {matches ? 
                        <BurgerMenu 
                            onClickOpenLogin={onClickOpenLogin}
                            onClickOpenRegistration={onClickOpenRegistration}
                            />
                        :
                        <>
                            <Container>
                                <Box className={classes.box}>
                                    <Link to='/' className={classes.link}> Home </Link>
                                    <Link to='/profile' className={classes.link}> Profile </Link>
                                    <Link to='/about' className={classes.link}> About Us</Link>
                                </Box>
                            </Container>

                            <UserBlock 
                            onClickOpenLogin={onClickOpenLogin}
                            onClickOpenRegistration={onClickOpenRegistration}
                            />
                        </>
                        }
                        <LoginDialog />
                        <RegDialog />
                    </Toolbar>
                </AppBar>
            
                < Switch >
                    <Route path="/category/:genre">
                        <MovieList />
                    </Route>

                    <Route path="/search/:title">
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
            </div>
        </Router>
    </ThemeProvider>   
    )
}
