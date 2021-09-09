import { Container, Typography, makeStyles } from '@material-ui/core'
import React from 'react'

const useStyles = makeStyles((theme) => ({
    text: {
        margin: '2rem 0',
        fontFamily: 'Montserrat, sans-serif',
    },
}))


export const AboutUs = () => {

    const classes = useStyles()

    return(
        <Container>
            <Typography className={classes.text}>
                Hi, my dear friend. This is my finale project in Teach Me Skills school.
            </Typography>
        </Container>
    )
}