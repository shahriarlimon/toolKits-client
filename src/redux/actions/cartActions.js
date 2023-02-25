import axios from "axios";
import { ADD_TO_CART, REMOVE_FROM_CART, SAVE_SHIPPING_INFO } from "../actionTypes/cartActionTypes";

export const addItemsToCart = (id, quantity) => async (dispatch, getState) => {
    const config = {
        headers: {
            'Content-Type': 'application/json'
        },
        withCredentials: true
    }
    let link = `http://localhost:5000/api/v1/products/${id}`;

    const { data } = await axios.get(link, config)
    dispatch({
        type: ADD_TO_CART, payload: {
            ...data.tool,
            image: data.tool.images[0].url,
            stock: data.tool.stock,
            quantity
        }
    })
    localStorage.setItem("cartItems", JSON.stringify(getState().cart.cartItems))
}

// REMOVE FROM CART
export const removeItemsFromCart = (id) => async (dispatch, getState) => {
    dispatch({
        type: REMOVE_FROM_CART,
        payload: id,
    });
    localStorage.setItem("cartItems", JSON.stringify(getState().cart.cartItems));
};

/* saving shipping information */
export const saveShippingInfo = (data) => async (dispatch, getState) => {
    dispatch({
        type: SAVE_SHIPPING_INFO,
        payload: data
    })
    localStorage.setItem("shippingInfo", JSON.stringify(getState().cart.shippingInfo))
}