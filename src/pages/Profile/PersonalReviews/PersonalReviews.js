import { useDispatch, useSelector } from 'react-redux'

import { Box } from "@mui/system"
import { Title } from "../../../components/Title/Title"
import { Comment } from '../../../components/Comment/Comment'

import { getUserReviews } from '../../../actions'


export const PersonalReviews = ({user}) => {
    const dispatch = useDispatch()
    const userReviews = useSelector((state) => state.userReviews)

    const updateReview = () => {
        setTimeout(() => {
            dispatch(getUserReviews(user.id))
        }, 300)
    }
    return (
        <>
            <Title variant='h5' >Your reviews</Title>
            <Box sx={{
                padding:'1rem',
                margin: '1rem 0',
                border: '1px solid black',
                borderRadius: '10px',
            }}>
                {userReviews.map((review) => {
                    return (
                        <Comment key={review.id} review={review} user={user} updateReview={updateReview} forMovie/>
                    )
                })}
            </Box>
        </>
    )
}