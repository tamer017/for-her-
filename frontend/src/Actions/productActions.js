import Axios from 'axios';
import {
    PRODUCT_LIST_REQUEST,
    PRODUCT_LIST_SUCCESS,
    PRODUCT_DETAILS_REQUEST,
    PRODUCT_DETAILS_SUCCESS
} from '../constants/productConstants';

export const listProducts = () => async(dispatch) => {
    dispatch({
        type: PRODUCT_LIST_REQUEST
    });

    const { data } = await Axios.get('/product');
    dispatch({ type: PRODUCT_LIST_SUCCESS, payload: data });
};
export const detailsProduct = (productId) => async(dispatch) => {
    dispatch({
        type: PRODUCT_DETAILS_REQUEST,
        payload: productId
    });

    const { data } = await Axios.get(`/product/${productId}`);
    dispatch({ type: PRODUCT_DETAILS_SUCCESS, payload: data });
};