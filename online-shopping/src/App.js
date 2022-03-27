import React from "react";
import {BrowserRouter, Routes, Route} from "react-router-dom";
import {Provider} from "react-redux";

import HomePage from "./pages/home";
import ShopPage from "./pages/shop";
import SingleProductPage from "./pages/single-product";
import CartPage from "./pages/cart";
import CheckoutPage from "./pages/checkout";
import HeaderComponent from "./components/header";

import "./css/bootstrap.min.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import "./css/font-awesome.min.css";
import "./css/style.css";
import "./css/responsive.css";

import configureStore from "./redux/store/redux-store";
const reduxStore = configureStore();

const App = () => {
  return(
    <Provider store={reduxStore}>
      <BrowserRouter>
        <HeaderComponent></HeaderComponent>
        <Routes>
          <Route path="/" element={<HomePage />}></Route>
          <Route path="products" element={<ShopPage />}></Route>
          <Route path="single-product/:id" element={<SingleProductPage />}></Route>
          <Route path="cart" element={<CartPage />}></Route>
          <Route path="checkout" element={<CheckoutPage />}></Route>
        </Routes>
      </BrowserRouter>
    </Provider>
  )
}

export default App;