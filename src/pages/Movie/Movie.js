import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { useParams } from 'react-router-dom'
import { Container, makeStyles, Typography, Box, Grid } from '@material-ui/core'

const useStyles = makeStyles((theme) => ({
    title: {
      fontFamily: 'Montserrat, sans-serif',
      color: 'white'
    },
    header: {
      width: '100%',
    },
    poster: {
      width: '40%',
      height: '400px'
    },
    text:{
      color: 'white',
      fontFamily: 'Montserrat, sans-serif',

    }

}))

export const Movie = () => {

    const classes = useStyles()
    const { id } = useParams()
    const [movie, setMovie] = useState([])

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
          const response = await axios.request(options).then(function (response) {
          setMovie(response.data)
       }) 
      }

      useEffect(() => {
          getMovie()
      }, [])

    return (
       <Container>
         <Typography variant='h2' className={classes.title}>
          {movie.Title}
        </Typography >
         <Grid container className={classes.header}>
            <Grid item xs={1} md={4} className={classes.poster} style={{background: `url(${movie.Poster}) no-repeat`}}>
              
            </Grid>
            <Grid item xs className={classes.info}>
            <Typography className={classes.text}>Year: {movie.Year}</Typography>
            <Typography className={classes.text}>Rated: {movie.Rated}</Typography>
            <Typography className={classes.text}>Release: {movie.Released}</Typography>
            <Typography className={classes.text}>Runtime: {movie.Runtime}</Typography>
            <Typography className={classes.text}>Genre: {movie.Genre}</Typography>
            <Typography className={classes.text}>Director{movie.Director}</Typography>
            <Typography className={classes.text}>Writer: {movie.Writer}</Typography>
            <Typography className={classes.text}>Actors: {movie.Actors}</Typography>
            <Typography className={classes.text}>Language: {movie.Language}</Typography>
            <Typography className={classes.text}>Country: {movie.Country}</Typography>
            <Typography className={classes.text}>Awards: {movie.Awards}</Typography>
            </Grid>
         </Grid>
       </Container>
    )
}