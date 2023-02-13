import { combineReducers } from "redux";
import { cartReducer } from "./cartReducer";
import { productDetailsReducer, productsReducer } from "./productReducer";

const rootReducer = combineReducers({
    tools: productsReducer,
    tool: productDetailsReducer,
    cart: cartReducer
})
export default rootReducer;