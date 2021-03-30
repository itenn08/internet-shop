import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";
import { logout } from "../../redux/actions/user.actions";
import { STORAGE_TOKEN } from "../../constants/storage";

const Logout = () => {
  const history = useHistory();
  const dispatch = useDispatch();

  useEffect(() => {
    const handleLogout = () => {
      dispatch(logout());
      history.push("/login");
      localStorage.setItem(STORAGE_TOKEN, "");
    };

    handleLogout();
  });

  return <div>Logout</div>;
};

export default Logout;
