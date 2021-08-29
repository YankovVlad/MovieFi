import { Container, Box, Typography, Grid, Paper, Card, CardActionArea, CardMedia, CardContent } from '@material-ui/core';
import { Link } from 'react-router-dom'
import { makeStyles } from '@material-ui/core/styles';

const useStyle = makeStyles((theme) => ({
    card: {
        width: '100%',
        maxHeight: '400px'
    },
    media: {
        minHeight:'300px',
    },
    content: {
        backgroundColor: 'rgba(0, 0, 0, 0.4)',
    },
    text: {
        fontFamily: 'Montserrat, sans-serif',
        fontSize:'16px',
        color: 'white'
    },
    subtext: {
        fontFamily: 'Montserrat, sans-serif',
        fontSize: '12px',
        color: 'white'
    }
}))

export const MovieItem = ({movie}) => {
    const classes = useStyle()

    return (
        <Grid item xs={6} sm={3} className={classes.item}>
            <Link to={`/movie/${movie.imdb_id}`} style={{textDecoration: 'none'}}>

                <Card className={classes.card}>
                    <CardActionArea>
                        <CardMedia image={movie.poster} className={classes.media} />
                    </CardActionArea>
                    <CardContent className={classes.content}>
                        <Typography className={classes.text}>
                            {movie.title}
                        </Typography>
                        <Typography className={classes.subtext}>
                            {movie.genre}
                        </Typography>
                        <Typography className={classes.subtext}>
                            {movie.year}
                        </Typography>
                    
                    </CardContent>
                </Card>
            </Link>
        </Grid>
    )
}