import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { Provider } from "react-redux";
import { store } from "./app/store.js";
import { Home , Productpage , Dashboard, Signup  } from "./pages";
import { Filteredproducts, Allcards, Cart , Login, Payment} from "./components/index.js";
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
    path: '/:product_id/details',
    element: <Productpage/>
  },
  {
    path : '/login',
    element : <Login />
  },
  {
    path : '/:user_name/register-payment-method',
    element : <Payment />
  },
  {
    path : '/:user_name/dashboard',
    element : <Dashboard />
  },
  {
    path : '/signup',
    element : <Signup />
  }
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Provider store={store}>
      <RouterProvider router={router} />
    </Provider>
  </React.StrictMode>
);
