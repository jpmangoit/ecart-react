
import axios from "axios";
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
  
} from "../constant/AuthConstant";


// Registration Action

export const registrationUser = (userData) => async (dispatch) => {

    try {

        dispatch({
            type: REGISTRATION_REQUEST,
        })

        const config = { headers: {"Content-Type": "application/json"}}

        const { data } = await axios.post('/api/user-auth/register', userData, config);

        console.log(data,"reg")

        dispatch({
            type: REGISTRATION_SUCCESS,
            payload: data
        })

        
    } catch (error) {
        
        dispatch({
            type: REGISTRATION_FAIL,
            payload: error.response.data.message,
        })
    }
}

// Login Action

export const loginUser = (email, password) => async (dispatch) => {

    try {

        dispatch({
            type: LOGIN_REQUEST
        })

        const config = { headers: {"Content-Type": "application/json"}}

        const { data } = await axios.post('/api/user-auth/login', {email,password}, config)
         localStorage.setItem('userDetails',JSON.stringify(data.result))


        dispatch({
            type: LOGIN_SUCCESS,
            payload: data.result
        })

    } catch (error) {

        dispatch({
            type: LOGIN_FAIL,
            payload: error.response.data.message,
        })
    }
}

// Forget Password Action

export const forgetPasswordUser = (email) => async (dispatch) => {

    try {

        dispatch({
            type: FORGET_PASSWORD_REQUEST
        })

        const config = { headers: {"Content-Type": "application/json"}}

        const { data } = await axios.post('/api/user-auth/forgot-password', email, config)

        console.log(data, "forget")

        dispatch({
            type: FORGET_PASSWORD_SUCCESS,
            payload: data
        })

    } catch (error) {

        dispatch({
            type: FORGET_PASSWORD_FAIL,
            payload: error.response.data.message,
        })
    }
}

// Update Password Action 

export const updatePasswordUser = (password) => async (dispatch) => {

    try {

        dispatch({
            type: UPDATE_PASSWORD_REQUEST
        })

        const config = { headers: {"Content-Type": "application/json"}}

        const { data } = await axios.post('/api/user-auth/reset-password', password, config)

        console.log(data, "forget")

        dispatch({
            type: UPDATE_PASSWORD_SUCCESS,
            payload: data
        })

    } catch (error) {

        dispatch({
            type: UPDATE_PASSWORD_FAIL,
            payload: error.response.data.message,
        })
    }
}




// Clear All Error


// export const clearErrors = (dispatch) => {

//     dispatch({
//         type: CLEAR_ERROR
//     })
// }