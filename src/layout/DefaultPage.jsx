import React from "react";
import PropTypes from "prop-types";
import Footer from "../components/Footer";
import Header from "../components/Header";

const DefaultPage = (props) => (
  <>
    <Header />
    {props.children}
    <Footer />
  </>
);

DefaultPage.propTypes = {
  children: PropTypes.object,
};

export default DefaultPage;
