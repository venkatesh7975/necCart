import React from "react";
import Address from "./components/Address";
import Cart from "./components/Cart";
import Category from "./components/category";
import Login from "./components/Login";
import Search from "./components/Search";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Products from "./components/Products";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/address" element={<Address />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/products" element={<Products />} />
      </Routes>
    </BrowserRouter>
  );
}
