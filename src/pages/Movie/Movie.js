import React, { useEffect, useState } from 'react'
import moment from 'moment'
import { useParams } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux'

import { getMovie, getReview, createReview } from '../../actions'

import { Container, makeStyles, Typography, Box, Grid, TextField, Button } from '@material-ui/core'
import { Loader } from '../../components/Loader/Loader'
import { Comment } from '../../components/Comment/Comment'

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
    button: {
      margin: '16px 0'
    }
    
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
      const onClickButtonPost = () => {
        dispatch(createReview(id, textReview, moment().calendar(), user.firstName, user.lastName, user.id, movieDetails.Title))
        setTextReview('')
        setTimeout(() => {
          dispatch(getReview(id))
        },300)
        
      }
      const updateReview = () => {
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
          
           <Button className={classes.button} variant="contained" color="secondary" onClick={onClickButtonPost}>
           Write it!
          </Button>
          </> : ''
          }
          {loadingElement ? 
            <Loader /> :
            reviews.map((review) => {
              return (
                <Comment key={review.id} review={review} user={user} updateReview={updateReview}/>
              )
            })
        }
        </Box>
       </Container>)
      }
      
      </> 
    )
}