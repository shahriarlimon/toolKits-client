import { ALL_TOOLS_FAIL, ALL_TOOLS_REQUEST, ALL_TOOLS_SUCCESS, CLEAR_ERRORS, SINGLE_TOOL_FAIL, SINGLE_TOOL_REQUEST, SINGLE_TOOL_SUCCESS } from "../actionTypes/productActionTypes"
import axios from 'axios'
import { async } from "@firebase/util";

export const getTools = () => async (dispatch) => {
    try {
        dispatch({ type: ALL_TOOLS_REQUEST });
        let link = `http://localhost:5000/api/v1/products/`;
        const { data } = await axios.get(link, { withCredentials: true })
        dispatch({ type: ALL_TOOLS_SUCCESS, payload: data })
    } catch (error) {
        dispatch({ type: ALL_TOOLS_FAIL, payload: error.response.data.message })
    }
}
export const getSingleTool = (id) => async (dispatch) => {
    try {
        dispatch({ type: SINGLE_TOOL_REQUEST })
        let link = `http://localhost:5000/api/v1/products/${id}`;
        const { data } = await axios.get(link, { withCredentials: true })
        dispatch({ type: SINGLE_TOOL_SUCCESS, payload: data })
    } catch (error) {
        dispatch({ type: SINGLE_TOOL_FAIL, payload: error })
    }
}

export const clearErrors = () => async (dispatch) => {
    dispatch({ type: CLEAR_ERRORS, })
}