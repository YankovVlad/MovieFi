import { Container, makeStyles, Typography, Box, Button, IconButton } from "@material-ui/core";
import EditIcon from '@material-ui/icons/Edit';
import React from "react";
import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Comment } from '../../components/Comment/Comment'
import { getUserReviews, openChangeDialog } from "../../actions";
import { ChangeDialog } from "../../components/ChangeDialog/ChangeDialog";


const useStyles = makeStyles((theme) => ({
   boxElement: {
       padding:'1rem',
       margin: '1rem 0',
       border: '1px solid black',
       borderRadius: '10px',
   },
   titleBody: {
       display: 'flex',
       alignItems: 'center',
       marginTop: '1rem'
   },
}))

export const Profile = (props) => {
    const dispatch = useDispatch()
    const classes = useStyles()
    const user = useSelector((state) => state.user)
    const reviews = useSelector((state) => state.userReviews)
    const isOpen = useSelector((state) => state.changeDialog)

    const updateReview = () => {
        setTimeout(() => {
            dispatch(getUserReviews(user.id))
        }, 300)
    }
    const onClickOpenChangeDialog = () => {
        dispatch(openChangeDialog())
    }

    useEffect(() => {
        dispatch(getUserReviews(user?.id))
    }, [dispatch, user])

    return (
        <Container>
            {user ? 
            <>
            <Box >
                <Box className={classes.titleBody}>
                    <Typography variant='h5' className={classes.title}>Personal data</Typography>
                    <IconButton onClick={onClickOpenChangeDialog}>
                        <EditIcon/>
                    </IconButton>
                </Box>
                
                <Box className={classes.boxElement}>
                    <Typography className={classes.text}><span style={{color: 'red'}}>First name: </span> {user.firstName}</Typography>
                    <Typography className={classes.text}><span style={{color: 'red'}}>Last name: </span> {user.lastName}</Typography>
                    <Typography className={classes.text}><span style={{color: 'red'}}>Email: </span> {user.email}</Typography>
                    <Typography className={classes.text}><span style={{color: 'red'}}>Age: </span> {user.age}</Typography>
                    <Typography className={classes.text}><span style={{color: 'red'}}>Favorite genres: </span> {user.favoriteGenres}</Typography>
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
            <ChangeDialog isOpen={isOpen}/>
            </>
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