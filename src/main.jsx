import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { Provider } from "react-redux";
import { store } from "./app/store.js";
import { Home } from "./pages";
import { Filteredproducts, Allcards, Cart, Productpage } from "./components/index.js";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "",
        element: <Home />,
        children: [
          {
            path: "",
            element: <Allcards />,
          },
          {
            path: "/filteredProducts/:type",
            element: <Filteredproducts />,
          },
        ],
      }
    ],
  },
  {
    path: '/:user_name/cart',
    element: <Cart/>
  },
  {
    path: '/:product/details',
    element: <Productpage/>
  }
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Provider store={store}>
      <RouterProvider router={router} />
    </Provider>
  </React.StrictMode>
);
