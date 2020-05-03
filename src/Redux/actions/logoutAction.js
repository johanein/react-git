import {
    LOGIN_STATE
} from '../constants'

export const logoutActionCreator = (loginState) => ({
    type:LOGIN_STATE,
    loginState
})