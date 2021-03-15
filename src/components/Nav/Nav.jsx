import React, { useContext } from "react";
import { AuthContext } from "../../context/AuthContext";
import NavItem from "./NavItem";

const Nav = () => {
  const [isAuthorized] = useContext(AuthContext);

  return (
    <div className="navContainer">
      <NavItem name="Products" href="/" />
      {isAuthorized ? (
        <NavItem name="Logout" href="/logout" />
      ) : (
        <>
          <NavItem name="Login" href="/login" />
          <NavItem name="Register" href="/register" />
        </>
      )}
    </div>
  );
};

export default Nav;
