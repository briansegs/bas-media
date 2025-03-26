import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router";
import { Actors, Layout, MovieInfo, Movies, Profile } from "./pages";

const router = createBrowserRouter([
  {
    path: "/",
    Component: Layout,
    children: [
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
