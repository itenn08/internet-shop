import React from "react";
import PropTypes from "prop-types";

const NavItem = (props) => <a className="navLink">{props.name}</a>;

NavItem.propTypes = {
  name: PropTypes.string,
};

export default NavItem;
