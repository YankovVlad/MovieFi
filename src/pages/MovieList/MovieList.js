
import React, { useEffect, } from "react"

import { Container, Grid} from '@material-ui/core';
import { useParams } from 'react-router-dom'
import { MovieItem } from "./MovieItem";
import { getMovieByTitle, getMoviesByGenre } from '../../actions'
import { useSelector, useDispatch } from "react-redux";
import { Loader } from "../../components/Loader/Loader";

export const MovieList = () => {

    const { genre } = useParams()
    const { title } = useParams()
    const dispatch = useDispatch()
    const movies = useSelector((state) => state.movieList)
    const loading = useSelector((state) => state.loading)

    useEffect(() => {
        title ? 
        dispatch(getMovieByTitle(title))
        :
        dispatch(getMoviesByGenre(genre)) 
    },[dispatch, genre, title])

    return (
        <>
            <Container>
                {loading ?
                    <Loader/> 
                    :
                    <Grid container spacing={2} sx={{margin: '1rem 0'}}>
                        {movies?.map(movie => {
                            return (
                            <MovieItem key={movie.imdb_id} movie={movie} />
                            )
                        })}
                    </Grid>
                }
            </Container>
        </>
        

    )
}