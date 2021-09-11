import { Container, makeStyles, Typography, Box, Button } from "@material-ui/core";
import React from "react";
import { useSelector } from "react-redux";

const useStyles = makeStyles((theme) => ({
    text: {
        
    }
}))

export const Profile = (props) => {
    const classes = useStyles()
    const user = useSelector((state) => state.user)

    return(
        <Container>
            {user ? 
            <Box>
                <Typography className={classes.text}>First name: {user.firstName}</Typography>
                <Typography className={classes.text}>Last name: {user.lastName}</Typography>
                <Typography className={classes.text}>Email: {user.email}</Typography>
                <Typography className={classes.text}>Age: {user.age}</Typography>
            </Box>
            : 
            <Box>
                <Typography className={classes.text}>You are not authorized. Click for authorization or registration</Typography>
                <Button color="primary" onClick={props.onClickOpenLogin} className={classes.button}>Log In</Button>
                <Button color="secondary" onClick={props.onClickOpenRegistration} className={classes.button}>Sign In</Button>
            </Box>
            }
        </Container>
    )
}