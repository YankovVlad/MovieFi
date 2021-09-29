import { makeStyles } from '@material-ui/styles';
import { styled } from '@material-ui/styles';
import { useDispatch, useSelector } from 'react-redux';

import { Box, IconButton, Typography } from '@material-ui/core'
import { Text } from '../Text/Text';
import { Title } from '../Title/Title';
import { deleteComment} from '../../actions';
import DeleteIcon from '@material-ui/icons/Delete';
import { useParams } from 'react-router';


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
        padding: '0 1rem'
    },
    
}))

const DateText = styled(Typography)(({theme}) => ({
    color: 'grey',
    fontFamily: 'Montserrat, sans-serif'
}))

export const Comment = ({review, user, updateReview, forMovie}) => {
    const classes = useStyles()
    const dispatch = useDispatch()
    const movieId = useParams()
    const sessionUser = useSelector((state) => state.user)

    const onClickDeleteComment = () => {
        dispatch(deleteComment(review.id, movieId))
        updateReview()
    }

    return (
        <Box className={classes.commentBody} >
            <Box className={classes.commentTextBody}>
                <Text>
                    {review.author.firstName} {review.author.lastName}
                    <DateText style={{margin: '0 1rem'}} variant='subtitle2' > {review.date}</DateText>
                    {forMovie ? <DateText variant='subtitle2'> for movie {review.movieName}</DateText> : ''}
                </Text>
                <Text variant='h6'>{review.text}</Text>
            </Box>
            {user ? (review.author.id === sessionUser?.id ? 
            <IconButton onClick={onClickDeleteComment} color='error'>
                <DeleteIcon />
            </IconButton> : '') : ''
            }
        </Box>
    )
}