import React from "react";
import {BrowserRouter, Routes, Route} from "react-router-dom";

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

const App = () => {
  return(
    <BrowserRouter>
      <HeaderComponent></HeaderComponent>
      <Routes>
        <Route path="/" element={<HomePage />}></Route>
        <Route path="products" element={<ShopPage />}></Route>
        <Route path="single-product" element={<SingleProductPage />}></Route>
        <Route path="cart" element={<CartPage />}></Route>
        <Route path="checkout" element={<CheckoutPage />}></Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App;