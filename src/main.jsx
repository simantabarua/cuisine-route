import React, { Suspense } from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import AuthProvider from "./context/AuthProvider.jsx";
import MainLayout from "./layout/MainLayout.jsx";
import Loading from "./components/Loading/Loading";
import RecipeDetails from "./components/RecipeDetails/RecipeDetails";

const Error = React.lazy(() => import("./pages/ErrorPage/ErrorPage.jsx"));
const Blogs = React.lazy(() => import("./pages/Blogs/Blogs.jsx"));
const Register = React.lazy(() => import("./pages/Register/Register.jsx"));
const Login = React.lazy(() => import("./pages/Login/Login.jsx"));
const PrivateRoute = React.lazy(() =>
  import("./privateRoute/PrivateRoute.jsx")
);
const About = React.lazy(() => import("./pages/About/About.jsx"));
const Home = React.lazy(() => import("./pages/Home/Home.jsx"));
const ChefRecipes = React.lazy(() =>
  import("./pages/ChefRecipes/ChefRecipes.jsx")
);
const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    errorElement: <Error />,
    children: [
      {
        path: "/",
        element: (
          <Suspense fallback={<Loading />}>
            <Home />
          </Suspense>
        ),
      },
      {
        path: "blogs",
        element: (
          <Suspense fallback={<Loading />}>
            <Blogs />
          </Suspense>
        ),
      },
      {
        path: "about",
        element: (
          <Suspense fallback={<Loading />}>
            <About />
          </Suspense>
        ),
      },
      {
        path: "register",
        element: (
          <Suspense fallback={<Loading />}>
            <Register />
          </Suspense>
        ),
      },
      {
        path: "login",
        element: (
          <Suspense fallback={<Loading />}>
            <Login />
          </Suspense>
        ),
      },

      {
        path: "chef/:id",
        element: (
          <Suspense fallback={<Loading />}>
            <PrivateRoute>
              <ChefRecipes />
            </PrivateRoute>
          </Suspense>
        ),
        loader: ({ params }) =>
          fetch(`https://cuisine-route-server.vercel.app/chef/${params.id}`),
      },
      {
        path: "recipe-details/:id",
        element: <RecipeDetails />,
        loader: ({ params }) =>
          fetch(`http://localhost:3000/single-recipe/${params.id}`),
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <AuthProvider>
      <RouterProvider router={router} />
    </AuthProvider>
  </React.StrictMode>
);
