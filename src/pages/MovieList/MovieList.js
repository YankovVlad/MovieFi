
import React, { useEffect, useState } from "react"
import axios from "axios";

import { Container, Box, Typography, Grid, Paper } from '@material-ui/core';
import { Link, useParams } from 'react-router-dom'
import { MovieItem } from "./MovieItem";
import { ACTIONS_TYPES } from "../../constants/constants";
import { getMoviesByGenre } from '../../actions'
import { useSelector } from "react-redux";

export const MovieList = () => {

    const { genre } = useParams()
    // const [movies, setMovies] = useState()
    const movies = useSelector((state) => state.movieList)

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