import React, { useEffect } from "react";
import Header from "./components/Header";
import Product from "./components/Product/Product";
import ProductsList from "./components/ProductsList/ProductsList";
import NotFound from "./components/NotFound";
import Footer from "./components/Footer";
import { useDispatch } from "react-redux";
import { loadProducts } from "./redux/actions/product.actions";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "./App.css";

const App = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(loadProducts());
  }, [dispatch]);

  return (
    <Router>
      <Switch>
        <Route exact path="/">
          <Header />
          <Route exact path="/" component={ProductsList} />
          <Footer />
        </Route>
        <Route exact path="/product/:productId?">
          <Header />
          <Route
            exact
            path="/product"
            component={() => <div>Please select product</div>}
          />
          <Route path="/product/:productId" component={Product} />
          <Footer />
        </Route>
        <Route component={NotFound} />
      </Switch>
    </Router>
  );
};

export default App;
