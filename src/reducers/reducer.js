import { ACTIONS_TYPES } from "../constants/constants"

const initialState = {
    loginDialog: false,
    registrationDialog: false,

    registrationNickname: '',
    registrationEmail: '',
    registrationPassword: '',

    loginEmail: '',
    loginPassword: '',
    user: null,
}

export const reducer = (state = initialState, action) => {
    switch (action.type) {
        case ACTIONS_TYPES.OPEN_DIALOG_LOGIN: return {...state, loginDialog: true}
        case ACTIONS_TYPES.CLOSE_DIALOG_LOGIN: return {...state, loginDialog: false}

        case ACTIONS_TYPES.OPEN_DIALOG_REGISTRATION: return {...state, registrationDialog: true}
        case ACTIONS_TYPES.CLOSE_DIALOG_REGISTRATION: return {...state, registrationDialog: false}

        case ACTIONS_TYPES.CHANGE_NICKNAME_REGISTRATION: return {...state, registrationNickname: action.payload}
        case ACTIONS_TYPES.CHANGE_EMAIL_REGISTRATION: return {...state, registrationEmail: action.payload}
        case ACTIONS_TYPES.CHANGE_PASSWORD_REGISTRATION: return {...state, registrationPassword: action.payload}
        case ACTIONS_TYPES.RESET_FORM_REGISTRATION: return {...state, registrationNickname: '', registrationEmail: '', registrationPassword:''}

        case ACTIONS_TYPES.CHANGE_EMAIL_LOGIN: return {...state, loginEmail: action.payload}
        case ACTIONS_TYPES.CHANGE_PASSWORD_LOGIN: return {...state, loginPassword: action.payload}
        case ACTIONS_TYPES.RESET_FORM_LOGIN: return {...state, loginEmail: '', loginPassword: ''}
        case ACTIONS_TYPES.AUTH_USER: return {...state, user: action.payload}
        case ACTIONS_TYPES.LOGOUT_USER: return {...state, user: null}
    }
    return state
}
