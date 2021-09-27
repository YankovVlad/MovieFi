
import { createTheme, ThemeProvider } from '@material-ui/core/styles';
import { styled } from '@mui/material/styles';
import { Typography, Grid, Card, CardActionArea, CardMedia, CardContent } from '@material-ui/core';
import { Text } from '../../components/Text/Text'
import { Link } from 'react-router-dom'

const theme = createTheme(); 
    
const Subtext = styled(Typography)(({ theme }) => ({
    fontSize: '0.8rem',
    fontFamily: 'Montserrat, sans-serif',
    color: 'white'
    }));

export const MovieItem = ({movie}) => {

    return (
        <ThemeProvider theme={theme}>
            <Grid item xs={12} sm={4}>
            <Link to={`/movie/${movie.imdb_id}`} style={{textDecoration: 'none'}}>

                <Card sx={{width: '100%', maxHeight: '550px'}}>
                    <CardActionArea>
                        <CardMedia image={movie.poster} sx={{minHeight:'400px'}} />
                    </CardActionArea>
                    <CardContent sx={{backgroundColor: '#BD1616', minHeight: '260px'}}>
                        <Text sx={{color:'white'}}>
                            {movie.title}
                        </Text>
                        <Subtext >
                            {movie.genre}
                        </Subtext>
                        <Subtext >
                            {movie.year}
                        </Subtext>
                    
                    </CardContent>
                </Card>
            </Link>
        </Grid>
        </ThemeProvider>
        
    )
}