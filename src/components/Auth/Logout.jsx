import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";
import { userLogout } from "../../redux/actions/user.actions";

const Logout = () => {
  const history = useHistory();

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(userLogout());
  }, [dispatch]);

  history.push("/login");

  localStorage.setItem("token", "");

  return <div>Logout</div>;
};

export default Logout;
