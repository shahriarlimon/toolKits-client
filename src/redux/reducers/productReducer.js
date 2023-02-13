import { ALL_TOOLS_FAIL, ALL_TOOLS_REQUEST, ALL_TOOLS_SUCCESS, CLEAR_ERRORS, SINGLE_TOOL_REQUEST, SINGLE_TOOL_SUCCESS } from "../actionTypes/productActionTypes";

export const productsReducer = (state = { tools: [] }, action) => {
    switch (action.type) {
        case ALL_TOOLS_REQUEST:
            return {
                ...state,
                loading: true,
                tools: []
            }
        case ALL_TOOLS_SUCCESS:
            return {
                ...state,
                loading: false,
                tools: action.payload.tools
            }
        case ALL_TOOLS_FAIL:
            return {
                ...state,
                loading: false,
                error: action.payload
            }
        case CLEAR_ERRORS:
            return {
                ...state,
                error: null
            }

        default:
            return state;
    }
}
export const productDetailsReducer = (state = { tool: {} }, action) => {
    switch (action.type) {
        case SINGLE_TOOL_REQUEST:
            return {
                ...state,
                loading: true,
                tool: {}
            }
        case SINGLE_TOOL_SUCCESS:
            return {
                ...state,
                loading: false,
                tool: action.payload.tool
            }
        case ALL_TOOLS_FAIL:
            return {
                ...state,
                loading: false,
                error: action.payload
            }
        case CLEAR_ERRORS:
            return {
                ...state,
                error: null
            }

        default:
            return state;
    }
}