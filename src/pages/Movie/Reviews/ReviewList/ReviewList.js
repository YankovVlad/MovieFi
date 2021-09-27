import React from "react"
import { useSelector, useDispatch } from "react-redux"

import { Loader } from "../../../../components/Loader/Loader"
import { Comment } from "../../../../components/Comment/Comment"

import { getReview } from "../../../../actions"

export const ReviwList = ({user, id}) => {
    const dispatch = useDispatch()
    const reviews = useSelector((state) => state.reviews)
    const loadingElement = useSelector((state) => state.loadingElement)


    const updateReview = () => {
        dispatch(getReview(id))
    }

    return (
        <>
            {loadingElement ? 
                <Loader /> 
                :
                reviews.map((review) => {
                return (
                    <Comment key={review.id} review={review} user={user} updateReview={updateReview}/>
                )
                })
            }
          </>
    )
}