import { combineReducers } from "redux";
import { cartReducer } from "./cartReducer";
import { allOrdersReducer, myOrdersReducer, newOrderReducer } from "./orderReducer";
import { productDetailsReducer, productsReducer } from "./productReducer";
import userReducer, { allUsersReducer } from "./userReducer";

const rootReducer = combineReducers({
    user: userReducer,
    users: allUsersReducer,
    tools: productsReducer,
    tool: productDetailsReducer,
    cart: cartReducer,
    newOrder: newOrderReducer,
    myOrders: myOrdersReducer,
    orders: allOrdersReducer

})
export default rootReducer;