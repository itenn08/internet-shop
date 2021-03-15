import React, { useContext } from "react";
import { useHistory } from "react-router-dom";
import { AuthContext } from "../../context/AuthContext";

const Logout = () => {
  let history = useHistory();

  const [, setIsAuthorized] = useContext(AuthContext);

  setIsAuthorized(false);

  history.push("/login");

  localStorage.setItem("token", "");

  return <div>Logout</div>;
};

export default Logout;
