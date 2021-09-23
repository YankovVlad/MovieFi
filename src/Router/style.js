import { makeStyles } from "@material-ui/core"

export const useStyle = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
        fontFamily: 'Montserrat, sans-serif'
    },
    title: {
        fontFamily: 'Montserrat, sans-serif'
    },
    titleOtherFont: {
        fontFamily: 'Dancing Script, cursive',
        color: 'red'
    },
    nav: {
        maxWidth: '1440px',
        margin: '0 auto',
        background: '#000012'
    },
    box: {
        display: 'flex',
        justifyContent: 'center',
        gap: '2%'
    },
    link: {
        padding: '5px 10px',
        border: '2px solid #000012',
        color: '#ffffff',
        textDecoration: 'none',
        transition: 'border 0.3s ease-in, color 0.3s ease-in',
        '&:hover': {
            color: 'red',
            borderBottom: '2px solid red',
        }
    }
})
)