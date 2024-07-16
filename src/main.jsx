import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import App from "./App.jsx";
import "./index.css";
import PostOne from "./blogPosts/post1.jsx";
import PostTwo from "./blogPosts/post2.jsx";
import PostThree from "./blogPosts/post3.jsx";
import PostFour from "./blogPosts/post4.jsx";
import PostFive from "./blogPosts/post5.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <div>404 not found</div>,
  },
  {
    path: "/my-first-post",
    element: <PostOne />,
    errorElement: <div>404 not found</div>,
  },
  {
    path: "/my-second-post",
    element: <PostTwo />,
    errorElement: <div>404 not found</div>,
  },
  {
    path: "/my-third-post",
    element: <PostThree />,
    errorElement: <div>404 not found</div>,
  },
  {
    path: "/my-fourth-post",
    element: <PostFour />,
    errorElement: <div>404 not found</div>,
  },
  {
    path: "/my-fifth-post",
    element: <PostFive />,
    errorElement: <div>404 not found</div>,
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
