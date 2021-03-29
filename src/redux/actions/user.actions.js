import * as USER_TYPES from "./user.types";

export const userLogin = () => ({
  type: USER_TYPES.USER_LOGIN,
  payload: true,
});

export const userLogout = () => ({
  type: USER_TYPES.USER_LOGOUT,
  payload: false,
});
