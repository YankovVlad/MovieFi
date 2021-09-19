import { Container, CircularProgress } from "@material-ui/core"
import { makeStyles } from "@material-ui/core"

const useStyles = makeStyles((theme) => ({
    container: {
        display: 'flex',
        justifyContent:'center',
        alignItems:'center',

        height: '100vh'
    }
}))


export const Loader = () => {

    const classes = useStyles()

    return (
        <Container maxWidth='sm' className={classes.container}>
            <CircularProgress />
        </Container>
    )
}