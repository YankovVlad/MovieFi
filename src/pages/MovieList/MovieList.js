
import React, { useEffect, } from "react"

import { Container, Grid} from '@material-ui/core';
import { useParams } from 'react-router-dom'
import { MovieItem } from "./MovieItem";
import { getMoviesByGenre } from '../../actions'
import { useSelector, useDispatch } from "react-redux";
import { Loader } from "../../components/Loader/Loader";

export const MovieList = () => {

    const { genre } = useParams()
    const dispatch = useDispatch()
    const movies = useSelector((state) => state.movieList)
    const loading = useSelector((state) => state.loading)

    useEffect(() => {
       dispatch(getMoviesByGenre(genre)) 
    },[dispatch, genre])

    return (
        <>
        {loading ?
        <Loader/> :
        <Container>
            <Grid container spacing={1}>
            {movies?.map(movie => {
                return (
                <MovieItem key={movie.imdb_id} movie={movie} />
                )
            })}
            </Grid>
        </Container>
    }
        </>
        

    )
}