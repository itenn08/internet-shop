import React from "react";
import Footer from "../components/Footer";
import Header from "../components/Header";
import PropTypes from "prop-types";

const DefaultPage = (props) => (
  <div>
    <Header />
    {props.children}
    <Footer />
  </div>
);

DefaultPage.propTypes = {
  children: PropTypes.object,
};

export default DefaultPage;
