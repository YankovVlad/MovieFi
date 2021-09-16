import { Container, makeStyles, Typography, Box, Button } from "@material-ui/core";
import React from "react";
import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Comment } from '../../components/Comment/Comment'
import { getUserReviews } from "../../actions";

const useStyles = makeStyles((theme) => ({
   boxElement: {
       padding:'1rem',
       margin: '1rem 0',
       border: '1px solid black',
       borderRadius: '10px'
   },
   title: {
       margin: '1rem 0'
   }
}))

export const Profile = (props) => {
    const dispatch = useDispatch()
    const classes = useStyles()
    const user = useSelector((state) => state.user)
    const reviews = useSelector((state) => state.userReviews)

    const updateReview = () => {
        setTimeout(() => {
            dispatch(getUserReviews(user.id))
        }, 300)
    }

    useEffect(() => {
        dispatch(getUserReviews(user?.id))
    }, [dispatch, user])

    return (
        <Container>
            {user ? 
            <Box >
                <Typography variant='h5' className={classes.title}>Personal data</Typography>
                <Box className={classes.boxElement}>
                    <Typography className={classes.text}>First name: {user.firstName}</Typography>
                    <Typography className={classes.text}>Last name: {user.lastName}</Typography>
                    <Typography className={classes.text}>Email: {user.email}</Typography>
                    <Typography className={classes.text}>Age: {user.age}</Typography>
                </Box>

                <Typography variant='h5' className={classes.title}>Your reviews</Typography>
                <Box className={classes.boxElement}>
                    {reviews.map((review) => {
                        return (
                            <Comment key={review.id} review={review} user={user} updateReview={updateReview} forMovie/>
                        )
                    })}
                </Box>
               
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