import React from "react";
import PropTypes from "prop-types";
import Footer from "../components/Footer";
import Header from "../components/Header";

const DefaultPage = ({ children }) => (
  <div className="container">
    <Header />
    <div className="main">{children}</div>
    <Footer />
  </div>
);

DefaultPage.propTypes = {
  children: PropTypes.node,
};

export default DefaultPage;
