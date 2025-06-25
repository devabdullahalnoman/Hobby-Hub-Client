import React from "react";
import { createBrowserRouter } from "react-router";
import MainLayout from "../Layouts/MainLayout";
import HomePage from "../Layouts/HomePage";
import Login from "../Components/Login";
import Register from "../Components/Register";
import CreateGroup from "../Components/CreateGroup";
import AllGroups from "../Components/AllGroups";
import MyGroups from "../Components/MyGroups";
import PrivateRoutes from "./PrivateRoutes";
import GroupDetails from "../Components/GroupDetails";
import LoadingSpinner from "../Components/LoadingSpinner";
import UpdateGroup from "../Components/UpdateGroup";
import PageNotFound from "../404Page/PageNotFound";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout></MainLayout>,
    children: [
      {
        index: true,
        path: "/",
        element: <HomePage></HomePage>,
      },
      {
        path: "/login",
        element: <Login></Login>,
      },
      {
        path: "/register",
        element: <Register></Register>,
      },
      {
        path: "/createGroup",
        element: (
          <PrivateRoutes>
            <CreateGroup></CreateGroup>
          </PrivateRoutes>
        ),
      },
      {
        path: "/allGroups",
        element: <AllGroups></AllGroups>,
      },
      {
        path: "/groupDetails/:id",
        loader: ({ params }) =>
          fetch(`https://hobby-hub-server-chi.vercel.app/groups/${params.id}`),
        element: (
          <PrivateRoutes>
            <GroupDetails></GroupDetails>
          </PrivateRoutes>
        ),
        hydrateFallbackElement: <LoadingSpinner></LoadingSpinner>,
      },
      {
        path: "/myGroups",
        element: (
          <PrivateRoutes>
            <MyGroups></MyGroups>
          </PrivateRoutes>
        ),
      },
      {
        path: "/updateGroup/:id",
        loader: ({ params }) =>
          fetch(`https://hobby-hub-server-chi.vercel.app/groups/${params.id}`),
        element: (
          <PrivateRoutes>
            <UpdateGroup></UpdateGroup>
          </PrivateRoutes>
        ),
        hydrateFallbackElement: <LoadingSpinner></LoadingSpinner>,
      },
      {
        path: "/*",
        element: <PageNotFound></PageNotFound>,
      },
    ],
  },
]);

export default router;
