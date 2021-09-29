import React from "react"
import moment from 'moment'

import { useState } from 'react'
import { useDispatch } from 'react-redux'

import { TextField, Button, Tooltip } from '@material-ui/core'
import { createReview } from '../../../../actions'
import Zoom from '@mui/material/Zoom'

export const ReviewCreator = ({user, id, movieDetails}) => {

    const dispatch = useDispatch()
    const [textReview, setTextReview] = useState('')
    const [openToolTip, setOpenTooltip] = useState(false)

    const onChangeReview = (event) => {
        setTextReview(event.target.value)
    }
    const onClickButtonPost = () => {
        if (textReview !== '') {
          dispatch(createReview(id, textReview, moment().format('LLL'), user.firstName, user.lastName, user.id, movieDetails.Title))
          setTextReview('')
        } else {
          setOpenTooltip(true)
          setTimeout(() => {
            setOpenTooltip(false)
          }, 3000)
        }
       
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
              <Tooltip
                TransitionComponent={Zoom}
                PopperProps={{
                  disablePortal: true,
                }}
                // onClose={handleTooltipClose}
                open={openToolTip}
                disableFocusListener
                disableHoverListener
                disableTouchListener
                title="You can't write empty review"
              >
                <Button 
                  sx={{
                      margin: '16px 0', 
                      fontFamily: 'Montserrat, sans-serif',
                      transition: 'all 0.3 ease'
                    }} 
                    variant="contained" 
                    color={openToolTip ? 'error' : 'primary'} 
                    onClick={onClickButtonPost}>
                  Write it! 
                </Button>
              </Tooltip>
              
            </> : ''
            }
            </>
    )
}