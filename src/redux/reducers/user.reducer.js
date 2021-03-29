import * as USER_TYPES from "../actions/user.types";

const initialState = {
  isLogin: false,
};

export default function user(state = initialState, action) {
  switch (action.type) {
    case USER_TYPES.USER_LOGIN:
      return {
        ...state,
        isLogin: true,
      };
    
    case USER_TYPES.USER_LOGOUT:
      return {
        ...state,
        isLogin: false,
      };

    default:
      return state;
  }
}
