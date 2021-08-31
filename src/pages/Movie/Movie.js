import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { useParams } from 'react-router-dom'
import { Container, makeStyles, Typography, Box, Grid } from '@material-ui/core'

const useStyles = makeStyles((theme) => ({
    title: {
      margin: '2rem 0',
      fontFamily: 'Montserrat, sans-serif',
      color: 'white'
    },
    subtitle: {
      margin: '1rem 0',
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
      marginBottom:'2px',
      color: 'white',
      fontFamily: 'Montserrat, sans-serif',

    },
    
}))

export const Movie = () => {

    const classes = useStyles()
    const { id } = useParams()
    const [movie, setMovie] = useState([])
    // const [trailer, setTrailer] = useState([])

    const options = {
        method: 'GET',
        url: 'https://movie-database-imdb-alternative.p.rapidapi.com/',
        params: {i: id, r: 'json'},
        headers: {
          'x-rapidapi-host': 'movie-database-imdb-alternative.p.rapidapi.com',
          'x-rapidapi-key': '7de3c41803msh53a39f3c55f01aap1fd699jsn2b244a9fd097'
        }
      };
      // const trailerOptions = {
      //   method: 'GET',
      //   url: `https://imdb-internet-movie-database-unofficial.p.rapidapi.com/film/${id}`,
      //   headers: {
      //     'x-rapidapi-host': 'imdb-internet-movie-database-unofficial.p.rapidapi.com',
      //     'x-rapidapi-key': '7de3c41803msh53a39f3c55f01aap1fd699jsn2b244a9fd097'
      //   }
      // };
      
      const getMovie = async () => {
          const response = await axios.request(options).then((response) => {
          setMovie(response.data)
       }) 
      }

      // const getTrailer = async () => {
      //   const response = await axios.request(trailerOptions).then((response) => {
      //     setTrailer(response.data)
      //   })
      // }

      useEffect(() => {
          getMovie()
          // getTrailer()
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
           <Typography variant='p' className={classes.text}>
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
       </Container>
    )
}