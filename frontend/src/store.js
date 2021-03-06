import { createStore, compose, applyMiddleware, combineReducers } from 'redux';
import { userSigninReducer } from './reducers/userReducers';

import thunk from 'redux-thunk';
import {
    productDetailsReducer,
    productListReducer,
} from './reducers/productReducers';
const initialState = {
    userSignin: {
        userInfo: localStorage.getItem('userInfo')
          ? JSON.parse(localStorage.getItem('userInfo'))
          : null,
      },
};
const reducer = combineReducers({
    productList: productListReducer,
    productDetails: productDetailsReducer,
    userSignin: userSigninReducer,


});

const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(
    reducer,
    initialState,
    composeEnhancer(applyMiddleware(thunk))
);

export default store;