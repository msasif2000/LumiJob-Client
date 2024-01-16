import React from "react";
import ReactDOM from "react-dom/client";
import ThemeProvider from "./providers/ThemeProvider";
import { RouterProvider } from "react-router-dom";
import "./index.css";
import { router } from "./Routes/Route";




ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <ThemeProvider>
      <RouterProvider router={router} />
    </ThemeProvider>
  </React.StrictMode>
);
