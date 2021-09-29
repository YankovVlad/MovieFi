import React from 'react'
import { makeStyles } from '@material-ui/styles';
import { AutocompleteSearch } from '../../components/AutocompleteSearch/AutocompleteSearch';
import { Header } from './Header/Header';
import { GenreList } from './GenreList/GenreList';

const useStyle = makeStyles((theme) => ({
    root: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
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
    
    
}))

export const Homepage = () => {
    const classes = useStyle()
    return (
        <div className={classes.root}>
            <Header/>
            <AutocompleteSearch />
            <GenreList />
        </div >
    )
}