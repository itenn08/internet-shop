import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

const NavItem = (props) => (
  <Link to={props.href}>
    <span className="navLink">{props.name}</span>
  </Link>
);

NavItem.propTypes = {
  name: PropTypes.string,
  href: PropTypes.string,
};

export default NavItem;
