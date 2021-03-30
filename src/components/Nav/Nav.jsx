import React from "react";
import { useSelector } from "react-redux";
import NavItem from "./NavItem";

const Nav = () => {
  const { isAuthorized } = useSelector((state) => state.user);

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
