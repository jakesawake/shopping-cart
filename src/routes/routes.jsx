import CartPage from "../components/CartPage";
import ErrorPage from "../components/ErrorPage";
import HomePage from "../components/HomePage";
import Layout from "../components/Layout";
import ShopPage from "../components/ShopPage";

const routes = [
  {
    path: "/",
    element: <Layout />,
    errorElement: <ErrorPage />,
    children: [
      {
        index: true,
        element: <HomePage />,
      },
      {
        path: "shop",
        element: <ShopPage />,
      },
      {
        path: "cart",
        element: <CartPage />,
      },
      {
        path: "*",
        element: <ErrorPage />,
      },
    ],
  },
];

export default routes;
