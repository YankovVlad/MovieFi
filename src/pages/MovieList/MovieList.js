
import React, { useEffect, useState } from "react"
import axios from "axios";

import { Container, Box, Typography, Grid, Paper } from '@material-ui/core';
import { Link, useParams } from 'react-router-dom'
import { MovieItem } from "./MovieItem";

export const MovieList = () => {

    const { genre } = useParams()
    const [movies, setMovies] = useState()

    const getMoviesByGenre = async (genre) => {
        const response = await axios.get(`http://localhost:3004/movies?genre_like=${genre}`,)
        setMovies(response.data)

    }

    useEffect(() => {
        getMoviesByGenre(genre)
    },[])

    return (
        <Container>
            <Grid container spacing={1}>
            {movies?.map(movie => {
                return (
                <MovieItem key={movie.imdb_id} movie={movie} />
                )
            })}
            </Grid>
        </Container>

    )
}