import * as USER_TYPES from "../actions/user.types";

const initialState = {
  isAuthorized: false,
};

export default function user(state = initialState, action) {
  switch (action.type) {
    case USER_TYPES.LOGIN:
      return {
        ...state,
        isAuthorized: true,
      };

    case USER_TYPES.LOGOUT:
      return {
        ...state,
        isAuthorized: false,
      };

    default:
      return state;
  }
}
