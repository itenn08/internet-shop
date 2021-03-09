import React, { useEffect } from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";
import { useDispatch } from "react-redux";
import Product from "./components/Product/Product";
import ProductsList from "./components/ProductsList/ProductsList";
import NotFound from "./components/NotFound";
import DefaultPage from "./layout/DefaultPage";
import { loadProducts } from "./redux/actions/product.actions";
import "./App.css";

const App = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(loadProducts());
  }, [dispatch]);

  return (
    <Router>
      <Switch>
        <DefaultPage>
          <Route exact path="/" component={ProductsList} />
          <Route exact path="/product/:productId?">
            <Route exact path="/product">
              <Redirect to="/" />
            </Route>
            <Route path="/product/:productId" component={Product} />
          </Route>
        </DefaultPage>
        <Route component={NotFound} />
      </Switch>
    </Router>
  );
};

export default App;
