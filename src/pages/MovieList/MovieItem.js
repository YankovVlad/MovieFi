import { Container, Box, Typography, Grid, Paper, Card, CardActionArea, CardMedia, CardContent } from '@material-ui/core';
import { Link } from 'react-router-dom'
import { makeStyles } from '@material-ui/core/styles';

const useStyle = makeStyles((theme) => ({
    item: {
        maxWidth: '20%'
    },
    card: {
        width: '100%',
        maxHeight: '200px'
    },
    media: {
        height: '140px'
    }
}))

export const MovieItem = (props) => {
    const classes = useStyle()

    return (
        <Grid item xs={5} className={classes.item}>
            <Card className={classes.card}>
                <CardActionArea>
                    <CardMedia image='https://img.kupigolos.ru/hero/5cdb2ac7c6c44.jpg?p=bh&s=700cb5277d74ccb0bb961bae1f03f550' className={classes.media} />
                </CardActionArea>
                <CardContent>
                    <Typography>
                        {props.movie.title}
                    </Typography>
                </CardContent>
            </Card>
        </Grid>
    )
}