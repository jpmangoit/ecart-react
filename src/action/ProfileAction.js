
import axios from "axios"
import {

    UPDATE_PROFILE_REQUEST,
    UPDATE_PROFILE_SUCCESS,
    UPDATE_PROFILE_FAIL,
    
} from "../constant/ProfileConstant"

// Update Profile

export const updateUserProfile = (token,userData) => async(dispatch) => {

    try {

        dispatch({
            type:  UPDATE_PROFILE_REQUEST
        })

        const {data} =  await axios.put('/api/user-auth/user', userData, {
            headers: {
                Authorization: `Bearer ${token}`,
              },
        })

        dispatch({
            type: UPDATE_PROFILE_SUCCESS,
            payload: data
        })

        return data
        
    } catch (error) {

        dispatch({
            type: UPDATE_PROFILE_FAIL,
            payload: error.response.data.message
        })
        
    }
} 


  