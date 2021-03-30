import * as USER_TYPES from "./user.types";

export const login = () => ({
  type: USER_TYPES.LOGIN,
  payload: true,
});

export const logout = () => ({
  type: USER_TYPES.LOGOUT,
  payload: false,
});
