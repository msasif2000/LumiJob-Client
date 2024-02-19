import React from "react";
import ReactDOM from "react-dom/client";
import ThemeProvider from "./providers/ThemeProvider";
import { RouterProvider } from "react-router-dom";
import "./index.css";
import { router } from "./Routes/Route";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

const queryClient = new QueryClient();

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <ThemeProvider>
      <QueryClientProvider client={queryClient}>
        <RouterProvider router={router} />
      </QueryClientProvider>
    </ThemeProvider>
  </React.StrictMode>
);
