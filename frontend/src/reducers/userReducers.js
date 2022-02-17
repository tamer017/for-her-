import {
  USER_SIGNIN_FAIL,
  USER_SIGNIN_REQUEST,
  USER_SIGNIN_SUCCESS,
  USER_SIGNOUT,
} from '../constants/userConstants';

export const userSigninReducer = (state = {}, action) => {
  switch (action.type) {


    
    case USER_SIGNIN_SUCCESS:
      return {  userInfo: action.payload };
    case USER_SIGNIN_FAIL:
      return { error: action.payload };
    case USER_SIGNOUT:
      return {};
    default:
      return state;
  }
};