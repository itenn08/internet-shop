import React from "react";
import NavItem from "./NavItem";

const Nav = () => (
  <div className="navContainer">
    <NavItem name="Products" href="/" />
    <NavItem name="Login" href="/123/1" />
    <NavItem name="Register" />
  </div>
);

export default Nav;
