import React from "react";
import { useState } from "react";
import axios from "axios";
import { useEffect } from "react";

export default function Products() {
  const [products, setProducts] = useState([]);

  async function getProducts() {
    const res = await axios("https://fakestoreapi.com/products");
    setProducts(res.data);
    console.log(res.data);
  }
  useEffect(() => {
    getProducts();
  }, []);

  return <div>Products</div>;
}
