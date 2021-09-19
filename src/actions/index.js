import axios from 'axios'
import { ACTIONS_TYPES } from '../constants/constants'


// Navigation

export const openLogin = () => {
    return {type: ACTIONS_TYPES.OPEN_DIALOG_LOGIN}
}
export const openRegistration = () => {
    return {type: ACTIONS_TYPES.OPEN_DIALOG_REGISTRATION}
}
export const loginUser = (body) => {
    return async (dispatch) => {
        try {
            const response = await axios.post('http://localhost:3004/login', body).then((response)=> {
            dispatch({type: ACTIONS_TYPES.AUTH_USER, payload: response.data.user})
            sessionStorage.setItem('jwt', JSON.stringify(response.data.accessToken))
            sessionStorage.setItem('user', JSON.stringify(response.data.user))
        })
        } catch (err) {
            console.log(err)
        }
    }
}
export const logout = () => {
    sessionStorage.removeItem('jwt')
    sessionStorage.removeItem('user')
    return {type: ACTIONS_TYPES.LOGOUT_USER}
}
export const registerUser = (body) => {
    return async (dispatch) => {
        console.log('register')
        const response = await axios.post('http://localhost:3004/register', {...body,
    age: 'Unknown',
    avatar: '',
    })    
    }
}

// MovieList

export const getMoviesByGenre = (genre) => {
    return async (dispatch) => {
        try {
            dispatch({type: ACTIONS_TYPES.LOADING_START})
            const response = await axios.get(`http://localhost:3004/movies?genre_like=${genre}`)
            dispatch({type: ACTIONS_TYPES.LOADING_SUCCESS})
            dispatch({type: ACTIONS_TYPES.GET_MOVIE_LIST, payload: response.data})
        } catch (err) {
            dispatch({type: ACTIONS_TYPES.LOADING_FAILURE, payload: err.response.data})
        }
    } 
} 

// // Movie

export const createReview = (id, textReview, date, firstName, lastName, authorId, movieName) => {
    return async (dispatch) => {
        try {
            dispatch({type: ACTIONS_TYPES.LOADING_START})
            const response = await axios.post('http://localhost:3004/reviews', {
                imdbId: id,
                text: textReview,
                date: date,
                author: {  
                    firstName: firstName,
                    lastName: lastName,
                    id: authorId
                },
                movieName: movieName,
                
            })
            dispatch({type: ACTIONS_TYPES.LOADING_SUCCESS})
        } catch (err) {
            dispatch({type: ACTIONS_TYPES.LOADING_FAILURE, payload: err.response.data})
        }
    }
}
export const getReview = (id) => {
    return async (dispatch) => {
        try {
            const response = await axios.get(`http://localhost:3004/reviews?imdbId=${id}`)
            dispatch({type: ACTIONS_TYPES.GET_REVIEW, payload: response.data.reverse()})
        } catch (err) {
            dispatch({type: ACTIONS_TYPES. LOADING_ELEMENT_FAILURE, payload: err.response.data})
        }
    }
}
export const getMovie = (id) => {
    return async (dispatch) => {
        try {
            dispatch({type: ACTIONS_TYPES.LOADING_START})
            const response = await axios.request({
                method: 'GET',
                url: 'https://movie-database-imdb-alternative.p.rapidapi.com/',
                params: {i: id, r: 'json'},
                headers: {
                  'x-rapidapi-host': 'movie-database-imdb-alternative.p.rapidapi.com',
                  'x-rapidapi-key': '7de3c41803msh53a39f3c55f01aap1fd699jsn2b244a9fd097'
                }
                })
            dispatch({type: ACTIONS_TYPES.LOADING_SUCCESS})
            dispatch({type: ACTIONS_TYPES.GET_MOVIE_DETAILS, payload: response.data})
        } catch (err) {
            
            // dispatch({type: ACTIONS_TYPES.LOADING_FAILURE, payload: err.response.data})
        }
 }
}
export const deleteComment = (id) => {
    return async (dispatch) => {
        try {
            const response = await axios.delete(`http://localhost:3004/reviews/${id}`)
        } catch (err) {
            console.log(err)
        }
    }
}

// Profile

export const getUserReviews = (id) => {
    return async (dispatch) => {
        try {
            const response = await axios.get(`http://localhost:3004/reviews?author.id=${id}`)
            console.log(response.data)
            dispatch({type: ACTIONS_TYPES.GET_USER_REVIEW, payload: response.data})
        } catch (err) {
            console.log(err)
        }
    }
}
export const openChangeDialog = () => {
    return {type: ACTIONS_TYPES.OPEN_DIALOG_CHANGE}
}
export const closeChangeDialog = () => {
    return {type: ACTIONS_TYPES.CLOSE_DIALOG_CHANGE}
}
export const changePersonalData = (id, body) => {
    return async (dispatch) => {
        try {
            const response = await axios.patch(`http://localhost:3004/users/${id}`, body)
            console.log(response.data)
            dispatch({type: ACTIONS_TYPES.AUTH_USER, payload: response.data})
        } catch (err) {
            console.log(err)
        }
    }
}
