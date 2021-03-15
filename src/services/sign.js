import api from "../utils/api";

function UserException(message) {
  this.message = message;
  this.name = "Error";
}

const sign = async (username, password, authorize, error, request) => {
  let payload = { username, password };
  const response = await api.post(`${request}`, payload);
  if (!response.data.success) {
    authorize(false);
    error(response.data.message);
    throw new UserException(response.data.message);
  }
  localStorage.setItem("token", response.data.token);
  authorize(true);
};

export default sign;
