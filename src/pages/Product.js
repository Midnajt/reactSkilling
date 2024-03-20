import React from "react";
import { Link } from "react-router-dom";

const PRODUCTS = [
  { id: "p1", title: "Książka" },
  { id: "p2", title: "Film" },
  { id: "p3", title: "Gra" },
];

function Product() {
  return (
    <>
      <h1>Product page</h1>
      <ul>
        {PRODUCTS.map((prod) => (
          <li key={prod.id}>
            <Link to={prod.title} relative="">
              {prod.title}
            </Link>
          </li>
        ))}
      </ul>
    </>
  );
}

export default Product;
