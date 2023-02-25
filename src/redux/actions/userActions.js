import axios from "axios";
import { LOAD_USER_FAIL, LOAD_USER_REQUEST, LOAD_USER_SUCCESS, LOGIN_FAIL, LOGIN_REQUEST, LOGIN_SUCCESS, REGISTER_FAIL, REGISTER_REQUEST, REGISTER_SUCCESS } from "../actionTypes/userActionTypes";

/* REGISTER */
export const registerUser = (userData) => async (dispatch) => {
    console.log(userData)
    try {
        dispatch({ type: REGISTER_REQUEST });
        const config = {
            headers: {
                'Content-Type': 'application/json'
            },
            withCredentials: true
        }
        let link = `http://localhost:5000/api/v1/user/register`;
        const { data } = await axios.post(link, userData, config)
        dispatch({ type: REGISTER_SUCCESS, payload: data.user })
    } catch (error) {
        dispatch({
            type: REGISTER_FAIL,
            payload: error?.response?.data?.message
        })
    }

}

/* login */
export const loginUser = (userData) => async (dispatch) => {
    console.log(userData)
    try {
        dispatch({ type: LOGIN_REQUEST });
        const config = {
            headers: {
                'Content-Type': 'application/json'
            },
            withCredentials: true
        }
        let link = `http://localhost:5000/api/v1/user/login`;
        const { data } = await axios.post(link, userData, config)
        dispatch({ type: LOGIN_SUCCESS, payload: data.user })
    } catch (error) {
        dispatch({
            type: LOGIN_FAIL,
            payload: error?.response?.data?.message
        })
    }

}

export const loadUser = () => async (dispatch) => {
    try {
        dispatch({ type: LOAD_USER_REQUEST });
        let link = `http://localhost:5000/api/v1/user/me`;
        const { data } = await axios.get(link, {
            withCredentials: true
        })
        dispatch({ type: LOAD_USER_SUCCESS, payload: data.user })
    } catch (error) {
        dispatch({
            type: LOAD_USER_FAIL,
            payload: error.response.data.message
        })
    }

}