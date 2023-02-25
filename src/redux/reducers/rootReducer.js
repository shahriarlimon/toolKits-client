import { combineReducers } from "redux";
import { cartReducer } from "./cartReducer";
import { myOrdersReducer, newOrderReducer } from "./orderReducer";
import { productDetailsReducer, productsReducer } from "./productReducer";
import userReducer from "./userReducer";

const rootReducer = combineReducers({
    user: userReducer,
    tools: productsReducer,
    tool: productDetailsReducer,
    cart: cartReducer,
    newOrder: newOrderReducer,
    myOrders: myOrdersReducer

})
export default rootReducer;