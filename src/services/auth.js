import api from "../utils/api";
import store from "../redux/store";
import { STORAGE_TOKEN } from "../constants/storage";

function UserException(message) {
  this.message = message;
  this.name = "Error";
}

export const register = async ({ username, password, onFailure }) => {
  const response = await api.post("/register/", { username, password });

  if (!response.data.success) {
    onFailure(response.data.message);
    throw new UserException(response.data.message);
  }

  localStorage.setItem(STORAGE_TOKEN, response.data.token);
  store.dispatch({ type: "LOGIN" });
};

export const login = async ({ username, password, onFailure }) => {
  const response = await api.post("/login/", { username, password });

  if (!response.data.success) {
    onFailure(response.data.message);
    throw new UserException(response.data.message);
  }

  localStorage.setItem(STORAGE_TOKEN, response.data.token);
  store.dispatch({ type: "LOGIN" });
};
