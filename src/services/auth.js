import api from "../utils/api";
import store from "../redux/store";

function UserException(message) {
  this.message = message;
  this.name = "Error";
}

export const userRegister = async ({ username, password, onFailure }) => {
  const response = await api.post("/register/", { username, password });

  if (!response.data.success) {
    onFailure(response.data.message);
    throw new UserException(response.data.message);
  }

  localStorage.setItem("token", response.data.token);
  store.dispatch({ type: "USER_LOGIN" });
};

export const userLogin = async ({ username, password, onFailure }) => {
  const response = await api.post("/login/", { username, password });

  if (!response.data.success) {
    onFailure(response.data.message);
    throw new UserException(response.data.message);
  }

  localStorage.setItem("token", response.data.token);
  store.dispatch({ type: "USER_LOGIN" });
};
