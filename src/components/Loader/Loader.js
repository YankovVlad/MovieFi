import { Container, CircularProgress } from "@material-ui/core"

export const Loader = () => {

    return (
        <Container 
            maxWidth='sm' 
            sx={{
                display: 'flex',
                justifyContent:'center',
                alignItems:'center',
                height: '100vh'
            }}>
            <CircularProgress />
        </Container>
    )
}