import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import App from "./App";
import FrontPage from "./pages/FrontPage";
import StorePage from "./pages/StorePage";
import CollectionsPage from "./pages/CollectionsPage";
const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children:[
      {index:true, element:<FrontPage />},
      {path:'store/:name', element:<StorePage />},
      {path:'store/collections/', element:<CollectionsPage />}
    ]
  },
  
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);