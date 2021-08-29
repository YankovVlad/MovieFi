
import React, { useEffect, useState } from "react"
import axios from "axios";

import { Container, Box, Typography, Grid, Paper } from '@material-ui/core';
import { useParams } from 'react-router-dom'
import { MovieItem } from "./MovieItem";

export const MovieList = () => {

    const { genre } = useParams()
    const [movies, setMovies] = useState()

    const getMoviesByGenre = async (genre) => {
        const response = await axios.get(`http://localhost:3004/movies?genre_like=${genre}`,)
        setMovies(response.data)
        console.log(response.data)

    }

    useEffect(() => {
        console.log(genre)
        getMoviesByGenre(genre)
    },[])

    return (
        <Container>
            <Grid container spacing={2}>
            {movies?.map(movie => {
                return (
                    <MovieItem key={movie.imdb_id} movie={movie} />
                )
            })}
            </Grid>
        </Container>

    )
}