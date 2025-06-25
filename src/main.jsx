import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { RouterProvider } from "react-router";
import router from "./Routes/router";
import AuthProvider from "./Providers/AuthProvider";
import GroupsProvider from "./Providers/GroupsProvider";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <AuthProvider>
      <GroupsProvider>
        <RouterProvider router={router}></RouterProvider>
      </GroupsProvider>
    </AuthProvider>
  </StrictMode>
);
