import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { useParams } from 'react-router-dom'
import { Container, makeStyles, Typography, Box, Grid, TextField, Button } from '@material-ui/core'
import { useSelector } from 'react-redux'

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

    const classes = useStyles()
    const { id } = useParams()
    const user = useSelector((state) => state.user)

    const [movie, setMovie] = useState([])
    const [reviews, setReviews] = useState([])
    const [textReview, setTextReview] = useState('')


    const options = {
        method: 'GET',
        url: 'https://movie-database-imdb-alternative.p.rapidapi.com/',
        params: {i: id, r: 'json'},
        headers: {
          'x-rapidapi-host': 'movie-database-imdb-alternative.p.rapidapi.com',
          'x-rapidapi-key': '7de3c41803msh53a39f3c55f01aap1fd699jsn2b244a9fd097'
        }
      };
      
      const getMovie = async () => {
          const response = await axios.request(options).then((response) => {
          setMovie(response.data)
       }) 
      }
      const getReview = async () => {
        const response = await axios.get(`http://localhost:3004/reviews?imdbId=${id}`).then((response) => {
          setReviews(response.data.reverse())
        })
      }
      const createReview = async () => {
        const response = await axios.post('http://localhost:3004/reviews', {
          imdbId: id,
          text: textReview,
          author: user.id
        })
      }
      // const createReviewUser = async () => {
      //   const response = await axios.post(`http://localhost:3004/users?id=${user.id}`, {
      //     imdbId: id,
      //     text: textReview,
      //   })
      // }
      const onChangeReview = (event) => {
        setTextReview(event.target.value)
      }
      const onClickButtonPost = async () => {
        createReview()
        setTextReview('')
        getReview()
      }

      useEffect(() => {
          getMovie()
          getReview()
          // getTrailer()
      }, [])

    return (
      
       <Container>
         {console.log('render')}
         <Typography variant='h2' className={classes.title}>
          {movie.Title}
        </Typography >
         <Grid container className={classes.header}>
            <Grid item xs={1} md={4} className={classes.poster} style={{background: `url(${movie.Poster}) no-repeat`}}>
              
            </Grid>
            <Grid item xs className={classes.info}>
            <Typography className={classes.text}><span style={{color: 'red'}}>Year: </span>{movie.Year}</Typography>
            <Typography className={classes.text}><span style={{color: 'red'}}>Rated: </span>{movie.Rated}</Typography>
            <Typography className={classes.text}><span style={{color: 'red'}}>Release: </span>{movie.Released}</Typography>
            <Typography className={classes.text}><span style={{color: 'red'}}>Release DVD: </span>{movie.DVD}</Typography>
            <Typography className={classes.text}><span style={{color: 'red'}}>Runtime: </span>{movie.Runtime}</Typography>
            <Typography className={classes.text}><span style={{color: 'red'}}>Genre: </span>{movie.Genre}</Typography>
            <Typography className={classes.text}><span style={{color: 'red'}}>Director: </span> {movie.Director}</Typography>
            <Typography className={classes.text}><span style={{color: 'red'}}>Writer: </span> {movie.Writer}</Typography>
            <Typography className={classes.text}><span style={{color: 'red'}}>Actors: </span> {movie.Actors}</Typography>
            <Typography className={classes.text}><span style={{color: 'red'}}>Language: </span> {movie.Language}</Typography>
            <Typography className={classes.text}><span style={{color: 'red'}}>Country: </span> {movie.Country}</Typography>
            <Typography className={classes.text}><span style={{color: 'red'}}>Awards: </span> {movie.Awards}</Typography>
            <Typography className={classes.text}><span style={{color: 'red'}}>Metascore: </span> {movie.Metascore}</Typography>
            <Typography className={classes.text}><span style={{color: 'red'}}>IMDB Rating: </span> {movie.imdbRating}</Typography>
            <Typography className={classes.text}><span style={{color: 'red'}}>Production: </span> {movie.Production}</Typography>
            </Grid>
            
         </Grid>
         <Box>
           <Typography variant='h4' className={classes.subtitle}>
              Synopsis
           </Typography>
           <Typography className={classes.text}>
              {movie.Plot}
           </Typography>
         </Box>

         {/* <Box>
           <Typography variant='h4' className={classes.subtitle}>
              Trailer
           </Typography>
           <Container>
             <video src={trailer.trailer?.link} controls preload='metadata' poster={trailer.poster} width='800px' height='600px'/>
           </Container>
           
         </Box> */}

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
          </> :
          ''
          }
         
         
           {reviews.map((review) => {
             return (
               <Typography key={review.id} margin='dense'>{review.text}</Typography>
             )
           })}

        </Box>
       </Container>
    )
}