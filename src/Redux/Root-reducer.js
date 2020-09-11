import { combineReducers } from "redux";
import userReducer from "./User/UserReducer";
import cartReducer from "./Cart/cart.Reducer";
export default combineReducers({ user: userReducer, cart: cartReducer });
