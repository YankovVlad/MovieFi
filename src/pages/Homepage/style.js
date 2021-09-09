import { makeStyles } from '@material-ui/core/styles';

export const useStyle = makeStyles((theme) => ({
    root: {
        flexGrow: 1,

    },
    container: {
        position: 'relative',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        maxWidth: '1440px',
        height: '50vw',
        marginBottom: '40px',
    },
    box: {

        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        flexDirection: 'column',
        height: '450px',
        zIndex: '100'

    },
    box__img: {
        position: 'absolute',
        top: '0',
        left: '0',
        width: '100%',
        height: '50vw',

    },
    box__title: {
        width: '40%',
        textShadow: '5px 5px 7px grey'
    },
    subtitle: {
        marginBottom: '20px',
        textShadow: '2px 2px 5px grey'
    },
    findInput: {
        width: '40%',
        color: 'white'


    },

    card: {
        position: 'relative',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        height: '20vw',
        color: 'white',
        transition: 'transform 0.2s ease-in',
        '&:hover': {
            cursor: 'pointer',
            transform: 'translate(-5px, -5px)'
        }
    },
    cardText: {
        zIndex: '100'
    },
    input: {
        width: '50%',
    },
    textColor: {
       color:'white',
       
    },
}))
