import React from "react";
import Header from "./components/Header";
import Product from "./components/Product/Product";
import Footer from "./components/Footer";
import "semantic-ui-css/semantic.min.css";
import "./App.css";

const App = () => (
  <div>
    <Header />
    <Product />
    <Footer />
  </div>
);

export default App;
