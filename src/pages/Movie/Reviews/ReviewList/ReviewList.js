import React from "react"
import { useSelector } from "react-redux"

import { Loader } from "../../../../components/Loader/Loader"
import { Comment } from "../../../../components/Comment/Comment"

export const ReviwList = ({user, id}) => {
    const reviews = useSelector((state) => state.reviews)
    const loadingElement = useSelector((state) => state.loadingElement)

    return (
        <>
            {loadingElement ? 
                <Loader /> 
                :
                reviews.map((review) => {
                return (
                    <Comment key={review.id} review={review} user={user} />
                )
                })
            }
          </>
    )
}