import React from 'react'

import { useEffect} from 'react'
import { useParams } from 'react-router'
import { useSelector, useDispatch } from 'react-redux'

import { Box } from '@material-ui/core'

import { getReview } from '../../../actions'
import { ReviewCreator } from './ReviewCreator/ReviewCreator'
import { ReviwList } from './ReviewList/ReviewList';
import { Title } from '../../../components/Title/Title';

export const Reviews = ({movieDetails}) => {
    const { id } = useParams()
    const dispatch = useDispatch()
    const user = useSelector((state) => state.user)

    useEffect(() => {
        dispatch(getReview(id))
    }, [dispatch, id])

    return (
        <Box>
            <Title variant='h4'>Reviews</Title>
              <ReviewCreator user={user} id={id} movieDetails={movieDetails}/>
              <ReviwList user={user} id={id}/>
            </Box>
    )
}