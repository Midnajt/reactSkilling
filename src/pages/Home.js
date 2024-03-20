import React from "react";
import { Link, useNavigate } from "react-router-dom";

function Home() {
  const navigate = useNavigate();

  function navigationHandler() {
    navigate("products");
  }

  return (
    <>
      <h1>My Home 0_o page</h1>
      <p>
        Go to <Link to="products">The list of products</Link>
      </p>
      <p>
        <button onClick={navigationHandler}>Navigate to products</button>
      </p>
    </>
  );
}

export default Home;
