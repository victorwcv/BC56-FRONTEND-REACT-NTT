import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { AppContextProvider } from "./context/AppContextProvider.tsx";
import { router } from "./router.tsx";
import { RouterProvider } from "react-router-dom";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <AppContextProvider>
      <RouterProvider router={router} />
    </AppContextProvider>
  </StrictMode>
);
