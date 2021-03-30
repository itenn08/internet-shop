import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

const NavItem = ({ href, name }) => (
  <Link to={href}>
    <span className="navLink">{name}</span>
  </Link>
);

NavItem.propTypes = {
  name: PropTypes.string,
  href: PropTypes.string,
};

export default NavItem;
