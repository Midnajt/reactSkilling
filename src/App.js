// vvvvv alternatywna wersja vvvvvv
//import { createRoutesFromElements, Route } from "react-router-dom";
// const routeDefinitions = createRoutesFromElements(
//   <Route>
//     <Route path="/" element={<HomePage />}></Route>
//     <Route path="/products" element={<Products />}></Route>
//   </Route>
// );
// const router = createBrowserRouter(routeDefinitions);

// http://example.com ->nazwa omeny
// product -> path
// http://example.com /product

import { createBrowserRouter, RouterProvider } from "react-router-dom";
import HomePage from "./pages/Home";
import Products from "./pages/Product";
import RootLayout from "./pages/Root";
import ErrorPage from "./pages/Error";

const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    errorElement: <ErrorPage />,
    children: [
      { path: "/", element: <HomePage /> },
      { path: "/products", element: <Products /> },
    ],
  },
]);

function App() {
  return <RouterProvider router={router}></RouterProvider>;
}

export default App;
