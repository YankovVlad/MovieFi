import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { useParams } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux'

import { getMovie, getReview, createReview } from '../../actions'

import { Container, makeStyles, Typography, Box, Grid, TextField, Button } from '@material-ui/core'
import { Loader } from '../../components/Loader/Loader'

const useStyles = makeStyles((theme) => ({
    title: {
      margin: '2rem 0',
      fontFamily: 'Montserrat, sans-serif',
    },
    subtitle: {
      margin: '1rem 0',
      fontFamily: 'Montserrat, sans-serif',
    },
    header: {
      width: '100%',
    },
    poster: {
      width: '40%',
      height: '400px'
    },
    text:{
      marginBottom:'2px',
      fontFamily: 'Montserrat, sans-serif',

    },
    
}))

export const Movie = () => {

    const dispatch = useDispatch()
    const classes = useStyles()
    const { id } = useParams()

    const user = useSelector((state) => state.user)
    const loading = useSelector((state) => state.loading)
    const loadingElement = useSelector((state) => state.loadingElement)
    const movieDetails = useSelector((state) => state.movieDetails)
    const reviews = useSelector((state) => state.reviews)

    const [textReview, setTextReview] = useState('')

      const onChangeReview = (event) => {
        setTextReview(event.target.value)
      }
      const onClickButtonPost = async () => {
        dispatch(createReview(id, textReview, user.id))
        setTextReview('')
        dispatch(getReview(id))
      }

      useEffect(() => {
          dispatch(getMovie(id))
          dispatch(getReview(id))
      }, [dispatch, id])


    return (
      <>
      {loading ? 
        <Loader /> :
        (<Container>
         
          <Typography variant='h2' className={classes.title}>
            {movieDetails.Title}
          </Typography >
         <Grid container className={classes.header}>
            <Grid item xs={1} md={4} className={classes.poster} style={{background: `url(${movieDetails.Poster}) no-repeat`}}>
              
            </Grid>
            <Grid item xs className={classes.info}>
            <Typography className={classes.text}><span style={{color: 'red'}}>Year: </span>{movieDetails.Year}</Typography>
            <Typography className={classes.text}><span style={{color: 'red'}}>Rated: </span>{movieDetails.Rated}</Typography>
            <Typography className={classes.text}><span style={{color: 'red'}}>Release: </span>{movieDetails.Released}</Typography>
            <Typography className={classes.text}><span style={{color: 'red'}}>Release DVD: </span>{movieDetails.DVD}</Typography>
            <Typography className={classes.text}><span style={{color: 'red'}}>Runtime: </span>{movieDetails.Runtime}</Typography>
            <Typography className={classes.text}><span style={{color: 'red'}}>Genre: </span>{movieDetails.Genre}</Typography>
            <Typography className={classes.text}><span style={{color: 'red'}}>Director: </span> {movieDetails.Director}</Typography>
            <Typography className={classes.text}><span style={{color: 'red'}}>Writer: </span> {movieDetails.Writer}</Typography>
            <Typography className={classes.text}><span style={{color: 'red'}}>Actors: </span> {movieDetails.Actors}</Typography>
            <Typography className={classes.text}><span style={{color: 'red'}}>Language: </span> {movieDetails.Language}</Typography>
            <Typography className={classes.text}><span style={{color: 'red'}}>Country: </span> {movieDetails.Country}</Typography>
            <Typography className={classes.text}><span style={{color: 'red'}}>Awards: </span> {movieDetails.Awards}</Typography>
            <Typography className={classes.text}><span style={{color: 'red'}}>Metascore: </span> {movieDetails.Metascore}</Typography>
            <Typography className={classes.text}><span style={{color: 'red'}}>IMDB Rating: </span> {movieDetails.imdbRating}</Typography>
            <Typography className={classes.text}><span style={{color: 'red'}}>Production: </span> {movieDetails.Production}</Typography>
            </Grid>
            
         </Grid>
         <Box>
           <Typography variant='h4' className={classes.subtitle}>
              Synopsis
           </Typography>
           <Typography className={classes.text}>
              {movieDetails.Plot}
           </Typography>
         </Box>

         <Box>
           <Typography variant='h4' className={classes.subtitle}>
             Reviews
           </Typography>
          
          {user ?
          <>
            <TextField 
          id="standard-basic" 
          label="Standard" 
          multiline 
          row={3} 
          fullWidth
          onChange={onChangeReview}
          value={textReview}
          margin='dense'
          />
          
           <Button margin='dense' variant="contained" color="primary" onClick={onClickButtonPost}>
           Write it!
          </Button>
          </> : ''
          }
          {loadingElement ? 
            <Loader /> :
            reviews.map((review) => {
              return (
                <Typography key={review.id} margin='dense'>{review.text}</Typography>
              )
            })
        }

        </Box>
       </Container>)
      }
      
      </> 
    )
}