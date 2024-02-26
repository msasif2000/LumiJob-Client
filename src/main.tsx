//import React from "react";
import ReactDOM from "react-dom/client";
import ThemeProvider from "./providers/ThemeProvider";
import { RouterProvider } from "react-router-dom";
import "./index.css";
import { router } from "./Routes/Route";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { HelmetProvider } from "react-helmet-async";

const queryClient = new QueryClient();

ReactDOM.createRoot(document.getElementById("root")!).render(
  <ThemeProvider>
    <QueryClientProvider client={queryClient}>
      <HelmetProvider>
        <RouterProvider router={router} />
      </HelmetProvider>
    </QueryClientProvider>
  </ThemeProvider>
);
