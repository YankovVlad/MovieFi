import { useDispatch } from 'react-redux';
import { IconButton, Box } from '@mui/material';
import { Text } from '../../../components/Text/Text'
import { Title } from '../../../components/Title/Title';
import EditIcon from '@material-ui/icons/Edit';

import { openChangeDialog } from '../../../actions';

export const PersonalData  = ({user}) => {
    const dispatch = useDispatch()

    const onClickOpenChangeDialog = () => {
        dispatch(openChangeDialog())
    }
    return (
        <>
            <Box sx={{
                display: 'flex',
            }}>
                    <Title variant='h5' >Personal data</Title>
                    <IconButton onClick={onClickOpenChangeDialog}>
                        <EditIcon/>
                    </IconButton>
                </Box>
                
                <Box sx={{
                    padding:'1rem',
                    margin: '1rem 0',
                    border: '1px solid black',
                    borderRadius: '10px',
                }}>
                    <Text ><span style={{color: 'red'}}>First name: </span> {user.firstName}</Text>
                    <Text ><span style={{color: 'red'}}>Last name: </span> {user.lastName}</Text>
                    <Text ><span style={{color: 'red'}}>Email: </span> {user.email}</Text>
                    <Text ><span style={{color: 'red'}}>Age: </span> {user.age}</Text>
                    <Text ><span style={{color: 'red'}}>Favorite genres: </span> {user.favoriteGenres}</Text>
                </Box>
        </>
    )
}