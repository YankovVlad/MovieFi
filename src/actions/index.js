import axios from 'axios'
import { useDispatch, useSelector } from 'react-redux'
import { ACTIONS_TYPES } from '../constants/constants'

// Navigation

export const openLogin = () => {
    return {type: ACTIONS_TYPES.OPEN_DIALOG_LOGIN}
}
export const openRegistration = () => {
    return {type: ACTIONS_TYPES.OPEN_DIALOG_REGISTRATION}
}
export const logout = () => {
    sessionStorage.removeItem('jwt')
    sessionStorage.removeItem('user')
    return {type: ACTIONS_TYPES.LOGOUT_USER}
}


export const registerUser = async (body) => {
    return async (dispatch) => {
        const response = await axios.post('http://localhost:3004/register', {...body,
    firstName: 'Unknown',
    lastName: 'Unknown',
    age: 'Unknown',
    avatar: '',
    })    
    }
}

