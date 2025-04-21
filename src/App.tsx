import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router";
import { RootErrorBoundary } from "./components/ErrorBoundary";
import { Actors, Layout, MovieInfo, Movies, Profile } from "./pages";
import NotFoundPage from "./pages/NotFoundPage";

const router = createBrowserRouter([
  {
    path: "/",
    Component: Layout,
    errorElement: <RootErrorBoundary />,
    children: [
      {
        path: "*",
        element: <NotFoundPage />,
      },
      { index: true, Component: Movies },
      { path: "movie/:id", Component: MovieInfo },
      { path: "actor/:id", Component: Actors },
      { path: "profile/:id", Component: Profile },
    ],
  },
]);

const App: React.FC = () => {
  return <RouterProvider router={router} />;
};

export default App;
