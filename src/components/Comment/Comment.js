
import { Box, IconButton, Typography } from '@material-ui/core'
import { deleteComment} from '../../actions';
import DeleteIcon from '@material-ui/icons/Delete';
import { makeStyles } from '@material-ui/core';
import { useDispatch, useSelector } from 'react-redux';


const useStyles = makeStyles((theme) => ({
    commentBody: {
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        margin: '5px 0',
        border: '1px solid black',
        borderRadius: '5px'
    },
    commentTextBody: {
        padding: '0 5px'
    },
    text: {
        display: 'flex',
        alignItems: 'center',
    },
    dateText: {
        marginLeft: '16px',
        fontSize: '12px',
        color: 'grey',
    }
}))
export const Comment = ({review, user, updateReview, forMovie}) => {
    const classes = useStyles()
    const dispatch = useDispatch()
    const sessionUser = useSelector((state) => state.user)

    const onClickDeleteComment = () => {
        dispatch(deleteComment(review.id))
        updateReview()
    }

    return (
        <Box className={classes.commentBody} >
            <Box className={classes.commentTextBody}>
                <Typography className={classes.text}>
                    {review.author.firstName} {review.author.lastName}
                    <Typography variant='span' className={classes.dateText}> {review.date}</Typography>
                    {forMovie ? <Typography variant='span' className={classes.dateText}> for movie {review.movieName}</Typography> : ''}
                </Typography>
                <Typography variant='h6'>{review.text}</Typography>
            </Box>
            {user ? (review.author.id === sessionUser?.id ? 
            <IconButton onClick={onClickDeleteComment} color='secondary'>
                <DeleteIcon />
            </IconButton> : '') : ''
            }
        </Box>
    )
}