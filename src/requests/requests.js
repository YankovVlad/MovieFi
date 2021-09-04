import axios from 'axios'
import { useDispatch, useSelector } from 'react-redux'
import { ACTIONS_TYPES } from '../constants/constants'


export const registerUser = async (body) => {
    const response = await axios.post('http://localhost:3004/register', {...body,
    firstName: 'Unknown',
    lastName: 'Unknown',
    age: 'Unknown',
    avatar: '',
    watchedMovies: [],
    wantsToSee: [],
    reviews: []

})
}

