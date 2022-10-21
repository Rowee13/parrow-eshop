import { configureStore, combineReducers } from "@reduxjs/toolkit";
import thunk from "redux-thunk";

import { cartReducer } from "./reducers/cartReducers";
import {
	productListReducer,
	productDetailsReducer,
} from "./reducers/productReducers";

const reducer = combineReducers({
	productList: productListReducer,
	productDetails: productDetailsReducer,
	cart: cartReducer,
});

const cartItemsFromStorage = localStorage.getItem("cartItems")
	? JSON.parse(localStorage.getItem("cartItems"))
	: [];

const initialState = {
	cart: { cartItems: cartItemsFromStorage },
};

const middleware = [thunk];

const store = configureStore({
	reducer: reducer,
	preloadedState: initialState,
	middleware: middleware,
});

export default store;
