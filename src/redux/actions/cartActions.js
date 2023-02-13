import axios from "axios";
import { ADD_TO_CART } from "../actionTypes/cartActionTypes";

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