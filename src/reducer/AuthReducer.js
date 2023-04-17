

import {
    REGISTRATION_REQUEST,
    REGISTRATION_SUCCESS,
    REGISTRATION_FAIL,
    LOGIN_REQUEST,
    LOGIN_SUCCESS,
    LOGIN_FAIL,
    FORGET_PASSWORD_REQUEST,
    FORGET_PASSWORD_SUCCESS,
    FORGET_PASSWORD_FAIL,
    UPDATE_PASSWORD_REQUEST,
    UPDATE_PASSWORD_SUCCESS,
    UPDATE_PASSWORD_RESET,
    UPDATE_PASSWORD_FAIL,
    LOGOUT_USER_SUCCESS,
    CLEAR_ERROR
} from "../constant/AuthConstant";

// Registration User

export const registrationUserRducer = (state = { userRegistration: [] }, action) => {

    switch (action.type) {
        case REGISTRATION_REQUEST:
            return {
                loading: true,
                isAuthenticated: false
            }

        case REGISTRATION_SUCCESS:
            return {
                ...state,
                loading: false,
                isAuthenticated: true,
                userRegistration: action.payload.result.userDetials
            }

        case REGISTRATION_FAIL:
            return {
                ...state,
                loading: false,
                isAuthenticated: false,
                userRegistration: null,
                error: action.payload
            }

        case CLEAR_ERROR:
            return {
                ...state,
                error: null
            }

        default:
            return state;
    }
}

// Login Reducer

export const loginUserReducer = (state = { userLogin: [] }, action) => {

    switch (action.type) {
        case LOGIN_REQUEST:
            return {
                loading: true,
                isAuthenticated: false
            }

        case LOGIN_SUCCESS:
            return {
                ...state,
                loading: false,
                isAuthenticated: true,
                userLogin: action.payload.user
            }

        case LOGIN_FAIL:
            return {
                ...state,
                loading: false,
                isAuthenticated: false,
                userLogin: null,
                error: action.payload
            }
            case LOGOUT_USER_SUCCESS:
            return {
                ...state,
                loading: false,
                isAuthenticated: false,
                userLogin: null,
                error: action.payload
            }

        case CLEAR_ERROR:
            return {
                ...state,
                error: null
            }

        default:
            return state;
    }
}

// Forget Password Reducer

export const forgetPasswordReducer = (state = {}, action) => {

    switch (action.type) {
        case FORGET_PASSWORD_REQUEST:
            return {
                ...state,
                loading: true,
                error: null
            }

        case FORGET_PASSWORD_SUCCESS:
            return {
                ...state,
                loading: false,
                isUpdated: action.payload
            }

        case FORGET_PASSWORD_FAIL:
            return {
                ...state,
                loading: false,
                error: action.payload
            }

        case CLEAR_ERROR:
            return {
                ...state,
                error: null
            }

        default:
            return state;
    }
}

export const updatePasswordReducer = (state = {}, action) => {

    switch (action.type) {
        case UPDATE_PASSWORD_REQUEST:
            return {
                ...state,
                loading: true,
            }

        case UPDATE_PASSWORD_SUCCESS:
            return {
                ...state,
                loading: false,
                isUpdated: action.payload
            }

        case UPDATE_PASSWORD_FAIL:
            return {
                ...state,
                loading: false,
                error: action.payload
            }

        case UPDATE_PASSWORD_RESET:
            return {
                ...state,
                isUpdated: false
            }

        case CLEAR_ERROR:
            return {
                ...state,
                error: null
            }

        default:
            return state;
    }
}


