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
import Logout from "./components/Auth/Logout";
import DefaultPage from "./layout/DefaultPage";
import Login from "./components/Auth/Login";
import Register from "./components/Auth/Register";
import { loadProducts } from "./redux/actions/product.actions";
import { AuthContextProvider } from "./context/AuthContext";
import "./App.css";

const App = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(loadProducts());
  }, [dispatch]);

  return (
    <AuthContextProvider>
      <Router>
        <Switch>
          <DefaultPage>
            <Route exact path="/" component={ProductsList} />
            <Route exact path="/logout" component={Logout} />
            <Route exact path="/product/:productId?">
              <Route exact path="/product">
                <Redirect to="/" />
              </Route>
              <Route path="/product/:productId" component={Product} />
            </Route>
            <Route exact path="/login" component={Login} />
            <Route exact path="/register" component={Register} />
          </DefaultPage>
          <Route component={NotFound} />
        </Switch>
      </Router>
    </AuthContextProvider>
  );
};

export default App;
