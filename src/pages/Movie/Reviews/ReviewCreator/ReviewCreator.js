import React from "react"
import moment from 'moment'

import { useState } from 'react'
import { useDispatch } from 'react-redux'

import { TextField, Button } from '@material-ui/core'
import { createReview, getReview } from '../../../../actions'

export const ReviewCreator = ({user, id, movieDetails}) => {

    const dispatch = useDispatch()
    const [textReview, setTextReview] = useState('')

    const onChangeReview = (event) => {
        setTextReview(event.target.value)
    }
    const onClickButtonPost = () => {
        dispatch(createReview(id, textReview, moment().format('LLL'), user.firstName, user.lastName, user.id, movieDetails.Title))
        setTextReview('')
        setTimeout(() => {
          dispatch(getReview(id))
        },300)
        
    }

    return (
        <>
        {user ?
            <>
              <TextField 
                id="standard-basic" 
                label="Write your review" 
                multiline 
                row={3} 
                fullWidth
                onChange={onChangeReview}
                value={textReview}
                margin='dense'
              />
            
              <Button 
                sx={{
                    margin: '16px 0', 
                    fontFamily: 'Montserrat, sans-serif'
                  }} 
                  variant="contained" 
                  color="error" 
                  onClick={onClickButtonPost}>
                Write it! 
              </Button>
            </> : ''
            }
            </>
    )
}