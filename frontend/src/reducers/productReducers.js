import {
    PRODUCT_LIST_REQUEST,
    PRODUCT_LIST_SUCCESS,
    PRODUCT_DETAILS_REQUEST,
    PRODUCT_DETAILS_SUCCESS


} from "../constants/productConstants";

export const productListReducer = (
    state = { products: [] },
    action
) => {
    switch (action.type) {

        case PRODUCT_LIST_SUCCESS:
            return { products: action.payload };

        default:
            return state;
    }
};
export const productDetailsReducer = (
    state = { product: {} },
    action
) => {
    switch (action.type) {

        case PRODUCT_DETAILS_SUCCESS:
            return { product: action.payload };

        default:
            return state;
    }
};