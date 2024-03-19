import { useEffect } from "react";

import Cart from "./components/Cart/Cart";
import Layout from "./components/Layout/Layout";
import Products from "./components/Shop/Products";
import { useSelector } from "react-redux";

function App() {
  const showCart = useSelector((state) => state.ui.cartIsVisible);

  const cart = useSelector((state) => state.cart); //nasłuchujemy zmian w cart z reduxa

  useEffect(() => {
    console.log("App.js->useEffect start");
    fetch("https://http-practices-e3d22-default-rtdb.europe-west1.firebasedatabase.app//cart.json", { method: "PUT", body: JSON.stringify(cart) });
    console.log("App.js->useEffect finish");
  }, [cart]);

  return (
    <Layout>
      {showCart && <Cart />}
      <Products />
    </Layout>
  );
}

export default App;
