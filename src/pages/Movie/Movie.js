import React, { useEffect} from 'react'

import { useParams } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux'
import { makeStyles } from '@material-ui/styles';

import { Container, Grid, Box} from '@material-ui/core'
import { Title } from '../../components/Title/Title';
import { Loader } from '../../components/Loader/Loader'

import { getMovie } from '../../actions'
import { InfoList } from './InfoList/InfoList'
import { Synopsis } from './Synopsis/Synopsis'
import { Reviews } from './Reviews/Reviews'

const useStyles = makeStyles((theme) => ({
    header: {
      width: '100%',
      gap: '1rem'
    },
    poster: {
      width: '40%',
      height: '400px'
    },
    
}))

export const Movie = () => {

    const dispatch = useDispatch()
    const classes = useStyles()
    const { id } = useParams()

    const loading = useSelector((state) => state.loading)
    const movieDetails = useSelector((state) => state.movieDetails)
    
    useEffect(() => {
        dispatch(getMovie(id))
    }, [dispatch, id])


    return (
      <>
        {loading ? 
          <Loader /> :
            (<Container>
              <Title variant='h2'>{movieDetails.Title}</Title >

              <Grid container className={classes.header}>
                <Grid item xs={12} md={4} className={classes.poster}>
                  <Box 
                  sx={{
                    height: '100%', 
                    width: '100%', 
                    background: `url(${movieDetails.Poster}) no-repeat center`
                    }}/>
                  
                </Grid>
              
                <Grid item xs >
                  <InfoList movieDetails={movieDetails}/>
                </Grid>
              
              </Grid>

              <Synopsis movieDetails={movieDetails} />
              <Reviews movieDetails={movieDetails} />
              
            </Container>)
          }
      </> 
    )
}