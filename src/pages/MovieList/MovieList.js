
import React, { useEffect, useState } from "react"
import axios from "axios";

import { Container, Box, Typography, Grid, Paper } from '@material-ui/core';
import { useParams } from 'react-router-dom'
import { MovieItem } from "./MovieItem";

export const MovieList = () => {

    const { category } = useParams()
    const [movies, setMovies] = useState([])

    const getMovie = () => {
        const options = {
            method: 'GET',
            url: 'https://movies-tvshows-data-imdb.p.rapidapi.com/',
            params: { type: 'get-popular-movies', page: '1', year: '2020' },
            headers: {
                'x-rapidapi-key': '7de3c41803msh53a39f3c55f01aap1fd699jsn2b244a9fd097',
                'x-rapidapi-host': 'movies-tvshows-data-imdb.p.rapidapi.com'
            }
        };

        axios.request(options).then(function (response) {
            setMovies(response.data.movie_results);
        }).catch(function (error) {
            console.error(error);
        });
    }


    useEffect(() => {
        getMovie()
    }, [])

    const getMovieItem = (arr) => {
        return arr.map(movie => {
            return (
                <MovieItem key={movie.imdb_id} movie={movie} />
            )
        })
        console.log(movies)
    }
    return (
        <Container>
            <Grid container spacing={1}>
                {getMovieItem(movies)}
            </Grid>
        </Container>

    )
}